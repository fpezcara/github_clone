function getDateFromString(repo) {
  const index = repo.updated_at.indexOf("T");
  const date = repo.updated_at.substr(0, index);
  return date;
}

export function getDate(repo) {
  const dateString = getDateFromString(repo);
  const d = dateString.split("-");

  const year = d[0];
  const month = d[1];
  const day = d[2];

  return `${day}/${month}/${year}`;
}

