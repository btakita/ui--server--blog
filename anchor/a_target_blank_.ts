import { class_ } from 'ctx-core/html'
import { type Node_T, raw_, type relement_env_T, switch_, type tag__dom_T } from 'relementjs'
import { a_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
import './a_target_blank.css'
export function a_target_blank_<env_T extends relement_env_T>(
	$p:a_target_blank__props_T,
	...children:tag__dom_T<env_T>[]
) {
	return (
		a_({
			...$p,
			class: class_('A_target_blank', $p.class),
			rel: `noopener noreferrer` + $p.rel ? ` ${$p.rel}` : '',
			target: '_blank',
		},
		switch_<env_T>({
			...$p,
			case_aa: [
				[$p.innerHTML, ()=>raw_($p.innerHTML)],
				[$p.innerText, ()=>$p.innerText],
				[true, ()=>$p.href],
			]
		}, ...children),
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			width: 16,
			height: 16,
			fill: 'currentColor',
			class: 'bi bi-box-arrow-up-right',
			viewBox: '0 0 16 16'
		},
		path_({
			'fill-rule': 'evenodd',
			d: 'M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'
		}),
		path_({
			'fill-rule': 'evenodd',
			d: 'M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'
		})))
	) as Node_T<env_T, HTMLElementTagNameMap['a']>
}
export function atb_<env_T extends relement_env_T>(
	$p:a_target_blank__props_T,
	...children:tag__dom_T<env_T>[]
) {
	return a_target_blank_<env_T>($p, ...children)
}
export type a_target_blank__props_T = {
	href:string
	innerText?:string|number
	innerHTML?:string
	class?:string
	rel?:string
}
