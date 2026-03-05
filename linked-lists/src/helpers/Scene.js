import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
    const { camera } = useThree();
    const [subscribe, get] = useKeyboardControls();
    const worldDirection = new THREE.Vector3()

    useFrame(() => {
        const { forward, backward, right, left } = get();
        camera.getWorldDirection(worldDirection)

        if (forward) {
            camera.position.add(worldDirection.multiplyScalar(0.1))
        }
        // if (forward) {
        //     camera.position.add(worldDirection + new THREE.Vector3(0, 0, 1))
        // }
        if (backward) camera.position.add(worldDirection.multiplyScalar(-0.1))
        //right hand rule - first vector and then curl all fingers in direction of 2nd vector
        if (left) {
            // Cross product of Up and Forward = Left
            const leftVector = new THREE.Vector3()
                .crossVectors(camera.up, worldDirection)
                .normalize();
            camera.position.add(leftVector.multiplyScalar(0.1));
        }

        if (right) {
            // Cross product of Forward and Up = Right
            const rightVector = new THREE.Vector3()
                .crossVectors(worldDirection, camera.up)
                .normalize();
            camera.position.add(rightVector.multiplyScalar(0.1));
        }
    })
}


export default Scene