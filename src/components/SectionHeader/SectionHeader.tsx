import React from "react";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { useAppDispatch } from "../../store/hooks";
import { setFeedModal } from "../../store/storeSlice/storeSlice";

const SectionHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="section-header">
      <div className="container">
        <div className="infos">
          <div>
            <div className="infos-top">
              <span>
                <FiPhone color="#ffb300" fontSize={22} />
                <a href="tel:+998990950007">+998 94 903 55 55</a>
              </span>
            </div>
            <div className="infos-btm">
              <span>
                <GrLocation color="#ffb300" fontSize={22} />
                Т.Ещанова 50/1 <br />  24 мкр
              </span>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => {
              dispatch(setFeedModal(true));
            }}
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
