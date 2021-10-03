

module.exports =
  renderTestSection = test => {
    return test === '' ? `No specific testing procedures are required for this application.` : `${test}`;
  };