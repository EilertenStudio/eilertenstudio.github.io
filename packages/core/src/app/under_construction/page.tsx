'use client';

import "./style.css"

import React from "react";
import SocialButton, {SocialButtonType} from "@/app/under_construction/components/SocialButton";
import Card from "@/app/under_construction/components/Card";
import UnderConstructionImage from "@/app/under_construction/components/UnderConstructionImage";

export default function UnderConstructionPage() {
  return (
    <div className={"under-construction_page"}>
      <UnderConstructionImage />
      <Card title={"Eilerten Studio"}
            subtitle={"Software & Game Development House"}
            socialButtons={[
              {
                type: SocialButtonType.GitHub,
                link: "https://github.com/eilertenstudio"
              },
              {
                type: SocialButtonType.ItchIo,
                link: "https://eilertenstudio.itch.io/"
              },
              {
                type: SocialButtonType.Discord,
                link: "https://discord.gg/GN3HxupA3w"
              }
            ]}
      />
      {/*<div style={styles.card}>*/}
      {/*  <h1 style={styles.title}>Eilerten Studio</h1>*/}
      {/*  <p>Software & Game Development House</p>*/}
      {/*  /!*<p style={styles.subtitle}>*!/*/}
      {/*  /!*  We are an organization that supports Open Source projects and open collaboration, aiming to revive FOSS products and services and use an open-collaboration approach for development.*!/*/}
      {/*  /!*  <ul>*!/*/}
      {/*  /!*    <li>- Support and revive Free and Open Source Software (FOSS) products and services</li>*!/*/}
      {/*  /!*    <li>- Adopt open collaboration as the development model</li>*!/*/}
      {/*  /!*  </ul>*!/*/}
      {/*  /!*</p>*!/*/}
      {/*  <p style={styles.subtitle}></p>*/}
      {/*</div>*/}
    </div>
  );
}