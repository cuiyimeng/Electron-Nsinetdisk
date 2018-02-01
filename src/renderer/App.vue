<template>
  <div class="page-container">

    <md-app md-waterfall md-mode="overlap" md-theme="md-card-name">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title"> {{ $route.name }} </span>

          <div class="md-toolbar-section-end">

            <md-menu md-size="big" md-direction="bottom-end">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item>
                  <span>最小化</span>
                  <md-icon>arrow_drop_down</md-icon>
                </md-menu-item>

                <md-menu-item>
                  <span>设置</span>
                  <md-icon>settings</md-icon>
                </md-menu-item>
              </md-menu-content>
            </md-menu>

          </div>

        </div>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">

        <md-card-media-cover md-solid>
          <md-card-media md-ratio="4:3">
            <img src="/static/images/menu.jpg" alt="Skyscraper">
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <span class="md-title">{{ userName }}</span>
              <span class="md-subhead">NSI - NetDisk - NG</span>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>

        <md-list>
          <md-list-item v-for="(arr, index) in $customRoute" :key="index" @click="$router.push(arr.path)">
            <md-icon> {{ arr.icon }}</md-icon>
            <span class="md-list-item-text"> {{ arr.name }} </span>
          </md-list-item>
        </md-list>

      </md-app-drawer>

      <md-app-content>
        <router-view>
        </router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data: () => ({
    userName: 'likai',
    menuVisible: false
  }),
  watch: {
    '$route.path': function (params) {
      this.menuVisible = false
    }
  }
}
</script>

<style lang="scss">
.md-app {
  height: 100vh;
}
.md-app {
  max-height: 100vh;
}
.md-app-toolbar {
  height: 196px;
}
// Nav Width
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-app-content {
  min-height: 40vh;
}
// Theme Engine
@import "~vue-material/dist/theme/engine";
@include md-register-theme("md-card-name", (
  primary: md-get-palette-color(blue, 500),
  accent: md-get-palette-color(pink, 500)
));
@import "~vue-material/dist/theme/all";
</style>

<style>
/* 修复控制栏闪动 */
.md-app.md-fixed-last .md-app-toolbar,
.md-app.md-flexible .md-app-toolbar,
.md-app.md-overlap .md-app-toolbar,
.md-app.md-reveal .md-app-toolbar {
  position: fixed;
  top: 0;
}
.mainPage {
  position: relative;
  animation-name: example;
  animation-duration: 0.7s;
  animation-fill-mode: both;
}
@keyframes example {
  0% {
    top: 300px;
  }
  100% {
    top: 0px;
  }
}
/* 禁止选中 */
body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
