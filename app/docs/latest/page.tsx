import { redirect } from "next/navigation";
import { getLatestVersionUrl } from "@/lib/versions";

export default function LatestPage() {
  redirect(getLatestVersionUrl());
}
