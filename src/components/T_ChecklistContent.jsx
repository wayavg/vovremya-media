import React, { useState, useMemo } from 'react';

import M_ChecklistCounter from './M_ChecklistCounter.jsx';
import O_ChecklistSection from './O_ChecklistSection.jsx';
import O_AchieveCard from './O_AchieveCard.jsx'

export default function T_ChecklistContent({ sections }) {
  const totalItems = useMemo(
    () => sections.reduce((sum, s) => sum + s.items.length, 0),
    [sections]
  );

  const [checkedState, setCheckedState] = useState(
    () => sections.map(s => new Array(s.items.length).fill(false))
  );

  const checkedCount = checkedState.reduce(
    (sum, section) => sum + section.filter(Boolean).length, 0
  );

  const handleToggle = (sectionIndex, itemIndex, value) => {
    setCheckedState(prev => {
      const next = prev.map(s => [...s]);
      next[sectionIndex][itemIndex] = value;
      return next;
    });
  };

  return (
    <>
      <canvas id="canvas" className="checklist-confetti-canvas" />
      <article className="checklist-grid grid-auto-fit container">
        <div className="checklist-counter-wrap">
          <M_ChecklistCounter checked={checkedCount} total={totalItems} />
        </div>
        {sections.map((section, sIdx) => (
          <O_ChecklistSection
            key={sIdx}
            number={sIdx + 1}
            heading={section.heading}
            items={section.items}
            checkedItems={checkedState[sIdx]}
            onToggle={(itemIdx, val) => handleToggle(sIdx, itemIdx, val)}
          />
        ))}
      </article>
      <O_AchieveCard />
    </>
  );
}
