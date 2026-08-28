import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TreatmentsPreview } from "@/components/home/TreatmentsPreview";
import { DoctorPreview } from "@/components/home/DoctorPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <TreatmentsPreview />
      <DoctorPreview />
      <WhyChooseUs />
      <ReviewsPreview />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
