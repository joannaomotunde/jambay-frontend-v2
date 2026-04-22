import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const EditProfile = () => {
  const navigate = useNavigate();

  // MOCK DATA (replace with API later)
  const [form, setForm] = useState({
    name: "Joanna Omotunde",
    email: "joanna@example.com",
    phone: "+234 800 000 0000",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // MOCK SAVE
    setTimeout(() => {
      setLoading(false);
      navigate("/profile");
    }, 800);
  };

  return (
    <div className="container edit-profile-page">

      {/* HEADER */}
      <div className="page-header">
        <h1>Edit Profile</h1>
      </div>

      {/* FORM CARD */}
      <div className="card form-card">

        <form onSubmit={handleSubmit} className="form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Enter your phone number"
            />
          </div>

          {/* ACTIONS */}
          <div className="form-actions">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;