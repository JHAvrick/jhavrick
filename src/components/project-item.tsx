import './project-item.css';

interface ProjectItemProps {
    title: string;
    description: string;
    stack: string;
    imgSrc: string;
    link: string;
}

function ProjectItem(props: ProjectItemProps){
    return (
        <div className='project-item'>
            <h3 className='project-item__title title-sm'>{props.title}</h3>
            <div className='project-item__preview'>
                <img className='project-item__img' src={props.imgSrc} alt={props.title} />
            </div>
            <div className='project-item__content'>
                <h3 className='project-item__title'>{props.title}</h3>
                <p className='project-item__description'>{props.description}</p>
                <p className='project-item__stack accent-color'><strong>{props.stack} </strong></p>
                <a href={props.link} target='_blank' rel='noopener noreferrer' className='project-item__link'>
                    View Project
                </a>
            </div>
        </div>
    )
}

export default ProjectItem;