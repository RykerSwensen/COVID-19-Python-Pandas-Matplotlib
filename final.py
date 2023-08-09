import pandas

# find out if they want Idaho or USA covid-19 data
file_selection = input("What file would you like to open? (Idaho or USA?): ")
def read_csv():
    if file_selection == "Idaho":
        df = pandas.read_csv('idaho-history.csv')
        print(df)
    else:
        df = pandas.read_csv('national-history.csv')
        print(df)
read_csv()