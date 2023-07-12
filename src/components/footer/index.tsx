import facebook from '../../assets/icon/icon-facebook.svg'
import instagram from '../../assets/icon/icon-instagram.svg'
import gitHub from '../../assets/icon/icon-github-original.svg'
import linkedin from '../../assets/icon/icon-linkedin-original.svg'
import logoEfood from '../../assets/Logo-Efood/logo-efood.svg'
import { FooterContainer, LinkFooter } from './styled'

export default function Footer() {
  return (
    <FooterContainer>
      <img src={logoEfood} alt="efood" />
      <nav>
        <LinkFooter href="https://www.instagram.com/luiz_r_andrade/">
          <img src={instagram} alt="instagram" />
        </LinkFooter>
        <LinkFooter href="https://web.facebook.com/luis.rodriges.9400/">
          <img src={facebook} alt="facebook" />
        </LinkFooter>
        <LinkFooter href="https://github.com/LuizFernandoDeveloper">
          <img src={gitHub} alt="github" />
        </LinkFooter>
        <LinkFooter href="https://www.linkedin.com/in/luiz-fernando-rodrigues-24bb01167/">
          <img src={linkedin} alt="lenkedin" />
        </LinkFooter>
      </nav>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContainer>
  )
}
