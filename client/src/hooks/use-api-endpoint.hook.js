import React from "react";

export default function useApiEndpoint(endpoint) {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setStatus("idle");
      })
      .catch(err => {
        setStatus("error");
      });
  }, []);

  return [data, status];
}
