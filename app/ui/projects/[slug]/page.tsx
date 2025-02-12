import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import ProjectDetail from "@/app/ui/projects/ProjectDetail";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  return (
    <div>
      <Header />
      <ProjectDetail slug={slug} />
      <Footer />
    </div>
  );
}