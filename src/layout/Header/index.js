import React from 'react';
import { PageHeader } from 'antd';

export default function Header() {

  const sitePageHeader = {
    border: "1px solid rgb(235, 237, 240)"
  }

  return (
    <PageHeader
      className={sitePageHeader}
      onBack={()=> null}
      title='Picbuy'
      subTitle='Compre ou venda imagens'
    />
  );
}