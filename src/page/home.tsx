import './home.css';
import PageLayout from "../components/page-layout";
import { LinkListContainer, LinkList } from '../components/link-list';
import { FaLink } from "react-icons/fa";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaReact, FaWrench  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import PortraitImgSrc from '../assets/images/portrait.jpg'
import lighthouseImgSrc from '../assets/images/lighthouse.jpg'


import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaHtml5, FaSass, FaVuejs, FaBootstrap   } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoJquery } from "react-icons/bi";
import { SiWebpack, SiRollupdotjs, SiVitess, SiBabel,SiMocha, SiJest, SiExpress, SiNodedotjs } from "react-icons/si";

function HomePage(){
    return (
        <PageLayout 
            path="/" 
            heroImgSrc={lighthouseImgSrc}
            heroImgInfo={{ camera: 'Fujifilm XT-4', location: 'Reykjavík, Iceland', lens: '18-55mm'}}>

            <div className='flex align-center justify-center mt-10'>
                <div className='portrait'>
                    {/* <div className='portrait__backdrop'></div> */}
                    <img className='portrait__img' src={PortraitImgSrc} />
                </div>
            </div>

            <h1 className='header-text flex items-center mt-10 mb-8'>
                <div>
                    <span className='accent-color'>Joshua Avrick</span> 
                    <span className='offset-color'> is a software developer building performant, reliable web applications with a special focus on the modern front end ecosystem
                    </span>
                </div>
            </h1>
            <hr className='mb-5' />
            <section>
                <LinkListContainer>
                    <LinkList icon={<FaLink />} label="Links" links={[
                        { href: 'https://github.com/JHAvrick', text: 'GitHub' },
                        { href: 'https://www.linkedin.com/in/joshavrick/', text: 'LinkedIn' }
                    ]} />
                    <LinkList icon={<HiOutlineAtSymbol />} label="Contact" links={[
                        { href: 'mailto:josh@avrick.dev', text: 'josh@avrick.dev' },
                        { href: '/contact', text: 'Contact Form' },
                    ]} />
                    <LinkList icon={<IoLocationSharp />} label="Location" links={[
                        { href: '', text: 'Alexandria, VA' },
                        { href: '', text: 'DC-Metro Area' },
                    ]} />
                </LinkListContainer>
            </section>
            <hr/>
            <section className='my-10'>
                <p>Welcome! You've made it, you're here, you're in the right place.</p>

                <p>
                    Take your shoes off, kick back, relax, make yourself at home and while you're here, 
                    please do take a look around. You might find something of interest on the <a href='/projects'>projects</a> page or you can cut out
                    the middleman and check out my <a href='https://github.com/JHAvrick'>GitHub</a> profile directly.
                </p>

                <p> 
                    Currently, I am <i><strong><span className='accent-color'>open for work. </span></strong></i>
                     If you'd like to get in touch with me about that or anything at all, don't hesitate to reach 
                     out via <a href='mailto:josh@avrick.dev' target='_blank' rel='noopener noreferrer'>email</a> or this <a href='/contact'>contact form</a>.
                </p> 
        
                <a className='button' href="/jhavrick/downloads/Joshua_Avrick_Resume_2024.pdf" target='_blank'> Resume/CV <IoMdDownload className='ml-5' /> </a>
            </section>
            <hr className='mb-5' />
            <section>
                <LinkListContainer>
                    <LinkList hideHeader icon={<FaCode />} label="Languages" links={[
                        { href: '', text: 'TypeScript', icon: <SiTypescript /> },
                        { href: '', text: 'JavaScript (ES6+)', icon: <IoLogoJavascript />},
                        { href: '', text: 'Java', icon: <FaJava /> },
                        { href: '', text: 'HTML', icon: <FaHtml5 /> },
                        { href: '', text: 'CSS', icon: <FaCss3Alt /> },
                        { href: '', text: 'SCSS', icon: <FaSass /> },
                    ]} />
                    <LinkList hideHeader icon={<FaReact />} label="Frameworks" links={[
                        { href: '', text: 'React', icon: <FaReact />},
                        { href: '', text: 'Vue', icon: <FaVuejs />},
                        { href: '', text: 'Tailwind', icon: <SiTailwindcss />},
                        { href: '', text: 'Next.js / Nuxt.js', icon: <TbBrandNextjs />},
                        { href: '', text: 'Bootstrap', icon: <FaBootstrap />},
                        { href: '', text: 'jQuery', icon: <BiLogoJquery />},
                    ]} />
                    <LinkList hideHeader icon={<FaWrench />} label="Tooling" links={[
                        { href: '', text: 'Webpack', icon: <SiWebpack />},
                        { href: '', text: 'Rollup', icon: <SiRollupdotjs />},
                        { href: '', text: 'Vite', icon: <SiVitess />},
                        { href: '', text: 'Babel', icon: <SiBabel />},
                        { href: '', text: 'Mocha', icon: <SiMocha />},
                        { href: '', text: 'Jest', icon: <SiJest />},
                    ]} />
                    <LinkList hideHeader icon={<FaWrench />} label="Back End" links={[
                        { href: '', text: 'Node.js', icon: <SiNodedotjs /> },
                        { href: '', text: 'Express', icon: <SiExpress /> },
                    ]} />
                </LinkListContainer>
            </section>
            <hr/>
            
        </PageLayout>
    )
}

export default HomePage;