<script setup>
const checkout = ()=>{
  throw new Error("checkout is not implemented ")
  // alert("checking out items!");
}
</script>

<template>
  <div>
    <h1 class="text-4xl">Home</h1>

    <button @click="checkout">checkout</button>
  </div>
</template>
~