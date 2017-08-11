import { Element } from "raptor-engine";
import html from "./row.html";

export default class tr extends Element {
    @api index;
    @api label;

    render() {
        return html;
    }
    handleSelect() {
        const event = new CustomEvent('select', {
            bubbles: false,
        });
        this.dispatchEvent(event);
    }
    handleRemove() {
        const event = new CustomEvent('remove', {
            bubbles: false,
        });
        this.dispatchEvent(event);
    }
}
