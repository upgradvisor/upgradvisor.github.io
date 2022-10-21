// small screen navbar menu
function openMenu() {
  var x = document.getElementById("navSmall");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}



// accordion
var accordion = (function () {
  var $accordion = $(".js-accordion");
  var $accordion_header = $accordion.find(".js-accordion-header");
  var $accordion_item = $(".js-accordion-item");

  // default settings
  var settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: false
  };

  return {
    // pass configurable object literal
    init: function ($settings) {
      $accordion_header.on("click", function () {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $(".js-accordion-item.active").length > 1) {
        $(".js-accordion-item.active:not(:first)").removeClass("active");
      }

      // reveal the active accordion bodies
      $(".js-accordion-item.active").find("> .js-accordion-body").show();
    },
    toggle: function ($this) {
      if (
        settings.oneOpen &&
        $this[0] !=
          $this
            .closest(".js-accordion")
            .find("> .js-accordion-item.active > .js-accordion-header")[0]
      ) {
        $this
          .closest(".js-accordion")
          .find("> .js-accordion-item")
          .removeClass("active")
          .find(".js-accordion-body")
          .slideUp();
      }

      // show/hide the clicked accordion item
      $this.closest(".js-accordion-item").toggleClass("active");
      $this.next().stop().slideToggle(settings.speed);
    }
  };
})();

$(document).ready(function () {
  accordion.init({ speed: 300, oneOpen: true });
});







// back to top button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 500) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 175;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
}



// reset graph
var refresh_graph = document.getElementById("graphrefresh");

refresh_graph.onclick = function() {
        // initialize global variables.
        var edges;
        var nodes;
        var network; 
        var container;
        var options, data;
                    
        // This method is responsible for drawing the graph, returns the drawn network
        function drawGraph() {
            var container = document.getElementById('mynetwork');
          
            // parsing and collecting nodes and edges from the python
            nodes = new vis.DataSet([{"color": "#23ad00", "id": 1, "label": "customizations.history.show.ShowCommand_run_main", "physics": false, "shape": "dot", "title": "customizations.history.show.ShowCommand_run_main", "value": 1, "x": 0, "y": 0}, {"color": "#23ad00", "id": 2, "label": "customizations.history.show.ShowCommand._get_formatter", "physics": false, "shape": "dot", "title": "customizations.history.show.ShowCommand._get_formatter", "value": 1, "x": 80, "y": 150}, {"color": "#23ad00", "id": 3, "label": "customizations.history.show.DetailedFormatter.__init__", "physics": false, "shape": "dot", "title": "customizations.history.show.DetailedFormatter.__init__", "value": 1, "x": 280, "y": 130}, {"color": "#23ad00", "id": 4, "label": "customizations.history.show.DetailedFormatter", "physics": false, "shape": "dot", "title": "customizations.history.show.DetailedFormatter", "value": 1, "x": 460, "y": 50}, {"color": "#fea500", "id": 5, "label": "initialise.init", "physics": false, "shape": "dot", "title": "initialise.init", "value": 1, "x": 230, "y": 280}, {"color": "#23ad00", "id": 6, "label": "table.ColorizedStyler.__init__", "physics": false, "shape": "dot", "title": "table.ColorizedStyler.__init__", "value": 1, "x": 150, "y": 430}, {"color": "#23ad00", "id": 7, "label": "table.MultiTable.__init__", "physics": false, "shape": "dot", "title": "table.MultiTable.__init__", "value": 1, "x": -30, "y": 500}, {"color": "#23ad00", "id": 8, "label": "table.ColorizedStyler", "physics": false, "shape": "dot", "title": "table.ColorizedStyler", "value": 1, "x": 340, "y": 480}, {"color": "#23ad00", "id": 9, "label": "table.MultiTable", "physics": false, "shape": "dot", "title": "table.MultiTable", "value": 1, "x": 40, "y": 660}, {"color": "#23ad00", "id": 10, "label": "formatter.TableFormatter.__init__", "physics": false, "shape": "dot", "title": "formatter.TableFormatter.__init__", "value": 1, "x": 260, "y": 630}, {"color": "#23ad00", "id": 11, "label": "formatter.TableFormatter", "physics": false, "shape": "dot", "title": "formatter.TableFormatter", "value": 1, "x": 430, "y": 580}, {"color": "#23ad00", "id": 12, "label": "formatter.get_formatter", "physics": false, "shape": "dot", "title": "formatter.get_formatter", "value": 1, "x": 540, "y": 740}, {"color": "#23ad00", "id": 13, "label": "customizations.datapipeline.__init__.ListRunsCommand._get_formatter", "physics": false, "shape": "dot", "title": "customizations.datapipeline.__init__.ListRunsCommand._get_formatter", "value": 1, "x": 350, "y": 800}, {"color": "#23ad00", "id": 14, "label": "customizations.datapipeline._get_formatter", "physics": false, "shape": "dot", "title": "customizations.datapipeline._get_formatter", "value": 1, "x": 380, "y": 970}, {"color": "#23ad00", "id": 15, "label": "clidriver.CLIOperationCaller._display_response", "physics": false, "shape": "dot", "title": "clidriver.CLIOperationCaller._display_response", "value": 1, "x": 720, "y": 780}, {"color": "#23ad00", "id": 16, "label": "clidriver.CLIOperationCaller.invoke", "physics": false, "shape": "dot", "title": "clidriver.CLIOperationCaller.invoke", "value": 1, "x": 850, "y": 620}, {"color": "#23ad00", "id": 17, "label": "customizations.datapipeline._get_formatter", "physics": false, "shape": "dot", "title": "customizations.datapipeline._get_formatter", "value": 1, "x": 630, "y": 560}, {"color": "#fe0000", "id": 18, "label": "ansitowin32.AnsiToWin32.write", "physics": false, "shape": "dot", "title": "ansitowin32.AnsiToWin32.write", "value": 1, "x": 480, "y": 260}, {"color": "#fe0000", "id": 19, "label": "ansitowin32.AnsiToWin32.write_and_convert", "physics": false, "shape": "dot", "title": "ansitowin32.AnsiToWin32.write_and_convert", "value": 1, "x": 340, "y": 340}, {"color": "#fe0000", "id": 20, "label": "ansitowin32.AnsiToWin32.convert_osc", "physics": false, "shape": "star", "title": "ansitowin32.AnsiToWin32.convert_osc", "value": 1, "x": 490, "y": 420}, {"color": "#fe0000", "id": 21, "label": "AnsiToWin32", "physics": false, "shape": "dot", "title": "AnsiToWin32", "value": 1, "x": 860, "y": 300}, {"color": "#fe0000", "id": 22, "label": "ansitowin32.AnsiToWin32", "physics": false, "shape": "star", "title": "ansitowin32.AnsiToWin32", "value": 1, "x": 680, "y": 320}]);
            edges = new vis.DataSet([{"arrows": "to", "from": 1, "to": 2}, {"arrows": "to", "from": 2, "to": 3}, {"arrows": "to", "from": 4, "to": 3}, {"arrows": "to", "from": 3, "to": 5}, {"arrows": "to", "from": 6, "to": 5}, {"arrows": "to", "from": 7, "to": 6}, {"arrows": "to", "from": 8, "to": 6}, {"arrows": "to", "from": 9, "to": 7}, {"arrows": "to", "from": 10, "to": 9}, {"arrows": "to", "from": 10, "to": 8}, {"arrows": "to", "from": 11, "to": 10}, {"arrows": "to", "from": 12, "to": 11}, {"arrows": "to", "from": 13, "to": 12}, {"arrows": "to", "from": 14, "to": 13}, {"arrows": "to", "from": 15, "to": 12}, {"arrows": "to", "from": 16, "to": 15}, {"arrows": "to", "from": 17, "to": 12}, {"arrows": "to", "from": 18, "to": 19}, {"arrows": "to", "from": 19, "to": 20}, {"arrows": "to", "from": 21, "to": 22}]);
                  
            // adding nodes and edges to the graph
            data = {nodes: nodes, edges: edges};
                    
            var options = {
        "configure": {
            "enabled": false
        },
        "edges": {
            "color": {
                "inherit": true
            },
            "smooth": {
                "enabled": true,
                "type": "dynamic"
            }
        },
        "interaction": {
            "dragNodes": true,
            "hideEdgesOnDrag": false,
            "hideNodesOnDrag": false
        },
        "physics": {
            "enabled": true,
            "stabilization": {
                "enabled": true,
                "fit": true,
                "iterations": 1000,
                "onlyDynamicEdges": false,
                "updateInterval": 50
            }
        }
    };
          
            network = new vis.Network(container, data, options);
            return network;
                
        }
                    
        drawGraph();
};





// getting PRs from Github API
const headers = {
  "Accept" : "application/vnd.github+json",
  // "Authorization" : "personal access token"
};
const createdPRs = document.getElementById("createdPRs");
const mergedPRs = document.getElementById("mergedPRs");

function showPRs() {
  
  // all PRs
  const amount1 = document.createElement("span");
  amount1.classList.add('w3-xxlarge');
  amount1.textContent = localStorage.getItem("allPRs");
  
  const label1 = document.createElement("a");
  label1.textContent = "Pull Requests Created";
  label1.classList.add('orglink');
  label1.href = "https://github.com/upgradvisor";
  label1.target = "_blank";
  label1.rel = "noopener noreferrer";
                
  createdPRs.appendChild(amount1);
  createdPRs.appendChild(document.createElement("br"));
  createdPRs.appendChild(label1);
  
  // merged PRs
  const amount2 = document.createElement("span");
  amount2.classList.add('w3-xxlarge');
  amount2.textContent = localStorage.getItem("mergedPRs");
  
  const label2 = document.createElement("a");
  label2.textContent = "Pull Requests Merged";
  label2.classList.add('orglink');
  label2.href = "https://github.com/upgradvisor";
  label2.target = "_blank";
  label2.rel = "noopener noreferrer";
                
  mergedPRs.appendChild(amount2);
  mergedPRs.appendChild(document.createElement("br"));
  mergedPRs.appendChild(label2);
  
}

async function getPRs() {
  
  // all PRs
  const response1 = await fetch("https://api.github.com/search/issues?q=author:upgradvisor-bot is:pr", {
      "method" : "GET",
      "headers" : headers
  });
  const result1 = await response1.json();
  localStorage.setItem("allPRs", parseInt(result1.total_count) + 1);

  // merged PRs
  const response2 = await fetch("https://api.github.com/search/issues?q=author:upgradvisor-bot is:pr is:merged", {
      "method" : "GET",
      "headers" : headers
  });
  const result2 = await response2.json();
  localStorage.setItem("mergedPRs", parseInt(result2.total_count) + 2);
  
}



async function checkStorage() {
  
  if (localStorage.getItem("allPRs") === null) {
    await getPRs();
    showPRs();
  }
  else {
    showPRs();
  }
  
  if (localStorage.getItem("allPRs").isNaN()) {
    await getPRs();
    showPRs();
  }
  else {
    showPRs();
  }
  
}

window.addEventListener('DOMContentLoaded', checkStorage);

// send a request every hour
setInterval(getPRs(), 3600000);

