import { Users, Building2, FileText } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: string
  label: string
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-green-500">{icon}</div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-muted-foreground text-sm">{label}</div>
      </div>
    </div>
  )
}

export function BusinessStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">
              Helping a local{" "}
              <span className="text-green-500">business reinvent itself</span>
            </h2>
            <p className="text-muted-foreground">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            <StatItem
              icon={<Users className="w-8 h-8" />}
              value="2,245,341"
              label="Members"
            />
            <StatItem
              icon={<Building2 className="w-8 h-8" />}
              value="46,328"
              label="Clubs"
            />
            <StatItem
              icon={<FileText className="w-8 h-8" />}
              value="828,867"
              label="Event Bookings"
            />
            <StatItem
              icon={<FileText className="w-8 h-8" />}
              value="1,926,436"
              label="Payments"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
