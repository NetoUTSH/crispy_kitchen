import "./footer.css";

export const Footer = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
<footer className="footer">
  <div className="footer-container">
  <h2 className="footer-title">Crispy Kitchen</h2>
  <div className="footer-content">
    <div className="footer-section location">
      <h3>Location</h3>
      <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>
      <button>Directions</button>
    </div>

    <div className="footer-section hours">
      <h3>Opening Hours</h3>
      <p>Monday - Friday</p>
      <p>10:00 AM - 08:00 PM</p>
      <p>Tel: 010-02-0340</p>
    </div>

    <div className="footer-section social">
      <h3>Social</h3>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>

  <div className="footer-bottom">
    <p>Copyright © 2022 Crispy Kitchen Co., Ltd.</p>
  </div>

    </div>
  </div>
</div>
</footer>



    </>
  )
}
