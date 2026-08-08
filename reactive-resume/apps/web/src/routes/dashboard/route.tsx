import { Trans } from "@lingui/react/macro";
import { createFileRoute, Outlet, redirect, useRouter, useSearch } from "@tanstack/react-router";
import { SidebarProvider } from "@reactive-resume/ui/components/sidebar";
import { createNoindexFollowMeta } from "@/libs/seo";
import { getDashboardSidebarState, setDashboardSidebarState } from "./-components/functions";
import { DashboardSidebar } from "./-components/sidebar";
import { authClient } from "@/libs/auth/client";

const devSearchSchema = {
  dev: false,
} as const;

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return { dev: search.dev === "true" };
  },
  beforeLoad: async ({ context, search }) => {
    // Dev mode: auto-sign-in with a dev account to skip the auth gate
    if (!context.session && search.dev && import.meta.env.DEV) {
      const devEmail = "dev@primeresume.local";
      const devPassword = "devpass123";
      const devUsername = "dev";
      const devName = "Dev User";

      try {
        // Try signing in first
        await authClient.signIn.email({
          email: devEmail,
          password: devPassword,
        });
        const { data } = await authClient.getSession();
        if (data) return { session: data as typeof context.session };
      } catch {
        // If dev sign-in fails, try creating the account
        try {
          await authClient.signUp.email({
            name: devName,
            username: devUsername,
            email: devEmail,
            password: devPassword,
          });
          // autoSignIn is enabled, so user should be signed in after signUp
          const { data } = await authClient.getSession();
          if (data) return { session: data as typeof context.session };
        } catch {
          // Silently fall through to normal auth
        }
      }
    }

    if (!context.session) throw redirect({ to: "/auth/login", replace: true });
    return { session: context.session };
  },
	loader: () => {
		const sidebarState = getDashboardSidebarState();
		return { sidebarState };
	},
	head: () => ({
		meta: [createNoindexFollowMeta()],
	}),
});

function RouteComponent() {
	const router = useRouter();
	const { sidebarState } = Route.useLoaderData();

	const handleSidebarOpenChange = (open: boolean) => {
		setDashboardSidebarState(open);
		void router.invalidate();
	};

	return (
		<SidebarProvider open={sidebarState} onOpenChange={handleSidebarOpenChange}>
			<a
				href="#main-content"
				className="sr-only rounded-md bg-popover px-4 py-2 text-sm ring-2 ring-ring focus:not-sr-only focus:absolute focus:inset-s-2 focus:top-2 focus:z-[100]"
			>
				<Trans>Skip to main content</Trans>
			</a>

			<DashboardSidebar />

			<main id="main-content" className="@container flex-1 p-4 md:ps-2">
				<Outlet />
			</main>
		</SidebarProvider>
	);
}
