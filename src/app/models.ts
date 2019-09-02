interface MusicRecord {
    recordLabel: string;
    bands: Band[];
}

interface Band {
    name: string;
    festivals: Festival[];
}

interface Festival {
    name: string;
}