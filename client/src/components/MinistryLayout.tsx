/**
 * Ministry page-shell design reminder:
 * Poppins-led typography, royal blue, burgundy, cool mist and Hope Teal create
 * a calm, service-first public ministry experience. Keep each route focused.
 */
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";

const logo = "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/great-mandate-logo.jpg";
const hero = "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/mandate-hero-dawn.jpg";

const primaryLinks = [
  ["About", "/about"],
  ["Outreaches", "/outreaches"],
  ["Sermons", "/sermons"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

const footerLinks = [
  ["About", "/about"], ["Founder", "/founder"], ["Outreaches", "/outreaches"],
  ["Sermons", "/sermons"], ["Events", "/events"], ["Gallery", "/gallery"],
  ["Prayer", "/prayer"], ["Partner", "/partner"], ["Give", "/give"], ["Contact", "/contact"],
] as const;

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead: string; children?: ReactNode }) {
  const journeyNotes: Record<string, string> = {
    "About the ministry": "James 1:27",
    "Meet the founder": "Founder record",
    "Outreaches": "Prayer · service · care",
    "Sermons": "Teaching archive",
    "Crusades & events": "Next gathering",
    "Outreach gallery": "Living archive",
    "Prayer & testimonies": "A place of agreement",
    "Partner with us": "Prayer · giving · service",
    "Give": "2 Corinthians 9:7",
    "Contact": "Stay connected",
  };
  return (
    <section className="page-hero">
      <div className="page-hero__image" style={{ backgroundImage: `url(${hero})` }} />
      <div className="page-hero__veil" />
      <div className="container page-hero__content">
        <p className="eyebrow eyebrow--hero"><span />{eyebrow}</p>
        <div className="page-hero__cue"><span>Sacred journey</span><strong>{journeyNotes[eyebrow]}</strong></div>
        <h1>{title}</h1>
        <p>{lead}</p>
        {children ? <div className="page-hero__actions">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="route-heading"><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{copy ? <p>{copy}</p> : null}</div>;
}

export function MinistryLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="route-shell">
      <header className="route-header">
        <div className="route-header__inner container">
          <Link className="brand" href="/" aria-label="The Great Mandate Outreach Ministries home" onClick={closeMenu}>
            <img src={logo} alt="The Great Mandate Outreach Ministries logo" />
            <span className="brand__wordmark"><strong>The Great Mandate</strong><small>Outreach Ministries</small></span>
          </Link>
          <nav className="route-nav" aria-label="Main navigation">
            {primaryLinks.map(([label, href]) => <Link key={href} className={location === href ? "is-active" : ""} href={href}>{label}</Link>)}
          </nav>
          <Link className="route-header__cta" href="/partner">Partner with us <ArrowUpRight size={15} /></Link>
          <button className="route-menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {menuOpen ? <nav className="route-mobile-nav container" aria-label="Mobile navigation">{footerLinks.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu}>{label}<ArrowRight size={16} /></Link>)}</nav> : null}
      </header>
      <main>{children}</main>
      <footer className="route-footer">
        <div className="container route-footer__main">
          <div><img src={logo} alt="The Great Mandate Outreach Ministries logo" /><p>Advancing the Gospel of Christ. Bringing joy and solace to humanity in all spheres of life.</p></div>
          <div className="route-footer__links"><p>Explore</p>{footerLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          <div className="route-footer__cta"><p>Stand with the mandate.</p><Link className="button button--gold" href="/partner">Partner with us <ArrowRight size={16} /></Link></div>
        </div>
        <div className="container route-footer__bottom"><span>© 2026 The Great Mandate Outreach Ministries. All Rights Reserved.</span><Link href="/contact">Contact the ministry</Link></div>
      </footer>
    </div>
  );
}
