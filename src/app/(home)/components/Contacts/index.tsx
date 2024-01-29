import Link from '@/components/Link';
import SectionTitle from '@/components/SectionTitle';
import { CONTACT_LINKS } from '@/constants';

import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contacts}>
      <SectionTitle text="Contact" num={5} />
      <div>
        <h3>
          Want to discuss a new project? <br /> Get in touch.
        </h3>

        <ul>
          {Object.keys(CONTACT_LINKS).map((category: string, i: number) => (
            <li key={i}>
              <h4>{category}</h4>
              <ul>
                {CONTACT_LINKS[category as keyof typeof CONTACT_LINKS].map(({ label, value }) => (
                  <li key={label}>
                    <Link as="External" href={value}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
