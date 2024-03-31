import { Link } from 'react-router-dom';
import './link-list.css';
import { ReactNode } from 'react';

interface LinkListProps {
    icon?: React.ReactNode;
    label: string;
    links: { icon?: React.ReactNode, href: string, text: string }[];
    hideHeader?: boolean;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

function LinkListContainer(props: PropsWithChildren<{}>){
    return <div className='link-list-container'>
        {props.children}
    </div>
}

function LinkList(props: LinkListProps){
    return (
        <div className='link-list'>
            {!props.hideHeader &&
            <h2 className='link-list__header accent-bg-text'> <span className='mr-2'>{props.icon}</span> {props.label}</h2>}
            <ul className='link-list__items'>
                {props.links.map((link, i) => {
                    return link.href.length > 0 ? 
                    <li className='link-list__item' key={i}> 
                        <Link to={link.href} target="_blank" rel="noopener noreferrer" > 
                            {link.icon && <span className='mr-2'>{link.icon}</span>}
                            {link.text} 
                        </Link> 
                    </li> :
                    <li className='link-list__item' key={i}> 
                        {link.icon && <span className='mr-2'>{link.icon}</span>}
                        {link.text} 
                    </li>
                })}
            </ul>
        </div>
    )
}

export { LinkListContainer, LinkList };