import { forwardRef, useImperativeHandle, useRef } from 'react';

interface IProps {
  setChangeImage(image: string | ArrayBuffer | null): void
}

export interface RefPropsPickerImg {
  openChangeImage(): void
}

const PickerImage: React.ForwardRefRenderFunction<RefPropsPickerImg, IProps> = (
  { setChangeImage },
  ref
) => {
  const refInput = useRef<HTMLInputElement>(null);

  const openChangeImage = () => refInput.current?.click();

  useImperativeHandle(ref, () => ({
    openChangeImage
  }));

  return (
    <input
      ref={refInput}
      type="file"
      accept="image/x-png,image/jpeg,image/gif"
      capture="camera"
      style={{
        width: 1,
        height: 1,
        opacity: 0,
        position: 'absolute',
        overflow: 'hidden',
        zIndex: -1
      }}
      onChange={event => {
        const { target } = event;
        const { files } = target;
        if (files && files[0]) {
          const reader = new FileReader();
          reader.readAsDataURL(files[0]);

          reader.onload = e => {
            if (e && e.target) {
              setChangeImage(e.target.result);
            }
          };
        }
      }}
    />
  );
};

export default forwardRef(PickerImage);
