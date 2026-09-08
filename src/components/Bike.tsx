"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Image } from "@react-three/drei";
import * as THREE from "three";

import kawasakiImg from "../assets/images/kawasaki.jpg";

export default function BikePlaceholder({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group position={new THREE.Vector3(...position)}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        <group ref={groupRef}>
          <Image 
            url={kawasakiImg} 
            scale={[5, 5]} 
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
