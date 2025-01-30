import * as H from './HeaderStyle';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();


    const redrectHome = () => {
        return navigate(`/`);
    }

    return (
        <>
            <H.HeadContainer>
                <H.HeadContainerArea>
                    <h4>Sobre mim</h4>
                </H.HeadContainerArea>
            </H.HeadContainer>

            <H.HeadContainerContact>
                <H.HeadAreaLogo onClick={() => redrectHome()}>
                    <h1>Logodosite</h1>
                </H.HeadAreaLogo>
                <H.HeadAreaContact>
                    <H.HeadContainerIcons>
                        <a href="https://www.google.com" target="_blank"><FaInstagram /></a>
                    </H.HeadContainerIcons>
                    <H.HeadContainerIcons>
                        <a href="https://www.google.com" target="_blank"><FaGithub /></a>
                    </H.HeadContainerIcons>
                    <H.HeadContainerIcons>
                        <a href="https://www.google.com" target="_blank"><FaLinkedin /></a>
                    </H.HeadContainerIcons>
                </H.HeadAreaContact>
            </H.HeadContainerContact>
            <H.Hr />
           


        </>
    )
}