import '../style.css'

import React from "react";
import SocialButton, {SocialButtonProps} from "@/app/under_construction/components/SocialButton";

interface CardProps {
  title: string,
  subtitle: string,
  socialButtons: SocialButtonProps[]
}

export default function Card(p: CardProps) {
  return (
    <div className={"under-construction_card"}>
      <h1 className={"title"}>{p.title}</h1>
      <p className={"subtitle"}>{p.subtitle}</p>
      <p className={"social-container"}>
        {p.socialButtons.map((it, index) => {
          return <SocialButton type={it.type} link={it.link} key={`social-button-${index}`} />
        })}
      </p>
    </div>
  );
}