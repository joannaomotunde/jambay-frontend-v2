import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment-success");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container payment-auth">

      <div className="auth-card">

        <div className="loader"></div>

        <h2>Processing Your Payment</h2>
        <p>Please wait while we securely complete your transaction.</p>

        <div className="auth-note">
          Do not refresh or close this page
        </div>

      </div>

    </div>
  );
};

export default PaymentAuth;