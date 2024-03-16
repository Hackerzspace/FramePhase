export default function PricingPage() {
  return (
    <div>
      <section className="mt-12 sm:mt-24 text-center mb-4 sm:mb-8">
        <h1 className="text-xl sm:text-4xl" style={{textShadow: '1px 1px 0 rgba(100,200,300,.5)'}}>Our Transcription Plans</h1>
      </section>
      <section className="text-center mb-4 sm:mb-8">
        <p className="text-white/65 text-sm sm:text-base">😳 5% the price of a human transcript</p>
        <p className="text-white/65 text-sm sm:text-base">⚡️ 3 minute turnaround (for a 10 minute video)</p>
        <p className="text-white/65 text-sm sm:text-base">🎉 30 minute free trial</p>
        <p className="text-white/65 text-sm sm:text-base">💰 No credit card required during trial</p>
        <p className="text-white/65 text-sm sm:text-base">✅ Cancel subscription at any time</p>
      </section>
      <div className=" grid sm:flex justify-center max-sm:gap-4">
        {/* Pricing Tier 1: Free */}
        <div className="bg-white/80 text-slate-700 rounded-lg max-w-xs mx-4 p-4 sm:p-8 text-center border-black border-2 hover:drop-shadow-2xl">
          <h3 className="font-bold text-xl sm:text-2xl">👶 I upload to YouTube weekly</h3>
          <h4>($9.99)</h4>
          <ul className="mt-4">
            <li>90 minutes of transcripts / month</li>
          </ul>
          <button className="mt-4 text-white font-bold py-2 px-4 rounded" style={{ background: '#0d1127',    border: '3px solid #5978F3ca'}}>Subscribe</button>
          <p className="text-black/40 text-sm">No Credit Card required.</p>
        </div>

        {/* Pricing Tier 2: Pro */}
        <div className="bg-white/95 text-slate-700 rounded-lg max-w-xs mx-4 p-4 sm:p-8 text-center border-[#5978F3ca] border-4 drop-shadow-2xl">
          <h3 className="font-bold text-xl sm:text-2xl">🚀 I upload to YouTube every 2nd day</h3>
          <h4>($19.99)</h4>
          <ul className="mt-4">
            <li>360 minutes of transcripts / month</li>
          </ul>
          <button className="mt-4 text-white font-bold py-2 px-4 rounded" style={{ background: '#0d1127',    border: '3px solid #5978F3ca'}}>Subscribe</button>
          <p className="text-black/40 text-sm">No Credit Card required.</p>
        </div>

        {/* Pricing Tier 3: Enterprise */}
        <div className="bg-white/80 text-slate-700 rounded-lg max-w-xs mx-4 p-4 sm:p-8 text-center border-black border-2 hover:drop-shadow-2xl">
          <h3 className="font-bold text-xl sm:text-2xl">📈 I can't stop uploading to YouTube</h3>
          <h4>($49.99)</h4>
          <ul className="mt-4">
            <li>Unlimited minutes / month</li>
          </ul>
          <button className="mt-4 text-white font-bold py-2 px-4 rounded" style={{ background: '#0d1127',    border: '3px solid #5978F3ca'}}>Subscribe</button>
          <p className="text-black/40 text-sm">No Credit Card required.</p>
        </div>
      </div>
    </div>
  );
}
