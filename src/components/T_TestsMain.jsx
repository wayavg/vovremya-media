import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import O_Testcard from "./O_Testcard.jsx";

export default function T_TestsMain() {
    
  const [tests, setTests] = useState([]);

  
  useEffect(() => {
    getData('test').then((data) => {
      setTests(data);
    });
  }, []);

  return (
    <section className="tests-cards">
        {tests.length === 0 ? (
        
        <p>Загрузка тестов...</p>
        ) : (
        
        tests.map((item) => (
            <O_Testcard 
                key={item.id}
                testData={item}
            />
        ))
        )}
    </section>
  );
}
