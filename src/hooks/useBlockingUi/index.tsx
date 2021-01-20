import React, { createContext, useState, useContext } from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

interface LoadingContext {
  setBlockingUi(values: { blocking: boolean; message?: string }): void
}

const LoadingContext = createContext<LoadingContext>({} as LoadingContext);

const LoadingProvider: React.FC = ({ children }) => {
  const [blockingUi, setBlockingUi] = useState<{
    blocking: boolean
    message?: string
  }>({ blocking: false, message: '' });
  return (
    <LoadingContext.Provider value={{ setBlockingUi }}>
      <div>
        <BlockUi
          tag="div"
          blockinh={blockingUi.blocking}
          keepInView
          message={blockingUi.message}
        >
          {children}
        </BlockUi>
      </div>
    </LoadingContext.Provider>
  );
};

function useBlockingUi(): LoadingContext {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useBlockingUi must be used within an LoadingProvider');
  }
  return context;
}

export { LoadingProvider, useBlockingUi };
