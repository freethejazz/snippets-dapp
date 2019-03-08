export const types = {
  'SET_HTML': 'SET_HTML',
  'SET_CSS': 'SET_CSS',
  'SET_JS': 'SET_JS',
}

export const actions = {
  setHtml: (html) => {
    console.log(`setting html ${html}`)
    return {
      type: types.SET_HTML,
      payload: html,
    };
  },
  setCss: (css) => {
    console.log(`setting css ${css}`)
    return {
      type: types.SET_CSS,
      payload: css,
    };
  },
  setJs: (js) => {
    console.log(`setting js ${js}`)
    return {
      type: types.SET_JS,
      payload: js,
    };
  },
}

const defaultState = {
  html: `<div class="message">The rotating color is <span id="foo"></span><div>`,
  css: `.message {
  text-align: center;
  margin: 20px;
}

span {
  font-size: 1.4em;
  text-decoration: underline;
}`,
  js: `const colors = ['red', 'blue', 'orange', 'purple'];
let counter = 0;

const el = document.getElementById('foo');

const setEl = (el, color) => {
  el.innerText = color;
  el.style = \`color: $\{color};\`;
}

const getNextColor = () => {
  counter++;
  return colors[counter % colors.length];
};

setEl(foo, getNextColor());

setInterval(() => {
  setEl(foo, getNextColor())
}, 1500)`,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_HTML:
      return {
        ...state,
        html: action.payload,
      };
    case types.SET_CSS:
      return {
        ...state,
        css: action.payload,
      };
    case types.SET_JS:
      return {
        ...state,
        js: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
