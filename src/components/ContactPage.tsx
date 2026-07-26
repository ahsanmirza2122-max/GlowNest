import React, { useState } from 'react';
import { Mail, MessageSquare, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: "Does GlowNest sell or ship products directly?",
      a: "No. GlowNest is an editorial curation platform. When you click 'View on AliExpress', you are seamlessly redirected to AliExpress.com, where you complete your secure order and enjoy AliExpress Choice shipping benefits."
    },
    {
      q: "How are products selected for GlowNest?",
      a: "Our editorial team evaluates product build materials, verified AliExpress customer reviews, social media sentiment (TikTok/Pinterest), and performs hands-on testing before listing any item."
    },
    {
      q: "Can brands submit products for review consideration?",
      a: "Yes! Select 'PR & Brand Collaboration' in the contact topic dropdown below to share details with our curation team."
    },
    {
      q: "Are product prices guaranteed?",
      a: "AliExpress prices and promotional discounts change dynamically. We recommend checking the live price link on AliExpress before completing your checkout."
    }
  ];

  return (
    <div className="py-16 bg-[#121214]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] block">
            We'd Love to Hear From You
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F3EF]">
            Get in Touch with GlowNest
          </h1>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
            Have a product recommendation, brand inquiry, or general question? Send us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#18181C] rounded-3xl p-8 border border-[#27272A] shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-[#27272A] text-[#C8A96A] flex items-center justify-center mx-auto border border-[#3F3F46]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F7F3EF]">Message Received!</h3>
                <p className="text-xs text-[#A1A1AA] font-light max-w-md mx-auto">
                  Thank you for reaching out to GlowNest. One of our editorial curators will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#C8A96A] text-[#121214] text-xs font-bold hover:bg-[#EFB7C8] transition-colors mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#A1A1AA] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Evelyn Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#121214] text-xs text-[#F7F3EF] px-4 py-3 rounded-xl border border-[#27272A] focus:outline-none focus:border-[#C8A96A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A1A1AA] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. evelyn@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121214] text-xs text-[#F7F3EF] px-4 py-3 rounded-xl border border-[#27272A] focus:outline-none focus:border-[#C8A96A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A1A1AA] mb-1">Topic</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#121214] text-xs text-[#F7F3EF] px-4 py-3 rounded-xl border border-[#27272A] focus:outline-none focus:border-[#C8A96A]"
                  >
                    <option className="bg-[#18181C]">General Inquiry</option>
                    <option className="bg-[#18181C]">PR & Brand Collaboration</option>
                    <option className="bg-[#18181C]">Product Recommendation Request</option>
                    <option className="bg-[#18181C]">Affiliate & Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A1A1AA] mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#121214] text-xs text-[#F7F3EF] p-4 rounded-xl border border-[#27272A] focus:outline-none focus:border-[#C8A96A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#C8A96A] hover:bg-[#EFB7C8] text-[#121214] text-xs font-bold transition-all shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Quick Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#18181C] rounded-3xl p-6 border border-[#27272A] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#27272A] text-[#C8A96A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F7F3EF]">Direct Email</p>
                  <p className="text-xs text-[#A1A1AA]">hello@glownest.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#27272A] text-[#EFB7C8]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F7F3EF]">Social Channels</p>
                  <p className="text-xs text-[#A1A1AA]">@GlowNestFinds on Pinterest & Instagram</p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-[#18181C] rounded-3xl p-6 border border-[#27272A] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-[#27272A] pb-3">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left flex items-center justify-between text-xs font-bold text-[#F7F3EF] hover:text-[#C8A96A] transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#C8A96A]" /> : <ChevronDown className="w-4 h-4 text-[#A1A1AA]" />}
                    </button>
                    {openFaq === idx && (
                      <p className="text-xs text-[#A1A1AA] font-light mt-2 leading-relaxed animate-in fade-in">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
