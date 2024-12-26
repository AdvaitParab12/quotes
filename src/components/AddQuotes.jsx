import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function AddQuote({ onSubmit, onSort }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSubmit(inputValue)
    setInputValue("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a Quote"
        className="mb-2"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <div className="flex gap-2">
        <Button>Add</Button>
        <Button onClick={onSort}>Sort</Button>
      </div>
    </form>
  );
}

export default AddQuote;
