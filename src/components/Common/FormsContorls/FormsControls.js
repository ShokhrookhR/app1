import s from './FormsControls.module.css';
// import './FormsControls.module.css';
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span className={s.formControl}>{meta.error}</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div>
      <div className={s.formControl + '' + (hasError ? s.error : '')}>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
