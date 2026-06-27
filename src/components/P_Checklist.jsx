import React, { useEffect, useState } from 'react';
import { getData } from '../javascripts/airtable.js';

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';
import O_ArticleHeader from './O_ArticleHeader.jsx';
import T_ChecklistContent from './T_ChecklistContent.jsx';
import O_ReadMore from './O_ReadMore.jsx';

export default function P_Checklist({ headerLinks, footerLinks, socialLinks, sections, slug }) {
  const [checklistData, setChecklistData] = useState(null);

  useEffect(() => {
    getData('checklist').then((data) => {
      const found = data.find(item => {
        const itemSlug = item.url ? item.url.replace('.html', '') : '';
        return itemSlug === slug;
      });
      if (found) setChecklistData(found);
    });
  }, [slug]);

  return (
    <>
      <O_Menu headerLinks={headerLinks} socialLinks={socialLinks} />

      <O_ArticleHeader articleData={checklistData} view="checklist" />

      <T_ChecklistContent sections={sections} />

      <O_ReadMore />

      <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
    </>
  );
}
