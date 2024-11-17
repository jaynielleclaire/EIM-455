class ImageComponent extends HTMLElement {
  static get observedAttributes() {
    return ["source", "subtitle", "size", "alt", "tag", "custom-width"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
    }
  }

  getSizeStyles() {
    const sizes = {
      tiny: {
        maxWidth: '150px',
        margin: '10px auto'
      },
      small: {
        maxWidth: '250px',
        margin: '10px auto'
      },
      medium: {
        maxWidth: '400px',
        margin: '15px auto'
      },
      large: {
        maxWidth: '600px',
        margin: '20px auto'
      },
      full: {
        width: '100%',
        margin: '20px auto'
      }
    };

    // Check if there's a custom width attribute
    if (this.getAttribute('custom-width')) {
      return {
        maxWidth: this.getAttribute('custom-width'),
        margin: '15px auto'
      };
    }

    return sizes[this.size || 'medium'];
  }

  render() {
    const styles = this.getSizeStyles();
    
    const template = `
      <style>
        .image-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: ${styles.margin};
          width: 100%;
        }
        
        img {
          max-width: ${styles.maxWidth || styles.width};
          height: auto;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }
        
        img:hover {
          transform: scale(1.02);
        }
        
        .subtitle {
          margin-top: 8px;
          text-align: center;
          font-size: 0.9em;
          color: #666;
          font-style: italic;
          max-width: ${styles.maxWidth || styles.width};
        }
      </style>
      
      <div class="image-container">
        <img 
          src="${this.source || ''}"
          alt="${this.alt || 'Image'}"
          loading="lazy"
        />
        ${this.subtitle ? `<div class="subtitle">${this.subtitle}</div>` : ''}
      </div>
    `;

    this.shadowRoot.innerHTML = template;
  }
}

customElements.define("image-component", ImageComponent);