const GlassSection = ({ children }) => (
  <section className="relative py-24 px-6">
    <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-[40px]" />
    <div className="relative max-w-6xl mx-auto">{children}</div>
  </section>
);

export default GlassSection;
