import React from "react";

let contacts = [
  {
    id: 1,
    name: 'Tom	Armstrong',
    phoneNumber: '+16176191138',
    photo: 'img/boy.png'
  },
  {
    id: 2,
    name: 'Susie	Burke',
    phoneNumber: '+17182029509',
    photo: 'img/woman.png'
  },
  {
    id: 3,
    name: 'Stewart	Butler',
    phoneNumber: '+12693972131',
    photo: 'img/boy(1).png'
  },
  {
    id: 4,
    name: 'Fannie	Craig',
    phoneNumber: '+17063440849',
    photo: 'img/woman(1).png'
  },
  {
    id: 5,
    name: 'Eduardo	Welch',
    phoneNumber: '+13475671471',
    photo: 'img/boy(2).png'
  },
  {
    id: 6,
    name: 'Anna	Bailey',
    phoneNumber: '+16318403631',
    photo: 'img/woman(2).png'
  },
  {
    id: 7,
    name: 'Sammy	Howell',
    phoneNumber: '+17347954003',
    photo: 'img/man.png'
  },
  {
    id: 8,
    name: 'Rose	Lindsey',
    phoneNumber: '+16784470324',
    photo: 'img/woman(3).png'
  },
  {
    id: 9,
    name: 'Claude	Morrison',
    phoneNumber: '+19295909249',
    photo: 'img/man(1).png'
  },
  {
    id: 10,
    name: 'Hattie	Ray',
    phoneNumber: '+18458726313',
    photo: 'img/woman(4).png'
  },
]

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <img src={this.props.photo} alt="" className="contact__image" />
        <div className="contact__info">
          <div className="contact__name">{this.props.name}</div>
          <div className="contact__phone">{this.props.phoneNumber}</div>
        </div>
      </div>
    )
  }
}

class ContactsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayedContacts: contacts
    }

    this.contactSearch = this.contactSearch.bind(this)
  }

  contactSearch(e) {
    let searchQuery = e.target.value.toLowerCase();
    let displayedContacts = contacts.filter((el) => {
      let searchVal = el.name.toLowerCase();
      return searchVal.indexOf(searchQuery) !== -1;
    });
    this.setState({
      displayedContacts: displayedContacts
    })
  }

  render() {
    return (
      <section>
        <div className="container">
          <div  className="contacts-block">
            <input type="text" className="contacts-search__input" placeholder="Enter contact for search..." onChange={this.contactSearch}/>
            <div className="contacts-list">
              {
                this.state.displayedContacts.map((el) => {
                  return <Contact
                    key={el.id}
                    name={el.name}
                    phoneNumber={el.phoneNumber}
                    photo={el.photo}
                  />
                })
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactsList;
