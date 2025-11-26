export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-dark] text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[--color-primary] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">Tradeo</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering the next generation of Southeast Asian investors through gamified learning and risk-free practice.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[--color-primary] rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[--color-primary] rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[--color-primary] rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[--color-primary] rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">▶️</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-[--color-primary] transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-[--color-primary] transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-[--color-primary] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-white/70 hover:text-[--color-primary] transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-white/50 text-sm leading-relaxed">
            <strong>Disclaimer:</strong> Tradeo is an educational platform designed to teach investment concepts through simulation.
            The information provided is for educational purposes only and should not be considered as financial advice.
            Trading and investing carry risk. Past performance does not guarantee future results.
            Always consult with a certified financial advisor before making investment decisions.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/50 text-sm">
            © {currentYear} Tradeo. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-white/50">Made with ❤️ for Southeast Asia</span>
            <div className="flex space-x-2">
              <span>🇮🇩</span>
              <span>🇹🇭</span>
              <span>🇻🇳</span>
              <span>🇵🇭</span>
              <span>🇲🇾</span>
              <span>🇸🇬</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
