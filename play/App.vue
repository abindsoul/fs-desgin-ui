<template>
  <div class="">
    <div>
      <!-- 基础 -->
      <fs-button>default</fs-button>
      <fs-button type="primary">primary</fs-button>
      <fs-button type="success">success</fs-button>
      <fs-button type="warning">warning</fs-button>
      <fs-button type="danger">danger</fs-button>
      <fs-button type="info">info</fs-button>
      <hr>
      <!-- plain -->
      <fs-button plain>plain</fs-button>
      <fs-button type="primary" plain>primary</fs-button>
      <fs-button type="success" plain>success</fs-button>
      <fs-button type="warning" plain>warning</fs-button>
      <fs-button type="danger" plain>danger</fs-button>
      <fs-button type="info" plain>info</fs-button>
      <hr>
      <!-- 圆角 -->
      <fs-button round>round</fs-button>
      <fs-button type="primary" round>primary</fs-button>
      <fs-button type="success" round>success</fs-button>
      <fs-button type="warning" round>warning</fs-button>
      <fs-button type="danger" round>danger</fs-button>
      <fs-button type="info" round>info</fs-button>
      <hr>
      <!-- 圆形 -->
      <fs-button circle>
        <fs-icon icon="search" color="red" />
      </fs-button>
      <fs-button type="primary" circle>
        <fs-icon icon="fa-pen-to-square" />
      </fs-button>
      <fs-button type="success" circle>
        <fs-icon icon="check" />
      </fs-button>
      <fs-button type="warning" circle>
        <fs-icon icon="fa-envelope" />
      </fs-button>
      <fs-button type="danger" circle>
        <fs-icon icon="star" />
      </fs-button>
      <fs-button type="info" circle>
        <fs-icon icon="trash" />
      </fs-button>
    </div>
    <hr>
    <!-- 禁用 -->
    <div>
      <!-- 基础 -->
      <fs-button disabled>default</fs-button>
      <fs-button type="primary" disabled>primary</fs-button>
      <fs-button type="success" disabled>success</fs-button>
      <fs-button type="warning" disabled>warning</fs-button>
      <fs-button type="danger" disabled>danger</fs-button>
      <fs-button type="info" disabled>info</fs-button>
      <hr>
      <!-- plain -->
      <fs-button plain disabled>plain</fs-button>
      <fs-button type="primary" plain disabled>primary</fs-button>
      <fs-button type="success" plain disabled>success</fs-button>
      <fs-button type="warning" plain disabled>warning</fs-button>
      <fs-button type="danger" plain disabled>danger</fs-button>
      <fs-button type="info" plain disabled>info</fs-button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss"></style>