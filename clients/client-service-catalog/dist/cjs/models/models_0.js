"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisioningArtifactProperties = exports.ProvisioningArtifactType = exports.ProductType = exports.OperationNotSupportedException = exports.CreatePortfolioShareOutput = exports.CreatePortfolioShareInput = exports.OrganizationNode = exports.OrganizationNodeType = exports.CreatePortfolioOutput = exports.PortfolioDetail = exports.CreatePortfolioInput = exports.CreateConstraintOutput = exports.Status = exports.ConstraintDetail = exports.CreateConstraintInput = exports.CopyProductOutput = exports.CopyProductInput = exports.ProvisioningArtifactPropertyName = exports.CopyOption = exports.BatchDisassociateServiceActionFromProvisioningArtifactOutput = exports.BatchDisassociateServiceActionFromProvisioningArtifactInput = exports.BatchAssociateServiceActionWithProvisioningArtifactOutput = exports.FailedServiceActionAssociation = exports.ServiceActionAssociationErrorCode = exports.BatchAssociateServiceActionWithProvisioningArtifactInput = exports.ServiceActionAssociation = exports.TagOptionNotMigratedException = exports.InvalidStateException = exports.AssociateTagOptionWithResourceOutput = exports.AssociateTagOptionWithResourceInput = exports.AssociateServiceActionWithProvisioningArtifactOutput = exports.AssociateServiceActionWithProvisioningArtifactInput = exports.AssociateProductWithPortfolioOutput = exports.AssociateProductWithPortfolioInput = exports.AssociatePrincipalWithPortfolioOutput = exports.AssociatePrincipalWithPortfolioInput = exports.PrincipalType = exports.DuplicateResourceException = exports.AssociateBudgetWithResourceOutput = exports.AssociateBudgetWithResourceInput = exports.Tag = exports.AccessStatus = exports.AccessLevelFilter = exports.AccessLevelFilterKey = exports.ResourceNotFoundException = exports.LimitExceededException = exports.InvalidParametersException = exports.AcceptPortfolioShareOutput = exports.AcceptPortfolioShareInput = exports.PortfolioShareType = void 0;
exports.DescribePortfolioSharesOutput = exports.PortfolioShareDetail = exports.DescribePortfolioSharesInput = exports.DescribePortfolioShareType = exports.DescribePortfolioOutput = exports.BudgetDetail = exports.DescribePortfolioInput = exports.DescribeCopyProductStatusOutput = exports.CopyProductStatus = exports.DescribeCopyProductStatusInput = exports.DescribeConstraintOutput = exports.DescribeConstraintInput = exports.DeleteTagOptionOutput = exports.DeleteTagOptionInput = exports.DeleteServiceActionOutput = exports.DeleteServiceActionInput = exports.DeleteProvisioningArtifactOutput = exports.DeleteProvisioningArtifactInput = exports.DeleteProvisionedProductPlanOutput = exports.DeleteProvisionedProductPlanInput = exports.DeleteProductOutput = exports.DeleteProductInput = exports.DeletePortfolioShareOutput = exports.DeletePortfolioShareInput = exports.ResourceInUseException = exports.DeletePortfolioOutput = exports.DeletePortfolioInput = exports.DeleteConstraintOutput = exports.DeleteConstraintInput = exports.CreateTagOptionOutput = exports.TagOptionDetail = exports.CreateTagOptionInput = exports.CreateServiceActionOutput = exports.ServiceActionDetail = exports.ServiceActionSummary = exports.CreateServiceActionInput = exports.ServiceActionDefinitionType = exports.ServiceActionDefinitionKey = exports.CreateProvisioningArtifactOutput = exports.CreateProvisioningArtifactInput = exports.CreateProvisionedProductPlanOutput = exports.CreateProvisionedProductPlanInput = exports.UpdateProvisioningParameter = exports.ProvisionedProductPlanType = exports.CreateProductOutput = exports.ProvisioningArtifactDetail = exports.ProvisioningArtifactGuidance = exports.ProductViewDetail = exports.ProductViewSummary = exports.CreateProductInput = void 0;
exports.DescribeServiceActionInput = exports.DescribeRecordOutput = exports.RecordOutput = exports.RecordDetail = exports.RecordStatus = exports.RecordTag = exports.RecordError = exports.DescribeRecordInput = exports.DescribeProvisioningParametersOutput = exports.UsageInstruction = exports.TagOptionSummary = exports.ProvisioningArtifactPreferences = exports.ProvisioningArtifactParameter = exports.ParameterConstraints = exports.ProvisioningArtifactOutput = exports.ConstraintSummary = exports.DescribeProvisioningParametersInput = exports.DescribeProvisioningArtifactOutput = exports.DescribeProvisioningArtifactInput = exports.DescribeProvisionedProductPlanOutput = exports.ResourceChange = exports.Replacement = exports.ResourceChangeDetail = exports.ResourceTargetDefinition = exports.RequiresRecreation = exports.ResourceAttribute = exports.EvaluationType = exports.ChangeAction = exports.ProvisionedProductPlanDetails = exports.ProvisionedProductPlanStatus = exports.DescribeProvisionedProductPlanInput = exports.DescribeProvisionedProductOutput = exports.ProvisionedProductDetail = exports.ProvisionedProductStatus = exports.CloudWatchDashboard = exports.DescribeProvisionedProductInput = exports.DescribeProductViewOutput = exports.DescribeProductViewInput = exports.DescribeProductAsAdminOutput = exports.ProvisioningArtifactSummary = exports.DescribeProductAsAdminInput = exports.DescribeProductOutput = exports.ProvisioningArtifact = exports.LaunchPath = exports.DescribeProductInput = exports.DescribePortfolioShareStatusOutput = exports.ShareStatus = exports.ShareDetails = exports.ShareError = exports.DescribePortfolioShareStatusInput = void 0;
exports.ListPrincipalsForPortfolioOutput = exports.Principal = exports.ListPrincipalsForPortfolioInput = exports.ListPortfoliosForProductOutput = exports.ListPortfoliosForProductInput = exports.ListPortfoliosOutput = exports.ListPortfoliosInput = exports.ListPortfolioAccessOutput = exports.ListPortfolioAccessInput = exports.ListOrganizationPortfolioAccessOutput = exports.ListOrganizationPortfolioAccessInput = exports.ListLaunchPathsOutput = exports.LaunchPathSummary = exports.ListLaunchPathsInput = exports.ListConstraintsForPortfolioOutput = exports.ListConstraintsForPortfolioInput = exports.ListBudgetsForResourceOutput = exports.ListBudgetsForResourceInput = exports.ListAcceptedPortfolioSharesOutput = exports.ListAcceptedPortfolioSharesInput = exports.ImportAsProvisionedProductOutput = exports.ImportAsProvisionedProductInput = exports.GetProvisionedProductOutputsOutput = exports.GetProvisionedProductOutputsInput = exports.GetAWSOrganizationsAccessStatusOutput = exports.GetAWSOrganizationsAccessStatusInput = exports.ExecuteProvisionedProductServiceActionOutput = exports.ExecuteProvisionedProductServiceActionInput = exports.ExecuteProvisionedProductPlanOutput = exports.ExecuteProvisionedProductPlanInput = exports.EnableAWSOrganizationsAccessOutput = exports.EnableAWSOrganizationsAccessInput = exports.DisassociateTagOptionFromResourceOutput = exports.DisassociateTagOptionFromResourceInput = exports.DisassociateServiceActionFromProvisioningArtifactOutput = exports.DisassociateServiceActionFromProvisioningArtifactInput = exports.DisassociateProductFromPortfolioOutput = exports.DisassociateProductFromPortfolioInput = exports.DisassociatePrincipalFromPortfolioOutput = exports.DisassociatePrincipalFromPortfolioInput = exports.DisassociateBudgetFromResourceOutput = exports.DisassociateBudgetFromResourceInput = exports.DisableAWSOrganizationsAccessOutput = exports.DisableAWSOrganizationsAccessInput = exports.DescribeTagOptionOutput = exports.DescribeTagOptionInput = exports.DescribeServiceActionExecutionParametersOutput = exports.ExecutionParameter = exports.DescribeServiceActionExecutionParametersInput = exports.DescribeServiceActionOutput = void 0;
exports.UpdateConstraintOutput = exports.UpdateConstraintInput = exports.TerminateProvisionedProductOutput = exports.TerminateProvisionedProductInput = exports.SearchProvisionedProductsOutput = exports.ProvisionedProductAttribute = exports.SearchProvisionedProductsInput = exports.ProvisionedProductViewFilterBy = exports.SearchProductsAsAdminOutput = exports.SearchProductsAsAdminInput = exports.ProductSource = exports.SearchProductsOutput = exports.ProductViewAggregationValue = exports.SearchProductsInput = exports.SortOrder = exports.ProductViewSortBy = exports.ProductViewFilterBy = exports.ScanProvisionedProductsOutput = exports.ScanProvisionedProductsInput = exports.RejectPortfolioShareOutput = exports.RejectPortfolioShareInput = exports.ProvisionProductOutput = exports.ProvisionProductInput = exports.ProvisioningPreferences = exports.ProvisioningParameter = exports.ListTagOptionsOutput = exports.ListTagOptionsInput = exports.ListTagOptionsFilters = exports.ListStackInstancesForProvisionedProductOutput = exports.StackInstance = exports.StackInstanceStatus = exports.ListStackInstancesForProvisionedProductInput = exports.ListServiceActionsForProvisioningArtifactOutput = exports.ListServiceActionsForProvisioningArtifactInput = exports.ListServiceActionsOutput = exports.ListServiceActionsInput = exports.ListResourcesForTagOptionOutput = exports.ResourceDetail = exports.ListResourcesForTagOptionInput = exports.ListRecordHistoryOutput = exports.ListRecordHistoryInput = exports.ListRecordHistorySearchFilter = exports.ListProvisioningArtifactsForServiceActionOutput = exports.ProvisioningArtifactView = exports.ListProvisioningArtifactsForServiceActionInput = exports.ListProvisioningArtifactsOutput = exports.ListProvisioningArtifactsInput = exports.ListProvisionedProductPlansOutput = exports.ProvisionedProductPlanSummary = exports.ListProvisionedProductPlansInput = void 0;
exports.UpdateTagOptionOutput = exports.UpdateTagOptionInput = exports.UpdateServiceActionOutput = exports.UpdateServiceActionInput = exports.UpdateProvisioningArtifactOutput = exports.UpdateProvisioningArtifactInput = exports.UpdateProvisionedProductPropertiesOutput = exports.UpdateProvisionedProductPropertiesInput = exports.PropertyKey = exports.UpdateProvisionedProductOutput = exports.UpdateProvisionedProductInput = exports.UpdateProvisioningPreferences = exports.UpdateProductOutput = exports.UpdateProductInput = exports.UpdatePortfolioShareOutput = exports.UpdatePortfolioShareInput = exports.UpdatePortfolioOutput = exports.UpdatePortfolioInput = void 0;
var PortfolioShareType;
(function (PortfolioShareType) {
    PortfolioShareType["AWS_ORGANIZATIONS"] = "AWS_ORGANIZATIONS";
    PortfolioShareType["AWS_SERVICECATALOG"] = "AWS_SERVICECATALOG";
    PortfolioShareType["IMPORTED"] = "IMPORTED";
})(PortfolioShareType = exports.PortfolioShareType || (exports.PortfolioShareType = {}));
var AcceptPortfolioShareInput;
(function (AcceptPortfolioShareInput) {
    /**
     * @internal
     */
    AcceptPortfolioShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptPortfolioShareInput = exports.AcceptPortfolioShareInput || (exports.AcceptPortfolioShareInput = {}));
var AcceptPortfolioShareOutput;
(function (AcceptPortfolioShareOutput) {
    /**
     * @internal
     */
    AcceptPortfolioShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptPortfolioShareOutput = exports.AcceptPortfolioShareOutput || (exports.AcceptPortfolioShareOutput = {}));
var InvalidParametersException;
(function (InvalidParametersException) {
    /**
     * @internal
     */
    InvalidParametersException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParametersException = exports.InvalidParametersException || (exports.InvalidParametersException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var AccessLevelFilterKey;
(function (AccessLevelFilterKey) {
    AccessLevelFilterKey["ACCOUNT"] = "Account";
    AccessLevelFilterKey["ROLE"] = "Role";
    AccessLevelFilterKey["USER"] = "User";
})(AccessLevelFilterKey = exports.AccessLevelFilterKey || (exports.AccessLevelFilterKey = {}));
var AccessLevelFilter;
(function (AccessLevelFilter) {
    /**
     * @internal
     */
    AccessLevelFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessLevelFilter = exports.AccessLevelFilter || (exports.AccessLevelFilter = {}));
var AccessStatus;
(function (AccessStatus) {
    AccessStatus["DISABLED"] = "DISABLED";
    AccessStatus["ENABLED"] = "ENABLED";
    AccessStatus["UNDER_CHANGE"] = "UNDER_CHANGE";
})(AccessStatus = exports.AccessStatus || (exports.AccessStatus = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AssociateBudgetWithResourceInput;
(function (AssociateBudgetWithResourceInput) {
    /**
     * @internal
     */
    AssociateBudgetWithResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateBudgetWithResourceInput = exports.AssociateBudgetWithResourceInput || (exports.AssociateBudgetWithResourceInput = {}));
var AssociateBudgetWithResourceOutput;
(function (AssociateBudgetWithResourceOutput) {
    /**
     * @internal
     */
    AssociateBudgetWithResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateBudgetWithResourceOutput = exports.AssociateBudgetWithResourceOutput || (exports.AssociateBudgetWithResourceOutput = {}));
var DuplicateResourceException;
(function (DuplicateResourceException) {
    /**
     * @internal
     */
    DuplicateResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateResourceException = exports.DuplicateResourceException || (exports.DuplicateResourceException = {}));
var PrincipalType;
(function (PrincipalType) {
    PrincipalType["IAM"] = "IAM";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
var AssociatePrincipalWithPortfolioInput;
(function (AssociatePrincipalWithPortfolioInput) {
    /**
     * @internal
     */
    AssociatePrincipalWithPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatePrincipalWithPortfolioInput = exports.AssociatePrincipalWithPortfolioInput || (exports.AssociatePrincipalWithPortfolioInput = {}));
var AssociatePrincipalWithPortfolioOutput;
(function (AssociatePrincipalWithPortfolioOutput) {
    /**
     * @internal
     */
    AssociatePrincipalWithPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatePrincipalWithPortfolioOutput = exports.AssociatePrincipalWithPortfolioOutput || (exports.AssociatePrincipalWithPortfolioOutput = {}));
var AssociateProductWithPortfolioInput;
(function (AssociateProductWithPortfolioInput) {
    /**
     * @internal
     */
    AssociateProductWithPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateProductWithPortfolioInput = exports.AssociateProductWithPortfolioInput || (exports.AssociateProductWithPortfolioInput = {}));
var AssociateProductWithPortfolioOutput;
(function (AssociateProductWithPortfolioOutput) {
    /**
     * @internal
     */
    AssociateProductWithPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateProductWithPortfolioOutput = exports.AssociateProductWithPortfolioOutput || (exports.AssociateProductWithPortfolioOutput = {}));
var AssociateServiceActionWithProvisioningArtifactInput;
(function (AssociateServiceActionWithProvisioningArtifactInput) {
    /**
     * @internal
     */
    AssociateServiceActionWithProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateServiceActionWithProvisioningArtifactInput = exports.AssociateServiceActionWithProvisioningArtifactInput || (exports.AssociateServiceActionWithProvisioningArtifactInput = {}));
var AssociateServiceActionWithProvisioningArtifactOutput;
(function (AssociateServiceActionWithProvisioningArtifactOutput) {
    /**
     * @internal
     */
    AssociateServiceActionWithProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateServiceActionWithProvisioningArtifactOutput = exports.AssociateServiceActionWithProvisioningArtifactOutput || (exports.AssociateServiceActionWithProvisioningArtifactOutput = {}));
var AssociateTagOptionWithResourceInput;
(function (AssociateTagOptionWithResourceInput) {
    /**
     * @internal
     */
    AssociateTagOptionWithResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTagOptionWithResourceInput = exports.AssociateTagOptionWithResourceInput || (exports.AssociateTagOptionWithResourceInput = {}));
var AssociateTagOptionWithResourceOutput;
(function (AssociateTagOptionWithResourceOutput) {
    /**
     * @internal
     */
    AssociateTagOptionWithResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTagOptionWithResourceOutput = exports.AssociateTagOptionWithResourceOutput || (exports.AssociateTagOptionWithResourceOutput = {}));
var InvalidStateException;
(function (InvalidStateException) {
    /**
     * @internal
     */
    InvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {}));
var TagOptionNotMigratedException;
(function (TagOptionNotMigratedException) {
    /**
     * @internal
     */
    TagOptionNotMigratedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagOptionNotMigratedException = exports.TagOptionNotMigratedException || (exports.TagOptionNotMigratedException = {}));
var ServiceActionAssociation;
(function (ServiceActionAssociation) {
    /**
     * @internal
     */
    ServiceActionAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceActionAssociation = exports.ServiceActionAssociation || (exports.ServiceActionAssociation = {}));
var BatchAssociateServiceActionWithProvisioningArtifactInput;
(function (BatchAssociateServiceActionWithProvisioningArtifactInput) {
    /**
     * @internal
     */
    BatchAssociateServiceActionWithProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateServiceActionWithProvisioningArtifactInput = exports.BatchAssociateServiceActionWithProvisioningArtifactInput || (exports.BatchAssociateServiceActionWithProvisioningArtifactInput = {}));
var ServiceActionAssociationErrorCode;
(function (ServiceActionAssociationErrorCode) {
    ServiceActionAssociationErrorCode["DuplicateResourceException"] = "DUPLICATE_RESOURCE";
    ServiceActionAssociationErrorCode["InternalFailure"] = "INTERNAL_FAILURE";
    ServiceActionAssociationErrorCode["LimitExceededException"] = "LIMIT_EXCEEDED";
    ServiceActionAssociationErrorCode["ResourceNotFoundException"] = "RESOURCE_NOT_FOUND";
    ServiceActionAssociationErrorCode["ThrottlingException"] = "THROTTLING";
})(ServiceActionAssociationErrorCode = exports.ServiceActionAssociationErrorCode || (exports.ServiceActionAssociationErrorCode = {}));
var FailedServiceActionAssociation;
(function (FailedServiceActionAssociation) {
    /**
     * @internal
     */
    FailedServiceActionAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedServiceActionAssociation = exports.FailedServiceActionAssociation || (exports.FailedServiceActionAssociation = {}));
var BatchAssociateServiceActionWithProvisioningArtifactOutput;
(function (BatchAssociateServiceActionWithProvisioningArtifactOutput) {
    /**
     * @internal
     */
    BatchAssociateServiceActionWithProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAssociateServiceActionWithProvisioningArtifactOutput = exports.BatchAssociateServiceActionWithProvisioningArtifactOutput || (exports.BatchAssociateServiceActionWithProvisioningArtifactOutput = {}));
var BatchDisassociateServiceActionFromProvisioningArtifactInput;
(function (BatchDisassociateServiceActionFromProvisioningArtifactInput) {
    /**
     * @internal
     */
    BatchDisassociateServiceActionFromProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateServiceActionFromProvisioningArtifactInput = exports.BatchDisassociateServiceActionFromProvisioningArtifactInput || (exports.BatchDisassociateServiceActionFromProvisioningArtifactInput = {}));
var BatchDisassociateServiceActionFromProvisioningArtifactOutput;
(function (BatchDisassociateServiceActionFromProvisioningArtifactOutput) {
    /**
     * @internal
     */
    BatchDisassociateServiceActionFromProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisassociateServiceActionFromProvisioningArtifactOutput = exports.BatchDisassociateServiceActionFromProvisioningArtifactOutput || (exports.BatchDisassociateServiceActionFromProvisioningArtifactOutput = {}));
var CopyOption;
(function (CopyOption) {
    CopyOption["CopyTags"] = "CopyTags";
})(CopyOption = exports.CopyOption || (exports.CopyOption = {}));
var ProvisioningArtifactPropertyName;
(function (ProvisioningArtifactPropertyName) {
    ProvisioningArtifactPropertyName["Id"] = "Id";
})(ProvisioningArtifactPropertyName = exports.ProvisioningArtifactPropertyName || (exports.ProvisioningArtifactPropertyName = {}));
var CopyProductInput;
(function (CopyProductInput) {
    /**
     * @internal
     */
    CopyProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyProductInput = exports.CopyProductInput || (exports.CopyProductInput = {}));
var CopyProductOutput;
(function (CopyProductOutput) {
    /**
     * @internal
     */
    CopyProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyProductOutput = exports.CopyProductOutput || (exports.CopyProductOutput = {}));
var CreateConstraintInput;
(function (CreateConstraintInput) {
    /**
     * @internal
     */
    CreateConstraintInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConstraintInput = exports.CreateConstraintInput || (exports.CreateConstraintInput = {}));
var ConstraintDetail;
(function (ConstraintDetail) {
    /**
     * @internal
     */
    ConstraintDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConstraintDetail = exports.ConstraintDetail || (exports.ConstraintDetail = {}));
var Status;
(function (Status) {
    Status["AVAILABLE"] = "AVAILABLE";
    Status["CREATING"] = "CREATING";
    Status["FAILED"] = "FAILED";
})(Status = exports.Status || (exports.Status = {}));
var CreateConstraintOutput;
(function (CreateConstraintOutput) {
    /**
     * @internal
     */
    CreateConstraintOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConstraintOutput = exports.CreateConstraintOutput || (exports.CreateConstraintOutput = {}));
var CreatePortfolioInput;
(function (CreatePortfolioInput) {
    /**
     * @internal
     */
    CreatePortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePortfolioInput = exports.CreatePortfolioInput || (exports.CreatePortfolioInput = {}));
var PortfolioDetail;
(function (PortfolioDetail) {
    /**
     * @internal
     */
    PortfolioDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortfolioDetail = exports.PortfolioDetail || (exports.PortfolioDetail = {}));
var CreatePortfolioOutput;
(function (CreatePortfolioOutput) {
    /**
     * @internal
     */
    CreatePortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePortfolioOutput = exports.CreatePortfolioOutput || (exports.CreatePortfolioOutput = {}));
var OrganizationNodeType;
(function (OrganizationNodeType) {
    OrganizationNodeType["ACCOUNT"] = "ACCOUNT";
    OrganizationNodeType["ORGANIZATION"] = "ORGANIZATION";
    OrganizationNodeType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
})(OrganizationNodeType = exports.OrganizationNodeType || (exports.OrganizationNodeType = {}));
var OrganizationNode;
(function (OrganizationNode) {
    /**
     * @internal
     */
    OrganizationNode.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationNode = exports.OrganizationNode || (exports.OrganizationNode = {}));
var CreatePortfolioShareInput;
(function (CreatePortfolioShareInput) {
    /**
     * @internal
     */
    CreatePortfolioShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePortfolioShareInput = exports.CreatePortfolioShareInput || (exports.CreatePortfolioShareInput = {}));
var CreatePortfolioShareOutput;
(function (CreatePortfolioShareOutput) {
    /**
     * @internal
     */
    CreatePortfolioShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePortfolioShareOutput = exports.CreatePortfolioShareOutput || (exports.CreatePortfolioShareOutput = {}));
var OperationNotSupportedException;
(function (OperationNotSupportedException) {
    /**
     * @internal
     */
    OperationNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotSupportedException = exports.OperationNotSupportedException || (exports.OperationNotSupportedException = {}));
var ProductType;
(function (ProductType) {
    ProductType["CLOUD_FORMATION_TEMPLATE"] = "CLOUD_FORMATION_TEMPLATE";
    ProductType["MARKETPLACE"] = "MARKETPLACE";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
var ProvisioningArtifactType;
(function (ProvisioningArtifactType) {
    ProvisioningArtifactType["CLOUD_FORMATION_TEMPLATE"] = "CLOUD_FORMATION_TEMPLATE";
    ProvisioningArtifactType["MARKETPLACE_AMI"] = "MARKETPLACE_AMI";
    ProvisioningArtifactType["MARKETPLACE_CAR"] = "MARKETPLACE_CAR";
})(ProvisioningArtifactType = exports.ProvisioningArtifactType || (exports.ProvisioningArtifactType = {}));
var ProvisioningArtifactProperties;
(function (ProvisioningArtifactProperties) {
    /**
     * @internal
     */
    ProvisioningArtifactProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifactProperties = exports.ProvisioningArtifactProperties || (exports.ProvisioningArtifactProperties = {}));
var CreateProductInput;
(function (CreateProductInput) {
    /**
     * @internal
     */
    CreateProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProductInput = exports.CreateProductInput || (exports.CreateProductInput = {}));
var ProductViewSummary;
(function (ProductViewSummary) {
    /**
     * @internal
     */
    ProductViewSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductViewSummary = exports.ProductViewSummary || (exports.ProductViewSummary = {}));
var ProductViewDetail;
(function (ProductViewDetail) {
    /**
     * @internal
     */
    ProductViewDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductViewDetail = exports.ProductViewDetail || (exports.ProductViewDetail = {}));
var ProvisioningArtifactGuidance;
(function (ProvisioningArtifactGuidance) {
    ProvisioningArtifactGuidance["DEFAULT"] = "DEFAULT";
    ProvisioningArtifactGuidance["DEPRECATED"] = "DEPRECATED";
})(ProvisioningArtifactGuidance = exports.ProvisioningArtifactGuidance || (exports.ProvisioningArtifactGuidance = {}));
var ProvisioningArtifactDetail;
(function (ProvisioningArtifactDetail) {
    /**
     * @internal
     */
    ProvisioningArtifactDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifactDetail = exports.ProvisioningArtifactDetail || (exports.ProvisioningArtifactDetail = {}));
var CreateProductOutput;
(function (CreateProductOutput) {
    /**
     * @internal
     */
    CreateProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProductOutput = exports.CreateProductOutput || (exports.CreateProductOutput = {}));
var ProvisionedProductPlanType;
(function (ProvisionedProductPlanType) {
    ProvisionedProductPlanType["CLOUDFORMATION"] = "CLOUDFORMATION";
})(ProvisionedProductPlanType = exports.ProvisionedProductPlanType || (exports.ProvisionedProductPlanType = {}));
var UpdateProvisioningParameter;
(function (UpdateProvisioningParameter) {
    /**
     * @internal
     */
    UpdateProvisioningParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisioningParameter = exports.UpdateProvisioningParameter || (exports.UpdateProvisioningParameter = {}));
var CreateProvisionedProductPlanInput;
(function (CreateProvisionedProductPlanInput) {
    /**
     * @internal
     */
    CreateProvisionedProductPlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisionedProductPlanInput = exports.CreateProvisionedProductPlanInput || (exports.CreateProvisionedProductPlanInput = {}));
var CreateProvisionedProductPlanOutput;
(function (CreateProvisionedProductPlanOutput) {
    /**
     * @internal
     */
    CreateProvisionedProductPlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisionedProductPlanOutput = exports.CreateProvisionedProductPlanOutput || (exports.CreateProvisionedProductPlanOutput = {}));
var CreateProvisioningArtifactInput;
(function (CreateProvisioningArtifactInput) {
    /**
     * @internal
     */
    CreateProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisioningArtifactInput = exports.CreateProvisioningArtifactInput || (exports.CreateProvisioningArtifactInput = {}));
var CreateProvisioningArtifactOutput;
(function (CreateProvisioningArtifactOutput) {
    /**
     * @internal
     */
    CreateProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProvisioningArtifactOutput = exports.CreateProvisioningArtifactOutput || (exports.CreateProvisioningArtifactOutput = {}));
var ServiceActionDefinitionKey;
(function (ServiceActionDefinitionKey) {
    ServiceActionDefinitionKey["AssumeRole"] = "AssumeRole";
    ServiceActionDefinitionKey["Name"] = "Name";
    ServiceActionDefinitionKey["Parameters"] = "Parameters";
    ServiceActionDefinitionKey["Version"] = "Version";
})(ServiceActionDefinitionKey = exports.ServiceActionDefinitionKey || (exports.ServiceActionDefinitionKey = {}));
var ServiceActionDefinitionType;
(function (ServiceActionDefinitionType) {
    ServiceActionDefinitionType["SsmAutomation"] = "SSM_AUTOMATION";
})(ServiceActionDefinitionType = exports.ServiceActionDefinitionType || (exports.ServiceActionDefinitionType = {}));
var CreateServiceActionInput;
(function (CreateServiceActionInput) {
    /**
     * @internal
     */
    CreateServiceActionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceActionInput = exports.CreateServiceActionInput || (exports.CreateServiceActionInput = {}));
var ServiceActionSummary;
(function (ServiceActionSummary) {
    /**
     * @internal
     */
    ServiceActionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceActionSummary = exports.ServiceActionSummary || (exports.ServiceActionSummary = {}));
var ServiceActionDetail;
(function (ServiceActionDetail) {
    /**
     * @internal
     */
    ServiceActionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceActionDetail = exports.ServiceActionDetail || (exports.ServiceActionDetail = {}));
var CreateServiceActionOutput;
(function (CreateServiceActionOutput) {
    /**
     * @internal
     */
    CreateServiceActionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceActionOutput = exports.CreateServiceActionOutput || (exports.CreateServiceActionOutput = {}));
var CreateTagOptionInput;
(function (CreateTagOptionInput) {
    /**
     * @internal
     */
    CreateTagOptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagOptionInput = exports.CreateTagOptionInput || (exports.CreateTagOptionInput = {}));
var TagOptionDetail;
(function (TagOptionDetail) {
    /**
     * @internal
     */
    TagOptionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagOptionDetail = exports.TagOptionDetail || (exports.TagOptionDetail = {}));
var CreateTagOptionOutput;
(function (CreateTagOptionOutput) {
    /**
     * @internal
     */
    CreateTagOptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTagOptionOutput = exports.CreateTagOptionOutput || (exports.CreateTagOptionOutput = {}));
var DeleteConstraintInput;
(function (DeleteConstraintInput) {
    /**
     * @internal
     */
    DeleteConstraintInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConstraintInput = exports.DeleteConstraintInput || (exports.DeleteConstraintInput = {}));
var DeleteConstraintOutput;
(function (DeleteConstraintOutput) {
    /**
     * @internal
     */
    DeleteConstraintOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConstraintOutput = exports.DeleteConstraintOutput || (exports.DeleteConstraintOutput = {}));
var DeletePortfolioInput;
(function (DeletePortfolioInput) {
    /**
     * @internal
     */
    DeletePortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePortfolioInput = exports.DeletePortfolioInput || (exports.DeletePortfolioInput = {}));
var DeletePortfolioOutput;
(function (DeletePortfolioOutput) {
    /**
     * @internal
     */
    DeletePortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePortfolioOutput = exports.DeletePortfolioOutput || (exports.DeletePortfolioOutput = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeletePortfolioShareInput;
(function (DeletePortfolioShareInput) {
    /**
     * @internal
     */
    DeletePortfolioShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePortfolioShareInput = exports.DeletePortfolioShareInput || (exports.DeletePortfolioShareInput = {}));
var DeletePortfolioShareOutput;
(function (DeletePortfolioShareOutput) {
    /**
     * @internal
     */
    DeletePortfolioShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePortfolioShareOutput = exports.DeletePortfolioShareOutput || (exports.DeletePortfolioShareOutput = {}));
var DeleteProductInput;
(function (DeleteProductInput) {
    /**
     * @internal
     */
    DeleteProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProductInput = exports.DeleteProductInput || (exports.DeleteProductInput = {}));
var DeleteProductOutput;
(function (DeleteProductOutput) {
    /**
     * @internal
     */
    DeleteProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProductOutput = exports.DeleteProductOutput || (exports.DeleteProductOutput = {}));
var DeleteProvisionedProductPlanInput;
(function (DeleteProvisionedProductPlanInput) {
    /**
     * @internal
     */
    DeleteProvisionedProductPlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisionedProductPlanInput = exports.DeleteProvisionedProductPlanInput || (exports.DeleteProvisionedProductPlanInput = {}));
var DeleteProvisionedProductPlanOutput;
(function (DeleteProvisionedProductPlanOutput) {
    /**
     * @internal
     */
    DeleteProvisionedProductPlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisionedProductPlanOutput = exports.DeleteProvisionedProductPlanOutput || (exports.DeleteProvisionedProductPlanOutput = {}));
var DeleteProvisioningArtifactInput;
(function (DeleteProvisioningArtifactInput) {
    /**
     * @internal
     */
    DeleteProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisioningArtifactInput = exports.DeleteProvisioningArtifactInput || (exports.DeleteProvisioningArtifactInput = {}));
var DeleteProvisioningArtifactOutput;
(function (DeleteProvisioningArtifactOutput) {
    /**
     * @internal
     */
    DeleteProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisioningArtifactOutput = exports.DeleteProvisioningArtifactOutput || (exports.DeleteProvisioningArtifactOutput = {}));
var DeleteServiceActionInput;
(function (DeleteServiceActionInput) {
    /**
     * @internal
     */
    DeleteServiceActionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceActionInput = exports.DeleteServiceActionInput || (exports.DeleteServiceActionInput = {}));
var DeleteServiceActionOutput;
(function (DeleteServiceActionOutput) {
    /**
     * @internal
     */
    DeleteServiceActionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceActionOutput = exports.DeleteServiceActionOutput || (exports.DeleteServiceActionOutput = {}));
var DeleteTagOptionInput;
(function (DeleteTagOptionInput) {
    /**
     * @internal
     */
    DeleteTagOptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagOptionInput = exports.DeleteTagOptionInput || (exports.DeleteTagOptionInput = {}));
var DeleteTagOptionOutput;
(function (DeleteTagOptionOutput) {
    /**
     * @internal
     */
    DeleteTagOptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagOptionOutput = exports.DeleteTagOptionOutput || (exports.DeleteTagOptionOutput = {}));
var DescribeConstraintInput;
(function (DescribeConstraintInput) {
    /**
     * @internal
     */
    DescribeConstraintInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConstraintInput = exports.DescribeConstraintInput || (exports.DescribeConstraintInput = {}));
var DescribeConstraintOutput;
(function (DescribeConstraintOutput) {
    /**
     * @internal
     */
    DescribeConstraintOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConstraintOutput = exports.DescribeConstraintOutput || (exports.DescribeConstraintOutput = {}));
var DescribeCopyProductStatusInput;
(function (DescribeCopyProductStatusInput) {
    /**
     * @internal
     */
    DescribeCopyProductStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCopyProductStatusInput = exports.DescribeCopyProductStatusInput || (exports.DescribeCopyProductStatusInput = {}));
var CopyProductStatus;
(function (CopyProductStatus) {
    CopyProductStatus["FAILED"] = "FAILED";
    CopyProductStatus["IN_PROGRESS"] = "IN_PROGRESS";
    CopyProductStatus["SUCCEEDED"] = "SUCCEEDED";
})(CopyProductStatus = exports.CopyProductStatus || (exports.CopyProductStatus = {}));
var DescribeCopyProductStatusOutput;
(function (DescribeCopyProductStatusOutput) {
    /**
     * @internal
     */
    DescribeCopyProductStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCopyProductStatusOutput = exports.DescribeCopyProductStatusOutput || (exports.DescribeCopyProductStatusOutput = {}));
var DescribePortfolioInput;
(function (DescribePortfolioInput) {
    /**
     * @internal
     */
    DescribePortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortfolioInput = exports.DescribePortfolioInput || (exports.DescribePortfolioInput = {}));
var BudgetDetail;
(function (BudgetDetail) {
    /**
     * @internal
     */
    BudgetDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BudgetDetail = exports.BudgetDetail || (exports.BudgetDetail = {}));
var DescribePortfolioOutput;
(function (DescribePortfolioOutput) {
    /**
     * @internal
     */
    DescribePortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortfolioOutput = exports.DescribePortfolioOutput || (exports.DescribePortfolioOutput = {}));
var DescribePortfolioShareType;
(function (DescribePortfolioShareType) {
    DescribePortfolioShareType["ACCOUNT"] = "ACCOUNT";
    DescribePortfolioShareType["ORGANIZATION"] = "ORGANIZATION";
    DescribePortfolioShareType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
    DescribePortfolioShareType["ORGANIZATION_MEMBER_ACCOUNT"] = "ORGANIZATION_MEMBER_ACCOUNT";
})(DescribePortfolioShareType = exports.DescribePortfolioShareType || (exports.DescribePortfolioShareType = {}));
var DescribePortfolioSharesInput;
(function (DescribePortfolioSharesInput) {
    /**
     * @internal
     */
    DescribePortfolioSharesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortfolioSharesInput = exports.DescribePortfolioSharesInput || (exports.DescribePortfolioSharesInput = {}));
var PortfolioShareDetail;
(function (PortfolioShareDetail) {
    /**
     * @internal
     */
    PortfolioShareDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortfolioShareDetail = exports.PortfolioShareDetail || (exports.PortfolioShareDetail = {}));
var DescribePortfolioSharesOutput;
(function (DescribePortfolioSharesOutput) {
    /**
     * @internal
     */
    DescribePortfolioSharesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortfolioSharesOutput = exports.DescribePortfolioSharesOutput || (exports.DescribePortfolioSharesOutput = {}));
var DescribePortfolioShareStatusInput;
(function (DescribePortfolioShareStatusInput) {
    /**
     * @internal
     */
    DescribePortfolioShareStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortfolioShareStatusInput = exports.DescribePortfolioShareStatusInput || (exports.DescribePortfolioShareStatusInput = {}));
var ShareError;
(function (ShareError) {
    /**
     * @internal
     */
    ShareError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareError = exports.ShareError || (exports.ShareError = {}));
var ShareDetails;
(function (ShareDetails) {
    /**
     * @internal
     */
    ShareDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShareDetails = exports.ShareDetails || (exports.ShareDetails = {}));
var ShareStatus;
(function (ShareStatus) {
    ShareStatus["COMPLETED"] = "COMPLETED";
    ShareStatus["COMPLETED_WITH_ERRORS"] = "COMPLETED_WITH_ERRORS";
    ShareStatus["ERROR"] = "ERROR";
    ShareStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ShareStatus["NOT_STARTED"] = "NOT_STARTED";
})(ShareStatus = exports.ShareStatus || (exports.ShareStatus = {}));
var DescribePortfolioShareStatusOutput;
(function (DescribePortfolioShareStatusOutput) {
    /**
     * @internal
     */
    DescribePortfolioShareStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePortfolioShareStatusOutput = exports.DescribePortfolioShareStatusOutput || (exports.DescribePortfolioShareStatusOutput = {}));
var DescribeProductInput;
(function (DescribeProductInput) {
    /**
     * @internal
     */
    DescribeProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductInput = exports.DescribeProductInput || (exports.DescribeProductInput = {}));
var LaunchPath;
(function (LaunchPath) {
    /**
     * @internal
     */
    LaunchPath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchPath = exports.LaunchPath || (exports.LaunchPath = {}));
var ProvisioningArtifact;
(function (ProvisioningArtifact) {
    /**
     * @internal
     */
    ProvisioningArtifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifact = exports.ProvisioningArtifact || (exports.ProvisioningArtifact = {}));
var DescribeProductOutput;
(function (DescribeProductOutput) {
    /**
     * @internal
     */
    DescribeProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductOutput = exports.DescribeProductOutput || (exports.DescribeProductOutput = {}));
var DescribeProductAsAdminInput;
(function (DescribeProductAsAdminInput) {
    /**
     * @internal
     */
    DescribeProductAsAdminInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductAsAdminInput = exports.DescribeProductAsAdminInput || (exports.DescribeProductAsAdminInput = {}));
var ProvisioningArtifactSummary;
(function (ProvisioningArtifactSummary) {
    /**
     * @internal
     */
    ProvisioningArtifactSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifactSummary = exports.ProvisioningArtifactSummary || (exports.ProvisioningArtifactSummary = {}));
var DescribeProductAsAdminOutput;
(function (DescribeProductAsAdminOutput) {
    /**
     * @internal
     */
    DescribeProductAsAdminOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductAsAdminOutput = exports.DescribeProductAsAdminOutput || (exports.DescribeProductAsAdminOutput = {}));
var DescribeProductViewInput;
(function (DescribeProductViewInput) {
    /**
     * @internal
     */
    DescribeProductViewInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductViewInput = exports.DescribeProductViewInput || (exports.DescribeProductViewInput = {}));
var DescribeProductViewOutput;
(function (DescribeProductViewOutput) {
    /**
     * @internal
     */
    DescribeProductViewOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProductViewOutput = exports.DescribeProductViewOutput || (exports.DescribeProductViewOutput = {}));
var DescribeProvisionedProductInput;
(function (DescribeProvisionedProductInput) {
    /**
     * @internal
     */
    DescribeProvisionedProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisionedProductInput = exports.DescribeProvisionedProductInput || (exports.DescribeProvisionedProductInput = {}));
var CloudWatchDashboard;
(function (CloudWatchDashboard) {
    /**
     * @internal
     */
    CloudWatchDashboard.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchDashboard = exports.CloudWatchDashboard || (exports.CloudWatchDashboard = {}));
var ProvisionedProductStatus;
(function (ProvisionedProductStatus) {
    ProvisionedProductStatus["AVAILABLE"] = "AVAILABLE";
    ProvisionedProductStatus["ERROR"] = "ERROR";
    ProvisionedProductStatus["PLAN_IN_PROGRESS"] = "PLAN_IN_PROGRESS";
    ProvisionedProductStatus["TAINTED"] = "TAINTED";
    ProvisionedProductStatus["UNDER_CHANGE"] = "UNDER_CHANGE";
})(ProvisionedProductStatus = exports.ProvisionedProductStatus || (exports.ProvisionedProductStatus = {}));
var ProvisionedProductDetail;
(function (ProvisionedProductDetail) {
    /**
     * @internal
     */
    ProvisionedProductDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedProductDetail = exports.ProvisionedProductDetail || (exports.ProvisionedProductDetail = {}));
var DescribeProvisionedProductOutput;
(function (DescribeProvisionedProductOutput) {
    /**
     * @internal
     */
    DescribeProvisionedProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisionedProductOutput = exports.DescribeProvisionedProductOutput || (exports.DescribeProvisionedProductOutput = {}));
var DescribeProvisionedProductPlanInput;
(function (DescribeProvisionedProductPlanInput) {
    /**
     * @internal
     */
    DescribeProvisionedProductPlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisionedProductPlanInput = exports.DescribeProvisionedProductPlanInput || (exports.DescribeProvisionedProductPlanInput = {}));
var ProvisionedProductPlanStatus;
(function (ProvisionedProductPlanStatus) {
    ProvisionedProductPlanStatus["CREATE_FAILED"] = "CREATE_FAILED";
    ProvisionedProductPlanStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    ProvisionedProductPlanStatus["CREATE_SUCCESS"] = "CREATE_SUCCESS";
    ProvisionedProductPlanStatus["EXECUTE_FAILED"] = "EXECUTE_FAILED";
    ProvisionedProductPlanStatus["EXECUTE_IN_PROGRESS"] = "EXECUTE_IN_PROGRESS";
    ProvisionedProductPlanStatus["EXECUTE_SUCCESS"] = "EXECUTE_SUCCESS";
})(ProvisionedProductPlanStatus = exports.ProvisionedProductPlanStatus || (exports.ProvisionedProductPlanStatus = {}));
var ProvisionedProductPlanDetails;
(function (ProvisionedProductPlanDetails) {
    /**
     * @internal
     */
    ProvisionedProductPlanDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedProductPlanDetails = exports.ProvisionedProductPlanDetails || (exports.ProvisionedProductPlanDetails = {}));
var ChangeAction;
(function (ChangeAction) {
    ChangeAction["ADD"] = "ADD";
    ChangeAction["MODIFY"] = "MODIFY";
    ChangeAction["REMOVE"] = "REMOVE";
})(ChangeAction = exports.ChangeAction || (exports.ChangeAction = {}));
var EvaluationType;
(function (EvaluationType) {
    EvaluationType["DYNAMIC"] = "DYNAMIC";
    EvaluationType["STATIC"] = "STATIC";
})(EvaluationType = exports.EvaluationType || (exports.EvaluationType = {}));
var ResourceAttribute;
(function (ResourceAttribute) {
    ResourceAttribute["CREATIONPOLICY"] = "CREATIONPOLICY";
    ResourceAttribute["DELETIONPOLICY"] = "DELETIONPOLICY";
    ResourceAttribute["METADATA"] = "METADATA";
    ResourceAttribute["PROPERTIES"] = "PROPERTIES";
    ResourceAttribute["TAGS"] = "TAGS";
    ResourceAttribute["UPDATEPOLICY"] = "UPDATEPOLICY";
})(ResourceAttribute = exports.ResourceAttribute || (exports.ResourceAttribute = {}));
var RequiresRecreation;
(function (RequiresRecreation) {
    RequiresRecreation["ALWAYS"] = "ALWAYS";
    RequiresRecreation["CONDITIONALLY"] = "CONDITIONALLY";
    RequiresRecreation["NEVER"] = "NEVER";
})(RequiresRecreation = exports.RequiresRecreation || (exports.RequiresRecreation = {}));
var ResourceTargetDefinition;
(function (ResourceTargetDefinition) {
    /**
     * @internal
     */
    ResourceTargetDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTargetDefinition = exports.ResourceTargetDefinition || (exports.ResourceTargetDefinition = {}));
var ResourceChangeDetail;
(function (ResourceChangeDetail) {
    /**
     * @internal
     */
    ResourceChangeDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceChangeDetail = exports.ResourceChangeDetail || (exports.ResourceChangeDetail = {}));
var Replacement;
(function (Replacement) {
    Replacement["CONDITIONAL"] = "CONDITIONAL";
    Replacement["FALSE"] = "FALSE";
    Replacement["TRUE"] = "TRUE";
})(Replacement = exports.Replacement || (exports.Replacement = {}));
var ResourceChange;
(function (ResourceChange) {
    /**
     * @internal
     */
    ResourceChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceChange = exports.ResourceChange || (exports.ResourceChange = {}));
var DescribeProvisionedProductPlanOutput;
(function (DescribeProvisionedProductPlanOutput) {
    /**
     * @internal
     */
    DescribeProvisionedProductPlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisionedProductPlanOutput = exports.DescribeProvisionedProductPlanOutput || (exports.DescribeProvisionedProductPlanOutput = {}));
var DescribeProvisioningArtifactInput;
(function (DescribeProvisioningArtifactInput) {
    /**
     * @internal
     */
    DescribeProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningArtifactInput = exports.DescribeProvisioningArtifactInput || (exports.DescribeProvisioningArtifactInput = {}));
var DescribeProvisioningArtifactOutput;
(function (DescribeProvisioningArtifactOutput) {
    /**
     * @internal
     */
    DescribeProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningArtifactOutput = exports.DescribeProvisioningArtifactOutput || (exports.DescribeProvisioningArtifactOutput = {}));
var DescribeProvisioningParametersInput;
(function (DescribeProvisioningParametersInput) {
    /**
     * @internal
     */
    DescribeProvisioningParametersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningParametersInput = exports.DescribeProvisioningParametersInput || (exports.DescribeProvisioningParametersInput = {}));
var ConstraintSummary;
(function (ConstraintSummary) {
    /**
     * @internal
     */
    ConstraintSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConstraintSummary = exports.ConstraintSummary || (exports.ConstraintSummary = {}));
var ProvisioningArtifactOutput;
(function (ProvisioningArtifactOutput) {
    /**
     * @internal
     */
    ProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifactOutput = exports.ProvisioningArtifactOutput || (exports.ProvisioningArtifactOutput = {}));
var ParameterConstraints;
(function (ParameterConstraints) {
    /**
     * @internal
     */
    ParameterConstraints.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterConstraints = exports.ParameterConstraints || (exports.ParameterConstraints = {}));
var ProvisioningArtifactParameter;
(function (ProvisioningArtifactParameter) {
    /**
     * @internal
     */
    ProvisioningArtifactParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifactParameter = exports.ProvisioningArtifactParameter || (exports.ProvisioningArtifactParameter = {}));
var ProvisioningArtifactPreferences;
(function (ProvisioningArtifactPreferences) {
    /**
     * @internal
     */
    ProvisioningArtifactPreferences.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifactPreferences = exports.ProvisioningArtifactPreferences || (exports.ProvisioningArtifactPreferences = {}));
var TagOptionSummary;
(function (TagOptionSummary) {
    /**
     * @internal
     */
    TagOptionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagOptionSummary = exports.TagOptionSummary || (exports.TagOptionSummary = {}));
var UsageInstruction;
(function (UsageInstruction) {
    /**
     * @internal
     */
    UsageInstruction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageInstruction = exports.UsageInstruction || (exports.UsageInstruction = {}));
var DescribeProvisioningParametersOutput;
(function (DescribeProvisioningParametersOutput) {
    /**
     * @internal
     */
    DescribeProvisioningParametersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProvisioningParametersOutput = exports.DescribeProvisioningParametersOutput || (exports.DescribeProvisioningParametersOutput = {}));
var DescribeRecordInput;
(function (DescribeRecordInput) {
    /**
     * @internal
     */
    DescribeRecordInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecordInput = exports.DescribeRecordInput || (exports.DescribeRecordInput = {}));
var RecordError;
(function (RecordError) {
    /**
     * @internal
     */
    RecordError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordError = exports.RecordError || (exports.RecordError = {}));
var RecordTag;
(function (RecordTag) {
    /**
     * @internal
     */
    RecordTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordTag = exports.RecordTag || (exports.RecordTag = {}));
var RecordStatus;
(function (RecordStatus) {
    RecordStatus["CREATED"] = "CREATED";
    RecordStatus["FAILED"] = "FAILED";
    RecordStatus["IN_PROGRESS"] = "IN_PROGRESS";
    RecordStatus["IN_PROGRESS_IN_ERROR"] = "IN_PROGRESS_IN_ERROR";
    RecordStatus["SUCCEEDED"] = "SUCCEEDED";
})(RecordStatus = exports.RecordStatus || (exports.RecordStatus = {}));
var RecordDetail;
(function (RecordDetail) {
    /**
     * @internal
     */
    RecordDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordDetail = exports.RecordDetail || (exports.RecordDetail = {}));
var RecordOutput;
(function (RecordOutput) {
    /**
     * @internal
     */
    RecordOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordOutput = exports.RecordOutput || (exports.RecordOutput = {}));
var DescribeRecordOutput;
(function (DescribeRecordOutput) {
    /**
     * @internal
     */
    DescribeRecordOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecordOutput = exports.DescribeRecordOutput || (exports.DescribeRecordOutput = {}));
var DescribeServiceActionInput;
(function (DescribeServiceActionInput) {
    /**
     * @internal
     */
    DescribeServiceActionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceActionInput = exports.DescribeServiceActionInput || (exports.DescribeServiceActionInput = {}));
var DescribeServiceActionOutput;
(function (DescribeServiceActionOutput) {
    /**
     * @internal
     */
    DescribeServiceActionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceActionOutput = exports.DescribeServiceActionOutput || (exports.DescribeServiceActionOutput = {}));
var DescribeServiceActionExecutionParametersInput;
(function (DescribeServiceActionExecutionParametersInput) {
    /**
     * @internal
     */
    DescribeServiceActionExecutionParametersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceActionExecutionParametersInput = exports.DescribeServiceActionExecutionParametersInput || (exports.DescribeServiceActionExecutionParametersInput = {}));
var ExecutionParameter;
(function (ExecutionParameter) {
    /**
     * @internal
     */
    ExecutionParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionParameter = exports.ExecutionParameter || (exports.ExecutionParameter = {}));
var DescribeServiceActionExecutionParametersOutput;
(function (DescribeServiceActionExecutionParametersOutput) {
    /**
     * @internal
     */
    DescribeServiceActionExecutionParametersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceActionExecutionParametersOutput = exports.DescribeServiceActionExecutionParametersOutput || (exports.DescribeServiceActionExecutionParametersOutput = {}));
var DescribeTagOptionInput;
(function (DescribeTagOptionInput) {
    /**
     * @internal
     */
    DescribeTagOptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagOptionInput = exports.DescribeTagOptionInput || (exports.DescribeTagOptionInput = {}));
var DescribeTagOptionOutput;
(function (DescribeTagOptionOutput) {
    /**
     * @internal
     */
    DescribeTagOptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTagOptionOutput = exports.DescribeTagOptionOutput || (exports.DescribeTagOptionOutput = {}));
var DisableAWSOrganizationsAccessInput;
(function (DisableAWSOrganizationsAccessInput) {
    /**
     * @internal
     */
    DisableAWSOrganizationsAccessInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableAWSOrganizationsAccessInput = exports.DisableAWSOrganizationsAccessInput || (exports.DisableAWSOrganizationsAccessInput = {}));
var DisableAWSOrganizationsAccessOutput;
(function (DisableAWSOrganizationsAccessOutput) {
    /**
     * @internal
     */
    DisableAWSOrganizationsAccessOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableAWSOrganizationsAccessOutput = exports.DisableAWSOrganizationsAccessOutput || (exports.DisableAWSOrganizationsAccessOutput = {}));
var DisassociateBudgetFromResourceInput;
(function (DisassociateBudgetFromResourceInput) {
    /**
     * @internal
     */
    DisassociateBudgetFromResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateBudgetFromResourceInput = exports.DisassociateBudgetFromResourceInput || (exports.DisassociateBudgetFromResourceInput = {}));
var DisassociateBudgetFromResourceOutput;
(function (DisassociateBudgetFromResourceOutput) {
    /**
     * @internal
     */
    DisassociateBudgetFromResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateBudgetFromResourceOutput = exports.DisassociateBudgetFromResourceOutput || (exports.DisassociateBudgetFromResourceOutput = {}));
var DisassociatePrincipalFromPortfolioInput;
(function (DisassociatePrincipalFromPortfolioInput) {
    /**
     * @internal
     */
    DisassociatePrincipalFromPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociatePrincipalFromPortfolioInput = exports.DisassociatePrincipalFromPortfolioInput || (exports.DisassociatePrincipalFromPortfolioInput = {}));
var DisassociatePrincipalFromPortfolioOutput;
(function (DisassociatePrincipalFromPortfolioOutput) {
    /**
     * @internal
     */
    DisassociatePrincipalFromPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociatePrincipalFromPortfolioOutput = exports.DisassociatePrincipalFromPortfolioOutput || (exports.DisassociatePrincipalFromPortfolioOutput = {}));
var DisassociateProductFromPortfolioInput;
(function (DisassociateProductFromPortfolioInput) {
    /**
     * @internal
     */
    DisassociateProductFromPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateProductFromPortfolioInput = exports.DisassociateProductFromPortfolioInput || (exports.DisassociateProductFromPortfolioInput = {}));
var DisassociateProductFromPortfolioOutput;
(function (DisassociateProductFromPortfolioOutput) {
    /**
     * @internal
     */
    DisassociateProductFromPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateProductFromPortfolioOutput = exports.DisassociateProductFromPortfolioOutput || (exports.DisassociateProductFromPortfolioOutput = {}));
var DisassociateServiceActionFromProvisioningArtifactInput;
(function (DisassociateServiceActionFromProvisioningArtifactInput) {
    /**
     * @internal
     */
    DisassociateServiceActionFromProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateServiceActionFromProvisioningArtifactInput = exports.DisassociateServiceActionFromProvisioningArtifactInput || (exports.DisassociateServiceActionFromProvisioningArtifactInput = {}));
var DisassociateServiceActionFromProvisioningArtifactOutput;
(function (DisassociateServiceActionFromProvisioningArtifactOutput) {
    /**
     * @internal
     */
    DisassociateServiceActionFromProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateServiceActionFromProvisioningArtifactOutput = exports.DisassociateServiceActionFromProvisioningArtifactOutput || (exports.DisassociateServiceActionFromProvisioningArtifactOutput = {}));
var DisassociateTagOptionFromResourceInput;
(function (DisassociateTagOptionFromResourceInput) {
    /**
     * @internal
     */
    DisassociateTagOptionFromResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTagOptionFromResourceInput = exports.DisassociateTagOptionFromResourceInput || (exports.DisassociateTagOptionFromResourceInput = {}));
var DisassociateTagOptionFromResourceOutput;
(function (DisassociateTagOptionFromResourceOutput) {
    /**
     * @internal
     */
    DisassociateTagOptionFromResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTagOptionFromResourceOutput = exports.DisassociateTagOptionFromResourceOutput || (exports.DisassociateTagOptionFromResourceOutput = {}));
var EnableAWSOrganizationsAccessInput;
(function (EnableAWSOrganizationsAccessInput) {
    /**
     * @internal
     */
    EnableAWSOrganizationsAccessInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAWSOrganizationsAccessInput = exports.EnableAWSOrganizationsAccessInput || (exports.EnableAWSOrganizationsAccessInput = {}));
var EnableAWSOrganizationsAccessOutput;
(function (EnableAWSOrganizationsAccessOutput) {
    /**
     * @internal
     */
    EnableAWSOrganizationsAccessOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAWSOrganizationsAccessOutput = exports.EnableAWSOrganizationsAccessOutput || (exports.EnableAWSOrganizationsAccessOutput = {}));
var ExecuteProvisionedProductPlanInput;
(function (ExecuteProvisionedProductPlanInput) {
    /**
     * @internal
     */
    ExecuteProvisionedProductPlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteProvisionedProductPlanInput = exports.ExecuteProvisionedProductPlanInput || (exports.ExecuteProvisionedProductPlanInput = {}));
var ExecuteProvisionedProductPlanOutput;
(function (ExecuteProvisionedProductPlanOutput) {
    /**
     * @internal
     */
    ExecuteProvisionedProductPlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteProvisionedProductPlanOutput = exports.ExecuteProvisionedProductPlanOutput || (exports.ExecuteProvisionedProductPlanOutput = {}));
var ExecuteProvisionedProductServiceActionInput;
(function (ExecuteProvisionedProductServiceActionInput) {
    /**
     * @internal
     */
    ExecuteProvisionedProductServiceActionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteProvisionedProductServiceActionInput = exports.ExecuteProvisionedProductServiceActionInput || (exports.ExecuteProvisionedProductServiceActionInput = {}));
var ExecuteProvisionedProductServiceActionOutput;
(function (ExecuteProvisionedProductServiceActionOutput) {
    /**
     * @internal
     */
    ExecuteProvisionedProductServiceActionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteProvisionedProductServiceActionOutput = exports.ExecuteProvisionedProductServiceActionOutput || (exports.ExecuteProvisionedProductServiceActionOutput = {}));
var GetAWSOrganizationsAccessStatusInput;
(function (GetAWSOrganizationsAccessStatusInput) {
    /**
     * @internal
     */
    GetAWSOrganizationsAccessStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAWSOrganizationsAccessStatusInput = exports.GetAWSOrganizationsAccessStatusInput || (exports.GetAWSOrganizationsAccessStatusInput = {}));
var GetAWSOrganizationsAccessStatusOutput;
(function (GetAWSOrganizationsAccessStatusOutput) {
    /**
     * @internal
     */
    GetAWSOrganizationsAccessStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAWSOrganizationsAccessStatusOutput = exports.GetAWSOrganizationsAccessStatusOutput || (exports.GetAWSOrganizationsAccessStatusOutput = {}));
var GetProvisionedProductOutputsInput;
(function (GetProvisionedProductOutputsInput) {
    /**
     * @internal
     */
    GetProvisionedProductOutputsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProvisionedProductOutputsInput = exports.GetProvisionedProductOutputsInput || (exports.GetProvisionedProductOutputsInput = {}));
var GetProvisionedProductOutputsOutput;
(function (GetProvisionedProductOutputsOutput) {
    /**
     * @internal
     */
    GetProvisionedProductOutputsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProvisionedProductOutputsOutput = exports.GetProvisionedProductOutputsOutput || (exports.GetProvisionedProductOutputsOutput = {}));
var ImportAsProvisionedProductInput;
(function (ImportAsProvisionedProductInput) {
    /**
     * @internal
     */
    ImportAsProvisionedProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAsProvisionedProductInput = exports.ImportAsProvisionedProductInput || (exports.ImportAsProvisionedProductInput = {}));
var ImportAsProvisionedProductOutput;
(function (ImportAsProvisionedProductOutput) {
    /**
     * @internal
     */
    ImportAsProvisionedProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAsProvisionedProductOutput = exports.ImportAsProvisionedProductOutput || (exports.ImportAsProvisionedProductOutput = {}));
var ListAcceptedPortfolioSharesInput;
(function (ListAcceptedPortfolioSharesInput) {
    /**
     * @internal
     */
    ListAcceptedPortfolioSharesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAcceptedPortfolioSharesInput = exports.ListAcceptedPortfolioSharesInput || (exports.ListAcceptedPortfolioSharesInput = {}));
var ListAcceptedPortfolioSharesOutput;
(function (ListAcceptedPortfolioSharesOutput) {
    /**
     * @internal
     */
    ListAcceptedPortfolioSharesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAcceptedPortfolioSharesOutput = exports.ListAcceptedPortfolioSharesOutput || (exports.ListAcceptedPortfolioSharesOutput = {}));
var ListBudgetsForResourceInput;
(function (ListBudgetsForResourceInput) {
    /**
     * @internal
     */
    ListBudgetsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBudgetsForResourceInput = exports.ListBudgetsForResourceInput || (exports.ListBudgetsForResourceInput = {}));
var ListBudgetsForResourceOutput;
(function (ListBudgetsForResourceOutput) {
    /**
     * @internal
     */
    ListBudgetsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBudgetsForResourceOutput = exports.ListBudgetsForResourceOutput || (exports.ListBudgetsForResourceOutput = {}));
var ListConstraintsForPortfolioInput;
(function (ListConstraintsForPortfolioInput) {
    /**
     * @internal
     */
    ListConstraintsForPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConstraintsForPortfolioInput = exports.ListConstraintsForPortfolioInput || (exports.ListConstraintsForPortfolioInput = {}));
var ListConstraintsForPortfolioOutput;
(function (ListConstraintsForPortfolioOutput) {
    /**
     * @internal
     */
    ListConstraintsForPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConstraintsForPortfolioOutput = exports.ListConstraintsForPortfolioOutput || (exports.ListConstraintsForPortfolioOutput = {}));
var ListLaunchPathsInput;
(function (ListLaunchPathsInput) {
    /**
     * @internal
     */
    ListLaunchPathsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLaunchPathsInput = exports.ListLaunchPathsInput || (exports.ListLaunchPathsInput = {}));
var LaunchPathSummary;
(function (LaunchPathSummary) {
    /**
     * @internal
     */
    LaunchPathSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchPathSummary = exports.LaunchPathSummary || (exports.LaunchPathSummary = {}));
var ListLaunchPathsOutput;
(function (ListLaunchPathsOutput) {
    /**
     * @internal
     */
    ListLaunchPathsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLaunchPathsOutput = exports.ListLaunchPathsOutput || (exports.ListLaunchPathsOutput = {}));
var ListOrganizationPortfolioAccessInput;
(function (ListOrganizationPortfolioAccessInput) {
    /**
     * @internal
     */
    ListOrganizationPortfolioAccessInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationPortfolioAccessInput = exports.ListOrganizationPortfolioAccessInput || (exports.ListOrganizationPortfolioAccessInput = {}));
var ListOrganizationPortfolioAccessOutput;
(function (ListOrganizationPortfolioAccessOutput) {
    /**
     * @internal
     */
    ListOrganizationPortfolioAccessOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationPortfolioAccessOutput = exports.ListOrganizationPortfolioAccessOutput || (exports.ListOrganizationPortfolioAccessOutput = {}));
var ListPortfolioAccessInput;
(function (ListPortfolioAccessInput) {
    /**
     * @internal
     */
    ListPortfolioAccessInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortfolioAccessInput = exports.ListPortfolioAccessInput || (exports.ListPortfolioAccessInput = {}));
var ListPortfolioAccessOutput;
(function (ListPortfolioAccessOutput) {
    /**
     * @internal
     */
    ListPortfolioAccessOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortfolioAccessOutput = exports.ListPortfolioAccessOutput || (exports.ListPortfolioAccessOutput = {}));
var ListPortfoliosInput;
(function (ListPortfoliosInput) {
    /**
     * @internal
     */
    ListPortfoliosInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortfoliosInput = exports.ListPortfoliosInput || (exports.ListPortfoliosInput = {}));
var ListPortfoliosOutput;
(function (ListPortfoliosOutput) {
    /**
     * @internal
     */
    ListPortfoliosOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortfoliosOutput = exports.ListPortfoliosOutput || (exports.ListPortfoliosOutput = {}));
var ListPortfoliosForProductInput;
(function (ListPortfoliosForProductInput) {
    /**
     * @internal
     */
    ListPortfoliosForProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortfoliosForProductInput = exports.ListPortfoliosForProductInput || (exports.ListPortfoliosForProductInput = {}));
var ListPortfoliosForProductOutput;
(function (ListPortfoliosForProductOutput) {
    /**
     * @internal
     */
    ListPortfoliosForProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPortfoliosForProductOutput = exports.ListPortfoliosForProductOutput || (exports.ListPortfoliosForProductOutput = {}));
var ListPrincipalsForPortfolioInput;
(function (ListPrincipalsForPortfolioInput) {
    /**
     * @internal
     */
    ListPrincipalsForPortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalsForPortfolioInput = exports.ListPrincipalsForPortfolioInput || (exports.ListPrincipalsForPortfolioInput = {}));
var Principal;
(function (Principal) {
    /**
     * @internal
     */
    Principal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Principal = exports.Principal || (exports.Principal = {}));
var ListPrincipalsForPortfolioOutput;
(function (ListPrincipalsForPortfolioOutput) {
    /**
     * @internal
     */
    ListPrincipalsForPortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPrincipalsForPortfolioOutput = exports.ListPrincipalsForPortfolioOutput || (exports.ListPrincipalsForPortfolioOutput = {}));
var ListProvisionedProductPlansInput;
(function (ListProvisionedProductPlansInput) {
    /**
     * @internal
     */
    ListProvisionedProductPlansInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisionedProductPlansInput = exports.ListProvisionedProductPlansInput || (exports.ListProvisionedProductPlansInput = {}));
var ProvisionedProductPlanSummary;
(function (ProvisionedProductPlanSummary) {
    /**
     * @internal
     */
    ProvisionedProductPlanSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedProductPlanSummary = exports.ProvisionedProductPlanSummary || (exports.ProvisionedProductPlanSummary = {}));
var ListProvisionedProductPlansOutput;
(function (ListProvisionedProductPlansOutput) {
    /**
     * @internal
     */
    ListProvisionedProductPlansOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisionedProductPlansOutput = exports.ListProvisionedProductPlansOutput || (exports.ListProvisionedProductPlansOutput = {}));
var ListProvisioningArtifactsInput;
(function (ListProvisioningArtifactsInput) {
    /**
     * @internal
     */
    ListProvisioningArtifactsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningArtifactsInput = exports.ListProvisioningArtifactsInput || (exports.ListProvisioningArtifactsInput = {}));
var ListProvisioningArtifactsOutput;
(function (ListProvisioningArtifactsOutput) {
    /**
     * @internal
     */
    ListProvisioningArtifactsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningArtifactsOutput = exports.ListProvisioningArtifactsOutput || (exports.ListProvisioningArtifactsOutput = {}));
var ListProvisioningArtifactsForServiceActionInput;
(function (ListProvisioningArtifactsForServiceActionInput) {
    /**
     * @internal
     */
    ListProvisioningArtifactsForServiceActionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningArtifactsForServiceActionInput = exports.ListProvisioningArtifactsForServiceActionInput || (exports.ListProvisioningArtifactsForServiceActionInput = {}));
var ProvisioningArtifactView;
(function (ProvisioningArtifactView) {
    /**
     * @internal
     */
    ProvisioningArtifactView.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningArtifactView = exports.ProvisioningArtifactView || (exports.ProvisioningArtifactView = {}));
var ListProvisioningArtifactsForServiceActionOutput;
(function (ListProvisioningArtifactsForServiceActionOutput) {
    /**
     * @internal
     */
    ListProvisioningArtifactsForServiceActionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisioningArtifactsForServiceActionOutput = exports.ListProvisioningArtifactsForServiceActionOutput || (exports.ListProvisioningArtifactsForServiceActionOutput = {}));
var ListRecordHistorySearchFilter;
(function (ListRecordHistorySearchFilter) {
    /**
     * @internal
     */
    ListRecordHistorySearchFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecordHistorySearchFilter = exports.ListRecordHistorySearchFilter || (exports.ListRecordHistorySearchFilter = {}));
var ListRecordHistoryInput;
(function (ListRecordHistoryInput) {
    /**
     * @internal
     */
    ListRecordHistoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecordHistoryInput = exports.ListRecordHistoryInput || (exports.ListRecordHistoryInput = {}));
var ListRecordHistoryOutput;
(function (ListRecordHistoryOutput) {
    /**
     * @internal
     */
    ListRecordHistoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecordHistoryOutput = exports.ListRecordHistoryOutput || (exports.ListRecordHistoryOutput = {}));
var ListResourcesForTagOptionInput;
(function (ListResourcesForTagOptionInput) {
    /**
     * @internal
     */
    ListResourcesForTagOptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesForTagOptionInput = exports.ListResourcesForTagOptionInput || (exports.ListResourcesForTagOptionInput = {}));
var ResourceDetail;
(function (ResourceDetail) {
    /**
     * @internal
     */
    ResourceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDetail = exports.ResourceDetail || (exports.ResourceDetail = {}));
var ListResourcesForTagOptionOutput;
(function (ListResourcesForTagOptionOutput) {
    /**
     * @internal
     */
    ListResourcesForTagOptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesForTagOptionOutput = exports.ListResourcesForTagOptionOutput || (exports.ListResourcesForTagOptionOutput = {}));
var ListServiceActionsInput;
(function (ListServiceActionsInput) {
    /**
     * @internal
     */
    ListServiceActionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceActionsInput = exports.ListServiceActionsInput || (exports.ListServiceActionsInput = {}));
var ListServiceActionsOutput;
(function (ListServiceActionsOutput) {
    /**
     * @internal
     */
    ListServiceActionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceActionsOutput = exports.ListServiceActionsOutput || (exports.ListServiceActionsOutput = {}));
var ListServiceActionsForProvisioningArtifactInput;
(function (ListServiceActionsForProvisioningArtifactInput) {
    /**
     * @internal
     */
    ListServiceActionsForProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceActionsForProvisioningArtifactInput = exports.ListServiceActionsForProvisioningArtifactInput || (exports.ListServiceActionsForProvisioningArtifactInput = {}));
var ListServiceActionsForProvisioningArtifactOutput;
(function (ListServiceActionsForProvisioningArtifactOutput) {
    /**
     * @internal
     */
    ListServiceActionsForProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceActionsForProvisioningArtifactOutput = exports.ListServiceActionsForProvisioningArtifactOutput || (exports.ListServiceActionsForProvisioningArtifactOutput = {}));
var ListStackInstancesForProvisionedProductInput;
(function (ListStackInstancesForProvisionedProductInput) {
    /**
     * @internal
     */
    ListStackInstancesForProvisionedProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStackInstancesForProvisionedProductInput = exports.ListStackInstancesForProvisionedProductInput || (exports.ListStackInstancesForProvisionedProductInput = {}));
var StackInstanceStatus;
(function (StackInstanceStatus) {
    StackInstanceStatus["CURRENT"] = "CURRENT";
    StackInstanceStatus["INOPERABLE"] = "INOPERABLE";
    StackInstanceStatus["OUTDATED"] = "OUTDATED";
})(StackInstanceStatus = exports.StackInstanceStatus || (exports.StackInstanceStatus = {}));
var StackInstance;
(function (StackInstance) {
    /**
     * @internal
     */
    StackInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StackInstance = exports.StackInstance || (exports.StackInstance = {}));
var ListStackInstancesForProvisionedProductOutput;
(function (ListStackInstancesForProvisionedProductOutput) {
    /**
     * @internal
     */
    ListStackInstancesForProvisionedProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStackInstancesForProvisionedProductOutput = exports.ListStackInstancesForProvisionedProductOutput || (exports.ListStackInstancesForProvisionedProductOutput = {}));
var ListTagOptionsFilters;
(function (ListTagOptionsFilters) {
    /**
     * @internal
     */
    ListTagOptionsFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagOptionsFilters = exports.ListTagOptionsFilters || (exports.ListTagOptionsFilters = {}));
var ListTagOptionsInput;
(function (ListTagOptionsInput) {
    /**
     * @internal
     */
    ListTagOptionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagOptionsInput = exports.ListTagOptionsInput || (exports.ListTagOptionsInput = {}));
var ListTagOptionsOutput;
(function (ListTagOptionsOutput) {
    /**
     * @internal
     */
    ListTagOptionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagOptionsOutput = exports.ListTagOptionsOutput || (exports.ListTagOptionsOutput = {}));
var ProvisioningParameter;
(function (ProvisioningParameter) {
    /**
     * @internal
     */
    ProvisioningParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningParameter = exports.ProvisioningParameter || (exports.ProvisioningParameter = {}));
var ProvisioningPreferences;
(function (ProvisioningPreferences) {
    /**
     * @internal
     */
    ProvisioningPreferences.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisioningPreferences = exports.ProvisioningPreferences || (exports.ProvisioningPreferences = {}));
var ProvisionProductInput;
(function (ProvisionProductInput) {
    /**
     * @internal
     */
    ProvisionProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionProductInput = exports.ProvisionProductInput || (exports.ProvisionProductInput = {}));
var ProvisionProductOutput;
(function (ProvisionProductOutput) {
    /**
     * @internal
     */
    ProvisionProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionProductOutput = exports.ProvisionProductOutput || (exports.ProvisionProductOutput = {}));
var RejectPortfolioShareInput;
(function (RejectPortfolioShareInput) {
    /**
     * @internal
     */
    RejectPortfolioShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectPortfolioShareInput = exports.RejectPortfolioShareInput || (exports.RejectPortfolioShareInput = {}));
var RejectPortfolioShareOutput;
(function (RejectPortfolioShareOutput) {
    /**
     * @internal
     */
    RejectPortfolioShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectPortfolioShareOutput = exports.RejectPortfolioShareOutput || (exports.RejectPortfolioShareOutput = {}));
var ScanProvisionedProductsInput;
(function (ScanProvisionedProductsInput) {
    /**
     * @internal
     */
    ScanProvisionedProductsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScanProvisionedProductsInput = exports.ScanProvisionedProductsInput || (exports.ScanProvisionedProductsInput = {}));
var ScanProvisionedProductsOutput;
(function (ScanProvisionedProductsOutput) {
    /**
     * @internal
     */
    ScanProvisionedProductsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScanProvisionedProductsOutput = exports.ScanProvisionedProductsOutput || (exports.ScanProvisionedProductsOutput = {}));
var ProductViewFilterBy;
(function (ProductViewFilterBy) {
    ProductViewFilterBy["FullTextSearch"] = "FullTextSearch";
    ProductViewFilterBy["Owner"] = "Owner";
    ProductViewFilterBy["ProductType"] = "ProductType";
    ProductViewFilterBy["SourceProductId"] = "SourceProductId";
})(ProductViewFilterBy = exports.ProductViewFilterBy || (exports.ProductViewFilterBy = {}));
var ProductViewSortBy;
(function (ProductViewSortBy) {
    ProductViewSortBy["CreationDate"] = "CreationDate";
    ProductViewSortBy["Title"] = "Title";
    ProductViewSortBy["VersionCount"] = "VersionCount";
})(ProductViewSortBy = exports.ProductViewSortBy || (exports.ProductViewSortBy = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var SearchProductsInput;
(function (SearchProductsInput) {
    /**
     * @internal
     */
    SearchProductsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProductsInput = exports.SearchProductsInput || (exports.SearchProductsInput = {}));
var ProductViewAggregationValue;
(function (ProductViewAggregationValue) {
    /**
     * @internal
     */
    ProductViewAggregationValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProductViewAggregationValue = exports.ProductViewAggregationValue || (exports.ProductViewAggregationValue = {}));
var SearchProductsOutput;
(function (SearchProductsOutput) {
    /**
     * @internal
     */
    SearchProductsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProductsOutput = exports.SearchProductsOutput || (exports.SearchProductsOutput = {}));
var ProductSource;
(function (ProductSource) {
    ProductSource["ACCOUNT"] = "ACCOUNT";
})(ProductSource = exports.ProductSource || (exports.ProductSource = {}));
var SearchProductsAsAdminInput;
(function (SearchProductsAsAdminInput) {
    /**
     * @internal
     */
    SearchProductsAsAdminInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProductsAsAdminInput = exports.SearchProductsAsAdminInput || (exports.SearchProductsAsAdminInput = {}));
var SearchProductsAsAdminOutput;
(function (SearchProductsAsAdminOutput) {
    /**
     * @internal
     */
    SearchProductsAsAdminOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProductsAsAdminOutput = exports.SearchProductsAsAdminOutput || (exports.SearchProductsAsAdminOutput = {}));
var ProvisionedProductViewFilterBy;
(function (ProvisionedProductViewFilterBy) {
    ProvisionedProductViewFilterBy["SearchQuery"] = "SearchQuery";
})(ProvisionedProductViewFilterBy = exports.ProvisionedProductViewFilterBy || (exports.ProvisionedProductViewFilterBy = {}));
var SearchProvisionedProductsInput;
(function (SearchProvisionedProductsInput) {
    /**
     * @internal
     */
    SearchProvisionedProductsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProvisionedProductsInput = exports.SearchProvisionedProductsInput || (exports.SearchProvisionedProductsInput = {}));
var ProvisionedProductAttribute;
(function (ProvisionedProductAttribute) {
    /**
     * @internal
     */
    ProvisionedProductAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedProductAttribute = exports.ProvisionedProductAttribute || (exports.ProvisionedProductAttribute = {}));
var SearchProvisionedProductsOutput;
(function (SearchProvisionedProductsOutput) {
    /**
     * @internal
     */
    SearchProvisionedProductsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchProvisionedProductsOutput = exports.SearchProvisionedProductsOutput || (exports.SearchProvisionedProductsOutput = {}));
var TerminateProvisionedProductInput;
(function (TerminateProvisionedProductInput) {
    /**
     * @internal
     */
    TerminateProvisionedProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateProvisionedProductInput = exports.TerminateProvisionedProductInput || (exports.TerminateProvisionedProductInput = {}));
var TerminateProvisionedProductOutput;
(function (TerminateProvisionedProductOutput) {
    /**
     * @internal
     */
    TerminateProvisionedProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateProvisionedProductOutput = exports.TerminateProvisionedProductOutput || (exports.TerminateProvisionedProductOutput = {}));
var UpdateConstraintInput;
(function (UpdateConstraintInput) {
    /**
     * @internal
     */
    UpdateConstraintInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConstraintInput = exports.UpdateConstraintInput || (exports.UpdateConstraintInput = {}));
var UpdateConstraintOutput;
(function (UpdateConstraintOutput) {
    /**
     * @internal
     */
    UpdateConstraintOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConstraintOutput = exports.UpdateConstraintOutput || (exports.UpdateConstraintOutput = {}));
var UpdatePortfolioInput;
(function (UpdatePortfolioInput) {
    /**
     * @internal
     */
    UpdatePortfolioInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePortfolioInput = exports.UpdatePortfolioInput || (exports.UpdatePortfolioInput = {}));
var UpdatePortfolioOutput;
(function (UpdatePortfolioOutput) {
    /**
     * @internal
     */
    UpdatePortfolioOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePortfolioOutput = exports.UpdatePortfolioOutput || (exports.UpdatePortfolioOutput = {}));
var UpdatePortfolioShareInput;
(function (UpdatePortfolioShareInput) {
    /**
     * @internal
     */
    UpdatePortfolioShareInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePortfolioShareInput = exports.UpdatePortfolioShareInput || (exports.UpdatePortfolioShareInput = {}));
var UpdatePortfolioShareOutput;
(function (UpdatePortfolioShareOutput) {
    /**
     * @internal
     */
    UpdatePortfolioShareOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePortfolioShareOutput = exports.UpdatePortfolioShareOutput || (exports.UpdatePortfolioShareOutput = {}));
var UpdateProductInput;
(function (UpdateProductInput) {
    /**
     * @internal
     */
    UpdateProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProductInput = exports.UpdateProductInput || (exports.UpdateProductInput = {}));
var UpdateProductOutput;
(function (UpdateProductOutput) {
    /**
     * @internal
     */
    UpdateProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProductOutput = exports.UpdateProductOutput || (exports.UpdateProductOutput = {}));
var UpdateProvisioningPreferences;
(function (UpdateProvisioningPreferences) {
    /**
     * @internal
     */
    UpdateProvisioningPreferences.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisioningPreferences = exports.UpdateProvisioningPreferences || (exports.UpdateProvisioningPreferences = {}));
var UpdateProvisionedProductInput;
(function (UpdateProvisionedProductInput) {
    /**
     * @internal
     */
    UpdateProvisionedProductInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisionedProductInput = exports.UpdateProvisionedProductInput || (exports.UpdateProvisionedProductInput = {}));
var UpdateProvisionedProductOutput;
(function (UpdateProvisionedProductOutput) {
    /**
     * @internal
     */
    UpdateProvisionedProductOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisionedProductOutput = exports.UpdateProvisionedProductOutput || (exports.UpdateProvisionedProductOutput = {}));
var PropertyKey;
(function (PropertyKey) {
    PropertyKey["LaunchRole"] = "LAUNCH_ROLE";
    PropertyKey["Owner"] = "OWNER";
})(PropertyKey = exports.PropertyKey || (exports.PropertyKey = {}));
var UpdateProvisionedProductPropertiesInput;
(function (UpdateProvisionedProductPropertiesInput) {
    /**
     * @internal
     */
    UpdateProvisionedProductPropertiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisionedProductPropertiesInput = exports.UpdateProvisionedProductPropertiesInput || (exports.UpdateProvisionedProductPropertiesInput = {}));
var UpdateProvisionedProductPropertiesOutput;
(function (UpdateProvisionedProductPropertiesOutput) {
    /**
     * @internal
     */
    UpdateProvisionedProductPropertiesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisionedProductPropertiesOutput = exports.UpdateProvisionedProductPropertiesOutput || (exports.UpdateProvisionedProductPropertiesOutput = {}));
var UpdateProvisioningArtifactInput;
(function (UpdateProvisioningArtifactInput) {
    /**
     * @internal
     */
    UpdateProvisioningArtifactInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisioningArtifactInput = exports.UpdateProvisioningArtifactInput || (exports.UpdateProvisioningArtifactInput = {}));
var UpdateProvisioningArtifactOutput;
(function (UpdateProvisioningArtifactOutput) {
    /**
     * @internal
     */
    UpdateProvisioningArtifactOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProvisioningArtifactOutput = exports.UpdateProvisioningArtifactOutput || (exports.UpdateProvisioningArtifactOutput = {}));
var UpdateServiceActionInput;
(function (UpdateServiceActionInput) {
    /**
     * @internal
     */
    UpdateServiceActionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceActionInput = exports.UpdateServiceActionInput || (exports.UpdateServiceActionInput = {}));
var UpdateServiceActionOutput;
(function (UpdateServiceActionOutput) {
    /**
     * @internal
     */
    UpdateServiceActionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceActionOutput = exports.UpdateServiceActionOutput || (exports.UpdateServiceActionOutput = {}));
var UpdateTagOptionInput;
(function (UpdateTagOptionInput) {
    /**
     * @internal
     */
    UpdateTagOptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTagOptionInput = exports.UpdateTagOptionInput || (exports.UpdateTagOptionInput = {}));
var UpdateTagOptionOutput;
(function (UpdateTagOptionOutput) {
    /**
     * @internal
     */
    UpdateTagOptionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTagOptionOutput = exports.UpdateTagOptionOutput || (exports.UpdateTagOptionOutput = {}));
//# sourceMappingURL=models_0.js.map