import { useRef, useEffect } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

export default function ({ data }) {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ["Name", "Email", "Phone"],
    data: data,
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });

  return <div ref={wrapperRef} />;
}
