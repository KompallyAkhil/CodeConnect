import { Button } from "@/components/ui/button"
import { TextAnimate } from "@/components/ui/text-animate";
import { Camera } from 'lucide-react';
import { Features } from "./Sections/Feartues";
import {Home} from "./Sections/Home";
export default function App() {
  return (
    <div>
      <Home/>
      <Features/>
    </div>
  )
}
