Search.setIndex({"docnames": ["ae/ae-1-scraping-quotes", "ae/ae-2-twitter-api", "ae/exams", "code/3-pandas-intro-short-c", "code/32-tf-example", "code/33-fashion-mnist", "code/altair_introduction_p", "code/bar-chart-altair", "code/code-overview", "code/contingency-table-bar-plot", "code/pie-charts-altair", "code/row-column-proportions", "code/stacked-bar-chart-altair", "code/standardized-bar-chart-altair", "docs/course-faq", "docs/course-overview", "docs/course-schedule", "docs/course-support", "docs/course-syllabus", "tutorials/env-webscraping", "weeks/week1", "weeks/week10", "weeks/week11", "weeks/week12", "weeks/week13", "weeks/week14", "weeks/week2", "weeks/week3", "weeks/week4", "weeks/week5", "weeks/week6", "weeks/week7", "weeks/week8", "weeks/week9", "weeks/weeks-overview"], "filenames": ["ae/ae-1-scraping-quotes.ipynb", "ae/ae-2-twitter-api.md", "ae/exams.md", "code/3-pandas-intro-short-c.ipynb", "code/32-tf-example.ipynb", "code/33-fashion-mnist.ipynb", "code/altair_introduction_p.ipynb", "code/bar-chart-altair.ipynb", "code/code-overview.md", "code/contingency-table-bar-plot.ipynb", "code/pie-charts-altair.ipynb", "code/row-column-proportions.ipynb", "code/stacked-bar-chart-altair.ipynb", "code/standardized-bar-chart-altair.ipynb", "docs/course-faq.md", "docs/course-overview.md", "docs/course-schedule.md", "docs/course-support.md", "docs/course-syllabus.md", "tutorials/env-webscraping.md", "weeks/week1.md", "weeks/week10.md", "weeks/week11.md", "weeks/week12.md", "weeks/week13.md", "weeks/week14.md", "weeks/week2.md", "weeks/week3.md", "weeks/week4.md", "weeks/week5.md", "weeks/week6.md", "weeks/week7.md", "weeks/week8.md", "weeks/week9.md", "weeks/weeks-overview.md"], "titles": ["Web Scraping in Python with Beautiful Soup, Requests and pandas", "Twitter API", "Application exercises", "First steps in pandas", "TensorFlow Example", "Classify images of clothing", "Introduction to Altair", "Bar chart", "Code overview", "Contingency table", "Pie charts", "Row and column proportions", "Stacked bar chart", "Standardized bar chart", "FAQ", "Course overview", "Course schedule", "Course support", "Course syllabus", "Environment webscraping", "Week 1", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Overview"], "terms": {"import": [0, 4, 11, 12, 13], "note": [0, 5], "activ": [0, 1, 3, 5, 18], "correct": [0, 4, 5], "conda": [0, 19, 28], "environ": [0, 6, 20, 24, 28], "befor": [0, 4, 5, 17, 34], "you": [0, 3, 4, 5, 6, 7, 17, 18, 23, 28, 29, 34], "start": [0, 3, 5, 6, 7, 12, 19, 23], "make": [0, 3, 4, 6, 7], "sure": [0, 4], "fill": [0, 6], "ani": [0, 6, 17, 18], "place": [0, 6], "sai": [0, 6], "your": [0, 1, 3, 4, 6, 7, 17, 18, 19, 20, 28, 29], "code": [0, 3, 4, 5, 6, 7, 18, 19, 24, 29, 34], "here": [0, 3, 5, 6, 7], "answer": [0, 4, 17], "well": [0, 4, 6], "name": [0, 5, 6, 7, 17, 18], "necessari": [0, 6], "collabor": 0, "below": [0, 3, 5, 6], "The": [0, 3, 4, 5, 11, 17, 18], "function": [0, 1, 3, 4, 5, 6], "notimplementederror": 0, "prevent": [0, 5], "from": [0, 1, 4, 5, 6, 7, 9, 11, 17, 18, 23, 26, 29], "hand": [0, 5, 6], "assign": [0, 16, 18], "empti": [0, 3], "cell": 0, "simpli": [0, 3, 5, 6], "delet": 0, "work": [0, 3, 4, 7], "thi": [0, 3, 4, 5, 6, 7, 11, 12, 15, 16, 18, 19, 27, 29, 34], "entri": 0, "turn": 0, "problem": [0, 3, 5], "i": [0, 3, 4, 5, 17, 18], "e": [0, 7, 18], "after": 0, "complet": [0, 6, 18], "task": [0, 4, 18], "everyth": 0, "run": [0, 3, 4, 19], "expect": [0, 5, 18], "restart": 0, "kernel": 0, "jupyt": [0, 6, 7, 19], "notebook": [0, 5, 6, 7], "menubar": 0, "select": [0, 6, 7], "click": [0, 6], "visual": [0, 3, 4, 7, 8, 29], "studio": [0, 3, 21], "good": [0, 4], "luck": 0, "ipython": 0, "assert": 0, "version_info": 0, "0": [0, 3, 4, 5, 6, 7, 10, 11, 12, 18], "3": [0, 3, 4, 5, 6, 15, 16, 18, 19, 20, 28, 33], "version": [0, 4], "too": [0, 4], "old": 0, "pleas": [0, 6, 17, 18], "updat": [0, 5, 15, 16], "tutori": [0, 3, 4, 5, 26, 27, 34], "mainli": [0, 3, 5], "base": [0, 3, 4, 5, 6, 7, 18], "build": [0, 5, 6], "scraper": 0, "5": [0, 3, 4, 5, 6, 11, 15, 18], "minut": 0, "natassha": 0, "selvaraj": 0, "document": [0, 3, 6], "In": [0, 3, 4, 5, 6, 17, 18], "learn": [0, 3, 4, 5, 15, 17, 23, 24], "how": [0, 4, 5, 6, 18, 19], "page": [0, 15, 16, 18], "us": [0, 1, 3, 6, 7, 17, 18, 23, 29], "pull": 0, "data": [0, 4, 15, 16, 18, 20, 29], "out": [0, 3, 4, 5, 6, 7, 17, 18], "selector": 0, "gadget": 0, "inspect": [0, 5, 6], "css": [0, 6, 26], "store": [0, 5, 6, 32], "To": [0, 3, 4, 5, 6], "need": [0, 3, 4, 5, 6, 17, 28], "some": [0, 3, 4, 5, 6, 18, 19, 29], "basic": [0, 3, 5, 6, 26], "understand": [0, 4, 18], "googl": [0, 6, 16, 18, 21, 26, 32, 33], "s": [0, 1, 3, 4, 5, 6, 7, 16, 17, 18], "browser": [0, 26], "chrome": [0, 26], "extens": [0, 26], "selectorgadget": [0, 26], "know": [0, 4, 17], "devtool": 0, "more": [0, 3, 5, 6, 7, 15, 18], "about": [0, 3, 5, 6, 15, 17, 18, 26], "follow": [0, 3, 4, 5, 18, 34], "instruct": [0, 4, 5], "pd": [0, 3, 4, 6, 7, 9, 10, 11, 12, 13], "bs4": 0, "beautifulsoup": 0, "first": [0, 4, 5, 6], "we": [0, 1, 3, 4, 5, 6, 7, 17, 19], "fetch": 0, "content": [0, 5, 15, 16, 17, 18, 34], "particular": [0, 4], "return": [0, 3, 5], "respons": [0, 18], "object": [0, 3, 7, 9], "call": [0, 3, 4, 5, 7, 19], "url": [0, 6, 21], "http": [0, 3, 6, 7, 9, 10, 11, 12, 13], "toscrap": 0, "com": [0, 3, 7, 9, 10, 11, 12, 13], "hint": 0, "___": [0, 3, 7, 9, 10, 11, 12, 13], "rais": [0, 3], "check": [0, 17, 18], "wa": [0, 6], "succes": 0, "status_cod": 0, "200": 0, "mean": [0, 3, 5, 6], "ha": [0, 3, 4, 5, 6, 17], "succeed": 0, "yor": 0, "output": [0, 5], "can": [0, 3, 4, 5, 6, 7, 17, 18, 23], "access": [0, 3, 5, 6], "certain": 0, "featur": [0, 6, 18], "header": 0, "etc": [0, 3, 5, 6], "our": [0, 1, 3, 4, 5, 6, 7, 15, 16, 17, 18], "exampl": [0, 1, 3, 5, 6, 7, 29], "onli": [0, 3, 4, 5, 6, 7, 17], "want": [0, 3, 5, 6, 7], "obtain": [0, 1, 3], "therefor": [0, 4, 18], "which": [0, 3, 4, 5, 6, 26], "through": [0, 4, 18], "parser": 0, "give": [0, 5, 18], "repres": [0, 5, 6], "nest": 0, "structur": [0, 3, 4, 6, 34], "print": [0, 3, 4, 5, 6], "prettifi": 0, "next": [0, 4, 5, 7], "take": [0, 3, 4, 5, 6, 15, 16, 18, 29], "look": [0, 3, 4, 5, 6, 15, 16, 29], "wai": [0, 5, 6], "navig": 0, "A": [0, 3, 4, 5, 6, 11, 18], "common": [0, 6], "sinc": [0, 1, 5, 6], "quit": [0, 4], "larg": [0, 3, 4], "don": [0, 1, 3, 4, 6, 18], "t": [0, 1, 3, 4, 5, 6, 18], "actual": 0, "get_text": 0, "show": [0, 3, 4, 5, 6, 7], "string": [0, 6], "parent": 0, "span": 0, "ar": [0, 3, 5, 6, 17, 18, 23], "mani": [0, 3], "div": [0, 6], "previou": [0, 6], "approach": 0, "relev": [0, 7, 23, 26], "inform": [0, 3, 6], "instead": [0, 3], "method": [0, 3, 4, 5, 6, 18], "retriev": 0, "match": [0, 6], "let": [0, 3, 4, 5, 6], "goal": 0, "everi": 0, "row": [0, 3, 5, 6, 7, 9], "should": [0, 3, 4, 6, 17, 18, 34], "contain": [0, 5, 6, 15, 16, 34], "correspond": [0, 3, 4, 5, 11], "review": 0, "class": [0, 3, 5, 6, 17, 18], "regard": [0, 18], "quotes_al": 0, "iter": 0, "new": [0, 5, 6, 7, 17, 19], "arrai": [0, 3, 4, 5], "quotes_text": 0, "top": [0, 3, 5, 6], "provid": [0, 3, 4, 6, 17], "an": [0, 1, 3, 4, 5, 6, 7, 16, 18], "list": [0, 3, 5], "avail": [0, 3, 6], "see": [0, 3, 4, 5, 6, 30], "abov": [0, 3, 6], "final": [0, 5, 18], "loop": [0, 4], "write": [0, 4, 5, 6, 17, 18], "append": 0, "world": [0, 5], "have": [0, 3, 4, 5, 6, 17, 18], "process": [0, 3, 4, 7], "think": [0, 4, 5, 6], "It": [0, 3, 4, 5, 6], "cannot": 0, "chang": [0, 7, 9], "without": [0, 3], "later": [0, 5, 6], "preprocess": 0, "step": [0, 4, 5], "easier": [0, 5], "df_quot": 0, "like": [0, 3, 4, 5, 6, 17, 18], "intermedi": 0, "differ": [0, 3, 5, 6], "emtpti": 0, "mit": [0, 5, 33], "authors_text": 0, "implement": 0, "where": [0, 4, 5, 6], "albert": 0, "einstein": 0, "df_author": 0, "column": [0, 6, 9, 10], "iloc": 0, "left": [0, 3, 4], "join": 0, "combin": [0, 3, 6], "two": [0, 3, 4, 5, 6, 18], "df1": 0, "same": [0, 3, 5, 17], "time": [0, 3, 4, 5, 6, 17, 18], "meta": 0, "multipl": [0, 3], "per": [0, 6], "tags_text": 0, "deep": [0, 4, 5, 15, 18, 24], "thought": [0, 4], "df_tag": 0, "one": [0, 3, 4, 5, 6, 18], "singl": [0, 3, 5, 6], "df2": 0, "site": [0, 3], "total": [0, 9], "ten": 0, "collect": [0, 5, 6, 18], "them": [0, 3, 4, 5, 6], "so": [0, 3, 4, 5, 6, 7, 17, 18], "far": [0, 6], "address": 0, "1": [0, 3, 4, 5, 6, 10, 15, 16, 18, 26, 30], "2": [0, 3, 4, 5, 6, 10, 11, 15, 16, 18, 32], "10": [0, 4, 5, 6, 15], "part": [0, 6, 18], "root": [0, 3, 7, 9, 10, 11, 12, 13], "over": [0, 6, 11], "proce": 0, "number": [0, 3, 4, 5, 6], "variabl": [0, 3, 4, 6, 11], "prepar": [0, 6], "three": [0, 28], "rang": [0, 3, 5], "almost": [0, 4], "end": [0, 3, 4, 7, 12, 18], "__": 0, "str": [0, 3], "findal": 0, "j": 0, "small": [0, 4], "k": 0, "df": [0, 3, 4, 6, 7, 9, 10, 11, 12, 13], "len": [0, 5], "90": [0, 11, 18], "result": [0, 1, 3, 4, 6, 18], "head": [0, 3, 6], "congratul": 0, "successfulli": 0, "choos": [1, 3, 5], "account": 1, "prefer": [1, 3, 17], "english": 1, "tweet": 1, "other": [1, 4, 5, 6, 17], "than": [1, 5, 6, 7, 17], "barack": 1, "obama": 1, "hi": 1, "lectur": [1, 15, 34], "search_recent_tweet": 1, "last": [1, 3], "7": [1, 4, 5, 6, 15, 18], "dai": [1, 18], "includ": [1, 3, 5, 6, 17, 18], "tweet_field": 1, "author_id": 1, "created_at": 1, "retweet": 1, "limit": [1, 3], "maximum": [1, 6, 33], "100": [1, 5, 10, 11, 18], "creat": [1, 3, 4, 6, 7, 8, 10, 17, 18, 19, 20, 23, 24, 29], "panda": [1, 4, 6, 7, 9, 10, 12, 13, 16, 19, 20], "datafram": [1, 3, 4, 6, 7, 10], "save": [1, 3, 6], "csv": [1, 3, 6, 7, 9, 10, 11, 12, 13], "file": [1, 3, 6], "upload": 1, "ipynb": [1, 3], "moodl": [1, 17, 18, 22, 25, 26, 28, 30], "text": [2, 3, 7, 10, 15, 18, 26], "veri": [3, 4, 5], "short": [3, 6], "introduct": [3, 8, 15, 23], "excel": [3, 4, 6, 23, 33], "recommend": 3, "procedur": 3, "On": [3, 19], "machin": [3, 4, 5, 20, 23], "folder": 3, "download": [3, 20, 23, 26, 34], "right": [3, 4, 5], "webpag": 3, "button": [3, 23], "move": 3, "open": [3, 19, 27], "explor": [3, 6], "symbol": 3, "bar": [3, 5, 6, 8], "now": [3, 4, 5, 6], "project": [3, 6, 18], "directori": 3, "intro": [3, 4], "load": [3, 5, 6, 7], "packag": [3, 6], "commun": [3, 18], "agre": 3, "alia": 3, "assum": 3, "standard": [3, 6, 18], "practic": [3, 18], "all": [3, 4, 6, 11, 17, 18, 33], "manual": 3, "tabl": [3, 8], "my_df": 3, "gender": 3, "male": 3, "femal": 3, "tom": 3, "lisa": 3, "peter": 3, "height": [3, 6, 7, 12], "68": [3, 6], "93": 3, "72": [3, 4], "weight": 3, "48": [3, 4], "4": [3, 4, 5, 6, 11, 15, 18, 32], "89": 3, "8": [3, 4, 5, 6, 15], "84": [3, 11, 18], "______": 3, "________": 3, "support": [3, 6, 18], "format": [3, 5, 6, 7, 9, 18], "sourc": [3, 5, 7, 10, 18], "box": [3, 7], "sql": 3, "json": 3, "parquet": 3, "each": [3, 4, 5, 6, 11, 18], "prefix": 3, "read_": 3, "github": [3, 6, 23, 27, 30], "repo": [3, 23, 30], "____": 3, "raw": [3, 7, 9, 10, 11, 12, 13], "githubusercont": [3, 7, 9, 10, 11, 12, 13], "kirenz": [3, 7, 9, 10, 11, 12, 13, 17, 29], "dataset": [3, 5, 6, 7, 9, 10, 11, 12, 13, 29], "master": [3, 7, 9, 10, 11, 12, 13], "style": [3, 6, 26], "read_csv": [3, 7, 10, 12, 13], "to_": 3, "current": [3, 5], "mai": [3, 6, 17], "instal": [3, 19, 20, 26, 28, 34], "openpyxl": 3, "anaconda": [3, 19, 20, 24, 28], "sheet_nam": 3, "people_height": 3, "default": [3, 6, 10, 12], "sheet1": 3, "set": [3, 4, 6, 10], "fals": [3, 5], "spreadsheet": 3, "xlsx": 3, "equival": [3, 4, 6], "read": [3, 4, 6, 18, 20, 34], "read_excel": 3, "would": [3, 4, 6], "reload": 3, "df_new": 3, "_____": 3, "_": [3, 5, 6], "tail": 3, "info": [3, 7], "dtype": [3, 4, 5], "non": 3, "null": 3, "valu": [3, 4, 5, 6, 10, 11, 18], "memori": 3, "usag": 3, "integ": [3, 5], "int64": 3, "float": [3, 4], "float64": 3, "usual": [3, 6], "proporti": 3, "white": 3, "my_nam": 3, "my": [3, 18], "map": [3, 5, 6], "just": [3, 6], "displai": [3, 5, 6, 7], "error": [3, 6], "again": [3, 6], "remov": 3, "spot": [3, 4], "statement": [3, 6], "keyerror": 3, "tell": [3, 5], "found": 3, "axi": [3, 6, 7, 12], "becaus": [3, 5, 6], "begin": [3, 6], "could": [3, 6], "fix": 3, "howev": 3, "regular": 3, "express": 3, "deal": [3, 4], "kind": [3, 6], "onc": [3, 5, 6], "true": [3, 5, 6, 9, 10, 11], "search": 3, "line": [3, 5, 6, 17, 18], "r": 3, "pattern": [3, 4], "explan": 3, "also": [3, 5, 6, 7, 11], "stackoverflow": 3, "python": [3, 4, 6, 7, 19], "treat": [3, 6], "input": [3, 4, 5, 6], "interpret": [3, 5], "plu": [3, 4, 6], "visit": [3, 17], "interact": 3, "tool": 3, "convert": [3, 5, 6], "underscor": 3, "There": [3, 17, 18], "sever": [3, 5], "astyp": [3, 7, 9, 10, 11, 12, 13], "specif": [3, 6, 7], "int32": 3, "catgeori": 3, "to_datetim": 3, "argument": [3, 6], "datetim": 3, "to_timedelta": 3, "timedelta": 3, "to_numer": 3, "numpi": [3, 4, 5], "ndarrai": 3, "cast": 3, "specifi": [3, 4, 6], "possibl": [3, 4, 18], "categori": [3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 18], "social": [3, 15, 21], "blood": 3, "countri": 3, "affili": 3, "observ": 3, "rate": [3, 5, 11], "via": [3, 6], "likert": 3, "scale": [3, 5, 6], "id": [3, 6], "perform": [3, 4, 5, 6], "calcul": [3, 4, 6, 18], "uniqu": 3, "identifi": 3, "transform": [3, 5], "np": [3, 4, 5], "m": [3, 7], "cm": [3, 5], "height_m": 3, "random": 3, "round": [3, 11], "normal": [3, 11, 13], "45": [3, 4, 5, 11, 18], "20": [3, 4], "bodi": [3, 6], "mass": 3, "bmi": 3, "strftime": 3, "todai": 3, "y": [3, 4, 6, 7, 12, 13, 19], "d": [3, 4, 6, 33], "describ": 3, "quick": 3, "transpos": 3, "readabl": 3, "groupbi": 3, "level": [3, 5, 6], "count": [3, 6, 7, 9, 12], "value_count": [3, 10], "sort_valu": 3, "slice": 3, "endpoint": 3, "attribut": [3, 6], "primari": 3, "valid": [3, 6], "For": [3, 4, 6, 15, 16, 17], "cross": [3, 6], "section": [3, 34], "multi": 3, "both": [3, 6], "reduct": 3, "dimens": 3, "scalar": 3, "suit": 3, "order": [3, 6, 7], "pure": 3, "locat": [3, 18], "explicitli": [3, 6], "isin": 3, "refer": [3, 6], "involv": [3, 6, 18], "split": [3, 6], "criteria": 3, "appli": [3, 11, 18], "independ": 3, "cut": 3, "when": [3, 4, 5, 6], "go": [3, 4, 5, 17], "continu": 3, "statu": 3, "associ": 3, "adult": 3, "shown": 3, "18": [3, 4, 5, 6], "underweight": 3, "24": [3, 4, 11, 15], "9": [3, 4, 5, 6, 11, 15, 19], "healthi": 3, "25": [3, 4, 5, 18], "29": [3, 4, 15], "overweight": 3, "30": [3, 4], "obes": 3, "u": 3, "depart": 3, "health": 3, "human": 3, "servic": [3, 17], "discret": 3, "four": [3, 5], "accord": 3, "inf": 3, "indic": [3, 5, 6, 11], "infinit": 3, "bmi_categori": 3, "photo": 4, "credit": 4, "lawrenc": 4, "moronei": [4, 5], "video": [4, 5, 23, 26, 34], "x": [4, 5, 6, 7, 12, 13], "6": [4, 5, 6, 11, 15], "respect": 4, "librari": [4, 5, 6, 7], "lot": [4, 18], "type": [4, 5, 7, 9, 11, 12], "do": [4, 5, 6, 18], "datatyp": 4, "13": [4, 5, 6, 11, 15, 18, 23], "relationship": 4, "between": [4, 5, 6], "As": [4, 5, 6], "might": [4, 6], "notic": [4, 6], "increas": 4, "probabl": [4, 5], "equal": 4, "minu": 4, "someth": 4, "Then": 4, "come": 4, "up": 4, "3x": 4, "That": 4, "exactli": 4, "By": [4, 6, 18], "feed": [4, 5], "abl": [4, 7, 18], "figur": [4, 5], "But": 4, "seaborn": [4, 19], "realtionship": 4, "plot": [4, 5, 6, 7, 8], "scatterplot": [4, 6], "altair": [4, 7, 8, 10, 12, 13, 19, 28, 29], "alt": [4, 6, 7, 10, 12, 13], "warn": [4, 7, 10, 12, 13], "simplefilt": [4, 7, 10, 12, 13], "action": [4, 7, 10, 12, 13], "ignor": [4, 7, 10, 12, 13], "futurewarn": [4, 7, 10, 12, 13], "chart": [4, 8], "mark_point": [4, 6], "encod": [4, 7, 10, 12, 13], "tf": [4, 5], "eas": [4, 7], "framework": 4, "sequenti": [4, 5], "layer": [4, 6, 23], "kera": [4, 5], "f": [4, 5], "__version__": [4, 5], "2023": 4, "01": [4, 5, 6], "12": [4, 5, 6, 10, 11, 15], "14": [4, 11, 15, 18], "33": [4, 24], "57": 4, "109574": 4, "core": [4, 5], "platform": [4, 5], "cpu_feature_guard": [4, 5], "cc": [4, 5], "193": 4, "binari": [4, 5], "optim": [4, 5], "oneapi": [4, 5], "onednn": [4, 5], "cpu": [4, 5], "critic": [4, 5], "oper": [4, 5, 6], "sse4": 4, "avx": 4, "avx2": [4, 5], "fma": [4, 5], "enabl": [4, 5, 10, 12], "rebuild": [4, 5], "appropri": [4, 5, 6, 17, 18, 29], "flag": [4, 5], "11": [4, 5, 6, 11, 15, 18], "simplest": 4, "dens": [4, 5], "neuron": [4, 5, 23], "unit": [4, 5, 6], "shape": [4, 5, 6], "input_shap": [4, 5], "34": 4, "44": 4, "630059": 4, "loss": [4, 5], "mean_squared_error": 4, "stochast": 4, "gradient": 4, "descent": 4, "sgd": 4, "math": [4, 23], "those": [4, 17], "yet": [4, 6], "thei": [4, 5], "comput": [4, 5, 6], "try": [4, 6], "guess": 4, "mayb": 4, "10x": 4, "measur": [4, 5, 32], "against": [4, 5], "known": 4, "badli": 4, "did": 4, "anoth": [4, 17], "tri": 4, "minim": [4, 5], "At": 4, "point": [4, 5, 6], "5x": 4, "while": [4, 6], "still": [4, 6], "pretti": 4, "bad": 4, "closer": [4, 6], "lower": [4, 6], "repeat": [4, 6], "epoch": [4, 5], "ll": [4, 5, 6], "shortli": 4, "infer": [4, 6], "fit": [4, 5], "few": [4, 5], "get": [4, 6], "smaller": 4, "progress": [4, 15, 16], "soon": 4, "done": [4, 6], "extrem": 4, "great": 4, "job": 4, "50": [4, 6, 18], "0s": [4, 5], "258m": 4, "6197": 4, "3m": 4, "1348": 4, "9520": 4, "4m": 4, "35": 4, "3671": 4, "27": 4, "8262": 4, "21": [4, 11, 15, 33], "8933": 4, "17": [4, 6, 15], "2256": 4, "7m": 4, "5532": 4, "5m": 4, "6640": 4, "3909": 4, "6024": 4, "1954": 4, "0884": 4, "2174": 4, "15": [4, 5, 6, 15, 16, 18], "5321": 4, "16": [4, 6, 7, 11, 12, 15], "9930": 4, "5688": 4, "2350": 4, "19": [4, 11, 15], "9725": 4, "7658": 4, "6033": 4, "22": [4, 15], "4754": 4, "23": 4, "3747": 4, "2955": 4, "2332": 4, "26": [4, 15], "1841": 4, "1455": 4, "28": [4, 5, 15], "1151": 4, "0912": 4, "0724": 4, "31": [4, 6, 15, 23], "0576": 4, "32": [4, 24], "0459": 4, "0367": 4, "0294": 4, "0237": 4, "36": 4, "0192": 4, "37": 4, "0156": 4, "38": [4, 5, 11], "0128": 4, "39": 4, "0106": 4, "40": 4, "0088": 4, "41": [4, 11], "0075": 4, "42": 4, "0063": 4, "43": 4, "0055": 4, "0048": 4, "0042": 4, "46": 4, "0038": 4, "47": [4, 11], "0034": 4, "0031": 4, "49": [4, 18], "0028": 4, "0027": 4, "callback": [4, 5], "histori": [4, 5], "0x15f801db0": 4, "been": [4, 6], "predict": 4, "previous": [4, 5], "unknown": 4, "what": [4, 5, 6, 17, 18, 23], "70m": 4, "779314": 4, "why": [4, 23], "high": [4, 5, 6], "six": 4, "close": 4, "necessarili": 4, "recur": 4, "alwai": 4, "certainti": 4, "littl": 4, "bit": 4, "modul": [4, 6, 19, 28], "definit": [4, 6], "verbos": [4, 5], "49m": 4, "521452": 4, "laurenc": 5, "vision": 5, "ml": 5, "tensorflow": [5, 24], "classif": [5, 24], "origin": [5, 6], "view": 5, "org": 5, "neural": [5, 23], "network": [5, 23], "sneaker": 5, "shirt": 5, "api": [5, 6, 7, 15, 18, 27], "helper": 5, "matplotlib": [5, 19], "pyplot": 5, "plt": 5, "fashion": 5, "mnist": 5, "70": [5, 18], "000": 5, "grayscal": 5, "individu": [5, 11, 18], "articl": 5, "low": 5, "resolut": 5, "pixel": [5, 6], "seen": [5, 6], "sampl": 5, "zalando": 5, "licens": 5, "nbsp": 5, "intend": 5, "drop": 5, "replac": [5, 6, 7], "classic": 5, "often": [5, 6], "hello": 5, "program": 5, "handwritten": 5, "digit": [5, 15, 32], "ident": 5, "60": [5, 18], "accur": 5, "directli": [5, 6, 17], "fashion_mnist": 5, "train_imag": 5, "train_label": 5, "test_imag": 5, "test_label": 5, "load_data": 5, "test": 5, "28x28": 5, "255": 5, "label": [5, 6], "These": [5, 18], "trouser": 5, "pullov": 5, "dress": 5, "coat": 5, "sandal": 5, "bag": 5, "ankl": 5, "boot": 5, "class_nam": 5, "If": [5, 6, 11, 17, 18], "pictur": 5, "fall": 5, "imshow": 5, "cmap": 5, "colorbar": 5, "grid": [5, 6], "60000": 5, "likewis": 5, "uint8": 5, "And": 5, "10000": 5, "must": [5, 6, 18], "rememb": [5, 7], "divid": [5, 11], "re": [5, 6], "readi": 5, "figsiz": 5, "subplot": 5, "xtick": 5, "ytick": 5, "xlabel": 5, "requir": [5, 7], "configur": 5, "block": [5, 7], "extract": [5, 6], "represent": 5, "fed": 5, "hopefulli": 5, "meaning": [5, 6], "most": [5, 6, 29], "consist": [5, 6], "chain": 5, "togeth": 5, "simpl": [5, 6, 8], "paramet": [5, 6], "dure": [5, 17, 18], "flatten": 5, "layer1": 5, "128": 5, "relu": 5, "layer2": 5, "dropout": 5, "05": [5, 15], "layer3": 5, "layer4": 5, "2022": 5, "03": [5, 15, 16], "097572": 5, "151": 5, "dimension": 5, "784": 5, "unstack": 5, "reformat": 5, "node": 5, "effect": 5, "els": 5, "pass": [5, 6, 11], "greater": 5, "randomli": 5, "given": [5, 6, 18], "frequenc": 5, "help": [5, 17], "overfit": 5, "logit": 5, "length": 5, "real": [5, 6], "infti": 5, "score": 5, "log": [5, 6], "odd": 5, "belong": 5, "ad": [5, 6, 17, 33], "steer": 5, "direct": 5, "its": [5, 6], "metric": [5, 18], "monitor": 5, "fraction": 5, "correctli": 5, "adam": 5, "sparsecategoricalcrossentropi": 5, "from_logit": 5, "1875": 5, "2s": 5, "798u": 5, "5094": 5, "8222": 5, "1s": 5, "757u": 5, "3856": 5, "8615": 5, "729u": 5, "3480": 5, "8726": 5, "755u": 5, "3237": 5, "8815": 5, "785u": 5, "3076": 5, "8860": 5, "734u": 5, "2933": 5, "8918": 5, "746u": 5, "2816": 5, "8951": 5, "792u": 5, "2726": 5, "8990": 5, "820u": 5, "2615": 5, "9011": 5, "776u": 5, "2540": 5, "9068": 5, "0x7fcaeae206d0": 5, "compar": [5, 11], "ask": [5, 17, 18], "test_loss": 5, "test_acc": 5, "3f": 5, "n": [5, 6, 10, 19], "313": 5, "3213": 5, "8853": 5, "232m": 5, "741u": 5, "885": 5, "321": 5, "less": 5, "gap": 5, "happen": [5, 6], "wors": 5, "unseen": 5, "doe": [5, 6], "memor": 5, "nois": 5, "detail": [5, 6, 15, 17, 18], "neg": 5, "impact": 5, "With": [5, 6], "attach": 5, "softmax": 5, "linear": 5, "percentag": [5, 18], "probability_model": 5, "7214844e": 5, "08": 5, "5939223e": 5, "3246297e": 5, "07": [5, 15], "9636468e": 5, "3148453e": 5, "5520611e": 5, "3073709e": 5, "8532565e": 5, "02": 5, "5230922e": 5, "7491497e": 5, "float32": 5, "confid": 5, "highest": 5, "argmax": 5, "examin": 5, "graph": [5, 29], "full": [5, 6], "def": 5, "plot_imag": 5, "predictions_arrai": 5, "true_label": 5, "img": 5, "predicted_label": 5, "color": [5, 6, 7, 10, 12, 13], "blue": 5, "red": [5, 6], "0f": 5, "max": [5, 6], "plot_value_arrai": 5, "thisplot": 5, "777777": 5, "ylim": 5, "set_color": 5, "0th": 5, "incorrect": 5, "wrong": 5, "even": 5, "num_row": 5, "num_col": 5, "num_imag": 5, "tight_layout": 5, "grab": 5, "batch": 5, "accordingli": 5, "though": [5, 6], "add": [5, 6], "member": 5, "expand_dim": 5, "predictions_singl": 5, "1900232e": 5, "4200392e": 5, "9936157e": 5, "2404726e": 5, "0746501e": 5, "04": [5, 15], "0609104e": 5, "1913306e": 5, "2981963e": 5, "5087393e": 5, "4743935e": 5, "rotat": 5, "curriculum": 6, "jeffrei": 6, "heer": 6, "dominik": 6, "moritz": 6, "jake": 6, "vanderpla": 6, "brock": 6, "craft": 6, "declar": [6, 7], "statist": [6, 7], "vega": [6, 7], "lite": [6, 7], "grammar": 6, "graphic": 6, "frame": 6, "depend": 6, "jupyterlab": 6, "colab": 6, "live": 6, "internet": 6, "connect": [6, 7], "anyth": 6, "otherwis": 6, "built": 6, "around": [6, 18], "regularli": 6, "field": 6, "repositori": 6, "vega_dataset": 6, "car": 6, "five": 6, "miles_per_gallon": 6, "cylind": 6, "displac": 6, "horsepow": 6, "weight_in_lb": 6, "acceler": 6, "year": 6, "chevrolet": 6, "chevel": 6, "malibu": 6, "307": 6, "130": [6, 10], "3504": 6, "1970": 6, "usa": 6, "buick": 6, "skylark": 6, "320": 6, "350": [6, 12], "165": 6, "3693": 6, "plymouth": 6, "satellit": 6, "318": 6, "150": [6, 7, 12], "3436": 6, "amc": 6, "rebel": 6, "sst": 6, "304": 6, "3433": 6, "ford": 6, "torino": 6, "302": 6, "140": 6, "3449": 6, "io": 6, "read_json": 6, "tidi": 6, "averag": 6, "precipit": 6, "precip": 6, "citi": 6, "month": 6, "seattl": 6, "york": 6, "chicago": 6, "apr": 6, "aug": 6, "dec": 6, "87": 6, "94": 6, "58": 6, "62": [6, 11], "98": 6, "56": 6, "fundament": 6, "defin": 6, "gener": [6, 18], "told": 6, "geometr": 6, "mark_": 6, "posit": 6, "separ": 6, "variou": 6, "channel": 6, "kei": 6, "size": [6, 10], "automat": 6, "determin": [6, 18], "case": [6, 33], "nomin": 6, "unord": 6, "categor": 6, "ve": [6, 18], "overlap": 6, "within": 6, "further": 6, "exhibit": 6, "least": 6, "rainiest": 6, "quantit": 6, "titl": [6, 12], "pair": 6, "keyword": 6, "addit": 6, "construct": 6, "syntax": [6, 26], "altern": 6, "interleav": 6, "annot": 6, "b": [6, 33], "o": 6, "ordin": 6, "rank": 6, "q": [6, 10], "numer": 6, "magnitud": 6, "tempor": 6, "date": [6, 15, 16], "explicit": 6, "extern": 6, "skip": 6, "entir": 6, "wish": 6, "rather": [6, 17], "modifi": 6, "find": [6, 18], "allow": 6, "flexibl": 6, "along": 6, "reflect": 6, "realli": 6, "lowest": 6, "mislead": 6, "varieti": [6, 18], "min": 6, "minimum": [6, 33], "median": 6, "stdev": 6, "deviat": 6, "tour": 6, "sort": [6, 12, 13], "filter": 6, "creation": 6, "deriv": 6, "formula": 6, "rectangular": 6, "circular": 6, "mark_bar": [6, 7, 12, 13], "horizont": 6, "vertic": 6, "swap": 6, "choic": [6, 7, 28], "properti": [6, 12], "firebrick": 6, "subsequ": 6, "option": [6, 20, 25], "ax": 6, "legend": [6, 10, 12], "complic": 6, "diagram": 6, "composit": 6, "complex": 6, "mileag": 6, "manufactur": 6, "mark_lin": 6, "augment": 6, "circl": [6, 7], "conveni": 6, "shorthand": 6, "scatter": 6, "invok": 6, "mark_circl": 6, "reus": 6, "mpg": 6, "alongsid": 6, "concaten": 6, "side": 6, "either": 6, "pipe": 6, "hp": 6, "earli": 6, "80": [6, 11, 18], "fuel": 6, "effici": 6, "improv": 6, "decreas": 6, "focu": 6, "facet": 6, "sub": 6, "concis": 6, "templat": [6, 21], "excit": 6, "pan": 6, "zoom": 6, "drag": 6, "scroll": 6, "wheel": 6, "upon": 6, "mous": 6, "hover": 6, "tooltip": 6, "link": [6, 33], "abstract": 6, "bind": 6, "compon": [6, 18], "cover": [6, 26], "upper": 6, "histogram": 6, "opac": 6, "versu": 6, "interv": 6, "affect": 6, "worri": 6, "sens": 6, "aspir": 6, "cours": [6, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "brush": 6, "selection_interv": 6, "condit": 6, "overview": [6, 16, 23, 29], "timeunit": 6, "none": [6, 10, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "labelangl": [6, 7, 12], "angl": [6, 7], "add_select": 6, "width": [6, 7, 12], "400": 6, "vs": 6, "vconcat": 6, "main": 6, "purpos": 6, "conform": 6, "schema": 6, "to_json": 6, "export": 6, "send": 6, "v4": 6, "config": 6, "continuousheight": 6, "300": [6, 7], "continuouswidth": 6, "fdfbb22e8e0e89f6556d8a3b434b0c97": 6, "expand": 6, "similarli": 6, "saw": 6, "earlier": 6, "spell": 6, "perhap": 6, "somewher": 6, "web": [6, 7, 15, 16, 18, 26, 34], "straightforwardli": 6, "emb": 6, "javascript": [6, 7], "stand": 6, "alon": 6, "html": [6, 26], "produc": 6, "spec": 6, "doctyp": 6, "script": 6, "src": 6, "cdn": 6, "jsdelivr": 6, "net": 6, "npm": 6, "vi": 6, "vegaemb": 6, "var": 6, "embedopt": 6, "mode": 6, "embed": 6, "showerror": 6, "el": 6, "innerhtml": 6, "p": 6, "messag": 6, "typo": 6, "consol": 6, "traceback": 6, "throw": 6, "const": 6, "getelementbyid": 6, "catch": 6, "hoorai": 6, "dive": 6, "deeper": 6, "model": [6, 16, 32], "disabl": 7, "restrict": 7, "5000": 7, "data_transform": [7, 10, 12, 13], "disable_max_row": [7, 10, 12, 13], "loan": [7, 9, 10, 11, 12, 13], "homeownership": [7, 9, 10, 11, 12, 13], "application_typ": [7, 9, 10, 11, 12, 13], "var_list": 7, "long": 7, "foo": 7, "placehold": 7, "lt": 7, "c": [7, 33], "hart": 7, "ark_foo": 7, "ncode": 7, "acronym": 7, "mark_plot": 7, "g": 7, "varibl": 7, "chart2": 7, "titleanchor": [7, 12], "adjust": 7, "configure_titl": [7, 12], "fontsiz": [7, 12], "font": [7, 12], "arial": [7, 12], "black": [7, 12], "anchor": [7, 12], "stack": [8, 10, 13], "pie": 8, "conting": 8, "proport": 8, "applic": [9, 11, 26, 27, 28, 34], "crosstab": [9, 11], "margin": [9, 11], "datatransformerregistri": [10, 12], "index": [10, 11], "reset_index": 10, "renam": 10, "inplac": 10, "mortgag": [10, 11], "4789": 10, "rent": [10, 11], "3858": 10, "own": [10, 11, 18], "1353": 10, "theta": 10, "mark_arc": 10, "outerradiu": 10, "mark_text": 10, "radiu": 10, "sum": 11, "76": 11, "joint": 11, "63": 11, "55": [11, 18], "411": 11, "who": 11, "86": 11, "53": 11, "906": 11, "renter": 11, "higher": 11, "peopl": 11, "home": 11, "ascend": 13, "welcom": [15, 16, 17], "big": [15, 16], "analyt": [15, 16, 18, 32], "weekli": [15, 34], "topic": [15, 16], "materi": [15, 34], "semest": [15, 16, 18], "schedul": [15, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "week": [15, 16], "decis": [15, 18], "tree": [15, 18], "cluster": [15, 18], "media": [15, 21], "No": 15, "06": 15, "track": 15, "scrape": [15, 18, 26], "mine": [15, 18], "outlin": 16, "nr": [16, 20, 26, 28, 33], "resourc": [16, 18], "market": [16, 18, 32], "manipul": [16, 20], "question": [17, 18], "feel": [17, 18], "free": [17, 18], "student": [17, 18], "opportun": [17, 18], "everyon": 17, "person": 17, "onlin": 17, "best": [17, 18], "venu": 17, "chanc": 17, "alreadi": 17, "similar": 17, "post": [17, 18], "encourag": 17, "respond": 17, "refrain": 17, "matter": 17, "public": [17, 18], "me": [17, 18], "hdm": [17, 18], "stuttgart": 17, "de": [17, 32], "subject": [17, 18], "beyond": 17, "teach": 17, "team": 17, "instanc": 17, "center": 17, "develop": 17, "offer": 17, "wednesdai": 18, "am": 18, "pm": 18, "room": 18, "108": 18, "lab": 18, "00": 18, "gain": 18, "skill": [18, 32], "analyz": 18, "insight": 18, "evalu": 18, "effort": 18, "report": 18, "outsid": 18, "forum": 18, "email": 18, "reserv": 18, "much": 18, "throughout": 18, "addition": 18, "bring": 18, "laptop": 18, "compris": 18, "dedic": 18, "ae": [18, 34], "concept": [18, 34], "introduc": 18, "submit": 18, "demonstr": 18, "75": 18, "threshold": 18, "96": 18, "91": 18, "95": 18, "85": 18, "79": 18, "74": 18, "65": 18, "69": 18, "64": 18, "59": 18, "54": 18, "tl": 18, "dr": 18, "cheat": 18, "adher": 18, "affirm": 18, "commit": 18, "uphold": 18, "sign": 18, "pledg": 18, "state": 18, "lie": 18, "steal": 18, "endeavor": 18, "conduct": 18, "myself": 18, "honor": 18, "act": 18, "compromis": 18, "regardless": 18, "deliveri": 18, "proper": 18, "citat": 18, "guidanc": 18, "group": 18, "window": 19, "menu": 19, "command": 19, "prompt": 19, "maco": 19, "termin": 19, "leran": 19, "copi": 19, "request": 19, "beautifulsoup4": 19, "syllabu": 20, "softwar": [20, 34], "local": 20, "slide": [20, 21, 23, 24, 31, 32, 33, 34], "back": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "campaign": 21, "builder": 21, "fallstudi": [21, 31, 33], "merchandis": [21, 32], "pivot": [21, 33], "looker": 21, "appoint": [22, 25], "book": [22, 25], "timeslot": [22, 25], "grant": 23, "sanderson": 23, "underli": 23, "until": 23, "openai": 23, "setup": [23, 27], "imag": 24, "w3school": 26, "hyper": 26, "markup": 26, "languag": 26, "cascad": 26, "sheet": 26, "codelab": 26, "accept": [26, 28], "invit": [26, 28], "exercis": [26, 27, 28, 34], "quot": 26, "twitter": 27, "nltk": 28, "wordcloud": 28, "textmin": 28, "viz": 29, "lead": 29, "galleri": 29, "advertis": 29, "streamlit": 30, "homework": [30, 32, 33, 34], "werbeinventar": 31, "avinash": 32, "kaushik": 32, "demo": 32, "konto": 32, "skillshop": 32, "en": 32, "shop": 32, "certif": 32, "f\u00fcr": [32, 33], "fortgeschritten": 32, "facebook": 33, "studi": 33, "kampagn": 33, "daten": 33, "analysieren": 33, "sie": 33, "den": 33, "kampagnendatensatz": 33, "hilf": 33, "von": 33, "oder": 33, "stellen": 33, "die": 33, "ergebniss": 33, "jeweil": 33, "einer": 33, "\u00fcbersicht": 33, "dar": 33, "nennen": 33, "reiter": 33, "wie": 33, "aufgab": 33, "4a": 33, "4b": 33, "bei": 33, "interpretieren": 33, "statistischen": 33, "kennzahlen": 33, "standardabweichung": 33, "beispielhaft": 33, "anhand": 33, "kennzahl": 33, "ein": 33, "plattform": 33, "bspw": 33, "seiteninterakt": 33, "kommentaren": 33, "unterhalb": 33, "der": 33, "tabellen": 33, "angab": 33, "pro": 33, "impressionen": 33, "seiteninteraktionen": 33, "reichweit": 33, "frequenz": 33, "klick": 33, "ctr": 33, "summ": 33, "durchschnitt": 33, "durchschnittlichen": 33, "betr\u00e4g": 33, "mittelwert": 33, "und": 33, "kosten": 33, "eur": 33, "beitragskommentar": 33, "beitragsinterakt": 33, "cpc": 33, "individuellem": 33, "ausgegeben": 33, "betrag": 33, "berechnung": 33, "zu": 33, "individuellen": 33, "klickrat": 33, "individuel": 33, "welch": 33, "kampagnenzielsetzung": 33, "ziel": 33, "dem": 33, "geringsten": 33, "einherg": 33, "attend": 34, "hw": 34, "exam": 34}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"web": 0, "scrape": 0, "python": 0, "beauti": 0, "soup": 0, "request": 0, "panda": [0, 3], "prerequisit": 0, "setup": [0, 5, 7, 9, 10, 11, 12, 13], "websit": 0, "investig": 0, "html": 0, "get": [0, 3, 18], "all": 0, "text": 0, "titl": [0, 7], "hyperlink": 0, "element": 0, "extract": 0, "specif": 0, "find": 0, "find_al": 0, "quot": 0, "author": 0, "tag": 0, "creat": 0, "datafram": 0, "twitter": 1, "api": 1, "applic": [2, 18], "exercis": [2, 18], "first": 3, "step": [3, 6], "import": [3, 5, 6, 7, 9, 10], "data": [3, 5, 6, 7, 9, 10, 11, 12, 13], "creation": 3, "store": 3, "view": [3, 6], "overview": [3, 8, 15, 34], "column": [3, 11], "name": 3, "type": [3, 6], "index": 3, "chang": [3, 6], "simpl": 3, "renam": 3, "trail": 3, "lead": 3, "space": 3, "regex": 3, "replac": 3, "special": 3, "charact": 3, "lowercas": 3, "whitespac": 3, "categor": 3, "string": 3, "add": 3, "new": 3, "constant": 3, "from": 3, "exist": 3, "date": 3, "summari": [3, 4], "statist": 3, "numer": 3, "sort": [3, 7], "select": 3, "By": 3, "label": 3, "loc": 3, "posit": 3, "iloc": 3, "filter": 3, "boolean": 3, "group": 3, "segment": 3, "bin": 3, "tensorflow": 4, "exampl": 4, "neural": 4, "network": 4, "defin": 4, "compil": [4, 5], "train": [4, 5], "us": [4, 5], "model": [4, 5], "classifi": 5, "imag": 5, "cloth": 5, "explor": 5, "preprocess": 5, "set": 5, "up": 5, "layer": 5, "evalu": 5, "accuraci": 5, "make": 5, "predict": 5, "verifi": 5, "introduct": 6, "altair": 6, "render": 6, "weather": 6, "The": 6, "chart": [6, 7, 10, 12, 13], "object": [6, 18], "mark": 6, "encod": 6, "transform": 6, "aggreg": 6, "custom": [6, 7], "visual": 6, "multipl": 6, "interact": 6, "asid": 6, "examin": 6, "json": 6, "output": 6, "publish": 6, "next": 6, "bar": [7, 12, 13], "structur": 7, "correct": [7, 9, 10], "variabl": [7, 10], "list": [7, 10], "analysi": [7, 9], "standard": [7, 13], "properti": 7, "ax": 7, "code": 8, "week": [8, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "5": [8, 29], "conting": [9, 11], "tabl": [9, 11], "pie": 10, "row": 11, "proport": 11, "stack": 12, "faq": 14, "cours": [15, 16, 17, 18], "schedul": 16, "support": 17, "lectur": [17, 18], "discuss": 17, "forum": 17, "email": 17, "academ": [17, 18], "syllabu": 18, "info": 18, "learn": 18, "where": 18, "help": 18, "assess": 18, "exam": 18, "grade": 18, "polici": 18, "integr": 18, "late": 18, "work": 18, "environ": 19, "webscrap": 19, "1": 20, "prepar": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "particip": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "practic": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "perform": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "10": 21, "11": 22, "12": 23, "13": 24, "14": 25, "2": 26, "3": 27, "4": 28, "6": 30, "7": 31, "8": 32, "9": 33}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})