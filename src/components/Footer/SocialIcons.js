import React from "react";
import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SocialIcon } from "../../styles/SocialIcons";
import { Icon } from "@iconify/react";
export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup {...props}>
    <SocialIcon>
      {/* <IconButton
        as="a"
        href="#"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="40px" />}
      /> */}
      <Icon icon="entypo-social:linkedin" width="50" height="50" />
    </SocialIcon>
    <SocialIcon>
      {/* <IconButton
        as="a"
        href="#"
        aria-label="GitHub"
        icon={<FaGithub fontSize="40px" />}
      /> */}
      <Icon icon="line-md:github" width="50" height="50" />
    </SocialIcon>
    <SocialIcon>
      {/* <IconButton
        as="a"
        href="#"
        aria-label="Email"
        icon={<AiOutlineMail fontSize="40px" />}
      /> */}
      <Icon icon="entypo:email" width="50" height="50" />
    </SocialIcon>
  </ButtonGroup>
);
