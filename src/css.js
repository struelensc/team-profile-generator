function css() {
  return `body {
    background: #eeeeee;
    margin-top: 20px;
  }
  
  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #aaaaaa;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }
  
  .icon {
    width: 30px;
    height: 30px;
    border: 1px solid #cccccc;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    color: #5f5f5f;
    border-radius: 50%;
    font-size: 0.9rem;
  }`;
}

module.exports = css;
