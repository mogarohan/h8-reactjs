"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { Suspense } from "react";
import BikePlaceholder from "./Bike";
import CarPlaceholder from "./Car";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 2, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#0a0a0a"]} />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
          
          <OrbitControls enableZoom={false} enablePan={false} />
          


          <EffectComposer>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
