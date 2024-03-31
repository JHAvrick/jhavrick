import './home.css';
import PageLayout from "../components/page-layout";
import londonWheelImgSrc from '../assets/images/london-wheel.jpg'

function ArticlesPage(){
    return (
        <PageLayout 
            path="/articles" 
            heroImgSrc={londonWheelImgSrc} 
            heroImgInfo={{ camera: 'Fujifilm XT-4', location: 'London, UK', lens: '18-55mm' }}>

            ioasjdfp oiasjdpfojis

        </PageLayout>
    )
}

export default ArticlesPage;