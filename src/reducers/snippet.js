export const types = {
  'SET_HTML': 'SET_HTML',
  'SET_CSS': 'SET_CSS',
  'SET_JS': 'SET_JS',
  'SAVE_SNIPPET': 'SAVE_SNIPPET',
  'SNIPPET_SAVED': 'SNIPPET_SAVED',
  'SNIPPET_SAVE_ERROR': 'SNIPPET_SAVE_ERROR',
  'RETRIEVE_SNIPPET': 'RETRIEVE_SNIPPET',
  'SNIPPET_RETRIEVED': 'SNIPPET_RETRIEVED',
  'SNIPPET_RETRIEVE_ERROR': 'SNIPPET_RETRIEVE_ERROR',
}

export const actions = {
  setHtml: (html) => {
    return {
      type: types.SET_HTML,
      payload: html,
    };
  },
  setCss: (css) => {
    return {
      type: types.SET_CSS,
      payload: css,
    };
  },
  setJs: (js) => {
    return {
      type: types.SET_JS,
      payload: js,
    };
  },
  saveSnippet: () => {
    return {
      type: types.SAVE_SNIPPET,
    };
  },
  snippetSaved: () => {
    return {
      type: types.SNIPPET_SAVED,
    };
  },
  snippetSaveError: (e) => {
    return {
      type: types.SNIPPET_SAVE_ERROR,
      payload: e,
    };
  },
  retrieveSnippet: () => {
    return {
      type: types.RETRIEVE_SNIPPET,
    };
  },
  snippetRetrieved: (snippet) => {
    return {
      type: types.SNIPPET_RETRIEVED,
      payload: snippet,
    };
  },
  snippetRetrieveError: (e) => {
    return {
      type: types.SNIPPET_RETRIEVE_ERROR,
      payload: e,
    };
  },
}

const defaultState = {
  edited: false,
  retrieving: false,
  saving: false,
  error: null,
  name: 'Unnamed Snippet',
  snippet: {
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
  },
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_HTML:
      return {
        ...state,
        edited: true,
        snippet: {
          ...state.snippet,
          html: action.payload,
        },
      };
    case types.SET_CSS:
      return {
        ...state,
        edited: true,
        snippet: {
          ...state.snippet,
          css: action.payload,
        },
      };
    case types.SET_JS:
      return {
        ...state,
        edited: true,
        snippet: {
          ...state.snippet,
          js: action.payload,
        },
      };
    case types.SAVE_SNIPPET:
      return {
        ...state,
        saving: true,
        error: null,
      };
    case types.SNIPPET_SAVED:
      return {
        ...state,
        saving: false,
        edited: false,
      };
    case types.SNIPPET_SAVE_ERROR:
      return {
        ...state,
        saving: false,
        error: action.payload,
      };
    case types.RETRIEVE_SNIPPET:
      return {
        ...state,
        retrieving: true,
        error: null,
      };
    case types.SNIPPET_RETRIEVED:
      return {
        ...state,
        retrieving: false,
        name: action.payload.name,
        snippet: action.payload.snippet,
      };
    case types.SNIPPET_RETRIEVE_ERROR:
      return {
        ...state,
        retrieving: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
