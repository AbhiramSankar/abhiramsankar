import './index.scss'
import LogoAS from '../../assets/img/logo6.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

const Logo = (props) => {
  const bgRef = useRef()
  const solidLogoRef = useRef()
  const outlineLogoARef = useRef()
  const outlineLogoS1Ref = useRef()
  const outlineLogoS2Ref = useRef()

  useEffect(() => {
  gsap.registerPlugin(DrawSVGPlugin);

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    gsap.set(
      [
        outlineLogoARef.current,
        outlineLogoS1Ref.current,
        outlineLogoS2Ref.current,
      ],
      { drawSVG: "0% 0%" }
    );

    gsap
      .timeline()
      .to(bgRef.current, { opacity: 1, duration: 1 })
      .to(
        [
          outlineLogoARef.current,
          outlineLogoS1Ref.current,
          outlineLogoS2Ref.current,
        ],
        { duration: 3, drawSVG: "0% 100%", ease: "power2.out", stagger: 0.5 }
      )
      .to(
        [
          outlineLogoARef.current,
          outlineLogoS1Ref.current,
          outlineLogoS2Ref.current,
        ],
        { duration: 0.1, yoyo: true, repeat: 1 },
        "<"
      );

    mm.add(
      {
        desktop1: "(min-width: 901px)",
        mobile: "(max-width: 900px)",
        landscape: "(orientation: landscape) and (max-height: 750px)",
      },
      (context) => {
        const { desktop1, mobile, landscape } = context.conditions

        const solidOpacity =
          landscape ? 0.25 :
          mobile ? 0.25 :
          desktop1 ? 1 :
          1

        gsap.fromTo(
          solidLogoRef.current,
          { opacity: 0 },
          {
            opacity: solidOpacity,
            delay: 5,
            duration: 3,
          }
        );
      }
    );

    return () => mm.revert();
  });

  return () => ctx.revert();
}, []);

  return (
    <div className={`logoContainer`} ref={bgRef}>
      <img
        ref={solidLogoRef}
        id="solidLogo"
        className={`solidLogo`}
        src={LogoAS}
        alt="AS"
      />
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 322.33 552"
      >
        <g fill="none" className={`svgContainer`}>
          <path
            className="svgAContainer"
            ref={outlineLogoARef}
            d="M248.47 341 198.47 341 187.04 301 175.62 261 173.44 253.38 172.76 251 159.72 205.37 158.47 201 155.62 191 151.33 176 144.19 151 129.9 101 126.33 88.5 122.76 101 121.33 106 108.47 151 101.33 176 97.04 191 94.19 201 79.9 251 77.04 261 65.62 301 54.19 341 51.33 351 1.33 351 4.19 341 15.62 301 27.04 261 29.9 251 44.19 201 47.04 191 51.33 176 58.47 151 72.76 101 87.04 51 96.33 18.5 101.33 1 151.33 1 165.62 51 179.9 101 194.19 151 201.33 176 205.62 191 208.47 201 208.61 201.48 222.76 251 223.74 254.45 225.62 261 237.04 301 247.49 337.55 248.47 341z"
          />
          <path
            className="svgS1Container"
            ref={outlineLogoS1Ref}
            d="M301.33 201 301.33 251 232.76 251 218.94 202.63 218.47 201 301.33 201z"
          />
          <path
            className="svgS2Container"
            ref={outlineLogoS2Ref}
            d="M321.33,451c0,18.22-6.09,35.29-16.72,50-1.05,1.45-2.14,2.88-3.28,4.28-12.28,15.18-29.57,27.53-50,35.54-15.19,5.97-32.11,9.54-50,10.09v.09H91.33v-50h110v-.12c19.73-.86,37.37-6.81,50-15.9,12.41-8.92,20-20.86,20-33.98s-7.59-25.06-20-33.98c-12.63-9.09-30.27-15.04-50-15.9v-.21c-1.66,.06-3.32,.09-5,.09-15.86,0-31.04-2.36-45-6.68-13.93-4.3-26.66-10.54-37.66-18.32-4.4-3.09-8.52-6.44-12.34-10.01-4.97-4.64-9.43-9.66-13.28-14.99-2.33-3.22-4.45-6.56-6.33-10-6.68-12.25-10.39-25.78-10.39-40s3.71-27.75,10.39-40c1.88-3.44,4-6.78,6.33-10,3.85-5.33,8.31-10.35,13.28-14.99,13.16-12.31,29.99-22.02,49.13-28.06l.87,3.05,11.43,40,1.38,4.83c-4.54,1.44-8.82,3.17-12.8,5.17h-.01c-18.22,9.12-30,23.65-30,40s11.78,30.88,30,39.99h0s.01,.01,.01,.01c11.27,5.65,25.02,9.23,39.96,9.88,1.66,.08,3.34,.12,5.03,.12s3.34,.03,5,.09c17.89,.55,34.81,4.12,50,10.09,10.05,3.94,19.35,8.94,27.66,14.82,8.57,6.03,16.1,13.01,22.34,20.72,1.14,1.4,2.23,2.83,3.28,4.28,10.63,14.71,16.72,31.78,16.72,50Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
