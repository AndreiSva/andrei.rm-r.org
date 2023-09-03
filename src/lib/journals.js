import { base } from "$app/paths";
import fs from "fs";

export function get_journals(n = 0) {
    const journal_dir = `${base}static/journal-entries`;
    const journal_files = fs.readdirSync(journal_dir);

    journal_files.sort((a, b) => {
        a.localeCompare(b);
    });
    journal_files.reverse();

    let journal_data = [];

    journal_files.forEach((value, index, array) => {
        if (n != 0 && index > n) {
            return false;
        }
        journal_data.push({
            name: fs.readFileSync(`${journal_dir}/${value}`).toString().split("\n")[0].slice(2),
            date: value.slice(0, -3),
        });
    })

    return {
        journal_data: journal_data
    };
}