import { useTranslation } from 'react-i18next';
import arm from '../../images/Armenia-flag.jpg';
import en from '../../images/USA-flag.png';

export default function LanguageSwitcher() {
  const lngs = {
    en: { nativeName: 'English', flag: en },
    am: { nativeName: 'Armenian', flag: arm },
  };

  const { i18n } = useTranslation();

  return (
    <div className='bg-white rounded w-[82px]'>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
          title={lngs[lng].nativeName}
          className={`w-[35px] m-[3px] p-1 ${
            i18n.resolvedLanguage === lng ? 'bg-secondary rounded ' : ''
          }`}
        >
          <img alt={lngs[lng].nativeName} src={lngs[lng].flag}/>
        </button>
      ))}
    </div>
  );
}
