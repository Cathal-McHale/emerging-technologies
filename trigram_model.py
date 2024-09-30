import re #import regular expression module
from collections import defaultdict#import defaultdict for default value


def cleanup_text(text):
    #remove all non-letter characters except periods and spaces and convert to uppercase
    cleaned_txt = re.sub(r'[A-Za-z]', '', text).upper()
    #replace multiple spaces with a single space
    cleaned_txt = re.sub(r'\s+', ' ', cleaned_txt)


    return cleanup_text