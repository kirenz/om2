
# Create Account

![](https://huggingface.co/front/assets/huggingface_logo-noborder.svg)

- Create a Hugging Face account if you don't already have one. 

- You can create an account for free on the [Hugging Face website](https://huggingface.co/).


# Create API key

*The API key is used to authenticate your requests to the Hugging Face API.*

- Log into your Hugging Face account and navigate to your profile page. 

- Click on the "Settings" button in the top right corner of the page.

- Scroll down to the "API keys" section of the settings page and click on the "Create new API key" button. 

- Give your new API key a name and click on the "Create" button.

- Copy your new API key to your clipboard. 


# Store API key

- We define our API key as a variable in a separate Python file so we can import it into other Python scripts. 

- Create a separate Python file called `config.py` and define your API key as a variable:

```python
API_KEY = 'your_api_key_here'
```

- Save and close the file.