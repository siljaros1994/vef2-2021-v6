import React, { useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter } from '../../types';

type Props = {
};

/**
 * Hjálpar týpa ef við erum að filtera burt hugsanleg null gildi:
 *
 * const items: T = itemsWithPossiblyNull
 *  .map((item) => {
 *    if (!item) {
 *      return null;
 *    }
 *    return item;
 *  })
 *  .filter((Boolean as unknown) as ExcludesFalse);
 * items verður Array<T> en ekki Array<T | null>
 */
type ExcludesFalse = <T>(x: T | null | undefined | false) => x is T;

export function Characters({ peopleResponse }: Props): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);
  const [hasNextPage, setHasNextPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const fetchMore = async (): Promise<void> => {
    let json;
    // TODO sækja gögn frá /pages/api/characters.ts (gegnum /api/characters), ef það eru fleiri
    // (sjá pageInfo.hasNextPage) með cursor úr pageInfo.endCursor
  };

  return (
    <section className={s.characters}>
      <ul className={s.characters__list}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>

      <Button disabled={loading} onClick={fetchMore}>Fetch more</Button>
    </section>
  );
}
