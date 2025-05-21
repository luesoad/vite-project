<script>
import { Router, Route } from "svelte5-router";
import PublicLayout from "./layout/public_layout.svelte";
import Index from "./routes/index.svelte";
import About from "./routes/about.svelte";
import Press from "./routes/press.svelte";
import Live from "./routes/live.svelte";
import Impressum from "./routes/impressum.svelte";
import Listen from "./routes/listen.svelte";
import Privacy from "./routes/privacy.svelte";
</script>

<Router>
  <Route path="/" component={Index} layout={PublicLayout} />
  <Route path="/about" component={About} layout={PublicLayout} />
  <Route path="/press" component={Press} layout={PublicLayout} />
  <Route path="/live" component={Live} layout={PublicLayout} />
  <Route path="/impressum" component={Impressum} layout={PublicLayout} />
  <Route path="/listen" component={Listen} layout={PublicLayout} />
  <Route path="/privacy" component={Privacy} layout={PublicLayout} />
</Router>
