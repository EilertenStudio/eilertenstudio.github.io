'use client';

import {useSearchParams} from "next/navigation";

export default function MainPage() {
  const searchParams = new URLSearchParams(useSearchParams());

  const type = searchParams.get("type");
  searchParams.delete("type");

  // redirect("https://eilertenstudio.itch.io/mission-hexalife");
  return (
    <>
      Content under development
    </>
  );
}