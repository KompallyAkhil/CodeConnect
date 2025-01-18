import { Button } from "@/components/ui/button"
import { TextAnimate } from "@/components/ui/text-animate";
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <TextAnimate animation="blurInUp" by="character">
      Blur in by character
    </TextAnimate>
    </div>
  )
}
