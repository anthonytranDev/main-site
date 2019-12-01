import React from "react"
import { Link } from "gatsby"
import Button from "../Button"

import styles from "./blogpost.module.scss"

import externalLinkIcon from "../../icons/external-link.svg"

const Index = ({ node }) => {
  const Content = ({ node }) => (
    <>
      <span>Written by {node.frontmatter.author}</span>
      <span style={{ fontSize: "1rem" }}>&#x2022;</span>
      <span>{node.timeToRead} min read</span>
      <p>{node.excerpt}</p>
      <Button text="Read More" color="#386339" link={node.fields.slug} />
    </>
  )

  const isExternal = node.frontmatter.isExternal === true

  return (
    <div className={styles.blogPost} key={node.id}>
      {isExternal ? (
        <a
          href={node.frontmatter.externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            {node.frontmatter.title}
            <img
              className={styles.externalLink}
              src={externalLinkIcon}
              alt="external link icon"
            />
          </h3>
          <Content node={node} />
        </a>
      ) : (
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <Content node={node} />
        </Link>
      )}
    </div>
  )
}

export default Index
