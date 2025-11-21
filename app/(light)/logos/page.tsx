import Image from "next/image";

export default function LogosPage() {
  // Generate array of logo numbers 1-20
  const logoNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="bg-white min-h-screen font-heading pb-20">
      {/* Logos Grid Section */}
      <div className="w-full flex flex-col items-center pt-12 md:pt-20 px-4">
        <div className="w-full max-w-[1676px]">
          {/* Grid of logos - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {logoNumbers.map((num) => (
              <div
                key={num}
                className="relative w-full aspect-square max-w-[350px] mx-auto"
              >
                <div className="w-full h-full p-8 flex items-center justify-center bg-white">
                  <Image
                    src={`/logos/logo${num}.svg`}
                    alt={`Logo ${num}`}
                    width={350}
                    height={350}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
