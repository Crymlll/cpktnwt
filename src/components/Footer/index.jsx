import "./style.css"
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/aulia.rahman.zulfi/">
        <Icon className="icon" icon="brandico:facebook-rect" width="48" rel="noreferrer"/>
      </a>
      <a href="https://www.instagram.com/auliarahmanz/" rel="noreferrer">
        <Icon className="icon" icon="cib:instagram" width="48" />
      </a>
      <a href="https://www.linkedin.com/in/aulia-rahman-zulfi-634a71205/" rel="noreferrer">
        <Icon className="icon" icon="akar-icons:linkedin-fill" width="48" />
      </a>
      <a href="https://discord.gg/x2tKucs" rel="noreferrer">
        <Icon className="icon" icon="bi:discord" width="48" />
      </a>
      <a href="https://github.com/Crymlll" rel="noreferrer">
        <Icon className="icon" icon="akar-icons:github-fill" width="48" />
      </a>
    </footer>
  )
}

export default Footer