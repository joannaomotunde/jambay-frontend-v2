import { useState } from "react";
import "../../styles/auth.css";
import { registerUser } from "../../services/auth";

function FloatingInput({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="auth-field">
      <label className="auth-label">{label}</label>

      <input
        className="auth-input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

function LoginForm({ onSwitch }) {
  return (
    <div className="auth-form">
      <FloatingInput
        label="Email address"
        type="email"
        placeholder="you@example.com"
      />
      <FloatingInput label="Password" type="password" placeholder="••••••••" />
      <div className="auth-forgot-row">
        <button className="auth-link-btn">Forgot password?</button>
      </div>
      <button className="auth-submit">Sign in</button>
      <p className="auth-switch-text">
        No account?{" "}
        <button className="auth-link-btn" onClick={onSwitch}>
          Create one
        </button>
      </p>
    </div>
  );
}

function SignupForm({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleRegister = async () => {
    try {
      if (password !== confimPassword) {
        alert("Passwords do not match");
        return;
      }
      let fullName = `${firstName} ${lastName}`;
      await registerUser({ name: fullName, email, password });
      console.log("Registration successful");
      alert(
        "Registration successful! Please check your email to verify your account.",
      );
      onSwitch();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    }
  };
  return (
    <div className="auth-form">
      <div className="auth-name-grid">
        <FloatingInput
          label="First name"
          placeholder="Ada"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FloatingInput
          label="Last name"
          placeholder="Lovelace"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <FloatingInput
        label="Email address"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />
      <FloatingInput
        label="Password"
        type="password"
        placeholder="min. 8 characters"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <FloatingInput
        label="Confirm password"
        type="password"
        value={confimPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="••••••••"
      />
      <button className="auth-submit" onClick={handleRegister}>
        Create account
      </button>
      <p className="auth-switch-text">
        Already have an account?{" "}
        <button className="auth-link-btn" onClick={onSwitch}>
          Sign in
        </button>
      </p>
    </div>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <div className="auth-tabs">
          {["login", "signup"].map((tab) => (
            <button
              key={tab}
              onClick={() => setMode(tab)}
              className={`auth-tab ${mode === tab ? "active" : ""}`}
            >
              {tab === "login" ? "Sign in" : "Create account"}
            </button>
          ))}
        </div>

        <div className="auth-heading">
          <h1>{mode === "login" ? "Welcome back" : "Join Jambay"}</h1>
          <p>
            {mode === "login"
              ? "Sign in to your account to continue."
              : "Register to get the ticket to your event."}
          </p>
        </div>

        <div className="auth-divider">
          <div className="auth-divider-line" />
          <div className="auth-divider-line" />
        </div>

        <div key={mode}>
          {mode === "login" ? (
            <LoginForm onSwitch={() => setMode("signup")} />
          ) : (
            <SignupForm onSwitch={() => setMode("login")} />
          )}
        </div>

        <p className="auth-legal">
          By continuing, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
