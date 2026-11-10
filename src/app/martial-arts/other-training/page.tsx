import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata = {
  title: "Other Trainings — Dr. Carlos Mauricio Peredo",
  description: "Sensei Carlos Mauricio Peredo — other martial arts trainings. Coming soon.",
};

export default function OtherTrainingPage() {
  return (
    <ComingSoon
      eyebrow="Martial Arts"
      title="Other Trainings"
      backHref="/martial-arts"
      backLabel="Back to Martial Arts"
    />
  );
}
