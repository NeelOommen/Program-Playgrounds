fn main(){
    let leet: i32 = 1_337;

    let _low_precision_leet: i16 = leet as i16;

    let ftype = 1.23456;
    println!("{ftype:.3}");

    let with_milk = false;
    let with_sugar = true;

    let _is_my_type_of_coffee = with_milk && with_sugar;

    let _is_acceptable_coffee = with_milk || with_sugar;

    let arr4: [i8; 4] = [1,2,3,4];
    println!("{arr4:?}");

    let tuple: (i32, f64, bool, [i8; 4]) = (23, 23.45, true, arr4);

    println!("{tuple:?}");

}