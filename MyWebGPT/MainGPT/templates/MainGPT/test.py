import json
data = { "name": "John", "age": 30, "city": "New York" }
with open("data.json", "w") as write_file:
    json.dump(data, write_file)

    