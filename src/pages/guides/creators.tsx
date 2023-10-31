import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from '../_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import axies from 'public/img/jpeg/axies.jpg'
import axiess from 'public/img/jpeg/axiess.jpg'
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['creators', 'common'])),
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
  LinkComponent,
  TitleFontChanger,
} from '@/components/core'
import Image from 'next/image'
import Link from 'next/link'



const Creators: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    <section>
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
                <h1 className="text-[#936e59] text-4xl">{t('creators:title')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a] text-center">
                {t('creators:title-text')}
              </p>
            </div>
          </IntroductionBox>
        </IntroBanner>
        <div className='lg:max-w-[900px] md:max-w-[600px] md:p-6 p-4 w-gull mx-auto mt-44'>
          <div className='flex flex-wrap gap-6 w-[calc(100% + 48px)]'>
            <div className='flex flex-col gap-4 lg:max-w-[50%] md:max-w-[100%] font-normal text-xl '>
              <TitleFontChanger className='text-3xl text-black'>{t('creators:Axie-Creator-Program')}</TitleFontChanger>
              <p>{t('creators:text-1')}</p>
              <p>{t('creators:text-2')}</p>
              <div className=''>
                <p>{t('creators:text-3')}</p>
                <LinkComponent href='/#' >
                  <p className='text-pink '>{t('creators:text-4')}</p>
                </LinkComponent>
              </div>
            </div>
            <BoldableWrapper className='rounded-xl overflow-hidden shadow-textbox '>
              <Link href='/#'>
                 <Image src={axiess} alt="axiess" width={400}  className='h-full' />
                </Link> 
            </BoldableWrapper>
          </div>
        </div>
    </section>
  )
}

Creators.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Creators;