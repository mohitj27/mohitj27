import fetch from 'isomorphic-unfetch';
import { API } from '../models';

/**
 * Returns details of the given book from Google Books API.
 * @param isbn ISBN(13) of the book
 */
export const getDetailsForIsbn = async (
  isbn: string,
): Promise<API.ISBNObject> => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
  );
  return await response.json();
};
