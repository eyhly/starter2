import React from 'react'
import { FaEnvelope, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer text-white pt-10 pb-4 ">
  <div className="container flex justify-between mx-auto">
    <div>
      <h2 className="text-4xl font-bold mb-2">New Daihatsu Jatim</h2>
      <hr className="border-blue-300 mb-2 w-3/4" />
      <p>Penyedia Mobil Kualitas Terbaik dan Terpercaya</p>
    </div>

    <div >
      <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
      <hr className="border-blue-300 mb-2 w-3/4" />
      <ul className="space-y-2 footer p-4 rounded border w-120 border-blue-400">
        <li className="flex items-center gap-2">
          📞 <span>+62 858 0494 5977</span>
        </li>
        <li className="flex items-center gap-2">
          📷 <span>@Daihatsu_Jatim</span>
        </li>
        <li className="flex items-center gap-2">
          🔵 <span>List Item #3</span>
        </li>
      </ul>
    </div>

    <div className="flex flex-col w-100 items-center gap-4">
      <iframe
        className="w-full h-40 rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19806.557887597457!2d0.0880648043339!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjUiTiAwwrAwMSc1OC43IkU!5e0!3m2!1sen!2sus!4v1632158459081!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>

      <div className="flex justify-between gap-2">
        <a href="#" className="bg-blue-800 p-2 rounded-full text-3xl hover:bg-blue-700">
          <FaFacebook/>
        </a>
        <a href="#" className="bg-blue-800 p-2 text-3xl rounded-full hover:bg-blue-700">
          <FaTwitter/>
        </a>
        <a href="#" className="bg-red-800 p-2 text-3xl rounded-full hover:bg-blue-700">
          <FaYoutube/>
        </a>
        <a href="#" className="bg-blue-800 p-2 text-3xl rounded-full hover:bg-blue-700">
          <FaEnvelope/>
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="text-center text-sm text-gray-300 mt-10 border-t border-gray-700 pt-4">
    Design & Develop by <span className="text-pink-500">Luminara Prismatica</span> | ©2025. All Right Reserved
  </div>
</footer>

  )
}

export default Footer