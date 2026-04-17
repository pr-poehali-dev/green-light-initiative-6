import HeroSection from "@/components/HeroSection"
import FeaturesAndHistory from "@/components/FeaturesAndHistory"
import FaqAndContact from "@/components/FaqAndContact"
import FooterSection from "@/components/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <HeroSection />
      <FeaturesAndHistory />
      <FaqAndContact />
      <FooterSection />
    </div>
  )
}

export default Index
