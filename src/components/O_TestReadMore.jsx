import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";
import O_ArticleCard from "./O_ArticleСard.jsx";

export default function O_TestReadMore({ testTag, count = 3 }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!testTag) return;
    getData("article").then((data) => {
      const filtered = data.filter((item) => item.Tests === testTag);
      setArticles(filtered.slice(0, count));
    });
  }, [testTag, count]);

  if (articles.length === 0) return null;

  return (
    <section className="test-related">
      <h2 className="test-related__title">читай по теме:</h2>
      <div className="test-related__grid">
        {articles.map((item) => (
          <O_ArticleCard
            key={item.id}
            articleData={item}
            cardClass="article-card-medium"
          />
        ))}
      </div>
    </section>
  );
}
