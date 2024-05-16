import csv
import json


def convert_to_float(value):
    try:
        value_with_dot_decimal = value.replace(',', '.')
        return float(value_with_dot_decimal)
    except ValueError:
        return value



def csv_to_json(csv_file_path, json_file_path, delimiter=';', key_mapping=None):
    data = []
    
    with open(csv_file_path, mode='r', newline='', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=delimiter)
        
        for row in csv_reader:
          row = {key_mapping.get(k, k): v for k, v in row.items()}
          row["precoContratual"] = convert_to_float(row['precoContratual'])

          data.append(row)
    
    return data

# Specify the file paths
csv_file_path = 'contratos2024.csv'
json_file_path = 'contratos2024.json'

# Specify key name changes (if any)
key_mapping = {
    'idcontrato': '_id'
}

# Convert CSV to JSON with custom delimiter and key mapping
json_output = csv_to_json(csv_file_path, json_file_path, delimiter=';', key_mapping=key_mapping)

with open(json_file_path, mode='w', encoding='utf-8') as json_file:
  json.dump(json_output, json_file, indent=2, ensure_ascii=False)
