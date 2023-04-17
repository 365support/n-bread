import { COLOR } from "@domains/shared/constants/style";
import { css } from "@emotion/react";
import {
  InputHTMLAttributes,
  forwardRef,
  LegacyRef,
  useLayoutEffect,
  useRef,
} from "react";
import { mergeRefs } from "react-merge-refs";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const inputSytle = css`
  width: 100%;
  height: 40px;
  border: solid 1px ${COLOR.Gray400};
  padding: 0 10px;
  border-radius: 6px;
  &:focus {
    outline: none;
    border: 1px solid ${COLOR.Gray400};
  }
`;

const Input = forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
      if (props.autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return (
      <input ref={mergeRefs([ref, inputRef])} css={inputSytle} {...props} />
    );
  }
);

Input.displayName = "commonInput";

export default Input;
