import ReactModal, { Styles } from 'react-modal';
import { Link } from 'react-router-dom';

export function Modal(props: { isModalOpen: boolean; onRequestClose(): void; }) {
  return (
    <ReactModal
      isOpen={props.isModalOpen}
      onRequestClose={props.onRequestClose}
      contentLabel={' Modal'}
      ariaHideApp={false}
      style={ModalStyle}>
      <p className='mt20 mb40'>장바구니에 추가되었습니다.</p>
      <Link to='/cart' className='add_cart'>장바구니 가기</Link>
    </ReactModal>
  );
}

const ModalStyle: Styles = {
  content: {
    background: 'var(--ui-background)',
    // border: '1px solid var(--ui-01)',
    borderRadius: '2rem',
    boxShadow: '1px 1px 1rem rgba(0,0,0,0.5)',
    color: 'var(--text-01)',
    fontFamily: '"Noto Sans KR", sans-serif',
    fontSize: 'var(--fs-14)',
    fontWeight: 500,
    height: '15rem',
    inset: '50%',
    padding: 20,
    textAlign: 'center',
    transform: 'translate(-50%)',
    width: '25rem',
  },
  overlay: {
    height: '100%',
    inset: 0,
    position: 'fixed',
    touchAction: 'none',
    width: '100%',
    // zIndex: 99,
  },
};