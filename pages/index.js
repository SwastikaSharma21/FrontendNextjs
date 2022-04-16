import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function Home({ events }) {
 
  return (
    <div className={styles.container}>
      <Layout>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>No events to show</h3>}

        {events.map((evt) => {
          return <EventItem key={evt.id} evt={evt} />
        })}

      </Layout>
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch (`${API_URL}/api/events`) ;
  const events = await res.json() ;
  console.log (events) ;
  return {
    props: { events },
  }
}
