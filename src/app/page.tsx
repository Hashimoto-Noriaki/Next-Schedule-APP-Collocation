import styles from './page.module.css'

export default function Home(){
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
    </div>
  )
}
