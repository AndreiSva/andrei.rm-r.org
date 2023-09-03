import { get_journals } from "$lib/journals"

export function load() {
    return get_journals(10)
}