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
  ${data.using}
  
  
  
  
  ## license
  ${data.license}
  
  
  
  
  ## contributing
  ${data.contributing}
  
  
  
  
  
  
  ## tests
  ${data.tests}



  
  
  
  
  
  
  
  ## questions
  If you have any questions or comments about this project please contact me at: ${data.email}
`;


}


module.exports = generateMarkdown;
