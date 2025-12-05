import "../style.css"

import React from "react";

export enum SocialButtonType {
  GitHub = "github",
  ItchIo = "itchio",
  Discord = "discord",
}

export interface SocialButtonProps {
  type: SocialButtonType;
  link: string;
}

export default function SocialButton(p: SocialButtonProps) {
  return (
    <a className={"social-button"} href={p.link}>
      <button title={p.type}>
          <img src={`/assets/icons/icon-${p.type}-white.svg`} alt={p.type} style={{height: "100%"}}/>
      </button>
    </a>
  );
}