import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
    const ref = useRef<any>(null);

    const sphere = useMemo(() => {
        const points = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            const r = 25;
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            points[i * 3 + 2] = r * Math.cos(phi);
        }
        return points;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#5ceadb"
                    size={0.07}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

function MovingGrid() {
    const gridRef = useRef<any>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (gridRef.current) {
            gridRef.current.position.z = (t * 2) % 10;
        }
    });

    return (
        <group ref={gridRef} position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <gridHelper args={[100, 40, "#333", "#111"]} />
        </group>
    );
}

function FloatingShapes() {
    return (
        <>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[1.5, 64, 64]} position={[6, 3, -8]}>
                    <MeshDistortMaterial
                        color="#3b82f6"
                        speed={2}
                        distort={0.45}
                        radius={1}
                        emissive="#3b82f6"
                        emissiveIntensity={0.3}
                    />
                </Sphere>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[-8, -4, -10]}>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial
                        color="#8b5cf6"
                        wireframe
                        emissive="#8b5cf6"
                        emissiveIntensity={0.5}
                    />
                </mesh>
            </Float>

            <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[0, 0, -15]}>
                    <torusKnotGeometry args={[10, 3, 100, 16]} />
                    <meshStandardMaterial
                        color="#5ceadb"
                        wireframe
                        transparent
                        opacity={0.05}
                    />
                </mesh>
            </Float>
        </>
    );
}

const Scene = () => {
    return (
        <div className="canvas-container" style={{ background: 'radial-gradient(circle at 50% 50%, #0d121d 0%, #080b11 100%)' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#5ceadb" />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
                <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} color="#8b5cf6" />

                <StarField />
                <MovingGrid />
                <FloatingShapes />

                <fog attach="fog" args={['#080b11', 10, 35]} />
            </Canvas>
        </div>
    );
};

export default Scene;
