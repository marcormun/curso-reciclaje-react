import { useState } from 'react';

export function TwitterFollowCard ({ userName='unknown', initialIsFollowing, children }) {

    const [isFollowingState, setIsFollowingState] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowingState(!isFollowingState);
    }

    const buttonClassName = isFollowingState ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const imgSrc = `https://unavatar.io/${userName}?fallback=https://avatars.githubusercontent.com/u/66378906?v=4`;

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imgSrc}
                    alt="Avatar gato" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
    
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{isFollowingState ? 'Siguiendo' : 'Seguir'}</span>
                    
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    );
}