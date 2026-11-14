import { useState } from "react";

export default function Settings() {
  const [sortOrder, setSortOrder] = useState(
    () => localStorage.getItem("inboxPreferences") || "newest",
  );
  const [agentProfile, setAgentProfile] = useState(() => {
    const currentProfile = localStorage.getItem("agentProfile");
    return currentProfile
      ? JSON.parse(currentProfile)
      : {
          agentFirstName: "Alex",
          agentLastName: "Morgan",
          agentEmail: "alex.morgan@replyflow.com",
        };
  });

  function handleSaveProfile() {
    localStorage.setItem("agentProfile", JSON.stringify(agentProfile));
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Profile Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage the profile information shown for your support account.
        </p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
          <h2 className="text-base font-semibold text-slate-900">
            Profile Information
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep your agent details up to date.
          </p>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-50 text-xs font-medium text-slate-500"
              aria-label="Profile avatar placeholder"
            >
              Avatar
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">
                Profile Avatar
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Add an avatar in a future update.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                First Name
              </label>
              <input
                id="first-name"
                value={agentProfile.agentFirstName}
                onChange={(e) =>
                  setAgentProfile({
                    ...agentProfile,
                    agentFirstName: e.target.value,
                  })
                }
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                value={agentProfile.agentLastName}
                onChange={(e) =>
                  setAgentProfile({
                    ...agentProfile,
                    agentLastName: e.target.value,
                  })
                }
                placeholder="Last Name"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email-address"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email Address
              </label>
              <input
                id="email-address"
                type="email"
                value={agentProfile.agentEmail}
                onChange={(e) =>
                  setAgentProfile({
                    ...agentProfile,
                    agentEmail: e.target.value,
                  })
                }
                placeholder="Enter email address"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div className="flex justify-end border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={handleSaveProfile}
              className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
          <h2 className="text-base font-semibold text-slate-900">
            Inbox Preferences
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Customize how tickets are displayed in your inbox.
          </p>
        </div>

        <div className="p-5 sm:p-6">
          <label
            htmlFor="default-sort-order"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Default Sort Order
          </label>
          <select
            id="default-sort-order"
            value={sortOrder}
            onChange={(event) => {
              const selectedSortOrder = event.target.value;
              setSortOrder(selectedSortOrder);
              localStorage.setItem("inboxPreferences", selectedSortOrder);
            }}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 sm:max-w-md"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </section>
    </main>
  );
}
