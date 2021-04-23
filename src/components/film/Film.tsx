import Link from 'next/link';

import s from './Film.module.scss';

type Props = {

};

export function Film({  }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {`Episode ${film.episodeID}: ${film.title}`}
      </h2>
    </section>
  );
}
