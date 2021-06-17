"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProvider = exports.ENV_IMDS_DISABLED = void 0;
const credential_provider_env_1 = require("@aws-sdk/credential-provider-env");
const credential_provider_imds_1 = require("@aws-sdk/credential-provider-imds");
const credential_provider_ini_1 = require("@aws-sdk/credential-provider-ini");
const credential_provider_node_identity_1 = require("@aws-sdk/credential-provider-node-identity");
const credential_provider_process_1 = require("@aws-sdk/credential-provider-process");
const credential_provider_sso_1 = require("@aws-sdk/credential-provider-sso");
const property_provider_1 = require("@aws-sdk/property-provider");
const shared_ini_file_loader_1 = require("@aws-sdk/shared-ini-file-loader");
exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * SSO credentials from token cache
 *   * Web identity token credentials
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromSSO                 The function used to source credentials from
 *                              resolved SSO token cache
 * @see fromTokenFile           The function used to source credentials from
 *                              token file
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromProcess             The function used to sources credentials from
 *                              credential_process in INI files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
const defaultProvider = (init = {}) => {
    const options = { profile: process.env[credential_provider_ini_1.ENV_PROFILE], ...init };
    if (!options.loadedConfig)
        options.loadedConfig = shared_ini_file_loader_1.loadSharedConfigFiles(init);
    const providers = [
        credential_provider_sso_1.fromSSO(options),
        credential_provider_ini_1.fromIni(options),
        credential_provider_process_1.fromProcess(options),
        credential_provider_node_identity_1.fromTokenFile(options),
        remoteProvider(options),
    ];
    if (!options.profile)
        providers.unshift(credential_provider_env_1.fromEnv());
    const providerChain = property_provider_1.chain(...providers);
    return property_provider_1.memoize(providerChain, (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000, (credentials) => credentials.expiration !== undefined);
};
exports.defaultProvider = defaultProvider;
const remoteProvider = (init) => {
    if (process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]) {
        return credential_provider_imds_1.fromContainerMetadata(init);
    }
    if (process.env[exports.ENV_IMDS_DISABLED]) {
        return () => Promise.reject(new property_provider_1.ProviderError("EC2 Instance Metadata Service access disabled"));
    }
    return credential_provider_imds_1.fromInstanceMetadata(init);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEVBQTJEO0FBQzNELGdGQU0yQztBQUMzQyw4RUFBcUY7QUFDckYsa0dBQThGO0FBQzlGLHNGQUFvRjtBQUNwRiw4RUFBd0U7QUFDeEUsa0VBQTJFO0FBQzNFLDRFQUF3RTtBQUczRCxRQUFBLGlCQUFpQixHQUFHLDJCQUEyQixDQUFDO0FBRTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUM3QixPQUE2RixFQUFFLEVBQzNFLEVBQUU7SUFDdEIsTUFBTSxPQUFPLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7UUFBRSxPQUFPLENBQUMsWUFBWSxHQUFHLDhDQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLGlDQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGlDQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hCLHlDQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BCLGlEQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3RCLGNBQWMsQ0FBQyxPQUFPLENBQUM7S0FDeEIsQ0FBQztJQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztRQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQU8sRUFBRSxDQUFDLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcseUJBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sMkJBQU8sQ0FDWixhQUFhLEVBQ2IsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFDL0csQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUN0RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBcEJXLFFBQUEsZUFBZSxtQkFvQjFCO0FBRUYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUF3QixFQUFzQixFQUFFO0lBQ3RFLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBcUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQWlCLENBQUMsRUFBRTtRQUN4RSxPQUFPLGdEQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUFpQixDQUFDLEVBQUU7UUFDbEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksaUNBQWEsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7S0FDakc7SUFFRCxPQUFPLCtDQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FbnYgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1lbnZcIjtcbmltcG9ydCB7XG4gIEVOVl9DTURTX0ZVTExfVVJJLFxuICBFTlZfQ01EU19SRUxBVElWRV9VUkksXG4gIGZyb21Db250YWluZXJNZXRhZGF0YSxcbiAgZnJvbUluc3RhbmNlTWV0YWRhdGEsXG4gIFJlbW90ZVByb3ZpZGVySW5pdCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW1kc1wiO1xuaW1wb3J0IHsgRU5WX1BST0ZJTEUsIGZyb21JbmksIEZyb21JbmlJbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pXCI7XG5pbXBvcnQgeyBmcm9tVG9rZW5GaWxlLCBGcm9tVG9rZW5GaWxlSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLW5vZGUtaWRlbnRpdHlcIjtcbmltcG9ydCB7IGZyb21Qcm9jZXNzLCBGcm9tUHJvY2Vzc0luaXQgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1wcm9jZXNzXCI7XG5pbXBvcnQgeyBmcm9tU1NPLCBGcm9tU1NPSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXNzb1wiO1xuaW1wb3J0IHsgY2hhaW4sIG1lbW9pemUsIFByb3ZpZGVyRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvcHJvcGVydHktcHJvdmlkZXJcIjtcbmltcG9ydCB7IGxvYWRTaGFyZWRDb25maWdGaWxlcyB9IGZyb20gXCJAYXdzLXNkay9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEVOVl9JTURTX0RJU0FCTEVEID0gXCJBV1NfRUMyX01FVEFEQVRBX0RJU0FCTEVEXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNyZWRlbnRpYWwgcHJvdmlkZXIgdGhhdCB3aWxsIGF0dGVtcHQgdG8gZmluZCBjcmVkZW50aWFscyBmcm9tIHRoZVxuICogZm9sbG93aW5nIHNvdXJjZXMgKGxpc3RlZCBpbiBvcmRlciBvZiBwcmVjZWRlbmNlKTpcbiAqICAgKiBFbnZpcm9ubWVudCB2YXJpYWJsZXMgZXhwb3NlZCB2aWEgYHByb2Nlc3MuZW52YFxuICogICAqIFNTTyBjcmVkZW50aWFscyBmcm9tIHRva2VuIGNhY2hlXG4gKiAgICogV2ViIGlkZW50aXR5IHRva2VuIGNyZWRlbnRpYWxzXG4gKiAgICogU2hhcmVkIGNyZWRlbnRpYWxzIGFuZCBjb25maWcgaW5pIGZpbGVzXG4gKiAgICogVGhlIEVDMi9FQ1MgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZVxuICpcbiAqIFRoZSBkZWZhdWx0IGNyZWRlbnRpYWwgcHJvdmlkZXIgd2lsbCBpbnZva2Ugb25lIHByb3ZpZGVyIGF0IGEgdGltZSBhbmQgb25seVxuICogY29udGludWUgdG8gdGhlIG5leHQgaWYgbm8gY3JlZGVudGlhbHMgaGF2ZSBiZWVuIGxvY2F0ZWQuIEZvciBleGFtcGxlLCBpZlxuICogdGhlIHByb2Nlc3MgZmluZHMgdmFsdWVzIGRlZmluZWQgdmlhIHRoZSBgQVdTX0FDQ0VTU19LRVlfSURgIGFuZFxuICogYEFXU19TRUNSRVRfQUNDRVNTX0tFWWAgZW52aXJvbm1lbnQgdmFyaWFibGVzLCB0aGUgZmlsZXMgYXRcbiAqIGB+Ly5hd3MvY3JlZGVudGlhbHNgIGFuZCBgfi8uYXdzL2NvbmZpZ2Agd2lsbCBub3QgYmUgcmVhZCwgbm9yIHdpbGwgYW55XG4gKiBtZXNzYWdlcyBiZSBzZW50IHRvIHRoZSBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlLlxuICpcbiAqIEBwYXJhbSBpbml0ICAgICAgICAgICAgICAgICAgQ29uZmlndXJhdGlvbiB0aGF0IGlzIHBhc3NlZCB0byBlYWNoIGluZGl2aWR1YWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJcbiAqXG4gKiBAc2VlIGZyb21FbnYgICAgICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICogQHNlZSBmcm9tU1NPICAgICAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCBTU08gdG9rZW4gY2FjaGVcbiAqIEBzZWUgZnJvbVRva2VuRmlsZSAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gZmlsZVxuICogQHNlZSBmcm9tSW5pICAgICAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSBJTklcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNcbiAqIEBzZWUgZnJvbVByb2Nlc3MgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlcyBjcmVkZW50aWFscyBmcm9tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxfcHJvY2VzcyBpbiBJTkkgZmlsZXNcbiAqIEBzZWUgZnJvbUluc3RhbmNlTWV0YWRhdGEgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb20gdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVDMiBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlXG4gKiBAc2VlIGZyb21Db250YWluZXJNZXRhZGF0YSAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFQ1MgQ29udGFpbmVyIE1ldGFkYXRhIFNlcnZpY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm92aWRlciA9IChcbiAgaW5pdDogRnJvbUluaUluaXQgJiBSZW1vdGVQcm92aWRlckluaXQgJiBGcm9tUHJvY2Vzc0luaXQgJiBGcm9tU1NPSW5pdCAmIEZyb21Ub2tlbkZpbGVJbml0ID0ge31cbik6IENyZWRlbnRpYWxQcm92aWRlciA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHByb2ZpbGU6IHByb2Nlc3MuZW52W0VOVl9QUk9GSUxFXSwgLi4uaW5pdCB9O1xuICBpZiAoIW9wdGlvbnMubG9hZGVkQ29uZmlnKSBvcHRpb25zLmxvYWRlZENvbmZpZyA9IGxvYWRTaGFyZWRDb25maWdGaWxlcyhpbml0KTtcbiAgY29uc3QgcHJvdmlkZXJzID0gW1xuICAgIGZyb21TU08ob3B0aW9ucyksXG4gICAgZnJvbUluaShvcHRpb25zKSxcbiAgICBmcm9tUHJvY2VzcyhvcHRpb25zKSxcbiAgICBmcm9tVG9rZW5GaWxlKG9wdGlvbnMpLFxuICAgIHJlbW90ZVByb3ZpZGVyKG9wdGlvbnMpLFxuICBdO1xuICBpZiAoIW9wdGlvbnMucHJvZmlsZSkgcHJvdmlkZXJzLnVuc2hpZnQoZnJvbUVudigpKTtcbiAgY29uc3QgcHJvdmlkZXJDaGFpbiA9IGNoYWluKC4uLnByb3ZpZGVycyk7XG5cbiAgcmV0dXJuIG1lbW9pemUoXG4gICAgcHJvdmlkZXJDaGFpbixcbiAgICAoY3JlZGVudGlhbHMpID0+IGNyZWRlbnRpYWxzLmV4cGlyYXRpb24gIT09IHVuZGVmaW5lZCAmJiBjcmVkZW50aWFscy5leHBpcmF0aW9uLmdldFRpbWUoKSAtIERhdGUubm93KCkgPCAzMDAwMDAsXG4gICAgKGNyZWRlbnRpYWxzKSA9PiBjcmVkZW50aWFscy5leHBpcmF0aW9uICE9PSB1bmRlZmluZWRcbiAgKTtcbn07XG5cbmNvbnN0IHJlbW90ZVByb3ZpZGVyID0gKGluaXQ6IFJlbW90ZVByb3ZpZGVySW5pdCk6IENyZWRlbnRpYWxQcm92aWRlciA9PiB7XG4gIGlmIChwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldIHx8IHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSkge1xuICAgIHJldHVybiBmcm9tQ29udGFpbmVyTWV0YWRhdGEoaW5pdCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0lNRFNfRElTQUJMRURdKSB7XG4gICAgcmV0dXJuICgpID0+IFByb21pc2UucmVqZWN0KG5ldyBQcm92aWRlckVycm9yKFwiRUMyIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2UgYWNjZXNzIGRpc2FibGVkXCIpKTtcbiAgfVxuXG4gIHJldHVybiBmcm9tSW5zdGFuY2VNZXRhZGF0YShpbml0KTtcbn07XG4iXX0=