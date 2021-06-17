"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1ListRunsCommand = exports.serializeAws_json1_1ListRemoteAccessSessionsCommand = exports.serializeAws_json1_1ListProjectsCommand = exports.serializeAws_json1_1ListOfferingTransactionsCommand = exports.serializeAws_json1_1ListOfferingsCommand = exports.serializeAws_json1_1ListOfferingPromotionsCommand = exports.serializeAws_json1_1ListNetworkProfilesCommand = exports.serializeAws_json1_1ListJobsCommand = exports.serializeAws_json1_1ListInstanceProfilesCommand = exports.serializeAws_json1_1ListDevicesCommand = exports.serializeAws_json1_1ListDevicePoolsCommand = exports.serializeAws_json1_1ListDeviceInstancesCommand = exports.serializeAws_json1_1ListArtifactsCommand = exports.serializeAws_json1_1InstallToRemoteAccessSessionCommand = exports.serializeAws_json1_1GetVPCEConfigurationCommand = exports.serializeAws_json1_1GetUploadCommand = exports.serializeAws_json1_1GetTestGridSessionCommand = exports.serializeAws_json1_1GetTestGridProjectCommand = exports.serializeAws_json1_1GetTestCommand = exports.serializeAws_json1_1GetSuiteCommand = exports.serializeAws_json1_1GetRunCommand = exports.serializeAws_json1_1GetRemoteAccessSessionCommand = exports.serializeAws_json1_1GetProjectCommand = exports.serializeAws_json1_1GetOfferingStatusCommand = exports.serializeAws_json1_1GetNetworkProfileCommand = exports.serializeAws_json1_1GetJobCommand = exports.serializeAws_json1_1GetInstanceProfileCommand = exports.serializeAws_json1_1GetDevicePoolCompatibilityCommand = exports.serializeAws_json1_1GetDevicePoolCommand = exports.serializeAws_json1_1GetDeviceInstanceCommand = exports.serializeAws_json1_1GetDeviceCommand = exports.serializeAws_json1_1GetAccountSettingsCommand = exports.serializeAws_json1_1DeleteVPCEConfigurationCommand = exports.serializeAws_json1_1DeleteUploadCommand = exports.serializeAws_json1_1DeleteTestGridProjectCommand = exports.serializeAws_json1_1DeleteRunCommand = exports.serializeAws_json1_1DeleteRemoteAccessSessionCommand = exports.serializeAws_json1_1DeleteProjectCommand = exports.serializeAws_json1_1DeleteNetworkProfileCommand = exports.serializeAws_json1_1DeleteInstanceProfileCommand = exports.serializeAws_json1_1DeleteDevicePoolCommand = exports.serializeAws_json1_1CreateVPCEConfigurationCommand = exports.serializeAws_json1_1CreateUploadCommand = exports.serializeAws_json1_1CreateTestGridUrlCommand = exports.serializeAws_json1_1CreateTestGridProjectCommand = exports.serializeAws_json1_1CreateRemoteAccessSessionCommand = exports.serializeAws_json1_1CreateProjectCommand = exports.serializeAws_json1_1CreateNetworkProfileCommand = exports.serializeAws_json1_1CreateInstanceProfileCommand = exports.serializeAws_json1_1CreateDevicePoolCommand = void 0;
exports.deserializeAws_json1_1GetDevicePoolCompatibilityCommand = exports.deserializeAws_json1_1GetDevicePoolCommand = exports.deserializeAws_json1_1GetDeviceInstanceCommand = exports.deserializeAws_json1_1GetDeviceCommand = exports.deserializeAws_json1_1GetAccountSettingsCommand = exports.deserializeAws_json1_1DeleteVPCEConfigurationCommand = exports.deserializeAws_json1_1DeleteUploadCommand = exports.deserializeAws_json1_1DeleteTestGridProjectCommand = exports.deserializeAws_json1_1DeleteRunCommand = exports.deserializeAws_json1_1DeleteRemoteAccessSessionCommand = exports.deserializeAws_json1_1DeleteProjectCommand = exports.deserializeAws_json1_1DeleteNetworkProfileCommand = exports.deserializeAws_json1_1DeleteInstanceProfileCommand = exports.deserializeAws_json1_1DeleteDevicePoolCommand = exports.deserializeAws_json1_1CreateVPCEConfigurationCommand = exports.deserializeAws_json1_1CreateUploadCommand = exports.deserializeAws_json1_1CreateTestGridUrlCommand = exports.deserializeAws_json1_1CreateTestGridProjectCommand = exports.deserializeAws_json1_1CreateRemoteAccessSessionCommand = exports.deserializeAws_json1_1CreateProjectCommand = exports.deserializeAws_json1_1CreateNetworkProfileCommand = exports.deserializeAws_json1_1CreateInstanceProfileCommand = exports.deserializeAws_json1_1CreateDevicePoolCommand = exports.serializeAws_json1_1UpdateVPCEConfigurationCommand = exports.serializeAws_json1_1UpdateUploadCommand = exports.serializeAws_json1_1UpdateTestGridProjectCommand = exports.serializeAws_json1_1UpdateProjectCommand = exports.serializeAws_json1_1UpdateNetworkProfileCommand = exports.serializeAws_json1_1UpdateInstanceProfileCommand = exports.serializeAws_json1_1UpdateDevicePoolCommand = exports.serializeAws_json1_1UpdateDeviceInstanceCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopRunCommand = exports.serializeAws_json1_1StopRemoteAccessSessionCommand = exports.serializeAws_json1_1StopJobCommand = exports.serializeAws_json1_1ScheduleRunCommand = exports.serializeAws_json1_1RenewOfferingCommand = exports.serializeAws_json1_1PurchaseOfferingCommand = exports.serializeAws_json1_1ListVPCEConfigurationsCommand = exports.serializeAws_json1_1ListUploadsCommand = exports.serializeAws_json1_1ListUniqueProblemsCommand = exports.serializeAws_json1_1ListTestsCommand = exports.serializeAws_json1_1ListTestGridSessionsCommand = exports.serializeAws_json1_1ListTestGridSessionArtifactsCommand = exports.serializeAws_json1_1ListTestGridSessionActionsCommand = exports.serializeAws_json1_1ListTestGridProjectsCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListSuitesCommand = exports.serializeAws_json1_1ListSamplesCommand = void 0;
exports.deserializeAws_json1_1UpdateNetworkProfileCommand = exports.deserializeAws_json1_1UpdateInstanceProfileCommand = exports.deserializeAws_json1_1UpdateDevicePoolCommand = exports.deserializeAws_json1_1UpdateDeviceInstanceCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopRunCommand = exports.deserializeAws_json1_1StopRemoteAccessSessionCommand = exports.deserializeAws_json1_1StopJobCommand = exports.deserializeAws_json1_1ScheduleRunCommand = exports.deserializeAws_json1_1RenewOfferingCommand = exports.deserializeAws_json1_1PurchaseOfferingCommand = exports.deserializeAws_json1_1ListVPCEConfigurationsCommand = exports.deserializeAws_json1_1ListUploadsCommand = exports.deserializeAws_json1_1ListUniqueProblemsCommand = exports.deserializeAws_json1_1ListTestsCommand = exports.deserializeAws_json1_1ListTestGridSessionsCommand = exports.deserializeAws_json1_1ListTestGridSessionArtifactsCommand = exports.deserializeAws_json1_1ListTestGridSessionActionsCommand = exports.deserializeAws_json1_1ListTestGridProjectsCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListSuitesCommand = exports.deserializeAws_json1_1ListSamplesCommand = exports.deserializeAws_json1_1ListRunsCommand = exports.deserializeAws_json1_1ListRemoteAccessSessionsCommand = exports.deserializeAws_json1_1ListProjectsCommand = exports.deserializeAws_json1_1ListOfferingTransactionsCommand = exports.deserializeAws_json1_1ListOfferingsCommand = exports.deserializeAws_json1_1ListOfferingPromotionsCommand = exports.deserializeAws_json1_1ListNetworkProfilesCommand = exports.deserializeAws_json1_1ListJobsCommand = exports.deserializeAws_json1_1ListInstanceProfilesCommand = exports.deserializeAws_json1_1ListDevicesCommand = exports.deserializeAws_json1_1ListDevicePoolsCommand = exports.deserializeAws_json1_1ListDeviceInstancesCommand = exports.deserializeAws_json1_1ListArtifactsCommand = exports.deserializeAws_json1_1InstallToRemoteAccessSessionCommand = exports.deserializeAws_json1_1GetVPCEConfigurationCommand = exports.deserializeAws_json1_1GetUploadCommand = exports.deserializeAws_json1_1GetTestGridSessionCommand = exports.deserializeAws_json1_1GetTestGridProjectCommand = exports.deserializeAws_json1_1GetTestCommand = exports.deserializeAws_json1_1GetSuiteCommand = exports.deserializeAws_json1_1GetRunCommand = exports.deserializeAws_json1_1GetRemoteAccessSessionCommand = exports.deserializeAws_json1_1GetProjectCommand = exports.deserializeAws_json1_1GetOfferingStatusCommand = exports.deserializeAws_json1_1GetNetworkProfileCommand = exports.deserializeAws_json1_1GetJobCommand = exports.deserializeAws_json1_1GetInstanceProfileCommand = void 0;
exports.deserializeAws_json1_1UpdateVPCEConfigurationCommand = exports.deserializeAws_json1_1UpdateUploadCommand = exports.deserializeAws_json1_1UpdateTestGridProjectCommand = exports.deserializeAws_json1_1UpdateProjectCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateDevicePoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateDevicePool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDevicePoolCommand = serializeAws_json1_1CreateDevicePoolCommand;
const serializeAws_json1_1CreateInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateInstanceProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateInstanceProfileCommand = serializeAws_json1_1CreateInstanceProfileCommand;
const serializeAws_json1_1CreateNetworkProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateNetworkProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateNetworkProfileCommand = serializeAws_json1_1CreateNetworkProfileCommand;
const serializeAws_json1_1CreateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProjectCommand = serializeAws_json1_1CreateProjectCommand;
const serializeAws_json1_1CreateRemoteAccessSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateRemoteAccessSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRemoteAccessSessionCommand = serializeAws_json1_1CreateRemoteAccessSessionCommand;
const serializeAws_json1_1CreateTestGridProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateTestGridProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTestGridProjectCommand = serializeAws_json1_1CreateTestGridProjectCommand;
const serializeAws_json1_1CreateTestGridUrlCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateTestGridUrl",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTestGridUrlRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTestGridUrlCommand = serializeAws_json1_1CreateTestGridUrlCommand;
const serializeAws_json1_1CreateUploadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateUpload",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUploadCommand = serializeAws_json1_1CreateUploadCommand;
const serializeAws_json1_1CreateVPCEConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.CreateVPCEConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateVPCEConfigurationCommand = serializeAws_json1_1CreateVPCEConfigurationCommand;
const serializeAws_json1_1DeleteDevicePoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteDevicePool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDevicePoolCommand = serializeAws_json1_1DeleteDevicePoolCommand;
const serializeAws_json1_1DeleteInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteInstanceProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteInstanceProfileCommand = serializeAws_json1_1DeleteInstanceProfileCommand;
const serializeAws_json1_1DeleteNetworkProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteNetworkProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteNetworkProfileCommand = serializeAws_json1_1DeleteNetworkProfileCommand;
const serializeAws_json1_1DeleteProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProjectCommand = serializeAws_json1_1DeleteProjectCommand;
const serializeAws_json1_1DeleteRemoteAccessSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteRemoteAccessSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRemoteAccessSessionCommand = serializeAws_json1_1DeleteRemoteAccessSessionCommand;
const serializeAws_json1_1DeleteRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRunCommand = serializeAws_json1_1DeleteRunCommand;
const serializeAws_json1_1DeleteTestGridProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteTestGridProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTestGridProjectCommand = serializeAws_json1_1DeleteTestGridProjectCommand;
const serializeAws_json1_1DeleteUploadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteUpload",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUploadCommand = serializeAws_json1_1DeleteUploadCommand;
const serializeAws_json1_1DeleteVPCEConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.DeleteVPCEConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVPCEConfigurationCommand = serializeAws_json1_1DeleteVPCEConfigurationCommand;
const serializeAws_json1_1GetAccountSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetAccountSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccountSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAccountSettingsCommand = serializeAws_json1_1GetAccountSettingsCommand;
const serializeAws_json1_1GetDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetDevice",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeviceCommand = serializeAws_json1_1GetDeviceCommand;
const serializeAws_json1_1GetDeviceInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetDeviceInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeviceInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeviceInstanceCommand = serializeAws_json1_1GetDeviceInstanceCommand;
const serializeAws_json1_1GetDevicePoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetDevicePool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDevicePoolCommand = serializeAws_json1_1GetDevicePoolCommand;
const serializeAws_json1_1GetDevicePoolCompatibilityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetDevicePoolCompatibility",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDevicePoolCompatibilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDevicePoolCompatibilityCommand = serializeAws_json1_1GetDevicePoolCompatibilityCommand;
const serializeAws_json1_1GetInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetInstanceProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceProfileCommand = serializeAws_json1_1GetInstanceProfileCommand;
const serializeAws_json1_1GetJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetJobCommand = serializeAws_json1_1GetJobCommand;
const serializeAws_json1_1GetNetworkProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetNetworkProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetNetworkProfileCommand = serializeAws_json1_1GetNetworkProfileCommand;
const serializeAws_json1_1GetOfferingStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetOfferingStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOfferingStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOfferingStatusCommand = serializeAws_json1_1GetOfferingStatusCommand;
const serializeAws_json1_1GetProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetProjectCommand = serializeAws_json1_1GetProjectCommand;
const serializeAws_json1_1GetRemoteAccessSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetRemoteAccessSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRemoteAccessSessionCommand = serializeAws_json1_1GetRemoteAccessSessionCommand;
const serializeAws_json1_1GetRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRunCommand = serializeAws_json1_1GetRunCommand;
const serializeAws_json1_1GetSuiteCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetSuite",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSuiteRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSuiteCommand = serializeAws_json1_1GetSuiteCommand;
const serializeAws_json1_1GetTestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetTest",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTestCommand = serializeAws_json1_1GetTestCommand;
const serializeAws_json1_1GetTestGridProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetTestGridProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTestGridProjectCommand = serializeAws_json1_1GetTestGridProjectCommand;
const serializeAws_json1_1GetTestGridSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetTestGridSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTestGridSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTestGridSessionCommand = serializeAws_json1_1GetTestGridSessionCommand;
const serializeAws_json1_1GetUploadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetUpload",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetUploadCommand = serializeAws_json1_1GetUploadCommand;
const serializeAws_json1_1GetVPCEConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.GetVPCEConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetVPCEConfigurationCommand = serializeAws_json1_1GetVPCEConfigurationCommand;
const serializeAws_json1_1InstallToRemoteAccessSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.InstallToRemoteAccessSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1InstallToRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1InstallToRemoteAccessSessionCommand = serializeAws_json1_1InstallToRemoteAccessSessionCommand;
const serializeAws_json1_1ListArtifactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListArtifacts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListArtifactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListArtifactsCommand = serializeAws_json1_1ListArtifactsCommand;
const serializeAws_json1_1ListDeviceInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListDeviceInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeviceInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDeviceInstancesCommand = serializeAws_json1_1ListDeviceInstancesCommand;
const serializeAws_json1_1ListDevicePoolsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListDevicePools",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevicePoolsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDevicePoolsCommand = serializeAws_json1_1ListDevicePoolsCommand;
const serializeAws_json1_1ListDevicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListDevices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDevicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDevicesCommand = serializeAws_json1_1ListDevicesCommand;
const serializeAws_json1_1ListInstanceProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListInstanceProfiles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstanceProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListInstanceProfilesCommand = serializeAws_json1_1ListInstanceProfilesCommand;
const serializeAws_json1_1ListJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListJobsCommand = serializeAws_json1_1ListJobsCommand;
const serializeAws_json1_1ListNetworkProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListNetworkProfiles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNetworkProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListNetworkProfilesCommand = serializeAws_json1_1ListNetworkProfilesCommand;
const serializeAws_json1_1ListOfferingPromotionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListOfferingPromotions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOfferingPromotionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOfferingPromotionsCommand = serializeAws_json1_1ListOfferingPromotionsCommand;
const serializeAws_json1_1ListOfferingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListOfferings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOfferingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOfferingsCommand = serializeAws_json1_1ListOfferingsCommand;
const serializeAws_json1_1ListOfferingTransactionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListOfferingTransactions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOfferingTransactionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOfferingTransactionsCommand = serializeAws_json1_1ListOfferingTransactionsCommand;
const serializeAws_json1_1ListProjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListProjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProjectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProjectsCommand = serializeAws_json1_1ListProjectsCommand;
const serializeAws_json1_1ListRemoteAccessSessionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListRemoteAccessSessions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRemoteAccessSessionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRemoteAccessSessionsCommand = serializeAws_json1_1ListRemoteAccessSessionsCommand;
const serializeAws_json1_1ListRunsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListRuns",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRunsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRunsCommand = serializeAws_json1_1ListRunsCommand;
const serializeAws_json1_1ListSamplesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListSamples",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSamplesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSamplesCommand = serializeAws_json1_1ListSamplesCommand;
const serializeAws_json1_1ListSuitesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListSuites",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSuitesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSuitesCommand = serializeAws_json1_1ListSuitesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListTestGridProjectsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListTestGridProjects",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridProjectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTestGridProjectsCommand = serializeAws_json1_1ListTestGridProjectsCommand;
const serializeAws_json1_1ListTestGridSessionActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListTestGridSessionActions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridSessionActionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTestGridSessionActionsCommand = serializeAws_json1_1ListTestGridSessionActionsCommand;
const serializeAws_json1_1ListTestGridSessionArtifactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListTestGridSessionArtifacts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridSessionArtifactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTestGridSessionArtifactsCommand = serializeAws_json1_1ListTestGridSessionArtifactsCommand;
const serializeAws_json1_1ListTestGridSessionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListTestGridSessions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestGridSessionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTestGridSessionsCommand = serializeAws_json1_1ListTestGridSessionsCommand;
const serializeAws_json1_1ListTestsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListTests",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTestsCommand = serializeAws_json1_1ListTestsCommand;
const serializeAws_json1_1ListUniqueProblemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListUniqueProblems",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUniqueProblemsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUniqueProblemsCommand = serializeAws_json1_1ListUniqueProblemsCommand;
const serializeAws_json1_1ListUploadsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListUploads",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUploadsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUploadsCommand = serializeAws_json1_1ListUploadsCommand;
const serializeAws_json1_1ListVPCEConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ListVPCEConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListVPCEConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListVPCEConfigurationsCommand = serializeAws_json1_1ListVPCEConfigurationsCommand;
const serializeAws_json1_1PurchaseOfferingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.PurchaseOffering",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PurchaseOfferingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PurchaseOfferingCommand = serializeAws_json1_1PurchaseOfferingCommand;
const serializeAws_json1_1RenewOfferingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.RenewOffering",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RenewOfferingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RenewOfferingCommand = serializeAws_json1_1RenewOfferingCommand;
const serializeAws_json1_1ScheduleRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.ScheduleRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ScheduleRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ScheduleRunCommand = serializeAws_json1_1ScheduleRunCommand;
const serializeAws_json1_1StopJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.StopJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopJobCommand = serializeAws_json1_1StopJobCommand;
const serializeAws_json1_1StopRemoteAccessSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.StopRemoteAccessSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopRemoteAccessSessionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopRemoteAccessSessionCommand = serializeAws_json1_1StopRemoteAccessSessionCommand;
const serializeAws_json1_1StopRunCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.StopRun",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopRunRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopRunCommand = serializeAws_json1_1StopRunCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateDeviceInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateDeviceInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDeviceInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDeviceInstanceCommand = serializeAws_json1_1UpdateDeviceInstanceCommand;
const serializeAws_json1_1UpdateDevicePoolCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateDevicePool",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDevicePoolRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDevicePoolCommand = serializeAws_json1_1UpdateDevicePoolCommand;
const serializeAws_json1_1UpdateInstanceProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateInstanceProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateInstanceProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateInstanceProfileCommand = serializeAws_json1_1UpdateInstanceProfileCommand;
const serializeAws_json1_1UpdateNetworkProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateNetworkProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNetworkProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateNetworkProfileCommand = serializeAws_json1_1UpdateNetworkProfileCommand;
const serializeAws_json1_1UpdateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProjectCommand = serializeAws_json1_1UpdateProjectCommand;
const serializeAws_json1_1UpdateTestGridProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateTestGridProject",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTestGridProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTestGridProjectCommand = serializeAws_json1_1UpdateTestGridProjectCommand;
const serializeAws_json1_1UpdateUploadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateUpload",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUploadCommand = serializeAws_json1_1UpdateUploadCommand;
const serializeAws_json1_1UpdateVPCEConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "DeviceFarm_20150623.UpdateVPCEConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVPCEConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateVPCEConfigurationCommand = serializeAws_json1_1UpdateVPCEConfigurationCommand;
const deserializeAws_json1_1CreateDevicePoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDevicePoolResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDevicePoolCommand = deserializeAws_json1_1CreateDevicePoolCommand;
const deserializeAws_json1_1CreateDevicePoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstanceProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateInstanceProfileCommand = deserializeAws_json1_1CreateInstanceProfileCommand;
const deserializeAws_json1_1CreateInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateNetworkProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateNetworkProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateNetworkProfileCommand = deserializeAws_json1_1CreateNetworkProfileCommand;
const deserializeAws_json1_1CreateNetworkProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProjectCommand = deserializeAws_json1_1CreateProjectCommand;
const deserializeAws_json1_1CreateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOperationException":
        case "com.amazonaws.devicefarm#TagOperationException":
            response = {
                ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRemoteAccessSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRemoteAccessSessionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRemoteAccessSessionCommand = deserializeAws_json1_1CreateRemoteAccessSessionCommand;
const deserializeAws_json1_1CreateRemoteAccessSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTestGridProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTestGridProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTestGridProjectCommand = deserializeAws_json1_1CreateTestGridProjectCommand;
const deserializeAws_json1_1CreateTestGridProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTestGridUrlCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTestGridUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTestGridUrlResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTestGridUrlCommand = deserializeAws_json1_1CreateTestGridUrlCommand;
const deserializeAws_json1_1CreateTestGridUrlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateUploadCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUploadResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUploadCommand = deserializeAws_json1_1CreateUploadCommand;
const deserializeAws_json1_1CreateUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateVPCEConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVPCEConfigurationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateVPCEConfigurationCommand = deserializeAws_json1_1CreateVPCEConfigurationCommand;
const deserializeAws_json1_1CreateVPCEConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteDevicePoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDevicePoolResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDevicePoolCommand = deserializeAws_json1_1DeleteDevicePoolCommand;
const deserializeAws_json1_1DeleteDevicePoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInstanceProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteInstanceProfileCommand = deserializeAws_json1_1DeleteInstanceProfileCommand;
const deserializeAws_json1_1DeleteInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteNetworkProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNetworkProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteNetworkProfileCommand = deserializeAws_json1_1DeleteNetworkProfileCommand;
const deserializeAws_json1_1DeleteNetworkProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProjectCommand = deserializeAws_json1_1DeleteProjectCommand;
const deserializeAws_json1_1DeleteProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRemoteAccessSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRemoteAccessSessionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRemoteAccessSessionCommand = deserializeAws_json1_1DeleteRemoteAccessSessionCommand;
const deserializeAws_json1_1DeleteRemoteAccessSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRunResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRunCommand = deserializeAws_json1_1DeleteRunCommand;
const deserializeAws_json1_1DeleteRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteTestGridProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTestGridProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTestGridProjectCommand = deserializeAws_json1_1DeleteTestGridProjectCommand;
const deserializeAws_json1_1DeleteTestGridProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CannotDeleteException":
        case "com.amazonaws.devicefarm#CannotDeleteException":
            response = {
                ...(await deserializeAws_json1_1CannotDeleteExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteUploadCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUploadResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUploadCommand = deserializeAws_json1_1DeleteUploadCommand;
const deserializeAws_json1_1DeleteUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteVPCEConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVPCEConfigurationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVPCEConfigurationCommand = deserializeAws_json1_1DeleteVPCEConfigurationCommand;
const deserializeAws_json1_1DeleteVPCEConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.devicefarm#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAccountSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAccountSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccountSettingsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAccountSettingsCommand = deserializeAws_json1_1GetAccountSettingsCommand;
const deserializeAws_json1_1GetAccountSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDeviceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeviceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeviceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeviceCommand = deserializeAws_json1_1GetDeviceCommand;
const deserializeAws_json1_1GetDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDeviceInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeviceInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeviceInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeviceInstanceCommand = deserializeAws_json1_1GetDeviceInstanceCommand;
const deserializeAws_json1_1GetDeviceInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDevicePoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevicePoolResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDevicePoolCommand = deserializeAws_json1_1GetDevicePoolCommand;
const deserializeAws_json1_1GetDevicePoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetDevicePoolCompatibilityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDevicePoolCompatibilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDevicePoolCompatibilityResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDevicePoolCompatibilityCommand = deserializeAws_json1_1GetDevicePoolCompatibilityCommand;
const deserializeAws_json1_1GetDevicePoolCompatibilityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceProfileCommand = deserializeAws_json1_1GetInstanceProfileCommand;
const deserializeAws_json1_1GetInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetJobCommand = deserializeAws_json1_1GetJobCommand;
const deserializeAws_json1_1GetJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetNetworkProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNetworkProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetNetworkProfileCommand = deserializeAws_json1_1GetNetworkProfileCommand;
const deserializeAws_json1_1GetNetworkProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetOfferingStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOfferingStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOfferingStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOfferingStatusCommand = deserializeAws_json1_1GetOfferingStatusCommand;
const deserializeAws_json1_1GetOfferingStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotEligibleException":
        case "com.amazonaws.devicefarm#NotEligibleException":
            response = {
                ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetProjectCommand = deserializeAws_json1_1GetProjectCommand;
const deserializeAws_json1_1GetProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRemoteAccessSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRemoteAccessSessionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRemoteAccessSessionCommand = deserializeAws_json1_1GetRemoteAccessSessionCommand;
const deserializeAws_json1_1GetRemoteAccessSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRunResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRunCommand = deserializeAws_json1_1GetRunCommand;
const deserializeAws_json1_1GetRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSuiteCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSuiteCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSuiteResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSuiteCommand = deserializeAws_json1_1GetSuiteCommand;
const deserializeAws_json1_1GetSuiteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetTestCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTestResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTestCommand = deserializeAws_json1_1GetTestCommand;
const deserializeAws_json1_1GetTestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetTestGridProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTestGridProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTestGridProjectCommand = deserializeAws_json1_1GetTestGridProjectCommand;
const deserializeAws_json1_1GetTestGridProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetTestGridSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTestGridSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTestGridSessionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTestGridSessionCommand = deserializeAws_json1_1GetTestGridSessionCommand;
const deserializeAws_json1_1GetTestGridSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetUploadCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetUploadResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetUploadCommand = deserializeAws_json1_1GetUploadCommand;
const deserializeAws_json1_1GetUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetVPCEConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetVPCEConfigurationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetVPCEConfigurationCommand = deserializeAws_json1_1GetVPCEConfigurationCommand;
const deserializeAws_json1_1GetVPCEConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1InstallToRemoteAccessSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1InstallToRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InstallToRemoteAccessSessionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1InstallToRemoteAccessSessionCommand = deserializeAws_json1_1InstallToRemoteAccessSessionCommand;
const deserializeAws_json1_1InstallToRemoteAccessSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListArtifactsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListArtifactsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListArtifactsCommand = deserializeAws_json1_1ListArtifactsCommand;
const deserializeAws_json1_1ListArtifactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDeviceInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDeviceInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeviceInstancesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDeviceInstancesCommand = deserializeAws_json1_1ListDeviceInstancesCommand;
const deserializeAws_json1_1ListDeviceInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDevicePoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDevicePoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevicePoolsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDevicePoolsCommand = deserializeAws_json1_1ListDevicePoolsCommand;
const deserializeAws_json1_1ListDevicePoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListDevicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDevicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDevicesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDevicesCommand = deserializeAws_json1_1ListDevicesCommand;
const deserializeAws_json1_1ListDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListInstanceProfilesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListInstanceProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstanceProfilesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListInstanceProfilesCommand = deserializeAws_json1_1ListInstanceProfilesCommand;
const deserializeAws_json1_1ListInstanceProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListJobsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListJobsCommand = deserializeAws_json1_1ListJobsCommand;
const deserializeAws_json1_1ListJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListNetworkProfilesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListNetworkProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNetworkProfilesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListNetworkProfilesCommand = deserializeAws_json1_1ListNetworkProfilesCommand;
const deserializeAws_json1_1ListNetworkProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListOfferingPromotionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOfferingPromotionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOfferingPromotionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOfferingPromotionsCommand = deserializeAws_json1_1ListOfferingPromotionsCommand;
const deserializeAws_json1_1ListOfferingPromotionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotEligibleException":
        case "com.amazonaws.devicefarm#NotEligibleException":
            response = {
                ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListOfferingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOfferingsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOfferingsCommand = deserializeAws_json1_1ListOfferingsCommand;
const deserializeAws_json1_1ListOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotEligibleException":
        case "com.amazonaws.devicefarm#NotEligibleException":
            response = {
                ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListOfferingTransactionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOfferingTransactionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOfferingTransactionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOfferingTransactionsCommand = deserializeAws_json1_1ListOfferingTransactionsCommand;
const deserializeAws_json1_1ListOfferingTransactionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotEligibleException":
        case "com.amazonaws.devicefarm#NotEligibleException":
            response = {
                ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListProjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProjectsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProjectsCommand = deserializeAws_json1_1ListProjectsCommand;
const deserializeAws_json1_1ListProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRemoteAccessSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRemoteAccessSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRemoteAccessSessionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRemoteAccessSessionsCommand = deserializeAws_json1_1ListRemoteAccessSessionsCommand;
const deserializeAws_json1_1ListRemoteAccessSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRunsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRunsCommand = deserializeAws_json1_1ListRunsCommand;
const deserializeAws_json1_1ListRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSamplesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSamplesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSamplesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSamplesCommand = deserializeAws_json1_1ListSamplesCommand;
const deserializeAws_json1_1ListSamplesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSuitesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSuitesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSuitesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSuitesCommand = deserializeAws_json1_1ListSuitesCommand;
const deserializeAws_json1_1ListSuitesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOperationException":
        case "com.amazonaws.devicefarm#TagOperationException":
            response = {
                ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTestGridProjectsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTestGridProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridProjectsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTestGridProjectsCommand = deserializeAws_json1_1ListTestGridProjectsCommand;
const deserializeAws_json1_1ListTestGridProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTestGridSessionActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTestGridSessionActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridSessionActionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTestGridSessionActionsCommand = deserializeAws_json1_1ListTestGridSessionActionsCommand;
const deserializeAws_json1_1ListTestGridSessionActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTestGridSessionArtifactsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTestGridSessionArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridSessionArtifactsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTestGridSessionArtifactsCommand = deserializeAws_json1_1ListTestGridSessionArtifactsCommand;
const deserializeAws_json1_1ListTestGridSessionArtifactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTestGridSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTestGridSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestGridSessionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTestGridSessionsCommand = deserializeAws_json1_1ListTestGridSessionsCommand;
const deserializeAws_json1_1ListTestGridSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTestsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTestsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTestsCommand = deserializeAws_json1_1ListTestsCommand;
const deserializeAws_json1_1ListTestsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListUniqueProblemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUniqueProblemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUniqueProblemsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUniqueProblemsCommand = deserializeAws_json1_1ListUniqueProblemsCommand;
const deserializeAws_json1_1ListUniqueProblemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListUploadsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUploadsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUploadsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUploadsCommand = deserializeAws_json1_1ListUploadsCommand;
const deserializeAws_json1_1ListUploadsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListVPCEConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListVPCEConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListVPCEConfigurationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListVPCEConfigurationsCommand = deserializeAws_json1_1ListVPCEConfigurationsCommand;
const deserializeAws_json1_1ListVPCEConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PurchaseOfferingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PurchaseOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PurchaseOfferingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PurchaseOfferingCommand = deserializeAws_json1_1PurchaseOfferingCommand;
const deserializeAws_json1_1PurchaseOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotEligibleException":
        case "com.amazonaws.devicefarm#NotEligibleException":
            response = {
                ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RenewOfferingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RenewOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RenewOfferingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RenewOfferingCommand = deserializeAws_json1_1RenewOfferingCommand;
const deserializeAws_json1_1RenewOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotEligibleException":
        case "com.amazonaws.devicefarm#NotEligibleException":
            response = {
                ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ScheduleRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ScheduleRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ScheduleRunResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ScheduleRunCommand = deserializeAws_json1_1ScheduleRunCommand;
const deserializeAws_json1_1ScheduleRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotencyException":
        case "com.amazonaws.devicefarm#IdempotencyException":
            response = {
                ...(await deserializeAws_json1_1IdempotencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopJobResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopJobCommand = deserializeAws_json1_1StopJobCommand;
const deserializeAws_json1_1StopJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopRemoteAccessSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopRemoteAccessSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopRemoteAccessSessionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopRemoteAccessSessionCommand = deserializeAws_json1_1StopRemoteAccessSessionCommand;
const deserializeAws_json1_1StopRemoteAccessSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopRunResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopRunCommand = deserializeAws_json1_1StopRunCommand;
const deserializeAws_json1_1StopRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOperationException":
        case "com.amazonaws.devicefarm#TagOperationException":
            response = {
                ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.devicefarm#TagPolicyException":
            response = {
                ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.devicefarm#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagOperationException":
        case "com.amazonaws.devicefarm#TagOperationException":
            response = {
                ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDeviceInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDeviceInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDeviceInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDeviceInstanceCommand = deserializeAws_json1_1UpdateDeviceInstanceCommand;
const deserializeAws_json1_1UpdateDeviceInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateDevicePoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDevicePoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDevicePoolResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDevicePoolCommand = deserializeAws_json1_1UpdateDevicePoolCommand;
const deserializeAws_json1_1UpdateDevicePoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateInstanceProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateInstanceProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateInstanceProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateInstanceProfileCommand = deserializeAws_json1_1UpdateInstanceProfileCommand;
const deserializeAws_json1_1UpdateInstanceProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateNetworkProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNetworkProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateNetworkProfileCommand = deserializeAws_json1_1UpdateNetworkProfileCommand;
const deserializeAws_json1_1UpdateNetworkProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProjectCommand = deserializeAws_json1_1UpdateProjectCommand;
const deserializeAws_json1_1UpdateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateTestGridProjectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTestGridProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTestGridProjectResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTestGridProjectCommand = deserializeAws_json1_1UpdateTestGridProjectCommand;
const deserializeAws_json1_1UpdateTestGridProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.devicefarm#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateUploadCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateUploadResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUploadCommand = deserializeAws_json1_1UpdateUploadCommand;
const deserializeAws_json1_1UpdateUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.devicefarm#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateVPCEConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateVPCEConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateVPCEConfigurationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateVPCEConfigurationCommand = deserializeAws_json1_1UpdateVPCEConfigurationCommand;
const deserializeAws_json1_1UpdateVPCEConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ArgumentException":
        case "com.amazonaws.devicefarm#ArgumentException":
            response = {
                ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.devicefarm#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.devicefarm#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAccountException":
        case "com.amazonaws.devicefarm#ServiceAccountException":
            response = {
                ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ArgumentException(body, context);
    const contents = {
        name: "ArgumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CannotDeleteExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CannotDeleteException(body, context);
    const contents = {
        name: "CannotDeleteException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IdempotencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotencyException(body, context);
    const contents = {
        name: "IdempotencyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = {
        name: "InternalServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = {
        name: "InvalidOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NotEligibleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotEligibleException(body, context);
    const contents = {
        name: "NotEligibleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceAccountException(body, context);
    const contents = {
        name: "ServiceAccountException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagOperationException(body, context);
    const contents = {
        name: "TagOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagPolicyException(body, context);
    const contents = {
        name: "TagPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AmazonResourceNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AndroidPaths = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateDevicePoolRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.maxDevices !== undefined && input.maxDevices !== null && { maxDevices: input.maxDevices }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.rules !== undefined &&
            input.rules !== null && { rules: serializeAws_json1_1Rules(input.rules, context) }),
    };
};
const serializeAws_json1_1CreateInstanceProfileRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.excludeAppPackagesFromCleanup !== undefined &&
            input.excludeAppPackagesFromCleanup !== null && {
            excludeAppPackagesFromCleanup: serializeAws_json1_1PackageIds(input.excludeAppPackagesFromCleanup, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.packageCleanup !== undefined &&
            input.packageCleanup !== null && { packageCleanup: input.packageCleanup }),
        ...(input.rebootAfterUse !== undefined &&
            input.rebootAfterUse !== null && { rebootAfterUse: input.rebootAfterUse }),
    };
};
const serializeAws_json1_1CreateNetworkProfileRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.downlinkBandwidthBits !== undefined &&
            input.downlinkBandwidthBits !== null && { downlinkBandwidthBits: input.downlinkBandwidthBits }),
        ...(input.downlinkDelayMs !== undefined &&
            input.downlinkDelayMs !== null && { downlinkDelayMs: input.downlinkDelayMs }),
        ...(input.downlinkJitterMs !== undefined &&
            input.downlinkJitterMs !== null && { downlinkJitterMs: input.downlinkJitterMs }),
        ...(input.downlinkLossPercent !== undefined &&
            input.downlinkLossPercent !== null && { downlinkLossPercent: input.downlinkLossPercent }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.uplinkBandwidthBits !== undefined &&
            input.uplinkBandwidthBits !== null && { uplinkBandwidthBits: input.uplinkBandwidthBits }),
        ...(input.uplinkDelayMs !== undefined && input.uplinkDelayMs !== null && { uplinkDelayMs: input.uplinkDelayMs }),
        ...(input.uplinkJitterMs !== undefined &&
            input.uplinkJitterMs !== null && { uplinkJitterMs: input.uplinkJitterMs }),
        ...(input.uplinkLossPercent !== undefined &&
            input.uplinkLossPercent !== null && { uplinkLossPercent: input.uplinkLossPercent }),
    };
};
const serializeAws_json1_1CreateProjectRequest = (input, context) => {
    return {
        ...(input.defaultJobTimeoutMinutes !== undefined &&
            input.defaultJobTimeoutMinutes !== null && { defaultJobTimeoutMinutes: input.defaultJobTimeoutMinutes }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1CreateRemoteAccessSessionConfiguration = (input, context) => {
    return {
        ...(input.billingMethod !== undefined && input.billingMethod !== null && { billingMethod: input.billingMethod }),
        ...(input.vpceConfigurationArns !== undefined &&
            input.vpceConfigurationArns !== null && {
            vpceConfigurationArns: serializeAws_json1_1AmazonResourceNames(input.vpceConfigurationArns, context),
        }),
    };
};
const serializeAws_json1_1CreateRemoteAccessSessionRequest = (input, context) => {
    return {
        ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_json1_1CreateRemoteAccessSessionConfiguration(input.configuration, context),
        }),
        ...(input.deviceArn !== undefined && input.deviceArn !== null && { deviceArn: input.deviceArn }),
        ...(input.instanceArn !== undefined && input.instanceArn !== null && { instanceArn: input.instanceArn }),
        ...(input.interactionMode !== undefined &&
            input.interactionMode !== null && { interactionMode: input.interactionMode }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.remoteDebugEnabled !== undefined &&
            input.remoteDebugEnabled !== null && { remoteDebugEnabled: input.remoteDebugEnabled }),
        ...(input.remoteRecordAppArn !== undefined &&
            input.remoteRecordAppArn !== null && { remoteRecordAppArn: input.remoteRecordAppArn }),
        ...(input.remoteRecordEnabled !== undefined &&
            input.remoteRecordEnabled !== null && { remoteRecordEnabled: input.remoteRecordEnabled }),
        ...(input.skipAppResign !== undefined && input.skipAppResign !== null && { skipAppResign: input.skipAppResign }),
        ...(input.sshPublicKey !== undefined && input.sshPublicKey !== null && { sshPublicKey: input.sshPublicKey }),
    };
};
const serializeAws_json1_1CreateTestGridProjectRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.vpcConfig !== undefined &&
            input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1TestGridVpcConfig(input.vpcConfig, context) }),
    };
};
const serializeAws_json1_1CreateTestGridUrlRequest = (input, context) => {
    return {
        ...(input.expiresInSeconds !== undefined &&
            input.expiresInSeconds !== null && { expiresInSeconds: input.expiresInSeconds }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    };
};
const serializeAws_json1_1CreateUploadRequest = (input, context) => {
    return {
        ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1CreateVPCEConfigurationRequest = (input, context) => {
    return {
        ...(input.serviceDnsName !== undefined &&
            input.serviceDnsName !== null && { serviceDnsName: input.serviceDnsName }),
        ...(input.vpceConfigurationDescription !== undefined &&
            input.vpceConfigurationDescription !== null && {
            vpceConfigurationDescription: input.vpceConfigurationDescription,
        }),
        ...(input.vpceConfigurationName !== undefined &&
            input.vpceConfigurationName !== null && { vpceConfigurationName: input.vpceConfigurationName }),
        ...(input.vpceServiceName !== undefined &&
            input.vpceServiceName !== null && { vpceServiceName: input.vpceServiceName }),
    };
};
const serializeAws_json1_1CustomerArtifactPaths = (input, context) => {
    return {
        ...(input.androidPaths !== undefined &&
            input.androidPaths !== null && { androidPaths: serializeAws_json1_1AndroidPaths(input.androidPaths, context) }),
        ...(input.deviceHostPaths !== undefined &&
            input.deviceHostPaths !== null && {
            deviceHostPaths: serializeAws_json1_1DeviceHostPaths(input.deviceHostPaths, context),
        }),
        ...(input.iosPaths !== undefined &&
            input.iosPaths !== null && { iosPaths: serializeAws_json1_1IosPaths(input.iosPaths, context) }),
    };
};
const serializeAws_json1_1DeleteDevicePoolRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteInstanceProfileRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteNetworkProfileRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteProjectRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteRemoteAccessSessionRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteRunRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteTestGridProjectRequest = (input, context) => {
    return {
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    };
};
const serializeAws_json1_1DeleteUploadRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeleteVPCEConfigurationRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1DeviceFilter = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_json1_1DeviceFilterValues(input.values, context) }),
    };
};
const serializeAws_json1_1DeviceFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DeviceFilter(entry, context);
    });
};
const serializeAws_json1_1DeviceFilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeviceHostPaths = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeviceSelectionConfiguration = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1DeviceFilters(input.filters, context) }),
        ...(input.maxDevices !== undefined && input.maxDevices !== null && { maxDevices: input.maxDevices }),
    };
};
const serializeAws_json1_1ExecutionConfiguration = (input, context) => {
    return {
        ...(input.accountsCleanup !== undefined &&
            input.accountsCleanup !== null && { accountsCleanup: input.accountsCleanup }),
        ...(input.appPackagesCleanup !== undefined &&
            input.appPackagesCleanup !== null && { appPackagesCleanup: input.appPackagesCleanup }),
        ...(input.jobTimeoutMinutes !== undefined &&
            input.jobTimeoutMinutes !== null && { jobTimeoutMinutes: input.jobTimeoutMinutes }),
        ...(input.skipAppResign !== undefined && input.skipAppResign !== null && { skipAppResign: input.skipAppResign }),
        ...(input.videoCapture !== undefined && input.videoCapture !== null && { videoCapture: input.videoCapture }),
    };
};
const serializeAws_json1_1GetAccountSettingsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetDeviceInstanceRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetDevicePoolCompatibilityRequest = (input, context) => {
    return {
        ...(input.appArn !== undefined && input.appArn !== null && { appArn: input.appArn }),
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_json1_1ScheduleRunConfiguration(input.configuration, context),
        }),
        ...(input.devicePoolArn !== undefined && input.devicePoolArn !== null && { devicePoolArn: input.devicePoolArn }),
        ...(input.test !== undefined &&
            input.test !== null && { test: serializeAws_json1_1ScheduleRunTest(input.test, context) }),
        ...(input.testType !== undefined && input.testType !== null && { testType: input.testType }),
    };
};
const serializeAws_json1_1GetDevicePoolRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetDeviceRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetInstanceProfileRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetJobRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetNetworkProfileRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetOfferingStatusRequest = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1GetProjectRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetRemoteAccessSessionRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetRunRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetSuiteRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetTestGridProjectRequest = (input, context) => {
    return {
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    };
};
const serializeAws_json1_1GetTestGridSessionRequest = (input, context) => {
    return {
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.sessionArn !== undefined && input.sessionArn !== null && { sessionArn: input.sessionArn }),
        ...(input.sessionId !== undefined && input.sessionId !== null && { sessionId: input.sessionId }),
    };
};
const serializeAws_json1_1GetTestRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetUploadRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1GetVPCEConfigurationRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1InstallToRemoteAccessSessionRequest = (input, context) => {
    return {
        ...(input.appArn !== undefined && input.appArn !== null && { appArn: input.appArn }),
        ...(input.remoteAccessSessionArn !== undefined &&
            input.remoteAccessSessionArn !== null && { remoteAccessSessionArn: input.remoteAccessSessionArn }),
    };
};
const serializeAws_json1_1InstanceLabels = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IosPaths = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListArtifactsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ListDeviceInstancesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDevicePoolsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ListDevicesRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1DeviceFilters(input.filters, context) }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListInstanceProfilesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListJobsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListNetworkProfilesRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ListOfferingPromotionsRequest = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListOfferingsRequest = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListOfferingTransactionsRequest = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListProjectsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListRemoteAccessSessionsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListRunsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListSamplesRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListSuitesRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1ListTestGridProjectsRequest = (input, context) => {
    return {
        ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListTestGridSessionActionsRequest = (input, context) => {
    return {
        ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sessionArn !== undefined && input.sessionArn !== null && { sessionArn: input.sessionArn }),
    };
};
const serializeAws_json1_1ListTestGridSessionArtifactsRequest = (input, context) => {
    return {
        ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sessionArn !== undefined && input.sessionArn !== null && { sessionArn: input.sessionArn }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ListTestGridSessionsRequest = (input, context) => {
    return {
        ...(input.creationTimeAfter !== undefined &&
            input.creationTimeAfter !== null && { creationTimeAfter: Math.round(input.creationTimeAfter.getTime() / 1000) }),
        ...(input.creationTimeBefore !== undefined &&
            input.creationTimeBefore !== null && {
            creationTimeBefore: Math.round(input.creationTimeBefore.getTime() / 1000),
        }),
        ...(input.endTimeAfter !== undefined &&
            input.endTimeAfter !== null && { endTimeAfter: Math.round(input.endTimeAfter.getTime() / 1000) }),
        ...(input.endTimeBefore !== undefined &&
            input.endTimeBefore !== null && { endTimeBefore: Math.round(input.endTimeBefore.getTime() / 1000) }),
        ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1ListTestsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListUniqueProblemsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListUploadsRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ListVPCEConfigurationsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1Location = (input, context) => {
    return {
        ...(input.latitude !== undefined && input.latitude !== null && { latitude: input.latitude }),
        ...(input.longitude !== undefined && input.longitude !== null && { longitude: input.longitude }),
    };
};
const serializeAws_json1_1PackageIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PurchaseOfferingRequest = (input, context) => {
    return {
        ...(input.offeringId !== undefined && input.offeringId !== null && { offeringId: input.offeringId }),
        ...(input.offeringPromotionId !== undefined &&
            input.offeringPromotionId !== null && { offeringPromotionId: input.offeringPromotionId }),
        ...(input.quantity !== undefined && input.quantity !== null && { quantity: input.quantity }),
    };
};
const serializeAws_json1_1Radios = (input, context) => {
    return {
        ...(input.bluetooth !== undefined && input.bluetooth !== null && { bluetooth: input.bluetooth }),
        ...(input.gps !== undefined && input.gps !== null && { gps: input.gps }),
        ...(input.nfc !== undefined && input.nfc !== null && { nfc: input.nfc }),
        ...(input.wifi !== undefined && input.wifi !== null && { wifi: input.wifi }),
    };
};
const serializeAws_json1_1RenewOfferingRequest = (input, context) => {
    return {
        ...(input.offeringId !== undefined && input.offeringId !== null && { offeringId: input.offeringId }),
        ...(input.quantity !== undefined && input.quantity !== null && { quantity: input.quantity }),
    };
};
const serializeAws_json1_1Rule = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1Rules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Rule(entry, context);
    });
};
const serializeAws_json1_1ScheduleRunConfiguration = (input, context) => {
    return {
        ...(input.auxiliaryApps !== undefined &&
            input.auxiliaryApps !== null && {
            auxiliaryApps: serializeAws_json1_1AmazonResourceNames(input.auxiliaryApps, context),
        }),
        ...(input.billingMethod !== undefined && input.billingMethod !== null && { billingMethod: input.billingMethod }),
        ...(input.customerArtifactPaths !== undefined &&
            input.customerArtifactPaths !== null && {
            customerArtifactPaths: serializeAws_json1_1CustomerArtifactPaths(input.customerArtifactPaths, context),
        }),
        ...(input.extraDataPackageArn !== undefined &&
            input.extraDataPackageArn !== null && { extraDataPackageArn: input.extraDataPackageArn }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.location !== undefined &&
            input.location !== null && { location: serializeAws_json1_1Location(input.location, context) }),
        ...(input.networkProfileArn !== undefined &&
            input.networkProfileArn !== null && { networkProfileArn: input.networkProfileArn }),
        ...(input.radios !== undefined &&
            input.radios !== null && { radios: serializeAws_json1_1Radios(input.radios, context) }),
        ...(input.vpceConfigurationArns !== undefined &&
            input.vpceConfigurationArns !== null && {
            vpceConfigurationArns: serializeAws_json1_1AmazonResourceNames(input.vpceConfigurationArns, context),
        }),
    };
};
const serializeAws_json1_1ScheduleRunRequest = (input, context) => {
    return {
        ...(input.appArn !== undefined && input.appArn !== null && { appArn: input.appArn }),
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_json1_1ScheduleRunConfiguration(input.configuration, context),
        }),
        ...(input.devicePoolArn !== undefined && input.devicePoolArn !== null && { devicePoolArn: input.devicePoolArn }),
        ...(input.deviceSelectionConfiguration !== undefined &&
            input.deviceSelectionConfiguration !== null && {
            deviceSelectionConfiguration: serializeAws_json1_1DeviceSelectionConfiguration(input.deviceSelectionConfiguration, context),
        }),
        ...(input.executionConfiguration !== undefined &&
            input.executionConfiguration !== null && {
            executionConfiguration: serializeAws_json1_1ExecutionConfiguration(input.executionConfiguration, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.test !== undefined &&
            input.test !== null && { test: serializeAws_json1_1ScheduleRunTest(input.test, context) }),
    };
};
const serializeAws_json1_1ScheduleRunTest = (input, context) => {
    return {
        ...(input.filter !== undefined && input.filter !== null && { filter: input.filter }),
        ...(input.parameters !== undefined &&
            input.parameters !== null && { parameters: serializeAws_json1_1TestParameters(input.parameters, context) }),
        ...(input.testPackageArn !== undefined &&
            input.testPackageArn !== null && { testPackageArn: input.testPackageArn }),
        ...(input.testSpecArn !== undefined && input.testSpecArn !== null && { testSpecArn: input.testSpecArn }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StopJobRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1StopRemoteAccessSessionRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1StopRunRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    };
};
const serializeAws_json1_1SubnetIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TestGridVpcConfig = (input, context) => {
    return {
        ...(input.securityGroupIds !== undefined &&
            input.securityGroupIds !== null && {
            securityGroupIds: serializeAws_json1_1SecurityGroupIds(input.securityGroupIds, context),
        }),
        ...(input.subnetIds !== undefined &&
            input.subnetIds !== null && { subnetIds: serializeAws_json1_1SubnetIds(input.subnetIds, context) }),
        ...(input.vpcId !== undefined && input.vpcId !== null && { vpcId: input.vpcId }),
    };
};
const serializeAws_json1_1TestParameters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateDeviceInstanceRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.labels !== undefined &&
            input.labels !== null && { labels: serializeAws_json1_1InstanceLabels(input.labels, context) }),
        ...(input.profileArn !== undefined && input.profileArn !== null && { profileArn: input.profileArn }),
    };
};
const serializeAws_json1_1UpdateDevicePoolRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.clearMaxDevices !== undefined &&
            input.clearMaxDevices !== null && { clearMaxDevices: input.clearMaxDevices }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.maxDevices !== undefined && input.maxDevices !== null && { maxDevices: input.maxDevices }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.rules !== undefined &&
            input.rules !== null && { rules: serializeAws_json1_1Rules(input.rules, context) }),
    };
};
const serializeAws_json1_1UpdateInstanceProfileRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.excludeAppPackagesFromCleanup !== undefined &&
            input.excludeAppPackagesFromCleanup !== null && {
            excludeAppPackagesFromCleanup: serializeAws_json1_1PackageIds(input.excludeAppPackagesFromCleanup, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.packageCleanup !== undefined &&
            input.packageCleanup !== null && { packageCleanup: input.packageCleanup }),
        ...(input.rebootAfterUse !== undefined &&
            input.rebootAfterUse !== null && { rebootAfterUse: input.rebootAfterUse }),
    };
};
const serializeAws_json1_1UpdateNetworkProfileRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.downlinkBandwidthBits !== undefined &&
            input.downlinkBandwidthBits !== null && { downlinkBandwidthBits: input.downlinkBandwidthBits }),
        ...(input.downlinkDelayMs !== undefined &&
            input.downlinkDelayMs !== null && { downlinkDelayMs: input.downlinkDelayMs }),
        ...(input.downlinkJitterMs !== undefined &&
            input.downlinkJitterMs !== null && { downlinkJitterMs: input.downlinkJitterMs }),
        ...(input.downlinkLossPercent !== undefined &&
            input.downlinkLossPercent !== null && { downlinkLossPercent: input.downlinkLossPercent }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.uplinkBandwidthBits !== undefined &&
            input.uplinkBandwidthBits !== null && { uplinkBandwidthBits: input.uplinkBandwidthBits }),
        ...(input.uplinkDelayMs !== undefined && input.uplinkDelayMs !== null && { uplinkDelayMs: input.uplinkDelayMs }),
        ...(input.uplinkJitterMs !== undefined &&
            input.uplinkJitterMs !== null && { uplinkJitterMs: input.uplinkJitterMs }),
        ...(input.uplinkLossPercent !== undefined &&
            input.uplinkLossPercent !== null && { uplinkLossPercent: input.uplinkLossPercent }),
    };
};
const serializeAws_json1_1UpdateProjectRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.defaultJobTimeoutMinutes !== undefined &&
            input.defaultJobTimeoutMinutes !== null && { defaultJobTimeoutMinutes: input.defaultJobTimeoutMinutes }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1UpdateTestGridProjectRequest = (input, context) => {
    return {
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
        ...(input.vpcConfig !== undefined &&
            input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1TestGridVpcConfig(input.vpcConfig, context) }),
    };
};
const serializeAws_json1_1UpdateUploadRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
        ...(input.editContent !== undefined && input.editContent !== null && { editContent: input.editContent }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1UpdateVPCEConfigurationRequest = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.serviceDnsName !== undefined &&
            input.serviceDnsName !== null && { serviceDnsName: input.serviceDnsName }),
        ...(input.vpceConfigurationDescription !== undefined &&
            input.vpceConfigurationDescription !== null && {
            vpceConfigurationDescription: input.vpceConfigurationDescription,
        }),
        ...(input.vpceConfigurationName !== undefined &&
            input.vpceConfigurationName !== null && { vpceConfigurationName: input.vpceConfigurationName }),
        ...(input.vpceServiceName !== undefined &&
            input.vpceServiceName !== null && { vpceServiceName: input.vpceServiceName }),
    };
};
const deserializeAws_json1_1AccountSettings = (output, context) => {
    return {
        awsAccountNumber: output.awsAccountNumber !== undefined && output.awsAccountNumber !== null ? output.awsAccountNumber : undefined,
        defaultJobTimeoutMinutes: output.defaultJobTimeoutMinutes !== undefined && output.defaultJobTimeoutMinutes !== null
            ? output.defaultJobTimeoutMinutes
            : undefined,
        maxJobTimeoutMinutes: output.maxJobTimeoutMinutes !== undefined && output.maxJobTimeoutMinutes !== null
            ? output.maxJobTimeoutMinutes
            : undefined,
        maxSlots: output.maxSlots !== undefined && output.maxSlots !== null
            ? deserializeAws_json1_1MaxSlotMap(output.maxSlots, context)
            : undefined,
        skipAppResign: output.skipAppResign !== undefined && output.skipAppResign !== null ? output.skipAppResign : undefined,
        trialMinutes: output.trialMinutes !== undefined && output.trialMinutes !== null
            ? deserializeAws_json1_1TrialMinutes(output.trialMinutes, context)
            : undefined,
        unmeteredDevices: output.unmeteredDevices !== undefined && output.unmeteredDevices !== null
            ? deserializeAws_json1_1PurchasedDevicesMap(output.unmeteredDevices, context)
            : undefined,
        unmeteredRemoteAccessDevices: output.unmeteredRemoteAccessDevices !== undefined && output.unmeteredRemoteAccessDevices !== null
            ? deserializeAws_json1_1PurchasedDevicesMap(output.unmeteredRemoteAccessDevices, context)
            : undefined,
    };
};
const deserializeAws_json1_1AndroidPaths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ArgumentException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Artifact = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        extension: output.extension !== undefined && output.extension !== null ? output.extension : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1Artifacts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Artifact(entry, context);
    });
};
const deserializeAws_json1_1CannotDeleteException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Counters = (output, context) => {
    return {
        errored: output.errored !== undefined && output.errored !== null ? output.errored : undefined,
        failed: output.failed !== undefined && output.failed !== null ? output.failed : undefined,
        passed: output.passed !== undefined && output.passed !== null ? output.passed : undefined,
        skipped: output.skipped !== undefined && output.skipped !== null ? output.skipped : undefined,
        stopped: output.stopped !== undefined && output.stopped !== null ? output.stopped : undefined,
        total: output.total !== undefined && output.total !== null ? output.total : undefined,
        warned: output.warned !== undefined && output.warned !== null ? output.warned : undefined,
    };
};
const deserializeAws_json1_1CPU = (output, context) => {
    return {
        architecture: output.architecture !== undefined && output.architecture !== null ? output.architecture : undefined,
        clock: output.clock !== undefined && output.clock !== null ? output.clock : undefined,
        frequency: output.frequency !== undefined && output.frequency !== null ? output.frequency : undefined,
    };
};
const deserializeAws_json1_1CreateDevicePoolResult = (output, context) => {
    return {
        devicePool: output.devicePool !== undefined && output.devicePool !== null
            ? deserializeAws_json1_1DevicePool(output.devicePool, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateInstanceProfileResult = (output, context) => {
    return {
        instanceProfile: output.instanceProfile !== undefined && output.instanceProfile !== null
            ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateNetworkProfileResult = (output, context) => {
    return {
        networkProfile: output.networkProfile !== undefined && output.networkProfile !== null
            ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateProjectResult = (output, context) => {
    return {
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_json1_1Project(output.project, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRemoteAccessSessionResult = (output, context) => {
    return {
        remoteAccessSession: output.remoteAccessSession !== undefined && output.remoteAccessSession !== null
            ? deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateTestGridProjectResult = (output, context) => {
    return {
        testGridProject: output.testGridProject !== undefined && output.testGridProject !== null
            ? deserializeAws_json1_1TestGridProject(output.testGridProject, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateTestGridUrlResult = (output, context) => {
    return {
        expires: output.expires !== undefined && output.expires !== null ? new Date(Math.round(output.expires * 1000)) : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1CreateUploadResult = (output, context) => {
    return {
        upload: output.upload !== undefined && output.upload !== null
            ? deserializeAws_json1_1Upload(output.upload, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateVPCEConfigurationResult = (output, context) => {
    return {
        vpceConfiguration: output.vpceConfiguration !== undefined && output.vpceConfiguration !== null
            ? deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomerArtifactPaths = (output, context) => {
    return {
        androidPaths: output.androidPaths !== undefined && output.androidPaths !== null
            ? deserializeAws_json1_1AndroidPaths(output.androidPaths, context)
            : undefined,
        deviceHostPaths: output.deviceHostPaths !== undefined && output.deviceHostPaths !== null
            ? deserializeAws_json1_1DeviceHostPaths(output.deviceHostPaths, context)
            : undefined,
        iosPaths: output.iosPaths !== undefined && output.iosPaths !== null
            ? deserializeAws_json1_1IosPaths(output.iosPaths, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDevicePoolResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteInstanceProfileResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteNetworkProfileResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteProjectResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRemoteAccessSessionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRunResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteTestGridProjectResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteUploadResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteVPCEConfigurationResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1Device = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        availability: output.availability !== undefined && output.availability !== null ? output.availability : undefined,
        carrier: output.carrier !== undefined && output.carrier !== null ? output.carrier : undefined,
        cpu: output.cpu !== undefined && output.cpu !== null ? deserializeAws_json1_1CPU(output.cpu, context) : undefined,
        fleetName: output.fleetName !== undefined && output.fleetName !== null ? output.fleetName : undefined,
        fleetType: output.fleetType !== undefined && output.fleetType !== null ? output.fleetType : undefined,
        formFactor: output.formFactor !== undefined && output.formFactor !== null ? output.formFactor : undefined,
        heapSize: output.heapSize !== undefined && output.heapSize !== null ? output.heapSize : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
        instances: output.instances !== undefined && output.instances !== null
            ? deserializeAws_json1_1DeviceInstances(output.instances, context)
            : undefined,
        manufacturer: output.manufacturer !== undefined && output.manufacturer !== null ? output.manufacturer : undefined,
        memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
        model: output.model !== undefined && output.model !== null ? output.model : undefined,
        modelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        os: output.os !== undefined && output.os !== null ? output.os : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        radio: output.radio !== undefined && output.radio !== null ? output.radio : undefined,
        remoteAccessEnabled: output.remoteAccessEnabled !== undefined && output.remoteAccessEnabled !== null
            ? output.remoteAccessEnabled
            : undefined,
        remoteDebugEnabled: output.remoteDebugEnabled !== undefined && output.remoteDebugEnabled !== null
            ? output.remoteDebugEnabled
            : undefined,
        resolution: output.resolution !== undefined && output.resolution !== null
            ? deserializeAws_json1_1Resolution(output.resolution, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeviceFilter = (output, context) => {
    return {
        attribute: output.attribute !== undefined && output.attribute !== null ? output.attribute : undefined,
        operator: output.operator !== undefined && output.operator !== null ? output.operator : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_json1_1DeviceFilterValues(output.values, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeviceFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeviceFilter(entry, context);
    });
};
const deserializeAws_json1_1DeviceFilterValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeviceHostPaths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeviceInstance = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        deviceArn: output.deviceArn !== undefined && output.deviceArn !== null ? output.deviceArn : undefined,
        instanceProfile: output.instanceProfile !== undefined && output.instanceProfile !== null
            ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
            : undefined,
        labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_json1_1InstanceLabels(output.labels, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        udid: output.udid !== undefined && output.udid !== null ? output.udid : undefined,
    };
};
const deserializeAws_json1_1DeviceInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeviceInstance(entry, context);
    });
};
const deserializeAws_json1_1DeviceMinutes = (output, context) => {
    return {
        metered: output.metered !== undefined && output.metered !== null ? output.metered : undefined,
        total: output.total !== undefined && output.total !== null ? output.total : undefined,
        unmetered: output.unmetered !== undefined && output.unmetered !== null ? output.unmetered : undefined,
    };
};
const deserializeAws_json1_1DevicePool = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        maxDevices: output.maxDevices !== undefined && output.maxDevices !== null ? output.maxDevices : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        rules: output.rules !== undefined && output.rules !== null
            ? deserializeAws_json1_1Rules(output.rules, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1DevicePoolCompatibilityResult = (output, context) => {
    return {
        compatible: output.compatible !== undefined && output.compatible !== null ? output.compatible : undefined,
        device: output.device !== undefined && output.device !== null
            ? deserializeAws_json1_1Device(output.device, context)
            : undefined,
        incompatibilityMessages: output.incompatibilityMessages !== undefined && output.incompatibilityMessages !== null
            ? deserializeAws_json1_1IncompatibilityMessages(output.incompatibilityMessages, context)
            : undefined,
    };
};
const deserializeAws_json1_1DevicePoolCompatibilityResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DevicePoolCompatibilityResult(entry, context);
    });
};
const deserializeAws_json1_1DevicePools = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DevicePool(entry, context);
    });
};
const deserializeAws_json1_1Devices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Device(entry, context);
    });
};
const deserializeAws_json1_1DeviceSelectionResult = (output, context) => {
    return {
        filters: output.filters !== undefined && output.filters !== null
            ? deserializeAws_json1_1DeviceFilters(output.filters, context)
            : undefined,
        matchedDevicesCount: output.matchedDevicesCount !== undefined && output.matchedDevicesCount !== null
            ? output.matchedDevicesCount
            : undefined,
        maxDevices: output.maxDevices !== undefined && output.maxDevices !== null ? output.maxDevices : undefined,
    };
};
const deserializeAws_json1_1GetAccountSettingsResult = (output, context) => {
    return {
        accountSettings: output.accountSettings !== undefined && output.accountSettings !== null
            ? deserializeAws_json1_1AccountSettings(output.accountSettings, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDeviceInstanceResult = (output, context) => {
    return {
        deviceInstance: output.deviceInstance !== undefined && output.deviceInstance !== null
            ? deserializeAws_json1_1DeviceInstance(output.deviceInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDevicePoolCompatibilityResult = (output, context) => {
    return {
        compatibleDevices: output.compatibleDevices !== undefined && output.compatibleDevices !== null
            ? deserializeAws_json1_1DevicePoolCompatibilityResults(output.compatibleDevices, context)
            : undefined,
        incompatibleDevices: output.incompatibleDevices !== undefined && output.incompatibleDevices !== null
            ? deserializeAws_json1_1DevicePoolCompatibilityResults(output.incompatibleDevices, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDevicePoolResult = (output, context) => {
    return {
        devicePool: output.devicePool !== undefined && output.devicePool !== null
            ? deserializeAws_json1_1DevicePool(output.devicePool, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDeviceResult = (output, context) => {
    return {
        device: output.device !== undefined && output.device !== null
            ? deserializeAws_json1_1Device(output.device, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetInstanceProfileResult = (output, context) => {
    return {
        instanceProfile: output.instanceProfile !== undefined && output.instanceProfile !== null
            ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetJobResult = (output, context) => {
    return {
        job: output.job !== undefined && output.job !== null ? deserializeAws_json1_1Job(output.job, context) : undefined,
    };
};
const deserializeAws_json1_1GetNetworkProfileResult = (output, context) => {
    return {
        networkProfile: output.networkProfile !== undefined && output.networkProfile !== null
            ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOfferingStatusResult = (output, context) => {
    return {
        current: output.current !== undefined && output.current !== null
            ? deserializeAws_json1_1OfferingStatusMap(output.current, context)
            : undefined,
        nextPeriod: output.nextPeriod !== undefined && output.nextPeriod !== null
            ? deserializeAws_json1_1OfferingStatusMap(output.nextPeriod, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1GetProjectResult = (output, context) => {
    return {
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_json1_1Project(output.project, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRemoteAccessSessionResult = (output, context) => {
    return {
        remoteAccessSession: output.remoteAccessSession !== undefined && output.remoteAccessSession !== null
            ? deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRunResult = (output, context) => {
    return {
        run: output.run !== undefined && output.run !== null ? deserializeAws_json1_1Run(output.run, context) : undefined,
    };
};
const deserializeAws_json1_1GetSuiteResult = (output, context) => {
    return {
        suite: output.suite !== undefined && output.suite !== null
            ? deserializeAws_json1_1Suite(output.suite, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTestGridProjectResult = (output, context) => {
    return {
        testGridProject: output.testGridProject !== undefined && output.testGridProject !== null
            ? deserializeAws_json1_1TestGridProject(output.testGridProject, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTestGridSessionResult = (output, context) => {
    return {
        testGridSession: output.testGridSession !== undefined && output.testGridSession !== null
            ? deserializeAws_json1_1TestGridSession(output.testGridSession, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTestResult = (output, context) => {
    return {
        test: output.test !== undefined && output.test !== null ? deserializeAws_json1_1Test(output.test, context) : undefined,
    };
};
const deserializeAws_json1_1GetUploadResult = (output, context) => {
    return {
        upload: output.upload !== undefined && output.upload !== null
            ? deserializeAws_json1_1Upload(output.upload, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetVPCEConfigurationResult = (output, context) => {
    return {
        vpceConfiguration: output.vpceConfiguration !== undefined && output.vpceConfiguration !== null
            ? deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1IdempotencyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IncompatibilityMessage = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1IncompatibilityMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IncompatibilityMessage(entry, context);
    });
};
const deserializeAws_json1_1InstallToRemoteAccessSessionResult = (output, context) => {
    return {
        appUpload: output.appUpload !== undefined && output.appUpload !== null
            ? deserializeAws_json1_1Upload(output.appUpload, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstanceLabels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InstanceProfile = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        excludeAppPackagesFromCleanup: output.excludeAppPackagesFromCleanup !== undefined && output.excludeAppPackagesFromCleanup !== null
            ? deserializeAws_json1_1PackageIds(output.excludeAppPackagesFromCleanup, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        packageCleanup: output.packageCleanup !== undefined && output.packageCleanup !== null ? output.packageCleanup : undefined,
        rebootAfterUse: output.rebootAfterUse !== undefined && output.rebootAfterUse !== null ? output.rebootAfterUse : undefined,
    };
};
const deserializeAws_json1_1InstanceProfiles = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceProfile(entry, context);
    });
};
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IosPaths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Job = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        counters: output.counters !== undefined && output.counters !== null
            ? deserializeAws_json1_1Counters(output.counters, context)
            : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        device: output.device !== undefined && output.device !== null
            ? deserializeAws_json1_1Device(output.device, context)
            : undefined,
        deviceMinutes: output.deviceMinutes !== undefined && output.deviceMinutes !== null
            ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
            : undefined,
        instanceArn: output.instanceArn !== undefined && output.instanceArn !== null ? output.instanceArn : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        started: output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopped: output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        videoCapture: output.videoCapture !== undefined && output.videoCapture !== null ? output.videoCapture : undefined,
        videoEndpoint: output.videoEndpoint !== undefined && output.videoEndpoint !== null ? output.videoEndpoint : undefined,
    };
};
const deserializeAws_json1_1Jobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Job(entry, context);
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListArtifactsResult = (output, context) => {
    return {
        artifacts: output.artifacts !== undefined && output.artifacts !== null
            ? deserializeAws_json1_1Artifacts(output.artifacts, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDeviceInstancesResult = (output, context) => {
    return {
        deviceInstances: output.deviceInstances !== undefined && output.deviceInstances !== null
            ? deserializeAws_json1_1DeviceInstances(output.deviceInstances, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDevicePoolsResult = (output, context) => {
    return {
        devicePools: output.devicePools !== undefined && output.devicePools !== null
            ? deserializeAws_json1_1DevicePools(output.devicePools, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDevicesResult = (output, context) => {
    return {
        devices: output.devices !== undefined && output.devices !== null
            ? deserializeAws_json1_1Devices(output.devices, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListInstanceProfilesResult = (output, context) => {
    return {
        instanceProfiles: output.instanceProfiles !== undefined && output.instanceProfiles !== null
            ? deserializeAws_json1_1InstanceProfiles(output.instanceProfiles, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListJobsResult = (output, context) => {
    return {
        jobs: output.jobs !== undefined && output.jobs !== null ? deserializeAws_json1_1Jobs(output.jobs, context) : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListNetworkProfilesResult = (output, context) => {
    return {
        networkProfiles: output.networkProfiles !== undefined && output.networkProfiles !== null
            ? deserializeAws_json1_1NetworkProfiles(output.networkProfiles, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListOfferingPromotionsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        offeringPromotions: output.offeringPromotions !== undefined && output.offeringPromotions !== null
            ? deserializeAws_json1_1OfferingPromotions(output.offeringPromotions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOfferingsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        offerings: output.offerings !== undefined && output.offerings !== null
            ? deserializeAws_json1_1Offerings(output.offerings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOfferingTransactionsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        offeringTransactions: output.offeringTransactions !== undefined && output.offeringTransactions !== null
            ? deserializeAws_json1_1OfferingTransactions(output.offeringTransactions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListProjectsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        projects: output.projects !== undefined && output.projects !== null
            ? deserializeAws_json1_1Projects(output.projects, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRemoteAccessSessionsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        remoteAccessSessions: output.remoteAccessSessions !== undefined && output.remoteAccessSessions !== null
            ? deserializeAws_json1_1RemoteAccessSessions(output.remoteAccessSessions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRunsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        runs: output.runs !== undefined && output.runs !== null ? deserializeAws_json1_1Runs(output.runs, context) : undefined,
    };
};
const deserializeAws_json1_1ListSamplesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        samples: output.samples !== undefined && output.samples !== null
            ? deserializeAws_json1_1Samples(output.samples, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSuitesResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        suites: output.suites !== undefined && output.suites !== null
            ? deserializeAws_json1_1Suites(output.suites, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTestGridProjectsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        testGridProjects: output.testGridProjects !== undefined && output.testGridProjects !== null
            ? deserializeAws_json1_1TestGridProjects(output.testGridProjects, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTestGridSessionActionsResult = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_json1_1TestGridSessionActions(output.actions, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListTestGridSessionArtifactsResult = (output, context) => {
    return {
        artifacts: output.artifacts !== undefined && output.artifacts !== null
            ? deserializeAws_json1_1TestGridSessionArtifacts(output.artifacts, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListTestGridSessionsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        testGridSessions: output.testGridSessions !== undefined && output.testGridSessions !== null
            ? deserializeAws_json1_1TestGridSessions(output.testGridSessions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTestsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tests: output.tests !== undefined && output.tests !== null
            ? deserializeAws_json1_1Tests(output.tests, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUniqueProblemsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        uniqueProblems: output.uniqueProblems !== undefined && output.uniqueProblems !== null
            ? deserializeAws_json1_1UniqueProblemsByExecutionResultMap(output.uniqueProblems, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUploadsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        uploads: output.uploads !== undefined && output.uploads !== null
            ? deserializeAws_json1_1Uploads(output.uploads, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListVPCEConfigurationsResult = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        vpceConfigurations: output.vpceConfigurations !== undefined && output.vpceConfigurations !== null
            ? deserializeAws_json1_1VPCEConfigurations(output.vpceConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1Location = (output, context) => {
    return {
        latitude: output.latitude !== undefined && output.latitude !== null ? output.latitude : undefined,
        longitude: output.longitude !== undefined && output.longitude !== null ? output.longitude : undefined,
    };
};
const deserializeAws_json1_1MaxSlotMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1MonetaryAmount = (output, context) => {
    return {
        amount: output.amount !== undefined && output.amount !== null ? output.amount : undefined,
        currencyCode: output.currencyCode !== undefined && output.currencyCode !== null ? output.currencyCode : undefined,
    };
};
const deserializeAws_json1_1NetworkProfile = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        downlinkBandwidthBits: output.downlinkBandwidthBits !== undefined && output.downlinkBandwidthBits !== null
            ? output.downlinkBandwidthBits
            : undefined,
        downlinkDelayMs: output.downlinkDelayMs !== undefined && output.downlinkDelayMs !== null ? output.downlinkDelayMs : undefined,
        downlinkJitterMs: output.downlinkJitterMs !== undefined && output.downlinkJitterMs !== null ? output.downlinkJitterMs : undefined,
        downlinkLossPercent: output.downlinkLossPercent !== undefined && output.downlinkLossPercent !== null
            ? output.downlinkLossPercent
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        uplinkBandwidthBits: output.uplinkBandwidthBits !== undefined && output.uplinkBandwidthBits !== null
            ? output.uplinkBandwidthBits
            : undefined,
        uplinkDelayMs: output.uplinkDelayMs !== undefined && output.uplinkDelayMs !== null ? output.uplinkDelayMs : undefined,
        uplinkJitterMs: output.uplinkJitterMs !== undefined && output.uplinkJitterMs !== null ? output.uplinkJitterMs : undefined,
        uplinkLossPercent: output.uplinkLossPercent !== undefined && output.uplinkLossPercent !== null
            ? output.uplinkLossPercent
            : undefined,
    };
};
const deserializeAws_json1_1NetworkProfiles = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkProfile(entry, context);
    });
};
const deserializeAws_json1_1NotEligibleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Offering = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        recurringCharges: output.recurringCharges !== undefined && output.recurringCharges !== null
            ? deserializeAws_json1_1RecurringCharges(output.recurringCharges, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1OfferingPromotion = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_json1_1OfferingPromotions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OfferingPromotion(entry, context);
    });
};
const deserializeAws_json1_1Offerings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Offering(entry, context);
    });
};
const deserializeAws_json1_1OfferingStatus = (output, context) => {
    return {
        effectiveOn: output.effectiveOn !== undefined && output.effectiveOn !== null
            ? new Date(Math.round(output.effectiveOn * 1000))
            : undefined,
        offering: output.offering !== undefined && output.offering !== null
            ? deserializeAws_json1_1Offering(output.offering, context)
            : undefined,
        quantity: output.quantity !== undefined && output.quantity !== null ? output.quantity : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1OfferingStatusMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1OfferingStatus(value, context),
        };
    }, {});
};
const deserializeAws_json1_1OfferingTransaction = (output, context) => {
    return {
        cost: output.cost !== undefined && output.cost !== null
            ? deserializeAws_json1_1MonetaryAmount(output.cost, context)
            : undefined,
        createdOn: output.createdOn !== undefined && output.createdOn !== null
            ? new Date(Math.round(output.createdOn * 1000))
            : undefined,
        offeringPromotionId: output.offeringPromotionId !== undefined && output.offeringPromotionId !== null
            ? output.offeringPromotionId
            : undefined,
        offeringStatus: output.offeringStatus !== undefined && output.offeringStatus !== null
            ? deserializeAws_json1_1OfferingStatus(output.offeringStatus, context)
            : undefined,
        transactionId: output.transactionId !== undefined && output.transactionId !== null ? output.transactionId : undefined,
    };
};
const deserializeAws_json1_1OfferingTransactions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OfferingTransaction(entry, context);
    });
};
const deserializeAws_json1_1PackageIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Problem = (output, context) => {
    return {
        device: output.device !== undefined && output.device !== null
            ? deserializeAws_json1_1Device(output.device, context)
            : undefined,
        job: output.job !== undefined && output.job !== null
            ? deserializeAws_json1_1ProblemDetail(output.job, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        run: output.run !== undefined && output.run !== null
            ? deserializeAws_json1_1ProblemDetail(output.run, context)
            : undefined,
        suite: output.suite !== undefined && output.suite !== null
            ? deserializeAws_json1_1ProblemDetail(output.suite, context)
            : undefined,
        test: output.test !== undefined && output.test !== null
            ? deserializeAws_json1_1ProblemDetail(output.test, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProblemDetail = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1Problems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Problem(entry, context);
    });
};
const deserializeAws_json1_1Project = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        defaultJobTimeoutMinutes: output.defaultJobTimeoutMinutes !== undefined && output.defaultJobTimeoutMinutes !== null
            ? output.defaultJobTimeoutMinutes
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1Projects = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Project(entry, context);
    });
};
const deserializeAws_json1_1PurchasedDevicesMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1PurchaseOfferingResult = (output, context) => {
    return {
        offeringTransaction: output.offeringTransaction !== undefined && output.offeringTransaction !== null
            ? deserializeAws_json1_1OfferingTransaction(output.offeringTransaction, context)
            : undefined,
    };
};
const deserializeAws_json1_1Radios = (output, context) => {
    return {
        bluetooth: output.bluetooth !== undefined && output.bluetooth !== null ? output.bluetooth : undefined,
        gps: output.gps !== undefined && output.gps !== null ? output.gps : undefined,
        nfc: output.nfc !== undefined && output.nfc !== null ? output.nfc : undefined,
        wifi: output.wifi !== undefined && output.wifi !== null ? output.wifi : undefined,
    };
};
const deserializeAws_json1_1RecurringCharge = (output, context) => {
    return {
        cost: output.cost !== undefined && output.cost !== null
            ? deserializeAws_json1_1MonetaryAmount(output.cost, context)
            : undefined,
        frequency: output.frequency !== undefined && output.frequency !== null ? output.frequency : undefined,
    };
};
const deserializeAws_json1_1RecurringCharges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RecurringCharge(entry, context);
    });
};
const deserializeAws_json1_1RemoteAccessSession = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        billingMethod: output.billingMethod !== undefined && output.billingMethod !== null ? output.billingMethod : undefined,
        clientId: output.clientId !== undefined && output.clientId !== null ? output.clientId : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        device: output.device !== undefined && output.device !== null
            ? deserializeAws_json1_1Device(output.device, context)
            : undefined,
        deviceMinutes: output.deviceMinutes !== undefined && output.deviceMinutes !== null
            ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
            : undefined,
        deviceUdid: output.deviceUdid !== undefined && output.deviceUdid !== null ? output.deviceUdid : undefined,
        endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
        hostAddress: output.hostAddress !== undefined && output.hostAddress !== null ? output.hostAddress : undefined,
        instanceArn: output.instanceArn !== undefined && output.instanceArn !== null ? output.instanceArn : undefined,
        interactionMode: output.interactionMode !== undefined && output.interactionMode !== null ? output.interactionMode : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        remoteDebugEnabled: output.remoteDebugEnabled !== undefined && output.remoteDebugEnabled !== null
            ? output.remoteDebugEnabled
            : undefined,
        remoteRecordAppArn: output.remoteRecordAppArn !== undefined && output.remoteRecordAppArn !== null
            ? output.remoteRecordAppArn
            : undefined,
        remoteRecordEnabled: output.remoteRecordEnabled !== undefined && output.remoteRecordEnabled !== null
            ? output.remoteRecordEnabled
            : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        skipAppResign: output.skipAppResign !== undefined && output.skipAppResign !== null ? output.skipAppResign : undefined,
        started: output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopped: output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
    };
};
const deserializeAws_json1_1RemoteAccessSessions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemoteAccessSession(entry, context);
    });
};
const deserializeAws_json1_1RenewOfferingResult = (output, context) => {
    return {
        offeringTransaction: output.offeringTransaction !== undefined && output.offeringTransaction !== null
            ? deserializeAws_json1_1OfferingTransaction(output.offeringTransaction, context)
            : undefined,
    };
};
const deserializeAws_json1_1Resolution = (output, context) => {
    return {
        height: output.height !== undefined && output.height !== null ? output.height : undefined,
        width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
const deserializeAws_json1_1Rule = (output, context) => {
    return {
        attribute: output.attribute !== undefined && output.attribute !== null ? output.attribute : undefined,
        operator: output.operator !== undefined && output.operator !== null ? output.operator : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1Rules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Rule(entry, context);
    });
};
const deserializeAws_json1_1Run = (output, context) => {
    return {
        appUpload: output.appUpload !== undefined && output.appUpload !== null ? output.appUpload : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        billingMethod: output.billingMethod !== undefined && output.billingMethod !== null ? output.billingMethod : undefined,
        completedJobs: output.completedJobs !== undefined && output.completedJobs !== null ? output.completedJobs : undefined,
        counters: output.counters !== undefined && output.counters !== null
            ? deserializeAws_json1_1Counters(output.counters, context)
            : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        customerArtifactPaths: output.customerArtifactPaths !== undefined && output.customerArtifactPaths !== null
            ? deserializeAws_json1_1CustomerArtifactPaths(output.customerArtifactPaths, context)
            : undefined,
        deviceMinutes: output.deviceMinutes !== undefined && output.deviceMinutes !== null
            ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
            : undefined,
        devicePoolArn: output.devicePoolArn !== undefined && output.devicePoolArn !== null ? output.devicePoolArn : undefined,
        deviceSelectionResult: output.deviceSelectionResult !== undefined && output.deviceSelectionResult !== null
            ? deserializeAws_json1_1DeviceSelectionResult(output.deviceSelectionResult, context)
            : undefined,
        eventCount: output.eventCount !== undefined && output.eventCount !== null ? output.eventCount : undefined,
        jobTimeoutMinutes: output.jobTimeoutMinutes !== undefined && output.jobTimeoutMinutes !== null
            ? output.jobTimeoutMinutes
            : undefined,
        locale: output.locale !== undefined && output.locale !== null ? output.locale : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1Location(output.location, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        networkProfile: output.networkProfile !== undefined && output.networkProfile !== null
            ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
            : undefined,
        parsingResultUrl: output.parsingResultUrl !== undefined && output.parsingResultUrl !== null ? output.parsingResultUrl : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        radios: output.radios !== undefined && output.radios !== null
            ? deserializeAws_json1_1Radios(output.radios, context)
            : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        resultCode: output.resultCode !== undefined && output.resultCode !== null ? output.resultCode : undefined,
        seed: output.seed !== undefined && output.seed !== null ? output.seed : undefined,
        skipAppResign: output.skipAppResign !== undefined && output.skipAppResign !== null ? output.skipAppResign : undefined,
        started: output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopped: output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
        testSpecArn: output.testSpecArn !== undefined && output.testSpecArn !== null ? output.testSpecArn : undefined,
        totalJobs: output.totalJobs !== undefined && output.totalJobs !== null ? output.totalJobs : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        webUrl: output.webUrl !== undefined && output.webUrl !== null ? output.webUrl : undefined,
    };
};
const deserializeAws_json1_1Runs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Run(entry, context);
    });
};
const deserializeAws_json1_1Sample = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1Samples = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Sample(entry, context);
    });
};
const deserializeAws_json1_1ScheduleRunResult = (output, context) => {
    return {
        run: output.run !== undefined && output.run !== null ? deserializeAws_json1_1Run(output.run, context) : undefined,
    };
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ServiceAccountException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1StopJobResult = (output, context) => {
    return {
        job: output.job !== undefined && output.job !== null ? deserializeAws_json1_1Job(output.job, context) : undefined,
    };
};
const deserializeAws_json1_1StopRemoteAccessSessionResult = (output, context) => {
    return {
        remoteAccessSession: output.remoteAccessSession !== undefined && output.remoteAccessSession !== null
            ? deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopRunResult = (output, context) => {
    return {
        run: output.run !== undefined && output.run !== null ? deserializeAws_json1_1Run(output.run, context) : undefined,
    };
};
const deserializeAws_json1_1SubnetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Suite = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        counters: output.counters !== undefined && output.counters !== null
            ? deserializeAws_json1_1Counters(output.counters, context)
            : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        deviceMinutes: output.deviceMinutes !== undefined && output.deviceMinutes !== null
            ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        started: output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopped: output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1Suites = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Suite(entry, context);
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    };
};
const deserializeAws_json1_1TagPolicyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Test = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        counters: output.counters !== undefined && output.counters !== null
            ? deserializeAws_json1_1Counters(output.counters, context)
            : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        deviceMinutes: output.deviceMinutes !== undefined && output.deviceMinutes !== null
            ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        result: output.result !== undefined && output.result !== null ? output.result : undefined,
        started: output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        stopped: output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1TestGridProject = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_json1_1TestGridVpcConfig(output.vpcConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1TestGridProjects = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TestGridProject(entry, context);
    });
};
const deserializeAws_json1_1TestGridSession = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        billingMinutes: output.billingMinutes !== undefined && output.billingMinutes !== null ? output.billingMinutes : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        ended: output.ended !== undefined && output.ended !== null ? new Date(Math.round(output.ended * 1000)) : undefined,
        seleniumProperties: output.seleniumProperties !== undefined && output.seleniumProperties !== null
            ? output.seleniumProperties
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1TestGridSessionAction = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        requestMethod: output.requestMethod !== undefined && output.requestMethod !== null ? output.requestMethod : undefined,
        started: output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
const deserializeAws_json1_1TestGridSessionActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TestGridSessionAction(entry, context);
    });
};
const deserializeAws_json1_1TestGridSessionArtifact = (output, context) => {
    return {
        filename: output.filename !== undefined && output.filename !== null ? output.filename : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1TestGridSessionArtifacts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TestGridSessionArtifact(entry, context);
    });
};
const deserializeAws_json1_1TestGridSessions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TestGridSession(entry, context);
    });
};
const deserializeAws_json1_1TestGridVpcConfig = (output, context) => {
    return {
        securityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIds(output.securityGroupIds, context)
            : undefined,
        subnetIds: output.subnetIds !== undefined && output.subnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.subnetIds, context)
            : undefined,
        vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
    };
};
const deserializeAws_json1_1Tests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Test(entry, context);
    });
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
    };
};
const deserializeAws_json1_1TrialMinutes = (output, context) => {
    return {
        remaining: output.remaining !== undefined && output.remaining !== null ? output.remaining : undefined,
        total: output.total !== undefined && output.total !== null ? output.total : undefined,
    };
};
const deserializeAws_json1_1UniqueProblem = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        problems: output.problems !== undefined && output.problems !== null
            ? deserializeAws_json1_1Problems(output.problems, context)
            : undefined,
    };
};
const deserializeAws_json1_1UniqueProblems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UniqueProblem(entry, context);
    });
};
const deserializeAws_json1_1UniqueProblemsByExecutionResultMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1UniqueProblems(value, context),
        };
    }, {});
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDeviceInstanceResult = (output, context) => {
    return {
        deviceInstance: output.deviceInstance !== undefined && output.deviceInstance !== null
            ? deserializeAws_json1_1DeviceInstance(output.deviceInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateDevicePoolResult = (output, context) => {
    return {
        devicePool: output.devicePool !== undefined && output.devicePool !== null
            ? deserializeAws_json1_1DevicePool(output.devicePool, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateInstanceProfileResult = (output, context) => {
    return {
        instanceProfile: output.instanceProfile !== undefined && output.instanceProfile !== null
            ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateNetworkProfileResult = (output, context) => {
    return {
        networkProfile: output.networkProfile !== undefined && output.networkProfile !== null
            ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateProjectResult = (output, context) => {
    return {
        project: output.project !== undefined && output.project !== null
            ? deserializeAws_json1_1Project(output.project, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateTestGridProjectResult = (output, context) => {
    return {
        testGridProject: output.testGridProject !== undefined && output.testGridProject !== null
            ? deserializeAws_json1_1TestGridProject(output.testGridProject, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateUploadResult = (output, context) => {
    return {
        upload: output.upload !== undefined && output.upload !== null
            ? deserializeAws_json1_1Upload(output.upload, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateVPCEConfigurationResult = (output, context) => {
    return {
        vpceConfiguration: output.vpceConfiguration !== undefined && output.vpceConfiguration !== null
            ? deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1Upload = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
        created: output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        metadata: output.metadata !== undefined && output.metadata !== null ? output.metadata : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1Uploads = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Upload(entry, context);
    });
};
const deserializeAws_json1_1VPCEConfiguration = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        serviceDnsName: output.serviceDnsName !== undefined && output.serviceDnsName !== null ? output.serviceDnsName : undefined,
        vpceConfigurationDescription: output.vpceConfigurationDescription !== undefined && output.vpceConfigurationDescription !== null
            ? output.vpceConfigurationDescription
            : undefined,
        vpceConfigurationName: output.vpceConfigurationName !== undefined && output.vpceConfigurationName !== null
            ? output.vpceConfigurationName
            : undefined,
        vpceServiceName: output.vpceServiceName !== undefined && output.vpceServiceName !== null ? output.vpceServiceName : undefined,
    };
};
const deserializeAws_json1_1VPCEConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VPCEConfiguration(entry, context);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_1.js.map