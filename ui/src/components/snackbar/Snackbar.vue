<template>
  <fragment>
    <snackbarSuccess
      :type-message="message.typeMessage"
    />
    <snackbarError
      :type-message="message.typeMessage"
      :main-content="mainContent[message.typeContent]"
    />
  </fragment>
</template>

<script>

import snackbarSuccess from '@/components/snackbar/SnackbarSuccess';
import snackbarError from '@/components/snackbar/SnackbarError';

export default {
  name: 'Snackbar',

  components: {
    snackbarSuccess,
    snackbarError,
  },

  data() {
    return {
      mainContent: {
        dashboard: 'dashboard',
        notificationList: 'list notification',
        deviceList: 'list device',
        deviceAcess: 'accessing device',
        deviceDelete: 'deleting device',
        deviceListPending: 'list of pending device',
        devicePending: 'pending device',
        deviceAccepting: 'accepting device',
        deviceRejecting: 'rejecting device',
        deviceListRejected: 'list of rejected device',
        deviceDetails: 'details device',
        deviceRename: 'rename device',
        sessionList: 'list session',
        sessionClose: 'close session',
        sessionPlay: 'play session',
        sessionDetails: 'details session',
        firewallRuleList: 'list of firewall rule',
        firewallRuleCreating: 'creating rule',
        firewallRuleEditing: 'editing rule',
        firewallRuleDeleting: 'deleting rule',
      },
    };
  },

  computed: {
    message() {
      return this.$store.getters['modals/SnackbarMessageAndContentType'];
    },
  },
};

</script>
