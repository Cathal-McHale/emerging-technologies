import re
from collections import defaultdict

def cleanup_text(text):
    # Remove all non-letter characters except periods and spaces and convert to uppercase
    cleaned_txt = re.sub(r'[^A-Za-z. ]', '', text).upper()
    # Replace multiple spaces with a single space
    cleaned_txt = re.sub(r'\s+', ' ', cleaned_txt)
    return cleaned_txt

def create_trigram(text):
    trigrams = defaultdict(int)  # Use defaultdict to avoid key errors
    # Iterate through the text to create trigrams
    for i in range(len(text) - 2):
        trigram = text[i:i+3]  # Slice string to get the trigram
        trigrams[trigram] += 1  # Increment count for the trigram
    return dict(trigrams)  # Return after all trigrams have been processed

# Example usage
text1 = "it is what it is."
cleaned_text = cleanup_text(text1)  # Clean the text
trigram_model = create_trigram(cleaned_text)  # Generate trigrams

print(trigram_model)  # Output the trigram model
