#include <iostream>
#include <fstream>
using namespace std;

int main(){
    // Advent of Code
    // Day 1: Not Quite Lisp
    
    fstream File("input.txt" , ios::in);
    if(!File){
        cerr << "Uh oh, unable to read file\n";
        exit(EXIT_SUCCESS);
    }

    string input = "";
    int floor = 0;
    int basement = 0;
    int level = 0;
    int i = 0;

    cout << "Santa's white Christmas" << "\n";
    cout << "where do the floor instructions take santa:" << "\n";
    while(getline(File, input));
    for(i = 0; i < input.length(); i++){
        if(input[i] == '('){
            floor++;
        }else if(input[i] == ')'){
            basement--;
        }
    }

    level = (floor + basement);
    if(level < 0){
        cout << "santa is in the basement on level: " << level << "!" << '\n';
    }else{
        cout << "santa is on floor level: " << level << "!" << '\n';
    }
}