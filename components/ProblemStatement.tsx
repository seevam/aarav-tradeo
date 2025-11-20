export default function ProblemStatement() {
  const problems = [
    {
      icon: "❓",
      title: "Too Much Jargon",
      description: "P/E ratios? Market caps? The stock market speaks a different language."
    },
    {
      icon: "😰",
      title: "Fear of Losing Money",
      description: "One wrong move and your savings are gone. Where do beginners even start?"
    },
    {
      icon: "😴",
      title: "Boring Traditional Learning",
      description: "Reading dense articles and watching hour-long videos isn't how we learn anymore."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
            Investing Feels Complicated. We Made It Simple.
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-6xl mb-6">{problem.icon}</div>
              <h3 className="text-2xl font-bold text-[#212121] mb-4">
                {problem.title}
              </h3>
              <p className="text-lg text-[#757575] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
