function FinishButton({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restat Quizz
    </button>
  );
}

export default FinishButton;
