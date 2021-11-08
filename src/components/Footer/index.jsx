import "./style.css"
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/aulia.rahman.zulfi/" target="_blank">
        <Icon className="icon" icon="brandico:facebook-rect" width="72" />
      </a>
      <a href="https://www.instagram.com/auliarahmanz/" target="_blank">
        <Icon className="icon" icon="cib:instagram" width="72" />
      </a>
      <a href="https://www.linkedin.com/in/aulia-rahman-zulfi-634a71205/" target="_blank">
        <Icon className="icon" icon="akar-icons:linkedin-fill" width="72" />
      </a>
      <a href="https://discord.gg/x2tKucs" target="_blank">
        <Icon className="icon" icon="bi:discord" width="72" />
      </a>
      <a href="https://github.com/Crymlll" target="_blank">
        <Icon className="icon" icon="akar-icons:github-fill" width="72" />
      </a>
    </footer>
  )
}

export default Footer