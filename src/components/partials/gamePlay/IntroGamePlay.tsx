import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import stella from 'public/img/png/stella.png'
import axieInfinity from 'public/img/png/axie-infinity-origin.jpg'

import {
  Alert,
  BoldableWrapper,
  TitleFontChanger,
  YellowButton,
} from '@/components/core'
import Link from 'next/link'
import { LinkComponent } from '@/components/core/LinkComponent'

export const IntroGamePlay = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full px-4 mx-auto sm:px-6 xl:max-w-[1200px] mt-24">
      <div className="flex justify-center items-center max-w-[780px] mx-auto mb-6 gap-12 z-20 relative">
        <div className="hidden sm:block ">
          <Image
            src={stella}
            width={120}
            height={100}
            alt="stella"
            className="max-md:w-[120px] md:w-[210px] "
          />
        </div>

        <div className="flex flex-col gap-6 sm:w-2/3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-grey">
              <TitleFontChanger>
                <h2 className="text-[#0e377e] text-5xl">
                  {t('gameplay:game-play-guide')}
                </h2>
              </TitleFontChanger>
              <p className="text-xl font-normal">
                {t('gameplay:text')}
              </p>
              <p className="text-xl font-normal">
                {t('gameplay:Axie-Infinity')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 z-10">
              <Link href="#axies">
                <BoldableWrapper>
                  <YellowButton className="flex items-center gap-2">
                   {t('gameplay:axies')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </BoldableWrapper>
              </Link>
              <Link href="#howtoplay">
                <BoldableWrapper>
                  <YellowButton className="flex items-center gap-2">
                   {t('gameplay:btn_play')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </BoldableWrapper>
              </Link>
              <Link href="#infinite">
                <BoldableWrapper>
                  <YellowButton className="flex items-center gap-2">
                    {t('gameplay:battel-mechanics')}
                    <i className="fa-solid fa-play"></i>
                  </YellowButton>
                </BoldableWrapper>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0">
        <div className="relative left-0 top-0 w-[900px] max-w-full sm:-top-[50px] lg:-top-[50px] sm:left-1/2 sm:-rotate-3 sm:-translate-x-1/2">
          <Image
            src={axieInfinity}
            width={900}
            height={200}
            alt="axie infinity"
            className="max-w-full rounded-xl"
          />
        </div>

        <Alert className="max-w-[500px] absolute right-[5%] bottom-0 z-10">
          <p>
            {t('gameplay:new-to-axie')}
            <LinkComponent href={'https://welcome.skymavis.com/download/'}>
              {t('gameplay:new-player-guide')}
            </LinkComponent>
          </p>
        </Alert>
      </div>
    </section>
  )
}
