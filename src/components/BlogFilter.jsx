import { useState } from "react";

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (e) => {
    e.preventDefault(); // Անում եմ որ չուղարկի
    const form = e.target;

    const query = form.search.value; // վեկալում եմ input-ի տեքստը
    const isLatest = form.latest.checked; // վեկալում եմ checked որ ցույց տա վերջի 20 հատ

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    // ?post=dolor&latest=true
    setSearchParams(params); // տալիս եմ searchParams-ին
    // URl.ru/posts?post={params}
  };
  return (
    <form autocomplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label style={{ padding: "0 1rem" }}>
        <input
          type="checkbox"
          name="latest"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />{" "}
        New only
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export { BlogFilter };
