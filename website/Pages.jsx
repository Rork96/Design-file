import React from "react";
const A = "../../assets/illustrations/";
const CASES = [
  { id: "7zupiburger", title: "7zupiburger", tag: "Gastronomy · 2022", text: "Profile packaging and a 7-day ad test for a food truck in Wroclaw.", img: A + "foodtruck.svg", slide: true },
  { id: "wroclaw", title: "The Most Longest life in one Country", tag: "Lifestyle · 2022", text: "Four years in Wroclaw, told as an illustrated post.", img: A + "wroclaw-crest.svg" },
  { id: "canada", title: "Ticket to Canada", tag: "Lifestyle", text: "Editorial post series, 1080 × 1080.", img: A + "ticket-to-canada.svg" },
];
function Thumb({ c }) {
  return <div className="thumb">{c.slide ? <img className="slide" src={c.img} alt="" style={{ height: "100%" }} /> : <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}</div>;
}
function CaseCard({ c, go }) {
  return <button className="card" onClick={() => go("case", c.id)}><Thumb c={c} /><div className="body"><div className="tag">{c.tag}</div><h3>{c.title}</h3><p className="mute">{c.text}</p></div></button>;
}
export function Home({ go }) {
  return <>
    <section className="hero"><div className="wrap"><div className="frame">
      <div className="eyebrow">Instagram design · Wroclaw</div>
      <div className="sig">Paul Rork</div>
      <h1>Posts that look like <span className="hl">one brand.</span></h1>
      <p className="lead">I design Instagram profiles, carousels, stories and ad creatives for small businesses, from packaging to the first ad test.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}><button className="btn" onClick={() => go("contact")}>Start a project</button><button className="btn ghost" onClick={() => go("cases")}>See cases</button></div>
    </div></div></section>
    <div className="wrap" style={{ paddingBottom: 40 }}><div className="marquee">WROCŁAW - WROCŁAW - WROCŁAW - WROCŁAW - WROCŁAW - WROCŁAW</div></div>
    <section className="sec"><div className="wrap">
      <SectionHead eyebrow="Selected cases" title="Recent work" />
      <div className="grid g3">{CASES.map(c => <CaseCard key={c.id} c={c} go={go} />)}</div>
    </div></section>
    <section className="sec"><div className="wrap">
      <SectionHead eyebrow="7zupiburger · 7 days" title="A small test with a measurable result" />
      <div className="stats">
        <div><div className="num">7 598</div><div className="mute">people reached</div></div>
        <div><div className="num">141 zł</div><div className="mute">total ad spend (about $31)</div></div>
        <div><div className="num">11</div><div className="mute">qualified leads</div></div>
        <div><div className="num">5.3%</div><div className="mute">average CTR</div></div>
      </div>
    </div></section>
    <section className="sec"><div className="wrap" style={{ display: "grid", gap: 24 }}>
      <h2>Have a profile that needs a look?</h2>
      <div><button className="btn" onClick={() => go("contact")}>Write to me</button></div>
    </div></section>
  </>;
}
export function Cases({ go }) {
  return <section className="sec" style={{ borderTop: 0 }}><div className="wrap">
    <SectionHead eyebrow="Cases" title="Selected work" lead="Each case is an Instagram profile or post series, designed and tested." />
    <div className="grid g3">{CASES.map(c => <CaseCard key={c.id} c={c} go={go} />)}</div>
  </div></section>;
}
export function CaseDetail({ id, go }) {
  const c = CASES.find(x => x.id === id) || CASES[0];
  return <section className="sec" style={{ borderTop: 0 }}><div className="wrap" style={{ display: "grid", gap: 40 }}>
    <button className="back" onClick={() => go("cases")}>← All cases</button>
    <div style={{ display: "grid", gap: 14 }}><div className="tag">{c.tag}</div><h1 style={{ fontSize: "clamp(40px,7vw,96px)" }}>{c.title}</h1><p className="lead">{c.text}</p></div>
    <div className="thumb" style={{ aspectRatio: c.slide ? "3 / 1" : "16 / 9" }}>
      {c.slide ? <img className="slide" src={c.img} alt="" style={{ height: "100%" }} /> : <img src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
    </div>
    {c.id === "7zupiburger" && <>
      <div className="grid g2" style={{ alignItems: "start" }}>
        <div style={{ display: "grid", gap: 14 }}>
          <h3>Done</h3>
          {["Instagram/Facebook profile packaging", "Target audience and competitor analysis", "Best promotion strategy and an ad video", "Ad campaign analysis and report"].map((t, i) => <Bullet key={i}>{t}</Bullet>)}
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          <h3>Result (7 days)</h3>
          <div className="scroll"><table className="table"><thead><tr><th>Reach</th><th>Spend</th><th>Clicks</th><th>CTR</th><th>Cost / click</th></tr></thead>
            <tbody><tr><td>4 118</td><td>73.60 zł</td><td>420</td><td>5.19%</td><td>0.18 zł</td></tr><tr><td>3 589</td><td>67.53 zł</td><td>443</td><td>5.46%</td><td>0.15 zł</td></tr>
              <tr><td className="hl">7 598</td><td className="hl">141.13 zł</td><td className="hl">863</td><td className="hl">5.32%</td><td className="hl">0.16 zł</td></tr></tbody></table></div>
          <p className="mute">Potential (target) clients: +11.</p>
        </div>
      </div>
    </>}
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}><button className="btn" onClick={() => go("contact")}>Discuss your case</button></div>
  </div></section>;
}
const SERVICES = [
  ["Profile packaging", "Avatar, highlight covers, bio and a consistent grid so the profile reads as one brand."],
  ["Posts and carousels", "Templates in your colours and type, built for 1080 × 1080 and ready to reuse."],
  ["Stories and highlights", "Story layouts that respect the safe zone and camera thirds, plus highlight covers."],
  ["Ad creatives and test", "Ad visuals and video, a 7-day test campaign and a report with the numbers."],
];
export function Services({ go }) {
  return <section className="sec" style={{ borderTop: 0 }}><div className="wrap">
    <SectionHead eyebrow="Services" title="What I do" lead="Pricing depends on scope. Write to me with your profile and goal for a quote." />
    <div>{SERVICES.map(([t, d], i) => <div className="svc" key={t}>
      <div className="n">0{i + 1}</div><h3>{t}</h3><p className="mute" style={{ fontSize: 18 }}>{d}</p>
      <button className="btn ghost" onClick={() => go("contact")}>Get a quote</button></div>)}
      <div style={{ borderTop: "1px solid var(--s-line)" }} /></div>
  </div></section>;
}
export function About() {
  return <section className="sec" style={{ borderTop: 0 }}><div className="wrap grid g2" style={{ alignItems: "start", gap: 48 }}>
    <div style={{ display: "grid", gap: 20 }}>
      <div className="eyebrow">About</div>
      <div className="sig">Paul Rork</div>
      <h2>Designer based in Wroclaw</h2>
      <p className="lead">I lived in Poland from 28 August 2018 to 2 December 2022, four years in Wroclaw. Since then I design Instagram profiles and post series, and I illustrate for HIMself.</p>
    </div>
    <div className="thumb ph" style={{ aspectRatio: "4 / 5" }}>portrait</div>
  </div></section>;
}
export function Contact() {
  const [sent, setSent] = React.useState(false);
  return <section className="sec" style={{ borderTop: 0 }}><div className="wrap grid g2" style={{ gap: 48, alignItems: "start" }}>
    <div style={{ display: "grid", gap: 20 }}>
      <div className="eyebrow">Contact</div>
      <h2>Tell me about your profile</h2>
      <p className="lead">Send a link to your Instagram and what you want to change. I reply within two working days.</p>
      <p className="mute">Instagram <a href="https://instagram.com/rork_paul">@rork_paul</a></p>
    </div>
    {sent ? <div className="card" style={{ padding: 32, cursor: "default" }}><h3>Thanks, message sent.</h3></div> :
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "grid", gap: 18 }}>
      <div className="field"><label htmlFor="n">Name</label><input id="n" required /></div>
      <div className="field"><label htmlFor="c">Instagram or email</label><input id="c" required /></div>
      <div className="field"><label htmlFor="m">Message</label><textarea id="m" rows="5" /></div>
      <div><button className="btn" type="submit">Send</button></div>
    </form>}
  </div></section>;
}
