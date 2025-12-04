'use client';

import React from "react";

export default function HomePage() {
  const styles: { [k: string]: React.CSSProperties } = {
    page: {
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'start',
      padding: '2rem',
      minHeight: '100vh',
      boxSizing: 'border-box',
      background: 'linear-gradient(180deg, #0f172a 0%, #071029 100%)',
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      color: '#e6eef8',
    },
    header: {
      position: 'absolute',
      top: 18,
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#eaf4ff',
      fontSize: 18,
      fontWeight: 700,
      background: 'rgba(255,255,255,0.02)',
      padding: '8px 16px',
      borderRadius: 10,
      border: '1px solid rgba(255,255,255,0.03)'
    },
    under_construction: {
      maxWidth: 780,
      width: '100%',
      textAlign: 'center' as const,
      paddingBottom: '5rem',
    },
    card: {
      maxWidth: 780,
      width: '100%',
      display: "flex",
      flexDirection: "column",
      textAlign: 'center' as const,
      padding: '3rem',
      borderRadius: 12,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))',
      boxShadow: '0 8px 30px rgba(2,6,23,0.6)',
      border: '1px solid rgba(255,255,255,0.04)'
    },
    emoji: {
      fontSize: 56,
      marginBottom: 12,
      display: 'block'
    },
    title: {
      fontSize: 32,
      fontWeight: 700,
      margin: 0,
      color: '#fff'
    },
    subtitle: {
      marginTop: 12,
      marginBottom: 18,
      color: '#bcd0ee',
      fontSize: 16
    },
    discordIcon: {
      width: 18,
      height: 18,
      verticalAlign: 'middle',
      marginRight: 8,
      display: 'inline-block' as const
    },
    info: {
      marginTop: 8,
      color: '#9fb0da',
      fontSize: 13
    },
    link: {
      display: 'inline-block',
      marginTop: 18,
      padding: '10px 16px',
      borderRadius: 8,
      background: '#0ea5a1',
      color: '#052127',
      fontWeight: 600,
      textDecoration: 'none'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.under_construction}>
        <span style={styles.emoji} aria-hidden>🚧</span>
        <h1 style={styles.title}>Under Construction</h1>
      </div>
      <div style={styles.card}>
        <h1 style={styles.title}>Eilerten Studio</h1>
        <p>Software & Game Development House</p>
        {/*<p style={styles.subtitle}>*/}
        {/*  We are an organization that supports Open Source projects and open collaboration, aiming to revive FOSS products and services and use an open-collaboration approach for development.*/}
        {/*  <ul>*/}
        {/*    <li>- Support and revive Free and Open Source Software (FOSS) products and services</li>*/}
        {/*    <li>- Adopt open collaboration as the development model</li>*/}
        {/*  </ul>*/}
        {/*</p>*/}
        <p style={{display: "flex", height: "7vh", gap: "3%", justifyContent: "center", marginTop: "2rem"}}>
          <a href={"https://github.com/eilertenstudio"}>
            <img src={"/assets/icons/icon-github-white.svg"} alt={"GitHub"} style={{height: "100%"}}/>
          </a>
          <a href={"https://eilertenstudio.itch.io/"}>
            <img src={"/assets/icons/icon-itchio-white.svg"} alt={"Itch.io"} style={{height: "100%"}}/>
          </a>
          <a href={"https://discord.gg/GN3HxupA3w"}>
            <img src={"/assets/icons/icon-discord-white.svg"} alt={"Discord"} style={{height: "100%"}}/>
          </a>
        </p>

        <p style={styles.subtitle}></p>
      </div>
    </div>
  );
}