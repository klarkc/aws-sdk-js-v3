import { __assign, __awaiter, __generator } from "tslib";
import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromContainerMetadata, fromInstanceMetadata } from "@aws-sdk/credential-provider-imds";
import { fromTokenFile } from "@aws-sdk/credential-provider-node-identity";
import { ProviderError } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles, } from "@aws-sdk/shared-ini-file-loader";
var DEFAULT_PROFILE = "default";
export var ENV_PROFILE = "AWS_PROFILE";
var isStaticCredsProfile = function (arg) {
    return Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.aws_access_key_id === "string" &&
        typeof arg.aws_secret_access_key === "string" &&
        ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
};
var isWebIdentityProfile = function (arg) {
    return Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.web_identity_token_file === "string" &&
        typeof arg.role_arn === "string" &&
        ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
};
var isAssumeRoleProfile = function (arg) {
    return Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.role_arn === "string" &&
        ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1;
};
var isAssumeRoleWithSourceProfile = function (arg) {
    return isAssumeRoleProfile(arg) && typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
};
var isAssumeRoleWithProviderProfile = function (arg) {
    return isAssumeRoleProfile(arg) && typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
};
/**
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
export var fromIni = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        var profiles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, parseKnownFiles(init)];
                case 1:
                    profiles = _a.sent();
                    return [2 /*return*/, resolveProfileData(getMasterProfileName(init), profiles, init)];
            }
        });
    }); };
};
/**
 * Load profiles from credentials and config INI files and normalize them into a
 * single profile list.
 *
 * @internal
 */
export var parseKnownFiles = function (init) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, loadedConfig, parsedFiles;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = init.loadedConfig, loadedConfig = _a === void 0 ? loadSharedConfigFiles(init) : _a;
                return [4 /*yield*/, loadedConfig];
            case 1:
                parsedFiles = _b.sent();
                return [2 /*return*/, __assign(__assign({}, parsedFiles.configFile), parsedFiles.credentialsFile)];
        }
    });
}); };
/**
 * @internal
 */
export var getMasterProfileName = function (init) {
    return init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
};
var resolveProfileData = function (profileName, profiles, options, visitedProfiles) {
    if (visitedProfiles === void 0) { visitedProfiles = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var data, ExternalId, mfa_serial, RoleArn, _a, RoleSessionName, source_profile, credential_source, sourceCreds, params, _b, _c, _d;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    data = profiles[profileName];
                    // If this is not the first profile visited, static credentials should be
                    // preferred over role assumption metadata. This special treatment of
                    // second and subsequent hops is to ensure compatibility with the AWS CLI.
                    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
                        return [2 /*return*/, resolveStaticCredentials(data)];
                    }
                    if (!(isAssumeRoleWithSourceProfile(data) || isAssumeRoleWithProviderProfile(data))) return [3 /*break*/, 4];
                    ExternalId = data.external_id, mfa_serial = data.mfa_serial, RoleArn = data.role_arn, _a = data.role_session_name, RoleSessionName = _a === void 0 ? "aws-sdk-js-" + Date.now() : _a, source_profile = data.source_profile, credential_source = data.credential_source;
                    if (!options.roleAssumer) {
                        throw new ProviderError("Profile " + profileName + " requires a role to be assumed, but no" + " role assumption callback was provided.", false);
                    }
                    if (source_profile && source_profile in visitedProfiles) {
                        throw new ProviderError("Detected a cycle attempting to resolve credentials for profile" +
                            (" " + getMasterProfileName(options) + ". Profiles visited: ") +
                            Object.keys(visitedProfiles).join(", "), false);
                    }
                    sourceCreds = source_profile
                        ? resolveProfileData(source_profile, profiles, options, __assign(__assign({}, visitedProfiles), (_e = {}, _e[source_profile] = true, _e)))
                        : resolveCredentialSource(credential_source, profileName)();
                    params = { RoleArn: RoleArn, RoleSessionName: RoleSessionName, ExternalId: ExternalId };
                    if (!mfa_serial) return [3 /*break*/, 2];
                    if (!options.mfaCodeProvider) {
                        throw new ProviderError("Profile " + profileName + " requires multi-factor authentication," + " but no MFA code callback was provided.", false);
                    }
                    params.SerialNumber = mfa_serial;
                    _b = params;
                    return [4 /*yield*/, options.mfaCodeProvider(mfa_serial)];
                case 1:
                    _b.TokenCode = _f.sent();
                    _f.label = 2;
                case 2:
                    _d = (_c = options).roleAssumer;
                    return [4 /*yield*/, sourceCreds];
                case 3: return [2 /*return*/, _d.apply(_c, [_f.sent(), params])];
                case 4:
                    // If no role assumption metadata is present, attempt to load static
                    // credentials from the selected profile.
                    if (isStaticCredsProfile(data)) {
                        return [2 /*return*/, resolveStaticCredentials(data)];
                    }
                    // If no static credentials are present, attempt to assume role with
                    // web identity if web_identity_token_file and role_arn is available
                    if (isWebIdentityProfile(data)) {
                        return [2 /*return*/, resolveWebIdentityCredentials(data, options)];
                    }
                    // If the profile cannot be parsed or contains neither static credentials
                    // nor role assumption metadata, throw an error. This should be considered a
                    // terminal resolution error if a profile has been specified by the user
                    // (whether via a parameter, an environment variable, or another profile's
                    // `source_profile` key).
                    throw new ProviderError("Profile " + profileName + " could not be found or parsed in shared" + " credentials file.");
            }
        });
    });
};
/**
 * Resolve the `credential_source` entry from the profile, and return the
 * credential providers respectively. No memoization is needed for the
 * credential source providers because memoization should be added outside the
 * fromIni() provider. The source credential needs to be refreshed every time
 * fromIni() is called.
 */
var resolveCredentialSource = function (credentialSource, profileName) {
    var sourceProvidersMap = {
        EcsContainer: fromContainerMetadata,
        Ec2InstanceMetadata: fromInstanceMetadata,
        Environment: fromEnv,
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
    }
    else {
        throw new ProviderError("Unsupported credential source in profile " + profileName + ". Got " + credentialSource + ", " +
            "expected EcsContainer or Ec2InstanceMetadata or Environment.");
    }
};
var resolveStaticCredentials = function (profile) {
    return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
    });
};
var resolveWebIdentityCredentials = function (profile, options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, fromTokenFile({
                webIdentityTokenFile: profile.web_identity_token_file,
                roleArn: profile.role_arn,
                roleSessionName: profile.role_session_name,
                roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
            })()];
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFDTCxxQkFBcUIsR0FLdEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUd6QyxJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDbEMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztBQXNGekMsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEdBQVE7SUFDcEMsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ1osT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxRQUFRO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLHFCQUFxQixLQUFLLFFBQVE7UUFDN0MsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBSmxFLENBSWtFLENBQUM7QUFRckUsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEdBQVE7SUFDcEMsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ1osT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQyx1QkFBdUIsS0FBSyxRQUFRO1FBQy9DLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxRQUFRO1FBQ2hDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FB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QUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0tBQy9DO1NBQU07UUFDTCxNQUFNLElBQUksYUFBYSxDQUNyQiw4Q0FBNEMsV0FBVyxjQUFTLGdCQUFnQixPQUFJO1lBQ2xGLDhEQUE4RCxDQUNqRSxDQUFDO0tBQ0g7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFNLHdCQUF3QixHQUFHLFVBQUMsT0FBMkI7SUFDM0QsT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2QsV0FBVyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7UUFDdEMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUI7UUFDOUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUI7S0FDeEMsQ0FBQztBQUpGLENBSUUsQ0FBQztBQUVMLElBQU0sNkJBQTZCLEdBQUcsVUFBTyxPQUEyQixFQUFFLE9BQW9COztRQUM1RixzQkFBQSxhQUFhLENBQUM7Z0JBQ1osb0JBQW9CLEVBQUUsT0FBTyxDQUFDLHVCQUF1QjtnQkFDckQsT0FBTyxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUN6QixlQUFlLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjtnQkFDMUMsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLDBCQUEwQjthQUMvRCxDQUFDLEVBQUUsRUFBQTs7S0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUVudiB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWVudlwiO1xuaW1wb3J0IHsgZnJvbUNvbnRhaW5lck1ldGFkYXRhLCBmcm9tSW5zdGFuY2VNZXRhZGF0YSB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHNcIjtcbmltcG9ydCB7IGZyb21Ub2tlbkZpbGUgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1ub2RlLWlkZW50aXR5XCI7XG5pbXBvcnQgeyBBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5UGFyYW1zIH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5XCI7XG5pbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQge1xuICBsb2FkU2hhcmVkQ29uZmlnRmlsZXMsXG4gIFBhcnNlZEluaURhdGEsXG4gIFByb2ZpbGUsXG4gIFNoYXJlZENvbmZpZ0ZpbGVzLFxuICBTaGFyZWRDb25maWdJbml0LFxufSBmcm9tIFwiQGF3cy1zZGsvc2hhcmVkLWluaS1maWxlLWxvYWRlclwiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyLCBDcmVkZW50aWFscyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5jb25zdCBERUZBVUxUX1BST0ZJTEUgPSBcImRlZmF1bHRcIjtcbmV4cG9ydCBjb25zdCBFTlZfUFJPRklMRSA9IFwiQVdTX1BST0ZJTEVcIjtcblxuLyoqXG4gKiBAc2VlIGh0dHA6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FXU0phdmFTY3JpcHRTREsvbGF0ZXN0L0FXUy9TVFMuaHRtbCNhc3N1bWVSb2xlLXByb3BlcnR5XG4gKiBUT0RPIHVwZGF0ZSB0aGUgYWJvdmUgdG8gbGluayB0byBWMyBkb2NzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXNzdW1lUm9sZVBhcmFtcyB7XG4gIC8qKlxuICAgKiBUaGUgaWRlbnRpZmllciBvZiB0aGUgcm9sZSB0byBiZSBhc3N1bWVkLlxuICAgKi9cbiAgUm9sZUFybjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIG5hbWUgZm9yIHRoZSBhc3N1bWVkIHJvbGUgc2Vzc2lvbi5cbiAgICovXG4gIFJvbGVTZXNzaW9uTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIHRoYXQgaXMgdXNlZCBieSB0aGlyZCBwYXJ0aWVzIHdoZW4gYXNzdW1pbmcgcm9sZXMgaW5cbiAgICogdGhlaXIgY3VzdG9tZXJzJyBhY2NvdW50cy5cbiAgICovXG4gIEV4dGVybmFsSWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpZGVudGlmaWNhdGlvbiBudW1iZXIgb2YgdGhlIE1GQSBkZXZpY2UgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAqIHVzZXIgd2hvIGlzIG1ha2luZyB0aGUgYEFzc3VtZVJvbGVgIGNhbGwuXG4gICAqL1xuICBTZXJpYWxOdW1iZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgTUZBIGRldmljZS5cbiAgICovXG4gIFRva2VuQ29kZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb3VyY2VQcm9maWxlSW5pdCBleHRlbmRzIFNoYXJlZENvbmZpZ0luaXQge1xuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gcHJvZmlsZSB0byB1c2UuXG4gICAqL1xuICBwcm9maWxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggbG9hZGVkIGFuZCBwYXJzZWQgY3JlZGVudGlhbHMgZmlsZXMuXG4gICAqIFVzZWQgdG8gYXZvaWQgbG9hZGluZyBzaGFyZWQgY29uZmlnIGZpbGVzIG11bHRpcGxlIHRpbWVzLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGxvYWRlZENvbmZpZz86IFByb21pc2U8U2hhcmVkQ29uZmlnRmlsZXM+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZyb21JbmlJbml0IGV4dGVuZHMgU291cmNlUHJvZmlsZUluaXQge1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIGFuIE1GQSB0b2tlbiBjb2RlIGZvclxuICAgKiB0aGUgcHJvdmlkZWQgTUZBIFNlcmlhbCBjb2RlLiBJZiBhIHByb2ZpbGUgcmVxdWlyZXMgYW4gTUZBIGNvZGUgYW5kXG4gICAqIGBtZmFDb2RlUHJvdmlkZXJgIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uLCB0aGUgY3JlZGVudGlhbCBwcm92aWRlclxuICAgKiBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBtZmFTZXJpYWwgVGhlIHNlcmlhbCBjb2RlIG9mIHRoZSBNRkEgZGV2aWNlIHNwZWNpZmllZC5cbiAgICovXG4gIG1mYUNvZGVQcm92aWRlcj86IChtZmFTZXJpYWw6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgYXNzdW1lcyBhIHJvbGUgYW5kIHJldHVybnMgYSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoXG4gICAqIGNyZWRlbnRpYWxzIGZvciB0aGUgYXNzdW1lZCByb2xlLlxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlQ3JlZHMgVGhlIGNyZWRlbnRpYWxzIHdpdGggd2hpY2ggdG8gYXNzdW1lIGEgcm9sZS5cbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgcm9sZUFzc3VtZXI/OiAoc291cmNlQ3JlZHM6IENyZWRlbnRpYWxzLCBwYXJhbXM6IEFzc3VtZVJvbGVQYXJhbXMpID0+IFByb21pc2U8Q3JlZGVudGlhbHM+O1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgYXNzdW1lcyBhIHJvbGUgd2l0aCB3ZWIgaWRlbnRpdHkgYW5kIHJldHVybnMgYSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoXG4gICAqIGNyZWRlbnRpYWxzIGZvciB0aGUgYXNzdW1lZCByb2xlLlxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlQ3JlZHMgVGhlIGNyZWRlbnRpYWxzIHdpdGggd2hpY2ggdG8gYXNzdW1lIGEgcm9sZS5cbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKi9cbiAgcm9sZUFzc3VtZXJXaXRoV2ViSWRlbnRpdHk/OiAocGFyYW1zOiBBc3N1bWVSb2xlV2l0aFdlYklkZW50aXR5UGFyYW1zKSA9PiBQcm9taXNlPENyZWRlbnRpYWxzPjtcbn1cblxuaW50ZXJmYWNlIFN0YXRpY0NyZWRzUHJvZmlsZSBleHRlbmRzIFByb2ZpbGUge1xuICBhd3NfYWNjZXNzX2tleV9pZDogc3RyaW5nO1xuICBhd3Nfc2VjcmV0X2FjY2Vzc19rZXk6IHN0cmluZztcbiAgYXdzX3Nlc3Npb25fdG9rZW4/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGlzU3RhdGljQ3JlZHNQcm9maWxlID0gKGFyZzogYW55KTogYXJnIGlzIFN0YXRpY0NyZWRzUHJvZmlsZSA9PlxuICBCb29sZWFuKGFyZykgJiZcbiAgdHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIiAmJlxuICB0eXBlb2YgYXJnLmF3c19hY2Nlc3Nfa2V5X2lkID09PSBcInN0cmluZ1wiICYmXG4gIHR5cGVvZiBhcmcuYXdzX3NlY3JldF9hY2Nlc3Nfa2V5ID09PSBcInN0cmluZ1wiICYmXG4gIFtcInVuZGVmaW5lZFwiLCBcInN0cmluZ1wiXS5pbmRleE9mKHR5cGVvZiBhcmcuYXdzX3Nlc3Npb25fdG9rZW4pID4gLTE7XG5cbmludGVyZmFjZSBXZWJJZGVudGl0eVByb2ZpbGUgZXh0ZW5kcyBQcm9maWxlIHtcbiAgd2ViX2lkZW50aXR5X3Rva2VuX2ZpbGU6IHN0cmluZztcbiAgcm9sZV9hcm46IHN0cmluZztcbiAgcm9sZV9zZXNzaW9uX25hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGlzV2ViSWRlbnRpdHlQcm9maWxlID0gKGFyZzogYW55KTogYXJnIGlzIFdlYklkZW50aXR5UHJvZmlsZSA9PlxuICBCb29sZWFuKGFyZykgJiZcbiAgdHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIiAmJlxuICB0eXBlb2YgYXJnLndlYl9pZGVudGl0eV90b2tlbl9maWxlID09PSBcInN0cmluZ1wiICYmXG4gIHR5cGVvZiBhcmcucm9sZV9hcm4gPT09IFwic3RyaW5nXCIgJiZcbiAgW1widW5kZWZpbmVkXCIsIFwic3RyaW5nXCJdLmluZGV4T2YodHlwZW9mIGFyZy5yb2xlX3Nlc3Npb25fbmFtZSkgPiAtMTtcblxuaW50ZXJmYWNlIEFzc3VtZVJvbGVXaXRoU291cmNlUHJvZmlsZSBleHRlbmRzIFByb2ZpbGUge1xuICByb2xlX2Fybjogc3RyaW5nO1xuICBzb3VyY2VfcHJvZmlsZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQXNzdW1lUm9sZVdpdGhQcm92aWRlclByb2ZpbGUgZXh0ZW5kcyBQcm9maWxlIHtcbiAgcm9sZV9hcm46IHN0cmluZztcbiAgY3JlZGVudGlhbF9zb3VyY2U6IHN0cmluZztcbn1cblxuY29uc3QgaXNBc3N1bWVSb2xlUHJvZmlsZSA9IChhcmc6IGFueSkgPT5cbiAgQm9vbGVhbihhcmcpICYmXG4gIHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIgJiZcbiAgdHlwZW9mIGFyZy5yb2xlX2FybiA9PT0gXCJzdHJpbmdcIiAmJlxuICBbXCJ1bmRlZmluZWRcIiwgXCJzdHJpbmdcIl0uaW5kZXhPZih0eXBlb2YgYXJnLnJvbGVfc2Vzc2lvbl9uYW1lKSA+IC0xICYmXG4gIFtcInVuZGVmaW5lZFwiLCBcInN0cmluZ1wiXS5pbmRleE9mKHR5cGVvZiBhcmcuZXh0ZXJuYWxfaWQpID4gLTEgJiZcbiAgW1widW5kZWZpbmVkXCIsIFwic3RyaW5nXCJdLmluZGV4T2YodHlwZW9mIGFyZy5tZmFfc2VyaWFsKSA+IC0xO1xuXG5jb25zdCBpc0Fzc3VtZVJvbGVXaXRoU291cmNlUHJvZmlsZSA9IChhcmc6IGFueSk6IGFyZyBpcyBBc3N1bWVSb2xlV2l0aFNvdXJjZVByb2ZpbGUgPT5cbiAgaXNBc3N1bWVSb2xlUHJvZmlsZShhcmcpICYmIHR5cGVvZiBhcmcuc291cmNlX3Byb2ZpbGUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGFyZy5jcmVkZW50aWFsX3NvdXJjZSA9PT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgaXNBc3N1bWVSb2xlV2l0aFByb3ZpZGVyUHJvZmlsZSA9IChhcmc6IGFueSk6IGFyZyBpcyBBc3N1bWVSb2xlV2l0aFByb3ZpZGVyUHJvZmlsZSA9PlxuICBpc0Fzc3VtZVJvbGVQcm9maWxlKGFyZykgJiYgdHlwZW9mIGFyZy5jcmVkZW50aWFsX3NvdXJjZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgYXJnLnNvdXJjZV9wcm9maWxlID09PSBcInVuZGVmaW5lZFwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCByZWFkIGZyb20gaW5pIGZpbGVzIGFuZCBzdXBwb3J0c1xuICogcm9sZSBhc3N1bXB0aW9uIGFuZCBtdWx0aS1mYWN0b3IgYXV0aGVudGljYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tSW5pID1cbiAgKGluaXQ6IEZyb21JbmlJbml0ID0ge30pOiBDcmVkZW50aWFsUHJvdmlkZXIgPT5cbiAgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2ZpbGVzID0gYXdhaXQgcGFyc2VLbm93bkZpbGVzKGluaXQpO1xuICAgIHJldHVybiByZXNvbHZlUHJvZmlsZURhdGEoZ2V0TWFzdGVyUHJvZmlsZU5hbWUoaW5pdCksIHByb2ZpbGVzLCBpbml0KTtcbiAgfTtcblxuLyoqXG4gKiBMb2FkIHByb2ZpbGVzIGZyb20gY3JlZGVudGlhbHMgYW5kIGNvbmZpZyBJTkkgZmlsZXMgYW5kIG5vcm1hbGl6ZSB0aGVtIGludG8gYVxuICogc2luZ2xlIHByb2ZpbGUgbGlzdC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlS25vd25GaWxlcyA9IGFzeW5jIChpbml0OiBTb3VyY2VQcm9maWxlSW5pdCk6IFByb21pc2U8UGFyc2VkSW5pRGF0YT4gPT4ge1xuICBjb25zdCB7IGxvYWRlZENvbmZpZyA9IGxvYWRTaGFyZWRDb25maWdGaWxlcyhpbml0KSB9ID0gaW5pdDtcblxuICBjb25zdCBwYXJzZWRGaWxlcyA9IGF3YWl0IGxvYWRlZENvbmZpZztcbiAgcmV0dXJuIHtcbiAgICAuLi5wYXJzZWRGaWxlcy5jb25maWdGaWxlLFxuICAgIC4uLnBhcnNlZEZpbGVzLmNyZWRlbnRpYWxzRmlsZSxcbiAgfTtcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNYXN0ZXJQcm9maWxlTmFtZSA9IChpbml0OiB7IHByb2ZpbGU/OiBzdHJpbmcgfSk6IHN0cmluZyA9PlxuICBpbml0LnByb2ZpbGUgfHwgcHJvY2Vzcy5lbnZbRU5WX1BST0ZJTEVdIHx8IERFRkFVTFRfUFJPRklMRTtcblxuY29uc3QgcmVzb2x2ZVByb2ZpbGVEYXRhID0gYXN5bmMgKFxuICBwcm9maWxlTmFtZTogc3RyaW5nLFxuICBwcm9maWxlczogUGFyc2VkSW5pRGF0YSxcbiAgb3B0aW9uczogRnJvbUluaUluaXQsXG4gIHZpc2l0ZWRQcm9maWxlczogeyBbcHJvZmlsZU5hbWU6IHN0cmluZ106IHRydWUgfSA9IHt9XG4pOiBQcm9taXNlPENyZWRlbnRpYWxzPiA9PiB7XG4gIGNvbnN0IGRhdGEgPSBwcm9maWxlc1twcm9maWxlTmFtZV07XG5cbiAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIGZpcnN0IHByb2ZpbGUgdmlzaXRlZCwgc3RhdGljIGNyZWRlbnRpYWxzIHNob3VsZCBiZVxuICAvLyBwcmVmZXJyZWQgb3ZlciByb2xlIGFzc3VtcHRpb24gbWV0YWRhdGEuIFRoaXMgc3BlY2lhbCB0cmVhdG1lbnQgb2ZcbiAgLy8gc2Vjb25kIGFuZCBzdWJzZXF1ZW50IGhvcHMgaXMgdG8gZW5zdXJlIGNvbXBhdGliaWxpdHkgd2l0aCB0aGUgQVdTIENMSS5cbiAgaWYgKE9iamVjdC5rZXlzKHZpc2l0ZWRQcm9maWxlcykubGVuZ3RoID4gMCAmJiBpc1N0YXRpY0NyZWRzUHJvZmlsZShkYXRhKSkge1xuICAgIHJldHVybiByZXNvbHZlU3RhdGljQ3JlZGVudGlhbHMoZGF0YSk7XG4gIH1cblxuICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBwcm9maWxlIHZpc2l0ZWQsIHJvbGUgYXNzdW1wdGlvbiBrZXlzIHNob3VsZCBiZVxuICAvLyBnaXZlbiBwcmVjZWRlbmNlIG92ZXIgc3RhdGljIGNyZWRlbnRpYWxzLlxuICBpZiAoaXNBc3N1bWVSb2xlV2l0aFNvdXJjZVByb2ZpbGUoZGF0YSkgfHwgaXNBc3N1bWVSb2xlV2l0aFByb3ZpZGVyUHJvZmlsZShkYXRhKSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGV4dGVybmFsX2lkOiBFeHRlcm5hbElkLFxuICAgICAgbWZhX3NlcmlhbCxcbiAgICAgIHJvbGVfYXJuOiBSb2xlQXJuLFxuICAgICAgcm9sZV9zZXNzaW9uX25hbWU6IFJvbGVTZXNzaW9uTmFtZSA9IFwiYXdzLXNkay1qcy1cIiArIERhdGUubm93KCksXG4gICAgICBzb3VyY2VfcHJvZmlsZSxcbiAgICAgIGNyZWRlbnRpYWxfc291cmNlLFxuICAgIH0gPSBkYXRhO1xuXG4gICAgaWYgKCFvcHRpb25zLnJvbGVBc3N1bWVyKSB7XG4gICAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihcbiAgICAgICAgYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gcmVxdWlyZXMgYSByb2xlIHRvIGJlIGFzc3VtZWQsIGJ1dCBub2AgKyBgIHJvbGUgYXNzdW1wdGlvbiBjYWxsYmFjayB3YXMgcHJvdmlkZWQuYCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZV9wcm9maWxlICYmIHNvdXJjZV9wcm9maWxlIGluIHZpc2l0ZWRQcm9maWxlcykge1xuICAgICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgIGBEZXRlY3RlZCBhIGN5Y2xlIGF0dGVtcHRpbmcgdG8gcmVzb2x2ZSBjcmVkZW50aWFscyBmb3IgcHJvZmlsZWAgK1xuICAgICAgICAgIGAgJHtnZXRNYXN0ZXJQcm9maWxlTmFtZShvcHRpb25zKX0uIFByb2ZpbGVzIHZpc2l0ZWQ6IGAgK1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZpc2l0ZWRQcm9maWxlcykuam9pbihcIiwgXCIpLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VDcmVkcyA9IHNvdXJjZV9wcm9maWxlXG4gICAgICA/IHJlc29sdmVQcm9maWxlRGF0YShzb3VyY2VfcHJvZmlsZSwgcHJvZmlsZXMsIG9wdGlvbnMsIHtcbiAgICAgICAgICAuLi52aXNpdGVkUHJvZmlsZXMsXG4gICAgICAgICAgW3NvdXJjZV9wcm9maWxlXTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIDogcmVzb2x2ZUNyZWRlbnRpYWxTb3VyY2UoY3JlZGVudGlhbF9zb3VyY2UhLCBwcm9maWxlTmFtZSkoKTtcblxuICAgIGNvbnN0IHBhcmFtczogQXNzdW1lUm9sZVBhcmFtcyA9IHsgUm9sZUFybiwgUm9sZVNlc3Npb25OYW1lLCBFeHRlcm5hbElkIH07XG4gICAgaWYgKG1mYV9zZXJpYWwpIHtcbiAgICAgIGlmICghb3B0aW9ucy5tZmFDb2RlUHJvdmlkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgICAgYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gcmVxdWlyZXMgbXVsdGktZmFjdG9yIGF1dGhlbnRpY2F0aW9uLGAgKyBgIGJ1dCBubyBNRkEgY29kZSBjYWxsYmFjayB3YXMgcHJvdmlkZWQuYCxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcGFyYW1zLlNlcmlhbE51bWJlciA9IG1mYV9zZXJpYWw7XG4gICAgICBwYXJhbXMuVG9rZW5Db2RlID0gYXdhaXQgb3B0aW9ucy5tZmFDb2RlUHJvdmlkZXIobWZhX3NlcmlhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMucm9sZUFzc3VtZXIoYXdhaXQgc291cmNlQ3JlZHMsIHBhcmFtcyk7XG4gIH1cblxuICAvLyBJZiBubyByb2xlIGFzc3VtcHRpb24gbWV0YWRhdGEgaXMgcHJlc2VudCwgYXR0ZW1wdCB0byBsb2FkIHN0YXRpY1xuICAvLyBjcmVkZW50aWFscyBmcm9tIHRoZSBzZWxlY3RlZCBwcm9maWxlLlxuICBpZiAoaXNTdGF0aWNDcmVkc1Byb2ZpbGUoZGF0YSkpIHtcbiAgICByZXR1cm4gcmVzb2x2ZVN0YXRpY0NyZWRlbnRpYWxzKGRhdGEpO1xuICB9XG5cbiAgLy8gSWYgbm8gc3RhdGljIGNyZWRlbnRpYWxzIGFyZSBwcmVzZW50LCBhdHRlbXB0IHRvIGFzc3VtZSByb2xlIHdpdGhcbiAgLy8gd2ViIGlkZW50aXR5IGlmIHdlYl9pZGVudGl0eV90b2tlbl9maWxlIGFuZCByb2xlX2FybiBpcyBhdmFpbGFibGVcbiAgaWYgKGlzV2ViSWRlbnRpdHlQcm9maWxlKGRhdGEpKSB7XG4gICAgcmV0dXJuIHJlc29sdmVXZWJJZGVudGl0eUNyZWRlbnRpYWxzKGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHByb2ZpbGUgY2Fubm90IGJlIHBhcnNlZCBvciBjb250YWlucyBuZWl0aGVyIHN0YXRpYyBjcmVkZW50aWFsc1xuICAvLyBub3Igcm9sZSBhc3N1bXB0aW9uIG1ldGFkYXRhLCB0aHJvdyBhbiBlcnJvci4gVGhpcyBzaG91bGQgYmUgY29uc2lkZXJlZCBhXG4gIC8vIHRlcm1pbmFsIHJlc29sdXRpb24gZXJyb3IgaWYgYSBwcm9maWxlIGhhcyBiZWVuIHNwZWNpZmllZCBieSB0aGUgdXNlclxuICAvLyAod2hldGhlciB2aWEgYSBwYXJhbWV0ZXIsIGFuIGVudmlyb25tZW50IHZhcmlhYmxlLCBvciBhbm90aGVyIHByb2ZpbGUnc1xuICAvLyBgc291cmNlX3Byb2ZpbGVgIGtleSkuXG4gIHRocm93IG5ldyBQcm92aWRlckVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGNvdWxkIG5vdCBiZSBmb3VuZCBvciBwYXJzZWQgaW4gc2hhcmVkYCArIGAgY3JlZGVudGlhbHMgZmlsZS5gKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSB0aGUgYGNyZWRlbnRpYWxfc291cmNlYCBlbnRyeSBmcm9tIHRoZSBwcm9maWxlLCBhbmQgcmV0dXJuIHRoZVxuICogY3JlZGVudGlhbCBwcm92aWRlcnMgcmVzcGVjdGl2ZWx5LiBObyBtZW1vaXphdGlvbiBpcyBuZWVkZWQgZm9yIHRoZVxuICogY3JlZGVudGlhbCBzb3VyY2UgcHJvdmlkZXJzIGJlY2F1c2UgbWVtb2l6YXRpb24gc2hvdWxkIGJlIGFkZGVkIG91dHNpZGUgdGhlXG4gKiBmcm9tSW5pKCkgcHJvdmlkZXIuIFRoZSBzb3VyY2UgY3JlZGVudGlhbCBuZWVkcyB0byBiZSByZWZyZXNoZWQgZXZlcnkgdGltZVxuICogZnJvbUluaSgpIGlzIGNhbGxlZC5cbiAqL1xuY29uc3QgcmVzb2x2ZUNyZWRlbnRpYWxTb3VyY2UgPSAoY3JlZGVudGlhbFNvdXJjZTogc3RyaW5nLCBwcm9maWxlTmFtZTogc3RyaW5nKTogQ3JlZGVudGlhbFByb3ZpZGVyID0+IHtcbiAgY29uc3Qgc291cmNlUHJvdmlkZXJzTWFwOiB7IFtuYW1lOiBzdHJpbmddOiAoKSA9PiBDcmVkZW50aWFsUHJvdmlkZXIgfSA9IHtcbiAgICBFY3NDb250YWluZXI6IGZyb21Db250YWluZXJNZXRhZGF0YSxcbiAgICBFYzJJbnN0YW5jZU1ldGFkYXRhOiBmcm9tSW5zdGFuY2VNZXRhZGF0YSxcbiAgICBFbnZpcm9ubWVudDogZnJvbUVudixcbiAgfTtcbiAgaWYgKGNyZWRlbnRpYWxTb3VyY2UgaW4gc291cmNlUHJvdmlkZXJzTWFwKSB7XG4gICAgcmV0dXJuIHNvdXJjZVByb3ZpZGVyc01hcFtjcmVkZW50aWFsU291cmNlXSgpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgYFVuc3VwcG9ydGVkIGNyZWRlbnRpYWwgc291cmNlIGluIHByb2ZpbGUgJHtwcm9maWxlTmFtZX0uIEdvdCAke2NyZWRlbnRpYWxTb3VyY2V9LCBgICtcbiAgICAgICAgYGV4cGVjdGVkIEVjc0NvbnRhaW5lciBvciBFYzJJbnN0YW5jZU1ldGFkYXRhIG9yIEVudmlyb25tZW50LmBcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCByZXNvbHZlU3RhdGljQ3JlZGVudGlhbHMgPSAocHJvZmlsZTogU3RhdGljQ3JlZHNQcm9maWxlKTogUHJvbWlzZTxDcmVkZW50aWFscz4gPT5cbiAgUHJvbWlzZS5yZXNvbHZlKHtcbiAgICBhY2Nlc3NLZXlJZDogcHJvZmlsZS5hd3NfYWNjZXNzX2tleV9pZCxcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2ZpbGUuYXdzX3NlY3JldF9hY2Nlc3Nfa2V5LFxuICAgIHNlc3Npb25Ub2tlbjogcHJvZmlsZS5hd3Nfc2Vzc2lvbl90b2tlbixcbiAgfSk7XG5cbmNvbnN0IHJlc29sdmVXZWJJZGVudGl0eUNyZWRlbnRpYWxzID0gYXN5bmMgKHByb2ZpbGU6IFdlYklkZW50aXR5UHJvZmlsZSwgb3B0aW9uczogRnJvbUluaUluaXQpOiBQcm9taXNlPENyZWRlbnRpYWxzPiA9PlxuICBmcm9tVG9rZW5GaWxlKHtcbiAgICB3ZWJJZGVudGl0eVRva2VuRmlsZTogcHJvZmlsZS53ZWJfaWRlbnRpdHlfdG9rZW5fZmlsZSxcbiAgICByb2xlQXJuOiBwcm9maWxlLnJvbGVfYXJuLFxuICAgIHJvbGVTZXNzaW9uTmFtZTogcHJvZmlsZS5yb2xlX3Nlc3Npb25fbmFtZSxcbiAgICByb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eTogb3B0aW9ucy5yb2xlQXNzdW1lcldpdGhXZWJJZGVudGl0eSxcbiAgfSkoKTtcbiJdfQ==