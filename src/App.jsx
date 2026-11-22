import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const inputRef = useRef();
  const sent = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sent.current) return;
    sent.current = true;
    console.log(inputRef.current.value);
    toast.success("success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Toaster />
      <input ref={inputRef} />
      <button>Göndər</button>
    </form>
  );
};

export default App;