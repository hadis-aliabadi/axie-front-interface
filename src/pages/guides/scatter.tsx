import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from '../_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'
import axies from 'public/img/jpeg/axies.jpg'
import scatter_1 from 'public/img/jpeg/scatter-1.jpg';
import scatter_2 from 'public/img/jpeg/scatter-2.jpg';
import scatter_3 from 'public/img/jpeg/scatter-3.jpg';
import scatter_4 from 'public/img/jpeg/scatter-4.jpg';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['scatter', 'common'])),
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



const Scatter: NextPageWithLayout = () => {
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
                <h1 className="text-[#936e59] text-4xl">{t('scatter:title')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a] text-center">
                {t('scatter:title-text')}
              </p>
            </div>
          </IntroductionBox>
        </IntroBanner>
        <div className='xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[600px] md:px-6 px-4 mx-auto w-full'>
          <div className='flex flex-col py-36'>
            <div className='flex flex-col gap-4'>
              <TitleFontChanger className='text-3xl text-black'>{t('scatter:What-is-Scatter')}</TitleFontChanger>
              <div className='flex flex-wrap gap-8  font-normal text-xl'>
                <p className='xl:max-w-[45%]'>
                  <LinkComponent href='https://scatter.roninchain.com/' className='mr-1'>{t('scatter:scatter')}</LinkComponent >
                  {t('scatter:text-1')}
                </p>
                <p className='xl:max-w-[45%]'>{t('scatter:text-2')}</p>
              </div>
            </div>
            <div className='mt-10'>
              <div>
                <Image src={scatter_1} alt="scatter-1" />
              </div>
              <div>
                <Image src={scatter_2} alt="scatter-2" />
              </div>
              <p className='font-normal text-xl'>{t('scatter:text-3')}</p>
              <p className='font-bold'>{t('scatter:text-4')}</p>
              <div>
                <Image src={scatter_3} alt="scatter-3" />
              </div>
              <div>
                <Image src={scatter_4} alt="scatter-4" />
              </div>
            </div>
            <p className='font-normal text-xl mt-4'>
              {t('scatter:text-5')} 
              <LinkComponent href='https://scatter.roninchain.com/' className='mx-1'>{t('scatter:scatter')}</LinkComponent >
              {t('scatter:text-6')}
            </p>
          </div>
        </div>
    </section>
  )
}

Scatter.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Scatter;