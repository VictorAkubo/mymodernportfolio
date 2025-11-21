import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav"
import { navItems } from "@/data";
import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import Image from "next/image";
import Client from "@/components/Client";
import Experience from "@/components/Experience"
import Approach from "@/components/Approach"
export default function Home() {
  return (
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-auto px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Client/>
        <Experience/>
        <Approach/>
      </div>
    </main>
  );
}
