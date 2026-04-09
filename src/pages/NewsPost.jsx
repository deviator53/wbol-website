import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";
import { Calendar, ArrowLeft, Tag } from "lucide-react";

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title, category, date, coverImage, excerpt, body
}`;

const categoryStyles = {
  news: { label: "News", cls: "bg-[#426780] text-white" },
  event: { label: "Event", cls: "bg-[#39A84F] text-white" },
  project: { label: "Project Update", cls: "bg-orange-500 text-white" },
};

function renderBody(blocks) {
  if (!blocks) return null;
  return blocks.map((block, i) => {
    if (block._type === "image") {
      return (
        <img
          key={i}
          src={urlFor(block).width(900).url()}
          alt=""
          className="rounded-xl my-6 w-full object-cover"
        />
      );
    }
    if (block._type !== "block") return null;
    const text = block.children?.map((c) => c.text).join("");
    switch (block.style) {
      case "h2":
        return (
          <h2 key={i} className="text-2xl font-bold text-[#1a2e3b] mt-8 mb-3">
            {text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={i} className="text-xl font-bold text-[#1a2e3b] mt-6 mb-2">
            {text}
          </h3>
        );
      case "blockquote":
        return (
          <blockquote
            key={i}
            className="border-l-4 border-[#39A84F] pl-4 italic text-gray-500 my-4"
          >
            {text}
          </blockquote>
        );
      default:
        return (
          <p key={i} className="text-gray-600 leading-relaxed mb-4">
            {text}
          </p>
        );
    }
  });
}

export default function NewsPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(QUERY, { slug }).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading)
    return <div className="text-center py-32 text-gray-400">Loading...</div>;
  if (!post)
    return (
      <div className="text-center py-32 text-gray-500">Post not found.</div>
    );

  const cat = categoryStyles[post.category] || {
    label: post.category,
    cls: "bg-gray-500 text-white",
  };

  return (
    <main>
      {/* Cover */}
      <div className="h-[75vh] md:h-[85vh] bg-gradient-to-br from-[#1a2e3b] to-[#426780] overflow-hidden relative">
        {post.coverImage && (
          <img
            src={urlFor(post.coverImage).width(1200).height(900).url()}
            alt={post.title}
            className="w-full h-full object-cover object-top opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#39A84F] text-sm font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={15} /> Back to News &amp; Events
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${cat.cls}`}
            >
              {cat.label}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <Calendar size={11} />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a2e3b] leading-tight mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-gray-500 text-base leading-relaxed mb-8 border-l-4 border-[#39A84F] pl-4 italic">
              {post.excerpt}
            </p>
          )}

          <div className="prose max-w-none">{renderBody(post.body)}</div>
        </div>
      </section>
    </main>
  );
}
