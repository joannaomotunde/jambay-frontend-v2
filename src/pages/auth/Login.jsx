import { useState } from "react";
import "../../styles/auth.css";

function FloatingInput({ label, type = "text", placeholder }) {
  return (
    <div className="auth-field">
      <label className="auth-label">{label}</label>
      <input className="auth-input" type={type} placeholder={placeholder} />
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
  return (
    <div className="auth-form">
      <div className="auth-name-grid">
        <FloatingInput label="First name" placeholder="Ada" />
        <FloatingInput label="Last name" placeholder="Lovelace" />
      </div>
      <FloatingInput
        label="Email address"
        type="email"
        placeholder="you@example.com"
      />
      <FloatingInput
        label="Password"
        type="password"
        placeholder="min. 8 characters"
      />
      <FloatingInput
        label="Confirm password"
        type="password"
        placeholder="••••••••"
      />
      <button className="auth-submit">Create account</button>
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
