import { LightBackground } from "@/components/core"
import { ForestBackground } from "@/components/core/ForestBackground";
import AppLayout from "@/components/layout/AppLayout";
import { Cards, Characteristics, ExploreCharacteristics } from "@/components/partials/characters";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import olek from "public/img/png/olek-noborder.png";
import plant from "public/img/png/Plant.png";


export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [ 'olek','common'])),
    },
  }
}

const Olek = () => {
  return(
    <ForestBackground>
      <div className=" gap-[160px] pt-[160px] z-10 relative">
        < Characteristics jsonFile={'olek'} images={[olek,  plant]} />
        <Cards jsonFile={'olek'}/>
        <ExploreCharacteristics jsonFile={'olek'}/>
      </div>
    </ForestBackground>
  )
}

Olek.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Olek