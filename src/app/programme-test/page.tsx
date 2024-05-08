import LayoutMain from "@/components/layout/LayoutMain";
import ContentCommunity from "../community-test/content";
import ContentProgramme from "./content";
import {rowDataExample} from '@/fake data/fakeProgrammes'


export default async function ProgrammeTest() {
    return (
      <>
        <LayoutMain
          mainContent={<ContentProgramme repository={rowDataExample.repository}/>}
          tocContent={''}
        />
      </>
    )
  }