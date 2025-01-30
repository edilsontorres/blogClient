import * as F from './FooterStyle';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <footer>
                <F.CopyrightContainer>
                    <h3>Edilson Torres</h3>
                    <F.AreaContact>
                        <F.ContainerIcons>
                            <a href="https://www.google.com" target="_blank"><FaInstagram /></a>
                        </F.ContainerIcons>
                        <F.ContainerIcons>
                            <a href="https://www.google.com" target="_blank"><FaGithub /></a>
                        </F.ContainerIcons>
                        <F.ContainerIcons>
                            <a href="https://www.google.com" target="_blank"><FaLinkedin /></a>
                        </F.ContainerIcons>
                    </F.AreaContact>
                </F.CopyrightContainer>

            </footer>
        </>
    );
}