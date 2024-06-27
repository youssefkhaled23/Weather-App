import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

// images
import snow from "./assets/snow.png";
import rain from "./assets/rain.png";
import mist from "./assets/mist.png";
import cloud from "./assets/cloud.png";
import clear from "./assets/clear.png";

const useApp = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const apiKey = "215953ba26e30c788d1883021640858d";

  const handleSubmit = async () => {
    try {
      const response = await axios.get(api);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      city: search,
    },
    onSubmit: handleSubmit,
  });

  const imgStatus =
    data?.weather && data.weather[0]?.main === "Clouds"
      ? cloud
      : data?.weather && data.weather[0]?.main === "Rain"
      ? rain
      : data?.weather && data.weather[0]?.main === "Snow"
      ? snow
      : data?.weather && data.weather[0]?.main === "Clear"
      ? clear
      : data?.weather && data.weather[0]?.main === "Haze"
      ? mist
      : null;

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${formik.values.city}&units=metric&appid=${apiKey}`;

  return { setSearch, formik, data, search, imgStatus };
};

export default useApp;
