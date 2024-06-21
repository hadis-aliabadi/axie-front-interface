
import { ForestBackground } from "@/components/core/ForestBackground";
import AppLayout from "@/components/layout/AppLayout";
import { Cards, Characteristics, ExploreCharacteristics } from "@/components/partials/characters";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ena from "public/img/png/ena.png";
import plant from "public/img/png/Plant.png";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [ 'ena','common'])),
    },
  }
}

const Ena = () => {
  return(
    <ForestBackground>
      <div className=" gap-[160px] pt-[160px] z-10 relative">
        < Characteristics jsonFile={'ena'} images={[ena,plant]} />
        <Cards jsonFile={'ena'}/>
        <ExploreCharacteristics jsonFile={'ena'}/>
      </div>
    </ForestBackground>
  )
}

Ena.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Ena;