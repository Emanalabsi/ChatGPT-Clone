export const Main = () => {
  return (
    <section className="main">
      <h1>ChatBot.</h1>
      <ul className="feed"></ul>
      <div className="bottom-section">
        <div className="input-container">
          <input placeholder="Send a message." />
          <div id="submit">➢</div>
        </div>
        <p className="info">
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts. ChatGPT May 12 Version
        </p>
      </div>
    </section>
  );
};
