export class Album {
    #name!: string;
    #year!: number;
    #noOfSongs!: number;

    public Album(name: string, year: number, noOfSongs: number) {
        this.#name = name;
        this.#year = year;
        this.#noOfSongs = noOfSongs;
    }

    get name(): string { return this.#name; }
    set name(name: string) { this.#name = name; }

    get year(): number { return this.#year; }
    set year(year: number) { this.#year = year; }

    get noOfSongs(): number { return this.#noOfSongs; }
    set noOfSongs(noOfSongs: number) { this.#noOfSongs = noOfSongs; }
}