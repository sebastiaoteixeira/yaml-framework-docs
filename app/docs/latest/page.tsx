import { getLatestVersionUrl } from "@/lib/versions";

export default function LatestPage() {
  const url = getLatestVersionUrl();
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${url}`} />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace('${url}')` }} />
      <p>Redirecting to latest version...</p>
    </>
  );
}
