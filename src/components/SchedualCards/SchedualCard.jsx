import React, { useEffect, useRef, useState } from "react";

export default function SchedualCard({
  items,
  handleCheckRetire,
  isArchived,
  setReword,
  reword,
}) {
  const exampleInput = useRef();

  const [toggleClass, setToggleClass] = useState();
  const [toggleAnimationClass, setToggleAnimationClass] = useState("");
  const [isToast, setIsToast] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isToastDuration, setToastDuration] = useState(2);

  const handleChange = (e) => {
    setReword(e.target.checked);
    console.log(e.target.checked);

    !isPaused
      ? (setIsPaused(true),
        setToggleAnimationClass("animate__animated animate__backOutRight"))
      : (setToggleAnimationClass(" animate__animated animate__bounceInRight"),
        setIsPaused(false));

    if (e.target.checked == true) {
      console.log(e.target.checked + " " + "added to archive");
      setToggleClass("bem__style");
    }
    if (e.target.checked === false) {
      console.log(e.target.checked + " " + "un archived");
    }
  };

  useEffect(() => {
    let toastTimerId;
    if (!isPaused) {
      setIsToast(true);
      toastTimerId = setInterval(() => {
        setToastDuration((prev) => prev - 1);
        setIsToast(false);
      }, 3000);
      console.log(toastTimerId);
    }

    return function cleanup() {
      console.log(`clearing ${toastTimerId}`);
      clearInterval(toastTimerId);
    };
  }, [isPaused]);
  return (
    <div className="Project__UI__grid__schedualCards">
      <div className="Project__UI__schedual-card">
        <h2 className="Project__UI__utility__copy__h2" role="headingTitle">
          cards section
        </h2>
        {items.map((dataItem, _index) => {
          return (
            <div
              key={dataItem.id}
              className="Project__UI__schedual-card__content"
            >
              <div className="schedual-card__content__header">
                <h3 className="Project__UI__utility__copy__h3">
                  Name: {dataItem.name}
                </h3>
                <h5 className="Project__UI__utility__copy__h5">
                  ID: {dataItem.id}
                </h5>
              </div>
              <p className="Project__UI__utility__copy__body-copy">
                {" "}
                Boolean {dataItem.isRetired.toString()}{" "}
              </p>
              <p className="Project__UI__utility__copy__body-copy">
                {" "}
                Description: {dataItem.description}
              </p>

              <div className="schedual-card__content__footer">
                <form>
                  <fieldset className="Project__UI__utility__reset">
                    <legend className="  Project__UI__utility__screen-reader">
                      Options
                    </legend>
                    <div className="Project__UI__utility__checkbox-input">
                      <label
                        htmlFor={dataItem.name}
                        className={
                          "Project__UI__utility__checkbox-input__label"
                        }
                      >
                        <input
                          aria-label="toggle add to archive"
                          id={dataItem.name}
                          name={dataItem.name}
                          type="checkbox"
                          className={`Project__UI__utility__checkbox-input__input ${toggleClass} `}
                          value={dataItem.isRetired}
                          onChange={(e) =>
                            handleCheckRetire(dataItem.id) && handleChange(e)
                          }
                        />
                        <span
                          ref={exampleInput}
                          className="Project__UI__utility__placeholder"
                        >
                          {(isArchived = dataItem.isRetired.toString())}
                        </span>
                      </label>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          );
        })}
      </div>

      {isToast ? (
        <div
          className={` Project__UI__schedual-card__toast   ${toggleAnimationClass} `}
        >
          <div className="Project__UI__schedual-card__toast__content">
            <h4 className="Project__UI__utility__copy__h4">toast added </h4>
            added to archive{" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
