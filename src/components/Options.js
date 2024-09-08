import { type } from "@testing-library/user-event/dist/type";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map(
        (
          option,
          index // first option is the current element of the rray and the second one is the index
        ) => (
          <button
            className={`btn btn-option  ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={answer !== null}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        )
      )}
    </div>
  );
}

export default Options;
