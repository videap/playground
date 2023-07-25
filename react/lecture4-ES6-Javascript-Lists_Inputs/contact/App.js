import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, ScrollView, SectionList } from 'react-native';
import { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.styles = StyleSheet.create({
      container: {
        flex:0,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center'
      },
      title: {
        fontSize: 45,
        backgroundColor: '#7D75CA',
        width: Dimensions.get("window").width,
        textAlign: 'center'

      },
      header: {
        fontSize: 25,
        backgroundColor: '#7D75CA',
        width: Dimensions.get("window").width,
        textAlign: 'left'

      },
      container_contacts: {
        // marginTop: 50,
        // justifyContent: 'center'
      },
      contact: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 10
      }
    });

    this.contacts = []

    this.firstNames = [
      "Sophia", "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Isabella", "William",
      "Mia", "James", "Sophie", "Benjamin", "Amelia", "Lucas", "Harper", "Alexander", "Evelyn", "Henry",
      "Abigail", "Michael", "Emily", "Daniel", "Elizabeth", "Logan", "Mila", "Matthew", "Ella", "Jackson",
      "Scarlett", "Sebastian", "Avery", "Aiden", "Grace", "David", "Sofia", "Joseph", "Camila", "Samuel",
      "Aria", "Carter", "Chloe", "Owen", "Eleanor", "Wyatt", "Luna", "John", "Layla", "Jack", "Penelope",
      "Lucy", "Luke", "Nora", "Grayson", "Zoe", "Levi", "Hannah", "Isaac", "Zara", "Gabriel", "Violet",
      "Caleb", "Addison", "Benjamin", "Aubrey", "Eli", "Hailey", "Ryan", "Natalie", "Henry", "Stella",
      "Isaiah", "Skylar", "Samuel", "Paisley", "Andrew", "Savannah", "Julian", "Bella", "Josiah", "Hazel",
      "Anthony", "Maya", "Dominic", "Aaliyah", "Leo", "Ellie", "Adam", "Samantha", "Nathan", "Eva"
    ];

    this.lastNames = [
      "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Taylor", "Anderson",
      "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark",
      "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez",
      "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts",
      "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris",
      "Perry", "Price", "Powell", "Ramirez", "Reed", "Reyes", "Rice", "Riley", "Rivera", "Ruiz",
      "Russell", "Ryan", "Sanchez", "Sanders", "Scott", "Sellers", "Shaw", "Simpson", "Sims", "Smith",
      "Snyder", "Soto", "Spencer", "Stevens", "Stone", "Sullivan", "Taylor", "Thomas", "Thompson", "Torres",
      "Tucker", "Turner", "Valdez", "Vargas", "Vasquez", "Wade", "Wagner", "Walker", "Wallace", "Ward",
      "Warren", "Watkins", "Watson", "Weaver", "Webb", "Weber", "Welch", "Wells", "West", "Wheeler"
    ];

  }

  create_contacts = () => {
    let fullnames = []

    for (const firstName of this.firstNames) {
      for (const lastName of this.lastNames) {
        fullnames.push(`${firstName} ${lastName}`)
      }
    }

    fullnames = fullnames.sort()
    // console.log(fullnames)

    this.contacts = this.contacts_data(fullnames)

    this.forceUpdate()
  }

  contacts_data = (fullnames) => {

    const organized_contacts = {}

    for (const name of fullnames) {
      if ( organized_contacts[name[0].toUpperCase()] == undefined ) {
        organized_contacts[name[0].toUpperCase()] = [name]
      } else {
        organized_contacts[name[0].toUpperCase()] = [...organized_contacts[name[0].toUpperCase()], name]
      }
    }

    const data = []

    for (const section in organized_contacts) {
      data.push({
        title: section,
        data: organized_contacts[section]
      })
    }

    console.log(data)
    return data
  }

  render() {
    return (
      <View style={this.styles.container}>
        <StatusBar style="auto" />

        <View>
          <Text style={this.styles.title}>CONTACTS</Text>
        </View>

        <Button title="Create Contacts" onPress={ this.create_contacts }/>
        <SectionList
          sections={this.contacts}
          renderItem={({item}) => <Text style={this.styles.contact}>{item}</Text>}
          keyExtractor={ (item,index) => item + index }
          renderSectionHeader={({section: {title}}) => (
            <Text style={this.styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }
}
