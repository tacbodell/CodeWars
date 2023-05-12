//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
//
//When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
//
//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//
//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1
//The test cases contain numbers only by mistake.


#include <string>

std::string correct(std::string str){
  std::string corrected;
  for (int i = 0; i < str.size(); i++) {
    if (str[i] == '5') {corrected.push_back('S');}
    else if (str[i] == '0') {corrected.push_back('O');}
    else if (str[i] == '1') {corrected.push_back('I');}
    else {corrected.push_back(str[i]);};
  }
  return corrected;
}