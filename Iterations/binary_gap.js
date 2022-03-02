function binary(N){
    return (N >>> 0).toString(2);
}

function binary_gap(num){
    // BinaryGap - Find longest sequence of zeros in binary representation of an integer.
    let current_binary = binary(num);
    let current_binary_str = current_binary.toString();
    let gaps_count = 0;
    let gaps = 0;
    if (num < 0){
        return 0;
    }
    else if(current_binary_str.includes("0")){
        if (current_binary_str.replace(/[^1]/g, "").length == 1){
            return 0; // Because no binary gaps
        }
        else {
            let new_arr = Array.from(current_binary_str);
            for (let index = 0; index < new_arr.length; index++) {
                const element = new_arr[index];
                if(index !== 0 && element == 0){
                    gaps_count++;
                }
                else if (index !== 0 && element == 1){
                    gaps = gaps_count > gaps ? gaps_count : gaps;
                    gaps_count = 0;
                }

            }
            return gaps;
        }
    }
    else {
        return 0; // Because no binary gaps
    }
}

// console.log(binary_gap(1041)); // Log out answer
