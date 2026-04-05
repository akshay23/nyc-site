import type { LoaderFunctionArgs } from "@remix-run/node";
// @ts-ignore — Vite raw import
import html from "../../privacy-policy.html?raw";

export async function loader(_: LoaderFunctionArgs) {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
