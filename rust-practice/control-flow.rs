fn main(){
    println!("If else -> blue: {}", color_to_number("blue"));
    println!("Match -> blue: {}", color_to_number_match("blue"));

    println!("Iterative factorial of 5: {}", iter_factorial(5));
    println!("Recursive factorial of 5: {}", recur_factorial(5));
}

fn color_to_number(color: &str) -> i32{
    if "red" == color {
        return 1;
    }
    else if "green" == color {
        return 2;
    }
    else if "blue" == color {
        return 3;
    }
    else{
        return 0;
    }
}

fn color_to_number_match(color: &str) -> i32{
    return match color {
        "red" => 1,
        "green" => 2,
        "blue" => 3,
        _ => 0,
    };
}

fn iter_factorial(num: i32) -> i32 {
    let mut product = 1;
    let mut n = num;
    while n > 0 {
        product *= n;
        n -= 1;
    }
    return product;
}

fn recur_factorial(num: i32) -> i32 {
    if num <= 0 {
        return 1;
    }

    return num * recur_factorial(num - 1);
}