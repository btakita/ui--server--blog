import { H_, van_ } from '@btakita/domain--all--blog'
import { Astro__url__pathname_ } from '@btakita/domain--server'
import { isNumber_ } from '@ctx-core/number'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, PlateVan } from 'van-type-delegate'
import './Breadcrumbs.css'
export function V_breadcrumbs<V extends PlateVan>({ ctx }:{ ctx:Ctx }) {
	// Remove current url path and remove trailing slash if exists
	const current_url_path$ = van_<V>(ctx).derive(()=>
		Astro__url__pathname_(ctx).replace(/\/+$/, ''))
	// Get url array from path
	// eg: /tags/tailwindcss => ['tags', 'tailwindcss']
	const breadcrumb_a$ = van_<V>(ctx).derive(()=>{
		const breadcrumb_a = current_url_path$.val.split('/').slice(1)
		// if breadcrumb is Home > Posts > 1 <etc>
		// replace Posts with Posts (page number)
		if (breadcrumb_a[0] === 'posts' && isNumber_(breadcrumb_a[1])) {
			breadcrumb_a.splice(0, 2, `Posts (page ${breadcrumb_a[1] || 1})`)
		}
		return breadcrumb_a
	})
	if (!breadcrumb_a$.val.length) return
	const H = H_<V>(ctx)
	return (
		H.nav({ class: 'Breadcrumbs mx-auto mb-1 mt-8 w-full max-w-3xl px-4', 'aria-label': 'breadcrumb' },
			H.ul(
				H.li(
					H.a({ href: '/' }, 'Home'),
					H.span({ 'aria-hidden': true }, ' > ')),
				...breadcrumb_a$.val.map((breadcrumb, idx)=>
					H.li(
						idx + 1 === breadcrumb_a$.val.length
							? H.span({ class: idx > 0 ? 'lowercase' : 'capitalize', 'aria-current': 'page' },
								breadcrumb)
							: <ChildDom<V>>[
								H.a({ href: `/${breadcrumb}` }, breadcrumb),
								H.span({ 'aria-hidden': true }, ' > ')
							])),
			)))
}