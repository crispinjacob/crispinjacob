document.addEventListener("DOMContentLoaded", function () {
  const tocContainer = document.getElementById("toc");
  const headings = document.querySelectorAll("h1, h2, h3");
  const tocList = document.createElement("ul");

  headings.forEach((heading, index) => {
    // Add id to heading if it doesn't have one
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    const listItem = document.createElement("li");
    listItem.className = `toc-${heading.tagName.toLowerCase()}`;
    listItem.appendChild(link);

    tocList.appendChild(listItem);
  });

  tocContainer.appendChild(tocList);
});

