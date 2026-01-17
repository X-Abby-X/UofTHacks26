# Virtual Environment

## MacOS
```bash
python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
```
## Window
```bash
python -m venv venv

venv\Scripts\Activate.ps1 //powershell
or 
venv\Scripts\activate //command prompt

python -m pip install --upgrade pip
```

# Setup

0. ensure python version 3.13
1. ```pip install -U google-genai ```

2. get api key from [here](https://aistudio.google.com/welcome?utm_source=PMAX&utm_medium=display&utm_campaign=Cloud-SS-DR-AIS-FY26-global-pmax-1713578&utm_content=pmax&gad_source=1&gad_campaignid=23417432327&gbraid=0AAAAACn9t665gTs6faNSHkPHICcDfYO7B&gclid=CjwKCAiAvaLLBhBFEiwAYCNTf62rkOdV9TQJhAG2ioDPavqX5x2UcO_aIZMnQMRiDBsOuqRTRuErdRoC0tMQAvD_BwE)
 and create config.py with content 

```bash 
API_KEY = "YOUR API KEY"
```

3. upload pdf in folder called "files" 
4. ```python main.py```

## Frontend
- Install supabase: `@supabase/supabase-js`
