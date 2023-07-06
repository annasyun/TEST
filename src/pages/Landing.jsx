import React from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

const Landing = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <section className="text-primary relative w-full h-full pt-14">
      <h1 className="text-4xl font-bold ml-7">
        Give MY__
        <br />
        Seat
        <img
          src="assets/images/logo.svg"
          alt="Give MY__Seat 로고 이미지"
          className="w-9 h-9 inline-block"
        />
      </h1>
      <button
        onClick={navigateToLogin}
        className="mx-auto block mt-40 cursor-pointer"
      >
        카카오 로그인으로 시작하기
      </button>
      <img
        src="assets/images/barista.svg"
        alt="커피를 들고 있는 바리스타 이미지"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};

export default Landing;
