import { Main_search__onbind } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps } from 'solid-js'
import { Main } from '../main'
export function Main_search($p:ParentProps<{
	ctx?:Ctx
}>) {
	const ctx = $p.ctx || ctx__Context__use()
  return (
		<Main
			ctx={ctx}
			title="Search"
			desc="Search any article ..."
			data-onbind={Main_search__onbind}
		>
			{$p.children}
		</Main>
	)
}