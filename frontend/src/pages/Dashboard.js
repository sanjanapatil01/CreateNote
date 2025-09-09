import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  // ✅ get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login"); // redirect if not logged in
    } else {
      fetchNotes();
    }
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/notes", form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setNotes([...notes, res.data]);
      setForm({ title: "", content: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white", padding: "20px" }}>
      {/* ✅ Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Welcome, {user?.name || "User"} 👋</h1>
        
      </div>

      {/* ✅ Add Note */}
      <div style={{ marginTop: "20px" }} className="note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #5a3d3d",
            backgroundColor: "#3d2a2a",
            color: "white",
          }}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #5a3d3d",
            backgroundColor: "#3d2a2a",
            color: "white",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "#5a3d3d",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          + Add Note
        </button>
      </div>

      {/* ✅ Notes List */}
      <div style={{ marginTop: "30px" }}>
        {notes.length === 0 ? (
          <p>No notes yet! Add your first note!</p>
        ) : (
          notes.map((note) => (
            <div
              key={note._id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #5a3d3d",
                borderRadius: "5px",
                backgroundColor: "#2a1d1d",
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button
                onClick={() => handleDelete(note._id)}
                style={{
                  backgroundColor: "#5a3d3d",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
