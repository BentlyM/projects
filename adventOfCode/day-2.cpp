#include <iostream>
#include <string>
#include <vector>
#include <fstream> 
#include <algorithm>
using namespace std;

int main(){
    // Advent of Code
    // Day 2: I was Told there would be no math
    string input = "";
    int l = 0;
    int w = 0;
    int h = 0;
    const int literal = 2;
    fstream infile("input.txt", ios::in);
    while(infile){
        getline(infile, input);
        if(input.find("x") != string::npos){
            l = stoi(input.substr(0, input.find("x")));
            w = stoi(input.substr(input.find("x")+1, input.find("x")+1));
            h = stoi(input.substr(input.find("x")+1, input.find("x")+1));
        }
    }
    int area = 2*l*w + 2*w*h + 2*h*l;
            int bow = l*w*h;
            int ribbon = 2*l + 2*w + l*w*h;
            cout << "The area of the wrapping paper is " << area << " square feet." << endl;
            cout << "The area of the ribbon is " << ribbon << " feet." << endl;
            cout << "The bow is " << bow << " feet." << endl;
            cout << "The total area of the wrapping paper and ribbon is " << area + ribbon << " feet." << endl;
            cout << "The total area of the wrapping paper, ribbon, and bow is " << area + ribbon + bow << " feet." << endl
            << endl;
}