import { useForm } from "react-hook-form";
import '../css/Login.css';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { LoginUser } from "../redux/slices/LoginSlice";
import { useNavigate } from "react-router-dom";

function Login() {

    useEffect(() => {
        document.body.className = "login-page";
        return () => { document.body.className = ""; }
    }, []);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = async (data) => {
        try {
            const response = await dispatch(LoginUser(data)).unwrap();
            if (response && response.id > 0) {
                navigate("/")
            }
            else {
                setError("Password", {
                    type: "manual",
                    message: "Kullanıcı Adı veya Şifre yanlış!! Lütfen tekrar deneyiniz."
                });
            }
        } catch (error) {
            setError("Password", {
                type: "manual",
                message: "Giriş sırasında bir hata oluştu!"
            });
            console.error("Giriş hatası:", error);
        }
    };

    return (
        <div className="signup">
            <div className="signup-classic">
                <h2 className="fw-bold">Kişisel Uygulama</h2>
                <form onSubmit={handleSubmit(userLogin)} className="form">
                    <fieldset className="username">
                        <input type="text" placeholder="Kullanıcı Adı" {...register("UserName", {
                            required: "Kullanıcı Adı zorunludur."
                        })} />
                        {errors.UserName && <span className="errorMessage">{errors.UserName.message}</span>}
                    </fieldset>
                    <fieldset className="password">
                        <input type="password" placeholder="Şifre"  {...register("Password", {
                            required: "Şifre zorunludur.",
                            minLength: { value: 5, message: "Minimum 5 karakter giriniz." }
                        })} />
                        {errors.Password && <span className="errorMessage">{errors.Password.message}</span>}
                    </fieldset>
                    <button type="submit" className="btn">GİRİŞ</button>
                </form>
            </div>
        </div>
    );
}

export default Login;