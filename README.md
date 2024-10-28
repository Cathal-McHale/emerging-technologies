# emerging-technologies

# Research: Task 1
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



Method 2 def create_trigram(text):
- This function processes a string of text to generate a trigram model, which counts every three-character sequence that reoccurs within the text.
- this model is useful for analyzing language patterns because it provides a statistical understanding of how characters group together.
-This function takes in a cleaned string of texts, splits it into groups of overlappings of three characters, and counts how often each trigram appears.
- The trigram includes spaces and periods, meaning it is a case-sensitive model that tracks every detail of the structure.
HOW it works: 
- The cleaned text is passed to the function, the clean text should only contain uppercase letters, spaces and periods, all other characters are removed from the previous function.
- The function scans the text and slices it into trigrams by taking every sequence of the consecutive characters.
- the defaultdict() is used to store the trigrams and their counts, each trigram is automatically incremeneted by 1
- defaultdict simplifies the counting process by eliminating the need for checking if the trigram already exists in the stored dictionary.
- After scanning the text, the function returns the dictionary of 2 things:
- Keys: are the trigrams (outputs each trigram)
- Value: is the amount of time that trigram appears

method 3 def read_files(file_path):
Objective: 
- This function reads the content of a specified text file
Function: - read_files(file_path)
purpose: the read_files() function attempts to read content of a file located at the specified path
-uses a try-except block to handle if the file is not found
- returns text content of file
- if text_content:
   if the content is not None, meaning the file was read 
    -   cleaned_text = cleanup_text(text_content)  # Clean the text
    - Called to clean raw text
    - trigram_model = create_trigram(cleaned_text)  # Generate trigrams
    - generate model of trigrams from cleaned text
    print(trigram_model)  # Output the trigram model checks
    Python File input: https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files This is the source that helped me understand how file input works in Python. specifically for the method i used stackoverflow https://stackoverflow.com/questions/64157569/read-and-write-from-and-to-file-using-functions and replaced it with my own code.


    # Research Task 2
Objective: 
- This Task Generates a string-based trigram model, the model is a dictionary containing trigrams and their frequencys. Starts with the predefined "TH" and generates characters by selecting the most likely next char. based on the trigram counts
- Focusing on how generate_string function predicts the next char
- While len(result) <>length
PURPOSE
 enters a loop that continues the generated string reaches 10000
-     prefix = result[-2:] 
PURPOSE:
- extraxts the last two characters of the string to use as a prefix for checking for matching trigrams 
- filtered_trigrams = {k: v for k, v in trigram_model.items() if k.startswith(prefix)}
PURPOSE: 
- filters the trigrams in the model to find others that start with the current prefix

if not filtered_trigrams:
PURPOSE: 
- If none left loop breaks and string generation stops
- Filtering the trigrams in the model to check which trigram starts with "TH" and gets the third letter in each trigram
## Showing probabilities of the next characters
- The sequence of characters that forms context for prediciting the next char.
- Next_char is the list of all the different possible characters that could follow the prefix
-   next_chars = [k[2] for k in filtered_trigrams.keys()]
        counts = list(filtered_trigrams.values())
PURPOSE:
- Extracts the third char. from each matching trigram and stores them in next_chars and the frequency each appears is stored in counts
        next_char = random.choices(next_chars, weights=counts)[0]
PURPOSE:
        next_char = random.choices(next_chars, weights=counts)[0]
-   probabilities = [count / total_counts for count in counts]
        print(f"Prefix: '{prefix}', Next Characters: {next_chars}, Counts: {counts}, Probabilities: {probabilities}")
        PURPOSE:
- Calculates probabilities of the possible next chars following the given prefix based on the counts.
- Divides each char count by the total counts showing how likely each char follows the prefix char
- Prefix refers to the sequence of char that forms the contect for predicting the next char.
- next_char is the list of all the possible characters that could follow the prefeix
- counts counts how often each of the possible next chars follow the prefix from the fil
-generated_string = generate_string(trigram_model) 

PURPOSE:
- Calls the function passing the trigram_model dictionary to generate a string using the trigram model. 
- The result is then stored in the generated_string variable

- Chooses the next char from next_chars based on the frequencies and using weighted probabilities.
Sources for predicting the next char: https://github.com/PradipKumarChaudhary1/N-gram-model
https://stackoverflow.com/questions/64741555/what-should-be-the-behavior-of-trigrams-to-predict-next-word-given-a-input-size
https://web.stanford.edu/~jurafsky/slp3/3.pdf 3.1: N-Grams