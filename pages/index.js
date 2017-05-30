import React from 'react'
import Head from 'next/head'

import withData from '../lib/withData'

import Layout from './layout'
import Header from '../components/header'
import Nav from '../components/nav'
import Main from '../components/main'
import Footer from '../components/footer'

export default withData((props) => {
  console.log('props:', props)

  return (
    <Layout>
      <Head>
        <title>Jodrell</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style jsx global>{`
          * {
            box-sizing: inherit;
          }

          :root {
            --themePrimary:     #009cde;
            --themePrimaryDark: #1085b7;
            --themeSecondary:   hotpink;
            --themeText:        #333;
          }

          html {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font:   16px/1.6 Helvetica Neue, Arial, sans-serif;
            color:  var(--themeText);
          }
        `}</style>
      </Head>

      <Header>Header</Header>
      <Nav />
      <Main>main</Main>
      <Footer>footer</Footer>
    </Layout>
  )
})
