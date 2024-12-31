import Image from "next/image"

export function ClientLogos() {
  const logos = [
    "/images/clients/logo1.svg",
    "/images/clients/logo2.svg",
    "/images/clients/logo3.svg",
    "/images/clients/logo4.svg",
    "/images/clients/logo5.svg",
    "/images/clients/logo6.svg",
  ]

  return (
    <div className="flex gap-6 items-center mb-4">
      {logos.map((logo, index) => (
        <div key={index} className="w-8 h-8">
          <Image
            src={logo}
            alt={`Client Logo ${index + 1}`}
            width={32}
            height={32}
            className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  )
}
