"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Image } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const PlaneAnimation = () => {
  const planeRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [angle, setAngle] = useState(0);

  const planeSpeed = 0.001; // Kecepatan pesawat lebih lambat
  const radius = 0.5; // Radius gerakan pesawat

  const planeTexture = "./pesawat.gif"; // Ganti dengan URL gambar pesawat

  useFrame((state, delta) => {
    // Pergerakan pesawat di sepanjang jalur melengkung
    const newAngle = angle + planeSpeed; 
    const newPosX = Math.cos(newAngle) * radius;
    const newPosY = Math.sin(newAngle) * radius;

    // Update posisi pesawat
    setPosition([newPosX, newPosY, 0]);

    // Menghitung arah pesawat berdasarkan posisi baru
    const targetAngle = Math.atan2(newPosY, newPosX); // Menghitung sudut arah gerakan pesawat

    // Smooth rotation to the new direction
    const currentRotation = planeRef.current.rotation.z;
    const rotationSpeed = 0.1; // Kecepatan rotasi pesawat untuk perubahan halus
    let newRotation = currentRotation + rotationSpeed * (targetAngle - currentRotation);
    newRotation = Math.atan2(Math.sin(newRotation), Math.cos(newRotation)); // Menjaga rotasi dalam rentang -PI to PI

    // Rotasi pesawat agar selalu menghadap ke arah pergerakan
    if (planeRef.current) {
      planeRef.current.rotation.z = newRotation; // Rotasi pesawat agar menghadap ke depan
    }

    setAngle(newAngle); // Perbarui sudut untuk pergerakan berikutnya
  });

  return (
    <>
      <group ref={planeRef}>
        {/* Menggunakan gambar untuk pesawat */}
        <Image url={planeTexture} position={position} scale={[0.1, 0.1, 1]} />
      </group>
    </>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <PlaneAnimation />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
