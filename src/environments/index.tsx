const getEnvVars = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return {
        firebaseConfig: {
          apiKey: 'AIzaSyC-z-Vc-kz-OF9RjuqddgIYuglFu_flmG0',
          authDomain: 'neoclima-dev.firebaseapp.com',
          projectId: 'neoclima-dev',
          storageBucket: 'neoclima-dev.appspot.com',
          messagingSenderId: '861847865165',
          appId: '1:861847865165:web:a146ec173726ed3dfd9904',
        },
      };
    case 'production':
      return {
        firebaseConfig: {
          apiKey: 'AIzaSyBHqAVwhrNlASI9t8-7DLsCZJGTEGU3Yhs',
          authDomain: 'neoclima-8542a.firebaseapp.com',
          projectId: 'neoclima-8542a',
          storageBucket: 'neoclima-8542a.appspot.com',
          messagingSenderId: '567576532641',
          appId: '1:567576532641:web:f8ffd881bd009df21842e0',
        },
      };

    default:
      return {
        firebaseConfig: {
          apiKey: 'AIzaSyC-z-Vc-kz-OF9RjuqddgIYuglFu_flmG0',
          authDomain: 'neoclima-dev.firebaseapp.com',
          projectId: 'neoclima-dev',
          storageBucket: 'neoclima-dev.appspot.com',
          messagingSenderId: '861847865165',
          appId: '1:861847865165:web:a146ec173726ed3dfd9904',
        },
      };
  }
};

export default getEnvVars();
