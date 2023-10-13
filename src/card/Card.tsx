import { type Post } from '@btakita/domain--server--blog'
import { style_ } from '@ctx-core/html'
import { slug } from 'github-slugger'
import { Show, type VoidProps } from 'solid-js'
import { Datetime } from '../date/Datetime.tsx'
// import { Datetime } from './Datetime.tsx'
export function Card(
	$p:VoidProps<{
		href?:string
		post:Post
		show_heading?:boolean
		locale?:string
	}>
) {
	const href = $p.href
	const post = $p.post
	const show_heading = $p.show_heading
	const data = post.data
	const title = data.title
	const pubDate = data.pubDate
	const description = data.description
	const h_props = {
		style: style_({
			'view-transition-name': slug(title)
		}),
		class: 'text-lg font-medium decoration-dashed hover:underline',
	}
	return (
		<li class="my-6">
			<a
				href={href}
				class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
			>
				<Show when={show_heading} fallback={<h3 {...h_props}>{title}</h3>}>
					<h2 {...h_props}>{title}</h2>
				</Show>
			</a>
			<Datetime datetime={pubDate} locale={$p.locale}/>
			<p>{description}</p>
		</li>
	)
}
