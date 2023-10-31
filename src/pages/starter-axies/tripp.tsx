import { LightBackground } from "@/components/core"
import { ForestBackground } from "@/components/core/ForestBackground";
import AppLayout from "@/components/layout/AppLayout";
import { Cards, Characteristics, ExploreCharacteristics } from "@/components/partials/characters";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import tripp from "public/img/png/tripp.png";
import beast from "public/img/bubacards/beast.png";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [ 'tripp','common'])),
    },
  }
}

const Tripp = () => {
  return(
    <ForestBackground>
      <div className=" gap-[160px] pt-[160px] z-10 relative">
        < Characteristics jsonFile={'tripp'} images={[tripp,beast]} />
        <Cards jsonFile={'tripp'}/>
        <ExploreCharacteristics jsonFile={'tripp'}/>
      </div>
    </ForestBackground>
  )
}

Tripp.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Tripp;