interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  notRender?: boolean;
  type: 'text' | 'email' | 'password';
  changeValue: (newValue: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.notRender ? null : (
    (
      <div className={`flex flex-col`}>
        <label>
          <input 
            type={props.type ?? 'text'}        
            value={props.value} 
            onChange={e => props.changeValue?.(e.target.value)}  
            required={props.required}     
          />
        </label>
      </div>
    )
  )
}