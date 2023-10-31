import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from '../_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import axies from 'public/img/jpeg/axies.jpg'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['builds', 'common'])),
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
import { TeamBuild } from '@/components/partials/guides/builds'




const Builds: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <GreenBackground
      puffy={false}
      title={t('arena:footer_title') as string}
      text={t('arena:footer_text')  as string}
      btn_text={t('arena:footer_btn')  as string}
      url={t('arena:footer_url')  as string}
    >
      <section >
        <IntroBanner
          src={axies}
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
                <h1 className="text-[#936e59]">{t('axiesone:page_title')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a] text-center">
                {t('axiesone:title_description')}
              </p>
            </div>
          </IntroductionBox>
        </IntroBanner>
        <TeamBuild/>
      </section>
    </GreenBackground>
  )
}

Builds.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Builds
