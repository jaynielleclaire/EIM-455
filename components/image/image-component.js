class ImageComponent extends HTMLElement {
  static get observedAttributes() {
    return ["tag", "source", "subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <img id="${this.tag}" src="${this.source}" alt="${this.subtitle}">
    <sub>${this.subtitle}</sub>
    <style>
  :host {
    display: block;
    text-align: center;
    margin: 10px 0;
  }

  img {
    max-width: 300px; /* Adjust as needed */
    height: auto; /* Maintain aspect ratio */
  }

  sub {
    display: block;
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 5px;
  }
</style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("image-component", ImageComponent);
