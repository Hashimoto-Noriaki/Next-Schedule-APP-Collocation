'use client'

import { useRouter } from 'next/navigation'
import { PrimaryBtn } from './shared/components/atoms/PrimaryBtn'
import styles from './page.module.css'

export default function Home(){
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <p className="logo">スケジュール管理APP</p>
          <nav>
            <ul className={styles.navList}>
              <li>利用説明</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h1 className={`logo ${styles.mainTitle}`}>スケジュール管理APP</h1>
          <p className={styles.mainDescription}>お互いのスケジュールを管理するアプリです</p>
          <div className={styles.mainButtonWrapper}>
            <PrimaryBtn onClick={()=> router.push("/")}>
              ログイン
            </PrimaryBtn>
          </div>
        </div>
      </main>
    </div>
  )
}
