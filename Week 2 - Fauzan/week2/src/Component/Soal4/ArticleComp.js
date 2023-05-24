import "./ArticleComp.css"
import React from 'react'

const ArticleComp = () => {
  return (
    <div className='container'>
    <div className="div-article">
      <div className="flex-1">
        <div className="img-container">
          <span>img component</span>
        </div>
        <div className="flex-2">
          <div className="article-content">
            <span>article component</span>
          </div>
          <div className="article-content">
            <span>article component</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArticleComp
