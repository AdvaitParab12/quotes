import { useReducer } from "react";
import React from "react";
import { quoteReducer } from "@/lib/reducer";
import List from "@/components/ListQuotes";
import AddQuotes from "@/components/AddQuotes";

function App() {
  const [quote, dispatch] = useReducer(quoteReducer, []);

  const handleAddQuote = (title) => {
    dispatch({ type: "add", payload: title });
  };

  const deleteQuote = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleLikeQuote = (id) => {
    dispatch({ type: "like", payload: id });
  };
  const handleDisklikeQuote = (id) => {
    dispatch({ type: "dislike", payload: id });
  };

  const handleSortQuotes = () => {
    dispatch({ type: "sort" });
  };
  return (
    <div className="max-w-96 mx-auto p-2 flex flex-col gap-5">
      <h1 className="text-3xl text-center font-bold my-5">Quotes</h1>
      <AddQuotes onSubmit={handleAddQuote} onSort={handleSortQuotes} />
      <List
        quote={quote}
        onDelete={deleteQuote}
        onLike={handleLikeQuote}
        onDislike={handleDisklikeQuote}
      />
    </div>
  );
}
export default App;
