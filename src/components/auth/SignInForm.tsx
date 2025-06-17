import { useState } from "react";
import { Link, useNavigate } from "react-router"; // Use useNavigate for redirection
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Simulate admin credentials
    const adminEmail = "admin@hbelen.gob.pe";
    const adminPassword = "admin";

    if (email === adminEmail && password === adminPassword) {
      setError(""); // Clear any previous errors
      navigate("/dashboard"); // Redirect to dashboard on success
    } else {
      setError("Credenciales incorrectas. Intenta de nuevo."); // Set error message
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Iniciar Sesión
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ingresa tu correo electrónico y contraseña para iniciar sesión.
            </p>
          </div>
          <div>
            <form onSubmit={handleSignIn}> {/* Add onSubmit handler to form */}
              <div className="space-y-6">
                <div>
                  <Label>
                    Correo Electrónico <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                    placeholder="info@gmail.com"
                    type="text" // Ensure type is text for email
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label>
                    Contraseña <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                {error && ( // Display error message if present
                  <p className="text-sm text-error-500 text-center">{error}</p>
                )}
                <div className="flex items-center justify-between">
                </div>
                <div>
                  {/* Remove Link from Button, as navigation is handled by useNavigate */}
                  <Button className="w-full" size="sm">
                    Iniciar Sesión
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}