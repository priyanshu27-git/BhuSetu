import { MapPinned } from 'lucide-react'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="mb-6 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
          <MapPinned aria-hidden="true" size={30} />
        </div>
        <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">BhuSetu</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Land acquisition, connected.</h1>
        <p className="mt-4 text-slate-600">
          The frontend foundation is ready. Authentication, projects, parcels, mapping, and workflow
          features will be added incrementally.
        </p>
      </section>
    </main>
  )
}

export default App
