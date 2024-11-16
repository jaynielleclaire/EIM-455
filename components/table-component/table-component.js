new gridjs.Grid({
  columns: ["No.", "Problem Classification", "Interview Quote"],
  data: [
    ["1", "Weight", "'(It is) more likely to get backpain/spondylosis than radiation-related cancers.'"],
    ["2", "Weight", "'The worst part is how heavy the lead aprons are.'"],
    ["3", "Weight", "'Weight of the lead apron causes muscle strain, some bad enough to take hospitalisation leave for 2 weeks.'"],
    ["4", "Weight, Hygiene", "'Weight of the lead apron and hygiene concerns, we don't know how often they are cleaned. I prefer two-piece set but it's not always available; for taller surgeons, they have no choice but to wear the full-size gown.'"],
    ["5", "Weight, Mobility, Hygiene", "'Weight of the lead apron makes it hard to move, some senior surgeons find the thyroid shield too warm and uncomfortable and have decided not to wear it; we keep each other accountable but at the end of the day, everyone is responsible for their own body.'"],
    ["6", "Hygiene", "'Lead apron is worn underneath scrubs, it's really sweaty, and there's no time to clean it before scrubbing in.'"],
  ],
}).render(document.getElementById("table-1"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
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
    <div class="container">
      <div class="caption">${this.subtitle}</div>
      <slot></slot>
    </div>
    <style>
      :host {
        display: block;
        text-align: center;
      }
      
      .container {
        display: flex;
        flex-direction: column;
      }

      .caption {
        font-size: 1rem;
        font-style: italic;
        margin-bottom: 1rem;
      }
    </style>
    `;
    
    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
