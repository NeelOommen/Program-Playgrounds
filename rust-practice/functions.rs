fn main(){
    apply_to_jobs(2, "swe");

    let even_result = is_even(22);
    println!("Even: {even_result}");

    let alphabet_result = alphabets("abcdefg");
    let f_bool = alphabet_result.0;
    let s_bool = alphabet_result.1;
    println!("Alphabets: {f_bool} {s_bool}");
}

fn apply_to_jobs(number: i32, title: &str){
    println!("I'm applying to {number} {title} jobs");
}

fn is_even(number: i32) -> bool {
    return number % 2 == 0;
}

fn alphabets(text: &str) -> (bool, bool){
    return (text.contains('a'), text.contains('z'));
}