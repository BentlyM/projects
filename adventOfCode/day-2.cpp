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
          size_t end = input.find("x");
          int l = stoi(input.substr(0, end));
          size_t start = input.find("x", start + 1);
          end = input.find("x", start + 1);
          int w = stoi(input.substr(start, end));
          start = end + 1;
          int h = stoi(input.substr(start));
        }
     }
     
     cout << l << endl;
     cout << w << endl;
     cout << h << endl;
}