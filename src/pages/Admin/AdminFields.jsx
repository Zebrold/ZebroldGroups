/**
 * Field renderers for /admin. Every field is controlled: it reads `value` and
 * reports the next value through `onChange`, so the editor holds one content
 * object and nothing edits in place.
 */
import { useId, useRef, useState } from 'react';
import { imageLibrary, resolveImage } from '../../content/images';

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
];

/* ══ i18n helpers ══ */

function i18nValue(value, code) {
  return (value && typeof value === 'object' ? value[code] : '') ?? '';
}

function setI18n(value, code, next) {
  return { ...(value && typeof value === 'object' ? value : {}), [code]: next };
}

/* ══ Uploads ══ */

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
    reader.onerror = () => reject(new Error('Could not read that file.'));
    reader.readAsDataURL(file);
  });
}

function UploadButton({ kind, accept, upload, onDone, children }) {
  const input = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const pick = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setBusy(true);
    setError('');
    try {
      const data = await fileToBase64(file);
      const result = await upload({ kind, filename: file.name, data });
      onDone(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button type="button" className="adm-btn adm-btn--ghost" disabled={busy} onClick={() => input.current?.click()}>
        {busy ? 'Uploading…' : children}
      </button>
      <input ref={input} type="file" accept={accept} hidden onChange={pick} />
      {error && <p className="adm-fieldError">{error}</p>}
    </>
  );
}

/* ══ Individual field types ══ */

function ImageField({ value, onChange, upload }) {
  const preview = resolveImage(value);
  return (
    <div className="adm-image">
      <div className="adm-image__preview">
        {preview ? <img src={preview} alt="" /> : <span className="adm-image__empty">No image</span>}
      </div>
      <div className="adm-image__controls">
        <select value={imageLibrary.some((i) => i.name === value) ? value : ''} onChange={(e) => onChange(e.target.value)}>
          <option value="">— choose from the photo library —</option>
          {imageLibrary.map((img) => (
            <option key={img.name} value={img.name}>
              {img.name}
            </option>
          ))}
        </select>
        <div className="adm-image__row">
          <UploadButton
            kind="image"
            accept="image/jpeg,image/png,image/webp,image/avif"
            upload={upload}
            onDone={(r) => onChange(r.path)}
          >
            Upload a photo
          </UploadButton>
          <input
            type="text"
            className="adm-image__path"
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="file name or /uploads/… path"
          />
        </div>
        <p className="adm-hint">JPG, PNG, WebP or AVIF, up to 3 MB.</p>
      </div>
    </div>
  );
}

function PdfField({ item, onPatch, upload }) {
  return (
    <div className="adm-pdf">
      {item.href ? (
        <a className="adm-pdf__current" href={item.href} target="_blank" rel="noreferrer">
          {item.filename || item.href}
        </a>
      ) : (
        <span className="adm-pdf__empty">No file attached</span>
      )}
      <UploadButton
        kind="pdf"
        accept="application/pdf"
        upload={upload}
        onDone={(r) => onPatch({ href: r.path, filename: r.filename })}
      >
        {item.href ? 'Replace PDF' : 'Upload a PDF'}
      </UploadButton>
      <p className="adm-hint">PDF, up to 3 MB.</p>
    </div>
  );
}

function TagsField({ value, onChange }) {
  return (
    <div className="adm-i18n">
      {LANGS.map((lang) => {
        const list = (value && typeof value === 'object' ? value[lang.code] : null) || [];
        return (
          <label key={lang.code} className="adm-i18n__cell">
            <span className="adm-i18n__lang">{lang.label}</span>
            <textarea
              rows={3}
              value={list.join('\n')}
              onChange={(e) =>
                onChange({
                  ...(value && typeof value === 'object' ? value : {}),
                  [lang.code]: e.target.value
                    .split('\n')
                    .map((t) => t.trim())
                    .filter(Boolean),
                })
              }
            />
          </label>
        );
      })}
    </div>
  );
}

function I18nField({ field, value, onChange }) {
  const rows = field.type === 'i18nBody' ? 12 : field.type === 'i18nArea' ? 3 : 0;
  return (
    <div className="adm-i18n">
      {LANGS.map((lang) => (
        <label key={lang.code} className="adm-i18n__cell">
          <span className="adm-i18n__lang">{lang.label}</span>
          {rows ? (
            <textarea rows={rows} value={i18nValue(value, lang.code)} onChange={(e) => onChange(setI18n(value, lang.code, e.target.value))} />
          ) : (
            <input type="text" value={i18nValue(value, lang.code)} onChange={(e) => onChange(setI18n(value, lang.code, e.target.value))} />
          )}
        </label>
      ))}
    </div>
  );
}

/* ══ Dispatcher ══ */

export default function Field({ field, item, onPatch, upload }) {
  const id = useId();
  const value = item[field.key];
  const set = (next) => onPatch({ [field.key]: next });

  let control;
  switch (field.type) {
    case 'bool':
      return (
        <div className="adm-field adm-field--bool">
          <label className="adm-check">
            <input type="checkbox" checked={Boolean(value)} onChange={(e) => set(e.target.checked)} />
            <span>{field.label}</span>
          </label>
          {field.hint && <p className="adm-hint">{field.hint}</p>}
        </div>
      );

    case 'select':
      control = (
        <select id={id} value={value ?? ''} onChange={(e) => set(e.target.value)}>
          {field.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
      break;

    case 'number':
      control = (
        <input
          id={id}
          type="number"
          min={field.min}
          max={field.max}
          value={value ?? ''}
          onChange={(e) => set(e.target.value === '' ? '' : Number(e.target.value))}
        />
      );
      break;

    case 'date':
      control = <input id={id} type="date" value={value ?? ''} onChange={(e) => set(e.target.value)} />;
      break;

    case 'slug':
      control = (
        <input
          id={id}
          type="text"
          className="adm-mono"
          value={value ?? ''}
          onChange={(e) => set(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+/, ''))}
        />
      );
      break;

    case 'image':
      control = <ImageField value={value} onChange={set} upload={upload} />;
      break;

    case 'pdf':
      control = <PdfField item={item} onPatch={onPatch} upload={upload} />;
      break;

    case 'i18nTags':
      control = <TagsField value={value} onChange={set} />;
      break;

    case 'i18n':
    case 'i18nArea':
    case 'i18nBody':
      control = <I18nField field={field} value={value} onChange={set} />;
      break;

    default:
      control = <input id={id} type="text" value={value ?? ''} onChange={(e) => set(e.target.value)} />;
  }

  const labelled = ['i18n', 'i18nArea', 'i18nBody', 'i18nTags', 'image', 'pdf'].includes(field.type);

  return (
    <div className="adm-field">
      {labelled ? (
        <span className="adm-label">{field.label}</span>
      ) : (
        <label className="adm-label" htmlFor={id}>
          {field.label}
        </label>
      )}
      {control}
      {field.hint && <p className="adm-hint">{field.hint}</p>}
    </div>
  );
}
