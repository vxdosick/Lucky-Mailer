import Image from 'next/image'
import logo from "@/app/public/images/logo.svg"
const Home = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container shadow-bottom flex items-center justify-between
         container py-4">
          <a href="/" className='header__logo flex items-center gap-3'>
            <Image src={logo} width={100} height={100} alt="logo"/>
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
          <div className="hero__container container"></div>
        </section>
        <section className="mails mb-11">
          <div className="mails__container container">
            <h2 className='subtitle mb-9'>Mails</h2>
            <div className="mails__products">
              <nav className="mails__menu">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                 gap-6">
                  <li className="bg-slate-500">11112</li>
                  <li className="bg-slate-500">11112</li>
                  <li className="bg-slate-500">11112</li>
                  <li className="bg-slate-500">11112</li>
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
                      <p className='text max-w-[600px]'>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Neque, laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur 
                        
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
      <footer className="footer">
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