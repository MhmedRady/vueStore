<template>
  <div
    class="col-md-10 justify-content-start d-flex align-items-center top-search"
  >
    <PolicyHeader />
    <TopSearch />
    <MyaccountInfo />
    <MyCart />
  </div>
</template>

<script>
import PolicyHeader from "@/components/Header/HeaderTop/_Policy_Header.vue";
import TopSearch from "@/components/Header/HeaderTop/_Top_Search.vue";
import MyaccountInfo from "@/components/Header/HeaderTop/_Myaccount_Info.vue";
import MyCart from "@/components/Header/HeaderTop/_MyCart";

export default {
  components: {
    PolicyHeader,
    TopSearch,
    MyaccountInfo,
    MyCart,
  },
};
</script>

<style lang="scss" scoped>
.top-search {
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and(min-width: $minIpad) {
      flex: 0 0 79%;
      max-width: 79%;
  }
}
</style>
