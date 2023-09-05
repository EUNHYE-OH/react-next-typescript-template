import { defineConfig } from "cypress";
import { some, every } from "lodash";
import { unlinkSync } from "fs";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("after:spec", (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = some(results.tests, (test) =>
            some(test.attempts, { state: "failed" }),
          );
          const passed = every(results.tests, (test) =>
            every(test.attempts, { state: "pending" }),
          );
          if (!failures && !passed) {
            // delete the video if the spec passed and no tests retried
            unlinkSync(results.video);
          }
        }
      });
      return config;
    },
  },
});
