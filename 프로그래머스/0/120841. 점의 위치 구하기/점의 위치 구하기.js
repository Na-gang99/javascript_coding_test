function solution(dot) {
    const [x,y] = dot;
    var result = 0;
    if(x>0){
        if(y>0){result = 1;}
        else{result = 4;}
    }
    else{
        if(y>0){result = 2;}
        else{result = 3;}
    }
    return result;
}