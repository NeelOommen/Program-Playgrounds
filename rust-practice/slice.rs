fn main(){
    let mut cereals = [
        String::from("Cookie Crisp"),
        String::from("Cinnamon Toast Crunch"),
        String::from("Frosted Flakes"),
        String::from("Cocoa Puffs"),
        String::from("Captain Crunch")
    ];

    let first_two = &cereals[..2];
    println!("First two: {:?}", first_two);

    let mid_three = &cereals[1..4];
    println!("Middle three: {:?}", mid_three);

    let last_three = &mut cereals[2..];
    println!("Last three: {:?}", last_three);

    last_three[2] = String::from("Lucky Charms");
    println!("Editied Cereals: {:?}", cereals);

    let cookie_crisp = &cereals[0];

    let cookie = &cookie_crisp[..6];
    println!("Cookie: {cookie}");

    let cocoa_puffs = &cereals[3];
    let puffs = &cocoa_puffs[5..];
    println!("Puffs: {puffs}");

}