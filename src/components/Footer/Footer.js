import React from 'react'
import './Footer.css'
import IconButton from '../buttons/IconButton'
import { IoIosArrowRoundForward } from "react-icons/io";
import colors from '../../config/colors';
import { footerLinksCares, footerLinksVisiting, footerLinksRow } from '../../data/footerLinks';
import links from '../../config/links';
import { icon_facebook, icon_instagram, icon_linkedin, icon_tiktok, icon_x, icon_youtube } from '../../config/icons'
import LogoIcon from '../widgets/LogoIcon';
import FooterLinks from './FooterLinks';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-buttons'>
                <IconButton
                    text={'Apply Now'}
                    Icon={IoIosArrowRoundForward}
                    onClick={() => window.location.href = 'https://www.adelphi.edu/apply/'}
                    fromColor={colors.black}
                    toColor={colors.black}
                    height={'60px'}
                    width={'450px'}
                    isLeft={false}
                    iconColor={colors.logoYellow}
                    textColor={colors.white}
                />
                <IconButton
                    text={'Plan a Visit'}
                    Icon={IoIosArrowRoundForward}
                    onClick={() => window.location.href = 'https://www.adelphi.edu/visit/'}
                    fromColor={colors.black}
                    toColor={colors.black}
                    height={'60px'}
                    width={'450px'}
                    isLeft={false}
                    iconColor={colors.logoYellow}
                    textColor={colors.white}
                />
                <IconButton
                    text={'Give Now'}
                    Icon={IoIosArrowRoundForward}
                    onClick={() => window.location.href = 'https://www.adelphi.edu/giving/'}
                    fromColor={colors.black}
                    toColor={colors.black}
                    height={'60px'}
                    width={'450px'}
                    isLeft={false}
                    iconColor={colors.logoYellow}
                    textColor={colors.white}
                />
            </div>
            <div className='footer-background' >
                <div className='footer-title-container'>
                    <a href={links.linkHome} className='footer-au-title'>Adelphi University</a>
                    <a href={links.googleMap} className='footer-subtitle'>One South Avenue | P.O. Box 701 Garden City, NY 11530-0701</a>
                    <a href={'#'} className='footer-subtitle'>P: 800.Adelphi (233.5744)</a>
                    <div className='footer-icons'>
                        <LogoIcon href={"https://www.facebook.com/AdelphiU"} src={icon_facebook} alt="icon_facebook" />
                        <LogoIcon href={"https://twitter.com/AdelphiU"} src={icon_x} alt="icon_x" />
                        <LogoIcon href={"https://www.instagram.com/adelphiu"} src={icon_instagram} alt="icon_instagram" />
                        <LogoIcon href={"https://www.tiktok.com/@adelphiu"} src={icon_tiktok} alt="icon_tiktok" />
                        <LogoIcon href={"https://www.youtube.com/AdelphiUniv"} src={icon_youtube} alt="icon_youtube" />
                        <LogoIcon href={"https://www.linkedin.com/school/adelphi-university/"} src={icon_linkedin} alt="icon_linkedin" />
                    </div>
                </div>
                <div className='footer-link-container'>
                    <FooterLinks text={'VISITING ADELPHI'} linkData={footerLinksVisiting} />
                    <FooterLinks text={'ADELPHI CARES'} linkData={footerLinksCares} />
                </div>
            </div>
            <div className='footer-bottom-container'>
                <div className='footer-bottom'>
                    <FooterLinks text={null} linkData={footerLinksRow} />
                    <div className="flexible-spacer" />
                    <p>Hello, it's Winn! NYC 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
