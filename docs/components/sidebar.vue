<template>
  <nav
    id="bd-docs-nav"
    class="bd-links d-none d-md-block"
    aria-label="Main navigation"
  >
    <nly-link to="/" exact router-tag="div" active-class="active">
      <nly-link to="/" exact class="bd-toc-link" active-class="">Home</nly-link>
    </nly-link>

    <nly-link
      v-for="group in nav"
      :key="group.base"
      :to="buildUrl('/docs/', [group.base])"
      :exact="group.exact"
      router-tag="div"
      class="bd-toc-item"
      active-class="active"
    >
      <nly-link
        :to="buildUrl('/docs/', [group.base])"
        :exact="group.exact"
        class="bd-toc-link"
        active-class=""
      >
        {{ group.title }}
        <b-badge
          v-if="group.new"
          tag="small"
          variant="success"
          class="text-uppercase"
          >New</b-badge
        >
        <b-badge
          v-if="group.breaking"
          tag="small"
          variant="danger"
          class="text-uppercase"
          >Breaking change</b-badge
        >
        <b-badge
          v-if="group.beta"
          tag="small"
          variant="warning"
          class="text-uppercase"
          >Beta</b-badge
        >
      </nly-link>

      <b-nav class="bd-sidenav">
        <nly-link
          v-for="page in group.pages"
          :key="page.title"
          :to="buildUrl('/docs/', [group.base, page.slug])"
          router-tag="li"
          class="nav-item"
          active-class="active bd-sidenav-active"
        >
          <nly-link
            :to="buildUrl('/docs/', [group.base, page.slug])"
            :exact="group.exact"
            class="nav-link"
            active-class=""
          >
            {{ page.title }}
            <b-badge
              v-if="page.new"
              tag="small"
              variant="success"
              class="text-uppercase"
              >New</b-badge
            >
            <b-badge
              v-if="page.enhanced"
              tag="small"
              variant="info"
              class="text-uppercase"
              >Enhanced</b-badge
            >
            <b-badge
              v-if="page.breaking"
              tag="small"
              variant="danger"
              class="text-uppercase"
              >Breaking change</b-badge
            >
            <b-badge
              v-if="page.beta"
              tag="small"
              variant="warning"
              class="text-uppercase"
              >Beta</b-badge
            >
          </nly-link>
        </nly-link>
      </b-nav>
    </nly-link>

    <nly-link to="/play" exact router-tag="div" active-class="active">
      <nly-link to="/play" exact class="bd-toc-link" active-class=""
        >Playground</nly-link
      >
    </nly-link>
  </nav>
</template>

<script>
import { nav } from "~/content";

export default {
  name: "BVSidebar",
  data() {
    return { nav };
  },
  methods: {
    buildUrl(basePath, parts = []) {
      return `${basePath}/${parts.join("/")}`.replace(
        /(https?:\/\/)|(\/)+/g,
        "$1$2"
      );
    }
  }
};
</script>
