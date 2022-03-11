import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Stars,
  OrbitControls,
  Environment,
  Lightformer,
  Float
} from "@react-three/drei";
import Model from "../Scene.js";

export default function Index() {
  return (
    <Canvas>
      <color attach="background" args={["#050505"]} />
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={0.2} />

      <Stars />
      <Suspense fallback={null}>
        <Model scale={0.333} position={[0, 1, 0]} />
      </Suspense>
      <OrbitControls />
      <Environment>
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={2} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
        <Lightformer
          intensity={0.75}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <Lightformer
          intensity={4}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[20, 0.1, 1]}
        />
        <Lightformer
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[20, 0.5, 1]}
        />
        <Lightformer
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[20, 1, 1]}
        />
      </Environment>
    </Canvas>
  );
}
