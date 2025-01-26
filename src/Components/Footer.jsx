import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#3e3939", color: "white", padding: "20px 0", textAlign: "center",marginTop:"6vh" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>אתר האוכל שלי 🍴</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
                <a href="/about" style={{ color: "white", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>אודות</a>
                <a href="/privacy-policy" style={{ color: "white", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>מדיניות פרטיות</a>
                <a href="/terms" style={{ color: "white", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>תנאי שימוש</a>
                <a href="/contact" style={{ color: "white", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>צור קשר</a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "10px" }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", transition: "color 0.3s" }}><FaFacebook size={24} /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", transition: "color 0.3s" }}><FaInstagram size={24} /></a>
                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" style={{ color: "white", transition: "color 0.3s" }}><FaWhatsapp size={24} /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", transition: "color 0.3s" }}><FaTwitter size={24} /></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", transition: "color 0.3s" }}><FaYoutube size={24} /></a>
            </div>
            <div>© {new Date().getFullYear()} כל הזכויות שמורות לאתר האוכל שלי</div>
        </footer>
    );
};

export default Footer;

