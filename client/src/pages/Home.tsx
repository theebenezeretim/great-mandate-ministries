/**
 * SMHOS-inspired structure reminder:
 * This page uses Poppins-led typography and a clear ministry-home rhythm:
 * welcome hero, immediate invitation, mandate, testimony gateway and ministry
 * arms. Great Mandate copy, assets and royal-blue/gold identity remain distinct.
 */
import { MandateForm, Field } from "@/components/MandateForm";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Check,
  ChevronDown,
  Church,
  Copy,
  Cross,
  HandCoins,
  HandHeart,
  HeartHandshake,
  Mail,
  MapPinned,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const assets = {
  logo: "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/great-mandate-logo.jpg",
  founder: "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/pastor-solomon-ufuoma.jpg",
  hero: "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/mandate-hero-dawn.jpg",
  texture: "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/mandate-scripture-texture.jpg",
  gallery: "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/mandate-outreach-placeholder.jpg",
  marketEvangelism: "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/market-evangelism-2026.jpg",
  mark: "https://raw.githubusercontent.com/theebenezeretim/great-mandate-ministries/main/public/images/mandate-mission-mark.png",
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Founder", "founder"],
  ["Sermons", "sermons"],
  ["Get Involved", "involved"],
  ["Gallery", "gallery"],
  ["Donate", "donate"],
  ["Contact", "contact"],
] as const;

const outreachFocus = [
  ["Widows", "Care that strengthens dignity and hope."],
  ["Orphanages", "Compassion expressed in practical service."],
  ["Prisoners", "The Gospel carried beyond closed doors."],
  ["Market evangelism", "Faith brought into everyday life."],
  ["Schools", "A message of purpose for the next generation."],
  ["Crusades", "Gathering hearts around Christ and His works."],
];

const sermons = [
  "Wonders of Sowing into Kingdom Advancement Endeavours",
  "Building Faith for Triumph in Hard Times",
];

const galleryLabels = [
  "Market Evangelism", "Prison Visits", "Orphanage Visits", "Widows Care", "School Outreach", "Crusades",
];

const ministryArms = [
  { title: "Compassion Outreach", description: "Practical care for widows, orphanages and people in need." },
  { title: "Market Evangelism", description: "The Gospel carried into everyday places and conversations." },
  { title: "Schools & Youth", description: "A message of faith, identity and purpose for the next generation." },
  { title: "Crusades & Missions", description: "Gathering communities around Christ and His life-transforming works." },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const routeMap: Record<string, string> = {
  about: "/about", founder: "/founder", sermons: "/sermons", involved: "/partner", gallery: "/gallery", donate: "/give", contact: "/contact",
};

function SectionIntro({ eyebrow, title, children, light = false }: { eyebrow: string; title: string; children?: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? "section-intro--light" : ""}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-intro__copy">{children}</div> : null}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountCopied, setAccountCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(id: string) {
    setMenuOpen(false);
    if (routeMap[id]) { window.location.assign(routeMap[id]); return; }
    scrollTo(id);
  }

  async function copyAccountNumber() {
    await navigator.clipboard?.writeText("2006711996");
    setAccountCopied(true);
    window.setTimeout(() => setAccountCopied(false), 2200);
  }

  return (
    <div className="site-shell" id="home">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="The Great Mandate Outreach Ministries home">
          <img src={assets.logo} alt="The Great Mandate Outreach Ministries logo" />
          <span className="brand__wordmark">
            <strong>The Great Mandate</strong>
            <small>Outreach Ministries</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => handleNav(id)}>{label}</button>)}
        </nav>
        <button className="nav-partner" onClick={() => handleNav("involved")}>Partner with us <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, id]) => <button key={id} onClick={() => handleNav(id)}>{label}<ArrowRight size={16} /></button>)}
            <button onClick={() => handleNav("involved")}>Partner with us <ArrowUpRight size={16} /></button>
          </nav>
        ) : null}
      </header>

      <main>
        <section className="hero hero--sunrise" aria-labelledby="hero-title">
          <div className="hero__background" style={{ backgroundImage: `url(${assets.hero})` }} />
          <div className="hero__wash" />
          <div className="hero__line" />
          <div className="hero__content container">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--hero"><span />Welcome to</p>
              <h1 id="hero-title">The Great Mandate <em>Outreach Ministries</em></h1>
              <p className="hero__lead">Advancing the Gospel of Christ. Bringing joy and solace to humanity in all spheres of life.</p>
              <p className="hero__scripture">James 1:27</p>
              <div className="hero__actions">
                <button className="button button--gold" onClick={() => scrollTo("involved")}>Partner With Us <ArrowRight size={17} /></button>
                <button className="button button--ghost" onClick={() => scrollTo("prayer")}>Send a Prayer Request <ArrowUpRight size={17} /></button>
              </div>
            </div>
          </div>
          <button className="hero__scroll" onClick={() => scrollTo("mandate")} aria-label="Discover the mandate"><span>Discover the mandate</span><ChevronDown size={18} /></button>
        </section>

        <section className="online-invitation" aria-label="Join the mission">
          <div className="container online-invitation__layout">
            <div><p className="eyebrow"><span />Walk with the mission</p><h2>Join us in carrying the Gospel into places where hope is needed.</h2></div>
            <div className="online-invitation__actions"><p>Become part of the prayer, giving and service behind every outreach.</p><div><button className="button button--royal" onClick={() => scrollTo("involved")}>Partner with the Mission <ArrowRight size={17} /></button><button className="button button--outline-blue" onClick={() => scrollTo("events")}>See Outreach Updates <ArrowUpRight size={17} /></button></div></div>
          </div>
        </section>

        <section id="mandate" className="mandate-section journey-section" data-journey="The mandate">
          <div className="container mandate-grid">
            <div className="mandate-scripture" style={{ backgroundImage: `url(${assets.texture})` }}>
              <p className="eyebrow"><span />Our guiding scripture</p>
              <Quote className="quote-mark" size={44} />
              <blockquote>“Pure and undefiled religion before God the Father is this: to look after orphans and widows in their distress...”</blockquote>
              <p className="scripture-ref">James 1:27</p>
            </div>
            <div className="mandate-details">
              <SectionIntro eyebrow="The mandate" title="Faith expressed through His works.">
                <p>We exist to bring the love of Christ into the places where compassion, hope and practical care are needed most.</p>
              </SectionIntro>
              <div className="belief-list">
                <article><div><p>Vision</p><h3>Bringing joy and solace to humanity in all spheres of life.</h3></div></article>
                <article><div><p>Mission</p><h3>To see Christ glorified through His works.</h3></div></article>
                <article><div><p>Core values</p><h3>Christ-centred. Excellence &amp; Modesty. The Way, the Truth and the Life.</h3></div></article>
              </div>
            </div>
          </div>
        </section>

        <section className="testimony-showcase" aria-labelledby="testimony-showcase-title">
          <div className="container testimony-showcase__layout">
            <div className="testimony-showcase__title"><p className="eyebrow"><span />Testimonies</p><h2 id="testimony-showcase-title">What God is doing through the mandate.</h2><p>Verified testimonies from the ministry community will be shared here as they are received.</p></div>
            <div className="testimony-showcase__action"><Quote size={31} /><p>Has God touched your life through a prayer, outreach or message?</p><button className="button button--royal" onClick={() => scrollTo("prayer")}>Share Your Testimony <ArrowRight size={17} /></button></div>
          </div>
        </section>

        <section className="ministry-arms-section" aria-labelledby="ministry-arms-title">
          <div className="container"><div className="ministry-arms-heading"><div><p className="eyebrow"><span />Get involved</p><h2 id="ministry-arms-title">Ministry Arms</h2></div><p>Different expressions of one calling: making Christ known through love in action.</p></div><div className="ministry-arms-grid">{ministryArms.map((arm) => <button className="ministry-arm-card" key={arm.title} onClick={() => scrollTo("involved")}><h3>{arm.title}</h3><p>{arm.description}</p><ArrowUpRight size={21} /></button>)}</div></div>
        </section>

        <section id="about" className="story-section journey-section" data-journey="Called to serve">
          <div className="story-line" aria-hidden="true"><span /></div>
          <div className="container story-layout">
            <div className="story-label"><p>Our Story</p><span>2024 — now</span></div>
            <div className="story-copy">
              <p className="eyebrow"><span />Called to serve</p>
              <h2>A vision received in prayer, then carried into the world.</h2>
              <p>After five years of faithful service in another ministry, Pastor Solomon Ufuoma felt an unrelenting call from God. He stepped away, went into prayer and waited on the Lord. It was in that place of waiting that the vision for The Great Mandate Outreach Ministries was given.</p>
              <p>The first outreach was held on 10 October 2024, marking the beginning of a ministry committed to seeing Christ glorified through compassionate works.</p>
              <button className="text-link text-link--dark" onClick={() => scrollTo("founder")}>Meet the founder <ArrowRight size={16} /></button>
            </div>
            <div className="focus-card">
              <div className="focus-card__header"><HeartHandshake size={21} /><p>Who we reach</p></div>
              <div className="focus-list">
                {outreachFocus.map(([label, copy]) => <div key={label}><strong>{label}</strong><p>{copy}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="founder" className="founder-section journey-section" data-journey="The vision bearer">
          <div className="container founder-layout">
            <div className="founder-image-block">
              <div className="founder-image-block__arch" />
              <img src={assets.founder} alt="Pastor Solomon Ufuoma" />
              <div className="founder-image-block__quote">“A costly call is still worth obeying.”</div>
            </div>
            <article className="founder-copy">
              <p className="eyebrow eyebrow--gold"><span />Meet the founder</p>
              <h2>Pastor Solomon Ufuoma</h2>
              <p className="founder-meta">Born 31 May 1984 · Agparho, Odele North LGA, Delta State</p>
              <p>A man of deep faith, Pastor Solomon believes strongly in Jesus Christ, in the power of faith, and in the prosperity God has ordained for His people. He left a comfortable place of service to answer an uncompromising call to ministry.</p>
              <p>He is married to Amaka Regina Etaedafe. Together, they carry a burden to serve faithfully and make Christ known through practical love.</p>
              <div className="founder-signoff"><img src={assets.mark} alt="" /><span>Founder &amp; Vision Bearer</span></div>
            </article>
          </div>
        </section>

        <section id="sermons" className="sermons-section journey-section" data-journey="Hear the word">
          <div className="container">
            <div className="sermons-topline">
              <SectionIntro eyebrow="Hear the word" title="Recent Messages"><p>Scripture-rooted teaching for faith, purpose and a life that bears fruit.</p></SectionIntro>
              <div className="sermon-coming"><BookOpenText size={19} />Full sermon library coming soon.</div>
            </div>
            <div className="sermon-grid">
              {sermons.map((sermon, index) => (
                <article key={sermon} className="sermon-card">
                  <div className="sermon-card__number">0{index + 1}</div>
                  <span className="status-pill">Coming soon</span>
                  <h3>{sermon}</h3>
                  <button onClick={() => scrollTo("contact")}>Ask about this message <ArrowUpRight size={17} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="involved" className="involved-section journey-section" data-journey="Walk with us">
          <div className="container involved-layout">
            <div className="involved-copy">
              <p className="eyebrow eyebrow--gold"><span />Get involved</p>
              <h2>There is a place for your hands, heart and prayer.</h2>
              <p>Partner with the vision by standing in prayer, giving toward outreaches, serving on the ground or becoming part of the ministry family.</p>
              <div className="participation-options"><span><HeartHandshake size={17} />Prayer</span><span><HandCoins size={17} />Giving</span><span><UsersRound size={17} />Serving</span></div>
            </div>
            <div className="form-panel">
              <p className="pastoral-kicker">A practical step of faith</p>
              <p className="form-panel__title">Join / Partner With Us</p>
              <p className="form-panel__reassurance">Your willingness to serve, give or pray is received with gratitude.</p>
              <MandateForm formName="Partner with us" submitLabel="Take this step with us">
                <div className="form-grid form-grid--two">
                  <Field label="Full name"><input name="name" required placeholder="Your name" /></Field>
                  <Field label="Email address"><input type="email" name="email" required placeholder="you@example.com" /></Field>
                </div>
                <Field label="Phone / WhatsApp"><input type="tel" name="phone" required placeholder="+234" /></Field>
                <fieldset className="check-group"><legend>How would you like to be involved?</legend><div className="check-grid">
                  {["Prayer Partner", "Financial Partner", "Volunteer at Outreaches", "Join the Ministry"].map((option) => <label key={option}><input type="checkbox" name="involvement" value={option} /><span>{option}</span></label>)}
                </div></fieldset>
                <Field label="A message for the ministry"><textarea name="message" rows={3} placeholder="Tell us how you would like to connect." /></Field>
              </MandateForm>
            </div>
          </div>
        </section>

        <section id="prayer" className="prayer-section journey-section" data-journey="Stand in prayer">
          <div className="container prayer-layout">
            <div><SectionIntro eyebrow="Prayer & testimony" title="We believe God still answers."><p>Bring your request in confidence, or share what God has done so that others may be encouraged.</p></SectionIntro><div className="prayer-note"><Sparkles size={18} /><p>Prayer requests submitted here are not treated as private and may be shared with the prayer team for agreement in prayer.</p></div></div>
            <div className="prayer-tabs">
              <div className="form-panel form-panel--light"><p className="pastoral-kicker">A place of agreement</p><p className="form-panel__title">Send a Prayer Request</p><p className="form-panel__reassurance">We will stand with you in faith and prayer.</p><MandateForm formName="Prayer Request" submitLabel="Bring this request in prayer" compact><Field label="Name (optional)"><input name="name" placeholder="Your name" /></Field><Field label="Email or WhatsApp"><input name="contact" required placeholder="How can we follow up?" /></Field><Field label="Prayer request"><textarea name="prayer_request" rows={4} required placeholder="Share your request here" /></Field><label className="simple-check"><input name="anonymous" type="checkbox" /><span>Submit anonymously</span></label></MandateForm></div>
              <div className="testimony-panel"><p className="form-panel__title">Testimonies</p><p className="testimony-panel__copy">Have you experienced a testimony through this ministry?</p><details><summary>Share Your Testimony <ArrowRight size={16} /></summary><MandateForm formName="Testimony" submitLabel="Share testimony" compact><Field label="Name"><input name="name" placeholder="Your name" /></Field><Field label="Your testimony"><textarea name="testimony" rows={4} required placeholder="Tell us what God has done" /></Field></MandateForm></details><div className="testimony-empty"><Quote size={20} /><span>Testimony coming soon</span></div><div className="testimony-empty"><Quote size={20} /><span>Testimony coming soon</span></div></div>
            </div>
          </div>
        </section>

        <section id="events" className="events-section journey-section" data-journey="Gather in hope">
          <div className="container events-layout">
            <div className="events-heading"><p className="eyebrow"><span />Crusades & outreaches</p><h2>Be there when the next outreach is announced.</h2><p>When a new crusade or outreach is confirmed, those on this list will hear first.</p></div>
            <div className="event-waitlist"><div className="event-waitlist__icon"><MapPinned size={23} /></div><p className="pastoral-kicker">Receive the call to gather</p><h3>Join the waitlist for our next event</h3><p>Be the first to know when our next crusade or outreach is announced.</p><MandateForm formName="Event Waitlist" submitLabel="Keep me informed" compact><Field label="Name"><input name="name" required placeholder="Your name" /></Field><Field label="Email"><input type="email" name="email" required placeholder="you@example.com" /></Field><Field label="WhatsApp number"><input type="tel" name="whatsapp" required placeholder="+234" /></Field></MandateForm></div>
          </div>
        </section>

        <section id="gallery" className="gallery-section journey-section" data-journey="A living archive">
          <div className="container">
            <div className="gallery-header"><SectionIntro eyebrow="Outreach gallery" title="The work will speak for itself."><p>Actual outreach photographs will be added here as the ministry’s story continues to unfold.</p></SectionIntro><p className="gallery-header__note">Future photo archive</p></div>
            <div className="gallery-grid">
              {galleryLabels.map((label, index) => <article className={`gallery-tile gallery-tile--${index + 1}`} key={label}><div className={`gallery-art gallery-art--${index + 1}`}>{index === 0 ? <img src={assets.marketEvangelism} alt="The Great Mandate Market Evangelism outreach" /> : null}<span className="gallery-art__seal">TGMO · Archive</span></div><div><span>{index === 0 ? "Authentic outreach photograph" : "Outreach photograph awaiting upload"}</span><strong>{label}</strong></div></article>)}
            </div>
          </div>
        </section>

        <section id="donate" className="donate-section journey-section" data-journey="Sow with joy">
          <div className="container donate-layout">
            <div className="donate-copy"><p className="eyebrow eyebrow--gold"><span />Partner through giving</p><h2>Sow into <em>The Great Mandate.</em></h2><p>Your giving helps carry the Gospel and compassionate care to people, places and communities in need.</p><p className="giving-verse">“God loves a cheerful giver.” <span>2 Corinthians 9:7</span></p></div>
            <div className="bank-card"><p className="pastoral-kicker">A gift placed in faithful hands</p><div className="bank-card__head"><HandCoins size={22} /><p>Bank transfer details</p></div><div className="bank-data"><span>Bank</span><strong>FCMB</strong></div><div className="bank-data"><span>Account name</span><strong>The Great Mandate Outreach Ministries</strong></div><div className="bank-data bank-data--account"><span>Account number</span><strong>2006711996</strong><button onClick={copyAccountNumber} aria-label="Copy account number">{accountCopied ? <Check size={17} /> : <Copy size={17} />}{accountCopied ? "Copied" : "Copy"}</button></div><div className="gateway-placeholder"><span>Online giving</span><p>Payment gateway space reserved for Paystack or Flutterwave.</p></div></div>
          </div>
        </section>

        <section id="contact" className="contact-section journey-section" data-journey="Stay connected">
          <div className="container contact-layout">
            <div className="contact-copy"><p className="eyebrow"><span />Reach out</p><h2>Let us walk with you.</h2><p>For ministry enquiries, outreach partnerships or a conversation with the team, use the details below or send a message.</p><div className="contact-methods"><a href="mailto:solomonufuoma16@gmail.com"><Mail size={18} /><span><small>Email</small>solomonufuoma16@gmail.com</span></a><a href="tel:+2348106903151"><Phone size={18} /><span><small>Phone</small>+234 810 690 3151</span></a><a href="https://wa.me/2347050722808" target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>+234 705 072 2808</span></a></div></div>
            <div className="contact-form-wrap"><p className="pastoral-kicker">The team is ready to listen</p><p className="form-panel__title">Send a message</p><p className="form-panel__reassurance">Tell us how we may serve or stand with you.</p><MandateForm formName="Contact" submitLabel="Send a word to the team"><Field label="Your name"><input name="name" required placeholder="Your name" /></Field><Field label="Email address"><input type="email" name="email" required placeholder="you@example.com" /></Field><Field label="Message"><textarea name="message" rows={5} required placeholder="How may we serve you?" /></Field></MandateForm></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main"><div className="footer-brand"><img src={assets.logo} alt="The Great Mandate Outreach Ministries logo" /><p>Advancing the Gospel of Christ. Bringing joy and solace to humanity in all spheres of life.</p></div><div className="footer-links"><p>Explore</p>{navItems.slice(1, 7).map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</div><div className="footer-invitation"><p>Stand with the mandate.</p><button className="button button--gold" onClick={() => scrollTo("involved")}>Partner With Us <ArrowRight size={16} /></button></div></div><div className="container footer-bottom"><span>© 2026 The Great Mandate Outreach Ministries. All Rights Reserved.</span><span>Built to carry the Gospel forward.</span></div>
      </footer>
    </div>
  );
}
