import { type Post } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { createMemo, Show, type VoidProps } from 'solid-js'
import { LinkButton } from '../html_tag'
import './Nav_posts.css'
export function Nav_posts($p:VoidProps<{
	ctx?:Ctx
	page_num:number
	total_pages:number
	posts:Post[]
}
>) {
	const ctx = $p.ctx || ctx__Context__use()
	const page_num = $p.page_num
	const total_pages = $p.total_pages
	const prev = page_num > 1 ? '' : 'disabled'
	const next = page_num < total_pages ? '' : 'disabled'
	return (
		<ctx__Context.Provider value={ctx}>
			<Show when={total_pages > 1}>
				<nav
					class="Nav_posts pagination-wrapper mb-8 mt-auto flex justify-center"
					aria-label="Pagination"
				>
					<LinkButton
						disabled={prev === 'disabled'}
						href={`/posts${page_num - 1 !== 1 ? '/' + (page_num - 1) : ''}`}
						class={`mr-4 select-none ${prev}`}
						aria-label="Previous"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class={`${prev}-svg`}>
							<path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"/>
						</svg>
						Prev
					</LinkButton>
					<LinkButton
						disabled={next === 'disabled'}
						href={`/posts/${page_num + 1}`}
						class={`ml-4 select-none ${next}`}
						aria-label="Next"
					>
						Next
						<svg xmlns="http://www.w3.org/2000/svg" class={`${next}-svg`}>
							<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"/>
						</svg>
					</LinkButton>
				</nav>
			</Show>
		</ctx__Context.Provider>
	)
}