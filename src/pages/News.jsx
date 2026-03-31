import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import NewsCard from '../components/NewsCard'

const QUERY = `*[_type == "post"] | order(date desc) {
  _id, title, slug, category, date, excerpt, coverImage
}`

const filters = [
  { label: 'All', value: 'all' },
  { label: 'News', value: 'news' },
  { label: 'Events', value: 'event' },
  { label: 'Project Updates', value: 'project' },
]

export default function NewsPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('all')

  useEffect(() => {
    client.fetch(QUERY)
      .then(data => {
        console.log('Fetched posts:', data)
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Sanity fetch error:', err)
        setLoading(false)
      })
  }, [])

  const filtered = active === 'all' ? posts : posts.filter(p => p.category === active)

  return (
    <main>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a2e3b] to-[#426780] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <span className="text-[#7de896] text-xs font-semibold uppercase tracking-widest block mb-3">Stay Updated</span>
          <h1 className="text-4xl font-extrabold mb-4">News <span className="text-[#39A84F]">&amp; Events</span></h1>
          <p className="text-white/75 max-w-xl text-sm leading-relaxed">
            Latest updates, project news, and upcoming events from WBOF.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f4f8f5]">
        <div className="max-w-6xl mx-auto px-5">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map(f => (
              <button key={f.value} onClick={() => setActive(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === f.value
                    ? 'bg-[#39A84F] text-white'
                    : 'bg-white text-gray-600 hover:border-[#39A84F] border border-gray-200'
                }`}>
                {f.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-400">Loading posts...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-500 font-medium">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
              {filtered.map(post => <NewsCard key={post._id} post={post} />)}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
