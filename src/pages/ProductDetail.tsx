export default function ProductDetail() {

  return (
    <section>
      <div className="product_info_container">
        <div className="product_img">
          
        </div>
        <div className="product_info">
          <div className="product_brand_name">{'brandName'}</div>
          <p className="product_title">{'title'}</p>
          <span className="product_price">{'price'} {'priceText'}</span>
        </div>
      </div>
    </section>
  );
}