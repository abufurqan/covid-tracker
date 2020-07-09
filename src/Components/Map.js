import React from 'react';

import styles from './Map.module.css';

function Map() {

  return (
  <div className={styles.mapwrapper}>
    <iframe className={styles.googlemap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.5308060035136!2d117.35438321523937!3d-34.968366780366615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a3965f14a66dfc3%3A0xeb20e216996138d!2!5e0!3m2!1sen!2sus!4v1457941155424"
    frameBorder="0" allowFullScreen>
    </iframe>
  </div>
);
}

export default Map;