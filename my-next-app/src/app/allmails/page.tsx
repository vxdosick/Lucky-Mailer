import Image from 'next/image'
import { GetAllMails } from '../components/GetAllMails';
const addmails = () => {

    return (
        <div className="wrapper">
            <header className="header fixed z-10 w-full backdrop-blur-md border-b 
            border-white-300">
                <div className="header__container shadow-bottom flex items-center 
                justify-between container py-3">
                    <a href="/" className='header__logo flex items-center gap-3'>
                        <Image src={"/images/logo.svg"} width={90} height={90} alt="logo"/>
                        <span className='font-[700] text-2xl'>Lucky Mailer</span>
                    </a>
                    <nav className="header__menu text">
                      <ul className="flex items-center gap-8">
                        <li><a href="#mails">test</a></li>
                        <li><a href="#faq">test</a></li>
                      </ul>
                    </nav>
                </div>
            </header>
            <main className="main min-h-[calc(100vh-135px)] pt-[114px]">
                <section id='mails' className="mails pt-11">
                    <div className="mails__container container">
                      <h2 className='subtitle mb-9'>Mails</h2>
                      <div className="mails__products">
                          <div className='mails__filter w-full border border-lightgray-300 py-3 
                          rounded-md mb-11 px-5'>
                              <nav className='filter__menu mb-9'>
                                <ul className='flex items-center justify-between'>
                                    <li><button>test</button></li>
                                    <li><button>test</button></li>
                                    <li><button>test</button></li>
                                    <li>
                                        <div>
                                            <input type="text" className='border 
                                            border-lightgray-300 rounded-md px-3' />
                                            <button>Find</button>
                                        </div>
                                    </li>
                                </ul>
                              </nav>
                          </div>
                          <nav className="mails__menu mb-9">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                            lg:grid-cols-4
                             gap-6">
                              <GetAllMails />
                            </ul>
                          </nav>
                          <a href="/" className='link__general'>&#8592;</a>
                      </div>
                    </div>
                </section>
            </main>
            <footer className="footer border-t-[1px] border-pink-300 py-1 mt-8">
                <div className="footer__container container">
                  <div className="footer__logo w-full flex justify-center flex-col 
                  items-center">
                    <a href="/" className='flex items-center gap-3 mb-2'>
                      <Image src={"/images/logo.svg"} width={60} height={60} alt="logo"/>
                      <span className='font-[700] text-xl'>Lucky Mailer</span>
                    </a>
                    <a href="#" className='hover:underline'>Privacy Policy</a>
                  </div>
                </div>
            </footer>
        </div>
    )
}

export default addmails