import PageHeader from '@/components/layout/page-header';
import TeamInfo from './team-info';

export default function OurTeam() {
  return (
    <>

      <PageHeader
        subtitle="Our Team"
        titleFirst="Team of engineers"
        titleSecond=" & innovators"
        desc="We work together to deliver exceptional broadcast solutions that create powerful experiences and lasting impact."
        video="/videos/video-2020"
      />

      <TeamInfo />
    </>
  )
}
