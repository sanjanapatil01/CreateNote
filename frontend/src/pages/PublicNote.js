import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

const PublicNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}/public`);
        setNote(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };
    fetchNote();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Public Note</h2>
      {note ? <p>{note.text}</p> : <p>Loading...</p>}
    </div>
  );
};

export default PublicNote;
