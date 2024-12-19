# Emerging Technologies Project
This repository contains research tasks and implementations related to text processing, trigram modeling, and a basic Eliza chatbot. The project is implemented in Python and JavaScript and utilizes Jupyter Notebooks for demonstrating functionality and results.

## Table of Contents
1. Installation
2. Project Structure
3. Usage
4. Running the Jupyter Notebook
5. Research Task 1: Text Cleanup and Trigram Model
6. Research Task 2: String Generation with Trigrams
7. Research Task 3: Analysing the Model
8. Task 4: Exporting Trigram Model to JSON
9. Eliza Chatbot
10. Dependencies
11. Acknowledgments

 # Installation
## Prerequisites:
- Python 3.8 or higher
- Jupyter Notebook
- Git
- A virtual environment manager (optional but recommended)


### Steps to Install
Clone the repository:
- git clone https://github.com/Cathal-McHale/emerging-technologies.git
- cd emerging-technologies
- Set up a Python virtual environment:

## Install dependencies:
- pip install -r requirements.txt

### Install Jupyter Notebook if not already installed:
- pip install notebook
- Launch the Jupyter Notebook:
- jupyter notebook

## Project Structure
- notebooks/
- Contains Jupyter Notebooks for each task.
- scripts/
- Python scripts implementing the trigram model and related utilities.
- data/
- Sample input text files for testing.
- output/
- Generated outputs such as JSON files and text-based results.
- requirements.txt
- Lists the required Python packages.
- index.html, style.css, app.js
- Files for the Eliza chatbot.

## Usage
- Running the Jupyter Notebook
- After launching Jupyter Notebook, navigate to the notebooks/ directory.
- Open the desired notebook (e.g., task1_text_cleanup.ipynb).
- Follow the instructions within the notebook to execute the cells in order.

## Research Task 1: Text Cleanup and Trigram Model
- Notebook: task1_text_cleanup.ipynb
- Objective: Clean text by removing unwanted characters, convert to uppercase, and generate a trigram model.
- Key Functions:
- cleanup_text(text): Cleans the text by applying regular expressions.
- create_trigram(text): Generates trigrams and counts their occurrences.
- How to Run:
- Load a sample text file from the data/ directory.
- Run the notebook cells to clean the text and create a trigram model.
- Results are printed in the notebook and optionally saved to JSON.
- Research Task 2: String Generation with Trigrams
- Notebook: task2_string_generation.ipynb
- Objective: Generate a string using a trigram model by predicting the most likely next character.

## Key Functions:
- generate_string(trigram_model, length): Generates a string of a specified length.
- Outputs the generated text and shows intermediate steps like probabilities.

-  How to Run:
- Ensure the trigram model is available (generated in Task 1 or loaded from JSON).
- Run the notebook cells to generate text and view probabilities.
- Research Task 3: Analysing the Model
- Notebook: task3_model_analysis.ipynb
- Objective: Calculate the percentage of valid English words in a generated string.

### Key Functions:
- calc_valid_word_percentage(text, valid_words): Compares the generated words to a valid word list.
- Outputs the percentage of valid words in the string.
- How to Run:
- Load a valid word list (e.g., data/valid_words.txt).
- Run the notebook cells to analyse the trigram-generated text.

- Task 4: Exporting Trigram Model to JSON
- Notebook: task4_export_to_json.ipynb
- Objective: Export the trigram model to a JSON file for further analysis or reuse.

### Key Functions:
- export_to_json(trigram_model, filename): Writes the trigram model to a specified JSON file.
- How to Run:
- Ensure the trigram model is available.
- Run the notebook cells to export the model to a JSON file in the output/ directory.


### Eliza Chatbot
### Link
https://cathal-mchale.github.io/emerging-technologies/
- Files:
  - index.html
  - style.css
  - app.js
- Objective: Implement a simple client-side chatbot based on the Eliza concept using HTML, CSS, and JavaScript.
- How to Run:
  - Open index.html in any modern web browser.
  - Interact with the chatbot directly in the browser.
- Research:
  - The chatbot uses pattern matching and substitution to simulate a conversation. Refer to the comments in app.js for implementation details.
  - References:
    - https://en.wikipedia.org/wiki/ELIZA
    - https://www.smallsurething.com/implementing-the-famous-eliza-chatbot-in-python/
    - https://www.cse.buffalo.edu/~rapaport/572/S02/eliza.html
    - https://github.com/dharness/eliza
    - https://www.joelgrus.com/2016/05/23/fun-with-eliza-in-python/
    - https://www.masswerk.at/elizabot/
    - https://www.nltk.org/_modules/nltk/chat/eliza.html


## Dependencies
Python Packages
regex==2024.10.10: Regular expressions for text processing.
jsonschema==4.19.0: For JSON validation and exporting.
notebook: For running Jupyter Notebooks.


## JavaScript Libraries
No external libraries used. The Eliza chatbot is implemented purely in vanilla JavaScript.

## Acknowledgments
- https://docs.python.org/3/library/re.html#re.sub

- https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files

- https://stackoverflow.com/questions/64157569/ read-and-write-from-and-to-file-using-functions

- https://github.com/PradipKumarChaudhary1/N-gram-model

- https://stackoverflow.com/questions/64741555/what-should-be-the-behavior-of-trigrams-to-predict-next-word-given-a-input-size

- https://web.stanford.edu/~jurafsky/slp3/3.pdf 

- https://www.geeksforgeeks.org/how-to-split-a-file-into-a-list-in-python/

- https://stackoverflow.com/questions/25012108/how-to-calculate-percentage-of-english-words-in-a-paragraph-using-python 
- https://inventwithpython.com/hacking/chapter12.html

- https://docs.python.org/3/library/json.html

- https://www.geeksforgeeks.org/reading-and-writing-json-to-a-file-in-python/

-  https://towardsdatascience.com/implementing-a-character-level-trigram-language-model-from-scratch-in-python-27ca0e1c3c3f

- https://docs.python.org/3/reference/import.html

- https://towardsdatascience.com/text-generation-using-n-gram-model-8d12d9802aa0