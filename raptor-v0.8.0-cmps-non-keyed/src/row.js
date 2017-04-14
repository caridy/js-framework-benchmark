import { Element } from "raptor-engine";
import html from "./row.html";

export default class tr extends Element {
    index;
    label;

    render() {
        return html;
    }
    handleSelect() {
        const event = document.createEvent('CustomEvent');
        event.initCustomEvent('select', true, true, null);
        this.dispatchEvent(event);
    }
    handleRemove() {
        const event = document.createEvent('CustomEvent');
        event.initCustomEvent('remove', true, true, null);
        this.dispatchEvent(event);
    }
}
