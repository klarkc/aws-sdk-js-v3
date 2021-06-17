"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1DetachDiskCommand = exports.serializeAws_json1_1DetachCertificateFromDistributionCommand = exports.serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = exports.serializeAws_json1_1DeleteRelationalDatabaseCommand = exports.serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = exports.serializeAws_json1_1DeleteLoadBalancerCommand = exports.serializeAws_json1_1DeleteKnownHostKeysCommand = exports.serializeAws_json1_1DeleteKeyPairCommand = exports.serializeAws_json1_1DeleteInstanceSnapshotCommand = exports.serializeAws_json1_1DeleteInstanceCommand = exports.serializeAws_json1_1DeleteDomainEntryCommand = exports.serializeAws_json1_1DeleteDomainCommand = exports.serializeAws_json1_1DeleteDistributionCommand = exports.serializeAws_json1_1DeleteDiskSnapshotCommand = exports.serializeAws_json1_1DeleteDiskCommand = exports.serializeAws_json1_1DeleteContainerServiceCommand = exports.serializeAws_json1_1DeleteContainerImageCommand = exports.serializeAws_json1_1DeleteContactMethodCommand = exports.serializeAws_json1_1DeleteCertificateCommand = exports.serializeAws_json1_1DeleteAutoSnapshotCommand = exports.serializeAws_json1_1DeleteAlarmCommand = exports.serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = exports.serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = exports.serializeAws_json1_1CreateRelationalDatabaseCommand = exports.serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = exports.serializeAws_json1_1CreateLoadBalancerCommand = exports.serializeAws_json1_1CreateKeyPairCommand = exports.serializeAws_json1_1CreateInstanceSnapshotCommand = exports.serializeAws_json1_1CreateInstancesFromSnapshotCommand = exports.serializeAws_json1_1CreateInstancesCommand = exports.serializeAws_json1_1CreateDomainEntryCommand = exports.serializeAws_json1_1CreateDomainCommand = exports.serializeAws_json1_1CreateDistributionCommand = exports.serializeAws_json1_1CreateDiskSnapshotCommand = exports.serializeAws_json1_1CreateDiskFromSnapshotCommand = exports.serializeAws_json1_1CreateDiskCommand = exports.serializeAws_json1_1CreateContainerServiceRegistryLoginCommand = exports.serializeAws_json1_1CreateContainerServiceDeploymentCommand = exports.serializeAws_json1_1CreateContainerServiceCommand = exports.serializeAws_json1_1CreateContactMethodCommand = exports.serializeAws_json1_1CreateCloudFormationStackCommand = exports.serializeAws_json1_1CreateCertificateCommand = exports.serializeAws_json1_1CopySnapshotCommand = exports.serializeAws_json1_1CloseInstancePublicPortsCommand = exports.serializeAws_json1_1AttachStaticIpCommand = exports.serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = exports.serializeAws_json1_1AttachInstancesToLoadBalancerCommand = exports.serializeAws_json1_1AttachDiskCommand = exports.serializeAws_json1_1AttachCertificateToDistributionCommand = exports.serializeAws_json1_1AllocateStaticIpCommand = void 0;
exports.serializeAws_json1_1GetRegionsCommand = exports.serializeAws_json1_1GetOperationsForResourceCommand = exports.serializeAws_json1_1GetOperationsCommand = exports.serializeAws_json1_1GetOperationCommand = exports.serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = exports.serializeAws_json1_1GetLoadBalancersCommand = exports.serializeAws_json1_1GetLoadBalancerMetricDataCommand = exports.serializeAws_json1_1GetLoadBalancerCommand = exports.serializeAws_json1_1GetKeyPairsCommand = exports.serializeAws_json1_1GetKeyPairCommand = exports.serializeAws_json1_1GetInstanceStateCommand = exports.serializeAws_json1_1GetInstanceSnapshotsCommand = exports.serializeAws_json1_1GetInstanceSnapshotCommand = exports.serializeAws_json1_1GetInstancesCommand = exports.serializeAws_json1_1GetInstancePortStatesCommand = exports.serializeAws_json1_1GetInstanceMetricDataCommand = exports.serializeAws_json1_1GetInstanceAccessDetailsCommand = exports.serializeAws_json1_1GetInstanceCommand = exports.serializeAws_json1_1GetExportSnapshotRecordsCommand = exports.serializeAws_json1_1GetDomainsCommand = exports.serializeAws_json1_1GetDomainCommand = exports.serializeAws_json1_1GetDistributionsCommand = exports.serializeAws_json1_1GetDistributionMetricDataCommand = exports.serializeAws_json1_1GetDistributionLatestCacheResetCommand = exports.serializeAws_json1_1GetDistributionBundlesCommand = exports.serializeAws_json1_1GetDiskSnapshotsCommand = exports.serializeAws_json1_1GetDiskSnapshotCommand = exports.serializeAws_json1_1GetDisksCommand = exports.serializeAws_json1_1GetDiskCommand = exports.serializeAws_json1_1GetContainerServicesCommand = exports.serializeAws_json1_1GetContainerServicePowersCommand = exports.serializeAws_json1_1GetContainerServiceMetricDataCommand = exports.serializeAws_json1_1GetContainerServiceDeploymentsCommand = exports.serializeAws_json1_1GetContainerLogCommand = exports.serializeAws_json1_1GetContainerImagesCommand = exports.serializeAws_json1_1GetContainerAPIMetadataCommand = exports.serializeAws_json1_1GetContactMethodsCommand = exports.serializeAws_json1_1GetCloudFormationStackRecordsCommand = exports.serializeAws_json1_1GetCertificatesCommand = exports.serializeAws_json1_1GetBundlesCommand = exports.serializeAws_json1_1GetBlueprintsCommand = exports.serializeAws_json1_1GetAutoSnapshotsCommand = exports.serializeAws_json1_1GetAlarmsCommand = exports.serializeAws_json1_1GetActiveNamesCommand = exports.serializeAws_json1_1ExportSnapshotCommand = exports.serializeAws_json1_1EnableAddOnCommand = exports.serializeAws_json1_1DownloadDefaultKeyPairCommand = exports.serializeAws_json1_1DisableAddOnCommand = exports.serializeAws_json1_1DetachStaticIpCommand = exports.serializeAws_json1_1DetachInstancesFromLoadBalancerCommand = void 0;
exports.deserializeAws_json1_1CopySnapshotCommand = exports.deserializeAws_json1_1CloseInstancePublicPortsCommand = exports.deserializeAws_json1_1AttachStaticIpCommand = exports.deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = exports.deserializeAws_json1_1AttachInstancesToLoadBalancerCommand = exports.deserializeAws_json1_1AttachDiskCommand = exports.deserializeAws_json1_1AttachCertificateToDistributionCommand = exports.deserializeAws_json1_1AllocateStaticIpCommand = exports.serializeAws_json1_1UpdateRelationalDatabaseParametersCommand = exports.serializeAws_json1_1UpdateRelationalDatabaseCommand = exports.serializeAws_json1_1UpdateLoadBalancerAttributeCommand = exports.serializeAws_json1_1UpdateDomainEntryCommand = exports.serializeAws_json1_1UpdateDistributionBundleCommand = exports.serializeAws_json1_1UpdateDistributionCommand = exports.serializeAws_json1_1UpdateContainerServiceCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1UnpeerVpcCommand = exports.serializeAws_json1_1TestAlarmCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopRelationalDatabaseCommand = exports.serializeAws_json1_1StopInstanceCommand = exports.serializeAws_json1_1StartRelationalDatabaseCommand = exports.serializeAws_json1_1StartInstanceCommand = exports.serializeAws_json1_1SetIpAddressTypeCommand = exports.serializeAws_json1_1SendContactMethodVerificationCommand = exports.serializeAws_json1_1ResetDistributionCacheCommand = exports.serializeAws_json1_1ReleaseStaticIpCommand = exports.serializeAws_json1_1RegisterContainerImageCommand = exports.serializeAws_json1_1RebootRelationalDatabaseCommand = exports.serializeAws_json1_1RebootInstanceCommand = exports.serializeAws_json1_1PutInstancePublicPortsCommand = exports.serializeAws_json1_1PutAlarmCommand = exports.serializeAws_json1_1PeerVpcCommand = exports.serializeAws_json1_1OpenInstancePublicPortsCommand = exports.serializeAws_json1_1IsVpcPeeredCommand = exports.serializeAws_json1_1ImportKeyPairCommand = exports.serializeAws_json1_1GetStaticIpsCommand = exports.serializeAws_json1_1GetStaticIpCommand = exports.serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = exports.serializeAws_json1_1GetRelationalDatabaseSnapshotCommand = exports.serializeAws_json1_1GetRelationalDatabasesCommand = exports.serializeAws_json1_1GetRelationalDatabaseParametersCommand = exports.serializeAws_json1_1GetRelationalDatabaseMetricDataCommand = exports.serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = exports.serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = exports.serializeAws_json1_1GetRelationalDatabaseLogEventsCommand = exports.serializeAws_json1_1GetRelationalDatabaseEventsCommand = exports.serializeAws_json1_1GetRelationalDatabaseBundlesCommand = exports.serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = exports.serializeAws_json1_1GetRelationalDatabaseCommand = void 0;
exports.deserializeAws_json1_1GetAlarmsCommand = exports.deserializeAws_json1_1GetActiveNamesCommand = exports.deserializeAws_json1_1ExportSnapshotCommand = exports.deserializeAws_json1_1EnableAddOnCommand = exports.deserializeAws_json1_1DownloadDefaultKeyPairCommand = exports.deserializeAws_json1_1DisableAddOnCommand = exports.deserializeAws_json1_1DetachStaticIpCommand = exports.deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand = exports.deserializeAws_json1_1DetachDiskCommand = exports.deserializeAws_json1_1DetachCertificateFromDistributionCommand = exports.deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = exports.deserializeAws_json1_1DeleteRelationalDatabaseCommand = exports.deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = exports.deserializeAws_json1_1DeleteLoadBalancerCommand = exports.deserializeAws_json1_1DeleteKnownHostKeysCommand = exports.deserializeAws_json1_1DeleteKeyPairCommand = exports.deserializeAws_json1_1DeleteInstanceSnapshotCommand = exports.deserializeAws_json1_1DeleteInstanceCommand = exports.deserializeAws_json1_1DeleteDomainEntryCommand = exports.deserializeAws_json1_1DeleteDomainCommand = exports.deserializeAws_json1_1DeleteDistributionCommand = exports.deserializeAws_json1_1DeleteDiskSnapshotCommand = exports.deserializeAws_json1_1DeleteDiskCommand = exports.deserializeAws_json1_1DeleteContainerServiceCommand = exports.deserializeAws_json1_1DeleteContainerImageCommand = exports.deserializeAws_json1_1DeleteContactMethodCommand = exports.deserializeAws_json1_1DeleteCertificateCommand = exports.deserializeAws_json1_1DeleteAutoSnapshotCommand = exports.deserializeAws_json1_1DeleteAlarmCommand = exports.deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = exports.deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = exports.deserializeAws_json1_1CreateRelationalDatabaseCommand = exports.deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = exports.deserializeAws_json1_1CreateLoadBalancerCommand = exports.deserializeAws_json1_1CreateKeyPairCommand = exports.deserializeAws_json1_1CreateInstanceSnapshotCommand = exports.deserializeAws_json1_1CreateInstancesFromSnapshotCommand = exports.deserializeAws_json1_1CreateInstancesCommand = exports.deserializeAws_json1_1CreateDomainEntryCommand = exports.deserializeAws_json1_1CreateDomainCommand = exports.deserializeAws_json1_1CreateDistributionCommand = exports.deserializeAws_json1_1CreateDiskSnapshotCommand = exports.deserializeAws_json1_1CreateDiskFromSnapshotCommand = exports.deserializeAws_json1_1CreateDiskCommand = exports.deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand = exports.deserializeAws_json1_1CreateContainerServiceDeploymentCommand = exports.deserializeAws_json1_1CreateContainerServiceCommand = exports.deserializeAws_json1_1CreateContactMethodCommand = exports.deserializeAws_json1_1CreateCloudFormationStackCommand = exports.deserializeAws_json1_1CreateCertificateCommand = void 0;
exports.deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand = exports.deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = exports.deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = exports.deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand = exports.deserializeAws_json1_1GetRelationalDatabaseEventsCommand = exports.deserializeAws_json1_1GetRelationalDatabaseBundlesCommand = exports.deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = exports.deserializeAws_json1_1GetRelationalDatabaseCommand = exports.deserializeAws_json1_1GetRegionsCommand = exports.deserializeAws_json1_1GetOperationsForResourceCommand = exports.deserializeAws_json1_1GetOperationsCommand = exports.deserializeAws_json1_1GetOperationCommand = exports.deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = exports.deserializeAws_json1_1GetLoadBalancersCommand = exports.deserializeAws_json1_1GetLoadBalancerMetricDataCommand = exports.deserializeAws_json1_1GetLoadBalancerCommand = exports.deserializeAws_json1_1GetKeyPairsCommand = exports.deserializeAws_json1_1GetKeyPairCommand = exports.deserializeAws_json1_1GetInstanceStateCommand = exports.deserializeAws_json1_1GetInstanceSnapshotsCommand = exports.deserializeAws_json1_1GetInstanceSnapshotCommand = exports.deserializeAws_json1_1GetInstancesCommand = exports.deserializeAws_json1_1GetInstancePortStatesCommand = exports.deserializeAws_json1_1GetInstanceMetricDataCommand = exports.deserializeAws_json1_1GetInstanceAccessDetailsCommand = exports.deserializeAws_json1_1GetInstanceCommand = exports.deserializeAws_json1_1GetExportSnapshotRecordsCommand = exports.deserializeAws_json1_1GetDomainsCommand = exports.deserializeAws_json1_1GetDomainCommand = exports.deserializeAws_json1_1GetDistributionsCommand = exports.deserializeAws_json1_1GetDistributionMetricDataCommand = exports.deserializeAws_json1_1GetDistributionLatestCacheResetCommand = exports.deserializeAws_json1_1GetDistributionBundlesCommand = exports.deserializeAws_json1_1GetDiskSnapshotsCommand = exports.deserializeAws_json1_1GetDiskSnapshotCommand = exports.deserializeAws_json1_1GetDisksCommand = exports.deserializeAws_json1_1GetDiskCommand = exports.deserializeAws_json1_1GetContainerServicesCommand = exports.deserializeAws_json1_1GetContainerServicePowersCommand = exports.deserializeAws_json1_1GetContainerServiceMetricDataCommand = exports.deserializeAws_json1_1GetContainerServiceDeploymentsCommand = exports.deserializeAws_json1_1GetContainerLogCommand = exports.deserializeAws_json1_1GetContainerImagesCommand = exports.deserializeAws_json1_1GetContainerAPIMetadataCommand = exports.deserializeAws_json1_1GetContactMethodsCommand = exports.deserializeAws_json1_1GetCloudFormationStackRecordsCommand = exports.deserializeAws_json1_1GetCertificatesCommand = exports.deserializeAws_json1_1GetBundlesCommand = exports.deserializeAws_json1_1GetBlueprintsCommand = exports.deserializeAws_json1_1GetAutoSnapshotsCommand = void 0;
exports.deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand = exports.deserializeAws_json1_1UpdateRelationalDatabaseCommand = exports.deserializeAws_json1_1UpdateLoadBalancerAttributeCommand = exports.deserializeAws_json1_1UpdateDomainEntryCommand = exports.deserializeAws_json1_1UpdateDistributionBundleCommand = exports.deserializeAws_json1_1UpdateDistributionCommand = exports.deserializeAws_json1_1UpdateContainerServiceCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1UnpeerVpcCommand = exports.deserializeAws_json1_1TestAlarmCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopRelationalDatabaseCommand = exports.deserializeAws_json1_1StopInstanceCommand = exports.deserializeAws_json1_1StartRelationalDatabaseCommand = exports.deserializeAws_json1_1StartInstanceCommand = exports.deserializeAws_json1_1SetIpAddressTypeCommand = exports.deserializeAws_json1_1SendContactMethodVerificationCommand = exports.deserializeAws_json1_1ResetDistributionCacheCommand = exports.deserializeAws_json1_1ReleaseStaticIpCommand = exports.deserializeAws_json1_1RegisterContainerImageCommand = exports.deserializeAws_json1_1RebootRelationalDatabaseCommand = exports.deserializeAws_json1_1RebootInstanceCommand = exports.deserializeAws_json1_1PutInstancePublicPortsCommand = exports.deserializeAws_json1_1PutAlarmCommand = exports.deserializeAws_json1_1PeerVpcCommand = exports.deserializeAws_json1_1OpenInstancePublicPortsCommand = exports.deserializeAws_json1_1IsVpcPeeredCommand = exports.deserializeAws_json1_1ImportKeyPairCommand = exports.deserializeAws_json1_1GetStaticIpsCommand = exports.deserializeAws_json1_1GetStaticIpCommand = exports.deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = exports.deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand = exports.deserializeAws_json1_1GetRelationalDatabasesCommand = exports.deserializeAws_json1_1GetRelationalDatabaseParametersCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AllocateStaticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.AllocateStaticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AllocateStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AllocateStaticIpCommand = serializeAws_json1_1AllocateStaticIpCommand;
const serializeAws_json1_1AttachCertificateToDistributionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.AttachCertificateToDistribution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachCertificateToDistributionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachCertificateToDistributionCommand = serializeAws_json1_1AttachCertificateToDistributionCommand;
const serializeAws_json1_1AttachDiskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.AttachDisk",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachDiskCommand = serializeAws_json1_1AttachDiskCommand;
const serializeAws_json1_1AttachInstancesToLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.AttachInstancesToLoadBalancer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachInstancesToLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachInstancesToLoadBalancerCommand = serializeAws_json1_1AttachInstancesToLoadBalancerCommand;
const serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.AttachLoadBalancerTlsCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = serializeAws_json1_1AttachLoadBalancerTlsCertificateCommand;
const serializeAws_json1_1AttachStaticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.AttachStaticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachStaticIpCommand = serializeAws_json1_1AttachStaticIpCommand;
const serializeAws_json1_1CloseInstancePublicPortsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CloseInstancePublicPorts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CloseInstancePublicPortsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CloseInstancePublicPortsCommand = serializeAws_json1_1CloseInstancePublicPortsCommand;
const serializeAws_json1_1CopySnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CopySnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CopySnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CopySnapshotCommand = serializeAws_json1_1CopySnapshotCommand;
const serializeAws_json1_1CreateCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCertificateCommand = serializeAws_json1_1CreateCertificateCommand;
const serializeAws_json1_1CreateCloudFormationStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateCloudFormationStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCloudFormationStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCloudFormationStackCommand = serializeAws_json1_1CreateCloudFormationStackCommand;
const serializeAws_json1_1CreateContactMethodCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateContactMethod",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContactMethodRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContactMethodCommand = serializeAws_json1_1CreateContactMethodCommand;
const serializeAws_json1_1CreateContainerServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateContainerService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContainerServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContainerServiceCommand = serializeAws_json1_1CreateContainerServiceCommand;
const serializeAws_json1_1CreateContainerServiceDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateContainerServiceDeployment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContainerServiceDeploymentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContainerServiceDeploymentCommand = serializeAws_json1_1CreateContainerServiceDeploymentCommand;
const serializeAws_json1_1CreateContainerServiceRegistryLoginCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateContainerServiceRegistryLogin",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateContainerServiceRegistryLoginRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateContainerServiceRegistryLoginCommand = serializeAws_json1_1CreateContainerServiceRegistryLoginCommand;
const serializeAws_json1_1CreateDiskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateDisk",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDiskCommand = serializeAws_json1_1CreateDiskCommand;
const serializeAws_json1_1CreateDiskFromSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateDiskFromSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDiskFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDiskFromSnapshotCommand = serializeAws_json1_1CreateDiskFromSnapshotCommand;
const serializeAws_json1_1CreateDiskSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateDiskSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDiskSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDiskSnapshotCommand = serializeAws_json1_1CreateDiskSnapshotCommand;
const serializeAws_json1_1CreateDistributionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateDistribution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDistributionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDistributionCommand = serializeAws_json1_1CreateDistributionCommand;
const serializeAws_json1_1CreateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDomainCommand = serializeAws_json1_1CreateDomainCommand;
const serializeAws_json1_1CreateDomainEntryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateDomainEntry",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDomainEntryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDomainEntryCommand = serializeAws_json1_1CreateDomainEntryCommand;
const serializeAws_json1_1CreateInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateInstancesCommand = serializeAws_json1_1CreateInstancesCommand;
const serializeAws_json1_1CreateInstancesFromSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateInstancesFromSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstancesFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateInstancesFromSnapshotCommand = serializeAws_json1_1CreateInstancesFromSnapshotCommand;
const serializeAws_json1_1CreateInstanceSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateInstanceSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstanceSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateInstanceSnapshotCommand = serializeAws_json1_1CreateInstanceSnapshotCommand;
const serializeAws_json1_1CreateKeyPairCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateKeyPair",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateKeyPairCommand = serializeAws_json1_1CreateKeyPairCommand;
const serializeAws_json1_1CreateLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateLoadBalancer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLoadBalancerCommand = serializeAws_json1_1CreateLoadBalancerCommand;
const serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateLoadBalancerTlsCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = serializeAws_json1_1CreateLoadBalancerTlsCertificateCommand;
const serializeAws_json1_1CreateRelationalDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateRelationalDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRelationalDatabaseCommand = serializeAws_json1_1CreateRelationalDatabaseCommand;
const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand;
const serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.CreateRelationalDatabaseSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand;
const serializeAws_json1_1DeleteAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteAlarm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAlarmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAlarmCommand = serializeAws_json1_1DeleteAlarmCommand;
const serializeAws_json1_1DeleteAutoSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteAutoSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAutoSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAutoSnapshotCommand = serializeAws_json1_1DeleteAutoSnapshotCommand;
const serializeAws_json1_1DeleteCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCertificateCommand = serializeAws_json1_1DeleteCertificateCommand;
const serializeAws_json1_1DeleteContactMethodCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteContactMethod",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContactMethodRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContactMethodCommand = serializeAws_json1_1DeleteContactMethodCommand;
const serializeAws_json1_1DeleteContainerImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteContainerImage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContainerImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContainerImageCommand = serializeAws_json1_1DeleteContainerImageCommand;
const serializeAws_json1_1DeleteContainerServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteContainerService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteContainerServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteContainerServiceCommand = serializeAws_json1_1DeleteContainerServiceCommand;
const serializeAws_json1_1DeleteDiskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteDisk",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDiskCommand = serializeAws_json1_1DeleteDiskCommand;
const serializeAws_json1_1DeleteDiskSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteDiskSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDiskSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDiskSnapshotCommand = serializeAws_json1_1DeleteDiskSnapshotCommand;
const serializeAws_json1_1DeleteDistributionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteDistribution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDistributionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDistributionCommand = serializeAws_json1_1DeleteDistributionCommand;
const serializeAws_json1_1DeleteDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDomainCommand = serializeAws_json1_1DeleteDomainCommand;
const serializeAws_json1_1DeleteDomainEntryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteDomainEntry",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDomainEntryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDomainEntryCommand = serializeAws_json1_1DeleteDomainEntryCommand;
const serializeAws_json1_1DeleteInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteInstanceCommand = serializeAws_json1_1DeleteInstanceCommand;
const serializeAws_json1_1DeleteInstanceSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteInstanceSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteInstanceSnapshotCommand = serializeAws_json1_1DeleteInstanceSnapshotCommand;
const serializeAws_json1_1DeleteKeyPairCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteKeyPair",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteKeyPairCommand = serializeAws_json1_1DeleteKeyPairCommand;
const serializeAws_json1_1DeleteKnownHostKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteKnownHostKeys",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteKnownHostKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteKnownHostKeysCommand = serializeAws_json1_1DeleteKnownHostKeysCommand;
const serializeAws_json1_1DeleteLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteLoadBalancer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLoadBalancerCommand = serializeAws_json1_1DeleteLoadBalancerCommand;
const serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteLoadBalancerTlsCertificate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = serializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand;
const serializeAws_json1_1DeleteRelationalDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteRelationalDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRelationalDatabaseCommand = serializeAws_json1_1DeleteRelationalDatabaseCommand;
const serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DeleteRelationalDatabaseSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand;
const serializeAws_json1_1DetachCertificateFromDistributionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DetachCertificateFromDistribution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachCertificateFromDistributionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetachCertificateFromDistributionCommand = serializeAws_json1_1DetachCertificateFromDistributionCommand;
const serializeAws_json1_1DetachDiskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DetachDisk",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetachDiskCommand = serializeAws_json1_1DetachDiskCommand;
const serializeAws_json1_1DetachInstancesFromLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DetachInstancesFromLoadBalancer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachInstancesFromLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetachInstancesFromLoadBalancerCommand = serializeAws_json1_1DetachInstancesFromLoadBalancerCommand;
const serializeAws_json1_1DetachStaticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DetachStaticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetachStaticIpCommand = serializeAws_json1_1DetachStaticIpCommand;
const serializeAws_json1_1DisableAddOnCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DisableAddOn",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableAddOnRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableAddOnCommand = serializeAws_json1_1DisableAddOnCommand;
const serializeAws_json1_1DownloadDefaultKeyPairCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.DownloadDefaultKeyPair",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DownloadDefaultKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DownloadDefaultKeyPairCommand = serializeAws_json1_1DownloadDefaultKeyPairCommand;
const serializeAws_json1_1EnableAddOnCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.EnableAddOn",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAddOnRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableAddOnCommand = serializeAws_json1_1EnableAddOnCommand;
const serializeAws_json1_1ExportSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.ExportSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ExportSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExportSnapshotCommand = serializeAws_json1_1ExportSnapshotCommand;
const serializeAws_json1_1GetActiveNamesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetActiveNames",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetActiveNamesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetActiveNamesCommand = serializeAws_json1_1GetActiveNamesCommand;
const serializeAws_json1_1GetAlarmsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetAlarms",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAlarmsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAlarmsCommand = serializeAws_json1_1GetAlarmsCommand;
const serializeAws_json1_1GetAutoSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetAutoSnapshots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAutoSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAutoSnapshotsCommand = serializeAws_json1_1GetAutoSnapshotsCommand;
const serializeAws_json1_1GetBlueprintsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetBlueprints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBlueprintsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetBlueprintsCommand = serializeAws_json1_1GetBlueprintsCommand;
const serializeAws_json1_1GetBundlesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetBundles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBundlesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetBundlesCommand = serializeAws_json1_1GetBundlesCommand;
const serializeAws_json1_1GetCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetCertificates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCertificatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCertificatesCommand = serializeAws_json1_1GetCertificatesCommand;
const serializeAws_json1_1GetCloudFormationStackRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetCloudFormationStackRecords",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCloudFormationStackRecordsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCloudFormationStackRecordsCommand = serializeAws_json1_1GetCloudFormationStackRecordsCommand;
const serializeAws_json1_1GetContactMethodsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContactMethods",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContactMethodsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContactMethodsCommand = serializeAws_json1_1GetContactMethodsCommand;
const serializeAws_json1_1GetContainerAPIMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContainerAPIMetadata",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerAPIMetadataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerAPIMetadataCommand = serializeAws_json1_1GetContainerAPIMetadataCommand;
const serializeAws_json1_1GetContainerImagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContainerImages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerImagesCommand = serializeAws_json1_1GetContainerImagesCommand;
const serializeAws_json1_1GetContainerLogCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContainerLog",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerLogRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerLogCommand = serializeAws_json1_1GetContainerLogCommand;
const serializeAws_json1_1GetContainerServiceDeploymentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContainerServiceDeployments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerServiceDeploymentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerServiceDeploymentsCommand = serializeAws_json1_1GetContainerServiceDeploymentsCommand;
const serializeAws_json1_1GetContainerServiceMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContainerServiceMetricData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerServiceMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerServiceMetricDataCommand = serializeAws_json1_1GetContainerServiceMetricDataCommand;
const serializeAws_json1_1GetContainerServicePowersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContainerServicePowers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerServicePowersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerServicePowersCommand = serializeAws_json1_1GetContainerServicePowersCommand;
const serializeAws_json1_1GetContainerServicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetContainerServices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContainerServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContainerServicesCommand = serializeAws_json1_1GetContainerServicesCommand;
const serializeAws_json1_1GetDiskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDisk",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDiskCommand = serializeAws_json1_1GetDiskCommand;
const serializeAws_json1_1GetDisksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDisks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDisksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDisksCommand = serializeAws_json1_1GetDisksCommand;
const serializeAws_json1_1GetDiskSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDiskSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDiskSnapshotCommand = serializeAws_json1_1GetDiskSnapshotCommand;
const serializeAws_json1_1GetDiskSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDiskSnapshots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDiskSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDiskSnapshotsCommand = serializeAws_json1_1GetDiskSnapshotsCommand;
const serializeAws_json1_1GetDistributionBundlesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDistributionBundles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDistributionBundlesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDistributionBundlesCommand = serializeAws_json1_1GetDistributionBundlesCommand;
const serializeAws_json1_1GetDistributionLatestCacheResetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDistributionLatestCacheReset",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDistributionLatestCacheResetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDistributionLatestCacheResetCommand = serializeAws_json1_1GetDistributionLatestCacheResetCommand;
const serializeAws_json1_1GetDistributionMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDistributionMetricData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDistributionMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDistributionMetricDataCommand = serializeAws_json1_1GetDistributionMetricDataCommand;
const serializeAws_json1_1GetDistributionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDistributions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDistributionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDistributionsCommand = serializeAws_json1_1GetDistributionsCommand;
const serializeAws_json1_1GetDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDomainCommand = serializeAws_json1_1GetDomainCommand;
const serializeAws_json1_1GetDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetDomains",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDomainsCommand = serializeAws_json1_1GetDomainsCommand;
const serializeAws_json1_1GetExportSnapshotRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetExportSnapshotRecords",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetExportSnapshotRecordsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetExportSnapshotRecordsCommand = serializeAws_json1_1GetExportSnapshotRecordsCommand;
const serializeAws_json1_1GetInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceCommand = serializeAws_json1_1GetInstanceCommand;
const serializeAws_json1_1GetInstanceAccessDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstanceAccessDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceAccessDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceAccessDetailsCommand = serializeAws_json1_1GetInstanceAccessDetailsCommand;
const serializeAws_json1_1GetInstanceMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstanceMetricData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceMetricDataCommand = serializeAws_json1_1GetInstanceMetricDataCommand;
const serializeAws_json1_1GetInstancePortStatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstancePortStates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstancePortStatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstancePortStatesCommand = serializeAws_json1_1GetInstancePortStatesCommand;
const serializeAws_json1_1GetInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstancesCommand = serializeAws_json1_1GetInstancesCommand;
const serializeAws_json1_1GetInstanceSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstanceSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceSnapshotCommand = serializeAws_json1_1GetInstanceSnapshotCommand;
const serializeAws_json1_1GetInstanceSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstanceSnapshots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceSnapshotsCommand = serializeAws_json1_1GetInstanceSnapshotsCommand;
const serializeAws_json1_1GetInstanceStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetInstanceState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceStateCommand = serializeAws_json1_1GetInstanceStateCommand;
const serializeAws_json1_1GetKeyPairCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetKeyPair",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetKeyPairCommand = serializeAws_json1_1GetKeyPairCommand;
const serializeAws_json1_1GetKeyPairsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetKeyPairs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyPairsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetKeyPairsCommand = serializeAws_json1_1GetKeyPairsCommand;
const serializeAws_json1_1GetLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetLoadBalancer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLoadBalancerCommand = serializeAws_json1_1GetLoadBalancerCommand;
const serializeAws_json1_1GetLoadBalancerMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetLoadBalancerMetricData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancerMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLoadBalancerMetricDataCommand = serializeAws_json1_1GetLoadBalancerMetricDataCommand;
const serializeAws_json1_1GetLoadBalancersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetLoadBalancers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLoadBalancersCommand = serializeAws_json1_1GetLoadBalancersCommand;
const serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetLoadBalancerTlsCertificates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = serializeAws_json1_1GetLoadBalancerTlsCertificatesCommand;
const serializeAws_json1_1GetOperationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetOperation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOperationCommand = serializeAws_json1_1GetOperationCommand;
const serializeAws_json1_1GetOperationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetOperations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOperationsCommand = serializeAws_json1_1GetOperationsCommand;
const serializeAws_json1_1GetOperationsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetOperationsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOperationsForResourceCommand = serializeAws_json1_1GetOperationsForResourceCommand;
const serializeAws_json1_1GetRegionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRegions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRegionsCommand = serializeAws_json1_1GetRegionsCommand;
const serializeAws_json1_1GetRelationalDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseCommand = serializeAws_json1_1GetRelationalDatabaseCommand;
const serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseBlueprints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = serializeAws_json1_1GetRelationalDatabaseBlueprintsCommand;
const serializeAws_json1_1GetRelationalDatabaseBundlesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseBundles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseBundlesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseBundlesCommand = serializeAws_json1_1GetRelationalDatabaseBundlesCommand;
const serializeAws_json1_1GetRelationalDatabaseEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseEventsCommand = serializeAws_json1_1GetRelationalDatabaseEventsCommand;
const serializeAws_json1_1GetRelationalDatabaseLogEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseLogEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseLogEventsCommand = serializeAws_json1_1GetRelationalDatabaseLogEventsCommand;
const serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseLogStreams",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand;
const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand;
const serializeAws_json1_1GetRelationalDatabaseMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseMetricData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseMetricDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseMetricDataCommand = serializeAws_json1_1GetRelationalDatabaseMetricDataCommand;
const serializeAws_json1_1GetRelationalDatabaseParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseParametersCommand = serializeAws_json1_1GetRelationalDatabaseParametersCommand;
const serializeAws_json1_1GetRelationalDatabasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabasesCommand = serializeAws_json1_1GetRelationalDatabasesCommand;
const serializeAws_json1_1GetRelationalDatabaseSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseSnapshot",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseSnapshotCommand = serializeAws_json1_1GetRelationalDatabaseSnapshotCommand;
const serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetRelationalDatabaseSnapshots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand;
const serializeAws_json1_1GetStaticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetStaticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetStaticIpCommand = serializeAws_json1_1GetStaticIpCommand;
const serializeAws_json1_1GetStaticIpsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.GetStaticIps",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetStaticIpsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetStaticIpsCommand = serializeAws_json1_1GetStaticIpsCommand;
const serializeAws_json1_1ImportKeyPairCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.ImportKeyPair",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportKeyPairCommand = serializeAws_json1_1ImportKeyPairCommand;
const serializeAws_json1_1IsVpcPeeredCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.IsVpcPeered",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1IsVpcPeeredRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1IsVpcPeeredCommand = serializeAws_json1_1IsVpcPeeredCommand;
const serializeAws_json1_1OpenInstancePublicPortsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.OpenInstancePublicPorts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1OpenInstancePublicPortsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1OpenInstancePublicPortsCommand = serializeAws_json1_1OpenInstancePublicPortsCommand;
const serializeAws_json1_1PeerVpcCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.PeerVpc",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PeerVpcRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PeerVpcCommand = serializeAws_json1_1PeerVpcCommand;
const serializeAws_json1_1PutAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.PutAlarm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAlarmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAlarmCommand = serializeAws_json1_1PutAlarmCommand;
const serializeAws_json1_1PutInstancePublicPortsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.PutInstancePublicPorts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutInstancePublicPortsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutInstancePublicPortsCommand = serializeAws_json1_1PutInstancePublicPortsCommand;
const serializeAws_json1_1RebootInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.RebootInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RebootInstanceCommand = serializeAws_json1_1RebootInstanceCommand;
const serializeAws_json1_1RebootRelationalDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.RebootRelationalDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RebootRelationalDatabaseCommand = serializeAws_json1_1RebootRelationalDatabaseCommand;
const serializeAws_json1_1RegisterContainerImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.RegisterContainerImage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterContainerImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterContainerImageCommand = serializeAws_json1_1RegisterContainerImageCommand;
const serializeAws_json1_1ReleaseStaticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.ReleaseStaticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ReleaseStaticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ReleaseStaticIpCommand = serializeAws_json1_1ReleaseStaticIpCommand;
const serializeAws_json1_1ResetDistributionCacheCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.ResetDistributionCache",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetDistributionCacheRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResetDistributionCacheCommand = serializeAws_json1_1ResetDistributionCacheCommand;
const serializeAws_json1_1SendContactMethodVerificationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.SendContactMethodVerification",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SendContactMethodVerificationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SendContactMethodVerificationCommand = serializeAws_json1_1SendContactMethodVerificationCommand;
const serializeAws_json1_1SetIpAddressTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.SetIpAddressType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetIpAddressTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetIpAddressTypeCommand = serializeAws_json1_1SetIpAddressTypeCommand;
const serializeAws_json1_1StartInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.StartInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartInstanceCommand = serializeAws_json1_1StartInstanceCommand;
const serializeAws_json1_1StartRelationalDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.StartRelationalDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartRelationalDatabaseCommand = serializeAws_json1_1StartRelationalDatabaseCommand;
const serializeAws_json1_1StopInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.StopInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopInstanceCommand = serializeAws_json1_1StopInstanceCommand;
const serializeAws_json1_1StopRelationalDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.StopRelationalDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopRelationalDatabaseCommand = serializeAws_json1_1StopRelationalDatabaseCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1TestAlarmCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.TestAlarm",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TestAlarmRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TestAlarmCommand = serializeAws_json1_1TestAlarmCommand;
const serializeAws_json1_1UnpeerVpcCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UnpeerVpc",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnpeerVpcRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnpeerVpcCommand = serializeAws_json1_1UnpeerVpcCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateContainerServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UpdateContainerService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContainerServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateContainerServiceCommand = serializeAws_json1_1UpdateContainerServiceCommand;
const serializeAws_json1_1UpdateDistributionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UpdateDistribution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDistributionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDistributionCommand = serializeAws_json1_1UpdateDistributionCommand;
const serializeAws_json1_1UpdateDistributionBundleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UpdateDistributionBundle",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDistributionBundleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDistributionBundleCommand = serializeAws_json1_1UpdateDistributionBundleCommand;
const serializeAws_json1_1UpdateDomainEntryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UpdateDomainEntry",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainEntryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDomainEntryCommand = serializeAws_json1_1UpdateDomainEntryCommand;
const serializeAws_json1_1UpdateLoadBalancerAttributeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UpdateLoadBalancerAttribute",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLoadBalancerAttributeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLoadBalancerAttributeCommand = serializeAws_json1_1UpdateLoadBalancerAttributeCommand;
const serializeAws_json1_1UpdateRelationalDatabaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UpdateRelationalDatabase",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRelationalDatabaseCommand = serializeAws_json1_1UpdateRelationalDatabaseCommand;
const serializeAws_json1_1UpdateRelationalDatabaseParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Lightsail_20161128.UpdateRelationalDatabaseParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRelationalDatabaseParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRelationalDatabaseParametersCommand = serializeAws_json1_1UpdateRelationalDatabaseParametersCommand;
const deserializeAws_json1_1AllocateStaticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AllocateStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AllocateStaticIpResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AllocateStaticIpCommand = deserializeAws_json1_1AllocateStaticIpCommand;
const deserializeAws_json1_1AllocateStaticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AttachCertificateToDistributionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachCertificateToDistributionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachCertificateToDistributionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachCertificateToDistributionCommand = deserializeAws_json1_1AttachCertificateToDistributionCommand;
const deserializeAws_json1_1AttachCertificateToDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AttachDiskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachDiskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachDiskCommand = deserializeAws_json1_1AttachDiskCommand;
const deserializeAws_json1_1AttachDiskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AttachInstancesToLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachInstancesToLoadBalancerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachInstancesToLoadBalancerCommand = deserializeAws_json1_1AttachInstancesToLoadBalancerCommand;
const deserializeAws_json1_1AttachInstancesToLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand = deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommand;
const deserializeAws_json1_1AttachLoadBalancerTlsCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AttachStaticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AttachStaticIpResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachStaticIpCommand = deserializeAws_json1_1AttachStaticIpCommand;
const deserializeAws_json1_1AttachStaticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CloseInstancePublicPortsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CloseInstancePublicPortsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CloseInstancePublicPortsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CloseInstancePublicPortsCommand = deserializeAws_json1_1CloseInstancePublicPortsCommand;
const deserializeAws_json1_1CloseInstancePublicPortsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CopySnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CopySnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopySnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CopySnapshotCommand = deserializeAws_json1_1CopySnapshotCommand;
const deserializeAws_json1_1CopySnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCertificateCommand = deserializeAws_json1_1CreateCertificateCommand;
const deserializeAws_json1_1CreateCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateCloudFormationStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCloudFormationStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCloudFormationStackResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCloudFormationStackCommand = deserializeAws_json1_1CreateCloudFormationStackCommand;
const deserializeAws_json1_1CreateCloudFormationStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateContactMethodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateContactMethodCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContactMethodResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContactMethodCommand = deserializeAws_json1_1CreateContactMethodCommand;
const deserializeAws_json1_1CreateContactMethodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateContainerServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateContainerServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContainerServiceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContainerServiceCommand = deserializeAws_json1_1CreateContainerServiceCommand;
const deserializeAws_json1_1CreateContainerServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateContainerServiceDeploymentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateContainerServiceDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContainerServiceDeploymentResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContainerServiceDeploymentCommand = deserializeAws_json1_1CreateContainerServiceDeploymentCommand;
const deserializeAws_json1_1CreateContainerServiceDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateContainerServiceRegistryLoginCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateContainerServiceRegistryLoginResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand = deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand;
const deserializeAws_json1_1CreateContainerServiceRegistryLoginCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDiskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDiskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDiskCommand = deserializeAws_json1_1CreateDiskCommand;
const deserializeAws_json1_1CreateDiskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDiskFromSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDiskFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDiskFromSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDiskFromSnapshotCommand = deserializeAws_json1_1CreateDiskFromSnapshotCommand;
const deserializeAws_json1_1CreateDiskFromSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDiskSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDiskSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDiskSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDiskSnapshotCommand = deserializeAws_json1_1CreateDiskSnapshotCommand;
const deserializeAws_json1_1CreateDiskSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDistributionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDistributionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDistributionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDistributionCommand = deserializeAws_json1_1CreateDistributionCommand;
const deserializeAws_json1_1CreateDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDomainResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDomainCommand = deserializeAws_json1_1CreateDomainCommand;
const deserializeAws_json1_1CreateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDomainEntryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDomainEntryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDomainEntryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDomainEntryCommand = deserializeAws_json1_1CreateDomainEntryCommand;
const deserializeAws_json1_1CreateDomainEntryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstancesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateInstancesCommand = deserializeAws_json1_1CreateInstancesCommand;
const deserializeAws_json1_1CreateInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateInstancesFromSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateInstancesFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstancesFromSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateInstancesFromSnapshotCommand = deserializeAws_json1_1CreateInstancesFromSnapshotCommand;
const deserializeAws_json1_1CreateInstancesFromSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateInstanceSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateInstanceSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstanceSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateInstanceSnapshotCommand = deserializeAws_json1_1CreateInstanceSnapshotCommand;
const deserializeAws_json1_1CreateInstanceSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateKeyPairCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateKeyPairResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateKeyPairCommand = deserializeAws_json1_1CreateKeyPairCommand;
const deserializeAws_json1_1CreateKeyPairCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLoadBalancerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLoadBalancerCommand = deserializeAws_json1_1CreateLoadBalancerCommand;
const deserializeAws_json1_1CreateLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand = deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommand;
const deserializeAws_json1_1CreateLoadBalancerTlsCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateRelationalDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRelationalDatabaseResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRelationalDatabaseCommand = deserializeAws_json1_1CreateRelationalDatabaseCommand;
const deserializeAws_json1_1CreateRelationalDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand = deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand;
const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand = deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand;
const deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAlarmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAlarmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAlarmResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAlarmCommand = deserializeAws_json1_1DeleteAlarmCommand;
const deserializeAws_json1_1DeleteAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAutoSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAutoSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAutoSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAutoSnapshotCommand = deserializeAws_json1_1DeleteAutoSnapshotCommand;
const deserializeAws_json1_1DeleteAutoSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCertificateCommand = deserializeAws_json1_1DeleteCertificateCommand;
const deserializeAws_json1_1DeleteCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteContactMethodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteContactMethodCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContactMethodResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContactMethodCommand = deserializeAws_json1_1DeleteContactMethodCommand;
const deserializeAws_json1_1DeleteContactMethodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteContainerImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteContainerImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContainerImageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContainerImageCommand = deserializeAws_json1_1DeleteContainerImageCommand;
const deserializeAws_json1_1DeleteContainerImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteContainerServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteContainerServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteContainerServiceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteContainerServiceCommand = deserializeAws_json1_1DeleteContainerServiceCommand;
const deserializeAws_json1_1DeleteContainerServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDiskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDiskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDiskCommand = deserializeAws_json1_1DeleteDiskCommand;
const deserializeAws_json1_1DeleteDiskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDiskSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDiskSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDiskSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDiskSnapshotCommand = deserializeAws_json1_1DeleteDiskSnapshotCommand;
const deserializeAws_json1_1DeleteDiskSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDistributionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDistributionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDistributionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDistributionCommand = deserializeAws_json1_1DeleteDistributionCommand;
const deserializeAws_json1_1DeleteDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDomainResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDomainCommand = deserializeAws_json1_1DeleteDomainCommand;
const deserializeAws_json1_1DeleteDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDomainEntryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDomainEntryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDomainEntryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDomainEntryCommand = deserializeAws_json1_1DeleteDomainEntryCommand;
const deserializeAws_json1_1DeleteDomainEntryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteInstanceCommand = deserializeAws_json1_1DeleteInstanceCommand;
const deserializeAws_json1_1DeleteInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteInstanceSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteInstanceSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteInstanceSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteInstanceSnapshotCommand = deserializeAws_json1_1DeleteInstanceSnapshotCommand;
const deserializeAws_json1_1DeleteInstanceSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteKeyPairCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteKeyPairResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteKeyPairCommand = deserializeAws_json1_1DeleteKeyPairCommand;
const deserializeAws_json1_1DeleteKeyPairCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteKnownHostKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteKnownHostKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteKnownHostKeysResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteKnownHostKeysCommand = deserializeAws_json1_1DeleteKnownHostKeysCommand;
const deserializeAws_json1_1DeleteKnownHostKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLoadBalancerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLoadBalancerCommand = deserializeAws_json1_1DeleteLoadBalancerCommand;
const deserializeAws_json1_1DeleteLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand = deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommand;
const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRelationalDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRelationalDatabaseResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRelationalDatabaseCommand = deserializeAws_json1_1DeleteRelationalDatabaseCommand;
const deserializeAws_json1_1DeleteRelationalDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand = deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand;
const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetachCertificateFromDistributionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetachCertificateFromDistributionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachCertificateFromDistributionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetachCertificateFromDistributionCommand = deserializeAws_json1_1DetachCertificateFromDistributionCommand;
const deserializeAws_json1_1DetachCertificateFromDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetachDiskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetachDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachDiskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetachDiskCommand = deserializeAws_json1_1DetachDiskCommand;
const deserializeAws_json1_1DetachDiskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachInstancesFromLoadBalancerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand = deserializeAws_json1_1DetachInstancesFromLoadBalancerCommand;
const deserializeAws_json1_1DetachInstancesFromLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetachStaticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetachStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetachStaticIpResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetachStaticIpCommand = deserializeAws_json1_1DetachStaticIpCommand;
const deserializeAws_json1_1DetachStaticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableAddOnCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableAddOnCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableAddOnResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableAddOnCommand = deserializeAws_json1_1DisableAddOnCommand;
const deserializeAws_json1_1DisableAddOnCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DownloadDefaultKeyPairCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DownloadDefaultKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DownloadDefaultKeyPairResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DownloadDefaultKeyPairCommand = deserializeAws_json1_1DownloadDefaultKeyPairCommand;
const deserializeAws_json1_1DownloadDefaultKeyPairCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableAddOnCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableAddOnCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableAddOnResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableAddOnCommand = deserializeAws_json1_1EnableAddOnCommand;
const deserializeAws_json1_1EnableAddOnCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ExportSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ExportSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExportSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExportSnapshotCommand = deserializeAws_json1_1ExportSnapshotCommand;
const deserializeAws_json1_1ExportSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetActiveNamesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetActiveNamesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetActiveNamesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetActiveNamesCommand = deserializeAws_json1_1GetActiveNamesCommand;
const deserializeAws_json1_1GetActiveNamesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAlarmsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAlarmsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAlarmsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAlarmsCommand = deserializeAws_json1_1GetAlarmsCommand;
const deserializeAws_json1_1GetAlarmsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAutoSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAutoSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAutoSnapshotsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAutoSnapshotsCommand = deserializeAws_json1_1GetAutoSnapshotsCommand;
const deserializeAws_json1_1GetAutoSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetBlueprintsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetBlueprintsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBlueprintsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetBlueprintsCommand = deserializeAws_json1_1GetBlueprintsCommand;
const deserializeAws_json1_1GetBlueprintsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetBundlesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetBundlesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBundlesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetBundlesCommand = deserializeAws_json1_1GetBundlesCommand;
const deserializeAws_json1_1GetBundlesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCertificatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCertificatesCommand = deserializeAws_json1_1GetCertificatesCommand;
const deserializeAws_json1_1GetCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetCloudFormationStackRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetCloudFormationStackRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCloudFormationStackRecordsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCloudFormationStackRecordsCommand = deserializeAws_json1_1GetCloudFormationStackRecordsCommand;
const deserializeAws_json1_1GetCloudFormationStackRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContactMethodsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContactMethodsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContactMethodsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContactMethodsCommand = deserializeAws_json1_1GetContactMethodsCommand;
const deserializeAws_json1_1GetContactMethodsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContainerAPIMetadataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerAPIMetadataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerAPIMetadataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerAPIMetadataCommand = deserializeAws_json1_1GetContainerAPIMetadataCommand;
const deserializeAws_json1_1GetContainerAPIMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContainerImagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerImagesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerImagesCommand = deserializeAws_json1_1GetContainerImagesCommand;
const deserializeAws_json1_1GetContainerImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContainerLogCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerLogCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerLogResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerLogCommand = deserializeAws_json1_1GetContainerLogCommand;
const deserializeAws_json1_1GetContainerLogCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContainerServiceDeploymentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerServiceDeploymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerServiceDeploymentsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerServiceDeploymentsCommand = deserializeAws_json1_1GetContainerServiceDeploymentsCommand;
const deserializeAws_json1_1GetContainerServiceDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContainerServiceMetricDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerServiceMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerServiceMetricDataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerServiceMetricDataCommand = deserializeAws_json1_1GetContainerServiceMetricDataCommand;
const deserializeAws_json1_1GetContainerServiceMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContainerServicePowersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerServicePowersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContainerServicePowersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerServicePowersCommand = deserializeAws_json1_1GetContainerServicePowersCommand;
const deserializeAws_json1_1GetContainerServicePowersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContainerServicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContainerServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ContainerServicesListResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContainerServicesCommand = deserializeAws_json1_1GetContainerServicesCommand;
const deserializeAws_json1_1GetContainerServicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDiskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDiskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDiskCommand = deserializeAws_json1_1GetDiskCommand;
const deserializeAws_json1_1GetDiskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDisksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDisksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDisksResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDisksCommand = deserializeAws_json1_1GetDisksCommand;
const deserializeAws_json1_1GetDisksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDiskSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDiskSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiskSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDiskSnapshotCommand = deserializeAws_json1_1GetDiskSnapshotCommand;
const deserializeAws_json1_1GetDiskSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDiskSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDiskSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDiskSnapshotsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDiskSnapshotsCommand = deserializeAws_json1_1GetDiskSnapshotsCommand;
const deserializeAws_json1_1GetDiskSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDistributionBundlesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDistributionBundlesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDistributionBundlesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDistributionBundlesCommand = deserializeAws_json1_1GetDistributionBundlesCommand;
const deserializeAws_json1_1GetDistributionBundlesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDistributionLatestCacheResetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDistributionLatestCacheResetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDistributionLatestCacheResetResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDistributionLatestCacheResetCommand = deserializeAws_json1_1GetDistributionLatestCacheResetCommand;
const deserializeAws_json1_1GetDistributionLatestCacheResetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDistributionMetricDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDistributionMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDistributionMetricDataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDistributionMetricDataCommand = deserializeAws_json1_1GetDistributionMetricDataCommand;
const deserializeAws_json1_1GetDistributionMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDistributionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDistributionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDistributionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDistributionsCommand = deserializeAws_json1_1GetDistributionsCommand;
const deserializeAws_json1_1GetDistributionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDomainCommand = deserializeAws_json1_1GetDomainCommand;
const deserializeAws_json1_1GetDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDomainsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDomainsCommand = deserializeAws_json1_1GetDomainsCommand;
const deserializeAws_json1_1GetDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetExportSnapshotRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetExportSnapshotRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetExportSnapshotRecordsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetExportSnapshotRecordsCommand = deserializeAws_json1_1GetExportSnapshotRecordsCommand;
const deserializeAws_json1_1GetExportSnapshotRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceCommand = deserializeAws_json1_1GetInstanceCommand;
const deserializeAws_json1_1GetInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceAccessDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceAccessDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceAccessDetailsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceAccessDetailsCommand = deserializeAws_json1_1GetInstanceAccessDetailsCommand;
const deserializeAws_json1_1GetInstanceAccessDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceMetricDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceMetricDataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceMetricDataCommand = deserializeAws_json1_1GetInstanceMetricDataCommand;
const deserializeAws_json1_1GetInstanceMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstancePortStatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstancePortStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstancePortStatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstancePortStatesCommand = deserializeAws_json1_1GetInstancePortStatesCommand;
const deserializeAws_json1_1GetInstancePortStatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstancesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstancesCommand = deserializeAws_json1_1GetInstancesCommand;
const deserializeAws_json1_1GetInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceSnapshotCommand = deserializeAws_json1_1GetInstanceSnapshotCommand;
const deserializeAws_json1_1GetInstanceSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceSnapshotsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceSnapshotsCommand = deserializeAws_json1_1GetInstanceSnapshotsCommand;
const deserializeAws_json1_1GetInstanceSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceStateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceStateCommand = deserializeAws_json1_1GetInstanceStateCommand;
const deserializeAws_json1_1GetInstanceStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetKeyPairCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyPairResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetKeyPairCommand = deserializeAws_json1_1GetKeyPairCommand;
const deserializeAws_json1_1GetKeyPairCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetKeyPairsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetKeyPairsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyPairsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetKeyPairsCommand = deserializeAws_json1_1GetKeyPairsCommand;
const deserializeAws_json1_1GetKeyPairsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLoadBalancerCommand = deserializeAws_json1_1GetLoadBalancerCommand;
const deserializeAws_json1_1GetLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLoadBalancerMetricDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLoadBalancerMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancerMetricDataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLoadBalancerMetricDataCommand = deserializeAws_json1_1GetLoadBalancerMetricDataCommand;
const deserializeAws_json1_1GetLoadBalancerMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLoadBalancersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLoadBalancersCommand = deserializeAws_json1_1GetLoadBalancersCommand;
const deserializeAws_json1_1GetLoadBalancersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand = deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommand;
const deserializeAws_json1_1GetLoadBalancerTlsCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOperationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOperationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOperationCommand = deserializeAws_json1_1GetOperationCommand;
const deserializeAws_json1_1GetOperationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOperationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOperationsCommand = deserializeAws_json1_1GetOperationsCommand;
const deserializeAws_json1_1GetOperationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOperationsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOperationsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationsForResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOperationsForResourceCommand = deserializeAws_json1_1GetOperationsForResourceCommand;
const deserializeAws_json1_1GetOperationsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRegionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRegionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRegionsCommand = deserializeAws_json1_1GetRegionsCommand;
const deserializeAws_json1_1GetRegionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseCommand = deserializeAws_json1_1GetRelationalDatabaseCommand;
const deserializeAws_json1_1GetRelationalDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand = deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommand;
const deserializeAws_json1_1GetRelationalDatabaseBlueprintsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseBundlesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseBundlesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseBundlesCommand = deserializeAws_json1_1GetRelationalDatabaseBundlesCommand;
const deserializeAws_json1_1GetRelationalDatabaseBundlesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseEventsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseEventsCommand = deserializeAws_json1_1GetRelationalDatabaseEventsCommand;
const deserializeAws_json1_1GetRelationalDatabaseEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseLogEventsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand = deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand;
const deserializeAws_json1_1GetRelationalDatabaseLogEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand = deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand;
const deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand = deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand;
const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseMetricDataResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand = deserializeAws_json1_1GetRelationalDatabaseMetricDataCommand;
const deserializeAws_json1_1GetRelationalDatabaseMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseParametersCommand = deserializeAws_json1_1GetRelationalDatabaseParametersCommand;
const deserializeAws_json1_1GetRelationalDatabaseParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabasesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabasesCommand = deserializeAws_json1_1GetRelationalDatabasesCommand;
const deserializeAws_json1_1GetRelationalDatabasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand = deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand;
const deserializeAws_json1_1GetRelationalDatabaseSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand = deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand;
const deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetStaticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetStaticIpResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetStaticIpCommand = deserializeAws_json1_1GetStaticIpCommand;
const deserializeAws_json1_1GetStaticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetStaticIpsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetStaticIpsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetStaticIpsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetStaticIpsCommand = deserializeAws_json1_1GetStaticIpsCommand;
const deserializeAws_json1_1GetStaticIpsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ImportKeyPairCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportKeyPairResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportKeyPairCommand = deserializeAws_json1_1ImportKeyPairCommand;
const deserializeAws_json1_1ImportKeyPairCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1IsVpcPeeredCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1IsVpcPeeredCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IsVpcPeeredResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1IsVpcPeeredCommand = deserializeAws_json1_1IsVpcPeeredCommand;
const deserializeAws_json1_1IsVpcPeeredCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1OpenInstancePublicPortsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1OpenInstancePublicPortsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1OpenInstancePublicPortsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1OpenInstancePublicPortsCommand = deserializeAws_json1_1OpenInstancePublicPortsCommand;
const deserializeAws_json1_1OpenInstancePublicPortsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PeerVpcCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PeerVpcCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PeerVpcResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PeerVpcCommand = deserializeAws_json1_1PeerVpcCommand;
const deserializeAws_json1_1PeerVpcCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutAlarmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAlarmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAlarmResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAlarmCommand = deserializeAws_json1_1PutAlarmCommand;
const deserializeAws_json1_1PutAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutInstancePublicPortsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutInstancePublicPortsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutInstancePublicPortsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutInstancePublicPortsCommand = deserializeAws_json1_1PutInstancePublicPortsCommand;
const deserializeAws_json1_1PutInstancePublicPortsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RebootInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RebootInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RebootInstanceCommand = deserializeAws_json1_1RebootInstanceCommand;
const deserializeAws_json1_1RebootInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RebootRelationalDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RebootRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootRelationalDatabaseResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RebootRelationalDatabaseCommand = deserializeAws_json1_1RebootRelationalDatabaseCommand;
const deserializeAws_json1_1RebootRelationalDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterContainerImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterContainerImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterContainerImageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterContainerImageCommand = deserializeAws_json1_1RegisterContainerImageCommand;
const deserializeAws_json1_1RegisterContainerImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ReleaseStaticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ReleaseStaticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReleaseStaticIpResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ReleaseStaticIpCommand = deserializeAws_json1_1ReleaseStaticIpCommand;
const deserializeAws_json1_1ReleaseStaticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResetDistributionCacheCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResetDistributionCacheCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetDistributionCacheResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResetDistributionCacheCommand = deserializeAws_json1_1ResetDistributionCacheCommand;
const deserializeAws_json1_1ResetDistributionCacheCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SendContactMethodVerificationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SendContactMethodVerificationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendContactMethodVerificationResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SendContactMethodVerificationCommand = deserializeAws_json1_1SendContactMethodVerificationCommand;
const deserializeAws_json1_1SendContactMethodVerificationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetIpAddressTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetIpAddressTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetIpAddressTypeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetIpAddressTypeCommand = deserializeAws_json1_1SetIpAddressTypeCommand;
const deserializeAws_json1_1SetIpAddressTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartInstanceCommand = deserializeAws_json1_1StartInstanceCommand;
const deserializeAws_json1_1StartInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartRelationalDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartRelationalDatabaseResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartRelationalDatabaseCommand = deserializeAws_json1_1StartRelationalDatabaseCommand;
const deserializeAws_json1_1StartRelationalDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopInstanceCommand = deserializeAws_json1_1StopInstanceCommand;
const deserializeAws_json1_1StopInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopRelationalDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopRelationalDatabaseResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopRelationalDatabaseCommand = deserializeAws_json1_1StopRelationalDatabaseCommand;
const deserializeAws_json1_1StopRelationalDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1TagResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TestAlarmCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TestAlarmCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestAlarmResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TestAlarmCommand = deserializeAws_json1_1TestAlarmCommand;
const deserializeAws_json1_1TestAlarmCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UnpeerVpcCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnpeerVpcCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UnpeerVpcResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnpeerVpcCommand = deserializeAws_json1_1UnpeerVpcCommand;
const deserializeAws_json1_1UnpeerVpcCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1UntagResourceResult(data, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateContainerServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateContainerServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContainerServiceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateContainerServiceCommand = deserializeAws_json1_1UpdateContainerServiceCommand;
const deserializeAws_json1_1UpdateContainerServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDistributionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDistributionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDistributionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDistributionCommand = deserializeAws_json1_1UpdateDistributionCommand;
const deserializeAws_json1_1UpdateDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDistributionBundleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDistributionBundleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDistributionBundleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDistributionBundleCommand = deserializeAws_json1_1UpdateDistributionBundleCommand;
const deserializeAws_json1_1UpdateDistributionBundleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDomainEntryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDomainEntryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainEntryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDomainEntryCommand = deserializeAws_json1_1UpdateDomainEntryCommand;
const deserializeAws_json1_1UpdateDomainEntryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateLoadBalancerAttributeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateLoadBalancerAttributeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLoadBalancerAttributeCommand = deserializeAws_json1_1UpdateLoadBalancerAttributeCommand;
const deserializeAws_json1_1UpdateLoadBalancerAttributeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRelationalDatabaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRelationalDatabaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRelationalDatabaseResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRelationalDatabaseCommand = deserializeAws_json1_1UpdateRelationalDatabaseCommand;
const deserializeAws_json1_1UpdateRelationalDatabaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRelationalDatabaseParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand = deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand;
const deserializeAws_json1_1UpdateRelationalDatabaseParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lightsail#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountSetupInProgressException":
        case "com.amazonaws.lightsail#AccountSetupInProgressException":
            response = {
                ...(await deserializeAws_json1_1AccountSetupInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.lightsail#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.lightsail#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationFailureException":
        case "com.amazonaws.lightsail#OperationFailureException":
            response = {
                ...(await deserializeAws_json1_1OperationFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lightsail#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthenticatedException":
        case "com.amazonaws.lightsail#UnauthenticatedException":
            response = {
                ...(await deserializeAws_json1_1UnauthenticatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AccountSetupInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountSetupInProgressException(body, context);
    const contents = {
        name: "AccountSetupInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
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
const deserializeAws_json1_1OperationFailureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationFailureException(body, context);
    const contents = {
        name: "OperationFailureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = {
        name: "ServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnauthenticatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthenticatedException(body, context);
    const contents = {
        name: "UnauthenticatedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddOnRequest = (input, context) => {
    return {
        ...(input.addOnType !== undefined && input.addOnType !== null && { addOnType: input.addOnType }),
        ...(input.autoSnapshotAddOnRequest !== undefined &&
            input.autoSnapshotAddOnRequest !== null && {
            autoSnapshotAddOnRequest: serializeAws_json1_1AutoSnapshotAddOnRequest(input.autoSnapshotAddOnRequest, context),
        }),
    };
};
const serializeAws_json1_1AddOnRequestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AddOnRequest(entry, context);
    });
};
const serializeAws_json1_1AllocateStaticIpRequest = (input, context) => {
    return {
        ...(input.staticIpName !== undefined && input.staticIpName !== null && { staticIpName: input.staticIpName }),
    };
};
const serializeAws_json1_1AttachCertificateToDistributionRequest = (input, context) => {
    return {
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
    };
};
const serializeAws_json1_1AttachDiskRequest = (input, context) => {
    return {
        ...(input.diskName !== undefined && input.diskName !== null && { diskName: input.diskName }),
        ...(input.diskPath !== undefined && input.diskPath !== null && { diskPath: input.diskPath }),
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1AttachedDiskMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1DiskMapList(value, context),
        };
    }, {});
};
const serializeAws_json1_1AttachInstancesToLoadBalancerRequest = (input, context) => {
    return {
        ...(input.instanceNames !== undefined &&
            input.instanceNames !== null && {
            instanceNames: serializeAws_json1_1ResourceNameList(input.instanceNames, context),
        }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1AttachLoadBalancerTlsCertificateRequest = (input, context) => {
    return {
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1AttachStaticIpRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.staticIpName !== undefined && input.staticIpName !== null && { staticIpName: input.staticIpName }),
    };
};
const serializeAws_json1_1AutoSnapshotAddOnRequest = (input, context) => {
    return {
        ...(input.snapshotTimeOfDay !== undefined &&
            input.snapshotTimeOfDay !== null && { snapshotTimeOfDay: input.snapshotTimeOfDay }),
    };
};
const serializeAws_json1_1CacheBehavior = (input, context) => {
    return {
        ...(input.behavior !== undefined && input.behavior !== null && { behavior: input.behavior }),
    };
};
const serializeAws_json1_1CacheBehaviorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CacheBehaviorPerPath(entry, context);
    });
};
const serializeAws_json1_1CacheBehaviorPerPath = (input, context) => {
    return {
        ...(input.behavior !== undefined && input.behavior !== null && { behavior: input.behavior }),
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
    };
};
const serializeAws_json1_1CacheSettings = (input, context) => {
    return {
        ...(input.allowedHTTPMethods !== undefined &&
            input.allowedHTTPMethods !== null && { allowedHTTPMethods: input.allowedHTTPMethods }),
        ...(input.cachedHTTPMethods !== undefined &&
            input.cachedHTTPMethods !== null && { cachedHTTPMethods: input.cachedHTTPMethods }),
        ...(input.defaultTTL !== undefined && input.defaultTTL !== null && { defaultTTL: input.defaultTTL }),
        ...(input.forwardedCookies !== undefined &&
            input.forwardedCookies !== null && {
            forwardedCookies: serializeAws_json1_1CookieObject(input.forwardedCookies, context),
        }),
        ...(input.forwardedHeaders !== undefined &&
            input.forwardedHeaders !== null && {
            forwardedHeaders: serializeAws_json1_1HeaderObject(input.forwardedHeaders, context),
        }),
        ...(input.forwardedQueryStrings !== undefined &&
            input.forwardedQueryStrings !== null && {
            forwardedQueryStrings: serializeAws_json1_1QueryStringObject(input.forwardedQueryStrings, context),
        }),
        ...(input.maximumTTL !== undefined && input.maximumTTL !== null && { maximumTTL: input.maximumTTL }),
        ...(input.minimumTTL !== undefined && input.minimumTTL !== null && { minimumTTL: input.minimumTTL }),
    };
};
const serializeAws_json1_1CertificateStatusList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CloseInstancePublicPortsRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.portInfo !== undefined &&
            input.portInfo !== null && { portInfo: serializeAws_json1_1PortInfo(input.portInfo, context) }),
    };
};
const serializeAws_json1_1ContactProtocolsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Container = (input, context) => {
    return {
        ...(input.command !== undefined &&
            input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) }),
        ...(input.environment !== undefined &&
            input.environment !== null && { environment: serializeAws_json1_1Environment(input.environment, context) }),
        ...(input.image !== undefined && input.image !== null && { image: input.image }),
        ...(input.ports !== undefined &&
            input.ports !== null && { ports: serializeAws_json1_1PortMap(input.ports, context) }),
    };
};
const serializeAws_json1_1ContainerMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1Container(value, context),
        };
    }, {});
};
const serializeAws_json1_1ContainerServiceDeploymentRequest = (input, context) => {
    return {
        ...(input.containers !== undefined &&
            input.containers !== null && { containers: serializeAws_json1_1ContainerMap(input.containers, context) }),
        ...(input.publicEndpoint !== undefined &&
            input.publicEndpoint !== null && {
            publicEndpoint: serializeAws_json1_1EndpointRequest(input.publicEndpoint, context),
        }),
    };
};
const serializeAws_json1_1ContainerServiceHealthCheckConfig = (input, context) => {
    return {
        ...(input.healthyThreshold !== undefined &&
            input.healthyThreshold !== null && { healthyThreshold: input.healthyThreshold }),
        ...(input.intervalSeconds !== undefined &&
            input.intervalSeconds !== null && { intervalSeconds: input.intervalSeconds }),
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
        ...(input.successCodes !== undefined && input.successCodes !== null && { successCodes: input.successCodes }),
        ...(input.timeoutSeconds !== undefined &&
            input.timeoutSeconds !== null && { timeoutSeconds: input.timeoutSeconds }),
        ...(input.unhealthyThreshold !== undefined &&
            input.unhealthyThreshold !== null && { unhealthyThreshold: input.unhealthyThreshold }),
    };
};
const serializeAws_json1_1ContainerServicePublicDomains = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ContainerServicePublicDomainsList(value, context),
        };
    }, {});
};
const serializeAws_json1_1ContainerServicePublicDomainsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CookieObject = (input, context) => {
    return {
        ...(input.cookiesAllowList !== undefined &&
            input.cookiesAllowList !== null && {
            cookiesAllowList: serializeAws_json1_1StringList(input.cookiesAllowList, context),
        }),
        ...(input.option !== undefined && input.option !== null && { option: input.option }),
    };
};
const serializeAws_json1_1CopySnapshotRequest = (input, context) => {
    return {
        ...(input.restoreDate !== undefined && input.restoreDate !== null && { restoreDate: input.restoreDate }),
        ...(input.sourceRegion !== undefined && input.sourceRegion !== null && { sourceRegion: input.sourceRegion }),
        ...(input.sourceResourceName !== undefined &&
            input.sourceResourceName !== null && { sourceResourceName: input.sourceResourceName }),
        ...(input.sourceSnapshotName !== undefined &&
            input.sourceSnapshotName !== null && { sourceSnapshotName: input.sourceSnapshotName }),
        ...(input.targetSnapshotName !== undefined &&
            input.targetSnapshotName !== null && { targetSnapshotName: input.targetSnapshotName }),
        ...(input.useLatestRestorableAutoSnapshot !== undefined &&
            input.useLatestRestorableAutoSnapshot !== null && {
            useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
        }),
    };
};
const serializeAws_json1_1CreateCertificateRequest = (input, context) => {
    return {
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
        ...(input.subjectAlternativeNames !== undefined &&
            input.subjectAlternativeNames !== null && {
            subjectAlternativeNames: serializeAws_json1_1SubjectAlternativeNameList(input.subjectAlternativeNames, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateCloudFormationStackRequest = (input, context) => {
    return {
        ...(input.instances !== undefined &&
            input.instances !== null && { instances: serializeAws_json1_1InstanceEntryList(input.instances, context) }),
    };
};
const serializeAws_json1_1CreateContactMethodRequest = (input, context) => {
    return {
        ...(input.contactEndpoint !== undefined &&
            input.contactEndpoint !== null && { contactEndpoint: input.contactEndpoint }),
        ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    };
};
const serializeAws_json1_1CreateContainerServiceDeploymentRequest = (input, context) => {
    return {
        ...(input.containers !== undefined &&
            input.containers !== null && { containers: serializeAws_json1_1ContainerMap(input.containers, context) }),
        ...(input.publicEndpoint !== undefined &&
            input.publicEndpoint !== null && {
            publicEndpoint: serializeAws_json1_1EndpointRequest(input.publicEndpoint, context),
        }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1CreateContainerServiceRegistryLoginRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1CreateContainerServiceRequest = (input, context) => {
    return {
        ...(input.deployment !== undefined &&
            input.deployment !== null && {
            deployment: serializeAws_json1_1ContainerServiceDeploymentRequest(input.deployment, context),
        }),
        ...(input.power !== undefined && input.power !== null && { power: input.power }),
        ...(input.publicDomainNames !== undefined &&
            input.publicDomainNames !== null && {
            publicDomainNames: serializeAws_json1_1ContainerServicePublicDomains(input.publicDomainNames, context),
        }),
        ...(input.scale !== undefined && input.scale !== null && { scale: input.scale }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateDiskFromSnapshotRequest = (input, context) => {
    return {
        ...(input.addOns !== undefined &&
            input.addOns !== null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
        ...(input.availabilityZone !== undefined &&
            input.availabilityZone !== null && { availabilityZone: input.availabilityZone }),
        ...(input.diskName !== undefined && input.diskName !== null && { diskName: input.diskName }),
        ...(input.diskSnapshotName !== undefined &&
            input.diskSnapshotName !== null && { diskSnapshotName: input.diskSnapshotName }),
        ...(input.restoreDate !== undefined && input.restoreDate !== null && { restoreDate: input.restoreDate }),
        ...(input.sizeInGb !== undefined && input.sizeInGb !== null && { sizeInGb: input.sizeInGb }),
        ...(input.sourceDiskName !== undefined &&
            input.sourceDiskName !== null && { sourceDiskName: input.sourceDiskName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.useLatestRestorableAutoSnapshot !== undefined &&
            input.useLatestRestorableAutoSnapshot !== null && {
            useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
        }),
    };
};
const serializeAws_json1_1CreateDiskRequest = (input, context) => {
    return {
        ...(input.addOns !== undefined &&
            input.addOns !== null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
        ...(input.availabilityZone !== undefined &&
            input.availabilityZone !== null && { availabilityZone: input.availabilityZone }),
        ...(input.diskName !== undefined && input.diskName !== null && { diskName: input.diskName }),
        ...(input.sizeInGb !== undefined && input.sizeInGb !== null && { sizeInGb: input.sizeInGb }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateDiskSnapshotRequest = (input, context) => {
    return {
        ...(input.diskName !== undefined && input.diskName !== null && { diskName: input.diskName }),
        ...(input.diskSnapshotName !== undefined &&
            input.diskSnapshotName !== null && { diskSnapshotName: input.diskSnapshotName }),
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateDistributionRequest = (input, context) => {
    return {
        ...(input.bundleId !== undefined && input.bundleId !== null && { bundleId: input.bundleId }),
        ...(input.cacheBehaviorSettings !== undefined &&
            input.cacheBehaviorSettings !== null && {
            cacheBehaviorSettings: serializeAws_json1_1CacheSettings(input.cacheBehaviorSettings, context),
        }),
        ...(input.cacheBehaviors !== undefined &&
            input.cacheBehaviors !== null && {
            cacheBehaviors: serializeAws_json1_1CacheBehaviorList(input.cacheBehaviors, context),
        }),
        ...(input.defaultCacheBehavior !== undefined &&
            input.defaultCacheBehavior !== null && {
            defaultCacheBehavior: serializeAws_json1_1CacheBehavior(input.defaultCacheBehavior, context),
        }),
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
        ...(input.ipAddressType !== undefined && input.ipAddressType !== null && { ipAddressType: input.ipAddressType }),
        ...(input.origin !== undefined &&
            input.origin !== null && { origin: serializeAws_json1_1InputOrigin(input.origin, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateDomainEntryRequest = (input, context) => {
    return {
        ...(input.domainEntry !== undefined &&
            input.domainEntry !== null && { domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context) }),
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    };
};
const serializeAws_json1_1CreateDomainRequest = (input, context) => {
    return {
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateInstancesFromSnapshotRequest = (input, context) => {
    return {
        ...(input.addOns !== undefined &&
            input.addOns !== null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
        ...(input.attachedDiskMapping !== undefined &&
            input.attachedDiskMapping !== null && {
            attachedDiskMapping: serializeAws_json1_1AttachedDiskMap(input.attachedDiskMapping, context),
        }),
        ...(input.availabilityZone !== undefined &&
            input.availabilityZone !== null && { availabilityZone: input.availabilityZone }),
        ...(input.bundleId !== undefined && input.bundleId !== null && { bundleId: input.bundleId }),
        ...(input.instanceNames !== undefined &&
            input.instanceNames !== null && { instanceNames: serializeAws_json1_1StringList(input.instanceNames, context) }),
        ...(input.instanceSnapshotName !== undefined &&
            input.instanceSnapshotName !== null && { instanceSnapshotName: input.instanceSnapshotName }),
        ...(input.ipAddressType !== undefined && input.ipAddressType !== null && { ipAddressType: input.ipAddressType }),
        ...(input.keyPairName !== undefined && input.keyPairName !== null && { keyPairName: input.keyPairName }),
        ...(input.restoreDate !== undefined && input.restoreDate !== null && { restoreDate: input.restoreDate }),
        ...(input.sourceInstanceName !== undefined &&
            input.sourceInstanceName !== null && { sourceInstanceName: input.sourceInstanceName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.useLatestRestorableAutoSnapshot !== undefined &&
            input.useLatestRestorableAutoSnapshot !== null && {
            useLatestRestorableAutoSnapshot: input.useLatestRestorableAutoSnapshot,
        }),
        ...(input.userData !== undefined && input.userData !== null && { userData: input.userData }),
    };
};
const serializeAws_json1_1CreateInstanceSnapshotRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.instanceSnapshotName !== undefined &&
            input.instanceSnapshotName !== null && { instanceSnapshotName: input.instanceSnapshotName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateInstancesRequest = (input, context) => {
    return {
        ...(input.addOns !== undefined &&
            input.addOns !== null && { addOns: serializeAws_json1_1AddOnRequestList(input.addOns, context) }),
        ...(input.availabilityZone !== undefined &&
            input.availabilityZone !== null && { availabilityZone: input.availabilityZone }),
        ...(input.blueprintId !== undefined && input.blueprintId !== null && { blueprintId: input.blueprintId }),
        ...(input.bundleId !== undefined && input.bundleId !== null && { bundleId: input.bundleId }),
        ...(input.customImageName !== undefined &&
            input.customImageName !== null && { customImageName: input.customImageName }),
        ...(input.instanceNames !== undefined &&
            input.instanceNames !== null && { instanceNames: serializeAws_json1_1StringList(input.instanceNames, context) }),
        ...(input.ipAddressType !== undefined && input.ipAddressType !== null && { ipAddressType: input.ipAddressType }),
        ...(input.keyPairName !== undefined && input.keyPairName !== null && { keyPairName: input.keyPairName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.userData !== undefined && input.userData !== null && { userData: input.userData }),
    };
};
const serializeAws_json1_1CreateKeyPairRequest = (input, context) => {
    return {
        ...(input.keyPairName !== undefined && input.keyPairName !== null && { keyPairName: input.keyPairName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateLoadBalancerRequest = (input, context) => {
    return {
        ...(input.certificateAlternativeNames !== undefined &&
            input.certificateAlternativeNames !== null && {
            certificateAlternativeNames: serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context),
        }),
        ...(input.certificateDomainName !== undefined &&
            input.certificateDomainName !== null && { certificateDomainName: input.certificateDomainName }),
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
        ...(input.healthCheckPath !== undefined &&
            input.healthCheckPath !== null && { healthCheckPath: input.healthCheckPath }),
        ...(input.instancePort !== undefined && input.instancePort !== null && { instancePort: input.instancePort }),
        ...(input.ipAddressType !== undefined && input.ipAddressType !== null && { ipAddressType: input.ipAddressType }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateLoadBalancerTlsCertificateRequest = (input, context) => {
    return {
        ...(input.certificateAlternativeNames !== undefined &&
            input.certificateAlternativeNames !== null && {
            certificateAlternativeNames: serializeAws_json1_1DomainNameList(input.certificateAlternativeNames, context),
        }),
        ...(input.certificateDomainName !== undefined &&
            input.certificateDomainName !== null && { certificateDomainName: input.certificateDomainName }),
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateRelationalDatabaseFromSnapshotRequest = (input, context) => {
    return {
        ...(input.availabilityZone !== undefined &&
            input.availabilityZone !== null && { availabilityZone: input.availabilityZone }),
        ...(input.publiclyAccessible !== undefined &&
            input.publiclyAccessible !== null && { publiclyAccessible: input.publiclyAccessible }),
        ...(input.relationalDatabaseBundleId !== undefined &&
            input.relationalDatabaseBundleId !== null && { relationalDatabaseBundleId: input.relationalDatabaseBundleId }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.relationalDatabaseSnapshotName !== undefined &&
            input.relationalDatabaseSnapshotName !== null && {
            relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
        }),
        ...(input.restoreTime !== undefined &&
            input.restoreTime !== null && { restoreTime: Math.round(input.restoreTime.getTime() / 1000) }),
        ...(input.sourceRelationalDatabaseName !== undefined &&
            input.sourceRelationalDatabaseName !== null && {
            sourceRelationalDatabaseName: input.sourceRelationalDatabaseName,
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.useLatestRestorableTime !== undefined &&
            input.useLatestRestorableTime !== null && { useLatestRestorableTime: input.useLatestRestorableTime }),
    };
};
const serializeAws_json1_1CreateRelationalDatabaseRequest = (input, context) => {
    return {
        ...(input.availabilityZone !== undefined &&
            input.availabilityZone !== null && { availabilityZone: input.availabilityZone }),
        ...(input.masterDatabaseName !== undefined &&
            input.masterDatabaseName !== null && { masterDatabaseName: input.masterDatabaseName }),
        ...(input.masterUserPassword !== undefined &&
            input.masterUserPassword !== null && { masterUserPassword: input.masterUserPassword }),
        ...(input.masterUsername !== undefined &&
            input.masterUsername !== null && { masterUsername: input.masterUsername }),
        ...(input.preferredBackupWindow !== undefined &&
            input.preferredBackupWindow !== null && { preferredBackupWindow: input.preferredBackupWindow }),
        ...(input.preferredMaintenanceWindow !== undefined &&
            input.preferredMaintenanceWindow !== null && { preferredMaintenanceWindow: input.preferredMaintenanceWindow }),
        ...(input.publiclyAccessible !== undefined &&
            input.publiclyAccessible !== null && { publiclyAccessible: input.publiclyAccessible }),
        ...(input.relationalDatabaseBlueprintId !== undefined &&
            input.relationalDatabaseBlueprintId !== null && {
            relationalDatabaseBlueprintId: input.relationalDatabaseBlueprintId,
        }),
        ...(input.relationalDatabaseBundleId !== undefined &&
            input.relationalDatabaseBundleId !== null && { relationalDatabaseBundleId: input.relationalDatabaseBundleId }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateRelationalDatabaseSnapshotRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.relationalDatabaseSnapshotName !== undefined &&
            input.relationalDatabaseSnapshotName !== null && {
            relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1DeleteAlarmRequest = (input, context) => {
    return {
        ...(input.alarmName !== undefined && input.alarmName !== null && { alarmName: input.alarmName }),
    };
};
const serializeAws_json1_1DeleteAutoSnapshotRequest = (input, context) => {
    return {
        ...(input.date !== undefined && input.date !== null && { date: input.date }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
    };
};
const serializeAws_json1_1DeleteCertificateRequest = (input, context) => {
    return {
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
    };
};
const serializeAws_json1_1DeleteContactMethodRequest = (input, context) => {
    return {
        ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    };
};
const serializeAws_json1_1DeleteContainerImageRequest = (input, context) => {
    return {
        ...(input.image !== undefined && input.image !== null && { image: input.image }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1DeleteContainerServiceRequest = (input, context) => {
    return {
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1DeleteDiskRequest = (input, context) => {
    return {
        ...(input.diskName !== undefined && input.diskName !== null && { diskName: input.diskName }),
        ...(input.forceDeleteAddOns !== undefined &&
            input.forceDeleteAddOns !== null && { forceDeleteAddOns: input.forceDeleteAddOns }),
    };
};
const serializeAws_json1_1DeleteDiskSnapshotRequest = (input, context) => {
    return {
        ...(input.diskSnapshotName !== undefined &&
            input.diskSnapshotName !== null && { diskSnapshotName: input.diskSnapshotName }),
    };
};
const serializeAws_json1_1DeleteDistributionRequest = (input, context) => {
    return {
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
    };
};
const serializeAws_json1_1DeleteDomainEntryRequest = (input, context) => {
    return {
        ...(input.domainEntry !== undefined &&
            input.domainEntry !== null && { domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context) }),
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    };
};
const serializeAws_json1_1DeleteDomainRequest = (input, context) => {
    return {
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    };
};
const serializeAws_json1_1DeleteInstanceRequest = (input, context) => {
    return {
        ...(input.forceDeleteAddOns !== undefined &&
            input.forceDeleteAddOns !== null && { forceDeleteAddOns: input.forceDeleteAddOns }),
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1DeleteInstanceSnapshotRequest = (input, context) => {
    return {
        ...(input.instanceSnapshotName !== undefined &&
            input.instanceSnapshotName !== null && { instanceSnapshotName: input.instanceSnapshotName }),
    };
};
const serializeAws_json1_1DeleteKeyPairRequest = (input, context) => {
    return {
        ...(input.keyPairName !== undefined && input.keyPairName !== null && { keyPairName: input.keyPairName }),
    };
};
const serializeAws_json1_1DeleteKnownHostKeysRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1DeleteLoadBalancerRequest = (input, context) => {
    return {
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1DeleteLoadBalancerTlsCertificateRequest = (input, context) => {
    return {
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1DeleteRelationalDatabaseRequest = (input, context) => {
    return {
        ...(input.finalRelationalDatabaseSnapshotName !== undefined &&
            input.finalRelationalDatabaseSnapshotName !== null && {
            finalRelationalDatabaseSnapshotName: input.finalRelationalDatabaseSnapshotName,
        }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.skipFinalSnapshot !== undefined &&
            input.skipFinalSnapshot !== null && { skipFinalSnapshot: input.skipFinalSnapshot }),
    };
};
const serializeAws_json1_1DeleteRelationalDatabaseSnapshotRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseSnapshotName !== undefined &&
            input.relationalDatabaseSnapshotName !== null && {
            relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
        }),
    };
};
const serializeAws_json1_1DetachCertificateFromDistributionRequest = (input, context) => {
    return {
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
    };
};
const serializeAws_json1_1DetachDiskRequest = (input, context) => {
    return {
        ...(input.diskName !== undefined && input.diskName !== null && { diskName: input.diskName }),
    };
};
const serializeAws_json1_1DetachInstancesFromLoadBalancerRequest = (input, context) => {
    return {
        ...(input.instanceNames !== undefined &&
            input.instanceNames !== null && {
            instanceNames: serializeAws_json1_1ResourceNameList(input.instanceNames, context),
        }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1DetachStaticIpRequest = (input, context) => {
    return {
        ...(input.staticIpName !== undefined && input.staticIpName !== null && { staticIpName: input.staticIpName }),
    };
};
const serializeAws_json1_1DisableAddOnRequest = (input, context) => {
    return {
        ...(input.addOnType !== undefined && input.addOnType !== null && { addOnType: input.addOnType }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
    };
};
const serializeAws_json1_1DiskMap = (input, context) => {
    return {
        ...(input.newDiskName !== undefined && input.newDiskName !== null && { newDiskName: input.newDiskName }),
        ...(input.originalDiskPath !== undefined &&
            input.originalDiskPath !== null && { originalDiskPath: input.originalDiskPath }),
    };
};
const serializeAws_json1_1DiskMapList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DiskMap(entry, context);
    });
};
const serializeAws_json1_1DomainEntry = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.isAlias !== undefined && input.isAlias !== null && { isAlias: input.isAlias }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.options !== undefined &&
            input.options !== null && { options: serializeAws_json1_1DomainEntryOptions(input.options, context) }),
        ...(input.target !== undefined && input.target !== null && { target: input.target }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1DomainEntryOptions = (input, context) => {
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
const serializeAws_json1_1DomainNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DownloadDefaultKeyPairRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1EnableAddOnRequest = (input, context) => {
    return {
        ...(input.addOnRequest !== undefined &&
            input.addOnRequest !== null && { addOnRequest: serializeAws_json1_1AddOnRequest(input.addOnRequest, context) }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
    };
};
const serializeAws_json1_1EndpointRequest = (input, context) => {
    return {
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
        ...(input.healthCheck !== undefined &&
            input.healthCheck !== null && {
            healthCheck: serializeAws_json1_1ContainerServiceHealthCheckConfig(input.healthCheck, context),
        }),
    };
};
const serializeAws_json1_1Environment = (input, context) => {
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
const serializeAws_json1_1ExportSnapshotRequest = (input, context) => {
    return {
        ...(input.sourceSnapshotName !== undefined &&
            input.sourceSnapshotName !== null && { sourceSnapshotName: input.sourceSnapshotName }),
    };
};
const serializeAws_json1_1GetActiveNamesRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetAlarmsRequest = (input, context) => {
    return {
        ...(input.alarmName !== undefined && input.alarmName !== null && { alarmName: input.alarmName }),
        ...(input.monitoredResourceName !== undefined &&
            input.monitoredResourceName !== null && { monitoredResourceName: input.monitoredResourceName }),
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetAutoSnapshotsRequest = (input, context) => {
    return {
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
    };
};
const serializeAws_json1_1GetBlueprintsRequest = (input, context) => {
    return {
        ...(input.includeInactive !== undefined &&
            input.includeInactive !== null && { includeInactive: input.includeInactive }),
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetBundlesRequest = (input, context) => {
    return {
        ...(input.includeInactive !== undefined &&
            input.includeInactive !== null && { includeInactive: input.includeInactive }),
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetCertificatesRequest = (input, context) => {
    return {
        ...(input.certificateName !== undefined &&
            input.certificateName !== null && { certificateName: input.certificateName }),
        ...(input.certificateStatuses !== undefined &&
            input.certificateStatuses !== null && {
            certificateStatuses: serializeAws_json1_1CertificateStatusList(input.certificateStatuses, context),
        }),
        ...(input.includeCertificateDetails !== undefined &&
            input.includeCertificateDetails !== null && { includeCertificateDetails: input.includeCertificateDetails }),
    };
};
const serializeAws_json1_1GetCloudFormationStackRecordsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetContactMethodsRequest = (input, context) => {
    return {
        ...(input.protocols !== undefined &&
            input.protocols !== null && { protocols: serializeAws_json1_1ContactProtocolsList(input.protocols, context) }),
    };
};
const serializeAws_json1_1GetContainerAPIMetadataRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetContainerImagesRequest = (input, context) => {
    return {
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1GetContainerLogRequest = (input, context) => {
    return {
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.filterPattern !== undefined && input.filterPattern !== null && { filterPattern: input.filterPattern }),
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1GetContainerServiceDeploymentsRequest = (input, context) => {
    return {
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1GetContainerServiceMetricDataRequest = (input, context) => {
    return {
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.period !== undefined && input.period !== null && { period: input.period }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.statistics !== undefined &&
            input.statistics !== null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
    };
};
const serializeAws_json1_1GetContainerServicePowersRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetContainerServicesRequest = (input, context) => {
    return {
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1GetDiskRequest = (input, context) => {
    return {
        ...(input.diskName !== undefined && input.diskName !== null && { diskName: input.diskName }),
    };
};
const serializeAws_json1_1GetDiskSnapshotRequest = (input, context) => {
    return {
        ...(input.diskSnapshotName !== undefined &&
            input.diskSnapshotName !== null && { diskSnapshotName: input.diskSnapshotName }),
    };
};
const serializeAws_json1_1GetDiskSnapshotsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetDisksRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetDistributionBundlesRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetDistributionLatestCacheResetRequest = (input, context) => {
    return {
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
    };
};
const serializeAws_json1_1GetDistributionMetricDataRequest = (input, context) => {
    return {
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.period !== undefined && input.period !== null && { period: input.period }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.statistics !== undefined &&
            input.statistics !== null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
        ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    };
};
const serializeAws_json1_1GetDistributionsRequest = (input, context) => {
    return {
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetDomainRequest = (input, context) => {
    return {
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    };
};
const serializeAws_json1_1GetDomainsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetExportSnapshotRecordsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetInstanceAccessDetailsRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    };
};
const serializeAws_json1_1GetInstanceMetricDataRequest = (input, context) => {
    return {
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.period !== undefined && input.period !== null && { period: input.period }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.statistics !== undefined &&
            input.statistics !== null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
        ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    };
};
const serializeAws_json1_1GetInstancePortStatesRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1GetInstanceRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1GetInstanceSnapshotRequest = (input, context) => {
    return {
        ...(input.instanceSnapshotName !== undefined &&
            input.instanceSnapshotName !== null && { instanceSnapshotName: input.instanceSnapshotName }),
    };
};
const serializeAws_json1_1GetInstanceSnapshotsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetInstancesRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetInstanceStateRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1GetKeyPairRequest = (input, context) => {
    return {
        ...(input.keyPairName !== undefined && input.keyPairName !== null && { keyPairName: input.keyPairName }),
    };
};
const serializeAws_json1_1GetKeyPairsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetLoadBalancerMetricDataRequest = (input, context) => {
    return {
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.period !== undefined && input.period !== null && { period: input.period }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.statistics !== undefined &&
            input.statistics !== null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
        ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    };
};
const serializeAws_json1_1GetLoadBalancerRequest = (input, context) => {
    return {
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1GetLoadBalancersRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetLoadBalancerTlsCertificatesRequest = (input, context) => {
    return {
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1GetOperationRequest = (input, context) => {
    return {
        ...(input.operationId !== undefined && input.operationId !== null && { operationId: input.operationId }),
    };
};
const serializeAws_json1_1GetOperationsForResourceRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
    };
};
const serializeAws_json1_1GetOperationsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetRegionsRequest = (input, context) => {
    return {
        ...(input.includeAvailabilityZones !== undefined &&
            input.includeAvailabilityZones !== null && { includeAvailabilityZones: input.includeAvailabilityZones }),
        ...(input.includeRelationalDatabaseAvailabilityZones !== undefined &&
            input.includeRelationalDatabaseAvailabilityZones !== null && {
            includeRelationalDatabaseAvailabilityZones: input.includeRelationalDatabaseAvailabilityZones,
        }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseBlueprintsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseBundlesRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseEventsRequest = (input, context) => {
    return {
        ...(input.durationInMinutes !== undefined &&
            input.durationInMinutes !== null && { durationInMinutes: input.durationInMinutes }),
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseLogEventsRequest = (input, context) => {
    return {
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.logStreamName !== undefined && input.logStreamName !== null && { logStreamName: input.logStreamName }),
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.startFromHead !== undefined && input.startFromHead !== null && { startFromHead: input.startFromHead }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseLogStreamsRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordRequest = (input, context) => {
    return {
        ...(input.passwordVersion !== undefined &&
            input.passwordVersion !== null && { passwordVersion: input.passwordVersion }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseMetricDataRequest = (input, context) => {
    return {
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.period !== undefined && input.period !== null && { period: input.period }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.statistics !== undefined &&
            input.statistics !== null && { statistics: serializeAws_json1_1MetricStatisticList(input.statistics, context) }),
        ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseParametersRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseSnapshotRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseSnapshotName !== undefined &&
            input.relationalDatabaseSnapshotName !== null && {
            relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
        }),
    };
};
const serializeAws_json1_1GetRelationalDatabaseSnapshotsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetRelationalDatabasesRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1GetStaticIpRequest = (input, context) => {
    return {
        ...(input.staticIpName !== undefined && input.staticIpName !== null && { staticIpName: input.staticIpName }),
    };
};
const serializeAws_json1_1GetStaticIpsRequest = (input, context) => {
    return {
        ...(input.pageToken !== undefined && input.pageToken !== null && { pageToken: input.pageToken }),
    };
};
const serializeAws_json1_1HeaderForwardList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1HeaderObject = (input, context) => {
    return {
        ...(input.headersAllowList !== undefined &&
            input.headersAllowList !== null && {
            headersAllowList: serializeAws_json1_1HeaderForwardList(input.headersAllowList, context),
        }),
        ...(input.option !== undefined && input.option !== null && { option: input.option }),
    };
};
const serializeAws_json1_1ImportKeyPairRequest = (input, context) => {
    return {
        ...(input.keyPairName !== undefined && input.keyPairName !== null && { keyPairName: input.keyPairName }),
        ...(input.publicKeyBase64 !== undefined &&
            input.publicKeyBase64 !== null && { publicKeyBase64: input.publicKeyBase64 }),
    };
};
const serializeAws_json1_1InputOrigin = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.protocolPolicy !== undefined &&
            input.protocolPolicy !== null && { protocolPolicy: input.protocolPolicy }),
        ...(input.regionName !== undefined && input.regionName !== null && { regionName: input.regionName }),
    };
};
const serializeAws_json1_1InstanceEntry = (input, context) => {
    return {
        ...(input.availabilityZone !== undefined &&
            input.availabilityZone !== null && { availabilityZone: input.availabilityZone }),
        ...(input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }),
        ...(input.portInfoSource !== undefined &&
            input.portInfoSource !== null && { portInfoSource: input.portInfoSource }),
        ...(input.sourceName !== undefined && input.sourceName !== null && { sourceName: input.sourceName }),
        ...(input.userData !== undefined && input.userData !== null && { userData: input.userData }),
    };
};
const serializeAws_json1_1InstanceEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceEntry(entry, context);
    });
};
const serializeAws_json1_1IsVpcPeeredRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1MetricStatisticList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1NotificationTriggerList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OpenInstancePublicPortsRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.portInfo !== undefined &&
            input.portInfo !== null && { portInfo: serializeAws_json1_1PortInfo(input.portInfo, context) }),
    };
};
const serializeAws_json1_1PeerVpcRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1PortInfo = (input, context) => {
    return {
        ...(input.cidrListAliases !== undefined &&
            input.cidrListAliases !== null && {
            cidrListAliases: serializeAws_json1_1StringList(input.cidrListAliases, context),
        }),
        ...(input.cidrs !== undefined &&
            input.cidrs !== null && { cidrs: serializeAws_json1_1StringList(input.cidrs, context) }),
        ...(input.fromPort !== undefined && input.fromPort !== null && { fromPort: input.fromPort }),
        ...(input.ipv6Cidrs !== undefined &&
            input.ipv6Cidrs !== null && { ipv6Cidrs: serializeAws_json1_1StringList(input.ipv6Cidrs, context) }),
        ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
        ...(input.toPort !== undefined && input.toPort !== null && { toPort: input.toPort }),
    };
};
const serializeAws_json1_1PortInfoList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PortInfo(entry, context);
    });
};
const serializeAws_json1_1PortMap = (input, context) => {
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
const serializeAws_json1_1PutAlarmRequest = (input, context) => {
    return {
        ...(input.alarmName !== undefined && input.alarmName !== null && { alarmName: input.alarmName }),
        ...(input.comparisonOperator !== undefined &&
            input.comparisonOperator !== null && { comparisonOperator: input.comparisonOperator }),
        ...(input.contactProtocols !== undefined &&
            input.contactProtocols !== null && {
            contactProtocols: serializeAws_json1_1ContactProtocolsList(input.contactProtocols, context),
        }),
        ...(input.datapointsToAlarm !== undefined &&
            input.datapointsToAlarm !== null && { datapointsToAlarm: input.datapointsToAlarm }),
        ...(input.evaluationPeriods !== undefined &&
            input.evaluationPeriods !== null && { evaluationPeriods: input.evaluationPeriods }),
        ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
        ...(input.monitoredResourceName !== undefined &&
            input.monitoredResourceName !== null && { monitoredResourceName: input.monitoredResourceName }),
        ...(input.notificationEnabled !== undefined &&
            input.notificationEnabled !== null && { notificationEnabled: input.notificationEnabled }),
        ...(input.notificationTriggers !== undefined &&
            input.notificationTriggers !== null && {
            notificationTriggers: serializeAws_json1_1NotificationTriggerList(input.notificationTriggers, context),
        }),
        ...(input.threshold !== undefined && input.threshold !== null && { threshold: input.threshold }),
        ...(input.treatMissingData !== undefined &&
            input.treatMissingData !== null && { treatMissingData: input.treatMissingData }),
    };
};
const serializeAws_json1_1PutInstancePublicPortsRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
        ...(input.portInfos !== undefined &&
            input.portInfos !== null && { portInfos: serializeAws_json1_1PortInfoList(input.portInfos, context) }),
    };
};
const serializeAws_json1_1QueryStringObject = (input, context) => {
    return {
        ...(input.option !== undefined && input.option !== null && { option: input.option }),
        ...(input.queryStringsAllowList !== undefined &&
            input.queryStringsAllowList !== null && {
            queryStringsAllowList: serializeAws_json1_1StringList(input.queryStringsAllowList, context),
        }),
    };
};
const serializeAws_json1_1RebootInstanceRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1RebootRelationalDatabaseRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1RegisterContainerImageRequest = (input, context) => {
    return {
        ...(input.digest !== undefined && input.digest !== null && { digest: input.digest }),
        ...(input.label !== undefined && input.label !== null && { label: input.label }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1RelationalDatabaseParameter = (input, context) => {
    return {
        ...(input.allowedValues !== undefined && input.allowedValues !== null && { allowedValues: input.allowedValues }),
        ...(input.applyMethod !== undefined && input.applyMethod !== null && { applyMethod: input.applyMethod }),
        ...(input.applyType !== undefined && input.applyType !== null && { applyType: input.applyType }),
        ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.isModifiable !== undefined && input.isModifiable !== null && { isModifiable: input.isModifiable }),
        ...(input.parameterName !== undefined && input.parameterName !== null && { parameterName: input.parameterName }),
        ...(input.parameterValue !== undefined &&
            input.parameterValue !== null && { parameterValue: input.parameterValue }),
    };
};
const serializeAws_json1_1RelationalDatabaseParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RelationalDatabaseParameter(entry, context);
    });
};
const serializeAws_json1_1ReleaseStaticIpRequest = (input, context) => {
    return {
        ...(input.staticIpName !== undefined && input.staticIpName !== null && { staticIpName: input.staticIpName }),
    };
};
const serializeAws_json1_1ResetDistributionCacheRequest = (input, context) => {
    return {
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
    };
};
const serializeAws_json1_1ResourceNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SendContactMethodVerificationRequest = (input, context) => {
    return {
        ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    };
};
const serializeAws_json1_1SetIpAddressTypeRequest = (input, context) => {
    return {
        ...(input.ipAddressType !== undefined && input.ipAddressType !== null && { ipAddressType: input.ipAddressType }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    };
};
const serializeAws_json1_1StartInstanceRequest = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1StartRelationalDatabaseRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1StopInstanceRequest = (input, context) => {
    return {
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1StopRelationalDatabaseRequest = (input, context) => {
    return {
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.relationalDatabaseSnapshotName !== undefined &&
            input.relationalDatabaseSnapshotName !== null && {
            relationalDatabaseSnapshotName: input.relationalDatabaseSnapshotName,
        }),
    };
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SubjectAlternativeNameList = (input, context) => {
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
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
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
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1TestAlarmRequest = (input, context) => {
    return {
        ...(input.alarmName !== undefined && input.alarmName !== null && { alarmName: input.alarmName }),
        ...(input.state !== undefined && input.state !== null && { state: input.state }),
    };
};
const serializeAws_json1_1UnpeerVpcRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.resourceName !== undefined && input.resourceName !== null && { resourceName: input.resourceName }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateContainerServiceRequest = (input, context) => {
    return {
        ...(input.isDisabled !== undefined && input.isDisabled !== null && { isDisabled: input.isDisabled }),
        ...(input.power !== undefined && input.power !== null && { power: input.power }),
        ...(input.publicDomainNames !== undefined &&
            input.publicDomainNames !== null && {
            publicDomainNames: serializeAws_json1_1ContainerServicePublicDomains(input.publicDomainNames, context),
        }),
        ...(input.scale !== undefined && input.scale !== null && { scale: input.scale }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1UpdateDistributionBundleRequest = (input, context) => {
    return {
        ...(input.bundleId !== undefined && input.bundleId !== null && { bundleId: input.bundleId }),
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
    };
};
const serializeAws_json1_1UpdateDistributionRequest = (input, context) => {
    return {
        ...(input.cacheBehaviorSettings !== undefined &&
            input.cacheBehaviorSettings !== null && {
            cacheBehaviorSettings: serializeAws_json1_1CacheSettings(input.cacheBehaviorSettings, context),
        }),
        ...(input.cacheBehaviors !== undefined &&
            input.cacheBehaviors !== null && {
            cacheBehaviors: serializeAws_json1_1CacheBehaviorList(input.cacheBehaviors, context),
        }),
        ...(input.defaultCacheBehavior !== undefined &&
            input.defaultCacheBehavior !== null && {
            defaultCacheBehavior: serializeAws_json1_1CacheBehavior(input.defaultCacheBehavior, context),
        }),
        ...(input.distributionName !== undefined &&
            input.distributionName !== null && { distributionName: input.distributionName }),
        ...(input.isEnabled !== undefined && input.isEnabled !== null && { isEnabled: input.isEnabled }),
        ...(input.origin !== undefined &&
            input.origin !== null && { origin: serializeAws_json1_1InputOrigin(input.origin, context) }),
    };
};
const serializeAws_json1_1UpdateDomainEntryRequest = (input, context) => {
    return {
        ...(input.domainEntry !== undefined &&
            input.domainEntry !== null && { domainEntry: serializeAws_json1_1DomainEntry(input.domainEntry, context) }),
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    };
};
const serializeAws_json1_1UpdateLoadBalancerAttributeRequest = (input, context) => {
    return {
        ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
        ...(input.attributeValue !== undefined &&
            input.attributeValue !== null && { attributeValue: input.attributeValue }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
    };
};
const serializeAws_json1_1UpdateRelationalDatabaseParametersRequest = (input, context) => {
    return {
        ...(input.parameters !== undefined &&
            input.parameters !== null && {
            parameters: serializeAws_json1_1RelationalDatabaseParameterList(input.parameters, context),
        }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
    };
};
const serializeAws_json1_1UpdateRelationalDatabaseRequest = (input, context) => {
    return {
        ...(input.applyImmediately !== undefined &&
            input.applyImmediately !== null && { applyImmediately: input.applyImmediately }),
        ...(input.caCertificateIdentifier !== undefined &&
            input.caCertificateIdentifier !== null && { caCertificateIdentifier: input.caCertificateIdentifier }),
        ...(input.disableBackupRetention !== undefined &&
            input.disableBackupRetention !== null && { disableBackupRetention: input.disableBackupRetention }),
        ...(input.enableBackupRetention !== undefined &&
            input.enableBackupRetention !== null && { enableBackupRetention: input.enableBackupRetention }),
        ...(input.masterUserPassword !== undefined &&
            input.masterUserPassword !== null && { masterUserPassword: input.masterUserPassword }),
        ...(input.preferredBackupWindow !== undefined &&
            input.preferredBackupWindow !== null && { preferredBackupWindow: input.preferredBackupWindow }),
        ...(input.preferredMaintenanceWindow !== undefined &&
            input.preferredMaintenanceWindow !== null && { preferredMaintenanceWindow: input.preferredMaintenanceWindow }),
        ...(input.publiclyAccessible !== undefined &&
            input.publiclyAccessible !== null && { publiclyAccessible: input.publiclyAccessible }),
        ...(input.relationalDatabaseName !== undefined &&
            input.relationalDatabaseName !== null && { relationalDatabaseName: input.relationalDatabaseName }),
        ...(input.rotateMasterUserPassword !== undefined &&
            input.rotateMasterUserPassword !== null && { rotateMasterUserPassword: input.rotateMasterUserPassword }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
    };
};
const deserializeAws_json1_1AccountSetupInProgressException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
    };
};
const deserializeAws_json1_1AddOn = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        nextSnapshotTimeOfDay: output.nextSnapshotTimeOfDay !== undefined && output.nextSnapshotTimeOfDay !== null
            ? output.nextSnapshotTimeOfDay
            : undefined,
        snapshotTimeOfDay: output.snapshotTimeOfDay !== undefined && output.snapshotTimeOfDay !== null
            ? output.snapshotTimeOfDay
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1AddOnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AddOn(entry, context);
    });
};
const deserializeAws_json1_1Alarm = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        comparisonOperator: output.comparisonOperator !== undefined && output.comparisonOperator !== null
            ? output.comparisonOperator
            : undefined,
        contactProtocols: output.contactProtocols !== undefined && output.contactProtocols !== null
            ? deserializeAws_json1_1ContactProtocolsList(output.contactProtocols, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        datapointsToAlarm: output.datapointsToAlarm !== undefined && output.datapointsToAlarm !== null
            ? output.datapointsToAlarm
            : undefined,
        evaluationPeriods: output.evaluationPeriods !== undefined && output.evaluationPeriods !== null
            ? output.evaluationPeriods
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
        monitoredResourceInfo: output.monitoredResourceInfo !== undefined && output.monitoredResourceInfo !== null
            ? deserializeAws_json1_1MonitoredResourceInfo(output.monitoredResourceInfo, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        notificationEnabled: output.notificationEnabled !== undefined && output.notificationEnabled !== null
            ? output.notificationEnabled
            : undefined,
        notificationTriggers: output.notificationTriggers !== undefined && output.notificationTriggers !== null
            ? deserializeAws_json1_1NotificationTriggerList(output.notificationTriggers, context)
            : undefined,
        period: output.period !== undefined && output.period !== null ? output.period : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statistic: output.statistic !== undefined && output.statistic !== null ? output.statistic : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        threshold: output.threshold !== undefined && output.threshold !== null ? output.threshold : undefined,
        treatMissingData: output.treatMissingData !== undefined && output.treatMissingData !== null ? output.treatMissingData : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    };
};
const deserializeAws_json1_1AlarmsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Alarm(entry, context);
    });
};
const deserializeAws_json1_1AllocateStaticIpResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttachCertificateToDistributionResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttachDiskResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttachedDisk = (output, context) => {
    return {
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
    };
};
const deserializeAws_json1_1AttachedDiskList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttachedDisk(entry, context);
    });
};
const deserializeAws_json1_1AttachInstancesToLoadBalancerResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttachLoadBalancerTlsCertificateResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttachStaticIpResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1AutoSnapshotDetails = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        date: output.date !== undefined && output.date !== null ? output.date : undefined,
        fromAttachedDisks: output.fromAttachedDisks !== undefined && output.fromAttachedDisks !== null
            ? deserializeAws_json1_1AttachedDiskList(output.fromAttachedDisks, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1AutoSnapshotDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutoSnapshotDetails(entry, context);
    });
};
const deserializeAws_json1_1AvailabilityZone = (output, context) => {
    return {
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        zoneName: output.zoneName !== undefined && output.zoneName !== null ? output.zoneName : undefined,
    };
};
const deserializeAws_json1_1AvailabilityZoneList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AvailabilityZone(entry, context);
    });
};
const deserializeAws_json1_1Blueprint = (output, context) => {
    return {
        blueprintId: output.blueprintId !== undefined && output.blueprintId !== null ? output.blueprintId : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        group: output.group !== undefined && output.group !== null ? output.group : undefined,
        isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
        licenseUrl: output.licenseUrl !== undefined && output.licenseUrl !== null ? output.licenseUrl : undefined,
        minPower: output.minPower !== undefined && output.minPower !== null ? output.minPower : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        productUrl: output.productUrl !== undefined && output.productUrl !== null ? output.productUrl : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
        versionCode: output.versionCode !== undefined && output.versionCode !== null ? output.versionCode : undefined,
    };
};
const deserializeAws_json1_1BlueprintList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Blueprint(entry, context);
    });
};
const deserializeAws_json1_1Bundle = (output, context) => {
    return {
        bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
        cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
        diskSizeInGb: output.diskSizeInGb !== undefined && output.diskSizeInGb !== null ? output.diskSizeInGb : undefined,
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        power: output.power !== undefined && output.power !== null ? output.power : undefined,
        price: output.price !== undefined && output.price !== null ? output.price : undefined,
        ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
        supportedPlatforms: output.supportedPlatforms !== undefined && output.supportedPlatforms !== null
            ? deserializeAws_json1_1InstancePlatformList(output.supportedPlatforms, context)
            : undefined,
        transferPerMonthInGb: output.transferPerMonthInGb !== undefined && output.transferPerMonthInGb !== null
            ? output.transferPerMonthInGb
            : undefined,
    };
};
const deserializeAws_json1_1BundleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Bundle(entry, context);
    });
};
const deserializeAws_json1_1CacheBehavior = (output, context) => {
    return {
        behavior: output.behavior !== undefined && output.behavior !== null ? output.behavior : undefined,
    };
};
const deserializeAws_json1_1CacheBehaviorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CacheBehaviorPerPath(entry, context);
    });
};
const deserializeAws_json1_1CacheBehaviorPerPath = (output, context) => {
    return {
        behavior: output.behavior !== undefined && output.behavior !== null ? output.behavior : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
    };
};
const deserializeAws_json1_1CacheSettings = (output, context) => {
    return {
        allowedHTTPMethods: output.allowedHTTPMethods !== undefined && output.allowedHTTPMethods !== null
            ? output.allowedHTTPMethods
            : undefined,
        cachedHTTPMethods: output.cachedHTTPMethods !== undefined && output.cachedHTTPMethods !== null
            ? output.cachedHTTPMethods
            : undefined,
        defaultTTL: output.defaultTTL !== undefined && output.defaultTTL !== null ? output.defaultTTL : undefined,
        forwardedCookies: output.forwardedCookies !== undefined && output.forwardedCookies !== null
            ? deserializeAws_json1_1CookieObject(output.forwardedCookies, context)
            : undefined,
        forwardedHeaders: output.forwardedHeaders !== undefined && output.forwardedHeaders !== null
            ? deserializeAws_json1_1HeaderObject(output.forwardedHeaders, context)
            : undefined,
        forwardedQueryStrings: output.forwardedQueryStrings !== undefined && output.forwardedQueryStrings !== null
            ? deserializeAws_json1_1QueryStringObject(output.forwardedQueryStrings, context)
            : undefined,
        maximumTTL: output.maximumTTL !== undefined && output.maximumTTL !== null ? output.maximumTTL : undefined,
        minimumTTL: output.minimumTTL !== undefined && output.minimumTTL !== null ? output.minimumTTL : undefined,
    };
};
const deserializeAws_json1_1Certificate = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        domainValidationRecords: output.domainValidationRecords !== undefined && output.domainValidationRecords !== null
            ? deserializeAws_json1_1DomainValidationRecordList(output.domainValidationRecords, context)
            : undefined,
        eligibleToRenew: output.eligibleToRenew !== undefined && output.eligibleToRenew !== null ? output.eligibleToRenew : undefined,
        inUseResourceCount: output.inUseResourceCount !== undefined && output.inUseResourceCount !== null
            ? output.inUseResourceCount
            : undefined,
        issuedAt: output.issuedAt !== undefined && output.issuedAt !== null
            ? new Date(Math.round(output.issuedAt * 1000))
            : undefined,
        issuerCA: output.issuerCA !== undefined && output.issuerCA !== null ? output.issuerCA : undefined,
        keyAlgorithm: output.keyAlgorithm !== undefined && output.keyAlgorithm !== null ? output.keyAlgorithm : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        notAfter: output.notAfter !== undefined && output.notAfter !== null
            ? new Date(Math.round(output.notAfter * 1000))
            : undefined,
        notBefore: output.notBefore !== undefined && output.notBefore !== null
            ? new Date(Math.round(output.notBefore * 1000))
            : undefined,
        renewalSummary: output.renewalSummary !== undefined && output.renewalSummary !== null
            ? deserializeAws_json1_1RenewalSummary(output.renewalSummary, context)
            : undefined,
        requestFailureReason: output.requestFailureReason !== undefined && output.requestFailureReason !== null
            ? output.requestFailureReason
            : undefined,
        revocationReason: output.revocationReason !== undefined && output.revocationReason !== null ? output.revocationReason : undefined,
        revokedAt: output.revokedAt !== undefined && output.revokedAt !== null
            ? new Date(Math.round(output.revokedAt * 1000))
            : undefined,
        serialNumber: output.serialNumber !== undefined && output.serialNumber !== null ? output.serialNumber : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        subjectAlternativeNames: output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
            ? deserializeAws_json1_1SubjectAlternativeNameList(output.subjectAlternativeNames, context)
            : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1CertificateSummary = (output, context) => {
    return {
        certificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
        certificateDetail: output.certificateDetail !== undefined && output.certificateDetail !== null
            ? deserializeAws_json1_1Certificate(output.certificateDetail, context)
            : undefined,
        certificateName: output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1CertificateSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CertificateSummary(entry, context);
    });
};
const deserializeAws_json1_1CloseInstancePublicPortsResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1CloudFormationStackRecord = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        destinationInfo: output.destinationInfo !== undefined && output.destinationInfo !== null
            ? deserializeAws_json1_1DestinationInfo(output.destinationInfo, context)
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        sourceInfo: output.sourceInfo !== undefined && output.sourceInfo !== null
            ? deserializeAws_json1_1CloudFormationStackRecordSourceInfoList(output.sourceInfo, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_json1_1CloudFormationStackRecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CloudFormationStackRecord(entry, context);
    });
};
const deserializeAws_json1_1CloudFormationStackRecordSourceInfo = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1CloudFormationStackRecordSourceInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CloudFormationStackRecordSourceInfo(entry, context);
    });
};
const deserializeAws_json1_1ContactMethod = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        contactEndpoint: output.contactEndpoint !== undefined && output.contactEndpoint !== null ? output.contactEndpoint : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    };
};
const deserializeAws_json1_1ContactMethodsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContactMethod(entry, context);
    });
};
const deserializeAws_json1_1ContactProtocolsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Container = (output, context) => {
    return {
        command: output.command !== undefined && output.command !== null
            ? deserializeAws_json1_1StringList(output.command, context)
            : undefined,
        environment: output.environment !== undefined && output.environment !== null
            ? deserializeAws_json1_1Environment(output.environment, context)
            : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
        ports: output.ports !== undefined && output.ports !== null
            ? deserializeAws_json1_1PortMap(output.ports, context)
            : undefined,
    };
};
const deserializeAws_json1_1ContainerImage = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        digest: output.digest !== undefined && output.digest !== null ? output.digest : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
    };
};
const deserializeAws_json1_1ContainerImageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerImage(entry, context);
    });
};
const deserializeAws_json1_1ContainerMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1Container(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ContainerService = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        containerServiceName: output.containerServiceName !== undefined && output.containerServiceName !== null
            ? output.containerServiceName
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        currentDeployment: output.currentDeployment !== undefined && output.currentDeployment !== null
            ? deserializeAws_json1_1ContainerServiceDeployment(output.currentDeployment, context)
            : undefined,
        isDisabled: output.isDisabled !== undefined && output.isDisabled !== null ? output.isDisabled : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        nextDeployment: output.nextDeployment !== undefined && output.nextDeployment !== null
            ? deserializeAws_json1_1ContainerServiceDeployment(output.nextDeployment, context)
            : undefined,
        power: output.power !== undefined && output.power !== null ? output.power : undefined,
        powerId: output.powerId !== undefined && output.powerId !== null ? output.powerId : undefined,
        principalArn: output.principalArn !== undefined && output.principalArn !== null ? output.principalArn : undefined,
        privateDomainName: output.privateDomainName !== undefined && output.privateDomainName !== null
            ? output.privateDomainName
            : undefined,
        publicDomainNames: output.publicDomainNames !== undefined && output.publicDomainNames !== null
            ? deserializeAws_json1_1ContainerServicePublicDomains(output.publicDomainNames, context)
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        scale: output.scale !== undefined && output.scale !== null ? output.scale : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        stateDetail: output.stateDetail !== undefined && output.stateDetail !== null
            ? deserializeAws_json1_1ContainerServiceStateDetail(output.stateDetail, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_json1_1ContainerServiceDeployment = (output, context) => {
    return {
        containers: output.containers !== undefined && output.containers !== null
            ? deserializeAws_json1_1ContainerMap(output.containers, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        publicEndpoint: output.publicEndpoint !== undefined && output.publicEndpoint !== null
            ? deserializeAws_json1_1ContainerServiceEndpoint(output.publicEndpoint, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_1ContainerServiceDeploymentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerServiceDeployment(entry, context);
    });
};
const deserializeAws_json1_1ContainerServiceEndpoint = (output, context) => {
    return {
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        healthCheck: output.healthCheck !== undefined && output.healthCheck !== null
            ? deserializeAws_json1_1ContainerServiceHealthCheckConfig(output.healthCheck, context)
            : undefined,
    };
};
const deserializeAws_json1_1ContainerServiceHealthCheckConfig = (output, context) => {
    return {
        healthyThreshold: output.healthyThreshold !== undefined && output.healthyThreshold !== null ? output.healthyThreshold : undefined,
        intervalSeconds: output.intervalSeconds !== undefined && output.intervalSeconds !== null ? output.intervalSeconds : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        successCodes: output.successCodes !== undefined && output.successCodes !== null ? output.successCodes : undefined,
        timeoutSeconds: output.timeoutSeconds !== undefined && output.timeoutSeconds !== null ? output.timeoutSeconds : undefined,
        unhealthyThreshold: output.unhealthyThreshold !== undefined && output.unhealthyThreshold !== null
            ? output.unhealthyThreshold
            : undefined,
    };
};
const deserializeAws_json1_1ContainerServiceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerService(entry, context);
    });
};
const deserializeAws_json1_1ContainerServiceLogEvent = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ContainerServiceLogEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerServiceLogEvent(entry, context);
    });
};
const deserializeAws_json1_1ContainerServiceMetadataEntry = (output, context) => {
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
const deserializeAws_json1_1ContainerServiceMetadataEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerServiceMetadataEntry(entry, context);
    });
};
const deserializeAws_json1_1ContainerServicePower = (output, context) => {
    return {
        cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
        isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        powerId: output.powerId !== undefined && output.powerId !== null ? output.powerId : undefined,
        price: output.price !== undefined && output.price !== null ? output.price : undefined,
        ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
    };
};
const deserializeAws_json1_1ContainerServicePowerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerServicePower(entry, context);
    });
};
const deserializeAws_json1_1ContainerServicePublicDomains = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1ContainerServicePublicDomainsList(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ContainerServicePublicDomainsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ContainerServiceRegistryLogin = (output, context) => {
    return {
        expiresAt: output.expiresAt !== undefined && output.expiresAt !== null
            ? new Date(Math.round(output.expiresAt * 1000))
            : undefined,
        password: output.password !== undefined && output.password !== null ? output.password : undefined,
        registry: output.registry !== undefined && output.registry !== null ? output.registry : undefined,
        username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_json1_1ContainerServicesListResult = (output, context) => {
    return {
        containerServices: output.containerServices !== undefined && output.containerServices !== null
            ? deserializeAws_json1_1ContainerServiceList(output.containerServices, context)
            : undefined,
    };
};
const deserializeAws_json1_1ContainerServiceStateDetail = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CookieObject = (output, context) => {
    return {
        cookiesAllowList: output.cookiesAllowList !== undefined && output.cookiesAllowList !== null
            ? deserializeAws_json1_1StringList(output.cookiesAllowList, context)
            : undefined,
        option: output.option !== undefined && output.option !== null ? output.option : undefined,
    };
};
const deserializeAws_json1_1CopySnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateCertificateResult = (output, context) => {
    return {
        certificate: output.certificate !== undefined && output.certificate !== null
            ? deserializeAws_json1_1CertificateSummary(output.certificate, context)
            : undefined,
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateCloudFormationStackResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateContactMethodResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateContainerServiceDeploymentResult = (output, context) => {
    return {
        containerService: output.containerService !== undefined && output.containerService !== null
            ? deserializeAws_json1_1ContainerService(output.containerService, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateContainerServiceRegistryLoginResult = (output, context) => {
    return {
        registryLogin: output.registryLogin !== undefined && output.registryLogin !== null
            ? deserializeAws_json1_1ContainerServiceRegistryLogin(output.registryLogin, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateContainerServiceResult = (output, context) => {
    return {
        containerService: output.containerService !== undefined && output.containerService !== null
            ? deserializeAws_json1_1ContainerService(output.containerService, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDiskFromSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDiskResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDiskSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDistributionResult = (output, context) => {
    return {
        distribution: output.distribution !== undefined && output.distribution !== null
            ? deserializeAws_json1_1LightsailDistribution(output.distribution, context)
            : undefined,
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDomainEntryResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateDomainResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateInstancesFromSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateInstanceSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateInstancesResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateKeyPairResult = (output, context) => {
    return {
        keyPair: output.keyPair !== undefined && output.keyPair !== null
            ? deserializeAws_json1_1KeyPair(output.keyPair, context)
            : undefined,
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
        privateKeyBase64: output.privateKeyBase64 !== undefined && output.privateKeyBase64 !== null ? output.privateKeyBase64 : undefined,
        publicKeyBase64: output.publicKeyBase64 !== undefined && output.publicKeyBase64 !== null ? output.publicKeyBase64 : undefined,
    };
};
const deserializeAws_json1_1CreateLoadBalancerResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateLoadBalancerTlsCertificateResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRelationalDatabaseResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRelationalDatabaseSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteAlarmResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteAutoSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteCertificateResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteContactMethodResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteContainerImageResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteContainerServiceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteDiskResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDiskSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDistributionResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDomainEntryResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteDomainResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteInstanceResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteInstanceSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteKeyPairResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteKnownHostKeysResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteLoadBalancerResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteLoadBalancerTlsCertificateResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteRelationalDatabaseResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteRelationalDatabaseSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DestinationInfo = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
    };
};
const deserializeAws_json1_1DetachCertificateFromDistributionResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetachDiskResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetachInstancesFromLoadBalancerResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DetachStaticIpResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisableAddOnResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1Disk = (output, context) => {
    return {
        addOns: output.addOns !== undefined && output.addOns !== null
            ? deserializeAws_json1_1AddOnList(output.addOns, context)
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        attachedTo: output.attachedTo !== undefined && output.attachedTo !== null ? output.attachedTo : undefined,
        attachmentState: output.attachmentState !== undefined && output.attachmentState !== null ? output.attachmentState : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        gbInUse: output.gbInUse !== undefined && output.gbInUse !== null ? output.gbInUse : undefined,
        iops: output.iops !== undefined && output.iops !== null ? output.iops : undefined,
        isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
        isSystemDisk: output.isSystemDisk !== undefined && output.isSystemDisk !== null ? output.isSystemDisk : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DiskInfo = (output, context) => {
    return {
        isSystemDisk: output.isSystemDisk !== undefined && output.isSystemDisk !== null ? output.isSystemDisk : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
    };
};
const deserializeAws_json1_1DiskInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DiskInfo(entry, context);
    });
};
const deserializeAws_json1_1DiskList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Disk(entry, context);
    });
};
const deserializeAws_json1_1DiskSnapshot = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        fromDiskArn: output.fromDiskArn !== undefined && output.fromDiskArn !== null ? output.fromDiskArn : undefined,
        fromDiskName: output.fromDiskName !== undefined && output.fromDiskName !== null ? output.fromDiskName : undefined,
        fromInstanceArn: output.fromInstanceArn !== undefined && output.fromInstanceArn !== null ? output.fromInstanceArn : undefined,
        fromInstanceName: output.fromInstanceName !== undefined && output.fromInstanceName !== null ? output.fromInstanceName : undefined,
        isFromAutoSnapshot: output.isFromAutoSnapshot !== undefined && output.isFromAutoSnapshot !== null
            ? output.isFromAutoSnapshot
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        progress: output.progress !== undefined && output.progress !== null ? output.progress : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DiskSnapshotInfo = (output, context) => {
    return {
        sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
    };
};
const deserializeAws_json1_1DiskSnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DiskSnapshot(entry, context);
    });
};
const deserializeAws_json1_1DistributionBundle = (output, context) => {
    return {
        bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
        isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        price: output.price !== undefined && output.price !== null ? output.price : undefined,
        transferPerMonthInGb: output.transferPerMonthInGb !== undefined && output.transferPerMonthInGb !== null
            ? output.transferPerMonthInGb
            : undefined,
    };
};
const deserializeAws_json1_1DistributionBundleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DistributionBundle(entry, context);
    });
};
const deserializeAws_json1_1DistributionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LightsailDistribution(entry, context);
    });
};
const deserializeAws_json1_1Domain = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        domainEntries: output.domainEntries !== undefined && output.domainEntries !== null
            ? deserializeAws_json1_1DomainEntryList(output.domainEntries, context)
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1DomainEntry = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        isAlias: output.isAlias !== undefined && output.isAlias !== null ? output.isAlias : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        options: output.options !== undefined && output.options !== null
            ? deserializeAws_json1_1DomainEntryOptions(output.options, context)
            : undefined,
        target: output.target !== undefined && output.target !== null ? output.target : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1DomainEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DomainEntry(entry, context);
    });
};
const deserializeAws_json1_1DomainEntryOptions = (output, context) => {
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
const deserializeAws_json1_1DomainList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Domain(entry, context);
    });
};
const deserializeAws_json1_1DomainValidationRecord = (output, context) => {
    return {
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        resourceRecord: output.resourceRecord !== undefined && output.resourceRecord !== null
            ? deserializeAws_json1_1ResourceRecord(output.resourceRecord, context)
            : undefined,
    };
};
const deserializeAws_json1_1DomainValidationRecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DomainValidationRecord(entry, context);
    });
};
const deserializeAws_json1_1DownloadDefaultKeyPairResult = (output, context) => {
    return {
        privateKeyBase64: output.privateKeyBase64 !== undefined && output.privateKeyBase64 !== null ? output.privateKeyBase64 : undefined,
        publicKeyBase64: output.publicKeyBase64 !== undefined && output.publicKeyBase64 !== null ? output.publicKeyBase64 : undefined,
    };
};
const deserializeAws_json1_1EnableAddOnResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1Environment = (output, context) => {
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
const deserializeAws_json1_1ExportSnapshotRecord = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        destinationInfo: output.destinationInfo !== undefined && output.destinationInfo !== null
            ? deserializeAws_json1_1DestinationInfo(output.destinationInfo, context)
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        sourceInfo: output.sourceInfo !== undefined && output.sourceInfo !== null
            ? deserializeAws_json1_1ExportSnapshotRecordSourceInfo(output.sourceInfo, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_json1_1ExportSnapshotRecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExportSnapshotRecord(entry, context);
    });
};
const deserializeAws_json1_1ExportSnapshotRecordSourceInfo = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        diskSnapshotInfo: output.diskSnapshotInfo !== undefined && output.diskSnapshotInfo !== null
            ? deserializeAws_json1_1DiskSnapshotInfo(output.diskSnapshotInfo, context)
            : undefined,
        fromResourceArn: output.fromResourceArn !== undefined && output.fromResourceArn !== null ? output.fromResourceArn : undefined,
        fromResourceName: output.fromResourceName !== undefined && output.fromResourceName !== null ? output.fromResourceName : undefined,
        instanceSnapshotInfo: output.instanceSnapshotInfo !== undefined && output.instanceSnapshotInfo !== null
            ? deserializeAws_json1_1InstanceSnapshotInfo(output.instanceSnapshotInfo, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1ExportSnapshotResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetActiveNamesResult = (output, context) => {
    return {
        activeNames: output.activeNames !== undefined && output.activeNames !== null
            ? deserializeAws_json1_1StringList(output.activeNames, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetAlarmsResult = (output, context) => {
    return {
        alarms: output.alarms !== undefined && output.alarms !== null
            ? deserializeAws_json1_1AlarmsList(output.alarms, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetAutoSnapshotsResult = (output, context) => {
    return {
        autoSnapshots: output.autoSnapshots !== undefined && output.autoSnapshots !== null
            ? deserializeAws_json1_1AutoSnapshotDetailsList(output.autoSnapshots, context)
            : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1GetBlueprintsResult = (output, context) => {
    return {
        blueprints: output.blueprints !== undefined && output.blueprints !== null
            ? deserializeAws_json1_1BlueprintList(output.blueprints, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetBundlesResult = (output, context) => {
    return {
        bundles: output.bundles !== undefined && output.bundles !== null
            ? deserializeAws_json1_1BundleList(output.bundles, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetCertificatesResult = (output, context) => {
    return {
        certificates: output.certificates !== undefined && output.certificates !== null
            ? deserializeAws_json1_1CertificateSummaryList(output.certificates, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetCloudFormationStackRecordsResult = (output, context) => {
    return {
        cloudFormationStackRecords: output.cloudFormationStackRecords !== undefined && output.cloudFormationStackRecords !== null
            ? deserializeAws_json1_1CloudFormationStackRecordList(output.cloudFormationStackRecords, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetContactMethodsResult = (output, context) => {
    return {
        contactMethods: output.contactMethods !== undefined && output.contactMethods !== null
            ? deserializeAws_json1_1ContactMethodsList(output.contactMethods, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetContainerAPIMetadataResult = (output, context) => {
    return {
        metadata: output.metadata !== undefined && output.metadata !== null
            ? deserializeAws_json1_1ContainerServiceMetadataEntryList(output.metadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetContainerImagesResult = (output, context) => {
    return {
        containerImages: output.containerImages !== undefined && output.containerImages !== null
            ? deserializeAws_json1_1ContainerImageList(output.containerImages, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetContainerLogResult = (output, context) => {
    return {
        logEvents: output.logEvents !== undefined && output.logEvents !== null
            ? deserializeAws_json1_1ContainerServiceLogEventList(output.logEvents, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetContainerServiceDeploymentsResult = (output, context) => {
    return {
        deployments: output.deployments !== undefined && output.deployments !== null
            ? deserializeAws_json1_1ContainerServiceDeploymentList(output.deployments, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetContainerServiceMetricDataResult = (output, context) => {
    return {
        metricData: output.metricData !== undefined && output.metricData !== null
            ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
            : undefined,
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
    };
};
const deserializeAws_json1_1GetContainerServicePowersResult = (output, context) => {
    return {
        powers: output.powers !== undefined && output.powers !== null
            ? deserializeAws_json1_1ContainerServicePowerList(output.powers, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDiskResult = (output, context) => {
    return {
        disk: output.disk !== undefined && output.disk !== null ? deserializeAws_json1_1Disk(output.disk, context) : undefined,
    };
};
const deserializeAws_json1_1GetDiskSnapshotResult = (output, context) => {
    return {
        diskSnapshot: output.diskSnapshot !== undefined && output.diskSnapshot !== null
            ? deserializeAws_json1_1DiskSnapshot(output.diskSnapshot, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDiskSnapshotsResult = (output, context) => {
    return {
        diskSnapshots: output.diskSnapshots !== undefined && output.diskSnapshots !== null
            ? deserializeAws_json1_1DiskSnapshotList(output.diskSnapshots, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetDisksResult = (output, context) => {
    return {
        disks: output.disks !== undefined && output.disks !== null
            ? deserializeAws_json1_1DiskList(output.disks, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetDistributionBundlesResult = (output, context) => {
    return {
        bundles: output.bundles !== undefined && output.bundles !== null
            ? deserializeAws_json1_1DistributionBundleList(output.bundles, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDistributionLatestCacheResetResult = (output, context) => {
    return {
        createTime: output.createTime !== undefined && output.createTime !== null
            ? new Date(Math.round(output.createTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1GetDistributionMetricDataResult = (output, context) => {
    return {
        metricData: output.metricData !== undefined && output.metricData !== null
            ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
            : undefined,
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
    };
};
const deserializeAws_json1_1GetDistributionsResult = (output, context) => {
    return {
        distributions: output.distributions !== undefined && output.distributions !== null
            ? deserializeAws_json1_1DistributionList(output.distributions, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetDomainResult = (output, context) => {
    return {
        domain: output.domain !== undefined && output.domain !== null
            ? deserializeAws_json1_1Domain(output.domain, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDomainsResult = (output, context) => {
    return {
        domains: output.domains !== undefined && output.domains !== null
            ? deserializeAws_json1_1DomainList(output.domains, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetExportSnapshotRecordsResult = (output, context) => {
    return {
        exportSnapshotRecords: output.exportSnapshotRecords !== undefined && output.exportSnapshotRecords !== null
            ? deserializeAws_json1_1ExportSnapshotRecordList(output.exportSnapshotRecords, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetInstanceAccessDetailsResult = (output, context) => {
    return {
        accessDetails: output.accessDetails !== undefined && output.accessDetails !== null
            ? deserializeAws_json1_1InstanceAccessDetails(output.accessDetails, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetInstanceMetricDataResult = (output, context) => {
    return {
        metricData: output.metricData !== undefined && output.metricData !== null
            ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
            : undefined,
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
    };
};
const deserializeAws_json1_1GetInstancePortStatesResult = (output, context) => {
    return {
        portStates: output.portStates !== undefined && output.portStates !== null
            ? deserializeAws_json1_1InstancePortStateList(output.portStates, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetInstanceResult = (output, context) => {
    return {
        instance: output.instance !== undefined && output.instance !== null
            ? deserializeAws_json1_1Instance(output.instance, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetInstanceSnapshotResult = (output, context) => {
    return {
        instanceSnapshot: output.instanceSnapshot !== undefined && output.instanceSnapshot !== null
            ? deserializeAws_json1_1InstanceSnapshot(output.instanceSnapshot, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetInstanceSnapshotsResult = (output, context) => {
    return {
        instanceSnapshots: output.instanceSnapshots !== undefined && output.instanceSnapshots !== null
            ? deserializeAws_json1_1InstanceSnapshotList(output.instanceSnapshots, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetInstancesResult = (output, context) => {
    return {
        instances: output.instances !== undefined && output.instances !== null
            ? deserializeAws_json1_1InstanceList(output.instances, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetInstanceStateResult = (output, context) => {
    return {
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_json1_1InstanceState(output.state, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetKeyPairResult = (output, context) => {
    return {
        keyPair: output.keyPair !== undefined && output.keyPair !== null
            ? deserializeAws_json1_1KeyPair(output.keyPair, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetKeyPairsResult = (output, context) => {
    return {
        keyPairs: output.keyPairs !== undefined && output.keyPairs !== null
            ? deserializeAws_json1_1KeyPairList(output.keyPairs, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetLoadBalancerMetricDataResult = (output, context) => {
    return {
        metricData: output.metricData !== undefined && output.metricData !== null
            ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
            : undefined,
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
    };
};
const deserializeAws_json1_1GetLoadBalancerResult = (output, context) => {
    return {
        loadBalancer: output.loadBalancer !== undefined && output.loadBalancer !== null
            ? deserializeAws_json1_1LoadBalancer(output.loadBalancer, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLoadBalancersResult = (output, context) => {
    return {
        loadBalancers: output.loadBalancers !== undefined && output.loadBalancers !== null
            ? deserializeAws_json1_1LoadBalancerList(output.loadBalancers, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetLoadBalancerTlsCertificatesResult = (output, context) => {
    return {
        tlsCertificates: output.tlsCertificates !== undefined && output.tlsCertificates !== null
            ? deserializeAws_json1_1LoadBalancerTlsCertificateList(output.tlsCertificates, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOperationResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOperationsForResourceResult = (output, context) => {
    return {
        nextPageCount: output.nextPageCount !== undefined && output.nextPageCount !== null ? output.nextPageCount : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOperationsResult = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRegionsResult = (output, context) => {
    return {
        regions: output.regions !== undefined && output.regions !== null
            ? deserializeAws_json1_1RegionList(output.regions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseBlueprintsResult = (output, context) => {
    return {
        blueprints: output.blueprints !== undefined && output.blueprints !== null
            ? deserializeAws_json1_1RelationalDatabaseBlueprintList(output.blueprints, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseBundlesResult = (output, context) => {
    return {
        bundles: output.bundles !== undefined && output.bundles !== null
            ? deserializeAws_json1_1RelationalDatabaseBundleList(output.bundles, context)
            : undefined,
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseEventsResult = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        relationalDatabaseEvents: output.relationalDatabaseEvents !== undefined && output.relationalDatabaseEvents !== null
            ? deserializeAws_json1_1RelationalDatabaseEventList(output.relationalDatabaseEvents, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseLogEventsResult = (output, context) => {
    return {
        nextBackwardToken: output.nextBackwardToken !== undefined && output.nextBackwardToken !== null
            ? output.nextBackwardToken
            : undefined,
        nextForwardToken: output.nextForwardToken !== undefined && output.nextForwardToken !== null ? output.nextForwardToken : undefined,
        resourceLogEvents: output.resourceLogEvents !== undefined && output.resourceLogEvents !== null
            ? deserializeAws_json1_1LogEventList(output.resourceLogEvents, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseLogStreamsResult = (output, context) => {
    return {
        logStreams: output.logStreams !== undefined && output.logStreams !== null
            ? deserializeAws_json1_1StringList(output.logStreams, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordResult = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        masterUserPassword: output.masterUserPassword !== undefined && output.masterUserPassword !== null
            ? output.masterUserPassword
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseMetricDataResult = (output, context) => {
    return {
        metricData: output.metricData !== undefined && output.metricData !== null
            ? deserializeAws_json1_1MetricDatapointList(output.metricData, context)
            : undefined,
        metricName: output.metricName !== undefined && output.metricName !== null ? output.metricName : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseParametersResult = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null
            ? deserializeAws_json1_1RelationalDatabaseParameterList(output.parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseResult = (output, context) => {
    return {
        relationalDatabase: output.relationalDatabase !== undefined && output.relationalDatabase !== null
            ? deserializeAws_json1_1RelationalDatabase(output.relationalDatabase, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseSnapshotResult = (output, context) => {
    return {
        relationalDatabaseSnapshot: output.relationalDatabaseSnapshot !== undefined && output.relationalDatabaseSnapshot !== null
            ? deserializeAws_json1_1RelationalDatabaseSnapshot(output.relationalDatabaseSnapshot, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabaseSnapshotsResult = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        relationalDatabaseSnapshots: output.relationalDatabaseSnapshots !== undefined && output.relationalDatabaseSnapshots !== null
            ? deserializeAws_json1_1RelationalDatabaseSnapshotList(output.relationalDatabaseSnapshots, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRelationalDatabasesResult = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        relationalDatabases: output.relationalDatabases !== undefined && output.relationalDatabases !== null
            ? deserializeAws_json1_1RelationalDatabaseList(output.relationalDatabases, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetStaticIpResult = (output, context) => {
    return {
        staticIp: output.staticIp !== undefined && output.staticIp !== null
            ? deserializeAws_json1_1StaticIp(output.staticIp, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetStaticIpsResult = (output, context) => {
    return {
        nextPageToken: output.nextPageToken !== undefined && output.nextPageToken !== null ? output.nextPageToken : undefined,
        staticIps: output.staticIps !== undefined && output.staticIps !== null
            ? deserializeAws_json1_1StaticIpList(output.staticIps, context)
            : undefined,
    };
};
const deserializeAws_json1_1HeaderForwardList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1HeaderObject = (output, context) => {
    return {
        headersAllowList: output.headersAllowList !== undefined && output.headersAllowList !== null
            ? deserializeAws_json1_1HeaderForwardList(output.headersAllowList, context)
            : undefined,
        option: output.option !== undefined && output.option !== null ? output.option : undefined,
    };
};
const deserializeAws_json1_1HostKeyAttributes = (output, context) => {
    return {
        algorithm: output.algorithm !== undefined && output.algorithm !== null ? output.algorithm : undefined,
        fingerprintSHA1: output.fingerprintSHA1 !== undefined && output.fingerprintSHA1 !== null ? output.fingerprintSHA1 : undefined,
        fingerprintSHA256: output.fingerprintSHA256 !== undefined && output.fingerprintSHA256 !== null
            ? output.fingerprintSHA256
            : undefined,
        notValidAfter: output.notValidAfter !== undefined && output.notValidAfter !== null
            ? new Date(Math.round(output.notValidAfter * 1000))
            : undefined,
        notValidBefore: output.notValidBefore !== undefined && output.notValidBefore !== null
            ? new Date(Math.round(output.notValidBefore * 1000))
            : undefined,
        publicKey: output.publicKey !== undefined && output.publicKey !== null ? output.publicKey : undefined,
        witnessedAt: output.witnessedAt !== undefined && output.witnessedAt !== null
            ? new Date(Math.round(output.witnessedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1HostKeysList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HostKeyAttributes(entry, context);
    });
};
const deserializeAws_json1_1ImportKeyPairResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1Instance = (output, context) => {
    return {
        addOns: output.addOns !== undefined && output.addOns !== null
            ? deserializeAws_json1_1AddOnList(output.addOns, context)
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        blueprintId: output.blueprintId !== undefined && output.blueprintId !== null ? output.blueprintId : undefined,
        blueprintName: output.blueprintName !== undefined && output.blueprintName !== null ? output.blueprintName : undefined,
        bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        hardware: output.hardware !== undefined && output.hardware !== null
            ? deserializeAws_json1_1InstanceHardware(output.hardware, context)
            : undefined,
        ipAddressType: output.ipAddressType !== undefined && output.ipAddressType !== null ? output.ipAddressType : undefined,
        ipv6Addresses: output.ipv6Addresses !== undefined && output.ipv6Addresses !== null
            ? deserializeAws_json1_1Ipv6AddressList(output.ipv6Addresses, context)
            : undefined,
        isStaticIp: output.isStaticIp !== undefined && output.isStaticIp !== null ? output.isStaticIp : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        networking: output.networking !== undefined && output.networking !== null
            ? deserializeAws_json1_1InstanceNetworking(output.networking, context)
            : undefined,
        privateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
        publicIpAddress: output.publicIpAddress !== undefined && output.publicIpAddress !== null ? output.publicIpAddress : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        sshKeyName: output.sshKeyName !== undefined && output.sshKeyName !== null ? output.sshKeyName : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_json1_1InstanceState(output.state, context)
            : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_json1_1InstanceAccessDetails = (output, context) => {
    return {
        certKey: output.certKey !== undefined && output.certKey !== null ? output.certKey : undefined,
        expiresAt: output.expiresAt !== undefined && output.expiresAt !== null
            ? new Date(Math.round(output.expiresAt * 1000))
            : undefined,
        hostKeys: output.hostKeys !== undefined && output.hostKeys !== null
            ? deserializeAws_json1_1HostKeysList(output.hostKeys, context)
            : undefined,
        instanceName: output.instanceName !== undefined && output.instanceName !== null ? output.instanceName : undefined,
        ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
        password: output.password !== undefined && output.password !== null ? output.password : undefined,
        passwordData: output.passwordData !== undefined && output.passwordData !== null
            ? deserializeAws_json1_1PasswordData(output.passwordData, context)
            : undefined,
        privateKey: output.privateKey !== undefined && output.privateKey !== null ? output.privateKey : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
const deserializeAws_json1_1InstanceHardware = (output, context) => {
    return {
        cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
        disks: output.disks !== undefined && output.disks !== null
            ? deserializeAws_json1_1DiskList(output.disks, context)
            : undefined,
        ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
    };
};
const deserializeAws_json1_1InstanceHealthSummary = (output, context) => {
    return {
        instanceHealth: output.instanceHealth !== undefined && output.instanceHealth !== null ? output.instanceHealth : undefined,
        instanceHealthReason: output.instanceHealthReason !== undefined && output.instanceHealthReason !== null
            ? output.instanceHealthReason
            : undefined,
        instanceName: output.instanceName !== undefined && output.instanceName !== null ? output.instanceName : undefined,
    };
};
const deserializeAws_json1_1InstanceHealthSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceHealthSummary(entry, context);
    });
};
const deserializeAws_json1_1InstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Instance(entry, context);
    });
};
const deserializeAws_json1_1InstanceNetworking = (output, context) => {
    return {
        monthlyTransfer: output.monthlyTransfer !== undefined && output.monthlyTransfer !== null
            ? deserializeAws_json1_1MonthlyTransfer(output.monthlyTransfer, context)
            : undefined,
        ports: output.ports !== undefined && output.ports !== null
            ? deserializeAws_json1_1InstancePortInfoList(output.ports, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstancePlatformList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InstancePortInfo = (output, context) => {
    return {
        accessDirection: output.accessDirection !== undefined && output.accessDirection !== null ? output.accessDirection : undefined,
        accessFrom: output.accessFrom !== undefined && output.accessFrom !== null ? output.accessFrom : undefined,
        accessType: output.accessType !== undefined && output.accessType !== null ? output.accessType : undefined,
        cidrListAliases: output.cidrListAliases !== undefined && output.cidrListAliases !== null
            ? deserializeAws_json1_1StringList(output.cidrListAliases, context)
            : undefined,
        cidrs: output.cidrs !== undefined && output.cidrs !== null
            ? deserializeAws_json1_1StringList(output.cidrs, context)
            : undefined,
        commonName: output.commonName !== undefined && output.commonName !== null ? output.commonName : undefined,
        fromPort: output.fromPort !== undefined && output.fromPort !== null ? output.fromPort : undefined,
        ipv6Cidrs: output.ipv6Cidrs !== undefined && output.ipv6Cidrs !== null
            ? deserializeAws_json1_1StringList(output.ipv6Cidrs, context)
            : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        toPort: output.toPort !== undefined && output.toPort !== null ? output.toPort : undefined,
    };
};
const deserializeAws_json1_1InstancePortInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstancePortInfo(entry, context);
    });
};
const deserializeAws_json1_1InstancePortState = (output, context) => {
    return {
        cidrListAliases: output.cidrListAliases !== undefined && output.cidrListAliases !== null
            ? deserializeAws_json1_1StringList(output.cidrListAliases, context)
            : undefined,
        cidrs: output.cidrs !== undefined && output.cidrs !== null
            ? deserializeAws_json1_1StringList(output.cidrs, context)
            : undefined,
        fromPort: output.fromPort !== undefined && output.fromPort !== null ? output.fromPort : undefined,
        ipv6Cidrs: output.ipv6Cidrs !== undefined && output.ipv6Cidrs !== null
            ? deserializeAws_json1_1StringList(output.ipv6Cidrs, context)
            : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        toPort: output.toPort !== undefined && output.toPort !== null ? output.toPort : undefined,
    };
};
const deserializeAws_json1_1InstancePortStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstancePortState(entry, context);
    });
};
const deserializeAws_json1_1InstanceSnapshot = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        fromAttachedDisks: output.fromAttachedDisks !== undefined && output.fromAttachedDisks !== null
            ? deserializeAws_json1_1DiskList(output.fromAttachedDisks, context)
            : undefined,
        fromBlueprintId: output.fromBlueprintId !== undefined && output.fromBlueprintId !== null ? output.fromBlueprintId : undefined,
        fromBundleId: output.fromBundleId !== undefined && output.fromBundleId !== null ? output.fromBundleId : undefined,
        fromInstanceArn: output.fromInstanceArn !== undefined && output.fromInstanceArn !== null ? output.fromInstanceArn : undefined,
        fromInstanceName: output.fromInstanceName !== undefined && output.fromInstanceName !== null ? output.fromInstanceName : undefined,
        isFromAutoSnapshot: output.isFromAutoSnapshot !== undefined && output.isFromAutoSnapshot !== null
            ? output.isFromAutoSnapshot
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        progress: output.progress !== undefined && output.progress !== null ? output.progress : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstanceSnapshotInfo = (output, context) => {
    return {
        fromBlueprintId: output.fromBlueprintId !== undefined && output.fromBlueprintId !== null ? output.fromBlueprintId : undefined,
        fromBundleId: output.fromBundleId !== undefined && output.fromBundleId !== null ? output.fromBundleId : undefined,
        fromDiskInfo: output.fromDiskInfo !== undefined && output.fromDiskInfo !== null
            ? deserializeAws_json1_1DiskInfoList(output.fromDiskInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstanceSnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceSnapshot(entry, context);
    });
};
const deserializeAws_json1_1InstanceState = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
    };
};
const deserializeAws_json1_1Ipv6AddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1IsVpcPeeredResult = (output, context) => {
    return {
        isPeered: output.isPeered !== undefined && output.isPeered !== null ? output.isPeered : undefined,
    };
};
const deserializeAws_json1_1KeyPair = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        fingerprint: output.fingerprint !== undefined && output.fingerprint !== null ? output.fingerprint : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1KeyPairList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyPair(entry, context);
    });
};
const deserializeAws_json1_1LightsailDistribution = (output, context) => {
    return {
        ableToUpdateBundle: output.ableToUpdateBundle !== undefined && output.ableToUpdateBundle !== null
            ? output.ableToUpdateBundle
            : undefined,
        alternativeDomainNames: output.alternativeDomainNames !== undefined && output.alternativeDomainNames !== null
            ? deserializeAws_json1_1StringList(output.alternativeDomainNames, context)
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
        cacheBehaviorSettings: output.cacheBehaviorSettings !== undefined && output.cacheBehaviorSettings !== null
            ? deserializeAws_json1_1CacheSettings(output.cacheBehaviorSettings, context)
            : undefined,
        cacheBehaviors: output.cacheBehaviors !== undefined && output.cacheBehaviors !== null
            ? deserializeAws_json1_1CacheBehaviorList(output.cacheBehaviors, context)
            : undefined,
        certificateName: output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        defaultCacheBehavior: output.defaultCacheBehavior !== undefined && output.defaultCacheBehavior !== null
            ? deserializeAws_json1_1CacheBehavior(output.defaultCacheBehavior, context)
            : undefined,
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        ipAddressType: output.ipAddressType !== undefined && output.ipAddressType !== null ? output.ipAddressType : undefined,
        isEnabled: output.isEnabled !== undefined && output.isEnabled !== null ? output.isEnabled : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        origin: output.origin !== undefined && output.origin !== null
            ? deserializeAws_json1_1Origin(output.origin, context)
            : undefined,
        originPublicDNS: output.originPublicDNS !== undefined && output.originPublicDNS !== null ? output.originPublicDNS : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoadBalancer = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        configurationOptions: output.configurationOptions !== undefined && output.configurationOptions !== null
            ? deserializeAws_json1_1LoadBalancerConfigurationOptions(output.configurationOptions, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        dnsName: output.dnsName !== undefined && output.dnsName !== null ? output.dnsName : undefined,
        healthCheckPath: output.healthCheckPath !== undefined && output.healthCheckPath !== null ? output.healthCheckPath : undefined,
        instanceHealthSummary: output.instanceHealthSummary !== undefined && output.instanceHealthSummary !== null
            ? deserializeAws_json1_1InstanceHealthSummaryList(output.instanceHealthSummary, context)
            : undefined,
        instancePort: output.instancePort !== undefined && output.instancePort !== null ? output.instancePort : undefined,
        ipAddressType: output.ipAddressType !== undefined && output.ipAddressType !== null ? output.ipAddressType : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        publicPorts: output.publicPorts !== undefined && output.publicPorts !== null
            ? deserializeAws_json1_1PortList(output.publicPorts, context)
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
        tlsCertificateSummaries: output.tlsCertificateSummaries !== undefined && output.tlsCertificateSummaries !== null
            ? deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList(output.tlsCertificateSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoadBalancerConfigurationOptions = (output, context) => {
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
const deserializeAws_json1_1LoadBalancerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBalancer(entry, context);
    });
};
const deserializeAws_json1_1LoadBalancerTlsCertificate = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        domainValidationRecords: output.domainValidationRecords !== undefined && output.domainValidationRecords !== null
            ? deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList(output.domainValidationRecords, context)
            : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
        issuedAt: output.issuedAt !== undefined && output.issuedAt !== null
            ? new Date(Math.round(output.issuedAt * 1000))
            : undefined,
        issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
        keyAlgorithm: output.keyAlgorithm !== undefined && output.keyAlgorithm !== null ? output.keyAlgorithm : undefined,
        loadBalancerName: output.loadBalancerName !== undefined && output.loadBalancerName !== null ? output.loadBalancerName : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        notAfter: output.notAfter !== undefined && output.notAfter !== null
            ? new Date(Math.round(output.notAfter * 1000))
            : undefined,
        notBefore: output.notBefore !== undefined && output.notBefore !== null
            ? new Date(Math.round(output.notBefore * 1000))
            : undefined,
        renewalSummary: output.renewalSummary !== undefined && output.renewalSummary !== null
            ? deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary(output.renewalSummary, context)
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        revocationReason: output.revocationReason !== undefined && output.revocationReason !== null ? output.revocationReason : undefined,
        revokedAt: output.revokedAt !== undefined && output.revokedAt !== null
            ? new Date(Math.round(output.revokedAt * 1000))
            : undefined,
        serial: output.serial !== undefined && output.serial !== null ? output.serial : undefined,
        signatureAlgorithm: output.signatureAlgorithm !== undefined && output.signatureAlgorithm !== null
            ? output.signatureAlgorithm
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        subject: output.subject !== undefined && output.subject !== null ? output.subject : undefined,
        subjectAlternativeNames: output.subjectAlternativeNames !== undefined && output.subjectAlternativeNames !== null
            ? deserializeAws_json1_1StringList(output.subjectAlternativeNames, context)
            : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption = (output, context) => {
    return {
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        validationStatus: output.validationStatus !== undefined && output.validationStatus !== null ? output.validationStatus : undefined,
    };
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOption(entry, context);
    });
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord = (output, context) => {
    return {
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        validationStatus: output.validationStatus !== undefined && output.validationStatus !== null ? output.validationStatus : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationRecord(entry, context);
    });
};
const deserializeAws_json1_1LoadBalancerTlsCertificateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBalancerTlsCertificate(entry, context);
    });
};
const deserializeAws_json1_1LoadBalancerTlsCertificateRenewalSummary = (output, context) => {
    return {
        domainValidationOptions: output.domainValidationOptions !== undefined && output.domainValidationOptions !== null
            ? deserializeAws_json1_1LoadBalancerTlsCertificateDomainValidationOptionList(output.domainValidationOptions, context)
            : undefined,
        renewalStatus: output.renewalStatus !== undefined && output.renewalStatus !== null ? output.renewalStatus : undefined,
    };
};
const deserializeAws_json1_1LoadBalancerTlsCertificateSummary = (output, context) => {
    return {
        isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1LoadBalancerTlsCertificateSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBalancerTlsCertificateSummary(entry, context);
    });
};
const deserializeAws_json1_1LogEvent = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LogEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LogEvent(entry, context);
    });
};
const deserializeAws_json1_1MetricDatapoint = (output, context) => {
    return {
        average: output.average !== undefined && output.average !== null ? output.average : undefined,
        maximum: output.maximum !== undefined && output.maximum !== null ? output.maximum : undefined,
        minimum: output.minimum !== undefined && output.minimum !== null ? output.minimum : undefined,
        sampleCount: output.sampleCount !== undefined && output.sampleCount !== null ? output.sampleCount : undefined,
        sum: output.sum !== undefined && output.sum !== null ? output.sum : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? new Date(Math.round(output.timestamp * 1000))
            : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    };
};
const deserializeAws_json1_1MetricDatapointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricDatapoint(entry, context);
    });
};
const deserializeAws_json1_1MonitoredResourceInfo = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1MonthlyTransfer = (output, context) => {
    return {
        gbPerMonthAllocated: output.gbPerMonthAllocated !== undefined && output.gbPerMonthAllocated !== null
            ? output.gbPerMonthAllocated
            : undefined,
    };
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
    };
};
const deserializeAws_json1_1NotificationTriggerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1OpenInstancePublicPortsResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1Operation = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorDetails: output.errorDetails !== undefined && output.errorDetails !== null ? output.errorDetails : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        isTerminal: output.isTerminal !== undefined && output.isTerminal !== null ? output.isTerminal : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        operationDetails: output.operationDetails !== undefined && output.operationDetails !== null ? output.operationDetails : undefined,
        operationType: output.operationType !== undefined && output.operationType !== null ? output.operationType : undefined,
        resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusChangedAt: output.statusChangedAt !== undefined && output.statusChangedAt !== null
            ? new Date(Math.round(output.statusChangedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1OperationFailureException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
    };
};
const deserializeAws_json1_1OperationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Operation(entry, context);
    });
};
const deserializeAws_json1_1Origin = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        protocolPolicy: output.protocolPolicy !== undefined && output.protocolPolicy !== null ? output.protocolPolicy : undefined,
        regionName: output.regionName !== undefined && output.regionName !== null ? output.regionName : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1PasswordData = (output, context) => {
    return {
        ciphertext: output.ciphertext !== undefined && output.ciphertext !== null ? output.ciphertext : undefined,
        keyPairName: output.keyPairName !== undefined && output.keyPairName !== null ? output.keyPairName : undefined,
    };
};
const deserializeAws_json1_1PeerVpcResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1PendingMaintenanceAction = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        currentApplyDate: output.currentApplyDate !== undefined && output.currentApplyDate !== null
            ? new Date(Math.round(output.currentApplyDate * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
    };
};
const deserializeAws_json1_1PendingMaintenanceActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PendingMaintenanceAction(entry, context);
    });
};
const deserializeAws_json1_1PendingModifiedRelationalDatabaseValues = (output, context) => {
    return {
        backupRetentionEnabled: output.backupRetentionEnabled !== undefined && output.backupRetentionEnabled !== null
            ? output.backupRetentionEnabled
            : undefined,
        engineVersion: output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
        masterUserPassword: output.masterUserPassword !== undefined && output.masterUserPassword !== null
            ? output.masterUserPassword
            : undefined,
    };
};
const deserializeAws_json1_1PortList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PortMap = (output, context) => {
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
const deserializeAws_json1_1PutAlarmResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutInstancePublicPortsResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1QueryStringObject = (output, context) => {
    return {
        option: output.option !== undefined && output.option !== null ? output.option : undefined,
        queryStringsAllowList: output.queryStringsAllowList !== undefined && output.queryStringsAllowList !== null
            ? deserializeAws_json1_1StringList(output.queryStringsAllowList, context)
            : undefined,
    };
};
const deserializeAws_json1_1RebootInstanceResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1RebootRelationalDatabaseResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1Region = (output, context) => {
    return {
        availabilityZones: output.availabilityZones !== undefined && output.availabilityZones !== null
            ? deserializeAws_json1_1AvailabilityZoneList(output.availabilityZones, context)
            : undefined,
        continentCode: output.continentCode !== undefined && output.continentCode !== null ? output.continentCode : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        relationalDatabaseAvailabilityZones: output.relationalDatabaseAvailabilityZones !== undefined && output.relationalDatabaseAvailabilityZones !== null
            ? deserializeAws_json1_1AvailabilityZoneList(output.relationalDatabaseAvailabilityZones, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Region(entry, context);
    });
};
const deserializeAws_json1_1RegisterContainerImageResult = (output, context) => {
    return {
        containerImage: output.containerImage !== undefined && output.containerImage !== null
            ? deserializeAws_json1_1ContainerImage(output.containerImage, context)
            : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabase = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        backupRetentionEnabled: output.backupRetentionEnabled !== undefined && output.backupRetentionEnabled !== null
            ? output.backupRetentionEnabled
            : undefined,
        caCertificateIdentifier: output.caCertificateIdentifier !== undefined && output.caCertificateIdentifier !== null
            ? output.caCertificateIdentifier
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        engine: output.engine !== undefined && output.engine !== null ? output.engine : undefined,
        engineVersion: output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
        hardware: output.hardware !== undefined && output.hardware !== null
            ? deserializeAws_json1_1RelationalDatabaseHardware(output.hardware, context)
            : undefined,
        latestRestorableTime: output.latestRestorableTime !== undefined && output.latestRestorableTime !== null
            ? new Date(Math.round(output.latestRestorableTime * 1000))
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        masterDatabaseName: output.masterDatabaseName !== undefined && output.masterDatabaseName !== null
            ? output.masterDatabaseName
            : undefined,
        masterEndpoint: output.masterEndpoint !== undefined && output.masterEndpoint !== null
            ? deserializeAws_json1_1RelationalDatabaseEndpoint(output.masterEndpoint, context)
            : undefined,
        masterUsername: output.masterUsername !== undefined && output.masterUsername !== null ? output.masterUsername : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        parameterApplyStatus: output.parameterApplyStatus !== undefined && output.parameterApplyStatus !== null
            ? output.parameterApplyStatus
            : undefined,
        pendingMaintenanceActions: output.pendingMaintenanceActions !== undefined && output.pendingMaintenanceActions !== null
            ? deserializeAws_json1_1PendingMaintenanceActionList(output.pendingMaintenanceActions, context)
            : undefined,
        pendingModifiedValues: output.pendingModifiedValues !== undefined && output.pendingModifiedValues !== null
            ? deserializeAws_json1_1PendingModifiedRelationalDatabaseValues(output.pendingModifiedValues, context)
            : undefined,
        preferredBackupWindow: output.preferredBackupWindow !== undefined && output.preferredBackupWindow !== null
            ? output.preferredBackupWindow
            : undefined,
        preferredMaintenanceWindow: output.preferredMaintenanceWindow !== undefined && output.preferredMaintenanceWindow !== null
            ? output.preferredMaintenanceWindow
            : undefined,
        publiclyAccessible: output.publiclyAccessible !== undefined && output.publiclyAccessible !== null
            ? output.publiclyAccessible
            : undefined,
        relationalDatabaseBlueprintId: output.relationalDatabaseBlueprintId !== undefined && output.relationalDatabaseBlueprintId !== null
            ? output.relationalDatabaseBlueprintId
            : undefined,
        relationalDatabaseBundleId: output.relationalDatabaseBundleId !== undefined && output.relationalDatabaseBundleId !== null
            ? output.relationalDatabaseBundleId
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        secondaryAvailabilityZone: output.secondaryAvailabilityZone !== undefined && output.secondaryAvailabilityZone !== null
            ? output.secondaryAvailabilityZone
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseBlueprint = (output, context) => {
    return {
        blueprintId: output.blueprintId !== undefined && output.blueprintId !== null ? output.blueprintId : undefined,
        engine: output.engine !== undefined && output.engine !== null ? output.engine : undefined,
        engineDescription: output.engineDescription !== undefined && output.engineDescription !== null
            ? output.engineDescription
            : undefined,
        engineVersion: output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
        engineVersionDescription: output.engineVersionDescription !== undefined && output.engineVersionDescription !== null
            ? output.engineVersionDescription
            : undefined,
        isEngineDefault: output.isEngineDefault !== undefined && output.isEngineDefault !== null ? output.isEngineDefault : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseBlueprintList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RelationalDatabaseBlueprint(entry, context);
    });
};
const deserializeAws_json1_1RelationalDatabaseBundle = (output, context) => {
    return {
        bundleId: output.bundleId !== undefined && output.bundleId !== null ? output.bundleId : undefined,
        cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
        diskSizeInGb: output.diskSizeInGb !== undefined && output.diskSizeInGb !== null ? output.diskSizeInGb : undefined,
        isActive: output.isActive !== undefined && output.isActive !== null ? output.isActive : undefined,
        isEncrypted: output.isEncrypted !== undefined && output.isEncrypted !== null ? output.isEncrypted : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        price: output.price !== undefined && output.price !== null ? output.price : undefined,
        ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
        transferPerMonthInGb: output.transferPerMonthInGb !== undefined && output.transferPerMonthInGb !== null
            ? output.transferPerMonthInGb
            : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseBundleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RelationalDatabaseBundle(entry, context);
    });
};
const deserializeAws_json1_1RelationalDatabaseEndpoint = (output, context) => {
    return {
        address: output.address !== undefined && output.address !== null ? output.address : undefined,
        port: output.port !== undefined && output.port !== null ? output.port : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseEvent = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        eventCategories: output.eventCategories !== undefined && output.eventCategories !== null
            ? deserializeAws_json1_1StringList(output.eventCategories, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RelationalDatabaseEvent(entry, context);
    });
};
const deserializeAws_json1_1RelationalDatabaseHardware = (output, context) => {
    return {
        cpuCount: output.cpuCount !== undefined && output.cpuCount !== null ? output.cpuCount : undefined,
        diskSizeInGb: output.diskSizeInGb !== undefined && output.diskSizeInGb !== null ? output.diskSizeInGb : undefined,
        ramSizeInGb: output.ramSizeInGb !== undefined && output.ramSizeInGb !== null ? output.ramSizeInGb : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RelationalDatabase(entry, context);
    });
};
const deserializeAws_json1_1RelationalDatabaseParameter = (output, context) => {
    return {
        allowedValues: output.allowedValues !== undefined && output.allowedValues !== null ? output.allowedValues : undefined,
        applyMethod: output.applyMethod !== undefined && output.applyMethod !== null ? output.applyMethod : undefined,
        applyType: output.applyType !== undefined && output.applyType !== null ? output.applyType : undefined,
        dataType: output.dataType !== undefined && output.dataType !== null ? output.dataType : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        isModifiable: output.isModifiable !== undefined && output.isModifiable !== null ? output.isModifiable : undefined,
        parameterName: output.parameterName !== undefined && output.parameterName !== null ? output.parameterName : undefined,
        parameterValue: output.parameterValue !== undefined && output.parameterValue !== null ? output.parameterValue : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RelationalDatabaseParameter(entry, context);
    });
};
const deserializeAws_json1_1RelationalDatabaseSnapshot = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        engine: output.engine !== undefined && output.engine !== null ? output.engine : undefined,
        engineVersion: output.engineVersion !== undefined && output.engineVersion !== null ? output.engineVersion : undefined,
        fromRelationalDatabaseArn: output.fromRelationalDatabaseArn !== undefined && output.fromRelationalDatabaseArn !== null
            ? output.fromRelationalDatabaseArn
            : undefined,
        fromRelationalDatabaseBlueprintId: output.fromRelationalDatabaseBlueprintId !== undefined && output.fromRelationalDatabaseBlueprintId !== null
            ? output.fromRelationalDatabaseBlueprintId
            : undefined,
        fromRelationalDatabaseBundleId: output.fromRelationalDatabaseBundleId !== undefined && output.fromRelationalDatabaseBundleId !== null
            ? output.fromRelationalDatabaseBundleId
            : undefined,
        fromRelationalDatabaseName: output.fromRelationalDatabaseName !== undefined && output.fromRelationalDatabaseName !== null
            ? output.fromRelationalDatabaseName
            : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        sizeInGb: output.sizeInGb !== undefined && output.sizeInGb !== null ? output.sizeInGb : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1RelationalDatabaseSnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RelationalDatabaseSnapshot(entry, context);
    });
};
const deserializeAws_json1_1ReleaseStaticIpResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1RenewalSummary = (output, context) => {
    return {
        domainValidationRecords: output.domainValidationRecords !== undefined && output.domainValidationRecords !== null
            ? deserializeAws_json1_1DomainValidationRecordList(output.domainValidationRecords, context)
            : undefined,
        renewalStatus: output.renewalStatus !== undefined && output.renewalStatus !== null ? output.renewalStatus : undefined,
        renewalStatusReason: output.renewalStatusReason !== undefined && output.renewalStatusReason !== null
            ? output.renewalStatusReason
            : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null
            ? new Date(Math.round(output.updatedAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1ResetDistributionCacheResult = (output, context) => {
    return {
        createTime: output.createTime !== undefined && output.createTime !== null
            ? new Date(Math.round(output.createTime * 1000))
            : undefined,
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1ResourceLocation = (output, context) => {
    return {
        availabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        regionName: output.regionName !== undefined && output.regionName !== null ? output.regionName : undefined,
    };
};
const deserializeAws_json1_1ResourceRecord = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1SendContactMethodVerificationResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
    };
};
const deserializeAws_json1_1SetIpAddressTypeResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartInstanceResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartRelationalDatabaseResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1StaticIp = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        attachedTo: output.attachedTo !== undefined && output.attachedTo !== null ? output.attachedTo : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
        isAttached: output.isAttached !== undefined && output.isAttached !== null ? output.isAttached : undefined,
        location: output.location !== undefined && output.location !== null
            ? deserializeAws_json1_1ResourceLocation(output.location, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        supportCode: output.supportCode !== undefined && output.supportCode !== null ? output.supportCode : undefined,
    };
};
const deserializeAws_json1_1StaticIpList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StaticIp(entry, context);
    });
};
const deserializeAws_json1_1StopInstanceResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopRelationalDatabaseResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SubjectAlternativeNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
const deserializeAws_json1_1TagResourceResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1TestAlarmResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1UnauthenticatedException = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        docs: output.docs !== undefined && output.docs !== null ? output.docs : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        tip: output.tip !== undefined && output.tip !== null ? output.tip : undefined,
    };
};
const deserializeAws_json1_1UnpeerVpcResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateContainerServiceResult = (output, context) => {
    return {
        containerService: output.containerService !== undefined && output.containerService !== null
            ? deserializeAws_json1_1ContainerService(output.containerService, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateDistributionBundleResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateDistributionResult = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null
            ? deserializeAws_json1_1Operation(output.operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateDomainEntryResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateLoadBalancerAttributeResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateRelationalDatabaseParametersResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateRelationalDatabaseResult = (output, context) => {
    return {
        operations: output.operations !== undefined && output.operations !== null
            ? deserializeAws_json1_1OperationList(output.operations, context)
            : undefined,
    };
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