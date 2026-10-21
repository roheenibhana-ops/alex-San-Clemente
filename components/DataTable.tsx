import type { Source } from "@/lib/market";

export default function DataTable({
  caption,
  head,
  rows,
  source,
}: {
  caption: string;
  head: string[];
  rows: string[][];
  source?: Source;
}) {
  return (
    <figure className="table-figure">
      <div className="table-wrap" tabIndex={0}>
        <table className="data-table">
          <caption>{caption}</caption>
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h} scope="col">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) =>
                  i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>,
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {source && (
        <figcaption>
          Source: <a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a>
        </figcaption>
      )}
    </figure>
  );
}
