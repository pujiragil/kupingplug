import { cn } from "@/utils/cn";

export default function SectionLayout({
  bg,
  children,
}: {
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn(bg ? bg : "bg-white")}>
      <div className="mx-auto max-w-[1440px] px-8">{children}</div>
    </section>
  );
}
