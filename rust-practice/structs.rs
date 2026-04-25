#[derive(Debug)]
struct Flight{
    origin: String,
    destination: String,
    price: f64,
    passengers: u32
}

impl Flight{

    fn new(origin: String, destination: String, price: f64, passengers: u32) -> Self{
        Self {
            origin,
            destination,
            price,
            passengers
        }
    }

    fn change_destination(&mut self, new_destination: String){
        self.destination = new_destination;
    }

    fn increase_price(&mut self){
        self.price *= 1.2;
    }

    fn itinerary(&mut self){
        println!("{} -> {}", self.origin, self.destination);
    }

}

fn main(){

    let mut flight = Flight::new(String::from("DEL"), String::from("IXL"), 100.0, 50);
    flight.change_destination(String::from("BLR"));
    flight.increase_price();
    flight.itinerary();

    println!("{flight:#?}");

    let _flight2 = Flight{
        origin: String::from("BLR"),
        destination: String::from("CHN"),
        ..flight
    };

}