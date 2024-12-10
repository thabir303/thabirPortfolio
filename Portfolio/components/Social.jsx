import Link from "next/link"

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const socials = [
   
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/tanvir-hasan-abir-30219b264/"
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        path: "https://www.github.com/thabir303"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        path: "https://www.facebook.com/tanvirhasan.abir.1321"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        path: "https://www.instagram.com/th_abir404/"
    },

]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}

        </div>
    )
}

export default Social