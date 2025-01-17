import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
	if (supabase) {
		const code = url.searchParams.get('code');

		if (code) {
			await supabase.auth.exchangeCodeForSession(code);
		}
	}

  redirect(303, '/profile');
};
