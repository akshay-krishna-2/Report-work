export interface City {
    id: number;
    city: string;
    population: number;
    onhold: number;
    ongoing: number;
    completedOnTime: number;
    completedLate: number;
    dropped: number;
}