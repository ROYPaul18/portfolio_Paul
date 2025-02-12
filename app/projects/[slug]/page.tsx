import React from 'react'
import Header from '../../ui/header'
import Footer from '../../ui/footer'
import ProjectDetail from '@/app/ui/projects/ProjectDetail'

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {

  return (
    <div>
      <Header />
      <ProjectDetail slug={params.slug} />
      <Footer />
    </div>
  )
}

export default Page
