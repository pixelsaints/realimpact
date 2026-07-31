import PageHeader from '@/components/layout/page-header';
import TeamInfo from './team-info';

export default function OurTeam() {
  return (
    <>

      <PageHeader
        subtitle="Our Team"
        titleFirst="A Team of Innovation"
        titleSecond="and Expertise"
        desc="We work together to deliver exceptional broadcast solutions, creating powerful experiences, meaningful connections, and lasting impact for audiences around world."
        video="/videos/video-2020"
      />

      <TeamInfo />
    </>
  )
}
