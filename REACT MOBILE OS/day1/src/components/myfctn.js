function Head({ el }) {
    return (
      <div>
        <h1>{el.heading}</h1>
        <ul>
          {el.items.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    );
  }

  export default Head;