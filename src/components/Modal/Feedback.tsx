import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFeedModal } from "../../store/storeSlice/storeSlice";

// import { usePostFeedbackMutation } from "../../store/RTKQuery";
// import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { Rate } from "antd";

const Feedback: React.FC = () => {
  const [question_4, setQuestion4] = useState("");
  const [loading] = useState(false);

  const dispatch = useAppDispatch();
  const { feedModal } = useAppSelector((state) => state.storeSlice);
  const [rateValue, setRateValue] = useState(0);

  // const [postFeedback] = usePostFeedbackMutation();

  function handlePostFeedback(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setLoading(true);
    // setTimeout(() => {
    //   postFeedback({
    //     question1: question_1,
    //     question2: question_2,
    //     question3: question_3,
    //     question4: question_4,
    //   });

    //   toast("Отзыв успешно отправлен!", { type: "success" });
    //   setLoading(false);
    //   dispatch(setFeedModal(false));
    // }, 1000);
  }

  const desc = ["Ужасно", "Плохо", "Нормально", "Хорошо", "Замечательна"];

  return (
    <>
      <div className={feedModal ? "modal active" : "modal"}>
        <div className="container">
          <div className="modal-inner">
            <span
              className="closeModal-btn"
              onClick={() => {
                dispatch(setFeedModal(false));
              }}
            >
              &times;
            </span>
            <h1 className="title">Отзыв гостей</h1>
            <form className="feedback-form" onSubmit={handlePostFeedback}>
              <div className="question-box">
                <p>Ваше впечатление</p>
                <div className="rating-box">
                  {/* {rateValue ? (
                    <span>{desc[rateValue - 1]}</span>
                  ) : (
                    <span>Оцените</span>
                  )} */}
                  <Rate
                    tooltips={desc}
                    onChange={setRateValue}
                    value={rateValue}
                  />
                </div>
              </div>
              <div className="question-box">
                <p>Ваше предложения и жалобы</p>
                <textarea
                  cols={30}
                  rows={10}
                  value={question_4}
                  onChange={(e) => setQuestion4(e.target.value)}
                  required
                ></textarea>
              </div>

              <button disabled={loading}>
                {loading ? (
                  <PulseLoader color="#ddd" size={8} speedMultiplier={0.6} />
                ) : (
                  "Оставить отзыв"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
