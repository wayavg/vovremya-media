import React, { useState } from "react";

import M_Breadcrumbs from "./M_Breadсrumbs.jsx";
import O_Menu from "./O_Menu.jsx";
import O_Footer from "./O_Footer.jsx";
import O_Test from "./O_Test.jsx";

const testConfigs = {
  "/tests/deadline-is-it-a-limit-or-expiry.html": {
    title: "тест: «твой дедлайн — это срок или срок годности?»",
    testName: "Твой дедлайн — это срок или срок годности?",
    tableName: "test1",
    testTag: "Срок годности",
  },
  "/tests/what-kind-of-time-vampire-are-you.html": {
    title: "тест: «какой ты тайм-вампир?»",
    testName: "Какой ты Тайм-Вампир? (в хорошем смысле!)",
    tableName: "test2",
    testTag: "Вампир",
  },
  "/tests/alarm-clock-battle-winner-or-victim.html": {
    title: "тест: «бой с будильником: ты победитель или жертва?»",
    testName: "Бой с будильником: ты победитель или жертва?",
    tableName: "test3",
    testTag: "Будильник",
  },
};

export default function P_Test({ headerLinks, footerLinks, socialLinks }) {
  const [isFinished, setIsFinished] = useState(false);
  const { pathname } = window.location;
  const config = testConfigs[pathname];

  if (!config) return <p>Тест не найден</p>;

  const breadcrumbsData = [
    { title: "тесты", link: "/tests.html" },
    { title: config.title },
  ];

  const contentClass = isFinished
    ? "test__content test__content--result"
    : "test__content";

  return (
    <>
      <O_Menu headerLinks={headerLinks} />
      <div className="test container">
        <M_Breadcrumbs items={breadcrumbsData} />
        <div className="test__grid-content">
          <div className={contentClass}>
            <O_Test
              tableName={config.tableName}
              testName={config.testName}
              title={config.title}
              testTag={config.testTag}
              onFinish={() => setIsFinished(true)}
            />
          </div>
        </div>
      </div>
      <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
    </>
  );
}
