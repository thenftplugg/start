import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import { GettingStartedCards } from '../components/GettingStartedCards'
import { ToolsCards } from '../components/ToolsCards'
import { ShaderComponent } from '../components/ShaderComponent'
import ProjectsCards from '../components/ProjectsCards'
import HomepageLogo from '../../static/img/homepageLogo.svg'

export default function Home() {
  return (
    <Layout>
      <ShaderComponent />
      <div>
        <HomepageLogo className={styles.logoText} />
        <h2 className={styles.headerSubtitle}>THE START OF THE BEGINING</h2>
      </div>
      <main className={styles.layout}>
        <div className={styles.layoutFlexBox}>
          <div className={styles.gettingStartedFlexBox}>
            <p className={styles.gettingStarted}>ALPHA PROTOCOL</p>
            <a className={styles.viewAllLink} href="docs/guides/connect-wallet-react">
              <button className={styles.viewAll}>Dev Portal</button>
            </a>
          </div>
          <GettingStartedCards />
          <p className={styles.tools}>Tools By Alpha Protocal</p>
          <ToolsCards />
          <p className={styles.projects}>Projects Partnered With Cryptic ALpha</p>
          <ProjectsCards />
        </div>
      </main>
    </Layout>
  )
}
