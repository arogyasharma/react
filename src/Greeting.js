import React from "react";

function Greeting() {
  const name = "Alice";

  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good Morning" : "Good Afternoon";
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>{greeting}!</h2>
    </div>
  );
}

export default Greeting;
