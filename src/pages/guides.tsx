import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextPageWithLayout } from './_app'

import AppLayout from '@/components/layout/AppLayout'
import { Poppins } from 'next/font/google'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['guides', 'common'])),
    },
  }
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '500'] })

import {
  BoldableWrapper,
  IntroBanner,
  IntroductionBox,
  TitleFontChanger,
} from '@/components/core'

import guide from 'public/img/jpeg/guide.jpg';
import breeding from '../../public/img/jpeg/breeding-guide.jpg';
import builds from '../../public/img/jpeg/builds-guide.jpg';
import collectors from '../../public/img/jpeg/collectors-guide.jpg';
import creators from '../../public/img/jpeg/creators-guide.jpg';
import gameplay from '../../public/img/jpeg/gameplay-guide.jpg';
import scatter from '../../public/img/jpeg/scatter-guide.jpg';
import Image from 'next/image';
import Link from 'next/link'



const images = [
  {img:gameplay,link:'gameplay'},
  {img:builds,link:'builds'},
  {img:collectors,link:'collectors'},
  {img:breeding,link:'breeding'},
  {img:creators,link:'creators'},
  {img:scatter,link:'scatter'},
];
const Guides: NextPageWithLayout = () => {
  const { t } = useTranslation()
  return (
    
      <section className={`w-full ${poppins.className} `}>
        <IntroBanner
          src={guide}
          height={300}
          alt="guides"
          className="h-40 sm:h-60 md:h-[300px] object-cover mx-4"
        >
          <IntroductionBox className="-translate-y-1/2  sm:w-[600px]">
            <div className="w-2/3 md:w-3/4  flex flex-col items-center gap-2 ">
              <TitleFontChanger>
                <h1 className="text-[#936e59] ">{t('guides:page_title')}</h1>
              </TitleFontChanger>
              <p className="text-[#5b463a] text-center md:text-xl">
                {t('guides:page_description')}
              </p>
            </div>
          </IntroductionBox>
        </IntroBanner>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-16 mt-44 ">
          {images.map((image, index) => (
            <BoldableWrapper key={index} className="p-4">
              <Link href={`guides/${image.link}`}>
                <Image src={image.img} alt={`Image ${index + 1}`} />
              </Link>
            </BoldableWrapper>
          ))}
        </div>
      </section>
    
  )
}

Guides.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}
export default Guides;

