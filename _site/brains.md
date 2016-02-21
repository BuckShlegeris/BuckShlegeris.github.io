# steps for Marie's brain project

## Step 0: loading CSV files

Make a CSV file with some of the data from one or two of the studies in it. (If I were you, I'd just copy paste some Excel data into a new spreadsheet and then export that as a CSV. You don't need to do _everything_ with automation.)

Your CSV file should look something like this:

    id,name,age,sex,height,study,substudy,brain_file_id
    1,buck,21,m,180,study1,substudy1,123
    2,marie,19,f,160,study1,substudy1,2654
    3,joe,60,m,178,study1,substudy1,134
    4,james,17,m,170,study1,substudy2,2342

First, make a Python program which opens that file and uses the CSV module to save it to a list of dictionaries, so that the data is like this:

    [
    {“id": 1, “name": “buck”, “age”: 21, “sex”: “m”, “height”: 180, “brain_file_id”: 123, 
      "study": "study1", "substudy": "substudy1"},
    ...
    ]

Your program should look something like this

    import csv
    
    def get_average_age(data):
        total = 0
        for subject in data:
            total += subject["age"]
        return total / len(data)
    
    def read_data():
        # read in the data
        # ...
        pass
    
    def main():
        data = read_data()
        
        # now data has all of those dictionaries in it
        
        print(get_average_age(data))
        
    main()


## Step 1: printing

Make a function which takes a list of fields and only prints those fields of the data. For example,

    print_data(data, [“name”,”age”])

prints out 

    buck 21
    marie 19
    joe 60
    james 17

## Step 2: filtering

We want to make a function that you can use like this:

    filter_data(data, minimum_age=30, sex=“f”) # returns all of the data where age is at least 30 and sex is f
    filter_data(data, maximum_age=20, has_depression=true)

The function definition is going to start looking something like this:

    def filter_data(data, **options):
        output = []
        for row in data:
            if is_appropriate(row, options):
                 output.append(row)
        return output
      
    def is_appropriate(row, options):
        if options["sex"] == "f":
            if row["sex"] != "f":
                return False
        
        return True

Implement the `sex` option for men, then `minimum_age` and `maximum_age`.

You should be able to use the `filter_data` and `print_data` functions to print out useful things about your data.

## Step 3: Shitty CLI

You should use the python `input` function to make a script which you can interact with like this:

    $ python `look_at_brains.py`
    What gender do you want to look at? Leave this blank if you don't want a restriction.
    m
    What minimum age do you want? leave blank for none
    
    What maximum age do you want? leave blank for none
    50
    
    
    There are 2 brains which match that:
    
    name, study
    buck, study1
    joe, study2
    
    They have an average age of 34.

## Step 4: make it a Flask app

...

## Step 5: enable brain downloads from the app

...

