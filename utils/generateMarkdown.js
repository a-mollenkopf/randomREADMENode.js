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
  [Questions](##questions)


  ## installation
  ${data.install}
  
  
  ## usage
  ${data.usage}
  
  
  ## license
  <img src="https://img.shields.io/badge/License-${data.license}-blue.svg"/>
  
  
  This is the license this page is under: ("https://opensource.org/licenses/${data.license}")

  ## contributing
  ${data.contributing}
  
  
  
  ## tests
  ${data.tests}



  
  ## questions
  If you have any questions or comments about this project please contact me at: ${data.email}
  Github username: https://github.com/${data.username}
`;


}


module.exports = generateMarkdown;
