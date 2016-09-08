import { Component, PropTypes } from 'react'
import { Link }                 from 'react-router'

import CardLink         from '../components/CardLink'

class ArticleIndex extends Component {
  static propTypes: {
    pageRows: PropTypes.array.isRequired,
    docs: PropTypes.object.isRequired,
    pathPrefix: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const pageRows = this.props.pageRows
    const docs = this.props.docs

    return (
      <section className="container-fluid spacing-container">
        <div className="container col-centered">
          <div className="container m-b-5">
            {pageRows.map((pageRow, rowIndex) => {
              return (
                <div key={rowIndex}>
                  {pageRow.title ?
                  <h1>{pageRow.title}</h1>
                  : null }
                  <div className="card-deck-wrapper">
                    <div className="card-deck m-b-3">
                    {pageRow.items.map((slug, columnIndex) => {
                      if (!docs.hasOwnProperty(slug)) {
                        slug = ''
                      }
                      if (slug === '') {
                        return (
                          <div key={columnIndex} className="card-2-of-3"></div>
                        )
                      } else {
                        const page = docs[slug]
                        return (
                          <CardLink key={columnIndex}
                            href={`${this.props.pathPrefix}/${slug}`}
                            title={page.title} body={page.description}
                            imageSrc={page.image} cardsPerRow={3} />
                        )
                      }
                    })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default ArticleIndex