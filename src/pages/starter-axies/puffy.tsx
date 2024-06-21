import { LightBackground } from "@/components/core"
import { ForestBackground } from "@/components/core/ForestBackground";
import AppLayout from "@/components/layout/AppLayout";
import { Cards, Characteristics, ExploreCharacteristics } from "@/components/partials/characters";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import puffy from "public/img/png/puffy.png";
import aquatic from "public/img/png/Aquatic3.png";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [ 'puffy','common'])),
    },
  }
}

const Puffy = () => {
  return(
    <ForestBackground>
      <div className=" gap-[160px] pt-[160px] z-10 relative">
        < Characteristics jsonFile={'puffy'} images={[puffy,aquatic]} />
        <Cards jsonFile={'puffy'}/>
        <ExploreCharacteristics jsonFile={'puffy'}/>
      </div>
    </ForestBackground>
  )
}

Puffy.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Puffy;