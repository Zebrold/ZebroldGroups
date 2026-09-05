/** Restrained studio lighting — soft neutral ambient + a gentle key light, no drama, no color casts. */
export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.65} color="#ffffff" />
      <directionalLight position={[3, 4, 5]} intensity={0.5} color="#ffffff" />
      <directionalLight position={[-4, -1.5, -3]} intensity={0.1} color="#ffffff" />
    </>
  );
}
