const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'domcontentloaded'
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    cookiesFragment: './fragments/cookies.js',
    navigationFragment: './fragments/navigation.js',
    offerSearchFragment: './fragments/offerSearch.js',
    footerFragment: './fragments/footer.js',
    aboutPage: './pages/about.js',
    responsibleGamingPage: './pages/responsibleGaming.js',
    termsAndConditionsPage: './pages/termsAndConditions.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'cjs-training'
}