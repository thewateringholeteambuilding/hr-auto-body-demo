import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | HR Auto Body"
        description="This page does not exist."
        noindex
      />

      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <p className="text-7xl font-bold text-navy/15">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy">Page not found</h1>
        <p className="mt-2 text-muted max-w-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-card hover:bg-navy/90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </>
  )
}
