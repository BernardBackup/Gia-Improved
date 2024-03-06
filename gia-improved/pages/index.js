import Image from "next/image";
import Header from "@/components/Header";
import Welcome from '@/components/index'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div >
  <Welcome/>
</div>
  );
}
