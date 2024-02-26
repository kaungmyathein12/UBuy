import Breadcrumbs from "@/app/ui/breadcumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
}
