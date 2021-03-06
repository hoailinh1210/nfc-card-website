/* eslint-disable no-undef */
import React from 'react';
import Footer from 'components/Footers/Footer.js';
import Profile from 'components/Profile/Profile.js';

import { getByUsername } from '../services/user';
export default function ProfilePage({ user }) {
  console.log(user);
  return (
    <>
      <main className="profile-page">
        <Profile user={user}></Profile>
        <Footer></Footer>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { username } = params;
  const res = await getByUsername(username);
  const {
    data: { user },
  } = res;
  return { props: { user } };
}
