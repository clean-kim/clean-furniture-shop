import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { main_01 } from '@assets/img/main';

export interface TagPositionProps {
  top: string;
  left: string;
}

export function ProductTagButton({ top, left }: TagPositionProps) {

  const tooltipContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {}, []);

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    if (tooltipContentRef.current) {
      const content = tooltipContentRef.current;
      const coords = target.getBoundingClientRect();

      const top = coords.top - content.offsetHeight - 5;
      const bottom = window.innerHeight - coords.bottom - content.offsetHeight - 5;

      content.classList.remove('arrow_bottom');
      content.classList.remove('arrow_top');
      if (top > bottom) {
        content.classList.add('arrow_top');
      } else {
        content.classList.add('arrow_bottom');
      }
      const contentStyle = content.style;
      contentStyle.visibility = 'visible';
    }
  };

  const handleMouseLeave = () => {
    if(tooltipContentRef.current) {tooltipContentRef.current.style.visibility = 'hidden';}
  };

  const handleTooltipMouseEnter = () => {
    if(tooltipContentRef.current) {tooltipContentRef.current.style.visibility = 'visible';}
  };

  const handleTooltipMouseLeave = () => {
    if(tooltipContentRef.current) {tooltipContentRef.current.style.visibility = 'hidden';}
  };

  return (
    <>
      <button className='product_tag_button' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{ '--left': left, '--top': top } as React.CSSProperties}>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              {'.gradient {stroke: url(#gradient);}'}
            </style>
            <linearGradient id="gradient" gradientTransform="rotate(45)">
              <stop offset="40%" stopColor="#ABF8E7" />
              <stop offset="100%" stopColor="#8778C7" />
            </linearGradient>
          </defs>
          <path className="gradient" d="M12 8.04783L12 12.5478M12 12.5478V17.0478M12 12.5478H16.5M12 12.5478H7.5M21 6.92283L21 18.1729C21 20.0368 19.489 21.5479 17.625 21.5479H6.375C4.51104 21.5479 3 20.0368 3 18.1729V6.92283C3 5.05888 4.51104 3.54785 6.375 3.54785H17.625C19.489 3.54785 21 5.05888 21 6.92283Z" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        <div ref={tooltipContentRef} className='tooltip' onMouseLeave={handleTooltipMouseLeave} onMouseEnter={handleTooltipMouseEnter}>
          <article className='main_card--row' style={{ flexDirection: 'row' }}>
            <div className='img_wrap' style={{ '--max-width': '40%' } as React.CSSProperties}>
              <img src={main_01} alt='' className='main_product_img'/>
            </div>
            <div className='card_info'>
              <div>
                <h2 className='card_title'>2023 베스트 셀러 제품</h2>
                <span>30,000원</span>
              </div>
              <div>
                <Link to='#'>see all</Link>
              </div>
            </div>
          </article>
        </div>
      </button>

    </>
  );
}