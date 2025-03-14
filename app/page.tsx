'use client';

import React, { useState } from 'react';
import { database } from "../lib/firebase"; 
import { ref, set } from "firebase/database"; // Firebase'den gerekli fonksiyonlar

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(""); // Hata mesajı durumu

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setError(""); // Her submit işleminden önce hata mesajını sıfırlıyoruz

    // Alanları kontrol et
    if (!name || !email || !message) {
      setError("Lütfen tüm alanları doldurun!");
      return;
    }

    // E-posta formatını kontrol et
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Geçersiz e-posta adresi!");
      return;
    }

    setStatus("Yükleniyor...");

    // Firebase veritabanına veri kaydetme
    const id = Date.now();  // Benzersiz bir ID oluştur
    const formRef = ref(database, `messages/${id}`);

    try {
      await set(formRef, {
        name: name,
        email: email,
        message: message,
      });
      setStatus("Mesaj başarıyla gönderildi!");
      setStatus("Katıldığınınz için teşekürler!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus(`Hata: ${error.message}`);
    }
  };

  return (
    
    <div className="relative h-auto min-h-screen bg-black">
      
      {/* Üst Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-opacity-70 bg-black text-white flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-400">Lunaper Lew</div>
        <div className="flex space-x-8 font-bold">
          <a href="#vision" className=" text-pink-500 hover:text-blue-500 font-bold">Vizyon</a>
          <a href="#mission" className=" text-pink-500  hover:text-blue-500 ">Misyon</a>
          <a href="#contact" className=" text-pink-500 hover:text-blue-500">İletişim</a>
        </div>
      </div>

      {/* Ana İçerik - Ortalanmış */}
      <div className="flex justify-center items-center h-[100vh] text-center text-white bg-opacity-60 bg-back" style={{  backgroundImage: 'url(../back5.jpg)',
    padding: "0 20px",
    backgroundSize: 'cover',
    backgroundPosition: 'center',  }}>
        <div className="max-w-xl p-8 bg-blue-600/20 rounded-lg" style={{ backgroundSize: 'cover', backgroundPosition: 'center'} } >
          <h1 className="text-5xl font-bold mb-4">Lunapera lew</h1>
          <p className="text-xl mb-8">Mobil Uygulama Şirketiniz - Yenilikçi çözümler, güçlü bir gelecek.</p>
        </div>
      </div>

      {/* Vizyon ve Misyon Bölümü */}
      <div id="vision" className="bg-opacity-90 bg-black text-white-500 p-12 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Vizyonumuz</h2>
        <p className="text-center text-lg">Teknolojiyi doğa ile birleştirerek insanların hayatlarını kolaylaştırmak.</p>
      </div>

      <div id="mission" className="bg-opacity-90 bg-black text-white-500 p-12 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Misyonumuz</h2>
        <p className="text-center text-lg">Kullanıcılarımıza yenilikçi, güvenli ve sürdürülebilir mobil uygulama çözümleri sunmak.</p>
      </div>

      {/* İletişim Formu */}
      <div id="contact" className="bg-opacity-80 bg-black text-white-500 p-6 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center text-pink-500">Bize Ulaşın!</h2>
        
        {/* Hata mesajı */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Adınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Mesajınız"
            value={message}
            maxLength={250} 
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-right text-sm text-gray-500">{message.length}/250</p>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
            Mesajı Gönder
          </button>
        </form>
        {status && <p className="mt-4 text-center text-green-500">{status}</p>}
      </div>


 

      <div className="py-8">
  <div className="overflow-x-auto">
  <h2 className="text-3xl font-bold mb-8 text-pink-500 text-center">Projelerimiz Sizlerle</h2>
    <div className="flex justify-center gap-8">
      {/* Proje 1 */}
      <div className="max-w-xs bg-lightblue-400 p-4 rounded-lg" >
        <img
          src="logo2.png"  // Resmin yolu
          alt="Proje Resmi"
          className=" object-contain  rounded-lg  "style={{ borderRadius: '50px', width: '250px', height: '250px' }} 
          
        />
        <h3 className="text-xl font-bold mt-4 text-blue-600">Mizan Quad</h3>
        <p className="text-gray-700 mt-2">
          Moderm kulanışlı bir Hesap Makinesi.
        </p>

<div>

<p className='text-black'> Mizan Quad</p>
        <a 
  href="https://play.google.com/store/apps/details?id=com.kehlanrintaros.mizanquade&hl=tr" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-pink-500 text-white text-center px-15 py-3  rounded-lg transition duration-300 hover:bg-blue-500 flex items-center space-x-2"
>
  <span>Google Play'den İndir</span>
 
</a>
<p className='text-center text-blue-500 py-2' >Yaynlandı.</p>
</div>

      </div>

      {/* Proje 2 */}
      <div className="max-w-xs bg-lightblue-400 p-4 rounded-lg">
        <img
          src="back3.jpg"  // Resmin yolu
          alt="Proje Resmi"
          className="object-cover rounded-lg"style={{ borderRadius: '50px', width: '250px', height: '250px' }} 
        />
        <h3 className="text-xl font-bold mt-4 text-blue-600">loralin  AI</h3>
        <p className="text-gray-700 mt-2">
        Yapay zeka eğitmen koçunuz. loralin. Her zamn sizinle
        </p>
        <div>

<p className='text-black'> Mizan Quad</p>
        <a 
  href="https://play.google.com/store/apps/details?id=com.kehlanrintaros&hl=tr" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-pink-500 text-white text-center px-15 py-3  rounded-lg transition duration-300 hover:bg-blue-500 flex items-center space-x-2"
>
  <span>Google Play'den İndir</span>
 
</a>
<p className='text-center text-blue-500 py-2' >Yakında Tüm Platformlarda</p>
</div>
      </div>

      {/* Diğer projeler için aynı yapıyı ekleyebilirsiniz */}


      
    </div>
  </div>
</div>









      <div className="bg-black text-white py-12 px-6 mt-12">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-pink-500">İletişim Bilgilerim</h2>

    <div className="flex justify-center items-center mt-8">
  <img
    src="luna3.jpg"  // Resmin yolu
    alt="Resim"
    className="w-42 h-42 rounded-full border-4 border-pink-500"  // Yuvarlak yapmak için 'rounded-full' kullanılıyor
  />
</div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <p className="text-xl font-semibold text-pink-500">Ad</p>

        <p className="text-lg">Lunapera lew</p>
      </div>
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <p className="text-xl font-semibold text-pink-500">E-posta</p>
        <p className="text-lg">lunapera.lew@gmail.com</p>
      </div>
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <p className="text-xl font-semibold text-pink-500">Meslek</p>
        <p className="text-lg">Yazılım Geliştirici</p>
      </div>
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <p className="text-xl font-semibold text-pink-500">Şirket</p>
        <p className="text-lg">Lunaper Lew</p>
      </div>
    </div>
    <div className="mt-8">
      <a
        href="mailto:kehlan.rintaros@example.com"
        className="text-lg font-semibold text-blue-500 hover:text-blue-700"
      >
        E-posta Gönder 
      </a>
    </div>
  </div>
</div>





      {/* Kapanış Mesajı */}
      <div className="absolute bottom-10 left-0 right-0 p-4 bg-opacity-50 bg-black text-pink-500 text-center">
        <p>"Teknolojiyi, doğa ile harmanlayarak daha iyi bir gelecek inşa ediyoruz."</p>
      </div>





      {/* Footer */}
      <div className="bg-black text-white py-4 mt-12">
        <div className="text-center">
          <p className="text-lg">Lunaper Lew</p>
          <p className="text-sm">Email:lunaper.lew@gmail.com</p>
          <p className="text-xs mt-2">Lunapera.Lew@Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
}
