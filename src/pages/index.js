import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import JSLogo from "../images/javascript.svg"
import ReactLogo from "../images/react.svg"
import GatsbyLogo from "../images/gatsby.svg"
import NextLogo from "../images/next.svg"

const Index = () => {
  return (
    <Layout>
      <div>
        <div>
          <StaticImage
            src="../images/index-hero.jpg"
            alt="hero"
            quality={90}
            placeholder="blurred"
            formats={["AUTO", "WEBP", "AVIF"]}
          />
          <h1>I'm Jumpei Sakatsu</h1>
          <h3>Software Engineer</h3>
        </div>
        <div>
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
              ・毎日同じようなタスクはつまらない・やりたくない
              <br />
              ・CI/CDや自動化など仕組み作りが好き
              <br />
              <br />
              キャッチコピー「はじめの一歩はボルトより速い」は、とにかくやってみる精神を大事にしているということを表現しています。
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
        <div>
          <h2>Skills</h2>
          <div>
            <div>
              <img src={JSLogo} alt="javascript" />
              <span>Go / 3 years</span>
            </div>
            <div>
              <img src={ReactLogo} alt="react" />
              <span>Typescript / 3 years</span>
            </div>
            <div>
              <img src={GatsbyLogo} alt="gatsby" />
              <span>Python / 3 years</span>
            </div>
            <div>
              <img src={NextLogo} alt="next" />
              <span>AWS / 5 years</span>
            </div>
          </div>
        </div>
        <Link to="/contact">Contact me</Link>
      </div>
    </Layout>
  )
}

export default Index
