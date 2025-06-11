import React from "react";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imageUrl = "https://segurospersonales.chubbinsured.com/wp-content/uploads/2019/11/chequeos-medicos-que-debe-hacerse.jpg"; // Tu enlace de Imgur

  return (
    <div className="relative p-6 bg-white dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        
        {/* Sección de imagen con mejoras */}
        <div className="hidden lg:block lg:w-1/2 h-full overflow-hidden group relative">
          <img 
            src={imageUrl}
            alt="Panel de autenticación"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback visual si la imagen no carga
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.classList.add("bg-gradient-to-br", "from-blue-500", "to-purple-600");
            }}
            loading="lazy" // Carga diferida para mejor performance
          />
          
          {/* Overlay para mejor contraste (opcional) */}
          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all duration-300" />
        </div>

        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}