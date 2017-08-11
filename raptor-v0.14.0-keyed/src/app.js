import { Store } from './store';

var store = new Store();

var startTime;
var lastMeasure;
var startMeasure = function(name) {
    startTime = performance.now();
    lastMeasure = name;
}
var stopMeasure = function() {
    var last = lastMeasure;
    if (lastMeasure) {
        window.setTimeout(function () {
            lastMeasure = null;
            var stop = performance.now();
            console.log(last+" took "+(stop-startTime));
        }, 0);
    }
}

function computeRows(store) {
    const rows = Array(store.data.length);
    const selected = store.selected;
    store.data.forEach((item, index) => {
        rows[index] = {
            className: selected === item.id ? 'danger' : 'nothing',
            id: item.id,
            label: item.label,
        };
    });
    return rows;
}

import html from "./app.html";
import { Element } from "engine";

export default class App extends Element {
    constructor() {
        super();
        this.state = {
            rows: computeRows(store),
        };
    }
    render() {
        return html;
    }
    add() {
        startMeasure("add");
        store.add();
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    remove(id) {
        startMeasure("remove");
        store.delete(id);
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    select(id) {
        startMeasure("select");
        store.select(id);
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    run() {
        startMeasure("run");
        store.run();
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    update() {
        startMeasure("update");
        store.update();
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    runLots() {
        startMeasure("runLots");
        store.runLots();
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    clear() {
        startMeasure("clear");
        store.clear();
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    swapRows() {
        startMeasure("swapRows");
        store.swapRows();
        this.state.rows = computeRows(store);
        stopMeasure();
    }
    handleSelect(e) {
        this.select(parseInt(e.currentTarget.dataset.x, 10));
    }
    handleRemove(e) {
        this.remove(parseInt(e.currentTarget.dataset.x, 10));
    }
}
