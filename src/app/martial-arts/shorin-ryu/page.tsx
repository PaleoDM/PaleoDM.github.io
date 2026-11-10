import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata = {
  title: "Hakutsuru-Tatsu Shorin-Ryu — Dr. Carlos Mauricio Peredo",
  description: "Sensei Carlos Mauricio Peredo — 3rd Dan in Hakutsuru-Tatsu Shorin-Ryu.",
};

export default function ShorinRyuPage() {
  return (
    <ComingSoon
      eyebrow="Martial Arts"
      title="Hakutsuru-Tatsu Shorin-Ryu"
      backHref="/martial-arts"
      backLabel="Back to Martial Arts"
      badges={["3rd Dan", "Since 2015"]}
    />
  );
}
