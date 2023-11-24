<template>
  <div class="flex justify-center my-16">
    <div v-if="$state.state === 'loading'" class="lds-ripple" role="status">
      <div></div>
      <div></div>
    </div>

    <p v-else-if="$state.state === 'error'" class="text-red font-bold">
      Service is temporarily unavailable
    </p>

    <div v-else-if="$state.state === 'fetched'">
      <table class="shadow-2xl">
        <thead>
          <tr class="bg-green divide-x divide-cold-gray text-white uppercase">
            <th scope="col" class="px-6 py-3">Microservice</th>
            <th scope="col" class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-cold-gray">
          <tr
            v-for="service in $state.services"
            :key="service.name"
            class="bg-white divide-x divide-cold-gray"
          >
            <td class="italic px-6 py-3 text-left" data-id="service-name">{{ service.name }}</td>
            <td class="px-6 py-3 text-center" data-id="service-status">
              {{ statusIcon(service.status) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { serverStatusStore } from '@/stores/serverStatusStore'
import { statusIcon } from '@/utils/StatusIcon.util'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'Service status page'
})
const { $state, fetchStatuses } = serverStatusStore()

statusIcon

fetchStatuses()
</script>

<style scoped>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #16a34a;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
