import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import { architecture, design_chair, lamps, living_room, table } from '@assets/img/main';
import { FurnitureCanvas } from '@components/main';
import { ProductTagButton } from '@components/main/ProductTagButton';

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const mobile = useMediaQuery({ query: '(max-width: 767px)' });
  const splitTextRef1 = useRef<HTMLDivElement>(null);
  const splitTextRef2 = useRef<HTMLDivElement>(null);
  const descTextRef = useRef<HTMLParagraphElement>(null);

  const setSplitTextEffect = (target: HTMLElement) => {
    Splitting({ target });
    const char = target.querySelectorAll('.char');
    gsap.from(char, {
      duration: 1,
      ease:'power2.inOut',
      scrollTrigger: {
        end: 'top top',
        start: 'top bottom',
        trigger: target.parentElement,
      },
      stagger: .03,
      yPercent: -100,
    });
  };

  const mainContainer = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.timeline()
      .from('.sub_text__container', {
        delay: 2,
        opacity: 0,
      })
      .add('start')
      .from('.main_text', {
        duration: 1,
        ease: 'power3.inOut',
        yPercent: -100,
      }, 'start');
    gsap.from('.main_card01', {
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        end: 'top top',
        start: 'top bottom',
        trigger: '.grid_item01',
      },
      yPercent: 300,
    });
    gsap.from('.main_card02', {
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        end: 'top top',
        start: 'top bottom',
        trigger: '.grid_item02',
      },
      yPercent: 300,
    });
    gsap.from(['.main_product_link', '.main_card--row'], {
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        end: 'top top',
        start: 'top bottom',
        trigger: '.main_product_link',
      },
      xPercent: 100,
    });

    if(splitTextRef1.current) {
      setSplitTextEffect(splitTextRef1.current);
    }
    if(splitTextRef2.current) {
      setSplitTextEffect(splitTextRef2.current);
    }
    if(descTextRef.current) {
      gsap.from(descTextRef.current, {
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          end: 'top top',
          start: 'top bottom',
          trigger: descTextRef.current,
        },
        xPercent: -100,
      });
    }
  }, { revertOnUpdate: true, scope: mainContainer });

  return (
    <main className='main' ref={mainContainer}>
      <section className='section_wrap canvas_wrap'>
        {/*<img src={main_bg} alt='main_01' width={2560} height={0} className='main__bg' style={{ height: '100vh' }}/>*/}
        <section className='main__section'>
          <div className='main_text__container'>
            <div className='sub_text__container'>
              <span className='text_s'>Clean</span>
              <span className='text_s'>Shop</span>
            </div>
            <div className='split_txt__wrap'>
              <div className='main_text'>
                FURNITURE
              </div>
            </div>
          </div>
          {/*<div className='main_card__wrap'>*/}
          {/*  <article className='main_card--column centered'>*/}
          {/*    <Link to={'/'}>*/}
          {/*      <div className='img_wrap'>*/}
          {/*        <img src={main_01} alt='' className='main_product_img'/>*/}
          {/*      </div>*/}
          {/*      <div className='card_info'>*/}
          {/*        <h2 className='card_title'>HOME INTERIOR</h2>*/}
          {/*        <p className='card_sub_title'>Go Shop</p>*/}
          {/*      </div>*/}
          {/*    </Link>*/}
          {/*  </article>*/}
          {/*</div>*/}
          <FurnitureCanvas/>
        </section>
      </section>
      <section className='main__section main_grid'>
        <div className='main_grid__item'>
          <div className='split_txt__wrap' ref={splitTextRef1}>
            COMFORT
          </div>
        </div>
        <div className='main_grid__item grid_item01'>
          <div className='main_card01'>
            <div className='img_wrap'>
              <img src={architecture} alt='메인 이미지' className='main_product_img'/>
            </div>
            <p className='item_text'>품질과 디자인이 완벽하게 조화를 이룬 가구로, 당신의 생활에 품격을 더해보세요.</p>
          </div>
        </div>
        <div className='main_grid__item grid_item02'>
          <div className='main_card02'>
            <p className='item_text'>당신의 취향을 반영한 가구로, 집을 더욱 사랑스럽게 만드세요.</p>
            <div className='img_wrap'>
              <img src={design_chair} alt='메인 이미지' className='main_product_img'/>
            </div>
          </div>
        </div>
      </section>
      <section className='main__section'>
        <div className='section03'>
          <div>
            <div className='main_product_link'>
              <ProductTagButton top={'60%'} left={'60%'}/>
              <div className='img_wrap' style={{ '--max-width': '100%', height: '30rem' } as React.CSSProperties}>
                <img src={living_room} alt='' className='main_product_img'/>
              </div>
            </div>
          </div>
          <div className={`main_flex${mobile ? ' flex--wrap' : ' row_content'} mb40`}>
            <div className='section_title__container'>
              <h1 className='section_title split_txt__wrap' ref={splitTextRef2}>OUR PRODUCTS</h1>
              <p className='section_description' ref={descTextRef}>
                가구는 단순히 공간을 채우는 물건이 아닙니다. <br/>고객님의 취향과 스타일을 반영하여 생활 공간을 아름답게 만드는 데 중요한 역할을 합니다.<br/>
                당신의 생활에 가치를 더하는 가구와 함께, 더 풍요로운 삶을 만들어보세요.
              </p>
            </div>
            <div className={`main_flex flex--column col_content${mobile ? ' flex--nowrap' : ''}`}>
              <article className='main_card--row'>
                <div className='img_wrap' style={{ '--max-width': '35%' } as React.CSSProperties}>
                  <img src={table} alt='' className='main_product_img'/>
                </div>
                <div className='card_info'>
                  <div>
                    <h2 className='card_title'>프리미엄 원목 가구</h2>
                    <p className='card_sub_title'>튼튼하고 변함없이 오랜 사용이 가능한 고무나무 원목으로 업그레이드 되었습니다.</p>
                  </div>
                  <div>
                    <Link to='#'>see all</Link>
                  </div>
                </div>
              </article>
              <article className='main_card--row'>
                <div className='img_wrap' style={{ '--max-width': '35%' } as React.CSSProperties}>
                  <img src={lamps} alt='' className='main_product_img'/>
                </div>
                <div className='card_info'>
                  <div>
                    <h2 className='card_title'>조명 인테리어 무드등</h2>
                    <p className='card_sub_title'>깔끔하고 트렌디한 디자인으로 언제 어디서든 다양한 공간을 아름답게 연출해 줍니다.</p>
                  </div>
                  <div>
                    <Link to='#'>see all</Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MainPage;