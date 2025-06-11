import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Iniciar Sesión | Medi-Rapid"
        description="Esta es la página de inicio de sesión de Medi-Rapid"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
