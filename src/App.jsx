import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Tooth, WhatsappLogo, Phone, MapPin, Clock, Star,
  InstagramLogo, FacebookLogo, List, X, ArrowRight,
  ShieldCheck, Sparkle, Baby, Syringe, Eyeglasses,
  FirstAid, CalendarCheck, ChatCircleDots, CaretDown,
  CaretUp, EnvelopeSimple, NavigationArrow
} from '@phosphor-icons/react'

const WHATSAPP = 'https://wa.me/5548991451758?text=Olá! Gostaria de agendar uma consulta.'
const PHONE = 'tel:+5548991451758'
const INSTAGRAM = 'https://instagram.com/trindadeodontologia'
const DOCTORALIA = 'https://www.doctoralia.com.br/clinicas/centro-odontologico-trindade'
const ADDRESS = 'Rua Santa Luzia, 100, Ed. The Place Office, Sala 1001 - Trindade, Florianópolis - SC'
const MAPS_LINK = 'https://maps.google.com/?q=Trindade+Odontologia+Florianópolis'

function Section({ children, className = '', id }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

function SectionTitle({ badge, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {badge && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${light ? 'bg-white/10 text-teal-200' : 'bg-teal-50 text-teal-700'}`}>
          <Sparkle size={16} weight="duotone" className="flex-shrink-0" />
          {badge}
        </span>
      )}
      <h2 className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-teal-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-teal-100/80' : 'text-gray-600'}`}>{subtitle}</p>
      )}
    </div>
  )
}

const services = [
  { icon: Sparkle, title: 'Invisalign', desc: 'Alinhadores transparentes para um sorriso perfeito sem aparelho metálico. Tecnologia de ponta com planejamento digital 3D.', img: './images/invisalign.jpg' },
  { icon: Tooth, title: 'Implantes Dentários', desc: 'Reposição de dentes perdidos com implantes de titânio de última geração. Planejamento cirúrgico guiado por computador.', img: './images/implantes.jpg' },
  { icon: Sparkle, title: 'Facetas em Resina', desc: 'Transforme seu sorriso com facetas estéticas de alta qualidade. Resultado natural e duradouro em poucas sessões.', img: './images/facetas.jpg' },
  { icon: FirstAid, title: 'Restaurações Dentárias', desc: 'Restaurações estéticas e funcionais com materiais de última geração. Devolvemos a saúde e beleza dos seus dentes.', img: './images/restauracao.jpg' },
  { icon: Syringe, title: 'Harmonização Orofacial', desc: 'Botox e preenchimento facial para realçar sua beleza natural. Procedimentos minimamente invasivos com resultados surpreendentes.', img: './images/botox.jpg' },
  { icon: Baby, title: 'Odontopediatria', desc: 'Atendimento especializado e acolhedor para crianças. Ambiente lúdico que transforma a ida ao dentista em uma experiência positiva.', img: './images/odontopediatria.jpg' },
]

const reviews = [
  { name: 'Roberta M.', stars: 5, text: 'A Dra. Roberta é uma profissional extremamente qualificada. Me ajudou muito com a ansiedade no dentista usando técnicas de respiração e óleos essenciais. Recomendo demais!' },
  { name: 'Djully P.', stars: 5, text: 'Excelente atendimento! A Dra. Djully é muito atenciosa em esclarecer todas as dúvidas sobre os procedimentos. Me senti segura durante todo o tratamento.' },
  { name: 'Carlos S.', stars: 5, text: 'Clínica muito organizada e profissional. Fiz meu Invisalign aqui e o resultado ficou incrível. A equipe toda é muito atenciosa e competente.' },
  { name: 'Ana L.', stars: 5, text: 'Há 15 anos frequento a Trindade Odontologia e nunca me decepcionei. Profissionais excelentes, ambiente acolhedor e tecnologia de ponta.' },
]

const faqs = [
  { q: 'Quanto tempo dura o tratamento com Invisalign?', a: 'O tratamento com Invisalign varia de 6 a 18 meses, dependendo da complexidade do caso. Na consulta de avaliação, faremos um planejamento digital 3D para estimar o tempo exato do seu tratamento.' },
  { q: 'O implante dentário dói?', a: 'O procedimento é realizado com anestesia local e sedação quando necessário, garantindo zero dor durante a cirurgia. No pós-operatório, a recuperação é rápida com medicação adequada.' },
  { q: 'Vocês atendem crianças a partir de qual idade?', a: 'Atendemos crianças a partir de 1 ano de idade. A primeira consulta é fundamental para criar uma relação de confiança e orientar os pais sobre higiene bucal infantil.' },
  { q: 'Quais formas de pagamento são aceitas?', a: 'Aceitamos dinheiro, PIX, cartão de crédito (parcelamos em até 12x) e débito. Também trabalhamos com diversos convênios odontológicos.' },
  { q: 'A clínica atende emergências?', a: 'Sim! Atendemos urgências e emergências odontológicas durante nosso horário de funcionamento. Entre em contato pelo WhatsApp para prioridade no atendimento.' },
]

const differentials = [
  { icon: ShieldCheck, title: 'Há 15 Anos em Florianópolis', desc: 'Tradição e confiança no bairro Trindade, com milhares de sorrisos transformados.' },
  { icon: Tooth, title: 'Equipe Multidisciplinar', desc: 'Profissionais especializados em todas as áreas da odontologia moderna.' },
  { icon: Sparkle, title: 'Tecnologia de Ponta', desc: 'Equipamentos digitais de última geração para diagnósticos precisos e tratamentos eficientes.' },
  { icon: Eyeglasses, title: 'Planejamento Digital 3D', desc: 'Simulação do resultado final antes do início do tratamento para sua segurança.' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#especialidades' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <div className="overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-teal-950/95 shadow-lg' : 'bg-teal-950/90'}`} style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" className="flex items-center gap-3">
              <img src="./images/logo-white.svg" alt="Trindade Odontologia" className="h-10 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-teal-100/80 hover:text-white transition-colors text-sm font-medium tracking-wide">{l.label}</a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-teal-500/25">
                <WhatsappLogo size={18} weight="duotone" className="flex-shrink-0" />
                Agendar Consulta
              </a>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Menu">
              {menuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-teal-950/98 border-t border-teal-800/50"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-teal-100 hover:text-white py-2 text-lg">{l.label}</a>
                ))}
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-500 text-white px-5 py-3 rounded-full font-semibold w-full justify-center mt-2">
                  <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
                  Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== HERO ===== */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="./images/hero-atendimento.jpg" alt="Atendimento odontológico" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-950/80 to-teal-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Tooth size={16} weight="duotone" className="flex-shrink-0" />
                Há 15 anos transformando sorrisos
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Seu sorriso merece{' '}
              <span className="text-teal-400">cuidado especial</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-teal-100/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Referência em Invisalign, implantes e estética dental na Trindade, Florianópolis. Equipe multidisciplinar com tecnologia de ponta para o seu sorriso dos sonhos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-teal-500/30 animate-pulse-glow">
                <WhatsappLogo size={22} weight="duotone" className="flex-shrink-0" />
                Agendar Consulta
              </a>
              <a href={PHONE} className="inline-flex items-center justify-center gap-2 border-2 border-teal-400/40 text-teal-200 hover:bg-teal-400/10 px-8 py-4 rounded-full text-lg font-medium transition-all">
                <Phone size={22} weight="duotone" className="flex-shrink-0" />
                (48) 99145-1758
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-10 text-teal-200/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} weight="fill" className="text-gold-400" />)}</div>
                <span>4.7 no Google</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ChatCircleDots size={16} weight="duotone" className="flex-shrink-0" />
                80+ avaliações
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <Section className="bg-teal-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '15+', label: 'Anos de Experiência' },
              { value: '4.7', label: 'Estrelas no Google' },
              { value: '80+', label: 'Avaliações Positivas' },
              { value: '10+', label: 'Especialidades' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">{s.value}</div>
                <div className="text-teal-100/80 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== SOBRE ===== */}
      <Section id="sobre" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="./images/dentista-floripa.webp" alt="Clínica Trindade Odontologia" className="w-full h-[400px] md:h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold font-[family-name:var(--font-heading)]">15+</div>
                <div className="text-teal-100 text-sm">anos de excelência</div>
              </div>
            </div>
            <div>
              <SectionTitle badge="Nossa História" title="Tradição e Confiança na Trindade" />
              <div className="text-left">
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Há 15 anos no coração do bairro Trindade, a <strong className="text-teal-800">Trindade Odontologia</strong> é referência em odontologia integrada em Florianópolis. Nossa equipe multidisciplinar reúne profissionais altamente qualificados e especializados em diversas áreas da odontologia moderna.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Com instalações modernas no Ed. The Place Office e equipamentos de última geração, oferecemos desde tratamentos preventivos até procedimentos estéticos avançados como Invisalign, implantes dentários e harmonização orofacial. Cada sorriso é único, e nosso compromisso é oferecer o tratamento ideal para você.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {differentials.map((d, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-teal-50/50">
                      <d.icon size={24} weight="duotone" className="text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-teal-900 text-sm">{d.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{d.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg">
                  <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
                  Conheça Nossa Clínica
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SERVIÇOS ===== */}
      <Section id="especialidades" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Especialidades"
            title="Tratamentos de Excelência"
            subtitle="Tecnologia avançada e profissionais especializados para cuidar da saúde e estética do seu sorriso."
          />
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-3">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${
                    activeService === i
                      ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20'
                      : 'bg-white text-gray-700 hover:bg-teal-50 shadow-sm'
                  }`}
                >
                  <s.icon size={24} weight="duotone" className={`flex-shrink-0 ${activeService === i ? 'text-teal-200' : 'text-teal-600'}`} />
                  <span className="font-medium">{s.title}</span>
                  {activeService === i && <ArrowRight size={18} className="ml-auto flex-shrink-0" />}
                </button>
              ))}
            </div>
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative h-64 md:h-80">
                    <img src={services[activeService].img} alt={services[activeService].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold font-[family-name:var(--font-heading)]">
                      {services[activeService].title}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{services[activeService].desc}</p>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg">
                      <CalendarCheck size={20} weight="duotone" className="flex-shrink-0" />
                      Agendar Avaliação
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== INVISALIGN HIGHLIGHT ===== */}
      <Section className="py-20 md:py-28 bg-teal-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-[600px] h-[600px] rounded-full bg-teal-400 blur-[150px] absolute -top-40 -right-40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle badge="Destaque" title="Invisalign: Seu Sorriso, Sem Aparelho" light />
              <div className="text-left">
                <p className="text-teal-100/80 leading-relaxed text-lg mb-6">
                  Com a tecnologia Invisalign, você conquista o sorriso dos sonhos de forma discreta e confortável. Os alinhadores transparentes são praticamente invisíveis e removíveis, permitindo que você coma, beba e escove os dentes normalmente.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Planejamento digital 3D do resultado final', 'Alinhadores praticamente invisíveis', 'Removíveis para alimentação e higiene', 'Resultados em 6 a 18 meses', 'Consultas de acompanhamento mensais'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-teal-100/90">
                      <ShieldCheck size={20} weight="duotone" className="text-teal-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-teal-500/30">
                  <WhatsappLogo size={22} weight="duotone" className="flex-shrink-0" />
                  Consulta Invisalign
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="./images/invisalign.jpg" alt="Invisalign Trindade Odontologia" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -top-4 -left-4 bg-teal-500 text-white p-4 rounded-xl shadow-lg animate-float hidden md:block">
                <Tooth size={32} weight="duotone" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== PROCESSO ===== */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Como Funciona"
            title="Sua Jornada até o Sorriso Perfeito"
            subtitle="Um processo transparente e acolhedor do início ao fim."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Avaliação', desc: 'Consulta inicial completa com radiografia digital e planejamento personalizado do tratamento.' },
              { step: '02', title: 'Planejamento', desc: 'Simulação 3D do resultado final e apresentação das opções de tratamento ideais para você.' },
              { step: '03', title: 'Tratamento', desc: 'Execução do tratamento com tecnologia de ponta, conforto e acompanhamento contínuo.' },
              { step: '04', title: 'Resultado', desc: 'Seu novo sorriso pronto! Acompanhamento pós-tratamento para garantir resultados duradouros.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center p-6"
              >
                <div className="text-6xl font-bold font-[family-name:var(--font-heading)] text-teal-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-teal-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 text-teal-300">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== GALERIA ===== */}
      <Section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Nossa Clínica"
            title="Ambiente Preparado para Você"
            subtitle="Instalações modernas e acolhedoras no Ed. The Place Office, Trindade."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: './images/hero-atendimento.jpg', label: 'Atendimento Profissional' },
              { img: './images/facetas.jpg', label: 'Estética Dental' },
              { img: './images/ortodontia.jpg', label: 'Ortodontia Avançada' },
              { img: './images/restauracao.jpg', label: 'Restaurações' },
              { img: './images/odontopediatria.jpg', label: 'Odontopediatria' },
              { img: './images/hero-main.png', label: 'Sorriso Perfeito' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <span className="text-white font-medium p-4">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== DEPOIMENTOS ===== */}
      <Section id="depoimentos" className="py-20 md:py-28 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Avaliações Reais"
            title="O Que Nossos Pacientes Dizem"
            subtitle="Avaliações reais do Google Maps — 4.7 estrelas com 80+ avaliações."
            light
          />
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                <div className="flex mb-3">{[...Array(r.stars)].map((_, j) => <Star key={j} size={18} weight="fill" className="text-gold-400" />)}</div>
                <p className="text-teal-100/90 leading-relaxed mb-4 italic">"{r.text}"</p>
                <div className="text-teal-300 font-semibold">{r.name}</div>
                <div className="text-teal-400/50 text-xs mt-1">via Google Maps</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={DOCTORALIA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-teal-400/40 text-teal-300 hover:bg-teal-400/10 px-6 py-3 rounded-full font-medium transition-all">
              <Star size={18} weight="duotone" className="flex-shrink-0" />
              Ver no Doctoralia
            </a>
          </div>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Dúvidas Frequentes"
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre nossos tratamentos e a clínica."
          />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-teal-900 pr-4">{f.q}</span>
                  {openFaq === i ? <CaretUp size={20} className="text-teal-600 flex-shrink-0" /> : <CaretDown size={20} className="text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== HORÁRIO E LOCALIZAÇÃO ===== */}
      <Section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Localização"
            title="Onde Nos Encontrar"
            subtitle="Estamos no Ed. The Place Office, no coração da Trindade."
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={28} weight="duotone" className="text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={28} weight="duotone" className="text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 12h | 14h às 19h</p>
                    <p className="text-gray-400 text-sm">Sábados e Domingos: Fechado</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={28} weight="duotone" className="text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">Telefone / WhatsApp</h4>
                    <a href={PHONE} className="text-teal-700 hover:text-teal-600 font-medium">(48) 99145-1758</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <InstagramLogo size={28} weight="duotone" className="text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">Instagram</h4>
                    <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-600 font-medium">@trindadeodontologia</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex-1">
                  <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
                  WhatsApp
                </a>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-full font-semibold transition-all flex-1">
                  <NavigationArrow size={20} weight="duotone" className="flex-shrink-0" />
                  Como Chegar
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8!2d-48.5164!3d-27.5973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527381e8e8a5b%3A0x4e1234567890!2sTrindade%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Mapa Trindade Odontologia"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== CTA FINAL ===== */}
      <Section id="contato" className="py-20 md:py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-[500px] h-[500px] rounded-full bg-teal-300 blur-[120px] absolute -top-48 -left-48" />
          <div className="w-[400px] h-[400px] rounded-full bg-teal-200 blur-[100px] absolute -bottom-32 -right-32" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Tooth size={56} weight="duotone" className="text-teal-200 mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-6">
              Agende Sua Consulta Hoje
            </h2>
            <p className="text-teal-100/80 text-lg max-w-2xl mx-auto mb-10">
              Dê o primeiro passo para o sorriso dos seus sonhos. Nossa equipe está pronta para cuidar de você com carinho e profissionalismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl">
                <WhatsappLogo size={24} weight="duotone" className="flex-shrink-0" />
                Agendar pelo WhatsApp
              </a>
              <a href={PHONE} className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all">
                <Phone size={24} weight="duotone" className="flex-shrink-0" />
                Ligar Agora
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-teal-950 text-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <img src="./images/logo-white.svg" alt="Trindade Odontologia" className="h-10 mb-4" />
              <p className="text-teal-300/60 text-sm leading-relaxed">
                Há 15 anos cuidando do seu sorriso com excelência e tecnologia de ponta no bairro Trindade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Especialidades</h4>
              <ul className="space-y-2 text-sm text-teal-300/70">
                <li>Invisalign</li>
                <li>Implantes Dentários</li>
                <li>Facetas em Resina</li>
                <li>Harmonização Orofacial</li>
                <li>Odontopediatria</li>
                <li>Ortodontia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-teal-300/70">
                <li className="flex items-start gap-2">
                  <MapPin size={16} weight="duotone" className="flex-shrink-0 mt-0.5 text-teal-400" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} weight="duotone" className="flex-shrink-0 text-teal-400" />
                  <a href={PHONE} className="hover:text-white transition-colors">(48) 99145-1758</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} weight="duotone" className="flex-shrink-0 text-teal-400" />
                  <span>Seg-Sex: 8h-12h | 14h-19h</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-3 mb-6">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-800 hover:bg-teal-700 flex items-center justify-center transition-colors">
                  <InstagramLogo size={20} weight="duotone" />
                </a>
                <a href="https://www.facebook.com/trindadeodontologia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-800 hover:bg-teal-700 flex items-center justify-center transition-colors">
                  <FacebookLogo size={20} weight="duotone" />
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-teal-800 hover:bg-teal-700 flex items-center justify-center transition-colors">
                  <WhatsappLogo size={20} weight="duotone" />
                </a>
              </div>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
                <WhatsappLogo size={18} weight="duotone" className="flex-shrink-0" />
                Agendar Consulta
              </a>
            </div>
          </div>
          <div className="border-t border-teal-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-teal-400/50">
            <p>CNPJ: 29.300.476/0001-20 — Centro Odontológico Trindade S/S Ltda</p>
            <p>© 2026 Trindade Odontologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* ===== WHATSAPP FLOAT ===== */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </div>
  )
}
