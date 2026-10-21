import DataTable from "./DataTable";
import Inline from "./Inline";
import { mapsUrl, type Section } from "@/lib/places";

export default function GuideSection({ s }: { s: Section }) {
  return (
    <>
      <h2>{s.h}</h2>
      {s.text && <p><Inline text={s.text} /></p>}
      {s.paras?.map((t) => <p key={t}><Inline text={t} /></p>)}
      {s.list && <ul>{s.list.map((t) => <li key={t}><Inline text={t} /></li>)}</ul>}
      {s.table && <DataTable caption={s.table.caption} head={s.table.head} rows={s.table.rows} />}
      {s.places && (
        <div className="place-grid">
          {s.places.map((p) => (
            <div className="place" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.note}</p>
              <a className="link-arrow" href={mapsUrl(p.name)} target="_blank" rel="noopener noreferrer">View on map →</a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
