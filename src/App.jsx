import useApp from "./useApp";

import wind from "./assets/wind.svg";
import humdidaty from "./assets/humidaty.svg";

import "./AppStyle.css";

function App() {

  const { formik, data, imgStatus } = useApp();

  return (
    <>
      <div className="content w-100 vh-100 overflow-hidden position-relative">
        <div className="container m-auto d-flex justify-content-center  h-100 position-relative z-3 mt-5">
          <div className="row h-75">
            <div className="col-lg-12 col-sm-12 col-md-12">
              <div className="main-card px-5 h-100 d-flex justify-content-center align-items-center card bg-transparent border-white pb-5">
                <div className="heading">
                  <h1 className="text-white d-flex justify-content-center mt-4">
                    Let&apos;s Check Your City Weather
                  </h1>
                </div>
                <div className="form d-flex justify-content-center mt-3">
                  <form
                    className="d-flex align-items gap-2"
                    onSubmit={formik.handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Search your city"
                      className="form-control"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="city"
                    />
                    <button className="btn btn-info" type="onSubmit">
                      Search
                    </button>
                  </form>
                </div>
                {data ? (
                  <>
                    <div className=" d-flex align-items-center justify-content-center mt-5 flex-column pb-5">
                      <h4 className="text-white mb-3 fs-2">{data?.name}</h4>
                      <img src={imgStatus} className="icon-style" alt="" />
                      <div className="temp mt-3">
                        <p className="text-white mb-0 fs-1 position-relative">
                          {data && data.main && data.main.temp
                            ? data.main.temp.toFixed()
                            : null}
                          <span className="fs-6 position-absolute ms-1">
                            °C
                          </span>
                        </p>
                      </div>
                      <div className="clouds">
                        <p className="text-white fs-4">
                          {data?.weather && data.weather[0]?.main}
                        </p>
                      </div>
                      <div className="info d-flex align-items-center gap-5 mt-5">
                        <div className="wind d-flex align-items-center gap-3">
                          <img src={wind} className="wind-style" alt="" />
                          <div className="info-text">
                            <p className="mb-0 text-white">
                              {data?.wind?.speed.toFixed()} KM/H
                            </p>
                            <p className="mb-0 text-white">WindSpeed</p>
                          </div>
                        </div>
                        <div className="humidaty  d-flex align-items-center gap-3">
                          <img src={humdidaty} className="wind-style" alt="" />
                          <div className="info-text">
                            <p className="mb-0 text-white">
                              {data && data.main && data.main.temp
                                ? data.main.humidity
                                : null}
                              %
                            </p>
                            <p className="mb-0 text-white">humidity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
