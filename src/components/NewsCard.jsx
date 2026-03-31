import { Link } from 'react-router-dom'
import { urlFor } from '../lib/sanity'
import { Calendar, ArrowRight } from 'lucide-react'

const categoryStyles = {
  news: { label: 'News', cls: 'bg-[#426780] text-white' },
  event: { label: 'Event', cls: 'bg-[#39A84F] text-white' },
  project: { label: 'Project Update', cls: 'bg-orange-500 text-white' },
}

export default function NewsCard({ post }) {
  const cat = categoryStyles[post.category] || { label: post.category, cls: 'bg-gray-500 text-white' }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Cover image */}
      <div className="h-48 bg-gradient-to-br from-[#426780] to-[#1a2e3b] overflow-hidden">
        {post.coverImage ? (
          <img
            src={urlFor(post.coverImage).width(600).height(300).url()}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">📰</div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cat.cls}`}>{cat.label}</span>
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Calendar size={11} /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>

        <h3 className="font-bold text-[#1a2e3b] text-base leading-snug mb-2">{post.title}</h3>

        {post.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
        )}

        <Link to={`/news/${post.slug.current}`}
          className="text-[#39A84F] font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-3 transition-all mt-auto">
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
