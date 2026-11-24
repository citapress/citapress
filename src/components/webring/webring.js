import React, { useEffect, useRef } from "react"

// "Where My Girls @t ?" webring widget.
// React doesn't execute <script> tags rendered through JSX, so the script is
// injected into the #WMGA container after mount (and on every page change,
// since the layout re-mounts per page).
const WEBRING_SRC = "https://wheremygirlsat.online/webring/webring.js"

const Webring = () => {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return undefined
    const script = document.createElement("script")
    script.src = WEBRING_SRC
    script.async = true
    container.appendChild(script)
    return () => {
      container.replaceChildren()
    }
  }, [])

  return (
    <aside className="webring" aria-label="Where My Girls @t ? webring">
      <div id="WMGA" ref={ref} />
    </aside>
  )
}

export default Webring
