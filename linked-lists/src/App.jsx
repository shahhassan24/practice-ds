import { Canvas } from '@react-three/fiber'
import LinkedList from './components/LinkedList/helper';
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
  const [triggerCount, setTriggerCount] = useState(0);

  const head = linkedListRef.current.getAll()
  let size = linkedListRef.current.getSize()
  // console.log("this is running, size:", orderReverse)

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

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", backgroundColor: "#121212" }}>
      <Sidebar
        linkedListInstance={linkedListRef.current}
        onListUpdate={() => setTriggerCount(prev => prev + 1)}
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

            {createLinkedList(size, head)}

            <OrbitControls />
            <Scene />

          </Canvas>
        </KeyboardControls>
      </div>
    </div>
  )
}


export default App
