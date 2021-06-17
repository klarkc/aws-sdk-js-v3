"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInstancesHealthStatusRequest = exports.GetInstanceResponse = exports.Instance = exports.GetInstanceRequest = exports.FilterCondition = exports.DnsProperties = exports.DnsConfigChange = exports.RequestLimitExceeded = exports.DiscoverInstancesResponse = exports.HttpInstanceSummary = exports.HealthStatus = exports.DiscoverInstancesRequest = exports.HealthStatusFilter = exports.InstanceNotFound = exports.DeregisterInstanceResponse = exports.DeregisterInstanceRequest = exports.ServiceNotFound = exports.DeleteServiceResponse = exports.DeleteServiceRequest = exports.ResourceInUse = exports.DeleteNamespaceResponse = exports.DeleteNamespaceRequest = exports.CustomHealthStatus = exports.CustomHealthNotFound = exports.ServiceAlreadyExists = exports.NamespaceNotFound = exports.CreateServiceResponse = exports.Service = exports.ServiceType = exports.CreateServiceRequest = exports.ServiceTypeOption = exports.HealthCheckCustomConfig = exports.HealthCheckConfig = exports.HealthCheckType = exports.DnsConfig = exports.RoutingPolicy = exports.DnsRecord = exports.RecordType = exports.CreatePublicDnsNamespaceResponse = exports.CreatePublicDnsNamespaceRequest = exports.CreatePrivateDnsNamespaceResponse = exports.CreatePrivateDnsNamespaceRequest = exports.TooManyTagsException = exports.ResourceLimitExceeded = exports.NamespaceAlreadyExists = exports.InvalidInput = exports.DuplicateRequest = exports.CreateHttpNamespaceResponse = exports.CreateHttpNamespaceRequest = exports.Tag = void 0;
exports.UpdateServiceResponse = exports.UpdateServiceRequest = exports.ServiceChange = exports.UpdateInstanceCustomHealthStatusRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.RegisterInstanceResponse = exports.RegisterInstanceRequest = exports.ResourceNotFoundException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListServicesResponse = exports.ServiceSummary = exports.ListServicesRequest = exports.ServiceFilter = exports.ServiceFilterName = exports.ListOperationsResponse = exports.OperationSummary = exports.ListOperationsRequest = exports.OperationFilter = exports.OperationFilterName = exports.ListNamespacesResponse = exports.NamespaceSummary = exports.ListNamespacesRequest = exports.NamespaceFilter = exports.NamespaceFilterName = exports.ListInstancesResponse = exports.ListInstancesRequest = exports.InstanceSummary = exports.GetServiceResponse = exports.GetServiceRequest = exports.OperationNotFound = exports.GetOperationResponse = exports.Operation = exports.OperationType = exports.OperationTargetType = exports.OperationStatus = exports.GetOperationRequest = exports.GetNamespaceResponse = exports.Namespace = exports.NamespaceType = exports.NamespaceProperties = exports.HttpProperties = exports.GetNamespaceRequest = exports.GetInstancesHealthStatusResponse = void 0;
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateHttpNamespaceRequest;
(function (CreateHttpNamespaceRequest) {
    /**
     * @internal
     */
    CreateHttpNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHttpNamespaceRequest = exports.CreateHttpNamespaceRequest || (exports.CreateHttpNamespaceRequest = {}));
var CreateHttpNamespaceResponse;
(function (CreateHttpNamespaceResponse) {
    /**
     * @internal
     */
    CreateHttpNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHttpNamespaceResponse = exports.CreateHttpNamespaceResponse || (exports.CreateHttpNamespaceResponse = {}));
var DuplicateRequest;
(function (DuplicateRequest) {
    /**
     * @internal
     */
    DuplicateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateRequest = exports.DuplicateRequest || (exports.DuplicateRequest = {}));
var InvalidInput;
(function (InvalidInput) {
    /**
     * @internal
     */
    InvalidInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInput = exports.InvalidInput || (exports.InvalidInput = {}));
var NamespaceAlreadyExists;
(function (NamespaceAlreadyExists) {
    /**
     * @internal
     */
    NamespaceAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NamespaceAlreadyExists = exports.NamespaceAlreadyExists || (exports.NamespaceAlreadyExists = {}));
var ResourceLimitExceeded;
(function (ResourceLimitExceeded) {
    /**
     * @internal
     */
    ResourceLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceeded = exports.ResourceLimitExceeded || (exports.ResourceLimitExceeded = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var CreatePrivateDnsNamespaceRequest;
(function (CreatePrivateDnsNamespaceRequest) {
    /**
     * @internal
     */
    CreatePrivateDnsNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePrivateDnsNamespaceRequest = exports.CreatePrivateDnsNamespaceRequest || (exports.CreatePrivateDnsNamespaceRequest = {}));
var CreatePrivateDnsNamespaceResponse;
(function (CreatePrivateDnsNamespaceResponse) {
    /**
     * @internal
     */
    CreatePrivateDnsNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePrivateDnsNamespaceResponse = exports.CreatePrivateDnsNamespaceResponse || (exports.CreatePrivateDnsNamespaceResponse = {}));
var CreatePublicDnsNamespaceRequest;
(function (CreatePublicDnsNamespaceRequest) {
    /**
     * @internal
     */
    CreatePublicDnsNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePublicDnsNamespaceRequest = exports.CreatePublicDnsNamespaceRequest || (exports.CreatePublicDnsNamespaceRequest = {}));
var CreatePublicDnsNamespaceResponse;
(function (CreatePublicDnsNamespaceResponse) {
    /**
     * @internal
     */
    CreatePublicDnsNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePublicDnsNamespaceResponse = exports.CreatePublicDnsNamespaceResponse || (exports.CreatePublicDnsNamespaceResponse = {}));
var RecordType;
(function (RecordType) {
    RecordType["A"] = "A";
    RecordType["AAAA"] = "AAAA";
    RecordType["CNAME"] = "CNAME";
    RecordType["SRV"] = "SRV";
})(RecordType = exports.RecordType || (exports.RecordType = {}));
var DnsRecord;
(function (DnsRecord) {
    /**
     * @internal
     */
    DnsRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsRecord = exports.DnsRecord || (exports.DnsRecord = {}));
var RoutingPolicy;
(function (RoutingPolicy) {
    RoutingPolicy["MULTIVALUE"] = "MULTIVALUE";
    RoutingPolicy["WEIGHTED"] = "WEIGHTED";
})(RoutingPolicy = exports.RoutingPolicy || (exports.RoutingPolicy = {}));
var DnsConfig;
(function (DnsConfig) {
    /**
     * @internal
     */
    DnsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsConfig = exports.DnsConfig || (exports.DnsConfig = {}));
var HealthCheckType;
(function (HealthCheckType) {
    HealthCheckType["HTTP"] = "HTTP";
    HealthCheckType["HTTPS"] = "HTTPS";
    HealthCheckType["TCP"] = "TCP";
})(HealthCheckType = exports.HealthCheckType || (exports.HealthCheckType = {}));
var HealthCheckConfig;
(function (HealthCheckConfig) {
    /**
     * @internal
     */
    HealthCheckConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheckConfig = exports.HealthCheckConfig || (exports.HealthCheckConfig = {}));
var HealthCheckCustomConfig;
(function (HealthCheckCustomConfig) {
    /**
     * @internal
     */
    HealthCheckCustomConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheckCustomConfig = exports.HealthCheckCustomConfig || (exports.HealthCheckCustomConfig = {}));
var ServiceTypeOption;
(function (ServiceTypeOption) {
    ServiceTypeOption["HTTP"] = "HTTP";
})(ServiceTypeOption = exports.ServiceTypeOption || (exports.ServiceTypeOption = {}));
var CreateServiceRequest;
(function (CreateServiceRequest) {
    /**
     * @internal
     */
    CreateServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceRequest = exports.CreateServiceRequest || (exports.CreateServiceRequest = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["DNS"] = "DNS";
    ServiceType["DNS_HTTP"] = "DNS_HTTP";
    ServiceType["HTTP"] = "HTTP";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
var Service;
(function (Service) {
    /**
     * @internal
     */
    Service.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Service = exports.Service || (exports.Service = {}));
var CreateServiceResponse;
(function (CreateServiceResponse) {
    /**
     * @internal
     */
    CreateServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceResponse = exports.CreateServiceResponse || (exports.CreateServiceResponse = {}));
var NamespaceNotFound;
(function (NamespaceNotFound) {
    /**
     * @internal
     */
    NamespaceNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NamespaceNotFound = exports.NamespaceNotFound || (exports.NamespaceNotFound = {}));
var ServiceAlreadyExists;
(function (ServiceAlreadyExists) {
    /**
     * @internal
     */
    ServiceAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceAlreadyExists = exports.ServiceAlreadyExists || (exports.ServiceAlreadyExists = {}));
var CustomHealthNotFound;
(function (CustomHealthNotFound) {
    /**
     * @internal
     */
    CustomHealthNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomHealthNotFound = exports.CustomHealthNotFound || (exports.CustomHealthNotFound = {}));
var CustomHealthStatus;
(function (CustomHealthStatus) {
    CustomHealthStatus["HEALTHY"] = "HEALTHY";
    CustomHealthStatus["UNHEALTHY"] = "UNHEALTHY";
})(CustomHealthStatus = exports.CustomHealthStatus || (exports.CustomHealthStatus = {}));
var DeleteNamespaceRequest;
(function (DeleteNamespaceRequest) {
    /**
     * @internal
     */
    DeleteNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNamespaceRequest = exports.DeleteNamespaceRequest || (exports.DeleteNamespaceRequest = {}));
var DeleteNamespaceResponse;
(function (DeleteNamespaceResponse) {
    /**
     * @internal
     */
    DeleteNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNamespaceResponse = exports.DeleteNamespaceResponse || (exports.DeleteNamespaceResponse = {}));
var ResourceInUse;
(function (ResourceInUse) {
    /**
     * @internal
     */
    ResourceInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUse = exports.ResourceInUse || (exports.ResourceInUse = {}));
var DeleteServiceRequest;
(function (DeleteServiceRequest) {
    /**
     * @internal
     */
    DeleteServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceRequest = exports.DeleteServiceRequest || (exports.DeleteServiceRequest = {}));
var DeleteServiceResponse;
(function (DeleteServiceResponse) {
    /**
     * @internal
     */
    DeleteServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceResponse = exports.DeleteServiceResponse || (exports.DeleteServiceResponse = {}));
var ServiceNotFound;
(function (ServiceNotFound) {
    /**
     * @internal
     */
    ServiceNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNotFound = exports.ServiceNotFound || (exports.ServiceNotFound = {}));
var DeregisterInstanceRequest;
(function (DeregisterInstanceRequest) {
    /**
     * @internal
     */
    DeregisterInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterInstanceRequest = exports.DeregisterInstanceRequest || (exports.DeregisterInstanceRequest = {}));
var DeregisterInstanceResponse;
(function (DeregisterInstanceResponse) {
    /**
     * @internal
     */
    DeregisterInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterInstanceResponse = exports.DeregisterInstanceResponse || (exports.DeregisterInstanceResponse = {}));
var InstanceNotFound;
(function (InstanceNotFound) {
    /**
     * @internal
     */
    InstanceNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNotFound = exports.InstanceNotFound || (exports.InstanceNotFound = {}));
var HealthStatusFilter;
(function (HealthStatusFilter) {
    HealthStatusFilter["ALL"] = "ALL";
    HealthStatusFilter["HEALTHY"] = "HEALTHY";
    HealthStatusFilter["HEALTHY_OR_ELSE_ALL"] = "HEALTHY_OR_ELSE_ALL";
    HealthStatusFilter["UNHEALTHY"] = "UNHEALTHY";
})(HealthStatusFilter = exports.HealthStatusFilter || (exports.HealthStatusFilter = {}));
var DiscoverInstancesRequest;
(function (DiscoverInstancesRequest) {
    /**
     * @internal
     */
    DiscoverInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscoverInstancesRequest = exports.DiscoverInstancesRequest || (exports.DiscoverInstancesRequest = {}));
var HealthStatus;
(function (HealthStatus) {
    HealthStatus["HEALTHY"] = "HEALTHY";
    HealthStatus["UNHEALTHY"] = "UNHEALTHY";
    HealthStatus["UNKNOWN"] = "UNKNOWN";
})(HealthStatus = exports.HealthStatus || (exports.HealthStatus = {}));
var HttpInstanceSummary;
(function (HttpInstanceSummary) {
    /**
     * @internal
     */
    HttpInstanceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpInstanceSummary = exports.HttpInstanceSummary || (exports.HttpInstanceSummary = {}));
var DiscoverInstancesResponse;
(function (DiscoverInstancesResponse) {
    /**
     * @internal
     */
    DiscoverInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscoverInstancesResponse = exports.DiscoverInstancesResponse || (exports.DiscoverInstancesResponse = {}));
var RequestLimitExceeded;
(function (RequestLimitExceeded) {
    /**
     * @internal
     */
    RequestLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestLimitExceeded = exports.RequestLimitExceeded || (exports.RequestLimitExceeded = {}));
var DnsConfigChange;
(function (DnsConfigChange) {
    /**
     * @internal
     */
    DnsConfigChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsConfigChange = exports.DnsConfigChange || (exports.DnsConfigChange = {}));
var DnsProperties;
(function (DnsProperties) {
    /**
     * @internal
     */
    DnsProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsProperties = exports.DnsProperties || (exports.DnsProperties = {}));
var FilterCondition;
(function (FilterCondition) {
    FilterCondition["BETWEEN"] = "BETWEEN";
    FilterCondition["EQ"] = "EQ";
    FilterCondition["IN"] = "IN";
})(FilterCondition = exports.FilterCondition || (exports.FilterCondition = {}));
var GetInstanceRequest;
(function (GetInstanceRequest) {
    /**
     * @internal
     */
    GetInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceRequest = exports.GetInstanceRequest || (exports.GetInstanceRequest = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var GetInstanceResponse;
(function (GetInstanceResponse) {
    /**
     * @internal
     */
    GetInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceResponse = exports.GetInstanceResponse || (exports.GetInstanceResponse = {}));
var GetInstancesHealthStatusRequest;
(function (GetInstancesHealthStatusRequest) {
    /**
     * @internal
     */
    GetInstancesHealthStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstancesHealthStatusRequest = exports.GetInstancesHealthStatusRequest || (exports.GetInstancesHealthStatusRequest = {}));
var GetInstancesHealthStatusResponse;
(function (GetInstancesHealthStatusResponse) {
    /**
     * @internal
     */
    GetInstancesHealthStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstancesHealthStatusResponse = exports.GetInstancesHealthStatusResponse || (exports.GetInstancesHealthStatusResponse = {}));
var GetNamespaceRequest;
(function (GetNamespaceRequest) {
    /**
     * @internal
     */
    GetNamespaceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNamespaceRequest = exports.GetNamespaceRequest || (exports.GetNamespaceRequest = {}));
var HttpProperties;
(function (HttpProperties) {
    /**
     * @internal
     */
    HttpProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpProperties = exports.HttpProperties || (exports.HttpProperties = {}));
var NamespaceProperties;
(function (NamespaceProperties) {
    /**
     * @internal
     */
    NamespaceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NamespaceProperties = exports.NamespaceProperties || (exports.NamespaceProperties = {}));
var NamespaceType;
(function (NamespaceType) {
    NamespaceType["DNS_PRIVATE"] = "DNS_PRIVATE";
    NamespaceType["DNS_PUBLIC"] = "DNS_PUBLIC";
    NamespaceType["HTTP"] = "HTTP";
})(NamespaceType = exports.NamespaceType || (exports.NamespaceType = {}));
var Namespace;
(function (Namespace) {
    /**
     * @internal
     */
    Namespace.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Namespace = exports.Namespace || (exports.Namespace = {}));
var GetNamespaceResponse;
(function (GetNamespaceResponse) {
    /**
     * @internal
     */
    GetNamespaceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNamespaceResponse = exports.GetNamespaceResponse || (exports.GetNamespaceResponse = {}));
var GetOperationRequest;
(function (GetOperationRequest) {
    /**
     * @internal
     */
    GetOperationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationRequest = exports.GetOperationRequest || (exports.GetOperationRequest = {}));
var OperationStatus;
(function (OperationStatus) {
    OperationStatus["FAIL"] = "FAIL";
    OperationStatus["PENDING"] = "PENDING";
    OperationStatus["SUBMITTED"] = "SUBMITTED";
    OperationStatus["SUCCESS"] = "SUCCESS";
})(OperationStatus = exports.OperationStatus || (exports.OperationStatus = {}));
var OperationTargetType;
(function (OperationTargetType) {
    OperationTargetType["INSTANCE"] = "INSTANCE";
    OperationTargetType["NAMESPACE"] = "NAMESPACE";
    OperationTargetType["SERVICE"] = "SERVICE";
})(OperationTargetType = exports.OperationTargetType || (exports.OperationTargetType = {}));
var OperationType;
(function (OperationType) {
    OperationType["CREATE_NAMESPACE"] = "CREATE_NAMESPACE";
    OperationType["DELETE_NAMESPACE"] = "DELETE_NAMESPACE";
    OperationType["DEREGISTER_INSTANCE"] = "DEREGISTER_INSTANCE";
    OperationType["REGISTER_INSTANCE"] = "REGISTER_INSTANCE";
    OperationType["UPDATE_SERVICE"] = "UPDATE_SERVICE";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var Operation;
(function (Operation) {
    /**
     * @internal
     */
    Operation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Operation = exports.Operation || (exports.Operation = {}));
var GetOperationResponse;
(function (GetOperationResponse) {
    /**
     * @internal
     */
    GetOperationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationResponse = exports.GetOperationResponse || (exports.GetOperationResponse = {}));
var OperationNotFound;
(function (OperationNotFound) {
    /**
     * @internal
     */
    OperationNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotFound = exports.OperationNotFound || (exports.OperationNotFound = {}));
var GetServiceRequest;
(function (GetServiceRequest) {
    /**
     * @internal
     */
    GetServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceRequest = exports.GetServiceRequest || (exports.GetServiceRequest = {}));
var GetServiceResponse;
(function (GetServiceResponse) {
    /**
     * @internal
     */
    GetServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceResponse = exports.GetServiceResponse || (exports.GetServiceResponse = {}));
var InstanceSummary;
(function (InstanceSummary) {
    /**
     * @internal
     */
    InstanceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceSummary = exports.InstanceSummary || (exports.InstanceSummary = {}));
var ListInstancesRequest;
(function (ListInstancesRequest) {
    /**
     * @internal
     */
    ListInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstancesRequest = exports.ListInstancesRequest || (exports.ListInstancesRequest = {}));
var ListInstancesResponse;
(function (ListInstancesResponse) {
    /**
     * @internal
     */
    ListInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstancesResponse = exports.ListInstancesResponse || (exports.ListInstancesResponse = {}));
var NamespaceFilterName;
(function (NamespaceFilterName) {
    NamespaceFilterName["TYPE"] = "TYPE";
})(NamespaceFilterName = exports.NamespaceFilterName || (exports.NamespaceFilterName = {}));
var NamespaceFilter;
(function (NamespaceFilter) {
    /**
     * @internal
     */
    NamespaceFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NamespaceFilter = exports.NamespaceFilter || (exports.NamespaceFilter = {}));
var ListNamespacesRequest;
(function (ListNamespacesRequest) {
    /**
     * @internal
     */
    ListNamespacesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNamespacesRequest = exports.ListNamespacesRequest || (exports.ListNamespacesRequest = {}));
var NamespaceSummary;
(function (NamespaceSummary) {
    /**
     * @internal
     */
    NamespaceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NamespaceSummary = exports.NamespaceSummary || (exports.NamespaceSummary = {}));
var ListNamespacesResponse;
(function (ListNamespacesResponse) {
    /**
     * @internal
     */
    ListNamespacesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNamespacesResponse = exports.ListNamespacesResponse || (exports.ListNamespacesResponse = {}));
var OperationFilterName;
(function (OperationFilterName) {
    OperationFilterName["NAMESPACE_ID"] = "NAMESPACE_ID";
    OperationFilterName["SERVICE_ID"] = "SERVICE_ID";
    OperationFilterName["STATUS"] = "STATUS";
    OperationFilterName["TYPE"] = "TYPE";
    OperationFilterName["UPDATE_DATE"] = "UPDATE_DATE";
})(OperationFilterName = exports.OperationFilterName || (exports.OperationFilterName = {}));
var OperationFilter;
(function (OperationFilter) {
    /**
     * @internal
     */
    OperationFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationFilter = exports.OperationFilter || (exports.OperationFilter = {}));
var ListOperationsRequest;
(function (ListOperationsRequest) {
    /**
     * @internal
     */
    ListOperationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOperationsRequest = exports.ListOperationsRequest || (exports.ListOperationsRequest = {}));
var OperationSummary;
(function (OperationSummary) {
    /**
     * @internal
     */
    OperationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationSummary = exports.OperationSummary || (exports.OperationSummary = {}));
var ListOperationsResponse;
(function (ListOperationsResponse) {
    /**
     * @internal
     */
    ListOperationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOperationsResponse = exports.ListOperationsResponse || (exports.ListOperationsResponse = {}));
var ServiceFilterName;
(function (ServiceFilterName) {
    ServiceFilterName["NAMESPACE_ID"] = "NAMESPACE_ID";
})(ServiceFilterName = exports.ServiceFilterName || (exports.ServiceFilterName = {}));
var ServiceFilter;
(function (ServiceFilter) {
    /**
     * @internal
     */
    ServiceFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceFilter = exports.ServiceFilter || (exports.ServiceFilter = {}));
var ListServicesRequest;
(function (ListServicesRequest) {
    /**
     * @internal
     */
    ListServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServicesRequest = exports.ListServicesRequest || (exports.ListServicesRequest = {}));
var ServiceSummary;
(function (ServiceSummary) {
    /**
     * @internal
     */
    ServiceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceSummary = exports.ServiceSummary || (exports.ServiceSummary = {}));
var ListServicesResponse;
(function (ListServicesResponse) {
    /**
     * @internal
     */
    ListServicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServicesResponse = exports.ListServicesResponse || (exports.ListServicesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var RegisterInstanceRequest;
(function (RegisterInstanceRequest) {
    /**
     * @internal
     */
    RegisterInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterInstanceRequest = exports.RegisterInstanceRequest || (exports.RegisterInstanceRequest = {}));
var RegisterInstanceResponse;
(function (RegisterInstanceResponse) {
    /**
     * @internal
     */
    RegisterInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterInstanceResponse = exports.RegisterInstanceResponse || (exports.RegisterInstanceResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateInstanceCustomHealthStatusRequest;
(function (UpdateInstanceCustomHealthStatusRequest) {
    /**
     * @internal
     */
    UpdateInstanceCustomHealthStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceCustomHealthStatusRequest = exports.UpdateInstanceCustomHealthStatusRequest || (exports.UpdateInstanceCustomHealthStatusRequest = {}));
var ServiceChange;
(function (ServiceChange) {
    /**
     * @internal
     */
    ServiceChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceChange = exports.ServiceChange || (exports.ServiceChange = {}));
var UpdateServiceRequest;
(function (UpdateServiceRequest) {
    /**
     * @internal
     */
    UpdateServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceRequest = exports.UpdateServiceRequest || (exports.UpdateServiceRequest = {}));
var UpdateServiceResponse;
(function (UpdateServiceResponse) {
    /**
     * @internal
     */
    UpdateServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceResponse = exports.UpdateServiceResponse || (exports.UpdateServiceResponse = {}));
//# sourceMappingURL=models_0.js.map