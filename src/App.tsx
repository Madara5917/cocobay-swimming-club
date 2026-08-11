import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Check, ChevronDown, Clock3, Droplets, Instagram,
  MapPin, Menu, Phone, Play, ShieldCheck, Sparkles, Star,
  Users, Waves, X, MessageCircle
} from "lucide-react";

const WHATSAPP = "https://wa.me/919999999999"; // Replace with owner's WhatsApp number
const PHONE = "+91 99999 99999"; // Replace with owner's phone number

const programs = [
  {
    title: "Learn to Swim",
    text: "A comfortable starting point for children and adults who are new to swimming.",
    tag: "Beginner",
  },
  {
    title: "Skill Development",
    text: "Build confidence, technique and endurance with structured practice sessions.",
    tag: "Intermediate",
  },
  {
    title: "Performance Training",
    text: "Focused coaching for swimmers looking to sharpen technique and improve performance.",
    tag: "Advanced",
  },
];

const facilities = [
  ["01", "Swimming Pool", "A dedicated space designed for enjoyable and focused swimming sessions.", Waves],
  ["02", "Changing Rooms", "Convenient changing facilities to keep every visit comfortable.", Users],
  ["03", "Showers", "Freshen up before and after your session with on-site shower facilities.", Droplets],
  ["04", "Parking", "Easy access with parking facilities for visitors and members.", MapPin],
];

const faqs = [
  ["Do you offer swimming classes?", "Yes. CocoBay can offer structured swimming sessions for beginners through advanced swimmers. Confirm the current batches and timings directly with the club."],
  ["Can beginners join?", "Absolutely. Beginner-friendly sessions can be arranged based on availability and the swimmer's age and comfort level."],
  ["What should I bring?", "Bring comfortable swimwear, a towel and any personal swimming essentials you normally use. Ask the club about current pool-specific requirements."],
  ["How can I check timings and fees?", "Use the WhatsApp or call buttons on this website to get the latest timings, batches and pricing directly from CocoBay."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><MapPin size={14} /> Narasimhanaickenpalayam, Coimbatore</span>
          <span className="topbar-right"><Clock3 size={14} /> Check today's sessions on WhatsApp</span>
        </div>
      </div>

      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="CocoBay home">
            <span className="brand-mark"><Waves size={24} /></span>
            <span><b>COCO</b>BAY <small>SWIMMING CLUB</small></span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["home", "about", "programs", "facilities", "gallery", "contact"].map((item) => (
              <button key={item} onClick={() => scrollTo(item)}>{item}</button>
            ))}
            <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Book a Session <ArrowRight size={16}/></a>
          </nav>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
              <div className="eyebrow"><span /> SWIM • TRAIN • GROW</div>
              <h1>Make every<br/><em>swim count.</em></h1>
              <p>Premium swimming sessions, confident learning and a better pool experience in Coimbatore.</p>
              <div className="hero-actions">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button primary">Book a Session <ArrowRight size={18}/></a>
                <button className="button ghost" onClick={() => scrollTo("about")}><Play size={16}/> Explore CocoBay</button>
              </div>
            </motion.div>
          </div>
          <div className="hero-bottom">
            <div className="container stat-row">
              <div><strong>01</strong><span>Training</span></div>
              <div><strong>02</strong><span>Facilities</span></div>
              <div><strong>03</strong><span>Community</span></div>
              <div className="hero-note">YOUR NEXT<br/><b>BEST SWIM</b></div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div>
              <div className="section-label">01 / ABOUT COCOBAY</div>
              <h2>A place to <em>move</em>, learn & belong.</h2>
            </div>
            <div className="about-copy">
              <p className="lead">CocoBay Swimming Club is built around a simple idea: swimming should feel welcoming, purposeful and enjoyable.</p>
              <p>Whether you're taking your first strokes, building confidence or working on technique, the goal is to create a comfortable environment where every session feels like progress.</p>
              <div className="mini-features">
                <span><ShieldCheck size={18}/> Safety focused</span>
                <span><Sparkles size={18}/> Clean experience</span>
                <span><Users size={18}/> All skill levels</span>
              </div>
              <button className="text-link" onClick={() => scrollTo("programs")}>Explore programs <ArrowRight size={17}/></button>
            </div>
          </div>
        </section>

        <section id="programs" className="section dark-section">
          <div className="container">
            <div className="section-head">
              <div><div className="section-label light">02 / PROGRAMS</div><h2>Find your <em>pace.</em></h2></div>
              <p>Choose a session that matches your current ability and goals. Contact CocoBay for the latest batches and availability.</p>
            </div>
            <div className="program-grid">
              {programs.map((p, i) => (
                <motion.article className="program-card" key={p.title} whileHover={{y:-8}} transition={{duration:.2}}>
                  <span className="card-number">0{i+1}</span>
                  <span className="pill">{p.tag}</span>
                  <div className="card-icon"><Waves size={26}/></div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">Ask about this <ArrowRight size={16}/></a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="facilities" className="section facilities">
          <div className="container">
            <div className="section-label">03 / FACILITIES</div>
            <div className="facility-intro">
              <h2>Everything you need<br/>for a <em>good session.</em></h2>
              <p>Simple, practical facilities designed to make your visit easier from arrival to your final lap.</p>
            </div>
            <div className="facility-list">
              {facilities.map(([num, title, text, Icon]) => (
                <div className="facility-row" key={title}>
                  <span>{num}</span><Icon size={24}/><div><h3>{title as string}</h3><p>{text as string}</p></div><ArrowRight size={20}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-head">
              <div><div className="section-label">04 / THE EXPERIENCE</div><h2>See the <em>difference.</em></h2></div>
              <p>A visual showcase can be updated with the club's real photographs before launch.</p>
            </div>
            <div className="gallery">
              <div className="gallery-item large"><img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85" alt="Swimming pool" /><span>THE POOL</span></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=900&q=85" alt="Swimmer in pool" /><span>TRAINING</span></div>
              <div className="gallery-item"><img src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=900&q=85" alt="Swimming water" /><span>EVERY LAP</span></div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-inner">
            <div className="quote-mark">“</div>
            <blockquote>Confidence starts with the first stroke.</blockquote>
            <div className="quote-line" />
            <p>COME AS YOU ARE. LEAVE A LITTLE STRONGER.</p>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div><div className="section-label">05 / FAQ</div><h2>Questions?<br/><em>We've got you.</em></h2></div>
            <div className="faqs">
              {faqs.map(([q,a], i) => (
                <div className={faq === i ? "faq active" : "faq"} key={q}>
                  <button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown size={19}/></button>
                  <AnimatePresence initial={false}>{faq === i && <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}><p>{a}</p></motion.div>}</AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <div>
              <div className="section-label light">06 / GET IN TOUCH</div>
              <h2>Ready to<br/><em>make a splash?</em></h2>
              <p>Ask about swimming classes, timings, membership and availability.</p>
            </div>
            <div className="contact-actions">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="button light-button"><MessageCircle size={19}/> WhatsApp Us</a>
              <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="button outline-button"><Phone size={18}/> {PHONE}</a>
              <div className="address"><MapPin size={18}/><span>Narasimhanaickenpalayam,<br/>Coimbatore, Tamil Nadu</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><span className="brand-mark"><Waves size={22}/></span><div><b>COCO</b>BAY<small>SWIMMING CLUB</small></div></div>
          <p>Swim better. Feel better.<br/>See you at the pool.</p>
          <div className="footer-links"><button onClick={() => scrollTo("home")}>Back to top ↑</button><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a><a href="#" aria-label="Instagram"><Instagram size={18}/></a></div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} CocoBay Swimming Club. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
