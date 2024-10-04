import re #import regular expression module
from collections import defaultdict #import defaultdict for default value


def cleanup_text(text):
    #remove all non-letter characters except periods and spaces and convert to uppercase
    cleaned_txt = re.sub(r'[^A-Za-z. ]', '', text).upper()
    #replace multiple spaces with a single space
    cleaned_txt = re.sub(r'\s+', ' ', cleaned_txt)

    return cleaned_txt

#test_text = "Hello, world! 123444 testing to see if it removes"
#cleaned_txt = cleanup_text(test_text)

#print("original text = : ", test_text)
#print("Cleaned text = : ", cleaned_txt)

    

