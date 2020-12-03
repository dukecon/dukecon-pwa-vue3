const svgAfter = '<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" class=""></path></svg>';
const styleInner = `
.decorator {
	display: inline-block;
	height: 0.5em;
	width: 0.5em;
	opacity: 0.5;
	padding: 0;
	margin: 0 0 0 0.25em;
}`;
const decoratorElement = Element('span', { className: 'decorator', innerHTML: svgAfter});
const styleElement = Element('style', { innerHTML: styleInner });

const decoratorTemplate = Element ('template', {}, decoratorElement);
const styleTemplate = Element('template', {}, styleElement);

export class ExternalLink extends HTMLElement {
	constructor () {
		super();
		this.attachShadow({ mode: 'open' });
	}

	generateCss() {
		console.log(styleTemplate);
		return styleTemplate.content.cloneNode(true);
	}

	generateContent() {
		const props = {
			part: 'anchor',
			href: this.getAttribute('href'),
			title: this.getAttribute('title') || 'external link',
			target: '_blank',
			rel: 'noopener noreferrer',
		}
		return Element('a', props, Element('slot'), decoratorTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		console.log("ExternalLink registered");
		this.shadowRoot!.appendChild(this.generateCss());
		this.shadowRoot!.appendChild(this.generateContent());
	}
}

function Element<TagName extends keyof HTMLElementTagNameMap>(tagname: TagName, props?:Record<string, any>, ...children:( Node | string)[]): HTMLElementTagNameMap[TagName];
function Element(tagname: string, props?:Record<string, any>, ...children:( Node | string)[]): HTMLElement;
	function Element(tagname: string, props:Record<string, any> = {}, ...children:( Node | string)[]): HTMLElement {
	const elem = document.createElement(tagname);
	Object.assign(elem, props);
	(elem.tagName === 'TEMPLATE' ? (elem as HTMLTemplateElement).content : elem).append(...children);
	return elem;
}
