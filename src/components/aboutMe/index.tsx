import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const AboutMe = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="aboutMe">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div >
            <ContactSectionText>
              <Text  type="heading1" color="grey4">
                Um pouco {" "}
                <Text as="span" type="heading1" color="brand1">
                  sobre mim...
                </Text>
              </Text>
                <Text color="grey2" type="body1">
                  Vinda do interior da capital Paulista, decidi migrar de carreira aos 25 anos.<br/>
                  Sempre amei resolver problemas cotidianos com as ferramentas disponíveis na internet,<br/> 
                  ja possuia alguma experiência em design, afinal sempre adorei dar um toque de estilo a tudo que fazia.<br/>  
                  Foi então que ressolvi iniciar minha transição de carreira para Desenvolvimento Web. <br/> 
                  A tecnologia sempre facilitou muito minha vida, e hoje que com ela posso criar soluções para outras pessoas.
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  Que tal me acompanhar nessa jornada?!
                </Text>
            </ContactSectionText>
          </motion.div>

        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
