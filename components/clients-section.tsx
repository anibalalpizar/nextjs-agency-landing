import Image from "next/image"

export function ClientsSection() {
  const clients = [
    "/images/clients/logo1.svg",
    "/images/clients/logo2.svg",
    "/images/clients/logo3.svg",
    "/images/clients/logo4.svg",
    "/images/clients/logo5.svg",
    "/images/clients/logo6.svg",
    "/images/clients/logo7.svg",
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-muted-foreground">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="w-24 h-12 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={96}
                height={48}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
