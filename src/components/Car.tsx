"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Image } from "@react-three/drei";
import * as THREE from "three";

import ferrariImg from "../assets/images/ferrari.jpg";

export default function CarPlaceholder({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group position={new THREE.Vector3(...position)}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <group ref={groupRef}>
          <Image 
            url={ferrariImg} 
            scale={[6, 6]} 
            transparent 
            opacity={0.95} 
            radius={0.2} 
            side={THREE.DoubleSide} 
          />
        </group>
      </Float>
    </group>
  );
}
