export default function PageHeaders({
  h1text = '',
  h2text = '',
}) {
  return (
    <section className="text-center mt-16 sm:mt-24 mb-6 sm:mb-8">
      <div data-aos="zoom-in" data-aos-offset="200"
        data-aos-duration="400"
        data-aos-easing="ease-in-out">
        <h1 className="text-2xl sm:text-4xl" style={{ textShadow: '1px 1px 0 rgba(100,200,300,.5)' }}>
          {h1text}
        </h1>
        <h2 className="text-slate-400 text-base sm:text-xl mt-4">
          {h2text}
        </h2>
        <h2 className="text-slate-400 mt-4 text-base sm:text-xl" >It’s automatic, online & FREE!</h2>
      </div>

    </section>
  );
}