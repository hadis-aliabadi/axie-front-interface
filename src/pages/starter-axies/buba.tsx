import { LightBackground } from "@/components/core"
import { ForestBackground } from "@/components/core/ForestBackground";
import AppLayout from "@/components/layout/AppLayout";

import { Cards, Characteristics, ExploreCharacteristics } from "@/components/partials/characters";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import buba from "public/img/bubacards/buba.png";
import beast from "public/img/bubacards/beast.png";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [ 'buba','common'])),
    },
  }
}

const Buba = () => {
  return(
    <ForestBackground>
      <div className=" gap-[160px] pt-[160px] z-10 relative">
        < Characteristics jsonFile={'buba'} images={[buba,beast]} />
        <Cards jsonFile={'buba'}/>
        <ExploreCharacteristics jsonFile={'buba'}/>
      </div>
    </ForestBackground>
  )
}

Buba.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Buba;