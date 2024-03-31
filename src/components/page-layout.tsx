import './page-layout.css';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { IoCameraOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaCodepen  } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"
import React from 'react';

interface PageLayoutProps {
    path: string;
    heroImgSrc: string;
    heroImgInfo: {
        camera: string;
        location: string;
        lens: string;
    };
    children: React.ReactNode;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger the animations of children by 0.1 seconds
        },
    },
};

const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    },
};


function PageLayout(props: PageLayoutProps) {
    return <>
        <div className='page-layout'>
            <section className='page-layout__sidebar'>
                <Link to="/" className='page-layout__title'>
                    Joshua Avrick
                </Link>
                <div className='page-layout__hero-desc hero-desc-lg'>
                    <IoCameraOutline className='page-layout__hero-cam-icon mr-5' />
                    <span> { props.heroImgInfo.location } </span>
                    <span> { props.heroImgInfo.camera } </span>
                    <span> { props.heroImgInfo.lens } </span>
                </div>
            </section>
                <AnimatePresence>
                    <motion.section
                        className='page-layout__hero'
                        transition={{ duration: 1 }}
                        initial={{ opacity: .5 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>

                        <div className='page-layout__hero-overlay'></div>
                        <Tilt tiltEnable={false} scale={1.05} transitionSpeed={5500} className='w-full h-full'>
                            <img src={props.heroImgSrc} alt='hero' />
                        </Tilt>
                        <div className='page-layout__hero-desc hero-desc-sm'>
                            <IoCameraOutline className='page-layout__hero-cam-icon mr-5' />
                            <span> { props.heroImgInfo.location } </span>
                            <span> { props.heroImgInfo.camera } </span>
                            <span> { props.heroImgInfo.lens } </span>
                        </div>
                    </motion.section>
                </AnimatePresence>
            <section className='page-layout__body'>
                <header>
                    <nav className='page-layout__nav' role='navigation'>
                        <Link to="/" className='page-layout__title title-collapsed'>
                            Joshua Avrick
                        </Link>
                        <ul className='page-layout__nav-list'>
                            <li> <Link to='/' className={props.path === '/' ? 'current-link' : ''} >Home</Link> </li>
                            {/* <li> <Link to='/articles' className={props.path === '/articles' ? 'current-link' : ''}>Articles</Link> </li> */}
                            <li> <Link to='/projects' className={props.path === '/projects' ? 'current-link' : ''}>Projects</Link> </li>
                            <li> <Link to='/contact' className={props.path === '/contact' ? 'current-link' : ''}>Contact</Link> </li>
                        </ul>
                    </nav>
                </header>
                <main className='page-layout__main'>
                    <motion.div
                        className='page-layout__content'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible">
                        <AnimatePresence>
                            {React.Children.map(props.children, (child, index) => (
                                <motion.div key={index} variants={childVariants}>
                                    {child}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    <footer className='flex align-center p-5 opacity-50 text-xl'>
                        <a title='GitHub' className='icon-link mr-4' href='https://github.com/JHAvrick' target='_blank' rel='noopener noreferrer'>
                            <FaGithub />
                        </a>
                        <a title='LinkedIn' className='icon-link mr-4' href='https://www.linkedin.com/in/joshavrick/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin />
                        </a>
                        <a title='CodePen' className='icon-link mr-4' href='https://codepen.io/jhavrick' target='_blank' rel='noopener noreferrer'>
                            <FaCodepen />
                        </a>
                    </footer>
                </main>
            </section>
        </div>
    </>
}

export default PageLayout;