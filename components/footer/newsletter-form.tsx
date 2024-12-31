export function NewsletterForm() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-white">Stay up to date</h3>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          →
        </button>
      </form>
    </div>
  )
}
