function generateMarkdown(data) {
    return `
  # ${data.name}
  ## ${data.email}
  ## ${data.license}
  

  
  `;
  }
  
  module.exports = generateMarkdown;