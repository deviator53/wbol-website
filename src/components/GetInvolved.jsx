import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

export default function GetInvolved() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello WBOF,\n\nName: ${form.name}\nEmail: ${form.email}\nInterest: ${form.interest || "General enquiry"}\n\n${form.message}`,
    );
    window.open(`https://wa.me/2348037871140?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
        {/* Left — CTA content */}
        <div>
          <span className="section-label">Get Involved</span>
          <h2 className="section-title">
            Join Us in{" "}
            <span className="text-[#39A84F]">Making a Difference</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Whether you want to volunteer, partner, or simply reach out — we are
            a charity-driven foundation bringing clean water, education, and
            environmental care to communities across Nigeria at no cost.
          </p>

          <div className="space-y-4">
            {[
              {
                emoji: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="rgba(57,168,79,1)"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z M11 7H9V5h2v2zm4 0h-2V5h2v2z M12 21.5C6.21 21.5 1.5 16.79 1.5 11S6.21.5 12 .5 22.5 5.21 22.5 11 17.79 21.5 12 21.5zM8 10l4-4 4 4h-3v4h-2v-4z" />
                  </svg>
                ),
                title: "Free Charity Services",
                desc: "All our programmes — boreholes, school renovations, clean-ups — are provided free to communities in need.",
              },
              {
                emoji: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="rgba(57,168,79,1)"
                  >
                    <path d="M14.1213 10.4792C13.7308 10.0886 13.0976 10.0886 12.7071 10.4792L12 11.1863C11.2189 11.9673 9.95259 11.9673 9.17154 11.1863C8.39049 10.4052 8.39049 9.13888 9.17154 8.35783L14.8022 2.72568C16.9061 2.24973 19.2008 2.83075 20.8388 4.46875C23.2582 6.88811 23.3716 10.7402 21.1792 13.2939L19.071 15.4289L14.1213 10.4792ZM3.16113 4.46875C5.33452 2.29536 8.66411 1.98283 11.17 3.53116L7.75732 6.94362C6.19523 8.50572 6.19523 11.0384 7.75732 12.6005C9.27209 14.1152 11.6995 14.1611 13.2695 12.7382L13.4142 12.6005L17.6568 16.8431L13.4142 21.0858C12.6331 21.8668 11.3668 21.8668 10.5858 21.0858L3.16113 13.6611C0.622722 11.1227 0.622722 7.00715 3.16113 4.46875Z"></path>
                  </svg>
                ),
                title: "Partner With Us",
                desc: "NGOs, corporates, and government agencies are welcome.",
              },
              {
                emoji: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="rgba(57,168,79,1)"
                  >
                    <path d="M12.5002 2C12.2241 2 12.0002 2.22386 12.0002 2.5V12H10.0002V4.5C10.0002 4.22386 9.77634 4 9.5002 4C9.22405 4 9.0002 4.22386 9.0002 4.5V14C8.64653 14 7.00024 14 7.00024 14C6.61911 12.3792 5.64236 11.4407 4.5954 11.3216C4.87926 12.0664 5.36117 13.2592 6.16634 15.0995C7.02511 17.0622 7.89128 18.5218 9.00374 19.4986C10.0783 20.442 11.4586 21 13.5002 21C16.5378 21 19.0002 18.5377 19.0002 15.5002V7C19.0002 6.72386 18.7763 6.5 18.5002 6.5C18.2241 6.5 18.0002 6.72386 18.0002 7V12H16.0002V4C16.0002 3.72386 15.7763 3.5 15.5002 3.5C15.2241 3.5 15.0002 3.72386 15.0002 4V12H13.0002V2.5C13.0002 2.22386 12.7763 2 12.5002 2ZM21.0002 15.5002C21.0002 19.6424 17.6423 23 13.5002 23C11.0417 23 9.17214 22.308 7.68416 21.0015C6.23411 19.7283 5.22528 17.9381 4.33405 15.9012C3.40393 13.7753 2.89004 12.4804 2.60991 11.7235C2.25318 10.7597 2.74616 9.41212 4.08583 9.31846C5.24076 9.23771 6.22061 9.61249 7.0002 10.2587V4.5C7.0002 3.11929 8.11949 2 9.5002 2C9.68522 2 9.86554 2.0201 10.0391 2.05823C10.2477 0.888227 11.2702 0 12.5002 0C13.5602 0 14.4661 0.659694 14.8298 1.59091C15.0431 1.53167 15.268 1.5 15.5002 1.5C16.8809 1.5 18.0002 2.61929 18.0002 4V4.55001C18.1618 4.51722 18.329 4.5 18.5002 4.5C19.8809 4.5 21.0002 5.61929 21.0002 7V15.5002Z"></path>
                  </svg>
                ),
                title: "Volunteer",
                desc: "Join our field teams or support remotely with your skills.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#39A84F]/40 transition-colors"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h4 className="font-semibold text-[#1a2e3b] text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Contact form */}
        <div className="bg-[#f4f8f5] rounded-2xl p-8">
          <h3 className="font-bold text-[#1a2e3b] text-lg mb-6">
            Send Us a Message
          </h3>

          {sent ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <p className="font-semibold text-[#1a2e3b]">
                Thank you for reaching out!
              </p>
              <p className="text-gray-500 text-sm mt-1">
                We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#39A84F] bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#39A84F] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">
                  I want to
                </label>
                <select
                  value={form.interest}
                  onChange={(e) =>
                    setForm({ ...form, interest: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#39A84F] bg-white text-gray-600"
                >
                  <option value="">Select an option</option>
                  <option value="charity">Request Free Charity Service</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="partner">Partner with WBOF</option>
                  <option value="info">Request Information</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#39A84F] bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#39A84F] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#2d8a3e] transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
