import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Poppins } from 'next/font/google'

import AppLayout from '@/components/layout/AppLayout'
import { NextPageWithLayout } from './_app'

import sky from 'public/img/jpeg/sky.jpg';
import twitter from 'public/img/png/twitter.png';
import discord from 'public/img/png/discord.png';

import { Alert, IntroBanner, IntroductionBox, LinkComponent, TitleFontChanger, YellowButton } from '@/components/core'
import { JoinCommunity } from '@/components/partials'
import Image from 'next/image'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['community', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

const Community: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <section>
      <IntroBanner
          src={sky}
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
                <h1 className="text-[#936e59] text-4xl">{t('community:Community')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a] text-center">
                {t('community:community-des')}
              </p>
            </div>
          </IntroductionBox>
        </IntroBanner>
        <div className='my-44 flex flex-wrap w-[calc(100% + 48px)] mx-[48px] gap-8'>
          <div className='flex flex-col gap-6 font-normal text-xl lg:max-w-[60%] '>
            <TitleFontChanger className='text-4xl text-black'>{t('community:Engagement')}</TitleFontChanger>
            <p>{t('community:text-1')}</p>
            <p>{t('community:text-2')}</p>
            <TitleFontChanger className='text-4xl text-black'>{t('community:Community-Developers')}</TitleFontChanger>
            <p>{t('community:the')}<LinkComponent href='#'>{t('community:text-link')}</LinkComponent>{t('community:text-3')}</p>
           <div className=''>
           <YellowButton className="text-center gap-2">{t('community:apply')}<i className="fa-solid fa-play"></i></YellowButton>
           </div>
            <TitleFontChanger className='text-4xl text-black'>{t('community:Community-Creators')}</TitleFontChanger>
            <p>{t('community:text-4')}</p>
          </div>
          <div className='flex flex-col gap-6'>
            <TitleFontChanger className='text-4xl text-black'>{t('community:Join')}</TitleFontChanger>
            <Image src={twitter} alt='twitter' width={250} height={85}/>
            <Image src={discord} alt='discord' width={250} height={85}/>
            <Alert className="max-w-[320px] ">
              <p className=''>
                {t('community:text-5')}
                <LinkComponent href={'https://welcome.skymavis.com/download/'}>
                {t('community:text-link-2')}
                </LinkComponent>
              </p>
              <p>{t('community:text-6')}</p>
            </Alert>
          </div>
        </div>
        <JoinCommunity/>
    </section>
  )
}

Community.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Community