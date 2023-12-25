import React from 'react'
import { Dropdown,Image, Menu } from 'semantic-ui-react'
export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://www.ersinaydin.com.tr/wp-content/uploads/2022/07/vesikalik-fotograf-2.jpg"/>
           <Dropdown pointing="top left" text='Rabia'>
           <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
           </Dropdown>
        </Menu.Item>
    </div>
  )
}
