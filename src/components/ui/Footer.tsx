// import { Github, Linkedin, Mail } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="bg-black text-white border-t border-white/10 py-16 font-['Space_Grotesk']">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
//         {/* Left side — Branding */}
//         <div className="text-center md:text-left space-y-2">
//           <h3 className="text-2xl font-semibold tracking-tight">
//             Kamal Hussain
//           </h3>
//           <p className="text-sm text-gray-400">
//             Crafting digital experiences with{" "}
//             <span className="text-white">Next.js</span>
//           </p>
//         </div>

//         {/* Middle — Navigation links */}

//         {/* Right side — Social icons */}
//         <div className="flex gap-5">
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-white transition-colors">
//             <Github className="w-5 h-5" />
//           </a>
//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-white transition-colors">
//             <Linkedin className="w-5 h-5" />
//           </a>
//           <a
//             href="mailto:youremail@example.com"
//             className="text-gray-400 hover:text-white transition-colors">
//             <Mail className="w-5 h-5" />
//           </a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className=" border-white/10 mt-10 pt-6 text-center text-gray-500 text-xs tracking-wide">
//         © {new Date().getFullYear()} Kamal Hussain — Built with Next.js
//       </div>
//     </footer>
//   );
// };

import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 font-['Space_Grotesk']">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side — Branding */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">
            Kamal Hussain
          </h3>
          <p className="text-sm text-gray-400">
            Crafting digital experiences with{" "}
            <span className="text-white">Next.js</span>
          </p>
        </div>

        {/* Right side — Social icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/TappaKamal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile">
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/kamalhussain-t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile">
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:kamalhussaintappa09@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Send Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-gray-500 text-xs tracking-wide">
        © {new Date().getFullYear()} Kamal Hussain — Built with Next.js
      </div>
    </footer>
  );
};
