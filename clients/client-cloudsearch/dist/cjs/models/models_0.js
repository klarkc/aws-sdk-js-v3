"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteIndexFieldResponse = exports.DeleteIndexFieldRequest = exports.DeleteExpressionResponse = exports.DeleteExpressionRequest = exports.DeleteDomainResponse = exports.DeleteDomainRequest = exports.DeleteAnalysisSchemeResponse = exports.DeleteAnalysisSchemeRequest = exports.DefineSuggesterResponse = exports.SuggesterStatus = exports.DefineSuggesterRequest = exports.Suggester = exports.DocumentSuggesterOptions = exports.DefineIndexFieldResponse = exports.IndexFieldStatus = exports.DefineIndexFieldRequest = exports.IndexField = exports.TextOptions = exports.TextArrayOptions = exports.LiteralOptions = exports.LiteralArrayOptions = exports.LatLonOptions = exports.IntOptions = exports.IntArrayOptions = exports.DoubleOptions = exports.DoubleArrayOptions = exports.DateOptions = exports.DateArrayOptions = exports.DefineExpressionResponse = exports.ExpressionStatus = exports.DefineExpressionRequest = exports.Expression = exports.InvalidTypeException = exports.DefineAnalysisSchemeResponse = exports.AnalysisSchemeStatus = exports.OptionStatus = exports.DefineAnalysisSchemeRequest = exports.AnalysisScheme = exports.AnalysisOptions = exports.LimitExceededException = exports.CreateDomainResponse = exports.DomainStatus = exports.Limits = exports.ServiceEndpoint = exports.CreateDomainRequest = exports.ResourceNotFoundException = exports.InternalException = exports.BuildSuggestersResponse = exports.BuildSuggestersRequest = exports.BaseException = void 0;
exports.UpdateServiceAccessPoliciesResponse = exports.UpdateServiceAccessPoliciesRequest = exports.UpdateScalingParametersResponse = exports.UpdateScalingParametersRequest = exports.UpdateDomainEndpointOptionsResponse = exports.UpdateDomainEndpointOptionsRequest = exports.ValidationException = exports.UpdateAvailabilityOptionsResponse = exports.UpdateAvailabilityOptionsRequest = exports.ListDomainNamesResponse = exports.IndexDocumentsResponse = exports.IndexDocumentsRequest = exports.DescribeSuggestersResponse = exports.DescribeSuggestersRequest = exports.DescribeServiceAccessPoliciesResponse = exports.AccessPoliciesStatus = exports.DescribeServiceAccessPoliciesRequest = exports.DescribeScalingParametersResponse = exports.ScalingParametersStatus = exports.ScalingParameters = exports.DescribeScalingParametersRequest = exports.DescribeIndexFieldsResponse = exports.DescribeIndexFieldsRequest = exports.DescribeExpressionsResponse = exports.DescribeExpressionsRequest = exports.DescribeDomainsResponse = exports.DescribeDomainsRequest = exports.DescribeDomainEndpointOptionsResponse = exports.DomainEndpointOptionsStatus = exports.DomainEndpointOptions = exports.TLSSecurityPolicy = exports.DescribeDomainEndpointOptionsRequest = exports.DisabledOperationException = exports.DescribeAvailabilityOptionsResponse = exports.AvailabilityOptionsStatus = exports.DescribeAvailabilityOptionsRequest = exports.DescribeAnalysisSchemesResponse = exports.DescribeAnalysisSchemesRequest = exports.DeleteSuggesterResponse = exports.DeleteSuggesterRequest = void 0;
var BaseException;
(function (BaseException) {
    /**
     * @internal
     */
    BaseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BaseException = exports.BaseException || (exports.BaseException = {}));
var BuildSuggestersRequest;
(function (BuildSuggestersRequest) {
    /**
     * @internal
     */
    BuildSuggestersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildSuggestersRequest = exports.BuildSuggestersRequest || (exports.BuildSuggestersRequest = {}));
var BuildSuggestersResponse;
(function (BuildSuggestersResponse) {
    /**
     * @internal
     */
    BuildSuggestersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BuildSuggestersResponse = exports.BuildSuggestersResponse || (exports.BuildSuggestersResponse = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var ServiceEndpoint;
(function (ServiceEndpoint) {
    /**
     * @internal
     */
    ServiceEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceEndpoint = exports.ServiceEndpoint || (exports.ServiceEndpoint = {}));
var Limits;
(function (Limits) {
    /**
     * @internal
     */
    Limits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Limits = exports.Limits || (exports.Limits = {}));
var DomainStatus;
(function (DomainStatus) {
    /**
     * @internal
     */
    DomainStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var CreateDomainResponse;
(function (CreateDomainResponse) {
    /**
     * @internal
     */
    CreateDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainResponse = exports.CreateDomainResponse || (exports.CreateDomainResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var AnalysisOptions;
(function (AnalysisOptions) {
    /**
     * @internal
     */
    AnalysisOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisOptions = exports.AnalysisOptions || (exports.AnalysisOptions = {}));
var AnalysisScheme;
(function (AnalysisScheme) {
    /**
     * @internal
     */
    AnalysisScheme.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisScheme = exports.AnalysisScheme || (exports.AnalysisScheme = {}));
var DefineAnalysisSchemeRequest;
(function (DefineAnalysisSchemeRequest) {
    /**
     * @internal
     */
    DefineAnalysisSchemeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineAnalysisSchemeRequest = exports.DefineAnalysisSchemeRequest || (exports.DefineAnalysisSchemeRequest = {}));
var OptionStatus;
(function (OptionStatus) {
    /**
     * @internal
     */
    OptionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionStatus = exports.OptionStatus || (exports.OptionStatus = {}));
var AnalysisSchemeStatus;
(function (AnalysisSchemeStatus) {
    /**
     * @internal
     */
    AnalysisSchemeStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnalysisSchemeStatus = exports.AnalysisSchemeStatus || (exports.AnalysisSchemeStatus = {}));
var DefineAnalysisSchemeResponse;
(function (DefineAnalysisSchemeResponse) {
    /**
     * @internal
     */
    DefineAnalysisSchemeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineAnalysisSchemeResponse = exports.DefineAnalysisSchemeResponse || (exports.DefineAnalysisSchemeResponse = {}));
var InvalidTypeException;
(function (InvalidTypeException) {
    /**
     * @internal
     */
    InvalidTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTypeException = exports.InvalidTypeException || (exports.InvalidTypeException = {}));
var Expression;
(function (Expression) {
    /**
     * @internal
     */
    Expression.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Expression = exports.Expression || (exports.Expression = {}));
var DefineExpressionRequest;
(function (DefineExpressionRequest) {
    /**
     * @internal
     */
    DefineExpressionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineExpressionRequest = exports.DefineExpressionRequest || (exports.DefineExpressionRequest = {}));
var ExpressionStatus;
(function (ExpressionStatus) {
    /**
     * @internal
     */
    ExpressionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExpressionStatus = exports.ExpressionStatus || (exports.ExpressionStatus = {}));
var DefineExpressionResponse;
(function (DefineExpressionResponse) {
    /**
     * @internal
     */
    DefineExpressionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineExpressionResponse = exports.DefineExpressionResponse || (exports.DefineExpressionResponse = {}));
var DateArrayOptions;
(function (DateArrayOptions) {
    /**
     * @internal
     */
    DateArrayOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateArrayOptions = exports.DateArrayOptions || (exports.DateArrayOptions = {}));
var DateOptions;
(function (DateOptions) {
    /**
     * @internal
     */
    DateOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateOptions = exports.DateOptions || (exports.DateOptions = {}));
var DoubleArrayOptions;
(function (DoubleArrayOptions) {
    /**
     * @internal
     */
    DoubleArrayOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DoubleArrayOptions = exports.DoubleArrayOptions || (exports.DoubleArrayOptions = {}));
var DoubleOptions;
(function (DoubleOptions) {
    /**
     * @internal
     */
    DoubleOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DoubleOptions = exports.DoubleOptions || (exports.DoubleOptions = {}));
var IntArrayOptions;
(function (IntArrayOptions) {
    /**
     * @internal
     */
    IntArrayOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntArrayOptions = exports.IntArrayOptions || (exports.IntArrayOptions = {}));
var IntOptions;
(function (IntOptions) {
    /**
     * @internal
     */
    IntOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntOptions = exports.IntOptions || (exports.IntOptions = {}));
var LatLonOptions;
(function (LatLonOptions) {
    /**
     * @internal
     */
    LatLonOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LatLonOptions = exports.LatLonOptions || (exports.LatLonOptions = {}));
var LiteralArrayOptions;
(function (LiteralArrayOptions) {
    /**
     * @internal
     */
    LiteralArrayOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LiteralArrayOptions = exports.LiteralArrayOptions || (exports.LiteralArrayOptions = {}));
var LiteralOptions;
(function (LiteralOptions) {
    /**
     * @internal
     */
    LiteralOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LiteralOptions = exports.LiteralOptions || (exports.LiteralOptions = {}));
var TextArrayOptions;
(function (TextArrayOptions) {
    /**
     * @internal
     */
    TextArrayOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextArrayOptions = exports.TextArrayOptions || (exports.TextArrayOptions = {}));
var TextOptions;
(function (TextOptions) {
    /**
     * @internal
     */
    TextOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextOptions = exports.TextOptions || (exports.TextOptions = {}));
var IndexField;
(function (IndexField) {
    /**
     * @internal
     */
    IndexField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexField = exports.IndexField || (exports.IndexField = {}));
var DefineIndexFieldRequest;
(function (DefineIndexFieldRequest) {
    /**
     * @internal
     */
    DefineIndexFieldRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineIndexFieldRequest = exports.DefineIndexFieldRequest || (exports.DefineIndexFieldRequest = {}));
var IndexFieldStatus;
(function (IndexFieldStatus) {
    /**
     * @internal
     */
    IndexFieldStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexFieldStatus = exports.IndexFieldStatus || (exports.IndexFieldStatus = {}));
var DefineIndexFieldResponse;
(function (DefineIndexFieldResponse) {
    /**
     * @internal
     */
    DefineIndexFieldResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineIndexFieldResponse = exports.DefineIndexFieldResponse || (exports.DefineIndexFieldResponse = {}));
var DocumentSuggesterOptions;
(function (DocumentSuggesterOptions) {
    /**
     * @internal
     */
    DocumentSuggesterOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentSuggesterOptions = exports.DocumentSuggesterOptions || (exports.DocumentSuggesterOptions = {}));
var Suggester;
(function (Suggester) {
    /**
     * @internal
     */
    Suggester.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Suggester = exports.Suggester || (exports.Suggester = {}));
var DefineSuggesterRequest;
(function (DefineSuggesterRequest) {
    /**
     * @internal
     */
    DefineSuggesterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineSuggesterRequest = exports.DefineSuggesterRequest || (exports.DefineSuggesterRequest = {}));
var SuggesterStatus;
(function (SuggesterStatus) {
    /**
     * @internal
     */
    SuggesterStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuggesterStatus = exports.SuggesterStatus || (exports.SuggesterStatus = {}));
var DefineSuggesterResponse;
(function (DefineSuggesterResponse) {
    /**
     * @internal
     */
    DefineSuggesterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefineSuggesterResponse = exports.DefineSuggesterResponse || (exports.DefineSuggesterResponse = {}));
var DeleteAnalysisSchemeRequest;
(function (DeleteAnalysisSchemeRequest) {
    /**
     * @internal
     */
    DeleteAnalysisSchemeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnalysisSchemeRequest = exports.DeleteAnalysisSchemeRequest || (exports.DeleteAnalysisSchemeRequest = {}));
var DeleteAnalysisSchemeResponse;
(function (DeleteAnalysisSchemeResponse) {
    /**
     * @internal
     */
    DeleteAnalysisSchemeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnalysisSchemeResponse = exports.DeleteAnalysisSchemeResponse || (exports.DeleteAnalysisSchemeResponse = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteDomainResponse;
(function (DeleteDomainResponse) {
    /**
     * @internal
     */
    DeleteDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainResponse = exports.DeleteDomainResponse || (exports.DeleteDomainResponse = {}));
var DeleteExpressionRequest;
(function (DeleteExpressionRequest) {
    /**
     * @internal
     */
    DeleteExpressionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExpressionRequest = exports.DeleteExpressionRequest || (exports.DeleteExpressionRequest = {}));
var DeleteExpressionResponse;
(function (DeleteExpressionResponse) {
    /**
     * @internal
     */
    DeleteExpressionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteExpressionResponse = exports.DeleteExpressionResponse || (exports.DeleteExpressionResponse = {}));
var DeleteIndexFieldRequest;
(function (DeleteIndexFieldRequest) {
    /**
     * @internal
     */
    DeleteIndexFieldRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIndexFieldRequest = exports.DeleteIndexFieldRequest || (exports.DeleteIndexFieldRequest = {}));
var DeleteIndexFieldResponse;
(function (DeleteIndexFieldResponse) {
    /**
     * @internal
     */
    DeleteIndexFieldResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIndexFieldResponse = exports.DeleteIndexFieldResponse || (exports.DeleteIndexFieldResponse = {}));
var DeleteSuggesterRequest;
(function (DeleteSuggesterRequest) {
    /**
     * @internal
     */
    DeleteSuggesterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSuggesterRequest = exports.DeleteSuggesterRequest || (exports.DeleteSuggesterRequest = {}));
var DeleteSuggesterResponse;
(function (DeleteSuggesterResponse) {
    /**
     * @internal
     */
    DeleteSuggesterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSuggesterResponse = exports.DeleteSuggesterResponse || (exports.DeleteSuggesterResponse = {}));
var DescribeAnalysisSchemesRequest;
(function (DescribeAnalysisSchemesRequest) {
    /**
     * @internal
     */
    DescribeAnalysisSchemesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnalysisSchemesRequest = exports.DescribeAnalysisSchemesRequest || (exports.DescribeAnalysisSchemesRequest = {}));
var DescribeAnalysisSchemesResponse;
(function (DescribeAnalysisSchemesResponse) {
    /**
     * @internal
     */
    DescribeAnalysisSchemesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnalysisSchemesResponse = exports.DescribeAnalysisSchemesResponse || (exports.DescribeAnalysisSchemesResponse = {}));
var DescribeAvailabilityOptionsRequest;
(function (DescribeAvailabilityOptionsRequest) {
    /**
     * @internal
     */
    DescribeAvailabilityOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailabilityOptionsRequest = exports.DescribeAvailabilityOptionsRequest || (exports.DescribeAvailabilityOptionsRequest = {}));
var AvailabilityOptionsStatus;
(function (AvailabilityOptionsStatus) {
    /**
     * @internal
     */
    AvailabilityOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityOptionsStatus = exports.AvailabilityOptionsStatus || (exports.AvailabilityOptionsStatus = {}));
var DescribeAvailabilityOptionsResponse;
(function (DescribeAvailabilityOptionsResponse) {
    /**
     * @internal
     */
    DescribeAvailabilityOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailabilityOptionsResponse = exports.DescribeAvailabilityOptionsResponse || (exports.DescribeAvailabilityOptionsResponse = {}));
var DisabledOperationException;
(function (DisabledOperationException) {
    /**
     * @internal
     */
    DisabledOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisabledOperationException = exports.DisabledOperationException || (exports.DisabledOperationException = {}));
var DescribeDomainEndpointOptionsRequest;
(function (DescribeDomainEndpointOptionsRequest) {
    /**
     * @internal
     */
    DescribeDomainEndpointOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainEndpointOptionsRequest = exports.DescribeDomainEndpointOptionsRequest || (exports.DescribeDomainEndpointOptionsRequest = {}));
var TLSSecurityPolicy;
(function (TLSSecurityPolicy) {
    TLSSecurityPolicy["POLICY_MIN_TLS_1_0_2019_07"] = "Policy-Min-TLS-1-0-2019-07";
    TLSSecurityPolicy["POLICY_MIN_TLS_1_2_2019_07"] = "Policy-Min-TLS-1-2-2019-07";
})(TLSSecurityPolicy = exports.TLSSecurityPolicy || (exports.TLSSecurityPolicy = {}));
var DomainEndpointOptions;
(function (DomainEndpointOptions) {
    /**
     * @internal
     */
    DomainEndpointOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainEndpointOptions = exports.DomainEndpointOptions || (exports.DomainEndpointOptions = {}));
var DomainEndpointOptionsStatus;
(function (DomainEndpointOptionsStatus) {
    /**
     * @internal
     */
    DomainEndpointOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainEndpointOptionsStatus = exports.DomainEndpointOptionsStatus || (exports.DomainEndpointOptionsStatus = {}));
var DescribeDomainEndpointOptionsResponse;
(function (DescribeDomainEndpointOptionsResponse) {
    /**
     * @internal
     */
    DescribeDomainEndpointOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainEndpointOptionsResponse = exports.DescribeDomainEndpointOptionsResponse || (exports.DescribeDomainEndpointOptionsResponse = {}));
var DescribeDomainsRequest;
(function (DescribeDomainsRequest) {
    /**
     * @internal
     */
    DescribeDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainsRequest = exports.DescribeDomainsRequest || (exports.DescribeDomainsRequest = {}));
var DescribeDomainsResponse;
(function (DescribeDomainsResponse) {
    /**
     * @internal
     */
    DescribeDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainsResponse = exports.DescribeDomainsResponse || (exports.DescribeDomainsResponse = {}));
var DescribeExpressionsRequest;
(function (DescribeExpressionsRequest) {
    /**
     * @internal
     */
    DescribeExpressionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExpressionsRequest = exports.DescribeExpressionsRequest || (exports.DescribeExpressionsRequest = {}));
var DescribeExpressionsResponse;
(function (DescribeExpressionsResponse) {
    /**
     * @internal
     */
    DescribeExpressionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExpressionsResponse = exports.DescribeExpressionsResponse || (exports.DescribeExpressionsResponse = {}));
var DescribeIndexFieldsRequest;
(function (DescribeIndexFieldsRequest) {
    /**
     * @internal
     */
    DescribeIndexFieldsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIndexFieldsRequest = exports.DescribeIndexFieldsRequest || (exports.DescribeIndexFieldsRequest = {}));
var DescribeIndexFieldsResponse;
(function (DescribeIndexFieldsResponse) {
    /**
     * @internal
     */
    DescribeIndexFieldsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIndexFieldsResponse = exports.DescribeIndexFieldsResponse || (exports.DescribeIndexFieldsResponse = {}));
var DescribeScalingParametersRequest;
(function (DescribeScalingParametersRequest) {
    /**
     * @internal
     */
    DescribeScalingParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScalingParametersRequest = exports.DescribeScalingParametersRequest || (exports.DescribeScalingParametersRequest = {}));
var ScalingParameters;
(function (ScalingParameters) {
    /**
     * @internal
     */
    ScalingParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingParameters = exports.ScalingParameters || (exports.ScalingParameters = {}));
var ScalingParametersStatus;
(function (ScalingParametersStatus) {
    /**
     * @internal
     */
    ScalingParametersStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingParametersStatus = exports.ScalingParametersStatus || (exports.ScalingParametersStatus = {}));
var DescribeScalingParametersResponse;
(function (DescribeScalingParametersResponse) {
    /**
     * @internal
     */
    DescribeScalingParametersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScalingParametersResponse = exports.DescribeScalingParametersResponse || (exports.DescribeScalingParametersResponse = {}));
var DescribeServiceAccessPoliciesRequest;
(function (DescribeServiceAccessPoliciesRequest) {
    /**
     * @internal
     */
    DescribeServiceAccessPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceAccessPoliciesRequest = exports.DescribeServiceAccessPoliciesRequest || (exports.DescribeServiceAccessPoliciesRequest = {}));
var AccessPoliciesStatus;
(function (AccessPoliciesStatus) {
    /**
     * @internal
     */
    AccessPoliciesStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPoliciesStatus = exports.AccessPoliciesStatus || (exports.AccessPoliciesStatus = {}));
var DescribeServiceAccessPoliciesResponse;
(function (DescribeServiceAccessPoliciesResponse) {
    /**
     * @internal
     */
    DescribeServiceAccessPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceAccessPoliciesResponse = exports.DescribeServiceAccessPoliciesResponse || (exports.DescribeServiceAccessPoliciesResponse = {}));
var DescribeSuggestersRequest;
(function (DescribeSuggestersRequest) {
    /**
     * @internal
     */
    DescribeSuggestersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSuggestersRequest = exports.DescribeSuggestersRequest || (exports.DescribeSuggestersRequest = {}));
var DescribeSuggestersResponse;
(function (DescribeSuggestersResponse) {
    /**
     * @internal
     */
    DescribeSuggestersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSuggestersResponse = exports.DescribeSuggestersResponse || (exports.DescribeSuggestersResponse = {}));
var IndexDocumentsRequest;
(function (IndexDocumentsRequest) {
    /**
     * @internal
     */
    IndexDocumentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexDocumentsRequest = exports.IndexDocumentsRequest || (exports.IndexDocumentsRequest = {}));
var IndexDocumentsResponse;
(function (IndexDocumentsResponse) {
    /**
     * @internal
     */
    IndexDocumentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexDocumentsResponse = exports.IndexDocumentsResponse || (exports.IndexDocumentsResponse = {}));
var ListDomainNamesResponse;
(function (ListDomainNamesResponse) {
    /**
     * @internal
     */
    ListDomainNamesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainNamesResponse = exports.ListDomainNamesResponse || (exports.ListDomainNamesResponse = {}));
var UpdateAvailabilityOptionsRequest;
(function (UpdateAvailabilityOptionsRequest) {
    /**
     * @internal
     */
    UpdateAvailabilityOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAvailabilityOptionsRequest = exports.UpdateAvailabilityOptionsRequest || (exports.UpdateAvailabilityOptionsRequest = {}));
var UpdateAvailabilityOptionsResponse;
(function (UpdateAvailabilityOptionsResponse) {
    /**
     * @internal
     */
    UpdateAvailabilityOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAvailabilityOptionsResponse = exports.UpdateAvailabilityOptionsResponse || (exports.UpdateAvailabilityOptionsResponse = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var UpdateDomainEndpointOptionsRequest;
(function (UpdateDomainEndpointOptionsRequest) {
    /**
     * @internal
     */
    UpdateDomainEndpointOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainEndpointOptionsRequest = exports.UpdateDomainEndpointOptionsRequest || (exports.UpdateDomainEndpointOptionsRequest = {}));
var UpdateDomainEndpointOptionsResponse;
(function (UpdateDomainEndpointOptionsResponse) {
    /**
     * @internal
     */
    UpdateDomainEndpointOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainEndpointOptionsResponse = exports.UpdateDomainEndpointOptionsResponse || (exports.UpdateDomainEndpointOptionsResponse = {}));
var UpdateScalingParametersRequest;
(function (UpdateScalingParametersRequest) {
    /**
     * @internal
     */
    UpdateScalingParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScalingParametersRequest = exports.UpdateScalingParametersRequest || (exports.UpdateScalingParametersRequest = {}));
var UpdateScalingParametersResponse;
(function (UpdateScalingParametersResponse) {
    /**
     * @internal
     */
    UpdateScalingParametersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScalingParametersResponse = exports.UpdateScalingParametersResponse || (exports.UpdateScalingParametersResponse = {}));
var UpdateServiceAccessPoliciesRequest;
(function (UpdateServiceAccessPoliciesRequest) {
    /**
     * @internal
     */
    UpdateServiceAccessPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceAccessPoliciesRequest = exports.UpdateServiceAccessPoliciesRequest || (exports.UpdateServiceAccessPoliciesRequest = {}));
var UpdateServiceAccessPoliciesResponse;
(function (UpdateServiceAccessPoliciesResponse) {
    /**
     * @internal
     */
    UpdateServiceAccessPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceAccessPoliciesResponse = exports.UpdateServiceAccessPoliciesResponse || (exports.UpdateServiceAccessPoliciesResponse = {}));
//# sourceMappingURL=models_0.js.map