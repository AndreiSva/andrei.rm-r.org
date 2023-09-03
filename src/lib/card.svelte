<script>
  export let style;
</script>

<div class="card" style={style}>
  <slot />
</div>

<style>
.card {
  border: 2px solid var(--fg-main-color);
  padding: 20px;
  margin: 10px;
}
</style>
