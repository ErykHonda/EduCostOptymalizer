export const Author = "Eryk Wiśniewski 2G"
// export const Author = "Eryk Wiśniewski 2G, Konsultacja: Piotr Sadowski"
export const Version = "0.3.9"

export const RodzajPrzedmiotu =
[
    ["Rodzaj Przedmiotu"],
    ["Ogólnokształcący"],
    ["Zawodowy"],
    ["Maturalny"],
    ["Inne"]
]
//ta lekcja jest:
export const WSFuser = 
[
    ["Ta Lekcja Jest Dla Mnie", "Liczba"],
    ["Nie Ważna",0.25],
    ["Mało Ważna", 0.5],
    ["Neutralna",0.75],
    ["Ważna",1.5],
    ["Bardzo Ważna",2.5],
    ["Pilna",3]
]

export const listaPrzedmiotow = [
    ['Przedmiot',0],
    ["Pm2",2],
    ["Pm3",2],
    ["Pm4",2],
    ["Informatyka",1],
    ["Fizyka",1],
    ["Matematyka",3],
    ["Polski",3],
    ["Angielski",3],
    ["Hiszpański",1],
    ["Geografia",1],
    ["Biologia",1],
    ["Chemia",1],
    ["Podstawy Przedsiębiorczości",1],
    ["Historia",1],
    ["Religia",4],
    ["WF",1],
    ["Godzina Wychowawcza",1],
    ["Pm5",2],
    ["Pm6",2],
    ["Zajęcia  w Klubie",4],

];

export const listaNauczycieli = [
    ["Nazwisko", "Imię", listaPrzedmiotow[0]],
    ["Bartosińska", "Grażyna", listaPrzedmiotow[1]],
    ["Słomkowska", "Monika", listaPrzedmiotow[2]],
    ["Słomkowska", "Monika", listaPrzedmiotow[17]],
    ["Rudzki", "Dariusz", listaPrzedmiotow[3]],
    ["Rudzki", "Dariusz", listaPrzedmiotow[18]],
    ["Rudzki", "Dariusz", listaPrzedmiotow[19]],
    ["Rychlik", "Jerzy", listaPrzedmiotow[4]],
    ["Staszewska", "Alina", listaPrzedmiotow[5]],
    ["Wróbel", "Danuta", listaPrzedmiotow[6]],
    ["Gaszczyńska", "Katarzyna", listaPrzedmiotow[7]],
    ["Domańska", "Beata", listaPrzedmiotow[8]],
    ["Klimczuk", "Małgorzata", listaPrzedmiotow[9]],
    ["Matysiak", "Agnieszka", listaPrzedmiotow[10]],
    ["Młynarczyk", "Małgorzata", listaPrzedmiotow[11]],
    ["Marszałek", "Ryszard", listaPrzedmiotow[12]],
    ["Kwaśnik", "Stanisław", listaPrzedmiotow[13]],
    ["Januszewska", "Maria", listaPrzedmiotow[14]],
    ["Kołak", "Irmina", listaPrzedmiotow[15]],
    ["Markowski", "Karol", listaPrzedmiotow[16]],
    ["Kruszewska", "Małgorzata", listaPrzedmiotow[17]],
    ["Firmowska", "Jolanta", listaPrzedmiotow[17]]
]
export const randomevent = [
    ['Na Lekcji Będzie', "Liczba"],
    ["Nie Ma lekcji / odwołana", 0],
    ["Zastępstow za nauczyciela", 0.25],
    ["Wyjście", 0.5],
    ["Praca w grupach/ samodzielna",0.75],
    ["Teoria",0.75],
    ["Praktyka",1],
    ["Ćwiczenia / Normalna",1],
    ["Projekt",1.25],
    ["Kartkówka", 1.25],
    ["Sprawdzian", 1.5]
]


const assetsCon = true;
export default assetsCon
