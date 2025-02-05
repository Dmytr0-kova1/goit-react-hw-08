import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.content}>
      <Section>
        <Container>
          <h2 className={s.title}>Phone book</h2>
          <div className="flex flex-col gap-5">
            <p className={s.text}>
              The Phone book site is your personal assistant for organization
              and management of contacts, available after a quick and free
              registration. It allows you to easily create, save, edit and
              delete contacts, and quickly find the one you need information by
              name or phone number.
            </p>
            <p className={s.text}>
              By registering on the site «Phone book», you will be able to:
            </p>
            <ul className={s.list}>
              <li>
                Add new contacts: Enter name, phone number, e-mail mail and
                other data for each contact.
              </li>
              <li>
                Store contacts: All your contacts will be securely stored in
                database and available to you at any time after authorization on
                site
              </li>
              <li>
                Edit Contacts: Change any information about a contact, be it
                name, phone number or other data.
              </li>
              <li>
                Delete contacts: Delete unwanted contacts with one click.{" "}
              </li>
              <li>
                Search contacts: Quickly find the contacts you need by name or
                phone number
              </li>
            </ul>
            <p className={s.text}>
              Advantages of using the Phone book website:
            </p>
            <ul className={s.list}>
              <li>
                Convenient and intuitive interface: The site was developed with
                taking into account the needs of users, so it is simple and
                understandable use
              </li>
              <li>
                Data security: Your contacts are securely protected from
                unauthorized access thanks to the registration system and
                authorization
              </li>
              <li>
                Accessibility from any device: You can access the your contacts
                from any device connected to the Internet, after logging into
                your account.
              </li>
              <li>
                Save time: Quick search and editing of contacts allows you save
                time on routine tasks.
              </li>
            </ul>
            <p className={s.text}>
              Sign up for Contact Book now and get a reliable contact management
              tool that`s always at your fingertips.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;
