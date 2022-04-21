import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

const Index = () => {
  return (
    <Layout>
      <div>
        <div className={style.hero}>
          <StaticImage
            src="../images/hero.jpg"
            alt="hero"
            quality={90}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
          />
          <div className={style.textContainer}>
            <h1>I'm Jumpei Sakatsu</h1>
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.profile}>
            <div>
              <h2>はじめの一歩はボルトより速い</h2>
              <p>
                ソフトウェアエンジニアとしてバックエンド、インフラからフロントエンドまで幅広く経験してきました。
                <br />
                チーム（20人近くの開発チームや5人程度のスモールチーム）や開発手法（ウォーターフォール、スクラム）も様々です。
                <br />
                ブログや登壇、OSSなどの課外活動にも積極的に挑戦しています。
                <br />
                <br />
                こんな性格です。
                <br />
                ・新しいことに挑戦するのが楽しい
                <br />
                ・毎日同じようなタスクはつまらない,やりたくない
                <br />
                ・CI/CDや自動化など仕組み作りが好き
                <br />
                <br />
                キャッチコピー「はじめの一歩はボルトより速い」のボルトは100m走世界記録保持者のウサイン・ボルト氏です。
                <br />
                とにかくやってみる精神を大事にしているということを表現しています。
              </p>
            </div>
            <StaticImage
              src="../images/profile.jpg"
              alt="hero"
              quality={90}
              placeholder="blurred"
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          </div>
          <div className={style.skills}>
            <h2>Skills</h2>
            <div className={style.skillsContainer}>
              <div>
                <StaticImage
                  src="../images/logo-go.svg"
                  alt="go"
                  quality={90}
                  placeholder="blurred"
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
                <span>Go / 3 years</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.contactBtn}>
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index
