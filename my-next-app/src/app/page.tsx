import Image from 'next/image'
import logo from "@/app/public/images/logo.svg"
import { CartButton } from './components/CartButton'
import { ModelAnimation } from './components/ModelAnimation'
const Home = () => {
  interface Mails {
    id: number;
    title: string;
    text: string;
    image: string;
    price: number | string;
  }
  const mails: Mails[] = [
    {
      id: Date.now(),
      title: "Lorem",
      text: "lorem some text info about mt mails products",
      image: "/",
      price: 100
    },
    {
      id: Date.now(),
      title: "Lorem",
      text: "lorem some text info about mt mails products",
      image: "/",
      price: 100
    },
    {
      id: Date.now(),
      title: "Lorem",
      text: "lorem some text info about mt mails products",
      image: "/",
      price: 100
    },
    {
      id: Date.now(),
      title: "Lorem",
      text: "lorem some text info about mt mails products",
      image: "/",
      price: 100
    },
  ]

  return (
    <div className="wrapper">
      <header className="header fixed z-10 w-full backdrop-blur-md border-b- border-white-300">
        <div className="header__container shadow-bottom flex items-center justify-between
         container py-3">
          <a href="/" className='header__logo flex items-center gap-3'>
            <Image src={logo} width={90} height={90} alt="logo"/>
            <span className='font-[700] text-2xl'>Lucky Mailer</span>
          </a>
          <nav className="header__menu text">
            <ul className="flex items-center gap-8">
              <li><a href="#mails">Mails</a></li>
              <li><a href="#faq">How it works</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <section className="hero mb-11">
          <div className="hero__container w-full h-[100vh] bg-pink-300 relative">
              <div className='hero__content absolute top-1/2 left-1/2 translate-x-[-50%]
               translate-y-[-50%] flex items-center gap-4'>
                <div>
                  <h1 className='title'>Lorem ipsum dolor sit.</h1>
                  <p className='mb-10 text'>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Veritatis culpa quisquam, maxime quae in eius quibusdam consectetur
                      labore a debitis.</p>
                  <a href="#mails" className="link__general">
                    See all mails <span className="hero__linkdecor">&#8594;</span>
                  </a>
                </div>
                <div className='hero__decor max-w-[300px] max-h-[300px]'>
                  <ModelAnimation />
                </div>
              </div>
          </div>
        </section>
        <section id='mails' className="mails mb-11">
          <div className="mails__container container">
            <h2 className='subtitle mb-9'>Mails</h2>
            <div className="mails__products">
              <nav className="mails__menu">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                 gap-6">
                  {mails.map(mail => (
                    <li key={mail.id} className="rounded-md">
                      <Image src={mail.image} layout='responsive' width={100} height={50}
                      alt="product image" className='border-yellow-400 border rounded-md 
                      mb-5' />
                      <h3 className='card__title mb-2'>{mail.title}</h3>
                      <p className='mb-5 small__text'>
                        {mail.text}
                      </p>
                      <div className='flex items-center justify-between'>
                        <span className='text'>{mail.price}$</span>
                        <CartButton cart={false} link={false} />
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <section id='faq' className='faq'>
          <div className="faq__container container">
            <h2 className='subtitle mb-9'>FAQ</h2>
            <div className='faq__content flex justify-between items-center'>
              <nav className='faq__steps'>
                <ul className='flex flex-col gap-3'>
                  <li className='faq__step relative flex items-start gap-5'>
                    <span className='rounded-full bg-slate-400 w-[30px] h-[30px] flex 
                    items-center justify-center'>1</span>
                    <div>
                      <p className='text max-w-[600px]'>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Neque, laudantium. Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur 
                      </p>
                    </div>
                  </li>
                  <li className='faq__step relative flex items-start gap-5'>
                    <span className='rounded-full bg-slate-400 w-[30px] h-[30px] flex 
                    items-center justify-center'>2</span>
                    <div className='flex flex-col gap-4'>
                      {/* <Image src={} width={} height={} alt='example work photo'/> */}
                      <p className='text max-w-[600px]'>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Neque, laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloremque nihil obcaecati minus hic, accusantium, ea necessitatibus eveniet nobis aspernatur praesentium explicabo laborum doloribus nostrum quae iste saepe commodi laboriosam nam porro consectetur placeat reprehenderit, distinctio accusamus! Mollitia atque incidunt nemo eligendi quia quis eaque, nulla impedit quisquam veritatis laborum omnis ipsam, maxime, voluptates repudiandae possimus a ab vel corporis animi. Ducimus, cupiditate. Praesentium voluptatibus porro suscipit voluptatem! Quis ut perferendis ducimus eligendi voluptatem animi quibusdam temporibus labore laborum ipsam? Officia fugiat veritatis nihil tenetur aliquid autem minus enim obcaecati, ea aut recusandae, facilis unde cumque fugit cum natus? Consectetur.
                      </p>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className='faq__gallery'></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer border-t-[1px] border-pink-300 py-1 mt-8">
        <div className="footer__container container">
          <div className="footer__logo w-full flex justify-center">
            <a href="/" className='flex items-center gap-3'>
              <Image src={logo} width={60} height={60} alt="logo"/>
              <span className='font-[700] text-xl'>Lucky Mailer</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home