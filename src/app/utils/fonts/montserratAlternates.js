import MontserratAlternates from 'next/font/local';

const montserratAlternates = MontserratAlternates({
  src: [
    {
      path: '../../../vendor/fonts/Montserrat_Alternates/MontserratAlternates-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../vendor/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../vendor/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../vendor/fonts/Montserrat_Alternates/MontserratAlternates-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default montserratAlternates;