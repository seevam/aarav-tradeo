export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1525] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#00d09c] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-semibold">Tradeo</span>
            </div>
            <p className="text-white/60 text-[14px] leading-relaxed mb-6">
              Empowering the next generation of Southeast Asian investors through gamified learning and risk-free practice.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['𝕏', '📘', '📷', '▶️'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#00d09c] rounded-md flex items-center justify-center transition-colors text-lg"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-[15px] mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'How it Works', 'Pricing', 'FAQ', 'Roadmap'].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white transition-colors text-[14px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-[15px] mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Press', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-[15px] mb-4">Legal</h3>
            <ul className="space-y-3">
              {['Privacy', 'Terms', 'Security', 'Cookies'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <div>
            © {currentYear} Tradeo. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Made for Southeast Asia</span>
            <div className="flex gap-2">
              {['🇮🇩', '🇹🇭', '🇻🇳', '🇵🇭', '🇲🇾', '🇸🇬'].map((flag, index) => (
                <span key={index}>{flag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
