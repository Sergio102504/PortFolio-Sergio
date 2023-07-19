import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/svg/github.svg";
import logoLinkeind from "../../svg/svg/linkedin.svg";
import logoinstagram from "../../svg/svg/instagram.svg"

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/Sergio102504",
            logo:logoGithub,
        },
        {
            name:"Linkedind",
            link:"",
            logo:logoLinkeind,
        },
        {
            name:"Instagram",
            link:"https://www.instagram.com/vagabundo_acido/",
            logo:logoinstagram,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, i'm</p>
                        <p>Sergio Quintero </p>
                        <p>Frond end Developer</p>
                        <p>Level:Junior</p>
                    </S.Title>
                    <S.DescriptionText>
                    Tecnologo en analisis y Desarrollo de sistemas de informacion, 
                    Experiencias de 6 meses en desarrollo Frond end con html,css ,Algo de Javascript y Jquery.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="../../images/images/sergio.jpeg" alt="Sergio Quintero - Front End Developer"/>
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;