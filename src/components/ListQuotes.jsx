import React from "react";
import SingleQuotes from "@/components/SingleQuotes";

function ListQuotes({ quotes, onDelete, onLike, onDislike,onSort }) {
  return (
    <div className="flex flex-col gap-2">
      {quotes.map((quote) => (
        <SingleQuotes key={quote.id} quote={quote} onDelete={onDelete} onLike={onLike} onDislike={onDislike} onSort={onSort} />
      ))}
    </div>
  );
}

export default ListQuotes;
