import PageLayout from '../components/page-layout';
import ProjectItem from '@/components/project-item';
import londonWheelImgSrc from '../assets/images/london-wheel.jpg'
import mxflowImgSrc from '../assets/images/mxflow.png'
import midiplexImgSrc from '../assets/images/midiplex.jpeg'
import chromeImgSrc from '../assets/images/chrome.jpg'
import portfolioImgSrc from '../assets/images/portfolio.png'
import repaintImgSrc from '../assets/images/repaint.png'

function ProjectsPage() {
    return (
        <PageLayout
            path='/projects'
            heroImgSrc={londonWheelImgSrc}
            heroImgInfo={{ camera: 'Fujifilm XT-4', location: 'London, UK', lens: '18-55mm' }}>

            <h1 className='mt-16'> Projects </h1>
            <p className='mb-16'> 
                Here you'll find some pet projects of mine with a short write-up. Nothing too crazy here, but consider these
                projects a microcosm of my interests, skills, and professional experience. Please do visit the readmes on GitHub or peruse
                the codebase for a deeper dive.
            </p>
            <hr />
            <ProjectItem 
                title='MXFlow' 
                description='A proof-of-concept node-graph editor written in TypeScript and a mix of HTML/SVG. Designed for integration with Vue, React, etc.' 
                stack='TypeScript, Webpack, HTML, CSS'
                imgSrc={mxflowImgSrc} 
                link='https://jhavrick.github.io/mxflow/'
            />
            <hr />

            <ProjectItem 
                title='Midiplex' 
                description='Node-based MIDI toolkit for filtering and manipulating MIDI messages using the WebMIDI API. Great for mapping MIDI controllers to hardware synths.' 
                stack='TypeScript, Rollup, Node.js, Jest, WebMIDI'
                imgSrc={midiplexImgSrc} 
                link='https://github.com/JHAvrick/midiplex'
            />
            <hr />

            <ProjectItem 
                title='CRXServer' 
                description='A library for rapidly packing (.crx) and deploying a self-hosted Chrome extension, ideal for prototyping and testing.' 
                stack='JavaScript, Node.js, Express, Ngrok'
                imgSrc={chromeImgSrc} 
                link='https://github.com/JHAvrick/crx-server'
            />
            <hr />

            <ProjectItem 
                title='Re:paint' 
                description='This one is just a little, minimalist color-perception game built for mobile-sized screens and packaged using Capacitor.js (Ionic fork of Cordova).' 
                stack='TypeScript, Vue.js, Webpack, Phaser (WebGL)'
                imgSrc={repaintImgSrc} 
                link='https://jhavrick.github.io/repaint/'
            />
            <hr />

            <ProjectItem 
                title='Portfolio Site' 
                description='This very portfolio site, built with React, inspired by similar projects.' 
                stack='TypeScript, React, Vite, Tailwind, Framer Motion'
                imgSrc={portfolioImgSrc} 
                link='https://github.com/JHAvrick/jhavrick'
            />
            <hr />

            <p> <i> Plus many other projects and code samples available on my GitHub... </i> </p>
            <hr />

        </PageLayout>
    )
}

export default ProjectsPage;