# emerging-technologies

Research:
Objective method 1 re.sub()
- Focusing on understanding how the re.sub() method from Pythons regular expression module can be applied for string manipulation such as cleaning text by removing unwanted characters.
- The function cleanup_text() uses re lib to clean a string by:
- removing non letter characters except full stops and spaces
- converting all text to uppercase 
- and replacing multispaces with a single space
- cleaned_txt = re.sub(r'[^A-Za-z. ]', '', text).upper() removes non character letters
-  cleaned_txt = re.sub(r'\s+', ' ', cleaned_txt) removes multiple spaces and converts into one
re.sub() Method:
My understanding of reading the following link on pythons documentation:
https://docs.python.org/3/library/re.html#re.sub
the re.sub() allows pattern matching in strings and replacing them with different values specified by the user.
- this function was used to remove non-alphabetical characters and make the string format to uppdercase