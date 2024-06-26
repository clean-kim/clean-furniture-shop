import { github_logo } from '@assets/img/icons';

export function Footer() {
  return (
    <footer className='footer'>
      <span>
        &copy;2024
      </span>
      <div>
        <span className='privacy'>
          Privacy policy
        </span>
        <ul>
          <li><img src={github_logo} alt='github' className='sns_icon' /></li>
        </ul>
      </div>
    </footer>
  );
}