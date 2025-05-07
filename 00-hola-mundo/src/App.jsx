import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
  const users = [
    { userName: 'marcushion', name: 'Marc Cordón Muñoz', isFollowing: false },
    { userName: 'pheralb', name: 'Pablo Heraldo', isFollowing: true },
    { userName: 'josemariacordoba', name: 'José María Córdoba', isFollowing: false },
    { userName: 'darkarkills', name: 'Carlos Navajas Hans', isFollowing: true },
  ];
  return (
    <section className='App'>
        {
          users.map(user => {
            const { userName, name, isFollowing } = user;
            return (
              <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}>
                {name}
              </TwitterFollowCard>
            )
          })
        }
    </section>
  );
}