import { Takeover } from '@/types/takeover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type TakeoverDetailModalProps = {
  takeover: Takeover | null;
  onClose: () => void;
};

export const TakeoverDetailModal = ({ takeover, onClose }: TakeoverDetailModalProps) => {
  if (!takeover) return null;

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="takeover-modal-title">
      <div
        className="bg-background-secondary rounded-lg border border-accent/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <header className="flex justify-between items-center border-b border-accent/20 pb-4 mb-4">
          <div>
            <h2 id="takeover-modal-title" className="text-3xl font-bold text-primary">
              {takeover.name}
            </h2>
            <p className="font-semibold text-text/60">{takeover.takeoverAbility}</p>
          </div>
          <button
            onClick={onClose}
            className="text-text/80 hover:text-primary transition-colors cursor-pointer"
            aria-label="Close modal">
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </header>

        <p className="text-text/80 mb-6">{takeover.description}</p>

        <div className="overflow-x-auto rounded-lg border border-accent/20">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-background">
              <tr>
                <th className="p-3 font-bold text-text">Attribute</th>
                <th className="p-3 font-bold text-center text-text">Rating</th>
                <th className="p-3 font-bold text-center text-text">L1</th>
                <th className="p-3 font-bold text-center text-text">L2</th>
                <th className="p-3 font-bold text-center text-text">L3</th>
                <th className="p-3 font-bold text-center text-text">L4</th>
                <th className="p-3 font-bold text-center text-text">L5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent/10">
              {takeover.attributes.map((attr) => (
                <tr key={attr.name} className="[&:nth-child(even)]:bg-background-secondary/40">
                  <td
                    className={`p-2 font-semibold ${
                      attr.isRequirement
                        ? 'bg-green-800/40 text-green-300'
                        : 'bg-blue-800/40 text-blue-300'
                    }`}>
                    {attr.name}
                  </td>
                  <td className="p-2 text-center font-mono text-text">
                    {/* Display '—' for base 25 ratings, otherwise show the number */}
                    {attr.rating === 25 ? '—' : attr.rating}
                  </td>
                  {attr.boosts.map((boost, i) => (
                    <td key={i} className="p-2 text-center font-mono text-text">
                      {boost > 0 ? `+${boost}` : boost}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
