// app/page.js
'use client';  // This tells Next.js this is a client component

import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Firebase ile kullanıcı kaydı
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Kayıt başarılı!");
    } catch (error) {
      setMessage(`Hata: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>E-posta Kayıt Sistemi</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresinizi girin"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifrenizi girin"
          required
        />
        <button type="submit">Kayıt Ol</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
