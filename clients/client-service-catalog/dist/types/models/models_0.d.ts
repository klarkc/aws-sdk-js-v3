import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum PortfolioShareType {
    AWS_ORGANIZATIONS = "AWS_ORGANIZATIONS",
    AWS_SERVICECATALOG = "AWS_SERVICECATALOG",
    IMPORTED = "IMPORTED"
}
export interface AcceptPortfolioShareInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The type of shared portfolios to accept. The default is to accept imported portfolios.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>AWS_ORGANIZATIONS</code> - Accept portfolios shared by the management account of your
     *                organization.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>IMPORTED</code> - Accept imported portfolios.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>AWS_SERVICECATALOG</code> - Not supported. (Throws ResourceNotFoundException.)</p>
     *             </li>
     *          </ul>
     *          <p>For example, <code>aws servicecatalog accept-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS</code>
     *          </p>
     */
    PortfolioShareType?: PortfolioShareType | string;
}
export declare namespace AcceptPortfolioShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptPortfolioShareInput) => any;
}
export interface AcceptPortfolioShareOutput {
}
export declare namespace AcceptPortfolioShareOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptPortfolioShareOutput) => any;
}
/**
 * <p>One or more parameters provided to the operation are not valid.</p>
 */
export interface InvalidParametersException extends __SmithyException, $MetadataBearer {
    name: "InvalidParametersException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidParametersException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParametersException) => any;
}
/**
 * <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export declare enum AccessLevelFilterKey {
    ACCOUNT = "Account",
    ROLE = "Role",
    USER = "User"
}
/**
 * <p>The access level to use to filter results.</p>
 */
export interface AccessLevelFilter {
    /**
     * <p>The access level.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Account</code> - Filter results based on the account.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Role</code> - Filter results based on the federated role of the specified user.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>User</code> - Filter results based on the specified user.</p>
     *             </li>
     *          </ul>
     */
    Key?: AccessLevelFilterKey | string;
    /**
     * <p>The user to which the access level applies. The only supported value is <code>Self</code>.</p>
     */
    Value?: string;
}
export declare namespace AccessLevelFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessLevelFilter) => any;
}
export declare enum AccessStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED",
    UNDER_CHANGE = "UNDER_CHANGE"
}
/**
 * <p>Information about a tag. A tag is a key-value pair. Tags are propagated
 *          to the resources created when provisioning a product.</p>
 */
export interface Tag {
    /**
     * <p>The tag key.</p>
     */
    Key: string | undefined;
    /**
     * <p>The value for this key.</p>
     */
    Value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface AssociateBudgetWithResourceInput {
    /**
     * <p>The name of the budget you want to associate.</p>
     */
    BudgetName: string | undefined;
    /**
     * <p> The resource identifier. Either a portfolio-id or a product-id.</p>
     */
    ResourceId: string | undefined;
}
export declare namespace AssociateBudgetWithResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateBudgetWithResourceInput) => any;
}
export interface AssociateBudgetWithResourceOutput {
}
export declare namespace AssociateBudgetWithResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateBudgetWithResourceOutput) => any;
}
/**
 * <p>The specified resource is a duplicate.</p>
 */
export interface DuplicateResourceException extends __SmithyException, $MetadataBearer {
    name: "DuplicateResourceException";
    $fault: "client";
    Message?: string;
}
export declare namespace DuplicateResourceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DuplicateResourceException) => any;
}
export declare enum PrincipalType {
    IAM = "IAM"
}
export interface AssociatePrincipalWithPortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The ARN of the principal (IAM user, role, or group).</p>
     */
    PrincipalARN: string | undefined;
    /**
     * <p>The principal type. The supported value is <code>IAM</code>.</p>
     */
    PrincipalType: PrincipalType | string | undefined;
}
export declare namespace AssociatePrincipalWithPortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociatePrincipalWithPortfolioInput) => any;
}
export interface AssociatePrincipalWithPortfolioOutput {
}
export declare namespace AssociatePrincipalWithPortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociatePrincipalWithPortfolioOutput) => any;
}
export interface AssociateProductWithPortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The identifier of the source portfolio.</p>
     */
    SourcePortfolioId?: string;
}
export declare namespace AssociateProductWithPortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateProductWithPortfolioInput) => any;
}
export interface AssociateProductWithPortfolioOutput {
}
export declare namespace AssociateProductWithPortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateProductWithPortfolioOutput) => any;
}
export interface AssociateServiceActionWithProvisioningArtifactInput {
    /**
     * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
     */
    ProvisioningArtifactId: string | undefined;
    /**
     * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
     */
    ServiceActionId: string | undefined;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace AssociateServiceActionWithProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateServiceActionWithProvisioningArtifactInput) => any;
}
export interface AssociateServiceActionWithProvisioningArtifactOutput {
}
export declare namespace AssociateServiceActionWithProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateServiceActionWithProvisioningArtifactOutput) => any;
}
export interface AssociateTagOptionWithResourceInput {
    /**
     * <p>The resource identifier.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The TagOption identifier.</p>
     */
    TagOptionId: string | undefined;
}
export declare namespace AssociateTagOptionWithResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTagOptionWithResourceInput) => any;
}
export interface AssociateTagOptionWithResourceOutput {
}
export declare namespace AssociateTagOptionWithResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTagOptionWithResourceOutput) => any;
}
/**
 * <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 */
export interface InvalidStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidStateException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidStateException) => any;
}
/**
 * <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Please use the AWS console to perform the migration
 *          process before retrying the operation.</p>
 */
export interface TagOptionNotMigratedException extends __SmithyException, $MetadataBearer {
    name: "TagOptionNotMigratedException";
    $fault: "client";
    Message?: string;
}
export declare namespace TagOptionNotMigratedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagOptionNotMigratedException) => any;
}
/**
 * <p>A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
 */
export interface ServiceActionAssociation {
    /**
     * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
     */
    ServiceActionId: string | undefined;
    /**
     * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
     */
    ProvisioningArtifactId: string | undefined;
}
export declare namespace ServiceActionAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceActionAssociation) => any;
}
export interface BatchAssociateServiceActionWithProvisioningArtifactInput {
    /**
     * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
     */
    ServiceActionAssociations: ServiceActionAssociation[] | undefined;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace BatchAssociateServiceActionWithProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchAssociateServiceActionWithProvisioningArtifactInput) => any;
}
export declare enum ServiceActionAssociationErrorCode {
    DuplicateResourceException = "DUPLICATE_RESOURCE",
    InternalFailure = "INTERNAL_FAILURE",
    LimitExceededException = "LIMIT_EXCEEDED",
    ResourceNotFoundException = "RESOURCE_NOT_FOUND",
    ThrottlingException = "THROTTLING"
}
/**
 * <p>An object containing information about the error, along with identifying information about the self-service action and its associations.</p>
 */
export interface FailedServiceActionAssociation {
    /**
     * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
     */
    ServiceActionId?: string;
    /**
     * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
     */
    ProductId?: string;
    /**
     * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The error code. Valid values are listed below.</p>
     */
    ErrorCode?: ServiceActionAssociationErrorCode | string;
    /**
     * <p>A text description of the error.</p>
     */
    ErrorMessage?: string;
}
export declare namespace FailedServiceActionAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FailedServiceActionAssociation) => any;
}
export interface BatchAssociateServiceActionWithProvisioningArtifactOutput {
    /**
     * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
     */
    FailedServiceActionAssociations?: FailedServiceActionAssociation[];
}
export declare namespace BatchAssociateServiceActionWithProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchAssociateServiceActionWithProvisioningArtifactOutput) => any;
}
export interface BatchDisassociateServiceActionFromProvisioningArtifactInput {
    /**
     * <p>One or more associations, each consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.</p>
     */
    ServiceActionAssociations: ServiceActionAssociation[] | undefined;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace BatchDisassociateServiceActionFromProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDisassociateServiceActionFromProvisioningArtifactInput) => any;
}
export interface BatchDisassociateServiceActionFromProvisioningArtifactOutput {
    /**
     * <p>An object that contains a list of errors, along with information to help you identify the self-service action.</p>
     */
    FailedServiceActionAssociations?: FailedServiceActionAssociation[];
}
export declare namespace BatchDisassociateServiceActionFromProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BatchDisassociateServiceActionFromProvisioningArtifactOutput) => any;
}
export declare enum CopyOption {
    CopyTags = "CopyTags"
}
export declare enum ProvisioningArtifactPropertyName {
    Id = "Id"
}
export interface CopyProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the source product.</p>
     */
    SourceProductArn: string | undefined;
    /**
     * <p>The identifier of the target product. By default, a new product is created.</p>
     */
    TargetProductId?: string;
    /**
     * <p>A name for the target product. The default is the name of the source product.</p>
     */
    TargetProductName?: string;
    /**
     * <p>The identifiers of the provisioning artifacts (also known as versions) of the product to copy.
     *          By default, all provisioning artifacts are copied.</p>
     */
    SourceProvisioningArtifactIdentifiers?: {
        [key: string]: string;
    }[];
    /**
     * <p>The copy options. If the value is <code>CopyTags</code>, the tags from the source
     *          product are copied to the target product.</p>
     */
    CopyOptions?: (CopyOption | string)[];
    /**
     * <p> A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request. </p>
     */
    IdempotencyToken?: string;
}
export declare namespace CopyProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyProductInput) => any;
}
export interface CopyProductOutput {
    /**
     * <p>The token to use to track the progress of the operation.</p>
     */
    CopyProductToken?: string;
}
export declare namespace CopyProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyProductOutput) => any;
}
export interface CreateConstraintInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p>
     *          <dl>
     *             <dt>LAUNCH</dt>
     *             <dd>
     *                <p>You are required to specify either the <code>RoleArn</code> or the <code>LocalRoleName</code> but can't use both.</p>
     *                <p>Specify the <code>RoleArn</code> property as follows:</p>
     *                <p>
     *                   <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code>
     *                </p>
     *                <p>Specify the <code>LocalRoleName</code> property as follows:</p>
     *                <p>
     *                   <code>{"LocalRoleName": "SCBasicLaunchRole"}</code>
     *                </p>
     *                <p>If you specify the <code>LocalRoleName</code> property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be
     *                account-agnostic so the administrator can create fewer resources per shared account.</p>
     *                <note>
     *                   <p>The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.</p>
     *                </note>
     *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
     *                <p>You also cannot have more than one <code>LAUNCH</code> constraint on a product and portfolio.</p>
     *             </dd>
     *             <dt>NOTIFICATION</dt>
     *             <dd>
     *                <p>Specify the <code>NotificationArns</code> property as follows:</p>
     *                <p>
     *                   <code>{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}</code>
     *                </p>
     *             </dd>
     *             <dt>RESOURCE_UPDATE</dt>
     *             <dd>
     *                <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p>
     *                <p>
     *                   <code>{"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}</code>
     *                </p>
     *                <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p>
     *             </dd>
     *             <dt>STACKSET</dt>
     *             <dd>
     *                <p>Specify the <code>Parameters</code> property as follows:</p>
     *                <p>
     *                   <code>{"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}</code>
     *                </p>
     *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
     *                <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p>
     *                <p>Products with a <code>STACKSET</code> constraint will launch an AWS CloudFormation stack set.</p>
     *             </dd>
     *             <dt>TEMPLATE</dt>
     *             <dd>
     *                <p>Specify the <code>Rules</code> property. For more information, see
     *                   <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html">Template Constraint Rules</a>.</p>
     *             </dd>
     *          </dl>
     */
    Parameters: string | undefined;
    /**
     * <p>The type of constraint.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>LAUNCH</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOTIFICATION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESOURCE_UPDATE</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>STACKSET</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TEMPLATE</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Type: string | undefined;
    /**
     * <p>The description of the constraint.</p>
     */
    Description?: string;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace CreateConstraintInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConstraintInput) => any;
}
/**
 * <p>Information about a constraint.</p>
 */
export interface ConstraintDetail {
    /**
     * <p>The identifier of the constraint.</p>
     */
    ConstraintId?: string;
    /**
     * <p>The type of constraint.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>LAUNCH</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOTIFICATION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>STACKSET</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TEMPLATE</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Type?: string;
    /**
     * <p>The description of the constraint.</p>
     */
    Description?: string;
    /**
     * <p>The owner of the constraint.</p>
     */
    Owner?: string;
    /**
     * <p>The identifier of the product the constraint applies to. Note that a constraint applies to a specific instance of a product within a certain portfolio.</p>
     */
    ProductId?: string;
    /**
     * <p>The identifier of the portfolio the product resides in. The constraint applies only to the instance of the product that lives within this portfolio.</p>
     */
    PortfolioId?: string;
}
export declare namespace ConstraintDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConstraintDetail) => any;
}
export declare enum Status {
    AVAILABLE = "AVAILABLE",
    CREATING = "CREATING",
    FAILED = "FAILED"
}
export interface CreateConstraintOutput {
    /**
     * <p>Information about the constraint.</p>
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * <p>The constraint parameters.</p>
     */
    ConstraintParameters?: string;
    /**
     * <p>The status of the current request.</p>
     */
    Status?: Status | string;
}
export declare namespace CreateConstraintOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConstraintOutput) => any;
}
export interface CreatePortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The name to use for display purposes.</p>
     */
    DisplayName: string | undefined;
    /**
     * <p>The description of the portfolio.</p>
     */
    Description?: string;
    /**
     * <p>The name of the portfolio provider.</p>
     */
    ProviderName: string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: Tag[];
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace CreatePortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePortfolioInput) => any;
}
/**
 * <p>Information about a portfolio.</p>
 */
export interface PortfolioDetail {
    /**
     * <p>The portfolio identifier.</p>
     */
    Id?: string;
    /**
     * <p>The ARN assigned to the portfolio.</p>
     */
    ARN?: string;
    /**
     * <p>The name to use for display purposes.</p>
     */
    DisplayName?: string;
    /**
     * <p>The description of the portfolio.</p>
     */
    Description?: string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The name of the portfolio provider.</p>
     */
    ProviderName?: string;
}
export declare namespace PortfolioDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PortfolioDetail) => any;
}
export interface CreatePortfolioOutput {
    /**
     * <p>Information about the portfolio.</p>
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * <p>Information about the tags associated with the portfolio.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreatePortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePortfolioOutput) => any;
}
export declare enum OrganizationNodeType {
    ACCOUNT = "ACCOUNT",
    ORGANIZATION = "ORGANIZATION",
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT"
}
/**
 * <p>Information about the organization node.</p>
 */
export interface OrganizationNode {
    /**
     * <p>The organization node type.</p>
     */
    Type?: OrganizationNodeType | string;
    /**
     * <p>The identifier of the organization node.</p>
     */
    Value?: string;
}
export declare namespace OrganizationNode {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationNode) => any;
}
export interface CreatePortfolioShareInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The AWS account ID. For example, <code>123456789012</code>.</p>
     */
    AccountId?: string;
    /**
     * <p>The organization node to whom you are going to share. If <code>OrganizationNode</code>
     *          is passed in, <code>PortfolioShare</code> will be created for the node an
     *          ListOrganizationPortfolioAccessd its children (when applies), and a
     *             <code>PortfolioShareToken</code> will be returned in the output in order for the
     *          administrator to monitor the status of the <code>PortfolioShare</code> creation
     *          process.</p>
     */
    OrganizationNode?: OrganizationNode;
    /**
     * <p>Enables or disables <code>TagOptions </code> sharing when creating the portfolio share. If this flag is not provided, TagOptions sharing is disabled.</p>
     */
    ShareTagOptions?: boolean;
}
export declare namespace CreatePortfolioShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePortfolioShareInput) => any;
}
export interface CreatePortfolioShareOutput {
    /**
     * <p>The portfolio shares a unique identifier that only returns if the portfolio is shared to an organization node.</p>
     */
    PortfolioShareToken?: string;
}
export declare namespace CreatePortfolioShareOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePortfolioShareOutput) => any;
}
/**
 * <p>The operation is not supported.</p>
 */
export interface OperationNotSupportedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotSupportedException";
    $fault: "client";
    Message?: string;
}
export declare namespace OperationNotSupportedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OperationNotSupportedException) => any;
}
export declare enum ProductType {
    CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE",
    MARKETPLACE = "MARKETPLACE"
}
export declare enum ProvisioningArtifactType {
    CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE",
    MARKETPLACE_AMI = "MARKETPLACE_AMI",
    MARKETPLACE_CAR = "MARKETPLACE_CAR"
}
/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactProperties {
    /**
     * <p>The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.</p>
     */
    Name?: string;
    /**
     * <p>The description of the provisioning artifact, including how it differs from the previous provisioning artifact.</p>
     */
    Description?: string;
    /**
     * <p>Specify the template source with one of the following options, but not both.
     *          Keys accepted: [ <code>LoadTemplateFromURL</code>, <code>ImportFromPhysicalId</code> ]</p>
     *          <p>The URL of the CloudFormation template in Amazon S3. Specify the URL in JSON format as follows:</p>
     *          <p>
     *             <code>"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."</code>
     *          </p>
     *          <p>
     *             <code>ImportFromPhysicalId</code>: The physical id of the resource that contains the
     *          template. Currently only supports CloudFormation stack arn. Specify the physical id in JSON
     *          format as follows: <code>ImportFromPhysicalId: “arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]</code>
     *          </p>
     */
    Info: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>The type of provisioning artifact.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p>
     *             </li>
     *          </ul>
     */
    Type?: ProvisioningArtifactType | string;
    /**
     * <p>If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.</p>
     */
    DisableTemplateValidation?: boolean;
}
export declare namespace ProvisioningArtifactProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifactProperties) => any;
}
export interface CreateProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The name of the product.</p>
     */
    Name: string | undefined;
    /**
     * <p>The owner of the product.</p>
     */
    Owner: string | undefined;
    /**
     * <p>The description of the product.</p>
     */
    Description?: string;
    /**
     * <p>The distributor of the product.</p>
     */
    Distributor?: string;
    /**
     * <p>The support information about the product.</p>
     */
    SupportDescription?: string;
    /**
     * <p>The contact email for product support.</p>
     */
    SupportEmail?: string;
    /**
     * <p>The contact URL for product support.</p>
     *          <p>
     *             <code>^https?:\/\// </code>/ is the pattern used to validate SupportUrl.</p>
     */
    SupportUrl?: string;
    /**
     * <p>The type of product.</p>
     */
    ProductType: ProductType | string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The configuration of the provisioning artifact. </p>
     */
    ProvisioningArtifactParameters: ProvisioningArtifactProperties | undefined;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace CreateProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProductInput) => any;
}
/**
 * <p>Summary information about a product view.</p>
 */
export interface ProductViewSummary {
    /**
     * <p>The product view identifier.</p>
     */
    Id?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId?: string;
    /**
     * <p>The name of the product.</p>
     */
    Name?: string;
    /**
     * <p>The owner of the product. Contact the product administrator for the significance of
     *          this value.</p>
     */
    Owner?: string;
    /**
     * <p>Short description of the product.</p>
     */
    ShortDescription?: string;
    /**
     * <p>The product type. Contact the product administrator for the significance of this
     *          value. If this value is <code>MARKETPLACE</code>, the product was created by AWS
     *          Marketplace.</p>
     */
    Type?: ProductType | string;
    /**
     * <p>The distributor of the product. Contact the product administrator for the
     *          significance of this value.</p>
     */
    Distributor?: string;
    /**
     * <p>Indicates whether the product has a default path.
     *          If the product does not have a default path, call <a>ListLaunchPaths</a>
     *          to disambiguate between paths. Otherwise, <a>ListLaunchPaths</a> is not
     *          required, and the output of <a>ProductViewSummary</a> can be used directly with
     *          <a>DescribeProvisioningParameters</a>.</p>
     */
    HasDefaultPath?: boolean;
    /**
     * <p>The email contact information to obtain support for this Product.</p>
     */
    SupportEmail?: string;
    /**
     * <p>The description of the support for this Product.</p>
     */
    SupportDescription?: string;
    /**
     * <p>The URL information to obtain support for this Product.</p>
     */
    SupportUrl?: string;
}
export declare namespace ProductViewSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProductViewSummary) => any;
}
/**
 * <p>Information about a product view.</p>
 */
export interface ProductViewDetail {
    /**
     * <p>Summary information about the product view.</p>
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * <p>The status of the product.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>AVAILABLE</code> - The product is ready for use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CREATING</code> - Product creation has started; the product is not ready for use.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>FAILED</code> - An action failed.</p>
     *             </li>
     *          </ul>
     */
    Status?: Status | string;
    /**
     * <p>The ARN of the product.</p>
     */
    ProductARN?: string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
}
export declare namespace ProductViewDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProductViewDetail) => any;
}
export declare enum ProvisioningArtifactGuidance {
    DEFAULT = "DEFAULT",
    DEPRECATED = "DEPRECATED"
}
/**
 * <p>Information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactDetail {
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    Id?: string;
    /**
     * <p>The name of the provisioning artifact.</p>
     */
    Name?: string;
    /**
     * <p>The description of the provisioning artifact.</p>
     */
    Description?: string;
    /**
     * <p>The type of provisioning artifact.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>CLOUD_FORMATION_TEMPLATE</code> - AWS CloudFormation template</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MARKETPLACE_AMI</code> - AWS Marketplace AMI</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>MARKETPLACE_CAR</code> - AWS Marketplace Clusters and AWS Resources</p>
     *             </li>
     *          </ul>
     */
    Type?: ProvisioningArtifactType | string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>Indicates whether the product version is active.</p>
     */
    Active?: boolean;
    /**
     * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
     */
    Guidance?: ProvisioningArtifactGuidance | string;
}
export declare namespace ProvisioningArtifactDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifactDetail) => any;
}
export interface CreateProductOutput {
    /**
     * <p>Information about the product view.</p>
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * <p>Information about the provisioning artifact. </p>
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * <p>Information about the tags associated with the product.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProductOutput) => any;
}
export declare enum ProvisionedProductPlanType {
    CLOUDFORMATION = "CLOUDFORMATION"
}
/**
 * <p>The parameter key-value pair used to update a provisioned product.</p>
 */
export interface UpdateProvisioningParameter {
    /**
     * <p>The parameter key.</p>
     */
    Key?: string;
    /**
     * <p>The parameter value.</p>
     */
    Value?: string;
    /**
     * <p>If set to true, <code>Value</code> is ignored and the previous parameter value is kept.</p>
     */
    UsePreviousValue?: boolean;
}
export declare namespace UpdateProvisioningParameter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisioningParameter) => any;
}
export interface CreateProvisionedProductPlanInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The name of the plan.</p>
     */
    PlanName: string | undefined;
    /**
     * <p>The plan type.</p>
     */
    PlanType: ProvisionedProductPlanType | string | undefined;
    /**
     * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
     *          events.</p>
     */
    NotificationArns?: string[];
    /**
     * <p>The path identifier of the product. This value is optional if the product
     *          has a default path, and required if the product has more than one path.
     *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
     */
    PathId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>A user-friendly name for the provisioned product. This value must be
     *          unique for the AWS account and cannot be updated after the product is provisioned.</p>
     */
    ProvisionedProductName: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId: string | undefined;
    /**
     * <p>Parameters specified by the administrator that are required for provisioning the
     *          product.</p>
     */
    ProvisioningParameters?: UpdateProvisioningParameter[];
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
    /**
     * <p>One or more tags.</p>
     *          <p>If the plan is for an existing provisioned product, the product must have a <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateProvisionedProductPlanInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProvisionedProductPlanInput) => any;
}
export interface CreateProvisionedProductPlanOutput {
    /**
     * <p>The name of the plan.</p>
     */
    PlanName?: string;
    /**
     * <p>The plan identifier.</p>
     */
    PlanId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProvisionProductId?: string;
    /**
     * <p>The user-friendly name of the provisioned product.</p>
     */
    ProvisionedProductName?: string;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId?: string;
}
export declare namespace CreateProvisionedProductPlanOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProvisionedProductPlanOutput) => any;
}
export interface CreateProvisioningArtifactInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The configuration for the provisioning artifact.</p>
     */
    Parameters: ProvisioningArtifactProperties | undefined;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace CreateProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProvisioningArtifactInput) => any;
}
export interface CreateProvisioningArtifactOutput {
    /**
     * <p>Information about the provisioning artifact.</p>
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * <p>Specify the template source with one of the following options, but not both. Keys
     *          accepted: [ <code>LoadTemplateFromURL</code>, <code>ImportFromPhysicalId</code> ].</p>
     *          <p>The URL of the CloudFormation template in Amazon S3, in JSON format. </p>
     *          <p>
     *             <code>LoadTemplateFromURL</code>
     *          </p>
     *          <p>Use the URL of the CloudFormation template in Amazon S3 in JSON format.</p>
     *          <p>
     *             <code>ImportFromPhysicalId</code>
     *          </p>
     *          <p>Use the physical id of the resource that contains the template; currently supports
     *          CloudFormation stack ARN.</p>
     */
    Info?: {
        [key: string]: string;
    };
    /**
     * <p>The status of the current request.</p>
     */
    Status?: Status | string;
}
export declare namespace CreateProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProvisioningArtifactOutput) => any;
}
export declare enum ServiceActionDefinitionKey {
    AssumeRole = "AssumeRole",
    Name = "Name",
    Parameters = "Parameters",
    Version = "Version"
}
export declare enum ServiceActionDefinitionType {
    SsmAutomation = "SSM_AUTOMATION"
}
export interface CreateServiceActionInput {
    /**
     * <p>The self-service action name.</p>
     */
    Name: string | undefined;
    /**
     * <p>The service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
     */
    DefinitionType: ServiceActionDefinitionType | string | undefined;
    /**
     * <p>The self-service action definition. Can be one of the following:</p>
     *          <dl>
     *             <dt>Name</dt>
     *             <dd>
     *                <p>The name of the AWS Systems Manager document (SSM document). For example, <code>AWS-RestartEC2Instance</code>.</p>
     *                <p>If you are using a shared SSM document, you must provide the ARN instead of the name.</p>
     *             </dd>
     *             <dt>Version</dt>
     *             <dd>
     *                <p>The AWS Systems Manager automation document version. For example, <code>"Version": "1"</code>
     *                </p>
     *             </dd>
     *             <dt>AssumeRole</dt>
     *             <dd>
     *                <p>The Amazon Resource Name (ARN) of the role that performs the self-service actions on your behalf. For example, <code>"AssumeRole": "arn:aws:iam::12345678910:role/ActionRole"</code>.</p>
     *                <p>To reuse the provisioned product launch role, set to <code>"AssumeRole": "LAUNCH_ROLE"</code>.</p>
     *             </dd>
     *             <dt>Parameters</dt>
     *             <dd>
     *                <p>The list of parameters in JSON format.</p>
     *                <p>For example: <code>[{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}]</code> or <code>[{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"}]</code>.</p>
     *             </dd>
     *          </dl>
     */
    Definition: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>The self-service action description.</p>
     */
    Description?: string;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace CreateServiceActionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateServiceActionInput) => any;
}
/**
 * <p>Detailed information about the self-service action.</p>
 */
export interface ServiceActionSummary {
    /**
     * <p>The self-service action identifier.</p>
     */
    Id?: string;
    /**
     * <p>The self-service action name.</p>
     */
    Name?: string;
    /**
     * <p>The self-service action description.</p>
     */
    Description?: string;
    /**
     * <p>The self-service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
     */
    DefinitionType?: ServiceActionDefinitionType | string;
}
export declare namespace ServiceActionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceActionSummary) => any;
}
/**
 * <p>An object containing detailed information about the self-service action.</p>
 */
export interface ServiceActionDetail {
    /**
     * <p>Summary information about the self-service action.</p>
     */
    ServiceActionSummary?: ServiceActionSummary;
    /**
     * <p>A map that defines the self-service action.</p>
     */
    Definition?: {
        [key: string]: string;
    };
}
export declare namespace ServiceActionDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceActionDetail) => any;
}
export interface CreateServiceActionOutput {
    /**
     * <p>An object containing information about the self-service action.</p>
     */
    ServiceActionDetail?: ServiceActionDetail;
}
export declare namespace CreateServiceActionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateServiceActionOutput) => any;
}
export interface CreateTagOptionInput {
    /**
     * <p>The TagOption key.</p>
     */
    Key: string | undefined;
    /**
     * <p>The TagOption value.</p>
     */
    Value: string | undefined;
}
export declare namespace CreateTagOptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTagOptionInput) => any;
}
/**
 * <p>Information about a TagOption.</p>
 */
export interface TagOptionDetail {
    /**
     * <p>The TagOption key.</p>
     */
    Key?: string;
    /**
     * <p>The TagOption value.</p>
     */
    Value?: string;
    /**
     * <p>The TagOption active state.</p>
     */
    Active?: boolean;
    /**
     * <p>The TagOption identifier.</p>
     */
    Id?: string;
    /**
     * <p>The AWS account Id of the owner account that created the TagOption.</p>
     */
    Owner?: string;
}
export declare namespace TagOptionDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagOptionDetail) => any;
}
export interface CreateTagOptionOutput {
    /**
     * <p>Information about the TagOption.</p>
     */
    TagOptionDetail?: TagOptionDetail;
}
export declare namespace CreateTagOptionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTagOptionOutput) => any;
}
export interface DeleteConstraintInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The identifier of the constraint.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteConstraintInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConstraintInput) => any;
}
export interface DeleteConstraintOutput {
}
export declare namespace DeleteConstraintOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConstraintOutput) => any;
}
export interface DeletePortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    Id: string | undefined;
}
export declare namespace DeletePortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePortfolioInput) => any;
}
export interface DeletePortfolioOutput {
}
export declare namespace DeletePortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePortfolioOutput) => any;
}
/**
 * <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceInUseException) => any;
}
export interface DeletePortfolioShareInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The AWS account ID.</p>
     */
    AccountId?: string;
    /**
     * <p>The organization node to whom you are going to stop sharing.</p>
     */
    OrganizationNode?: OrganizationNode;
}
export declare namespace DeletePortfolioShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePortfolioShareInput) => any;
}
export interface DeletePortfolioShareOutput {
    /**
     * <p>The portfolio share unique identifier. This will only be returned if delete is made to an organization node.</p>
     */
    PortfolioShareToken?: string;
}
export declare namespace DeletePortfolioShareOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePortfolioShareOutput) => any;
}
export interface DeleteProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProductInput) => any;
}
export interface DeleteProductOutput {
}
export declare namespace DeleteProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProductOutput) => any;
}
export interface DeleteProvisionedProductPlanInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The plan identifier.</p>
     */
    PlanId: string | undefined;
    /**
     * <p>If set to true, AWS Service Catalog stops managing the specified provisioned product even
     *          if it cannot delete the underlying resources.</p>
     */
    IgnoreErrors?: boolean;
}
export declare namespace DeleteProvisionedProductPlanInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProvisionedProductPlanInput) => any;
}
export interface DeleteProvisionedProductPlanOutput {
}
export declare namespace DeleteProvisionedProductPlanOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProvisionedProductPlanOutput) => any;
}
export interface DeleteProvisioningArtifactInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId: string | undefined;
}
export declare namespace DeleteProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProvisioningArtifactInput) => any;
}
export interface DeleteProvisioningArtifactOutput {
}
export declare namespace DeleteProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProvisioningArtifactOutput) => any;
}
export interface DeleteServiceActionInput {
    /**
     * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
     */
    Id: string | undefined;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace DeleteServiceActionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServiceActionInput) => any;
}
export interface DeleteServiceActionOutput {
}
export declare namespace DeleteServiceActionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServiceActionOutput) => any;
}
export interface DeleteTagOptionInput {
    /**
     * <p>The TagOption identifier.</p>
     */
    Id: string | undefined;
}
export declare namespace DeleteTagOptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTagOptionInput) => any;
}
export interface DeleteTagOptionOutput {
}
export declare namespace DeleteTagOptionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTagOptionOutput) => any;
}
export interface DescribeConstraintInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The identifier of the constraint.</p>
     */
    Id: string | undefined;
}
export declare namespace DescribeConstraintInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConstraintInput) => any;
}
export interface DescribeConstraintOutput {
    /**
     * <p>Information about the constraint.</p>
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * <p>The constraint parameters.</p>
     */
    ConstraintParameters?: string;
    /**
     * <p>The status of the current request.</p>
     */
    Status?: Status | string;
}
export declare namespace DescribeConstraintOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConstraintOutput) => any;
}
export interface DescribeCopyProductStatusInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The token for the copy product operation. This token is returned by <a>CopyProduct</a>.</p>
     */
    CopyProductToken: string | undefined;
}
export declare namespace DescribeCopyProductStatusInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCopyProductStatusInput) => any;
}
export declare enum CopyProductStatus {
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    SUCCEEDED = "SUCCEEDED"
}
export interface DescribeCopyProductStatusOutput {
    /**
     * <p>The status of the copy product operation.</p>
     */
    CopyProductStatus?: CopyProductStatus | string;
    /**
     * <p>The identifier of the copied product.</p>
     */
    TargetProductId?: string;
    /**
     * <p>The status message.</p>
     */
    StatusDetail?: string;
}
export declare namespace DescribeCopyProductStatusOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCopyProductStatusOutput) => any;
}
export interface DescribePortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    Id: string | undefined;
}
export declare namespace DescribePortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePortfolioInput) => any;
}
/**
 * <p>Information about a budget.</p>
 */
export interface BudgetDetail {
    /**
     * <p>Name of the associated budget.</p>
     */
    BudgetName?: string;
}
export declare namespace BudgetDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BudgetDetail) => any;
}
export interface DescribePortfolioOutput {
    /**
     * <p>Information about the portfolio.</p>
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * <p>Information about the tags associated with the portfolio.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Information about the TagOptions associated with the portfolio.</p>
     */
    TagOptions?: TagOptionDetail[];
    /**
     * <p>Information about the associated budgets.</p>
     */
    Budgets?: BudgetDetail[];
}
export declare namespace DescribePortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePortfolioOutput) => any;
}
export declare enum DescribePortfolioShareType {
    ACCOUNT = "ACCOUNT",
    ORGANIZATION = "ORGANIZATION",
    ORGANIZATIONAL_UNIT = "ORGANIZATIONAL_UNIT",
    ORGANIZATION_MEMBER_ACCOUNT = "ORGANIZATION_MEMBER_ACCOUNT"
}
export interface DescribePortfolioSharesInput {
    /**
     * <p>The unique identifier of the portfolio for which shares will be retrieved.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The type of portfolio share to summarize. This field acts as a filter on the type of portfolio share, which can be one of the following:</p>
     *          <p>1. <code>ACCOUNT</code> - Represents an external account to account share.</p>
     *          <p>2. <code>ORGANIZATION</code> - Represents a share to an organization. This share is available to every account in the organization.</p>
     *          <p>3. <code>ORGANIZATIONAL_UNIT</code> - Represents a share to an organizational unit.</p>
     *          <p>4. <code>ORGANIZATION_MEMBER_ACCOUNT</code> - Represents a share to an account in the organization.</p>
     */
    Type: DescribePortfolioShareType | string | undefined;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace DescribePortfolioSharesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePortfolioSharesInput) => any;
}
/**
 * <p>Information about the portfolio share.</p>
 */
export interface PortfolioShareDetail {
    /**
     * <p>The identifier of the recipient entity that received the portfolio share.
     *          The recipient entities can be one of the following:
     *       </p>
     *          <p>1. An external account.</p>
     *          <p>2. An organziation member account.</p>
     *          <p>3. An organzational unit (OU).</p>
     *          <p>4. The organization itself. (This shares with every account in the organization).</p>
     */
    PrincipalId?: string;
    /**
     * <p>The type of the portfolio share.</p>
     */
    Type?: DescribePortfolioShareType | string;
    /**
     * <p>Indicates whether the shared portfolio is imported by the recipient account. If the recipient is in an organization node, the share is automatically imported, and the field is always set to true.</p>
     */
    Accepted?: boolean;
    /**
     * <p>Indicates whether TagOptions sharing is enabled or disabled for the portfolio share.</p>
     */
    ShareTagOptions?: boolean;
}
export declare namespace PortfolioShareDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PortfolioShareDetail) => any;
}
export interface DescribePortfolioSharesOutput {
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
    /**
     * <p>Summaries about each of the portfolio shares.</p>
     */
    PortfolioShareDetails?: PortfolioShareDetail[];
}
export declare namespace DescribePortfolioSharesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePortfolioSharesOutput) => any;
}
export interface DescribePortfolioShareStatusInput {
    /**
     * <p>The token for the portfolio share operation. This token is returned either by CreatePortfolioShare or by DeletePortfolioShare.</p>
     */
    PortfolioShareToken: string | undefined;
}
export declare namespace DescribePortfolioShareStatusInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePortfolioShareStatusInput) => any;
}
/**
 * <p>Errors that occurred during the portfolio share operation.</p>
 */
export interface ShareError {
    /**
     * <p>List of accounts impacted by the error.</p>
     */
    Accounts?: string[];
    /**
     * <p>Information about the error.</p>
     */
    Message?: string;
    /**
     * <p>Error type that happened when processing the operation.</p>
     */
    Error?: string;
}
export declare namespace ShareError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareError) => any;
}
/**
 * <p>Information about the portfolio share operation.</p>
 */
export interface ShareDetails {
    /**
     * <p>List of accounts for whom the operation succeeded.</p>
     */
    SuccessfulShares?: string[];
    /**
     * <p>List of errors.</p>
     */
    ShareErrors?: ShareError[];
}
export declare namespace ShareDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareDetails) => any;
}
export declare enum ShareStatus {
    COMPLETED = "COMPLETED",
    COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
    ERROR = "ERROR",
    IN_PROGRESS = "IN_PROGRESS",
    NOT_STARTED = "NOT_STARTED"
}
export interface DescribePortfolioShareStatusOutput {
    /**
     * <p>The token for the portfolio share operation. For example, <code>share-6v24abcdefghi</code>.</p>
     */
    PortfolioShareToken?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId?: string;
    /**
     * <p>Organization node identifier. It can be either account id, organizational unit id or organization id.</p>
     */
    OrganizationNodeValue?: string;
    /**
     * <p>Status of the portfolio share operation.</p>
     */
    Status?: ShareStatus | string;
    /**
     * <p>Information about the portfolio share operation.</p>
     */
    ShareDetails?: ShareDetails;
}
export declare namespace DescribePortfolioShareStatusOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePortfolioShareStatusOutput) => any;
}
export interface DescribeProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    Id?: string;
    /**
     * <p>The product name.</p>
     */
    Name?: string;
}
export declare namespace DescribeProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductInput) => any;
}
/**
 * <p>A launch path object.</p>
 */
export interface LaunchPath {
    /**
     * <p>The identifier of the launch path.</p>
     */
    Id?: string;
    /**
     * <p>The name of the launch path.</p>
     */
    Name?: string;
}
export declare namespace LaunchPath {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchPath) => any;
}
/**
 * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
 */
export interface ProvisioningArtifact {
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    Id?: string;
    /**
     * <p>The name of the provisioning artifact.</p>
     */
    Name?: string;
    /**
     * <p>The description of the provisioning artifact.</p>
     */
    Description?: string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
     */
    Guidance?: ProvisioningArtifactGuidance | string;
}
export declare namespace ProvisioningArtifact {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifact) => any;
}
export interface DescribeProductOutput {
    /**
     * <p>Summary information about the product view.</p>
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * <p>Information about the provisioning artifacts for the specified product.</p>
     */
    ProvisioningArtifacts?: ProvisioningArtifact[];
    /**
     * <p>Information about the associated budgets.</p>
     */
    Budgets?: BudgetDetail[];
    /**
     * <p>Information about the associated launch paths.</p>
     */
    LaunchPaths?: LaunchPath[];
}
export declare namespace DescribeProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductOutput) => any;
}
export interface DescribeProductAsAdminInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    Id?: string;
    /**
     * <p>The product name.</p>
     */
    Name?: string;
    /**
     * <p>The unique identifier of the shared portfolio that the specified product is associated
     *          with.</p>
     *          <p>You can provide this parameter to retrieve the shared TagOptions associated with the
     *          product. If this parameter is provided and if TagOptions sharing is enabled in the
     *          portfolio share, the API returns both local and shared TagOptions associated with the
     *          product. Otherwise only local TagOptions will be returned. </p>
     */
    SourcePortfolioId?: string;
}
export declare namespace DescribeProductAsAdminInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductAsAdminInput) => any;
}
/**
 * <p>Summary information about a provisioning artifact (also known as a version) for a product.</p>
 */
export interface ProvisioningArtifactSummary {
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    Id?: string;
    /**
     * <p>The name of the provisioning artifact.</p>
     */
    Name?: string;
    /**
     * <p>The description of the provisioning artifact.</p>
     */
    Description?: string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The metadata for the provisioning artifact. This is used with AWS Marketplace products.</p>
     */
    ProvisioningArtifactMetadata?: {
        [key: string]: string;
    };
}
export declare namespace ProvisioningArtifactSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifactSummary) => any;
}
export interface DescribeProductAsAdminOutput {
    /**
     * <p>Information about the product view.</p>
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * <p>Information about the provisioning artifacts (also known as versions) for the specified product.</p>
     */
    ProvisioningArtifactSummaries?: ProvisioningArtifactSummary[];
    /**
     * <p>Information about the tags associated with the product.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Information about the TagOptions associated with the product.</p>
     */
    TagOptions?: TagOptionDetail[];
    /**
     * <p>Information about the associated budgets.</p>
     */
    Budgets?: BudgetDetail[];
}
export declare namespace DescribeProductAsAdminOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductAsAdminOutput) => any;
}
export interface DescribeProductViewInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product view identifier.</p>
     */
    Id: string | undefined;
}
export declare namespace DescribeProductViewInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductViewInput) => any;
}
export interface DescribeProductViewOutput {
    /**
     * <p>Summary information about the product.</p>
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * <p>Information about the provisioning artifacts for the product.</p>
     */
    ProvisioningArtifacts?: ProvisioningArtifact[];
}
export declare namespace DescribeProductViewOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProductViewOutput) => any;
}
/**
 * DescribeProvisionedProductAPI input structure.
 *
 *         AcceptLanguage - [Optional]
 *         The language code for localization.
 *
 *         Id - [Optional]
 *         The provisioned product identifier.
 *
 *         Name - [Optional]
 *         Another provisioned product identifier. Customers must provide either Id or Name.
 */
export interface DescribeProvisionedProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The provisioned product identifier. You must provide the name or ID, but not both.</p>
     *          <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>
     */
    Id?: string;
    /**
     * <p>The name of the provisioned product. You must provide the name or ID, but not both.</p>
     *          <p>If you do not provide a name or ID, or you provide both name and ID, an <code>InvalidParametersException</code> will occur.</p>
     */
    Name?: string;
}
export declare namespace DescribeProvisionedProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisionedProductInput) => any;
}
/**
 * <p>Information about a CloudWatch dashboard.</p>
 */
export interface CloudWatchDashboard {
    /**
     * <p>The name of the CloudWatch dashboard.</p>
     */
    Name?: string;
}
export declare namespace CloudWatchDashboard {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudWatchDashboard) => any;
}
export declare enum ProvisionedProductStatus {
    AVAILABLE = "AVAILABLE",
    ERROR = "ERROR",
    PLAN_IN_PROGRESS = "PLAN_IN_PROGRESS",
    TAINTED = "TAINTED",
    UNDER_CHANGE = "UNDER_CHANGE"
}
/**
 * <p>Information about a provisioned product.</p>
 */
export interface ProvisionedProductDetail {
    /**
     * <p>The user-friendly name of the provisioned product.</p>
     */
    Name?: string;
    /**
     * <p>The ARN of the provisioned product.</p>
     */
    Arn?: string;
    /**
     * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
     */
    Type?: string;
    /**
     * <p>The identifier of the provisioned product.</p>
     */
    Id?: string;
    /**
     * <p>The current status of the provisioned product.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most
     *                recent operation succeeded and completed.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results.
     *                Wait for an <code>AVAILABLE</code> status before performing operations.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has
     *                completed the requested operation but is not exactly what was requested. For example, a
     *                request to update to a new version failed and the stack rolled back to the current version.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running.
     *                For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product,
     *                but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an <code>AVAILABLE</code> status before performing operations.</p>
     *             </li>
     *          </ul>
     */
    Status?: ProvisionedProductStatus | string;
    /**
     * <p>The current status message of the provisioned product.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
    /**
     * <p>The record identifier of the last request performed on this provisioned product.</p>
     */
    LastRecordId?: string;
    /**
     * <p>The record identifier of the last request performed on this provisioned product of the following types:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                ProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                UpdateProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                ExecuteProvisionedProductPlan
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                TerminateProvisionedProduct
     *             </p>
     *             </li>
     *          </ul>
     */
    LastProvisioningRecordId?: string;
    /**
     * <p>The record identifier of the last successful request performed on this provisioned product of the following types:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                ProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                UpdateProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                ExecuteProvisionedProductPlan
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                TerminateProvisionedProduct
     *             </p>
     *             </li>
     *          </ul>
     */
    LastSuccessfulProvisioningRecordId?: string;
    /**
     * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
     */
    ProductId?: string;
    /**
     * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The ARN of the launch role associated with the provisioned product.</p>
     */
    LaunchRoleArn?: string;
}
export declare namespace ProvisionedProductDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionedProductDetail) => any;
}
export interface DescribeProvisionedProductOutput {
    /**
     * <p>Information about the provisioned product.</p>
     */
    ProvisionedProductDetail?: ProvisionedProductDetail;
    /**
     * <p>Any CloudWatch dashboards that were created when provisioning the product.</p>
     */
    CloudWatchDashboards?: CloudWatchDashboard[];
}
export declare namespace DescribeProvisionedProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisionedProductOutput) => any;
}
export interface DescribeProvisionedProductPlanInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The plan identifier.</p>
     */
    PlanId: string | undefined;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace DescribeProvisionedProductPlanInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisionedProductPlanInput) => any;
}
export declare enum ProvisionedProductPlanStatus {
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    CREATE_SUCCESS = "CREATE_SUCCESS",
    EXECUTE_FAILED = "EXECUTE_FAILED",
    EXECUTE_IN_PROGRESS = "EXECUTE_IN_PROGRESS",
    EXECUTE_SUCCESS = "EXECUTE_SUCCESS"
}
/**
 * <p>Information about a plan.</p>
 */
export interface ProvisionedProductPlanDetails {
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The path identifier of the product. This value is optional if the product
     *          has a default path, and required if the product has more than one path.
     *          To list the paths for a product, use <a>ListLaunchPaths</a>.</p>
     */
    PathId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId?: string;
    /**
     * <p>The name of the plan.</p>
     */
    PlanName?: string;
    /**
     * <p>The plan identifier.</p>
     */
    PlanId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProvisionProductId?: string;
    /**
     * <p>The user-friendly name of the provisioned product.</p>
     */
    ProvisionProductName?: string;
    /**
     * <p>The plan type.</p>
     */
    PlanType?: ProvisionedProductPlanType | string;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The status.</p>
     */
    Status?: ProvisionedProductPlanStatus | string;
    /**
     * <p>The time when the plan was last updated.</p>
     */
    UpdatedTime?: Date;
    /**
     * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
     *          events.</p>
     */
    NotificationArns?: string[];
    /**
     * <p>Parameters specified by the administrator that are required for provisioning the
     *          product.</p>
     */
    ProvisioningParameters?: UpdateProvisioningParameter[];
    /**
     * <p>One or more tags.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The status message.</p>
     */
    StatusMessage?: string;
}
export declare namespace ProvisionedProductPlanDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionedProductPlanDetails) => any;
}
export declare enum ChangeAction {
    ADD = "ADD",
    MODIFY = "MODIFY",
    REMOVE = "REMOVE"
}
export declare enum EvaluationType {
    DYNAMIC = "DYNAMIC",
    STATIC = "STATIC"
}
export declare enum ResourceAttribute {
    CREATIONPOLICY = "CREATIONPOLICY",
    DELETIONPOLICY = "DELETIONPOLICY",
    METADATA = "METADATA",
    PROPERTIES = "PROPERTIES",
    TAGS = "TAGS",
    UPDATEPOLICY = "UPDATEPOLICY"
}
export declare enum RequiresRecreation {
    ALWAYS = "ALWAYS",
    CONDITIONALLY = "CONDITIONALLY",
    NEVER = "NEVER"
}
/**
 * <p>Information about a change to a resource attribute.</p>
 */
export interface ResourceTargetDefinition {
    /**
     * <p>The attribute to be changed.</p>
     */
    Attribute?: ResourceAttribute | string;
    /**
     * <p>If the attribute is <code>Properties</code>, the value is the name of the property.
     *          Otherwise, the value is null.</p>
     */
    Name?: string;
    /**
     * <p>If the attribute is <code>Properties</code>, indicates whether a change to this property
     *          causes the resource to be re-created.</p>
     */
    RequiresRecreation?: RequiresRecreation | string;
}
export declare namespace ResourceTargetDefinition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceTargetDefinition) => any;
}
/**
 * <p>Information about a change to a resource attribute.</p>
 */
export interface ResourceChangeDetail {
    /**
     * <p>Information about the resource attribute to be modified.</p>
     */
    Target?: ResourceTargetDefinition;
    /**
     * <p>For static evaluations, the value of the resource attribute will change and the new value is known.
     *          For dynamic evaluations, the value might change, and any new value will be determined when the plan is updated.</p>
     */
    Evaluation?: EvaluationType | string;
    /**
     * <p>The ID of the entity that caused the change.</p>
     */
    CausingEntity?: string;
}
export declare namespace ResourceChangeDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceChangeDetail) => any;
}
export declare enum Replacement {
    CONDITIONAL = "CONDITIONAL",
    FALSE = "FALSE",
    TRUE = "TRUE"
}
/**
 * <p>Information about a resource change that will occur when a plan is executed.</p>
 */
export interface ResourceChange {
    /**
     * <p>The change action.</p>
     */
    Action?: ChangeAction | string;
    /**
     * <p>The ID of the resource, as defined in the CloudFormation template.</p>
     */
    LogicalResourceId?: string;
    /**
     * <p>The ID of the resource, if it was already created.</p>
     */
    PhysicalResourceId?: string;
    /**
     * <p>The type of resource.</p>
     */
    ResourceType?: string;
    /**
     * <p>If the change type is <code>Modify</code>, indicates whether the existing resource
     *          is deleted and replaced with a new one.</p>
     */
    Replacement?: Replacement | string;
    /**
     * <p>The change scope.</p>
     */
    Scope?: (ResourceAttribute | string)[];
    /**
     * <p>Information about the resource changes.</p>
     */
    Details?: ResourceChangeDetail[];
}
export declare namespace ResourceChange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceChange) => any;
}
export interface DescribeProvisionedProductPlanOutput {
    /**
     * <p>Information about the plan.</p>
     */
    ProvisionedProductPlanDetails?: ProvisionedProductPlanDetails;
    /**
     * <p>Information about the resource changes that will occur when the plan is executed.</p>
     */
    ResourceChanges?: ResourceChange[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace DescribeProvisionedProductPlanOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisionedProductPlanOutput) => any;
}
export interface DescribeProvisioningArtifactInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId?: string;
    /**
     * <p>The provisioning artifact name.</p>
     */
    ProvisioningArtifactName?: string;
    /**
     * <p>The product name.</p>
     */
    ProductName?: string;
    /**
     * <p>Indicates whether a verbose level of detail is enabled.</p>
     */
    Verbose?: boolean;
}
export declare namespace DescribeProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningArtifactInput) => any;
}
export interface DescribeProvisioningArtifactOutput {
    /**
     * <p>Information about the provisioning artifact.</p>
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * <p>The URL of the CloudFormation template in Amazon S3.</p>
     */
    Info?: {
        [key: string]: string;
    };
    /**
     * <p>The status of the current request.</p>
     */
    Status?: Status | string;
}
export declare namespace DescribeProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningArtifactOutput) => any;
}
export interface DescribeProvisioningParametersInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier. You must provide the product name or ID, but not both.</p>
     */
    ProductId?: string;
    /**
     * <p>The name of the product. You must provide the name or ID, but not both.</p>
     */
    ProductName?: string;
    /**
     * <p>The identifier of the provisioning artifact. You must provide the name or ID, but not both.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
     */
    ProvisioningArtifactName?: string;
    /**
     * <p>The path identifier of the product. This value is optional if the product
     *          has a default path, and required if the product has more than one path.
     *          To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.</p>
     */
    PathId?: string;
    /**
     * <p>The name of the path. You must provide the name or ID, but not both.</p>
     */
    PathName?: string;
}
export declare namespace DescribeProvisioningParametersInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningParametersInput) => any;
}
/**
 * <p>Summary information about a constraint.</p>
 */
export interface ConstraintSummary {
    /**
     * <p>The type of constraint.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>LAUNCH</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>NOTIFICATION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>STACKSET</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TEMPLATE</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Type?: string;
    /**
     * <p>The description of the constraint.</p>
     */
    Description?: string;
}
export declare namespace ConstraintSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConstraintSummary) => any;
}
/**
 * <p>Provisioning artifact output.</p>
 */
export interface ProvisioningArtifactOutput {
    /**
     * <p>The provisioning artifact output key.</p>
     */
    Key?: string;
    /**
     * <p>Description of the provisioning artifact output key.</p>
     */
    Description?: string;
}
export declare namespace ProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifactOutput) => any;
}
/**
 * <p>The constraints that the administrator has put on the parameter.</p>
 */
export interface ParameterConstraints {
    /**
     * <p>The values that the administrator has allowed for the parameter.</p>
     */
    AllowedValues?: string[];
    /**
     * <p>A regular expression that represents the patterns that allow for <code>String</code> types. The pattern must match the entire parameter value provided.</p>
     */
    AllowedPattern?: string;
    /**
     * <p>A string that explains a constraint when the constraint is violated. For example, without a constraint description, a parameter that has an allowed pattern of <code>[A-Za-z0-9]+</code> displays the following error message when the user specifies an invalid value:</p>
     *
     *          <p>
     *             <code>Malformed input-Parameter MyParameter must match pattern [A-Za-z0-9]+</code>
     *          </p>
     *
     *          <p>By adding a constraint description, such as must only contain letters (uppercase and lowercase) and numbers, you can display the following customized error message:</p>
     *
     *          <p>
     *             <code>Malformed input-Parameter MyParameter must only contain uppercase and lowercase letters and numbers.</code>
     *          </p>
     */
    ConstraintDescription?: string;
    /**
     * <p>An integer value that determines the largest number of characters you want to allow for <code>String</code> types. </p>
     */
    MaxLength?: string;
    /**
     * <p>An integer value that determines the smallest number of characters you want to allow for <code>String</code> types.</p>
     */
    MinLength?: string;
    /**
     * <p>A numeric value that determines the largest numeric value you want to allow for <code>Number</code> types.</p>
     */
    MaxValue?: string;
    /**
     * <p>A numeric value that determines the smallest numeric value you want to allow for <code>Number</code> types. </p>
     */
    MinValue?: string;
}
export declare namespace ParameterConstraints {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ParameterConstraints) => any;
}
/**
 * <p>Information about a parameter used to provision a product.</p>
 */
export interface ProvisioningArtifactParameter {
    /**
     * <p>The parameter key.</p>
     */
    ParameterKey?: string;
    /**
     * <p>The default value.</p>
     */
    DefaultValue?: string;
    /**
     * <p>The parameter type.</p>
     */
    ParameterType?: string;
    /**
     * <p>If this value is true, the value for this parameter is obfuscated from view when the
     *          parameter is retrieved. This parameter is used to hide sensitive information.</p>
     */
    IsNoEcho?: boolean;
    /**
     * <p>The description of the parameter.</p>
     */
    Description?: string;
    /**
     * <p>Constraints that the administrator has put on a parameter.</p>
     */
    ParameterConstraints?: ParameterConstraints;
}
export declare namespace ProvisioningArtifactParameter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifactParameter) => any;
}
/**
 * <p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p>
 *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface ProvisioningArtifactPreferences {
    /**
     * <p>One or more AWS accounts where stack instances are deployed from the stack set. These accounts can be scoped in <code>ProvisioningPreferences$StackSetAccounts</code> and <code>UpdateProvisioningPreferences$StackSetAccounts</code>.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     */
    StackSetAccounts?: string[];
    /**
     * <p>One or more AWS Regions where stack instances are deployed from the stack set. These regions can be scoped in <code>ProvisioningPreferences$StackSetRegions</code> and <code>UpdateProvisioningPreferences$StackSetRegions</code>.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     */
    StackSetRegions?: string[];
}
export declare namespace ProvisioningArtifactPreferences {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifactPreferences) => any;
}
/**
 * <p>Summary information about a TagOption.</p>
 */
export interface TagOptionSummary {
    /**
     * <p>The TagOption key.</p>
     */
    Key?: string;
    /**
     * <p>The TagOption value.</p>
     */
    Values?: string[];
}
export declare namespace TagOptionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagOptionSummary) => any;
}
/**
 * <p>Additional information provided by the administrator.</p>
 */
export interface UsageInstruction {
    /**
     * <p>The usage instruction type for the value.</p>
     */
    Type?: string;
    /**
     * <p>The usage instruction value for this type.</p>
     */
    Value?: string;
}
export declare namespace UsageInstruction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UsageInstruction) => any;
}
export interface DescribeProvisioningParametersOutput {
    /**
     * <p>Information about the parameters used to provision the product.</p>
     */
    ProvisioningArtifactParameters?: ProvisioningArtifactParameter[];
    /**
     * <p>Information about the constraints used to provision the product.</p>
     */
    ConstraintSummaries?: ConstraintSummary[];
    /**
     * <p>Any additional metadata specifically related to the provisioning of the product. For
     *          example, see the <code>Version</code> field of the CloudFormation template.</p>
     */
    UsageInstructions?: UsageInstruction[];
    /**
     * <p>Information about the TagOptions associated with the resource.</p>
     */
    TagOptions?: TagOptionSummary[];
    /**
     * <p>An object that contains information about preferences, such as regions and accounts, for the provisioning artifact.</p>
     */
    ProvisioningArtifactPreferences?: ProvisioningArtifactPreferences;
    /**
     * <p>The output of the provisioning artifact.</p>
     */
    ProvisioningArtifactOutputs?: ProvisioningArtifactOutput[];
}
export declare namespace DescribeProvisioningParametersOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningParametersOutput) => any;
}
export interface DescribeRecordInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The record identifier of the provisioned product. This identifier is returned by the
     *          request operation.</p>
     */
    Id: string | undefined;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace DescribeRecordInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecordInput) => any;
}
/**
 * <p>The error code and description resulting from an operation.</p>
 */
export interface RecordError {
    /**
     * <p>The numeric value of the error.</p>
     */
    Code?: string;
    /**
     * <p>The description of the error.</p>
     */
    Description?: string;
}
export declare namespace RecordError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecordError) => any;
}
/**
 * <p>Information about a tag, which is a key-value pair.</p>
 */
export interface RecordTag {
    /**
     * <p>The key for this tag.</p>
     */
    Key?: string;
    /**
     * <p>The value for this tag.</p>
     */
    Value?: string;
}
export declare namespace RecordTag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecordTag) => any;
}
export declare enum RecordStatus {
    CREATED = "CREATED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    IN_PROGRESS_IN_ERROR = "IN_PROGRESS_IN_ERROR",
    SUCCEEDED = "SUCCEEDED"
}
/**
 * <p>Information about a request operation.</p>
 */
export interface RecordDetail {
    /**
     * <p>The identifier of the record.</p>
     */
    RecordId?: string;
    /**
     * <p>The user-friendly name of the provisioned product.</p>
     */
    ProvisionedProductName?: string;
    /**
     * <p>The status of the provisioned product.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>CREATED</code> - The request was created but the operation has not started.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>IN_PROGRESS</code> - The requested operation is in progress.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>IN_PROGRESS_IN_ERROR</code> - The provisioned product is under change but the
     *             requested operation failed and some remediation is occurring. For example, a rollback.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SUCCEEDED</code> - The requested operation has successfully completed.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>FAILED</code> - The requested operation has unsuccessfully completed.
     *             Investigate using the error messages returned.</p>
     *             </li>
     *          </ul>
     */
    Status?: RecordStatus | string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The time when the record was last updated.</p>
     */
    UpdatedTime?: Date;
    /**
     * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
     */
    ProvisionedProductType?: string;
    /**
     * <p>The record type.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>PROVISION_PRODUCT</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>UPDATE_PROVISIONED_PRODUCT</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TERMINATE_PROVISIONED_PRODUCT</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    RecordType?: string;
    /**
     * <p>The identifier of the provisioned product.</p>
     */
    ProvisionedProductId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId?: string;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The path identifier.</p>
     */
    PathId?: string;
    /**
     * <p>The errors that occurred.</p>
     */
    RecordErrors?: RecordError[];
    /**
     * <p>One or more tags.</p>
     */
    RecordTags?: RecordTag[];
    /**
     * <p>The ARN of the launch role associated with the provisioned product.</p>
     */
    LaunchRoleArn?: string;
}
export declare namespace RecordDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecordDetail) => any;
}
/**
 * <p>The output for the product created as the result of a request. For example, the output for
 *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
 */
export interface RecordOutput {
    /**
     * <p>The output key.</p>
     */
    OutputKey?: string;
    /**
     * <p>The output value.</p>
     */
    OutputValue?: string;
    /**
     * <p>The description of the output.</p>
     */
    Description?: string;
}
export declare namespace RecordOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecordOutput) => any;
}
export interface DescribeRecordOutput {
    /**
     * <p>Information about the product.</p>
     */
    RecordDetail?: RecordDetail;
    /**
     * <p>Information about the product created as the result of a request. For example, the output for
     *          a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</p>
     */
    RecordOutputs?: RecordOutput[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace DescribeRecordOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecordOutput) => any;
}
export interface DescribeServiceActionInput {
    /**
     * <p>The self-service action identifier.</p>
     */
    Id: string | undefined;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace DescribeServiceActionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeServiceActionInput) => any;
}
export interface DescribeServiceActionOutput {
    /**
     * <p>Detailed information about the self-service action.</p>
     */
    ServiceActionDetail?: ServiceActionDetail;
}
export declare namespace DescribeServiceActionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeServiceActionOutput) => any;
}
export interface DescribeServiceActionExecutionParametersInput {
    /**
     * <p>The identifier of the provisioned product.</p>
     */
    ProvisionedProductId: string | undefined;
    /**
     * <p>The self-service action identifier.</p>
     */
    ServiceActionId: string | undefined;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace DescribeServiceActionExecutionParametersInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeServiceActionExecutionParametersInput) => any;
}
/**
 * <p>Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.</p>
 */
export interface ExecutionParameter {
    /**
     * <p>The name of the execution parameter.</p>
     */
    Name?: string;
    /**
     * <p>The execution parameter type.</p>
     */
    Type?: string;
    /**
     * <p>The default values for the execution parameter.</p>
     */
    DefaultValues?: string[];
}
export declare namespace ExecutionParameter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecutionParameter) => any;
}
export interface DescribeServiceActionExecutionParametersOutput {
    /**
     * <p>The parameters of the self-service action.</p>
     */
    ServiceActionParameters?: ExecutionParameter[];
}
export declare namespace DescribeServiceActionExecutionParametersOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeServiceActionExecutionParametersOutput) => any;
}
export interface DescribeTagOptionInput {
    /**
     * <p>The TagOption identifier.</p>
     */
    Id: string | undefined;
}
export declare namespace DescribeTagOptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTagOptionInput) => any;
}
export interface DescribeTagOptionOutput {
    /**
     * <p>Information about the TagOption.</p>
     */
    TagOptionDetail?: TagOptionDetail;
}
export declare namespace DescribeTagOptionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTagOptionOutput) => any;
}
export interface DisableAWSOrganizationsAccessInput {
}
export declare namespace DisableAWSOrganizationsAccessInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableAWSOrganizationsAccessInput) => any;
}
export interface DisableAWSOrganizationsAccessOutput {
}
export declare namespace DisableAWSOrganizationsAccessOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableAWSOrganizationsAccessOutput) => any;
}
export interface DisassociateBudgetFromResourceInput {
    /**
     * <p>The name of the budget you want to disassociate.</p>
     */
    BudgetName: string | undefined;
    /**
     * <p>The resource identifier you want to disassociate from. Either a portfolio-id or a product-id.</p>
     */
    ResourceId: string | undefined;
}
export declare namespace DisassociateBudgetFromResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateBudgetFromResourceInput) => any;
}
export interface DisassociateBudgetFromResourceOutput {
}
export declare namespace DisassociateBudgetFromResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateBudgetFromResourceOutput) => any;
}
export interface DisassociatePrincipalFromPortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The ARN of the principal (IAM user, role, or group).</p>
     */
    PrincipalARN: string | undefined;
}
export declare namespace DisassociatePrincipalFromPortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociatePrincipalFromPortfolioInput) => any;
}
export interface DisassociatePrincipalFromPortfolioOutput {
}
export declare namespace DisassociatePrincipalFromPortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociatePrincipalFromPortfolioOutput) => any;
}
export interface DisassociateProductFromPortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
}
export declare namespace DisassociateProductFromPortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateProductFromPortfolioInput) => any;
}
export interface DisassociateProductFromPortfolioOutput {
}
export declare namespace DisassociateProductFromPortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateProductFromPortfolioOutput) => any;
}
export interface DisassociateServiceActionFromProvisioningArtifactInput {
    /**
     * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
     */
    ProvisioningArtifactId: string | undefined;
    /**
     * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
     */
    ServiceActionId: string | undefined;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace DisassociateServiceActionFromProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateServiceActionFromProvisioningArtifactInput) => any;
}
export interface DisassociateServiceActionFromProvisioningArtifactOutput {
}
export declare namespace DisassociateServiceActionFromProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateServiceActionFromProvisioningArtifactOutput) => any;
}
export interface DisassociateTagOptionFromResourceInput {
    /**
     * <p>The resource identifier.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The TagOption identifier.</p>
     */
    TagOptionId: string | undefined;
}
export declare namespace DisassociateTagOptionFromResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTagOptionFromResourceInput) => any;
}
export interface DisassociateTagOptionFromResourceOutput {
}
export declare namespace DisassociateTagOptionFromResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTagOptionFromResourceOutput) => any;
}
export interface EnableAWSOrganizationsAccessInput {
}
export declare namespace EnableAWSOrganizationsAccessInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableAWSOrganizationsAccessInput) => any;
}
export interface EnableAWSOrganizationsAccessOutput {
}
export declare namespace EnableAWSOrganizationsAccessOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableAWSOrganizationsAccessOutput) => any;
}
export interface ExecuteProvisionedProductPlanInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The plan identifier.</p>
     */
    PlanId: string | undefined;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace ExecuteProvisionedProductPlanInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteProvisionedProductPlanInput) => any;
}
export interface ExecuteProvisionedProductPlanOutput {
    /**
     * <p>Information about the result of provisioning the product.</p>
     */
    RecordDetail?: RecordDetail;
}
export declare namespace ExecuteProvisionedProductPlanOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteProvisionedProductPlanOutput) => any;
}
export interface ExecuteProvisionedProductServiceActionInput {
    /**
     * <p>The identifier of the provisioned product.</p>
     */
    ProvisionedProductId: string | undefined;
    /**
     * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
     */
    ServiceActionId: string | undefined;
    /**
     * <p>An idempotency token that uniquely identifies the execute request.</p>
     */
    ExecuteToken?: string;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>A map of all self-service action parameters and their values. If a provided parameter is of a special type, such as <code>TARGET</code>, the provided value will
     *             override the default value generated by AWS Service Catalog. If the parameters field is not provided, no additional parameters are passed and default values will be used for
     *             any special parameters such as <code>TARGET</code>.</p>
     */
    Parameters?: {
        [key: string]: string[];
    };
}
export declare namespace ExecuteProvisionedProductServiceActionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteProvisionedProductServiceActionInput) => any;
}
export interface ExecuteProvisionedProductServiceActionOutput {
    /**
     * <p>An object containing detailed information about the result of provisioning the product.</p>
     */
    RecordDetail?: RecordDetail;
}
export declare namespace ExecuteProvisionedProductServiceActionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ExecuteProvisionedProductServiceActionOutput) => any;
}
export interface GetAWSOrganizationsAccessStatusInput {
}
export declare namespace GetAWSOrganizationsAccessStatusInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAWSOrganizationsAccessStatusInput) => any;
}
export interface GetAWSOrganizationsAccessStatusOutput {
    /**
     * <p>The status of the portfolio share feature.</p>
     */
    AccessStatus?: AccessStatus | string;
}
export declare namespace GetAWSOrganizationsAccessStatusOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAWSOrganizationsAccessStatusOutput) => any;
}
export interface GetProvisionedProductOutputsInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The identifier of the provisioned product that you want the outputs from.</p>
     */
    ProvisionedProductId?: string;
    /**
     * <p>The name of the provisioned product that you want the outputs from.</p>
     */
    ProvisionedProductName?: string;
    /**
     * <p>The list of keys that the API should return with their values. If none are provided, the API will return all outputs of the provisioned product.</p>
     */
    OutputKeys?: string[];
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace GetProvisionedProductOutputsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetProvisionedProductOutputsInput) => any;
}
export interface GetProvisionedProductOutputsOutput {
    /**
     * <p>Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
     *       </p>
     */
    Outputs?: RecordOutput[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace GetProvisionedProductOutputsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetProvisionedProductOutputsOutput) => any;
}
export interface ImportAsProvisionedProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId: string | undefined;
    /**
     * <p>The user-friendly name of the provisioned product. The value must be unique for the AWS
     *          account. The name cannot be updated after the product is provisioned. </p>
     */
    ProvisionedProductName: string | undefined;
    /**
     * <p>The unique identifier of the resource to be imported. It only currently supports
     *          CloudFormation stack IDs.</p>
     */
    PhysicalId: string | undefined;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace ImportAsProvisionedProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportAsProvisionedProductInput) => any;
}
export interface ImportAsProvisionedProductOutput {
    /**
     * <p>Information about a request operation.</p>
     */
    RecordDetail?: RecordDetail;
}
export declare namespace ImportAsProvisionedProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportAsProvisionedProductOutput) => any;
}
export interface ListAcceptedPortfolioSharesInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The type of shared portfolios to list. The default is to list imported portfolios.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>AWS_ORGANIZATIONS</code> - List portfolios shared by the management
     *                account of your organization</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>AWS_SERVICECATALOG</code> - List default portfolios</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>IMPORTED</code> - List imported portfolios</p>
     *             </li>
     *          </ul>
     */
    PortfolioShareType?: PortfolioShareType | string;
}
export declare namespace ListAcceptedPortfolioSharesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAcceptedPortfolioSharesInput) => any;
}
export interface ListAcceptedPortfolioSharesOutput {
    /**
     * <p>Information about the portfolios.</p>
     */
    PortfolioDetails?: PortfolioDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListAcceptedPortfolioSharesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAcceptedPortfolioSharesOutput) => any;
}
export interface ListBudgetsForResourceInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The resource identifier.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListBudgetsForResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBudgetsForResourceInput) => any;
}
export interface ListBudgetsForResourceOutput {
    /**
     * <p>Information about the associated budgets.</p>
     */
    Budgets?: BudgetDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListBudgetsForResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBudgetsForResourceOutput) => any;
}
export interface ListConstraintsForPortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The product identifier.</p>
     */
    ProductId?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListConstraintsForPortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConstraintsForPortfolioInput) => any;
}
export interface ListConstraintsForPortfolioOutput {
    /**
     * <p>Information about the constraints.</p>
     */
    ConstraintDetails?: ConstraintDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListConstraintsForPortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConstraintsForPortfolioOutput) => any;
}
export interface ListLaunchPathsInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListLaunchPathsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLaunchPathsInput) => any;
}
/**
 * <p>Summary information about a product path for a user.</p>
 */
export interface LaunchPathSummary {
    /**
     * <p>The identifier of the product path.</p>
     */
    Id?: string;
    /**
     * <p>The constraints on the portfolio-product relationship.</p>
     */
    ConstraintSummaries?: ConstraintSummary[];
    /**
     * <p>The tags associated with this product path.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The name of the portfolio to which the user was assigned.</p>
     */
    Name?: string;
}
export declare namespace LaunchPathSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchPathSummary) => any;
}
export interface ListLaunchPathsOutput {
    /**
     * <p>Information about the launch path.</p>
     */
    LaunchPathSummaries?: LaunchPathSummary[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListLaunchPathsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLaunchPathsOutput) => any;
}
export interface ListOrganizationPortfolioAccessInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier. For example, <code>port-2abcdext3y5fk</code>.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The organization node type that will be returned in the output.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ORGANIZATION</code> - Organization that has access to the portfolio. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ORGANIZATIONAL_UNIT</code> - Organizational unit that has access to the portfolio within your organization.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ACCOUNT</code> - Account that has access to the portfolio within your organization.</p>
     *             </li>
     *          </ul>
     */
    OrganizationNodeType: OrganizationNodeType | string | undefined;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace ListOrganizationPortfolioAccessInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationPortfolioAccessInput) => any;
}
export interface ListOrganizationPortfolioAccessOutput {
    /**
     * <p>Displays information about the organization nodes.</p>
     */
    OrganizationNodes?: OrganizationNode[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListOrganizationPortfolioAccessOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationPortfolioAccessOutput) => any;
}
export interface ListPortfolioAccessInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The ID of an organization node the portfolio is shared with. All children of this node with an inherited portfolio share will be returned.</p>
     */
    OrganizationParentId?: string;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace ListPortfolioAccessInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPortfolioAccessInput) => any;
}
export interface ListPortfolioAccessOutput {
    /**
     * <p>Information about the AWS accounts with access to the portfolio.</p>
     */
    AccountIds?: string[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListPortfolioAccessOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPortfolioAccessOutput) => any;
}
export interface ListPortfoliosInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace ListPortfoliosInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPortfoliosInput) => any;
}
export interface ListPortfoliosOutput {
    /**
     * <p>Information about the portfolios.</p>
     */
    PortfolioDetails?: PortfolioDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListPortfoliosOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPortfoliosOutput) => any;
}
export interface ListPortfoliosForProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace ListPortfoliosForProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPortfoliosForProductInput) => any;
}
export interface ListPortfoliosForProductOutput {
    /**
     * <p>Information about the portfolios.</p>
     */
    PortfolioDetails?: PortfolioDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListPortfoliosForProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPortfoliosForProductOutput) => any;
}
export interface ListPrincipalsForPortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListPrincipalsForPortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalsForPortfolioInput) => any;
}
/**
 * <p>Information about a principal.</p>
 */
export interface Principal {
    /**
     * <p>The ARN of the principal (IAM user, role, or group).</p>
     */
    PrincipalARN?: string;
    /**
     * <p>The principal type. The supported value is <code>IAM</code>.</p>
     */
    PrincipalType?: PrincipalType | string;
}
export declare namespace Principal {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Principal) => any;
}
export interface ListPrincipalsForPortfolioOutput {
    /**
     * <p>The IAM principals (users or roles) associated with the portfolio.</p>
     */
    Principals?: Principal[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListPrincipalsForPortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalsForPortfolioOutput) => any;
}
export interface ListProvisionedProductPlansInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProvisionProductId?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
     */
    AccessLevelFilter?: AccessLevelFilter;
}
export declare namespace ListProvisionedProductPlansInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisionedProductPlansInput) => any;
}
/**
 * <p>Summary information about a plan.</p>
 */
export interface ProvisionedProductPlanSummary {
    /**
     * <p>The name of the plan.</p>
     */
    PlanName?: string;
    /**
     * <p>The plan identifier.</p>
     */
    PlanId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProvisionProductId?: string;
    /**
     * <p>The user-friendly name of the provisioned product.</p>
     */
    ProvisionProductName?: string;
    /**
     * <p>The plan type.</p>
     */
    PlanType?: ProvisionedProductPlanType | string;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId?: string;
}
export declare namespace ProvisionedProductPlanSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionedProductPlanSummary) => any;
}
export interface ListProvisionedProductPlansOutput {
    /**
     * <p>Information about the plans.</p>
     */
    ProvisionedProductPlans?: ProvisionedProductPlanSummary[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListProvisionedProductPlansOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisionedProductPlansOutput) => any;
}
export interface ListProvisioningArtifactsInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
}
export declare namespace ListProvisioningArtifactsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningArtifactsInput) => any;
}
export interface ListProvisioningArtifactsOutput {
    /**
     * <p>Information about the provisioning artifacts.</p>
     */
    ProvisioningArtifactDetails?: ProvisioningArtifactDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListProvisioningArtifactsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningArtifactsOutput) => any;
}
export interface ListProvisioningArtifactsForServiceActionInput {
    /**
     * <p>The self-service action identifier. For example, <code>act-fs7abcd89wxyz</code>.</p>
     */
    ServiceActionId: string | undefined;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace ListProvisioningArtifactsForServiceActionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningArtifactsForServiceActionInput) => any;
}
/**
 * <p>An object that contains summary information about a product view and a provisioning artifact.</p>
 */
export interface ProvisioningArtifactView {
    /**
     * <p>Summary information about a product view.</p>
     */
    ProductViewSummary?: ProductViewSummary;
    /**
     * <p>Information about a provisioning artifact. A provisioning artifact is also known as a product version.</p>
     */
    ProvisioningArtifact?: ProvisioningArtifact;
}
export declare namespace ProvisioningArtifactView {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningArtifactView) => any;
}
export interface ListProvisioningArtifactsForServiceActionOutput {
    /**
     * <p>An array of objects with information about product views and provisioning artifacts.</p>
     */
    ProvisioningArtifactViews?: ProvisioningArtifactView[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListProvisioningArtifactsForServiceActionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningArtifactsForServiceActionOutput) => any;
}
/**
 * <p>The search filter to use when listing history records.</p>
 */
export interface ListRecordHistorySearchFilter {
    /**
     * <p>The filter key.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>product</code> - Filter results based on the specified product identifier.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>provisionedproduct</code> - Filter results based on the provisioned product identifier.</p>
     *             </li>
     *          </ul>
     */
    Key?: string;
    /**
     * <p>The filter value.</p>
     */
    Value?: string;
}
export declare namespace ListRecordHistorySearchFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecordHistorySearchFilter) => any;
}
export interface ListRecordHistoryInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * <p>The search filter to scope the results.</p>
     */
    SearchFilter?: ListRecordHistorySearchFilter;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListRecordHistoryInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecordHistoryInput) => any;
}
export interface ListRecordHistoryOutput {
    /**
     * <p>The records, in reverse chronological order.</p>
     */
    RecordDetails?: RecordDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListRecordHistoryOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecordHistoryOutput) => any;
}
export interface ListResourcesForTagOptionInput {
    /**
     * <p>The TagOption identifier.</p>
     */
    TagOptionId: string | undefined;
    /**
     * <p>The resource type.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Portfolio</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Product</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    ResourceType?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListResourcesForTagOptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesForTagOptionInput) => any;
}
/**
 * <p>Information about a resource.</p>
 */
export interface ResourceDetail {
    /**
     * <p>The identifier of the resource.</p>
     */
    Id?: string;
    /**
     * <p>The ARN of the resource.</p>
     */
    ARN?: string;
    /**
     * <p>The name of the resource.</p>
     */
    Name?: string;
    /**
     * <p>The description of the resource.</p>
     */
    Description?: string;
    /**
     * <p>The creation time of the resource.</p>
     */
    CreatedTime?: Date;
}
export declare namespace ResourceDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceDetail) => any;
}
export interface ListResourcesForTagOptionOutput {
    /**
     * <p>Information about the resources.</p>
     */
    ResourceDetails?: ResourceDetail[];
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListResourcesForTagOptionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesForTagOptionOutput) => any;
}
export interface ListServiceActionsInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListServiceActionsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceActionsInput) => any;
}
export interface ListServiceActionsOutput {
    /**
     * <p>An object containing information about the service actions associated with the provisioning artifact.</p>
     */
    ServiceActionSummaries?: ServiceActionSummary[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListServiceActionsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceActionsOutput) => any;
}
export interface ListServiceActionsForProvisioningArtifactInput {
    /**
     * <p>The product identifier. For example, <code>prod-abcdzk7xy33qa</code>.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact. For example, <code>pa-4abcdjnxjj6ne</code>.</p>
     */
    ProvisioningArtifactId: string | undefined;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace ListServiceActionsForProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceActionsForProvisioningArtifactInput) => any;
}
export interface ListServiceActionsForProvisioningArtifactOutput {
    /**
     * <p>An object containing information about the self-service actions associated with the provisioning artifact.</p>
     */
    ServiceActionSummaries?: ServiceActionSummary[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListServiceActionsForProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListServiceActionsForProvisioningArtifactOutput) => any;
}
export interface ListStackInstancesForProvisionedProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The identifier of the provisioned product.</p>
     */
    ProvisionedProductId: string | undefined;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace ListStackInstancesForProvisionedProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStackInstancesForProvisionedProductInput) => any;
}
export declare enum StackInstanceStatus {
    CURRENT = "CURRENT",
    INOPERABLE = "INOPERABLE",
    OUTDATED = "OUTDATED"
}
/**
 * <p>An AWS CloudFormation stack, in a specific account and region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status. </p>
 */
export interface StackInstance {
    /**
     * <p>The name of the AWS account that the stack instance is associated with.</p>
     */
    Account?: string;
    /**
     * <p>The name of the AWS region that the stack instance is associated with.</p>
     */
    Region?: string;
    /**
     * <p>The status of the stack instance, in terms of its synchronization with its associated stack set. </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to true, to delete the stack instance, and then delete the stack manually. </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because either
     *             the associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation,
     *             or the stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or was stopped before the stack was created or updated.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CURRENT</code>: The stack is currently up to date with the stack set.</p>
     *             </li>
     *          </ul>
     */
    StackInstanceStatus?: StackInstanceStatus | string;
}
export declare namespace StackInstance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StackInstance) => any;
}
export interface ListStackInstancesForProvisionedProductOutput {
    /**
     * <p>List of stack instances.</p>
     */
    StackInstances?: StackInstance[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ListStackInstancesForProvisionedProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStackInstancesForProvisionedProductOutput) => any;
}
/**
 * <p>Filters to use when listing TagOptions.</p>
 */
export interface ListTagOptionsFilters {
    /**
     * <p>The TagOption key.</p>
     */
    Key?: string;
    /**
     * <p>The TagOption value.</p>
     */
    Value?: string;
    /**
     * <p>The active state.</p>
     */
    Active?: boolean;
}
export declare namespace ListTagOptionsFilters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagOptionsFilters) => any;
}
export interface ListTagOptionsInput {
    /**
     * <p>The search filters. If no search filters are specified, the output includes all TagOptions.</p>
     */
    Filters?: ListTagOptionsFilters;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListTagOptionsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagOptionsInput) => any;
}
export interface ListTagOptionsOutput {
    /**
     * <p>Information about the TagOptions.</p>
     */
    TagOptionDetails?: TagOptionDetail[];
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ListTagOptionsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagOptionsOutput) => any;
}
/**
 * <p>Information about a parameter used to provision a product.</p>
 */
export interface ProvisioningParameter {
    /**
     * <p>The parameter key.</p>
     */
    Key?: string;
    /**
     * <p>The parameter value.</p>
     */
    Value?: string;
}
export declare namespace ProvisioningParameter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningParameter) => any;
}
/**
 * <p>The user-defined preferences that will be applied when updating a provisioned
 *          product. Not all preferences are applicable to all provisioned product type</p>
 *          <p>One or more AWS accounts that will have access to the provisioned product.</p>
 *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
 *          <p>The AWS accounts specified should be within the list of accounts in the
 *             <code>STACKSET</code> constraint. To get the list of accounts in the
 *             <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code>
 *          operation.</p>
 *          <p>If no values are specified, the default value is all accounts from the
 *             <code>STACKSET</code> constraint.</p>
 */
export interface ProvisioningPreferences {
    /**
     * <p>One or more AWS accounts where the provisioned product will be available.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>The specified accounts should be within the list of accounts from the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
     *          <p>If no values are specified, the default value is all acounts from the <code>STACKSET</code> constraint.</p>
     */
    StackSetAccounts?: string[];
    /**
     * <p>One or more AWS Regions where the provisioned product will be available.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
     *          <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
     */
    StackSetRegions?: string[];
    /**
     * <p>The number of accounts, per region, for which this operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
     *          <p>The default value is <code>0</code> if no value is specified.</p>
     */
    StackSetFailureToleranceCount?: number;
    /**
     * <p>The percentage of accounts, per region, for which this stack operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
     *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
     */
    StackSetFailureTolerancePercentage?: number;
    /**
     * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p>
     *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
     */
    StackSetMaxConcurrencyCount?: number;
    /**
     * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
     *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as <code>1</code> instead.</p>
     *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
     */
    StackSetMaxConcurrencyPercentage?: number;
}
export declare namespace ProvisioningPreferences {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningPreferences) => any;
}
export interface ProvisionProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier. You must provide the name or ID, but not both.</p>
     */
    ProductId?: string;
    /**
     * <p>The name of the product. You must provide the name or ID, but not both.</p>
     */
    ProductName?: string;
    /**
     * <p>The identifier of the provisioning artifact. You must provide the name or ID, but not both.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
     */
    ProvisioningArtifactName?: string;
    /**
     * <p>The path identifier of the product. This value is optional if the product
     *          has a default path, and required if the product has more than one path.
     *          To list the paths for a product, use <a>ListLaunchPaths</a>. You must provide the name or ID, but not both.</p>
     */
    PathId?: string;
    /**
     * <p>The name of the path. You must provide the name or ID, but not both.</p>
     */
    PathName?: string;
    /**
     * <p>A user-friendly name for the provisioned product. This value must be
     *          unique for the AWS account and cannot be updated after the product is provisioned.</p>
     */
    ProvisionedProductName: string | undefined;
    /**
     * <p>Parameters specified by the administrator that are required for provisioning the
     *          product.</p>
     */
    ProvisioningParameters?: ProvisioningParameter[];
    /**
     * <p>An object that contains information about the provisioning preferences for a stack set.</p>
     */
    ProvisioningPreferences?: ProvisioningPreferences;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related
     *          events.</p>
     */
    NotificationArns?: string[];
    /**
     * <p>An idempotency token that uniquely identifies the provisioning request.</p>
     */
    ProvisionToken?: string;
}
export declare namespace ProvisionProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionProductInput) => any;
}
export interface ProvisionProductOutput {
    /**
     * <p>Information about the result of provisioning the product.</p>
     */
    RecordDetail?: RecordDetail;
}
export declare namespace ProvisionProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionProductOutput) => any;
}
export interface RejectPortfolioShareInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The type of shared portfolios to reject. The default is to reject imported portfolios.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>AWS_ORGANIZATIONS</code> - Reject portfolios shared by the management account of your
     *                organization.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>IMPORTED</code> - Reject imported portfolios.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>AWS_SERVICECATALOG</code> - Not supported. (Throws ResourceNotFoundException.)</p>
     *             </li>
     *          </ul>
     *          <p>For example, <code>aws servicecatalog reject-portfolio-share --portfolio-id "port-2qwzkwxt3y5fk" --portfolio-share-type AWS_ORGANIZATIONS</code>
     *          </p>
     */
    PortfolioShareType?: PortfolioShareType | string;
}
export declare namespace RejectPortfolioShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectPortfolioShareInput) => any;
}
export interface RejectPortfolioShareOutput {
}
export declare namespace RejectPortfolioShareOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectPortfolioShareOutput) => any;
}
export interface ScanProvisionedProductsInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace ScanProvisionedProductsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ScanProvisionedProductsInput) => any;
}
export interface ScanProvisionedProductsOutput {
    /**
     * <p>Information about the provisioned products.</p>
     */
    ProvisionedProducts?: ProvisionedProductDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace ScanProvisionedProductsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ScanProvisionedProductsOutput) => any;
}
export declare enum ProductViewFilterBy {
    FullTextSearch = "FullTextSearch",
    Owner = "Owner",
    ProductType = "ProductType",
    SourceProductId = "SourceProductId"
}
export declare enum ProductViewSortBy {
    CreationDate = "CreationDate",
    Title = "Title",
    VersionCount = "VersionCount"
}
export declare enum SortOrder {
    ASCENDING = "ASCENDING",
    DESCENDING = "DESCENDING"
}
export interface SearchProductsInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The search filters. If no search filters are specified, the output includes
     *          all products to which the caller has access.</p>
     */
    Filters?: {
        [key: string]: string[];
    };
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The sort field. If no value is specified, the results are not sorted.</p>
     */
    SortBy?: ProductViewSortBy | string;
    /**
     * <p>The sort order. If no value is specified, the results are not sorted.</p>
     */
    SortOrder?: SortOrder | string;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace SearchProductsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchProductsInput) => any;
}
/**
 * <p>A single product view aggregation value/count pair, containing metadata about each
 *          product to which the calling user has access.</p>
 */
export interface ProductViewAggregationValue {
    /**
     * <p>The value of the product view aggregation.</p>
     */
    Value?: string;
    /**
     * <p>An approximate count of the products that match the value.</p>
     */
    ApproximateCount?: number;
}
export declare namespace ProductViewAggregationValue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProductViewAggregationValue) => any;
}
export interface SearchProductsOutput {
    /**
     * <p>Information about the product views.</p>
     */
    ProductViewSummaries?: ProductViewSummary[];
    /**
     * <p>The product view aggregations.</p>
     */
    ProductViewAggregations?: {
        [key: string]: ProductViewAggregationValue[];
    };
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace SearchProductsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchProductsOutput) => any;
}
export declare enum ProductSource {
    ACCOUNT = "ACCOUNT"
}
export interface SearchProductsAsAdminInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    PortfolioId?: string;
    /**
     * <p>The search filters. If no search filters are specified, the output includes all products
     *          to which the administrator has access.</p>
     */
    Filters?: {
        [key: string]: string[];
    };
    /**
     * <p>The sort field. If no value is specified, the results are not sorted.</p>
     */
    SortBy?: ProductViewSortBy | string;
    /**
     * <p>The sort order. If no value is specified, the results are not sorted.</p>
     */
    SortOrder?: SortOrder | string;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>Access level of the source of the product.</p>
     */
    ProductSource?: ProductSource | string;
}
export declare namespace SearchProductsAsAdminInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchProductsAsAdminInput) => any;
}
export interface SearchProductsAsAdminOutput {
    /**
     * <p>Information about the product views.</p>
     */
    ProductViewDetails?: ProductViewDetail[];
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace SearchProductsAsAdminOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchProductsAsAdminOutput) => any;
}
export declare enum ProvisionedProductViewFilterBy {
    SearchQuery = "SearchQuery"
}
export interface SearchProvisionedProductsInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
     */
    AccessLevelFilter?: AccessLevelFilter;
    /**
     * <p>The search filters.</p>
     *          <p>When the key is <code>SearchQuery</code>, the searchable fields are <code>arn</code>,
     *          <code>createdTime</code>, <code>id</code>, <code>lastRecordId</code>,
     *          <code>idempotencyToken</code>, <code>name</code>, <code>physicalId</code>, <code>productId</code>,
     *          <code>provisioningArtifact</code>, <code>type</code>, <code>status</code>,
     *          <code>tags</code>, <code>userArn</code>, <code>userArnSession</code>, <code>lastProvisioningRecordId</code>, <code>lastSuccessfulProvisioningRecordId</code>,
     *          <code>productName</code>, and <code>provisioningArtifactName</code>.</p>
     *          <p>Example: <code>"SearchQuery":["status:AVAILABLE"]</code>
     *          </p>
     */
    Filters?: {
        [key: string]: string[];
    };
    /**
     * <p>The sort field. If no value is specified, the results are not sorted. The valid values are <code>arn</code>, <code>id</code>, <code>name</code>,
     *          and <code>lastRecordId</code>.</p>
     */
    SortBy?: string;
    /**
     * <p>The sort order. If no value is specified, the results are not sorted.</p>
     */
    SortOrder?: SortOrder | string;
    /**
     * <p>The maximum number of items to return with this call.</p>
     */
    PageSize?: number;
    /**
     * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
     */
    PageToken?: string;
}
export declare namespace SearchProvisionedProductsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchProvisionedProductsInput) => any;
}
/**
 * <p>Information about a provisioned product.</p>
 */
export interface ProvisionedProductAttribute {
    /**
     * <p>The user-friendly name of the provisioned product.</p>
     */
    Name?: string;
    /**
     * <p>The ARN of the provisioned product.</p>
     */
    Arn?: string;
    /**
     * <p>The type of provisioned product. The supported values are <code>CFN_STACK</code> and <code>CFN_STACKSET</code>.</p>
     */
    Type?: string;
    /**
     * <p>The identifier of the provisioned product.</p>
     */
    Id?: string;
    /**
     * <p>The current status of the provisioned product.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most
     *                recent operation succeeded and completed.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results.
     *                Wait for an <code>AVAILABLE</code> status before performing operations.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has
     *                completed the requested operation but is not exactly what was requested. For example, a
     *                request to update to a new version failed and the stack rolled back to the current version.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running.
     *                For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product,
     *                 but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an <code>AVAILABLE</code> status before performing operations.</p>
     *             </li>
     *          </ul>
     */
    Status?: ProvisionedProductStatus | string;
    /**
     * <p>The current status message of the provisioned product.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The UTC time stamp of the creation time.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token,
     *   the same response is returned for each repeated request.</p>
     */
    IdempotencyToken?: string;
    /**
     * <p>The record identifier of the last request performed on this provisioned product.</p>
     */
    LastRecordId?: string;
    /**
     * <p>The record identifier of the last request performed on this provisioned product of the following types:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                ProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                UpdateProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                ExecuteProvisionedProductPlan
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                TerminateProvisionedProduct
     *             </p>
     *             </li>
     *          </ul>
     */
    LastProvisioningRecordId?: string;
    /**
     * <p>The record identifier of the last successful request performed on this provisioned product of the following types:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                ProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                UpdateProvisionedProduct
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                ExecuteProvisionedProductPlan
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                TerminateProvisionedProduct
     *             </p>
     *             </li>
     *          </ul>
     */
    LastSuccessfulProvisioningRecordId?: string;
    /**
     * <p>One or more tags.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The assigned identifier for the resource, such as an EC2 instance ID or an S3 bucket name.</p>
     */
    PhysicalId?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId?: string;
    /**
     * <p>The name of the product.</p>
     */
    ProductName?: string;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The name of the provisioning artifact.</p>
     */
    ProvisioningArtifactName?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM user.</p>
     */
    UserArn?: string;
    /**
     * <p>The ARN of the IAM user in the session. This ARN might contain a session ID.</p>
     */
    UserArnSession?: string;
}
export declare namespace ProvisionedProductAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisionedProductAttribute) => any;
}
export interface SearchProvisionedProductsOutput {
    /**
     * <p>Information about the provisioned products.</p>
     */
    ProvisionedProducts?: ProvisionedProductAttribute[];
    /**
     * <p>The number of provisioned products found.</p>
     */
    TotalResultsCount?: number;
    /**
     * <p>The page token to use to retrieve the next set of results. If there are no additional results, this value is null.</p>
     */
    NextPageToken?: string;
}
export declare namespace SearchProvisionedProductsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchProvisionedProductsOutput) => any;
}
export interface TerminateProvisionedProductInput {
    /**
     * <p>The name of the provisioned product. You cannot specify both
     *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
     */
    ProvisionedProductName?: string;
    /**
     * <p>The identifier of the provisioned product. You cannot specify both
     *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
     */
    ProvisionedProductId?: string;
    /**
     * <p>An idempotency token that uniquely identifies the termination request. This token is
     *          only valid during the termination process. After the provisioned product is terminated,
     *          subsequent requests to terminate the same provisioned product always return
     *          <b>ResourceNotFound</b>.</p>
     */
    TerminateToken?: string;
    /**
     * <p>If set to true, AWS Service Catalog stops managing the specified provisioned product even
     *          if it cannot delete the underlying resources.</p>
     */
    IgnoreErrors?: boolean;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>When this boolean parameter is set to true, the <code>TerminateProvisionedProduct</code> API deletes
     *          the Service Catalog provisioned product. However, it does not remove the CloudFormation
     *          stack, stack set, or the underlying resources of the deleted provisioned product. The
     *          default value is false.</p>
     */
    RetainPhysicalResources?: boolean;
}
export declare namespace TerminateProvisionedProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminateProvisionedProductInput) => any;
}
export interface TerminateProvisionedProductOutput {
    /**
     * <p>Information about the result of this request.</p>
     */
    RecordDetail?: RecordDetail;
}
export declare namespace TerminateProvisionedProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminateProvisionedProductOutput) => any;
}
export interface UpdateConstraintInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The identifier of the constraint.</p>
     */
    Id: string | undefined;
    /**
     * <p>The updated description of the constraint.</p>
     */
    Description?: string;
    /**
     * <p>The constraint parameters, in JSON format. The syntax depends on the constraint type as follows:</p>
     *          <dl>
     *             <dt>LAUNCH</dt>
     *             <dd>
     *                <p>You are required to specify either the <code>RoleArn</code> or the <code>LocalRoleName</code> but can't use both.</p>
     *                <p>Specify the <code>RoleArn</code> property as follows:</p>
     *                <p>
     *                   <code>{"RoleArn" : "arn:aws:iam::123456789012:role/LaunchRole"}</code>
     *                </p>
     *                <p>Specify the <code>LocalRoleName</code> property as follows:</p>
     *                <p>
     *                   <code>{"LocalRoleName": "SCBasicLaunchRole"}</code>
     *                </p>
     *                <p>If you specify the <code>LocalRoleName</code> property, when an account uses the launch constraint, the IAM role with that name in the account will be used. This allows launch-role constraints to be
     *                   account-agnostic so the administrator can create fewer resources per shared account.</p>
     *                <note>
     *                   <p>The given role name must exist in the account used to create the launch constraint and the account of the user who launches a product with this launch constraint.</p>
     *                </note>
     *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
     *                <p>You also cannot have more than one <code>LAUNCH</code> constraint on a product and portfolio.</p>
     *             </dd>
     *             <dt>NOTIFICATION</dt>
     *             <dd>
     *                <p>Specify the <code>NotificationArns</code> property as follows:</p>
     *                <p>
     *                   <code>{"NotificationArns" : ["arn:aws:sns:us-east-1:123456789012:Topic"]}</code>
     *                </p>
     *             </dd>
     *             <dt>RESOURCE_UPDATE</dt>
     *             <dd>
     *                <p>Specify the <code>TagUpdatesOnProvisionedProduct</code> property as follows:</p>
     *                <p>
     *                   <code>{"Version":"2.0","Properties":{"TagUpdateOnProvisionedProduct":"String"}}</code>
     *                </p>
     *                <p>The <code>TagUpdatesOnProvisionedProduct</code> property accepts a string value of <code>ALLOWED</code> or <code>NOT_ALLOWED</code>.</p>
     *             </dd>
     *             <dt>STACKSET</dt>
     *             <dd>
     *                <p>Specify the <code>Parameters</code> property as follows:</p>
     *                <p>
     *                   <code>{"Version": "String", "Properties": {"AccountList": [ "String" ], "RegionList": [ "String" ], "AdminRole": "String", "ExecutionRole": "String"}}</code>
     *                </p>
     *                <p>You cannot have both a <code>LAUNCH</code> and a <code>STACKSET</code> constraint.</p>
     *                <p>You also cannot have more than one <code>STACKSET</code> constraint on a product and portfolio.</p>
     *                <p>Products with a <code>STACKSET</code> constraint will launch an AWS CloudFormation stack set.</p>
     *             </dd>
     *             <dt>TEMPLATE</dt>
     *             <dd>
     *                <p>Specify the <code>Rules</code> property. For more information, see
     *                   <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html">Template Constraint Rules</a>.</p>
     *             </dd>
     *          </dl>
     */
    Parameters?: string;
}
export declare namespace UpdateConstraintInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConstraintInput) => any;
}
export interface UpdateConstraintOutput {
    /**
     * <p>Information about the constraint.</p>
     */
    ConstraintDetail?: ConstraintDetail;
    /**
     * <p>The constraint parameters.</p>
     */
    ConstraintParameters?: string;
    /**
     * <p>The status of the current request.</p>
     */
    Status?: Status | string;
}
export declare namespace UpdateConstraintOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConstraintOutput) => any;
}
export interface UpdatePortfolioInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The portfolio identifier.</p>
     */
    Id: string | undefined;
    /**
     * <p>The name to use for display purposes.</p>
     */
    DisplayName?: string;
    /**
     * <p>The updated description of the portfolio.</p>
     */
    Description?: string;
    /**
     * <p>The updated name of the portfolio provider.</p>
     */
    ProviderName?: string;
    /**
     * <p>The tags to add.</p>
     */
    AddTags?: Tag[];
    /**
     * <p>The tags to remove.</p>
     */
    RemoveTags?: string[];
}
export declare namespace UpdatePortfolioInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePortfolioInput) => any;
}
export interface UpdatePortfolioOutput {
    /**
     * <p>Information about the portfolio.</p>
     */
    PortfolioDetail?: PortfolioDetail;
    /**
     * <p>Information about the tags associated with the portfolio.</p>
     */
    Tags?: Tag[];
}
export declare namespace UpdatePortfolioOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePortfolioOutput) => any;
}
export interface UpdatePortfolioShareInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The unique identifier of the portfolio for which the share will be updated.</p>
     */
    PortfolioId: string | undefined;
    /**
     * <p>The AWS Account Id of the recipient account. This field is required when updating an external account to account type share.</p>
     */
    AccountId?: string;
    /**
     * <p>Information about the organization node.</p>
     */
    OrganizationNode?: OrganizationNode;
    /**
     * <p>A flag to enable or disable TagOptions sharing for the portfolio share. If this field is not provided, the current state of TagOptions sharing on the portfolio share will not be modified.</p>
     */
    ShareTagOptions?: boolean;
}
export declare namespace UpdatePortfolioShareInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePortfolioShareInput) => any;
}
export interface UpdatePortfolioShareOutput {
    /**
     * <p>The token that tracks the status of the <code>UpdatePortfolioShare</code> operation for external account to account or  organizational type sharing.</p>
     */
    PortfolioShareToken?: string;
    /**
     * <p>The status of <code>UpdatePortfolioShare</code> operation.
     *          You can also obtain the operation status using <code>DescribePortfolioShareStatus</code> API.
     *       </p>
     */
    Status?: ShareStatus | string;
}
export declare namespace UpdatePortfolioShareOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePortfolioShareOutput) => any;
}
export interface UpdateProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    Id: string | undefined;
    /**
     * <p>The updated product name.</p>
     */
    Name?: string;
    /**
     * <p>The updated owner of the product.</p>
     */
    Owner?: string;
    /**
     * <p>The updated description of the product.</p>
     */
    Description?: string;
    /**
     * <p>The updated distributor of the product.</p>
     */
    Distributor?: string;
    /**
     * <p>The updated support description for the product.</p>
     */
    SupportDescription?: string;
    /**
     * <p>The updated support email for the product.</p>
     */
    SupportEmail?: string;
    /**
     * <p>The updated support URL for the product.</p>
     */
    SupportUrl?: string;
    /**
     * <p>The tags to add to the product.</p>
     */
    AddTags?: Tag[];
    /**
     * <p>The tags to remove from the product.</p>
     */
    RemoveTags?: string[];
}
export declare namespace UpdateProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProductInput) => any;
}
export interface UpdateProductOutput {
    /**
     * <p>Information about the product view.</p>
     */
    ProductViewDetail?: ProductViewDetail;
    /**
     * <p>Information about the tags associated with the product.</p>
     */
    Tags?: Tag[];
}
export declare namespace UpdateProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProductOutput) => any;
}
export declare type StackSetOperationType = "CREATE" | "DELETE" | "UPDATE";
/**
 * <p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.</p>
 */
export interface UpdateProvisioningPreferences {
    /**
     * <p>One or more AWS accounts that will have access to the provisioned product.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>The AWS accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
     *          <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>
     */
    StackSetAccounts?: string[];
    /**
     * <p>One or more AWS Regions where the provisioned product will be available.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>The specified regions should be within the list of regions from the <code>STACKSET</code> constraint. To get the list of regions in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p>
     *          <p>If no values are specified, the default value is all regions from the <code>STACKSET</code> constraint.</p>
     */
    StackSetRegions?: string[];
    /**
     * <p>The number of accounts, per region, for which this operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
     *          <p>The default value is <code>0</code> if no value is specified.</p>
     */
    StackSetFailureToleranceCount?: number;
    /**
     * <p>The percentage of accounts, per region, for which this stack operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions.</p>
     *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetFailureToleranceCount</code> or <code>StackSetFailureTolerancePercentage</code>, but not both.</p>
     */
    StackSetFailureTolerancePercentage?: number;
    /**
     * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of <code>StackSetFailureToleranceCount</code>. <code>StackSetMaxConcurrentCount</code> is at most one more than the <code>StackSetFailureToleranceCount</code>.</p>
     *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
     */
    StackSetMaxConcurrencyCount?: number;
    /**
     * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
     *          <p>When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as <code>1</code> instead.</p>
     *          <p>Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <p>Conditional: You must specify either <code>StackSetMaxConcurrentCount</code> or <code>StackSetMaxConcurrentPercentage</code>, but not both.</p>
     */
    StackSetMaxConcurrencyPercentage?: number;
    /**
     * <p>Determines what action AWS Service Catalog performs to a stack set or a stack instance represented by the provisioned product. The default value is <code>UPDATE</code> if nothing is specified.</p>
     *          <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p>
     *          <dl>
     *             <dt>CREATE</dt>
     *             <dd>
     *                <p>Creates a new stack instance in the stack set represented by the provisioned product. In this case, only new stack instances are created based on accounts and regions; if new ProductId or ProvisioningArtifactID are passed, they will be ignored.</p>
     *             </dd>
     *             <dt>UPDATE</dt>
     *             <dd>
     *                <p>Updates the stack set represented by the provisioned product and also its stack instances.</p>
     *             </dd>
     *             <dt>DELETE</dt>
     *             <dd>
     *                <p>Deletes a stack instance in the stack set represented by the provisioned product.</p>
     *             </dd>
     *          </dl>
     */
    StackSetOperationType?: StackSetOperationType | string;
}
export declare namespace UpdateProvisioningPreferences {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisioningPreferences) => any;
}
export interface UpdateProvisionedProductInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The name of the provisioned product. You cannot specify both
     *          <code>ProvisionedProductName</code> and <code>ProvisionedProductId</code>.</p>
     */
    ProvisionedProductName?: string;
    /**
     * <p>The identifier of the provisioned product. You must provide the name or ID, but not both.</p>
     */
    ProvisionedProductId?: string;
    /**
     * <p>The identifier of the product. You must provide the name or ID, but not both.</p>
     */
    ProductId?: string;
    /**
     * <p>The name of the product. You must provide the name or ID, but not both.</p>
     */
    ProductName?: string;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId?: string;
    /**
     * <p>The name of the provisioning artifact. You must provide the name or ID, but not both.</p>
     */
    ProvisioningArtifactName?: string;
    /**
     * <p>The path identifier. This value is optional if the product
     *          has a default path, and required if the product has more than one path. You must provide the name or ID, but not both.</p>
     */
    PathId?: string;
    /**
     * <p>The name of the path. You must provide the name or ID, but not both.</p>
     */
    PathName?: string;
    /**
     * <p>The new parameters.</p>
     */
    ProvisioningParameters?: UpdateProvisioningParameter[];
    /**
     * <p>An object that contains information about the provisioning preferences for a stack set.</p>
     */
    ProvisioningPreferences?: UpdateProvisioningPreferences;
    /**
     * <p>One or more tags. Requires the product to have <code>RESOURCE_UPDATE</code> constraint with <code>TagUpdatesOnProvisionedProduct</code> set to <code>ALLOWED</code> to allow tag updates.</p>
     */
    Tags?: Tag[];
    /**
     * <p>The idempotency token that uniquely identifies the provisioning update request.</p>
     */
    UpdateToken?: string;
}
export declare namespace UpdateProvisionedProductInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisionedProductInput) => any;
}
export interface UpdateProvisionedProductOutput {
    /**
     * <p>Information about the result of the request.</p>
     */
    RecordDetail?: RecordDetail;
}
export declare namespace UpdateProvisionedProductOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisionedProductOutput) => any;
}
export declare enum PropertyKey {
    LaunchRole = "LAUNCH_ROLE",
    Owner = "OWNER"
}
export interface UpdateProvisionedProductPropertiesInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The identifier of the provisioned product.</p>
     */
    ProvisionedProductId: string | undefined;
    /**
     * <p>A map that contains the provisioned product properties to be updated.</p>
     *          <p>The <code>LAUNCH_ROLE</code> key accepts role ARNs. This key allows an
     *          administrator to call <code>UpdateProvisionedProductProperties</code> to update the launch
     *          role that is associated with a provisioned product. This role is used when an end user
     *          calls a provisioning operation such as <code>UpdateProvisionedProduct</code>,
     *             <code>TerminateProvisionedProduct</code>, or
     *             <code>ExecuteProvisionedProductServiceAction</code>. Only a role ARN is valid. A user ARN is invalid. </p>
     *
     *          <p>The <code>OWNER</code> key accepts user ARNs and role ARNs. The owner is the user
     *          that has permission to see, update, terminate, and execute service actions in the
     *          provisioned product.</p>
     *          <p>The administrator can change the owner of a provisioned product to another IAM user within the same account. Both end user owners and
     *          administrators can see ownership history of the provisioned product using the <code>ListRecordHistory</code> API. The new owner can
     *       describe all past records for the provisioned product using the <code>DescribeRecord</code> API. The previous owner can no longer use <code>DescribeRecord</code>,
     *       but can still see the product's history from when he was an owner using <code>ListRecordHistory</code>.</p>
     *          <p>If a provisioned product ownership is assigned to an end user, they can see and perform any action through the API or
     *          Service Catalog console such as update, terminate, and execute service actions.
     *          If an end user provisions a product and the owner is updated to someone else, they will no longer be able to see or perform any actions through
     *          API or the Service Catalog console on that provisioned product.</p>
     */
    ProvisionedProductProperties: {
        [key: string]: string;
    } | undefined;
    /**
     * <p>The idempotency token that uniquely identifies the provisioning product update request.</p>
     */
    IdempotencyToken?: string;
}
export declare namespace UpdateProvisionedProductPropertiesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisionedProductPropertiesInput) => any;
}
export interface UpdateProvisionedProductPropertiesOutput {
    /**
     * <p>The provisioned product identifier.</p>
     */
    ProvisionedProductId?: string;
    /**
     * <p>A map that contains the properties updated.</p>
     */
    ProvisionedProductProperties?: {
        [key: string]: string;
    };
    /**
     * <p>The identifier of the record.</p>
     */
    RecordId?: string;
    /**
     * <p>The status of the request.</p>
     */
    Status?: RecordStatus | string;
}
export declare namespace UpdateProvisionedProductPropertiesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisionedProductPropertiesOutput) => any;
}
export interface UpdateProvisioningArtifactInput {
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
    /**
     * <p>The product identifier.</p>
     */
    ProductId: string | undefined;
    /**
     * <p>The identifier of the provisioning artifact.</p>
     */
    ProvisioningArtifactId: string | undefined;
    /**
     * <p>The updated name of the provisioning artifact.</p>
     */
    Name?: string;
    /**
     * <p>The updated description of the provisioning artifact.</p>
     */
    Description?: string;
    /**
     * <p>Indicates whether the product version is active.</p>
     *          <p>Inactive provisioning artifacts are invisible to end users. End users cannot launch or update a provisioned product from an inactive provisioning artifact.</p>
     */
    Active?: boolean;
    /**
     * <p>Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.</p>
     *          <p>The <code>DEFAULT</code> value indicates that the product version is active.</p>
     *          <p>The administrator can set the guidance to <code>DEPRECATED</code> to inform
     *           users that the product version is deprecated. Users are able to make updates to a provisioned product
     *           of a deprecated version but cannot launch new provisioned products using a deprecated version.</p>
     */
    Guidance?: ProvisioningArtifactGuidance | string;
}
export declare namespace UpdateProvisioningArtifactInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisioningArtifactInput) => any;
}
export interface UpdateProvisioningArtifactOutput {
    /**
     * <p>Information about the provisioning artifact.</p>
     */
    ProvisioningArtifactDetail?: ProvisioningArtifactDetail;
    /**
     * <p>The URL of the CloudFormation template in Amazon S3.</p>
     */
    Info?: {
        [key: string]: string;
    };
    /**
     * <p>The status of the current request.</p>
     */
    Status?: Status | string;
}
export declare namespace UpdateProvisioningArtifactOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProvisioningArtifactOutput) => any;
}
export interface UpdateServiceActionInput {
    /**
     * <p>The self-service action identifier.</p>
     */
    Id: string | undefined;
    /**
     * <p>The self-service action name.</p>
     */
    Name?: string;
    /**
     * <p>A map that defines the self-service action.</p>
     */
    Definition?: {
        [key: string]: string;
    };
    /**
     * <p>The self-service action description.</p>
     */
    Description?: string;
    /**
     * <p>The language code.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>en</code> - English (default)</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>jp</code> - Japanese</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>zh</code> - Chinese</p>
     *             </li>
     *          </ul>
     */
    AcceptLanguage?: string;
}
export declare namespace UpdateServiceActionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateServiceActionInput) => any;
}
export interface UpdateServiceActionOutput {
    /**
     * <p>Detailed information about the self-service action.</p>
     */
    ServiceActionDetail?: ServiceActionDetail;
}
export declare namespace UpdateServiceActionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateServiceActionOutput) => any;
}
export interface UpdateTagOptionInput {
    /**
     * <p>The TagOption identifier.</p>
     */
    Id: string | undefined;
    /**
     * <p>The updated value.</p>
     */
    Value?: string;
    /**
     * <p>The updated active state.</p>
     */
    Active?: boolean;
}
export declare namespace UpdateTagOptionInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateTagOptionInput) => any;
}
export interface UpdateTagOptionOutput {
    /**
     * <p>Information about the TagOption.</p>
     */
    TagOptionDetail?: TagOptionDetail;
}
export declare namespace UpdateTagOptionOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateTagOptionOutput) => any;
}
