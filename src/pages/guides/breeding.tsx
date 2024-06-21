import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from '../_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import eggs from 'public/img/jpeg/eggs.jpg'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['breeding', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

import {
  GreenBackground,
  IntroBanner,
  IntroductionBox,
  TitleFontChanger,
} from '@/components/core'
import { HowToBreed, ResourceRequirements, Tools, WooHoo } from '@/components/partials/guides/breeding'





const Breeding: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <GreenBackground
  
      puffy={false}
      title={t('breeding:footer_title') as string}
      text={t('breeding:footer_text')  as string}
      btn_text={t('breeding:footer_btn')  as string}
      url={t('breeding:footer_url')  as string}
    >
      
        <IntroBanner
          src={eggs}
          height={300}
          alt="axies"
          className="h-40 lg:h-72 object-cover object-center mx-4"
        >
          <IntroductionBox
            vertical={false}
            className="-translate-y-1/2  max-lg:w-[90%] lg:w-[540px]"
          >
            <div className="w-2/3 md:w-3/4  flex flex-col items-center gap-2 ">
              <TitleFontChanger>
                <h1 className="text-[#936e59] text-4xl">{t('breeding:breeding')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a] text-center">
                {t('breeding:breeding-des')}
              </p>
            </div>
          </IntroductionBox>
        </IntroBanner>
        <section className='max-w-[600px] md:px-[24px] px-[16px] mx-auto xl:max-w-[90%]'>
          <div className='flex flex-col lg:gap-24 gap-48 lg:pt-40 lg:pb-4 pt-36 pb-32'>
            <WooHoo/>
            <HowToBreed/>
            <ResourceRequirements/>
            <Tools/>
          </div>
      
        </section>
    </GreenBackground>
  )
}

Breeding.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Breeding
