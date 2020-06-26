// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## table of contents
  [Installation](##installation)
  [Usage](##usage)
  [License](##license)
  [Contributing](##contributing)
  [Tests](##tests)
  
  

`;
}


module.exports = generateMarkdown;
