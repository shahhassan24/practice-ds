import { Canvas } from '@react-three/fiber'
import LinkedList, { DoubleLinkedList } from './components/LinkedList/helper';
import { OrbitControls, GizmoHelper, GizmoViewport, KeyboardControls, Text } from "@react-three/drei";
import Scene from './helpers/Scene';
import Sidebar from './components/Sidebar';
import * as THREE from 'three';
import { useState, useRef } from 'react';

function App() {

  const map = [
    { name: "forward", keys: ["w", "ArrowUp"] },
    { name: "backward", keys: ["s", "ArrowDown"] },
    { name: "left", keys: ["a", "ArrowLeft"] },
    { name: "right", keys: ["d", "ArrowRight"] },
  ];


  // Initialize the list using useRef so it survives re-renders
  const linkedListRef = useRef(new LinkedList());
  const doublyLinkedListRef = useRef(new DoubleLinkedList());

  const [triggerCount, setTriggerCount] = useState(0);

  const head = linkedListRef.current.getAll()
  let size = linkedListRef.current.getSize()

  const doublyHead = doublyLinkedListRef.current.getAll()
  let doublysize = doublyLinkedListRef.current.getSize()



  const createLinkedList = (size, head, index = 0, xOffset = 0) => {
    if (size === 0) return null
    const boxSize = 1;
    const gap = 2;

    const arrowDir = new THREE.Vector3(1, 0, 0);
    const arrowOrigin = new THREE.Vector3(xOffset + boxSize / 2, 1, 0);
    const arrowLength = gap - boxSize;

    return (
      <group key={index}>
        <mesh position={[xOffset, 1, 0]}>
          <boxGeometry args={[boxSize, boxSize, boxSize]} />
          <meshPhongMaterial color="#4A90E2" />
        </mesh>

        <Text
          position={[xOffset, 1, boxSize / 2 + 0.01]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {head.data}
        </Text>

        {size > 1 && (
          <primitive object={new THREE.ArrowHelper(arrowDir, arrowOrigin, arrowLength, 0xffff00, 0.3, 0.2)} />
        )}

        {createLinkedList(size - 1, head.next, index + 1, xOffset + gap)}
      </group>
    )
  }


  const createDoublyLinkedList = (size, head, index = 0, xOffset = 0) => {
    if (size === 0) return null
    const boxSize = 1;
    const gap = 2;

    // Next arrow
    const arrowDir = new THREE.Vector3(1, 0, 0);
    const arrowOrigin = new THREE.Vector3(xOffset + boxSize / 2, 1.2, 0); // Offset up slightly
    const arrowLength = gap - boxSize;

    // Previous arrow
    const backArrowDir = new THREE.Vector3(-1, 0, 0);
    const backArrowOrigin = new THREE.Vector3(xOffset + gap - boxSize / 2, 0.8, 0); // Offset down slightly and start from next box
    const backArrowLength = gap - boxSize;

    return (
      <group key={index}>
        <mesh position={[xOffset, 1, 0]}>
          <boxGeometry args={[boxSize, boxSize, boxSize]} />
          <meshPhongMaterial color="#4A90E2" />
        </mesh>

        <Text
          position={[xOffset, 1, boxSize / 2 + 0.01]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {head.data}
        </Text>

        {size > 1 && (
          <primitive object={new THREE.ArrowHelper(arrowDir, arrowOrigin, arrowLength, 0xffff00, 0.3, 0.2)} />
        )}

        {size > 1 && (
          <primitive object={new THREE.ArrowHelper(backArrowDir, backArrowOrigin, backArrowLength, 0xFFFF69B4, 0.3, 0.2)} />
        )}

        {createDoublyLinkedList(size - 1, head.next, index + 1, xOffset + gap)}
      </group>
    )

  }

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", backgroundColor: "#121212" }}>
      <Sidebar
        linkedListInstance={linkedListRef.current}
        onListUpdate={() => setTriggerCount(prev => prev + 1)}
        doublyLinkedListInstance={doublyLinkedListRef.current}
      />

      {/* Canvas Area */}
      <div style={{ flex: 1, position: "relative" }}>

        <KeyboardControls map={map}>
          <Canvas camera={{ position: [0, 0, 10] }}>

            <GizmoHelper alignment='bottom-left'>
              <GizmoViewport />
            </GizmoHelper>
            <gridHelper args={[20, 20, 0x444444, 0x222222]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} color="white" intensity={1} />

            {/* Render Singly Linked List at Z = 0 */}
            <group position={[0, 0, 0]}>
              {createLinkedList(size, head)}
            </group>

            {/* Render Doubly Linked List shifted forward on Z axis (e.g. Z = 3) */}
            <group position={[0, 0, 3]}>
              {createDoublyLinkedList(doublysize, doublyHead)}
            </group>

            <OrbitControls />
            <Scene />

          </Canvas>
        </KeyboardControls>
      </div>
    </div>
  )
}


export default App
