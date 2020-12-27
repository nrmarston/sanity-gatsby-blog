import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: {eq: $id}) {
      title
      description
    }
  }
`
const CategoryPostTemplate = props => {
  const {data = {}, errors} = props
  const {title, description} = data.category || {}

  return (
    <Layout>
      <Container>
        {errors && <GraphQLErrorList errors={errors} />}
        {!data.category && <p>No category data</p>}
        <SEO title={title} description={description} />
        <article>
          <h1>Category: {title}</h1>
          <p>{description}</p>
        </article>
      </Container>
    </Layout>
  )
}

export default CategoryPostTemplate
