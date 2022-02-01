import * as React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <div>
        <h1>Contact</h1>
        <p>お気軽にご連絡ください</p>
        <form>
          <label htmlFor="name">お名前</label>
          <input type="text" name="name" id="name" required />
          <label htmlFor="email">メールアドレス</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="textarea">ご用件</label>
          <input type="message" rows="10" id="textarea" required />
          <button type="submit">送信</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
