DOMHelper = {
  createElement: function(tagName, className, children) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (children) {
      for (var i = 0; i < children.length; ++i) {
        element.appendChild(children[i]);
      }
    }

    return element;
  },

  createDiv: function(className, children) {
    return DOMHelper.createElement("div", className, children);
  },

  createTree: function(tree) {
    if (tree.constructor == String) {
      return [DOMHelper.createElement("div", tree)];
    } else if (tree.constructor == Array) {
      var result = []
      tree.forEach(function(node) { result = result.concat(DOMHelper.createTree(node)); });
      return result;
    } else {
      var nodes = [];
      for (var node in tree) {
        nodes.push(DOMHelper.createDiv(node, DOMHelper.createTree(tree[node])));
      }
      return nodes;
    }
  }
};
