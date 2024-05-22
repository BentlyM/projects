#include <iostream>
#include <string>
#include <fstream>
#include <algorithm>
#include <vector>
using namespace std;

int main(){

     int l = 0 , w  = 0 , h = 0 , area = 0;
     string input = "";
     const int literal = 2;
     fstream inFile("input.txt" , ios::in);

     if(!inFile){
          cerr << "Error... File not Found" << "\n";
          exit(EXIT_SUCCESS);
     }
    
     while(getline(inFile , input)){
        if(input.find('x') != string::npos){
            l = stoi(input.substr(0 , input.find("x")+1));
            w = stoi(input.substr(input.find("x")+1 , input.find("x")+1));
            h = stoi(input.substr()); // still figure this one out 
        }
     }
}