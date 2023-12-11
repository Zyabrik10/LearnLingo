import { StyledButton } from 'components/StyledButton/StyledButton';
import css from './Hero.module.css';
import globalCss from 'css/global.module.css';
import { useSelector } from 'react-redux';
import selectWebsite from '../../../../redux/website/website-selector';

import girlImage from 'assets/img/girl.png';

export default function Hero() {
  const { color } = useSelector(selectWebsite);

  return (
    <section className={css['hero']}>
      <div className={`${globalCss['container']} ${css["container"]}`}>
        <div className={css['info']}>
          <h1 className={css['title']}>
            Unlock your potential with the best{' '}
            <span className={css['mark']} style={{background: color.secondary}}>language</span> tutors
          </h1>
          <p className={css['description']}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <StyledButton className={css["button"]} color={color} $maxwidth="267px">
            Get started
          </StyledButton>
        </div>
        <div className={css['dec']} style={{ background: color.secondary }}>
          <img className={css['girl']} src={girlImage} alt="" />
          <svg
            className={css["mac"]}
            width="361"
            height="248"
            viewBox="0 0 361 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.05786 0C3.51331 0 0.640015 2.87903 0.640015 6.43046V240.821C0.640015 244.372 3.51331 247.251 7.05786 247.251H353.942C357.487 247.251 360.36 244.372 360.36 240.821V6.43046C360.36 2.87903 357.487 0 353.942 0H7.05786Z"
              fill="url(#paint0_linear_1931_134)"
            />
            <path
              d="M192.091 66.3851C192.091 69.1751 191.092 71.78 189.101 74.1909C186.698 77.0572 183.792 78.7134 180.641 78.4521C180.601 78.1175 180.577 77.7652 180.577 77.3949C180.577 74.7168 181.72 71.8504 183.749 69.5069C184.762 68.3203 186.05 67.3338 187.613 66.5467C189.172 65.7713 190.646 65.3425 192.033 65.2692C192.051 65.4351 192.065 65.6009 192.074 65.7664C192.085 65.9733 192.091 66.1797 192.091 66.3851Z"
              fill="url(#paint1_linear_1931_134)"
            />
            <path
              d="M202.639 108.742C201.812 110.691 200.834 112.485 199.7 114.134C198.155 116.383 196.889 117.939 195.914 118.803C194.402 120.222 192.782 120.949 191.048 120.99C189.803 120.99 188.301 120.628 186.553 119.895C184.799 119.165 183.188 118.803 181.714 118.803C180.169 118.803 178.511 119.165 176.738 119.895C174.962 120.628 173.532 121.011 172.438 121.049C170.775 121.121 169.117 120.374 167.462 118.803C166.406 117.863 165.085 116.252 163.502 113.969C161.804 111.531 160.408 108.704 159.315 105.481C158.143 102 157.556 98.6288 157.556 95.3651C157.556 91.6267 158.348 88.4023 159.934 85.7004C161.18 83.5299 162.838 81.818 164.913 80.5612C166.988 79.3043 169.23 78.6639 171.644 78.6229C172.965 78.6229 174.698 79.0399 176.85 79.8593C178.997 80.6816 180.376 81.0985 180.98 81.0985C181.432 81.0985 182.963 80.6111 185.559 79.6389C188.014 78.7376 190.086 78.3643 191.783 78.5113C196.383 78.89 199.838 80.7401 202.136 84.0735C198.023 86.6167 195.988 90.1788 196.029 94.7484C196.066 98.3079 197.331 101.27 199.818 103.622C200.945 104.713 202.204 105.557 203.604 106.156C203.301 107.055 202.98 107.916 202.639 108.742Z"
              fill="url(#paint2_linear_1931_134)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1931_134"
                x1="180.5"
                y1="0"
                x2="180.5"
                y2="247.251"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={color.lgs1} />
                <stop offset="1" stopColor={color.lge1} />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1931_134"
                x1="180.58"
                y1="65.2692"
                x2="180.58"
                y2="121.053"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={color.lgs2} />
                <stop offset="1" stopColor={color.lge2} />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1931_134"
                x1="180.58"
                y1="65.2692"
                x2="180.58"
                y2="121.053"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={color.lgs2} />
                <stop offset="1" stopColor={color.lge2} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
