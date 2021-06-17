import { __assign, __read, __spreadArray } from "tslib";
import { fromEnv } from "@aws-sdk/credential-provider-env";
import { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata, } from "@aws-sdk/credential-provider-imds";
import { ENV_PROFILE, fromIni } from "@aws-sdk/credential-provider-ini";
import { fromTokenFile } from "@aws-sdk/credential-provider-node-identity";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { chain, memoize, ProviderError } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles } from "@aws-sdk/shared-ini-file-loader";
export var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
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
export var defaultProvider = function (init) {
    if (init === void 0) { init = {}; }
    var options = __assign({ profile: process.env[ENV_PROFILE] }, init);
    if (!options.loadedConfig)
        options.loadedConfig = loadSharedConfigFiles(init);
    var providers = [
        fromSSO(options),
        fromIni(options),
        fromProcess(options),
        fromTokenFile(options),
        remoteProvider(options),
    ];
    if (!options.profile)
        providers.unshift(fromEnv());
    var providerChain = chain.apply(void 0, __spreadArray([], __read(providers)));
    return memoize(providerChain, function (credentials) { return credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000; }, function (credentials) { return credentials.expiration !== undefined; });
};
var remoteProvider = function (init) {
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        return fromContainerMetadata(init);
    }
    if (process.env[ENV_IMDS_DISABLED]) {
        return function () { return Promise.reject(new ProviderError("EC2 Instance Metadata Service access disabled")); };
    }
    return fromInstanceMetadata(init);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsb0JBQW9CLEdBRXJCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQWUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLDRDQUE0QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQW1CLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFFLE9BQU8sRUFBZSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3hFLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLDJCQUEyQixDQUFDO0FBRTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSCxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsVUFDN0IsSUFBK0Y7SUFBL0YscUJBQUEsRUFBQSxTQUErRjtJQUUvRixJQUFNLE9BQU8sY0FBSyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSyxJQUFJLENBQUUsQ0FBQztJQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7UUFBRSxPQUFPLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLElBQU0sU0FBUyxHQUFHO1FBQ2hCLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDaEIsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNoQixXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BCLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDdEIsY0FBYyxDQUFDLE9BQU8sQ0FBQztLQUN4QixDQUFDO0lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1FBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELElBQU0sYUFBYSxHQUFHLEtBQUssd0NBQUksU0FBUyxHQUFDLENBQUM7SUFFMUMsT0FBTyxPQUFPLENBQ1osYUFBYSxFQUNiLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUE5RixDQUE4RixFQUMvRyxVQUFDLFdBQVcsSUFBSyxPQUFBLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFwQyxDQUFvQyxDQUN0RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsVUFBQyxJQUF3QjtJQUM5QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDeEUsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sY0FBTSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxhQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQyxFQUFsRixDQUFrRixDQUFDO0tBQ2pHO0lBRUQsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tRW52IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItZW52XCI7XG5pbXBvcnQge1xuICBFTlZfQ01EU19GVUxMX1VSSSxcbiAgRU5WX0NNRFNfUkVMQVRJVkVfVVJJLFxuICBmcm9tQ29udGFpbmVyTWV0YWRhdGEsXG4gIGZyb21JbnN0YW5jZU1ldGFkYXRhLFxuICBSZW1vdGVQcm92aWRlckluaXQsXG59IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHNcIjtcbmltcG9ydCB7IEVOVl9QUk9GSUxFLCBmcm9tSW5pLCBGcm9tSW5pSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaVwiO1xuaW1wb3J0IHsgZnJvbVRva2VuRmlsZSwgRnJvbVRva2VuRmlsZUluaXQgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlLWlkZW50aXR5XCI7XG5pbXBvcnQgeyBmcm9tUHJvY2VzcywgRnJvbVByb2Nlc3NJbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItcHJvY2Vzc1wiO1xuaW1wb3J0IHsgZnJvbVNTTywgRnJvbVNTT0luaXQgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1zc29cIjtcbmltcG9ydCB7IGNoYWluLCBtZW1vaXplLCBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBsb2FkU2hhcmVkQ29uZmlnRmlsZXMgfSBmcm9tIFwiQGF3cy1zZGsvc2hhcmVkLWluaS1maWxlLWxvYWRlclwiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBFTlZfSU1EU19ESVNBQkxFRCA9IFwiQVdTX0VDMl9NRVRBREFUQV9ESVNBQkxFRFwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGZpbmQgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqIGZvbGxvd2luZyBzb3VyY2VzIChsaXN0ZWQgaW4gb3JkZXIgb2YgcHJlY2VkZW5jZSk6XG4gKiAgICogRW52aXJvbm1lbnQgdmFyaWFibGVzIGV4cG9zZWQgdmlhIGBwcm9jZXNzLmVudmBcbiAqICAgKiBTU08gY3JlZGVudGlhbHMgZnJvbSB0b2tlbiBjYWNoZVxuICogICAqIFdlYiBpZGVudGl0eSB0b2tlbiBjcmVkZW50aWFsc1xuICogICAqIFNoYXJlZCBjcmVkZW50aWFscyBhbmQgY29uZmlnIGluaSBmaWxlc1xuICogICAqIFRoZSBFQzIvRUNTIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2VcbiAqXG4gKiBUaGUgZGVmYXVsdCBjcmVkZW50aWFsIHByb3ZpZGVyIHdpbGwgaW52b2tlIG9uZSBwcm92aWRlciBhdCBhIHRpbWUgYW5kIG9ubHlcbiAqIGNvbnRpbnVlIHRvIHRoZSBuZXh0IGlmIG5vIGNyZWRlbnRpYWxzIGhhdmUgYmVlbiBsb2NhdGVkLiBGb3IgZXhhbXBsZSwgaWZcbiAqIHRoZSBwcm9jZXNzIGZpbmRzIHZhbHVlcyBkZWZpbmVkIHZpYSB0aGUgYEFXU19BQ0NFU1NfS0VZX0lEYCBhbmRcbiAqIGBBV1NfU0VDUkVUX0FDQ0VTU19LRVlgIGVudmlyb25tZW50IHZhcmlhYmxlcywgdGhlIGZpbGVzIGF0XG4gKiBgfi8uYXdzL2NyZWRlbnRpYWxzYCBhbmQgYH4vLmF3cy9jb25maWdgIHdpbGwgbm90IGJlIHJlYWQsIG5vciB3aWxsIGFueVxuICogbWVzc2FnZXMgYmUgc2VudCB0byB0aGUgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZS5cbiAqXG4gKiBAcGFyYW0gaW5pdCAgICAgICAgICAgICAgICAgIENvbmZpZ3VyYXRpb24gdGhhdCBpcyBwYXNzZWQgdG8gZWFjaCBpbmRpdmlkdWFsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyXG4gKlxuICogQHNlZSBmcm9tRW52ICAgICAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAqIEBzZWUgZnJvbVNTTyAgICAgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgU1NPIHRva2VuIGNhY2hlXG4gKiBAc2VlIGZyb21Ub2tlbkZpbGUgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuIGZpbGVcbiAqIEBzZWUgZnJvbUluaSAgICAgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb20gSU5JXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzXG4gKiBAc2VlIGZyb21Qcm9jZXNzICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZXMgY3JlZGVudGlhbHMgZnJvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsX3Byb2Nlc3MgaW4gSU5JIGZpbGVzXG4gKiBAc2VlIGZyb21JbnN0YW5jZU1ldGFkYXRhICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFQzIgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZVxuICogQHNlZSBmcm9tQ29udGFpbmVyTWV0YWRhdGEgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRUNTIENvbnRhaW5lciBNZXRhZGF0YSBTZXJ2aWNlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvdmlkZXIgPSAoXG4gIGluaXQ6IEZyb21JbmlJbml0ICYgUmVtb3RlUHJvdmlkZXJJbml0ICYgRnJvbVByb2Nlc3NJbml0ICYgRnJvbVNTT0luaXQgJiBGcm9tVG9rZW5GaWxlSW5pdCA9IHt9XG4pOiBDcmVkZW50aWFsUHJvdmlkZXIgPT4ge1xuICBjb25zdCBvcHRpb25zID0geyBwcm9maWxlOiBwcm9jZXNzLmVudltFTlZfUFJPRklMRV0sIC4uLmluaXQgfTtcbiAgaWYgKCFvcHRpb25zLmxvYWRlZENvbmZpZykgb3B0aW9ucy5sb2FkZWRDb25maWcgPSBsb2FkU2hhcmVkQ29uZmlnRmlsZXMoaW5pdCk7XG4gIGNvbnN0IHByb3ZpZGVycyA9IFtcbiAgICBmcm9tU1NPKG9wdGlvbnMpLFxuICAgIGZyb21Jbmkob3B0aW9ucyksXG4gICAgZnJvbVByb2Nlc3Mob3B0aW9ucyksXG4gICAgZnJvbVRva2VuRmlsZShvcHRpb25zKSxcbiAgICByZW1vdGVQcm92aWRlcihvcHRpb25zKSxcbiAgXTtcbiAgaWYgKCFvcHRpb25zLnByb2ZpbGUpIHByb3ZpZGVycy51bnNoaWZ0KGZyb21FbnYoKSk7XG4gIGNvbnN0IHByb3ZpZGVyQ2hhaW4gPSBjaGFpbiguLi5wcm92aWRlcnMpO1xuXG4gIHJldHVybiBtZW1vaXplKFxuICAgIHByb3ZpZGVyQ2hhaW4sXG4gICAgKGNyZWRlbnRpYWxzKSA9PiBjcmVkZW50aWFscy5leHBpcmF0aW9uICE9PSB1bmRlZmluZWQgJiYgY3JlZGVudGlhbHMuZXhwaXJhdGlvbi5nZXRUaW1lKCkgLSBEYXRlLm5vdygpIDwgMzAwMDAwLFxuICAgIChjcmVkZW50aWFscykgPT4gY3JlZGVudGlhbHMuZXhwaXJhdGlvbiAhPT0gdW5kZWZpbmVkXG4gICk7XG59O1xuXG5jb25zdCByZW1vdGVQcm92aWRlciA9IChpbml0OiBSZW1vdGVQcm92aWRlckluaXQpOiBDcmVkZW50aWFsUHJvdmlkZXIgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0NNRFNfUkVMQVRJVkVfVVJJXSB8fCBwcm9jZXNzLmVudltFTlZfQ01EU19GVUxMX1VSSV0pIHtcbiAgICByZXR1cm4gZnJvbUNvbnRhaW5lck1ldGFkYXRhKGluaXQpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52W0VOVl9JTURTX0RJU0FCTEVEXSkge1xuICAgIHJldHVybiAoKSA9PiBQcm9taXNlLnJlamVjdChuZXcgUHJvdmlkZXJFcnJvcihcIkVDMiBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlIGFjY2VzcyBkaXNhYmxlZFwiKSk7XG4gIH1cblxuICByZXR1cm4gZnJvbUluc3RhbmNlTWV0YWRhdGEoaW5pdCk7XG59O1xuIl19