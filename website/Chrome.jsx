import React from "react";
export function Btn({ children, ghost, onClick, href }) {
  const c = "btn" + (ghost ? " ghost" : "");
  return href ? <a className={c} href={href}>{children}</a> : <button className={c} onClick={onClick}>{children}</button>;
}
export function Bullet({ children }) {
  return <div className="li"><span className="bullet"><i /></span><div>{children}</div></div>;
}
export function SectionHead({ eyebrow, title, lead }) {
  return <div className="sec-head">{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2>{lead && <p className="lead">{lead}</p>}</div>;
}
export function Nav({ page, go }) {
  const [open, setOpen] = React.useState(false);
  const L = [["home", "Home"], ["cases", "Cases"], ["services", "Services"], ["about", "About"], ["contact", "Contact"]];
  const sel = page === "case" ? "cases" : page;
  return (
    <header className="nav"><div className="wrap">
      <button className="brand" onClick={() => go("home")}>Paul<br />Rork</button>
      <nav className={"links" + (open ? " open" : "")}>
        {L.map(([k, l]) => <button key={k} className={sel === k ? "on" : ""} onClick={() => { go(k); setOpen(false); }}>{l}</button>)}
      </nav>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
    </div></header>
  );
}
export function Footer({ go }) {
  return (
    <footer className="foot"><div className="wrap">
      <div className="brand" style={{ cursor: "default" }}>Paul<br />Rork</div>
      <div className="mute">Instagram <a href="https://instagram.com/rork_paul">@rork_paul</a><br />❤️ paulrork</div>
      <div className="mute">© 2026 Paul Rork</div>
    </div></footer>
  );
}
