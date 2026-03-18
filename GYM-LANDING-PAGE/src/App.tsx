import { useState } from 'react'
import './App.css'
import {
  Dumbbell,
  Flame,
  Heart,
  Trophy,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Menu,
  X,
  Zap,
  Target,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const classes = [
    {
      name: 'Yoga & Flexibility',
      image: '/images/class-yoga.jpg',
      fallback: 'https://placehold.co/600x400/1a1a2e/e94560?text=Yoga',
      time: 'Mon, Wed, Fri - 7:00 AM',
      trainer: 'Sarah Johnson',
      description: 'Find your balance and improve flexibility with our expert-led yoga sessions.',
    },
    {
      name: 'Boxing & Kickboxing',
      image: '/images/class-boxing.jpg',
      fallback: 'https://placehold.co/600x400/1a1a2e/e94560?text=Boxing',
      time: 'Tue, Thu - 6:00 PM',
      trainer: 'Mike Torres',
      description: 'High-energy boxing classes that build strength, speed, and confidence.',
    },
    {
      name: 'Strength Training',
      image: '/images/class-cycling.jpg',
      fallback: 'https://placehold.co/600x400/1a1a2e/e94560?text=Strength',
      time: 'Mon - Sat - 5:00 AM',
      trainer: 'David Park',
      description: 'Build lean muscle and increase power with progressive resistance training.',
    },
    {
      name: 'CrossFit & HIIT',
      image: '/images/class-crossfit.jpg',
      fallback: 'https://placehold.co/600x400/1a1a2e/e94560?text=CrossFit',
      time: 'Daily - 6:00 AM & 5:00 PM',
      trainer: 'Emma Wilson',
      description: 'Push your limits with high-intensity interval training and functional movements.',
    },
  ]

  const trainers = [
    {
      name: 'Sarah Johnson',
      role: 'Yoga & Wellness Coach',
      image: '/images/trainer1.jpg',
      fallback: 'https://placehold.co/400x500/1a1a2e/e94560?text=Sarah',
      bio: '10+ years of experience in yoga and mindfulness training.',
      socials: { instagram: '#', twitter: '#' },
    },
    {
      name: 'Mike Torres',
      role: 'Boxing & MMA Trainer',
      image: '/images/trainer2.jpg',
      fallback: 'https://placehold.co/400x500/1a1a2e/e94560?text=Mike',
      bio: 'Former professional boxer with 15 years of coaching experience.',
      socials: { instagram: '#', twitter: '#' },
    },
    {
      name: 'Emma Wilson',
      role: 'CrossFit & HIIT Specialist',
      image: '/images/trainer3.jpg',
      fallback: 'https://placehold.co/400x500/1a1a2e/e94560?text=Emma',
      bio: 'Certified CrossFit L3 trainer passionate about functional fitness.',
      socials: { instagram: '#', twitter: '#' },
    },
  ]

  const testimonials = [
    {
      name: 'James Rodriguez',
      text: "JERAI GYM completely changed my life. I've lost 30 pounds and gained so much confidence. The trainers are incredible and the community keeps me motivated every day.",
      rating: 5,
      role: 'Member for 2 years',
    },
    {
      name: 'Priya Sharma',
      text: "Best gym I've ever been to! The facilities are top-notch, classes are diverse, and the atmosphere is electric. I look forward to every single workout.",
      rating: 5,
      role: 'Member for 1 year',
    },
    {
      name: 'Alex Chen',
      text: "The CrossFit program here is phenomenal. The coaches push you to be your best while making sure your form is perfect. Can't imagine training anywhere else.",
      rating: 5,
      role: 'Member for 3 years',
    },
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: '/month',
      features: [
        'Access to gym floor',
        'Locker room access',
        'Free Wi-Fi',
        '2 group classes/week',
        'Basic fitness assessment',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: 59,
      period: '/month',
      features: [
        'Unlimited gym access',
        'All group classes',
        'Personal training (2x/month)',
        'Nutrition guidance',
        'Sauna & steam room',
        'Towel service',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: 99,
      period: '/month',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Custom meal plans',
        'Recovery zone access',
        'Guest passes (4/month)',
        'Priority booking',
        'Exclusive workshops',
      ],
      popular: false,
    },
  ]

  const stats = [
    { number: '10K+', label: 'Active Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '100+', label: 'Weekly Classes' },
    { number: '15+', label: 'Years Experience' },
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Dumbbell className="w-7 h-7 sm:w-8 sm:h-8 text-red-500" />
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
                JERAI<span className="text-red-500"> GYM</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25"
              >
                Join Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-zinc-400 hover:text-white py-2 text-base font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 mt-2"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-gym.jpg"
            alt="Modern gym interior with workout equipment"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/1920x1080/1a1a2e/e94560?text=JERAI+GYM'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-1.5 mb-6">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400">#1 Rated Gym in the City</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              FORGE YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                STRONGEST
              </span>
              <br />
              SELF
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-8 leading-relaxed">
              Transform your body and mind at JERAI GYM. World-class equipment,
              expert trainers, and a community that pushes you beyond your limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('pricing')}
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30 flex items-center justify-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('classes')}
                className="border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:bg-zinc-900 flex items-center justify-center gap-2"
              >
                Explore Classes
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-800">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 sm:py-12 text-center">
                <div className="text-3xl sm:text-4xl font-black text-red-500 mb-1">{stat.number}</div>
                <div className="text-sm sm:text-base text-zinc-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/about-gym.jpg"
                  alt="Gym training area with modern equipment"
                  className="w-full h-96 lg:h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/1a1a2e/e94560?text=About+Us'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-red-600 rounded-xl p-4 sm:p-6 shadow-2xl shadow-red-600/20">
                <div className="text-3xl sm:text-4xl font-black">15+</div>
                <div className="text-sm font-medium text-red-100">Years of Excellence</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-red-500" />
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                We Are More Than
                <br />
                <span className="text-red-500">Just A Gym</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                At JERAI GYM, we believe fitness is a journey, not a destination. Our state-of-the-art
                facility is equipped with the latest technology and led by world-class trainers who are
                dedicated to helping you achieve your goals. Whether you're a beginner or a seasoned
                athlete, we have everything you need to transform.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Dumbbell className="w-5 h-5" />, text: 'Premium Equipment' },
                  { icon: <Users className="w-5 h-5" />, text: 'Expert Coaching' },
                  { icon: <Heart className="w-5 h-5" />, text: 'Wellness Programs' },
                  { icon: <Trophy className="w-5 h-5" />, text: 'Proven Results' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-red-500 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors"
              >
                Learn More About Us
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-red-500" />
              Why Choose Us
              <div className="w-8 h-0.5 bg-red-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Why <span className="text-red-500">JERAI GYM</span>?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              We provide everything you need to reach your fitness goals and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Dumbbell className="w-7 h-7" />,
                title: 'Modern Equipment',
                description: 'State-of-the-art machines and free weights from top brands, regularly maintained and updated.',
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: 'Expert Trainers',
                description: 'Certified professionals who design personalized programs tailored to your unique goals.',
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: 'High-Energy Classes',
                description: 'Over 100 weekly group classes from yoga to HIIT, ensuring variety and motivation.',
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: 'Goal Tracking',
                description: 'Advanced body composition analysis and progress tracking to keep you on course.',
              },
              {
                icon: <Heart className="w-7 h-7" />,
                title: 'Recovery Zone',
                description: 'Sauna, steam room, and cold plunge pools for optimal muscle recovery and relaxation.',
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: 'Open 24/7',
                description: 'Train on your schedule with 24/7 access to our fully equipped facility, 365 days a year.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/5"
              >
                <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-red-500" />
              Our Classes
              <div className="w-8 h-0.5 bg-red-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Popular <span className="text-red-500">Classes</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              From high-intensity training to mindful movement, find the perfect class for your fitness journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {classes.map((cls) => (
              <div
                key={cls.name}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = cls.fallback
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {cls.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-zinc-400 mb-4 leading-relaxed">{cls.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Clock className="w-4 h-4" />
                      <span>{cls.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Users className="w-4 h-4" />
                      <span>{cls.trainer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 sm:py-28 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-red-500" />
              Meet The Team
              <div className="w-8 h-0.5 bg-red-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Expert <span className="text-red-500">Trainers</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Our certified trainers are dedicated to helping you achieve your fitness goals with personalized attention.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/30 transition-all duration-300"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = trainer.fallback
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                  {/* Social icons overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={trainer.socials.instagram} className="w-9 h-9 rounded-full bg-zinc-950/80 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href={trainer.socials.twitter} className="w-9 h-9 rounded-full bg-zinc-950/80 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-red-500 text-sm font-medium mb-3">{trainer.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-red-500" />
              Pricing Plans
              <div className="w-8 h-0.5 bg-red-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Choose Your <span className="text-red-500">Plan</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Flexible plans designed to fit every lifestyle and budget. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-red-600/20 to-zinc-900 border-2 border-red-600 shadow-xl shadow-red-600/10'
                    : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-zinc-500">$</span>
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-zinc-500">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3.5 rounded-xl font-bold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25 hover:shadow-red-600/40'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-red-500" />
              Testimonials
              <div className="w-8 h-0.5 bg-red-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              What Our <span className="text-red-500">Members</span> Say
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-12 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[activeTestimonial].text}&rdquo;
              </p>
              <div>
                <div className="text-lg font-bold">{testimonials[activeTestimonial].name}</div>
                <div className="text-red-500 text-sm font-medium">{testimonials[activeTestimonial].role}</div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === activeTestimonial ? 'bg-red-500 w-8' : 'bg-zinc-700 hover:bg-zinc-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-zinc-950 to-red-600/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Ready to <span className="text-red-500">Transform</span> Your Life?
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of members who have already started their fitness journey.
            Your first week is on us — no commitment, no excuses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('pricing')}
              className="group bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30 flex items-center justify-center gap-2"
            >
              Claim Your Free Week
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-zinc-700 hover:border-zinc-500 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:bg-zinc-900 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-red-500" />
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
                Contact <span className="text-red-500">Us</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Have questions? Want a tour of our facilities? Drop us a message and
                our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-zinc-400">123 Fitness Avenue, Downtown District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-zinc-400">info@jeraigym.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Working Hours</h4>
                    <p className="text-zinc-400">Open 24/7 — Never closed, never an excuse!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you for your message! We will get back to you soon.')
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your fitness goals..."
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:shadow-red-600/25 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-7 h-7 text-red-500" />
                <span className="text-xl font-extrabold tracking-tight">
                  JERAI<span className="text-red-500"> GYM</span>
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Transform your body, elevate your mind. Your fitness journey starts here at JERAI GYM.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Instagram className="w-4 h-4" />, href: '#' },
                  { icon: <Facebook className="w-4 h-4" />, href: '#' },
                  { icon: <Twitter className="w-4 h-4" />, href: '#' },
                  { icon: <Youtube className="w-4 h-4" />, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="space-y-3">
                {['About Us', 'Our Classes', 'Trainers', 'Pricing', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase().replace('our ', '').replace(' us', ''))}
                    className="block text-zinc-500 hover:text-red-500 text-sm transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Classes */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Classes</h4>
              <div className="space-y-3">
                {['Yoga & Flexibility', 'Boxing & Kickboxing', 'Strength Training', 'CrossFit & HIIT', 'Personal Training'].map((cls) => (
                  <p key={cls} className="text-zinc-500 text-sm">
                    {cls}
                  </p>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Opening Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-zinc-500">
                  <span>Monday - Friday</span>
                  <span className="text-zinc-300">24 Hours</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Saturday</span>
                  <span className="text-zinc-300">24 Hours</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Sunday</span>
                  <span className="text-zinc-300">24 Hours</span>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <p className="text-red-500 font-semibold">Always Open</p>
                  <p className="text-zinc-500 text-xs mt-1">365 days a year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-600 text-sm">
              &copy; {new Date().getFullYear()} JERAI GYM. All rights reserved. Built with passion for fitness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
