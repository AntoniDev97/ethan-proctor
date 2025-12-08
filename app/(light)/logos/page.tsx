import Image from "next/image";
import Container from "@/app/components/layout/Container";
import * as motion from "motion/react-client";

export default function LogosPage() {
  // Generate array of logo numbers 1-20
  const logoNumbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="bg-white min-h-screen font-heading pb-20">
      {/* Logos Grid Section */}
      <div className="pt-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
            <div className="md:col-start-2 md:col-span-10">
              {/* Grid of logos - 4 columns */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {logoNumbers.map((num) => (
                  <motion.div
                    key={num}
                    className="relative w-full aspect-square"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                  >
                    <div className="w-full h-full p-5 flex items-center justify-center bg-white">
                      <Image
                        src={`/logos/logo${num}.svg`}
                        alt={`Logo ${num}`}
                        width={350}
                        height={350}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
