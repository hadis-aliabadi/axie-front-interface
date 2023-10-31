import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from '../_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['gameplay', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

import {
  BoldableWrapper,
  GreenBackground,
  IntroBanner,
  IntroductionBox,
  LightBackground,
  TitleFontChanger,
} from '@/components/core'
import { Axies, IntroGamePlay, JoinCommunity} from '@/components/partials'
import { BattleMechanics, HowToPlay, InfinitPossibilities } from '@/components/partials/gamePlay'


const GamePlay: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <LightBackground>
      <IntroGamePlay/>
      <Axies/>
      <HowToPlay/>
      <BattleMechanics/>
      <InfinitPossibilities/>
      <JoinCommunity/>
    </LightBackground>
  )
}

GamePlay.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default GamePlay;

