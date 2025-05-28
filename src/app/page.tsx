import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyber Café - Your Digital Hub</title>
        <meta name="description" content="Fast, Secure, and Reliable Cyber Café Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Full Width Top Bar */}
      <div className="bg-gradient-to-r from-blue-400 to-cyan-300 text-white py-2 px-4 sm:px-6 flex flex-wrap justify-between items-center w-full fixed top-0 left-0 z-50 text-sm">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold">Email Us:</span>
          <a href="mailto:sumankumardamu76@gmail.com" className="text-black font-bold hover:underline break-all">
            sumankumardamu76@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold">Contact No.:</span>
          <a href="tel:+917017152386" className="text-black font-bold hover:underline">
            +91 6299813842
          </a>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold">Timing:</span>
          <span className="text-black font-bold">08:00 AM - 09:00 PM</span>
        </div>
      </div>

      <main className="w-full bg-gray-50 ">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between w-full p-4 sm:p-8 lg:p-16 bg-gradient-to-r from-blue-200 to-cyan-100 text-gray-900 shadow-2xl">
          <div className="lg:w-2/3 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              सभी तरह के ऑनलाइन <br /> फॉर्म घर बैठे भरवाएं
            </h1>
            <p className="mt-4 text-lg sm:text-xl">Suman Online Service</p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[...Array(18)].map((_, index) => {
                const services = [
                  { text: "Create/Update Aadhar", color: "bg-yellow-500", textColor: "text-black" },
                  { text: "Create PAN Card", color: "bg-green-500" },
                  { text: "Voter Card", color: "bg-red-500" },
                  { text: "Train Ticket, Bus Ticket", color: "bg-orange-500" },
                  { text: "Aadhar Print", color: "bg-purple-500" },
                  { text: "Aay Praman Patra", color: "bg-yellow-500", textColor: "text-black" },
                  { text: "Jati Praman Patra", color: "bg-green-500" },
                  { text: "Niwas Praman Patra", color: "bg-red-500" },
                  { text: "Lamination, Photocopy", color: "bg-orange-500" },
                  { text: "Passport", color: "bg-purple-500" },
                  { text: "PVC Aadhar", color: "bg-yellow-500", textColor: "text-black" },
                  { text: "Pension", color: "bg-green-500" },
                  { text: "Urgent Photo", color: "bg-red-500" },
                  { text: "Money Transfer", color: "bg-orange-500" },
                  { text: "Recharge (Mobile, DTH)", color: "bg-purple-500" },
                  { text: "Electricity Bill Payment", color: "bg-yellow-500", textColor: "text-black" },
                  { text: "Online Forms", color: "bg-green-500" },
                  { text: "Aawas Yojna, Ayushman Card", color: "bg-red-500" },
                ];
                const service = services[index];
                return (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm sm:text-base ${service.color} ${
                      service.textColor || "text-white"
                    } transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
                  >
                    {service.text}
                  </span>
                );
              })}
            </div>

            <p className="mt-8 text-lg font-bold text-blue-700">WhatsApp No. 6299813842</p>
          </div>

          <div className="lg:w-1/3 w-full flex justify-center mt-8 lg:mt-0">
            <img 
              src="/image/suman.jpg" 
              alt="Cyber Café Logo" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain transition-transform duration-300 hover:scale-110 mix-blend-multiply"
            />
          </div>
        </section>
     

{/* Section 1 - Save Time & Stay Home */}
<section className="flex flex-col lg:flex-row items-center justify-between bg-[#001933] text-white px-4 py-10 sm:px-6 lg:px-16">
  {/* Image */}
  <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
    <img 
      src="/image/time.png" 
      alt="Save Time" 
      className="rounded-xl shadow-xl border-4 border-white max-w-[90%] sm:max-w-full h-auto"
    />
  </div>

  {/* Text Content */}
  <div className="w-full lg:w-1/2 px-2 sm:px-6">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-500 text-center">
      समय बचायें और घर पर रहें
    </h2>
    <div className="h-1 w-20 sm:w-24 mx-auto bg-blue-500 mb-4"></div>
    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white text-center">
      अब आप घर बैठे अपना महत्वपूर्ण समय बचाकर, भीड़-भाड़ से मुक्त हो कर, 
      किसी भी प्रकार की सरकारी या प्राइवेट जॉब आवेदन की सुविधा के लिए 
      हम से सम्पर्क करें। आप बेफिक्र हो कर 100 प्रतिशत यकीन के साथ 
      हम से संपर्क कर सकते हैं।<br />
      <strong>Contact Me: +91 6299813842</strong>
    </p>
  </div>
</section>

{/* Section 2 - Upload Documents */}
<section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
    
    {/* Text */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-700 text-center">
        <span className="border-b-4 border-blue-500 pb-1">ऑनलाइन फॉर्म के लिए अपने डॉक्यूमेंट्स भेजें</span>
      </h2>

      <p className="text-gray-800 text-base sm:text-lg mb-4">
        सभी प्रकार के ऑनलाइन फॉर्म भरवाने के लिए जो जरूरी डॉक्यूमेंट्स हैं वो आप हमें अपने मोबाइल से फोटो क्लिक करके भेज सकते हैं।
      </p>

      <p className="text-gray-900 font-semibold mb-4">
        नोट - <br />
        आपके द्वारा भेजे गए डॉक्यूमेंट्स बिल्कुल साफ व पढ़ने योग्य होने चाहिए।
      </p>

      <p className="text-gray-700 text-base">
        किसी भी प्रकार के ऑनलाइन फॉर्म को आपके द्वारा वेरीफाई करवाने के बाद ही फाइनल सबमिट किया जायेगा। 
        अपने Document भेजने के लिए आप राइट साइड में दिए गये <span className="font-semibold text-green-600">WhatsApp</span> 
        चैट का प्रयोग कर सकते हैं या ईमेल द्वारा भेज सकते हैं।<br />
        <strong className="text-blue-800">Email – sumankumardamu76@gmail.com, WhatsApp: +91-6299818342</strong>
      </p>
    </div>

    {/* Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src="/image/Documentsuman.png"
        alt="Document Upload Illustration"
        className="rounded-lg border border-gray-300 shadow-lg max-w-[90%] sm:max-w-full h-auto"
      />
    </div>
  </div>
</section>


{/* Services Section */}
<section className="px-4 sm:px-6 lg:px-20 py-10 bg-white text-gray-800">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-blue-700 text-center">हमारी सेवाएं</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base sm:text-lg font-medium">
    {[
      {
        title: "आधार कार्ड बनवाना / अपडेट करना",
        desc: "नई आधार कार्ड बनवाने से लेकर नाम, पता, जन्मतिथि, मोबाइल नंबर आदि अपडेट कराना।",
      },
      {
        title: "पैन कार्ड बनवाना",
        desc: "नया पैन कार्ड आवेदन, सुधार या गुम होने पर पुनः प्रिंट करवाना।",
      },
      {
        title: "मतदाता पहचान पत्र (Voter ID)",
        desc: "नया वोटर आईडी बनवाना, सुधार करवाना या ऑनलाइन फॉर्म भरना।",
      },
      {
        title: "रेल / बस टिकट बुकिंग",
        desc: "IRCTC से रेल टिकट और सरकारी/निजी बस सेवा टिकट बुक करना। Tatkal टिकट की सुविधा भी उपलब्ध है।",
      },
      {
        title: "आधार कार्ड प्रिंट",
        desc: "UIDAI पोर्टल से डिजिटल आधार डाउनलोड कर PVC या पेपर पर प्रिंट करवाना।",
      },
      {
        title: "आय प्रमाण पत्र",
        desc: "सरकारी योजनाओं के लिए ऑनलाइन आय प्रमाण पत्र बनवाना।",
      },
      {
        title: "जाति प्रमाण पत्र",
        desc: "SC/ST/OBC आदि वर्गों के लिए जाति प्रमाण पत्र बनवाना।",
      },
      {
        title: "निवास प्रमाण पत्र",
        desc: "किसी विशेष राज्य या जिले में निवास के प्रमाण हेतु दस्तावेज बनवाना।",
      },
      {
        title: "लैमिनेशन, फोटोकॉपी",
        desc: "दस्तावेजों की लेमिनेशन, फोटोकॉपी (Xerox), स्कैनिंग आदि।",
      },
      {
        title: "पासपोर्ट बनवाना",
        desc: "नया पासपोर्ट आवेदन, नवीनीकरण या सुधार प्रक्रिया में सहायता।",
      },
      {
        title: "पीवीसी आधार कार्ड",
        desc: "PVC मटेरियल में आधार कार्ड का ऑर्डर और प्रिंटिंग सेवा।",
      },
      {
        title: "पेंशन सेवाएं",
        desc: "वरिष्ठ नागरिकों व सरकारी कर्मचारियों के लिए पेंशन से संबंधित कार्य।",
      },
      {
        title: "तत्काल फोटो सेवाएं",
        desc: "पासपोर्ट साइज फोटो तत्काल खींचना और प्रिंट करना।",
      },
      {
        title: "पैसे ट्रांसफर करना",
        desc: "देशभर में किसी भी बैंक खाते में पैसे भेजने की सुविधा।",
      },
      {
        title: "मोबाइल और डीटीएच रिचार्ज",
        desc: "सभी कंपनियों के प्रीपेड/पोस्टपेड मोबाइल और DTH का रिचार्ज।",
      },
      {
        title: "बिजली बिल भुगतान",
        desc: "बिजली विभाग के बिल का ऑनलाइन भुगतान और रसीद प्राप्त करना।",
      },
      {
        title: "सभी प्रकार के ऑनलाइन फॉर्म",
        desc: "सरकारी और निजी संस्थाओं के सभी तरह के ऑनलाइन आवेदन फॉर्म भरना।",
      },
      {
        title: "आवास योजना / आयुष्मान कार्ड",
        desc: "प्रधानमंत्री आवास योजना एवं आयुष्मान भारत कार्ड के लिए आवेदन।",
      },
      {
        title: "राशन कार्ड",
        desc: "नए राशन कार्ड के लिए आवेदन तथा पुराने राशन कार्ड में संशोधन की सुविधा।",
      },
      {
        title: "ड्राइविंग लाइसेंस",
        desc: "नए ड्राइविंग लाइसेंस के लिए आवेदन, नवीनीकरण तथा जानकारी अपडेट करने की सुविधा।",
      },
      {
        title: "एयरप्लेन टिकट",
        desc: "घरेलू और अंतरराष्ट्रीय हवाई यात्रा के लिए सस्ती एयरप्लेन टिकट बुकिंग सेवा।",
      },
    ].map((service, index) => (
      <div key={index}>
        <h3 className="font-bold text-blue-600 mb-1">{service.title}</h3>
        <p className="text-gray-700">{service.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Footer Section */}
<footer className="bg-[#001933] text-white py-12 px-4 sm:px-6 lg:px-20 mt-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Contact Info */}
    <div>
      <h4 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">संपर्क करें</h4>
      <p className="mb-2">📍 Location: Suman Online Service, Damu, Basopatti, Madhubani, 847225</p>
      <p className="mb-2">📞 Phone: <a href="tel:+916299813842" className="text-blue-300 hover:underline">+91 6299813842</a></p>
      <p className="mb-2">📱 WhatsApp: <a href="https://wa.me/916299813842" className="text-blue-300 hover:underline">+91 6299813842</a></p>
      <p>✉️ Email: <a href="mailto:sumankumardamu76@gmail.com" className="text-blue-300 hover:underline">sumankumardamu76@gmail.com</a></p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">त्वरित लिंक</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-300">होम</a></li>
        <li><a href="#services" className="hover:text-blue-300">हमारी सेवाएं</a></li>
        <li><a href="#documents" className="hover:text-blue-300">दस्तावेज भेजें</a></li>
        <li><a href="tel:+916299813842" className="hover:text-blue-300">कॉल करें</a></li>
      </ul>
    </div>

    {/* Opening Hours */}
    <div>
      <h4 className="text-lg sm:text-xl font-bold mb-4 text-blue-400">खुलने का समय</h4>
      <p className="mb-1">सोमवार - रविवार:</p>
      <p className="text-blue-300 font-semibold">08:00 AM - 09:00 PM</p>
      <p className="mt-4 text-sm text-gray-400">हम सभी सरकारी छुट्टियों पर खुले रहते हैं।</p>
    </div>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center items-center gap-6 mt-10 text-2xl">
    <a href="https://wa.me/916299813842" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition duration-300">
      <i className="fab fa-whatsapp"></i>
    </a>
    <a href="https://facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition duration-300">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition duration-300">
      <i className="fab fa-instagram"></i>
    </a>
  </div>

  {/* Copyright */}
  <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} Suman Online Service. All rights reserved.
  </div>
</footer>
</main>
    </>
  );
}