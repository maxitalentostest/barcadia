import React from "react"
import FeaturedResource from "../Features/FeaturedResource"
import useAllResource from "../../hooks/use-all-resource"

const ResourceFeed = () => {
  const allResource = useAllResource()

  return allResource.map((node, index) => {
    return <FeaturedResource key={index} feature={node} />
  })
}

export default ResourceFeed
