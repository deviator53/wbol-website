import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";
import { Calendar, ArrowLeft } from "lucide-react";

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title, category, date, coverImage, coverVideo, coverVideoFile{ asset->{ url } }, excerpt,
  body[] {
    ...,
    _type == "videoUpload" => {
      ...,
      file { asset->{ url } }
    }
  }
}`;

const categoryStyles = {
  news: { label: "News", cls: "bg-[#426780] text-white" },
  event: { label: "Event", cls: "bg-[#39A84F] text-white" },
  project: { label: "Project Update", cls: "bg-orange-500 text-white" },
};

function toEmbedUrl(url) {
  if (!url) return null;
  // YouTube
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  // Vimeo
  const vm = url.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return url;
}

function VideoEmbed({ url, caption }) {
  const embedUrl = toEmbedUrl(url);
  if (!embedUrl) return null;
  return (
    <figure className="my-6">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={caption || 'Video'}
        />
      </div>
      {caption && <figcaption className="text-center text-xs text-gray-400 mt-2">{caption}</figcaption>}
    </figure>
  );
}

function renderBody(blocks) {
  if (!blocks) return null;
  return blocks.map((block, i) => {
    if (block._type === "image") {
      if (!block.asset) return null;
      return (
        <img
          key={i}
          src={urlFor(block).width(900).url()}
          alt=""
          className="rounded-xl my-6 w-full object-cover"
        />
      );
    }
    if (block._type === "videoEmbed") {
      return <VideoEmbed key={i} url={block.url} caption={block.caption} />;
    }
    if (block._type === "videoUpload") {
      const fileUrl = block.file?.asset?.url;
      if (!fileUrl) return null;
      return (
        <figure key={i} className="my-6">
          <video
            src={fileUrl}
            controls
            className="w-full rounded-xl"
            preload="metadata"
          />
          {block.caption && (
            <figcaption className="text-center text-xs text-gray-400 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
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
      <div className="h-[55vh] md:h-[65vh] bg-gradient-to-br from-[#1a2e3b] to-[#426780] overflow-hidden relative">
        {post.coverVideo ? (
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16">
            <div className="relative w-full max-w-4xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={toEmbedUrl(post.coverVideo)}
                className="absolute inset-0 w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={post.title}
              />
            </div>
          </div>
        ) : post.coverVideoFile?.asset?.url ? (
          <video
            src={post.coverVideoFile.asset.url}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
        ) : (
          <>
            {post.coverImage?.asset && (
              <img
                src={urlFor(post.coverImage).width(1600).height(700).fit('crop').crop('center').url()}
                alt={post.title}
                className="w-full h-full object-cover object-center opacity-60"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        )}
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
