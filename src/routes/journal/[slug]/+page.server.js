import { base } from "$app/paths";
import { error } from "@sveltejs/kit";
import { marked } from "marked";
import fs from "fs";

export function load({ params }) {
    const journal_dir = `${base}static/journal-entries`;
    const journal_files = fs.readdirSync(journal_dir);

    if (journal_files.includes(`${params.slug}.md`) == false) {
        throw error(404);
    }

    const journal_data = fs.readFileSync(`${journal_dir}/${params.slug}.md`);
    return {
        post: {
            content: marked.parse(journal_data.toString())
        }
    };
}