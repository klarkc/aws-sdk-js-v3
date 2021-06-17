import { LicenseManagerClient } from "./LicenseManagerClient";
import { AcceptGrantCommandInput, AcceptGrantCommandOutput } from "./commands/AcceptGrantCommand";
import { CheckInLicenseCommandInput, CheckInLicenseCommandOutput } from "./commands/CheckInLicenseCommand";
import { CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput } from "./commands/CheckoutBorrowLicenseCommand";
import { CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput } from "./commands/CheckoutLicenseCommand";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand";
import { CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput } from "./commands/CreateGrantVersionCommand";
import { CreateLicenseCommandInput, CreateLicenseCommandOutput } from "./commands/CreateLicenseCommand";
import { CreateLicenseConfigurationCommandInput, CreateLicenseConfigurationCommandOutput } from "./commands/CreateLicenseConfigurationCommand";
import { CreateLicenseManagerReportGeneratorCommandInput, CreateLicenseManagerReportGeneratorCommandOutput } from "./commands/CreateLicenseManagerReportGeneratorCommand";
import { CreateLicenseVersionCommandInput, CreateLicenseVersionCommandOutput } from "./commands/CreateLicenseVersionCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import { DeleteGrantCommandInput, DeleteGrantCommandOutput } from "./commands/DeleteGrantCommand";
import { DeleteLicenseCommandInput, DeleteLicenseCommandOutput } from "./commands/DeleteLicenseCommand";
import { DeleteLicenseConfigurationCommandInput, DeleteLicenseConfigurationCommandOutput } from "./commands/DeleteLicenseConfigurationCommand";
import { DeleteLicenseManagerReportGeneratorCommandInput, DeleteLicenseManagerReportGeneratorCommandOutput } from "./commands/DeleteLicenseManagerReportGeneratorCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand";
import { ExtendLicenseConsumptionCommandInput, ExtendLicenseConsumptionCommandOutput } from "./commands/ExtendLicenseConsumptionCommand";
import { GetAccessTokenCommandInput, GetAccessTokenCommandOutput } from "./commands/GetAccessTokenCommand";
import { GetGrantCommandInput, GetGrantCommandOutput } from "./commands/GetGrantCommand";
import { GetLicenseCommandInput, GetLicenseCommandOutput } from "./commands/GetLicenseCommand";
import { GetLicenseConfigurationCommandInput, GetLicenseConfigurationCommandOutput } from "./commands/GetLicenseConfigurationCommand";
import { GetLicenseManagerReportGeneratorCommandInput, GetLicenseManagerReportGeneratorCommandOutput } from "./commands/GetLicenseManagerReportGeneratorCommand";
import { GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput } from "./commands/GetLicenseUsageCommand";
import { GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput } from "./commands/GetServiceSettingsCommand";
import { ListAssociationsForLicenseConfigurationCommandInput, ListAssociationsForLicenseConfigurationCommandOutput } from "./commands/ListAssociationsForLicenseConfigurationCommand";
import { ListDistributedGrantsCommandInput, ListDistributedGrantsCommandOutput } from "./commands/ListDistributedGrantsCommand";
import { ListFailuresForLicenseConfigurationOperationsCommandInput, ListFailuresForLicenseConfigurationOperationsCommandOutput } from "./commands/ListFailuresForLicenseConfigurationOperationsCommand";
import { ListLicenseConfigurationsCommandInput, ListLicenseConfigurationsCommandOutput } from "./commands/ListLicenseConfigurationsCommand";
import { ListLicenseManagerReportGeneratorsCommandInput, ListLicenseManagerReportGeneratorsCommandOutput } from "./commands/ListLicenseManagerReportGeneratorsCommand";
import { ListLicenseSpecificationsForResourceCommandInput, ListLicenseSpecificationsForResourceCommandOutput } from "./commands/ListLicenseSpecificationsForResourceCommand";
import { ListLicenseVersionsCommandInput, ListLicenseVersionsCommandOutput } from "./commands/ListLicenseVersionsCommand";
import { ListLicensesCommandInput, ListLicensesCommandOutput } from "./commands/ListLicensesCommand";
import { ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput } from "./commands/ListReceivedGrantsCommand";
import { ListReceivedLicensesCommandInput, ListReceivedLicensesCommandOutput } from "./commands/ListReceivedLicensesCommand";
import { ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput } from "./commands/ListResourceInventoryCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTokensCommandInput, ListTokensCommandOutput } from "./commands/ListTokensCommand";
import { ListUsageForLicenseConfigurationCommandInput, ListUsageForLicenseConfigurationCommandOutput } from "./commands/ListUsageForLicenseConfigurationCommand";
import { RejectGrantCommandInput, RejectGrantCommandOutput } from "./commands/RejectGrantCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateLicenseConfigurationCommandInput, UpdateLicenseConfigurationCommandOutput } from "./commands/UpdateLicenseConfigurationCommand";
import { UpdateLicenseManagerReportGeneratorCommandInput, UpdateLicenseManagerReportGeneratorCommandOutput } from "./commands/UpdateLicenseManagerReportGeneratorCommand";
import { UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput } from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import { UpdateServiceSettingsCommandInput, UpdateServiceSettingsCommandOutput } from "./commands/UpdateServiceSettingsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname> AWS License Manager </fullname>
 *          <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple
 *          AWS accounts and on-premises servers.</p>
 */
export declare class LicenseManager extends LicenseManagerClient {
    /**
     * <p>Accepts the specified grant.</p>
     */
    acceptGrant(args: AcceptGrantCommandInput, options?: __HttpHandlerOptions): Promise<AcceptGrantCommandOutput>;
    acceptGrant(args: AcceptGrantCommandInput, cb: (err: any, data?: AcceptGrantCommandOutput) => void): void;
    acceptGrant(args: AcceptGrantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptGrantCommandOutput) => void): void;
    /**
     * <p>Checks in the specified license. Check in a license when it is no longer in use.</p>
     */
    checkInLicense(args: CheckInLicenseCommandInput, options?: __HttpHandlerOptions): Promise<CheckInLicenseCommandOutput>;
    checkInLicense(args: CheckInLicenseCommandInput, cb: (err: any, data?: CheckInLicenseCommandOutput) => void): void;
    checkInLicense(args: CheckInLicenseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CheckInLicenseCommandOutput) => void): void;
    /**
     * <p>Checks out the specified license for offline use.</p>
     */
    checkoutBorrowLicense(args: CheckoutBorrowLicenseCommandInput, options?: __HttpHandlerOptions): Promise<CheckoutBorrowLicenseCommandOutput>;
    checkoutBorrowLicense(args: CheckoutBorrowLicenseCommandInput, cb: (err: any, data?: CheckoutBorrowLicenseCommandOutput) => void): void;
    checkoutBorrowLicense(args: CheckoutBorrowLicenseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CheckoutBorrowLicenseCommandOutput) => void): void;
    /**
     * <p>Checks out the specified license.</p>
     */
    checkoutLicense(args: CheckoutLicenseCommandInput, options?: __HttpHandlerOptions): Promise<CheckoutLicenseCommandOutput>;
    checkoutLicense(args: CheckoutLicenseCommandInput, cb: (err: any, data?: CheckoutLicenseCommandOutput) => void): void;
    checkoutLicense(args: CheckoutLicenseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CheckoutLicenseCommandOutput) => void): void;
    /**
     * <p>Creates a grant for the specified license. A grant shares the use of license entitlements with specific AWS accounts.</p>
     */
    createGrant(args: CreateGrantCommandInput, options?: __HttpHandlerOptions): Promise<CreateGrantCommandOutput>;
    createGrant(args: CreateGrantCommandInput, cb: (err: any, data?: CreateGrantCommandOutput) => void): void;
    createGrant(args: CreateGrantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGrantCommandOutput) => void): void;
    /**
     * <p>Creates a new version of the specified grant.</p>
     */
    createGrantVersion(args: CreateGrantVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateGrantVersionCommandOutput>;
    createGrantVersion(args: CreateGrantVersionCommandInput, cb: (err: any, data?: CreateGrantVersionCommandOutput) => void): void;
    createGrantVersion(args: CreateGrantVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGrantVersionCommandOutput) => void): void;
    /**
     * <p>Creates a license.</p>
     */
    createLicense(args: CreateLicenseCommandInput, options?: __HttpHandlerOptions): Promise<CreateLicenseCommandOutput>;
    createLicense(args: CreateLicenseCommandInput, cb: (err: any, data?: CreateLicenseCommandOutput) => void): void;
    createLicense(args: CreateLicenseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLicenseCommandOutput) => void): void;
    /**
     * <p>Creates a license configuration.</p>
     *          <p>A license configuration is an abstraction of a customer license agreement that can be
     *          consumed and enforced by License Manager. Components include specifications for the license
     *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
     *          Dedicated Instance, Dedicated Host, or all of these), license affinity  to host (how long a
     *          license must be associated with a host), and the number of licenses purchased and used.</p>
     */
    createLicenseConfiguration(args: CreateLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateLicenseConfigurationCommandOutput>;
    createLicenseConfiguration(args: CreateLicenseConfigurationCommandInput, cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void): void;
    createLicenseConfiguration(args: CreateLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates a new report generator.</p>
     */
    createLicenseManagerReportGenerator(args: CreateLicenseManagerReportGeneratorCommandInput, options?: __HttpHandlerOptions): Promise<CreateLicenseManagerReportGeneratorCommandOutput>;
    createLicenseManagerReportGenerator(args: CreateLicenseManagerReportGeneratorCommandInput, cb: (err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void): void;
    createLicenseManagerReportGenerator(args: CreateLicenseManagerReportGeneratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void): void;
    /**
     * <p>Creates a new version of the specified license.</p>
     */
    createLicenseVersion(args: CreateLicenseVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateLicenseVersionCommandOutput>;
    createLicenseVersion(args: CreateLicenseVersionCommandInput, cb: (err: any, data?: CreateLicenseVersionCommandOutput) => void): void;
    createLicenseVersion(args: CreateLicenseVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLicenseVersionCommandOutput) => void): void;
    /**
     * <p>Creates a long-lived token.</p>
     *          <p>A refresh token is a JWT token used to get an access token. With an access token,
     *           you can call AssumeRoleWithWebIdentity to get role credentials that you can use to
     *           call License Manager to manage the specified license.</p>
     */
    createToken(args: CreateTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateTokenCommandOutput>;
    createToken(args: CreateTokenCommandInput, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
    createToken(args: CreateTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
    /**
     * <p>Deletes the specified grant.</p>
     */
    deleteGrant(args: DeleteGrantCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGrantCommandOutput>;
    deleteGrant(args: DeleteGrantCommandInput, cb: (err: any, data?: DeleteGrantCommandOutput) => void): void;
    deleteGrant(args: DeleteGrantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGrantCommandOutput) => void): void;
    /**
     * <p>Deletes the specified license.</p>
     */
    deleteLicense(args: DeleteLicenseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLicenseCommandOutput>;
    deleteLicense(args: DeleteLicenseCommandInput, cb: (err: any, data?: DeleteLicenseCommandOutput) => void): void;
    deleteLicense(args: DeleteLicenseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLicenseCommandOutput) => void): void;
    /**
     * <p>Deletes the specified license configuration.</p>
     *          <p>You cannot delete a license configuration that is in use.</p>
     */
    deleteLicenseConfiguration(args: DeleteLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLicenseConfigurationCommandOutput>;
    deleteLicenseConfiguration(args: DeleteLicenseConfigurationCommandInput, cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void): void;
    deleteLicenseConfiguration(args: DeleteLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Delete an existing report generator.</p>
     *          <p>This action deletes the report generator, which stops it from generating future reports and cannot be reversed. However, the previous reports from this generator will remain in your S3 bucket.</p>
     */
    deleteLicenseManagerReportGenerator(args: DeleteLicenseManagerReportGeneratorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLicenseManagerReportGeneratorCommandOutput>;
    deleteLicenseManagerReportGenerator(args: DeleteLicenseManagerReportGeneratorCommandInput, cb: (err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void): void;
    deleteLicenseManagerReportGenerator(args: DeleteLicenseManagerReportGeneratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void): void;
    /**
     * <p>Deletes the specified token. Must be called in the license home Region.</p>
     */
    deleteToken(args: DeleteTokenCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTokenCommandOutput>;
    deleteToken(args: DeleteTokenCommandInput, cb: (err: any, data?: DeleteTokenCommandOutput) => void): void;
    deleteToken(args: DeleteTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTokenCommandOutput) => void): void;
    /**
     * <p>Extends the expiration date for license consumption.</p>
     */
    extendLicenseConsumption(args: ExtendLicenseConsumptionCommandInput, options?: __HttpHandlerOptions): Promise<ExtendLicenseConsumptionCommandOutput>;
    extendLicenseConsumption(args: ExtendLicenseConsumptionCommandInput, cb: (err: any, data?: ExtendLicenseConsumptionCommandOutput) => void): void;
    extendLicenseConsumption(args: ExtendLicenseConsumptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExtendLicenseConsumptionCommandOutput) => void): void;
    /**
     * <p>Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
     *           are valid for one hour.</p>
     */
    getAccessToken(args: GetAccessTokenCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessTokenCommandOutput>;
    getAccessToken(args: GetAccessTokenCommandInput, cb: (err: any, data?: GetAccessTokenCommandOutput) => void): void;
    getAccessToken(args: GetAccessTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessTokenCommandOutput) => void): void;
    /**
     * <p>Gets detailed information about the specified grant.</p>
     */
    getGrant(args: GetGrantCommandInput, options?: __HttpHandlerOptions): Promise<GetGrantCommandOutput>;
    getGrant(args: GetGrantCommandInput, cb: (err: any, data?: GetGrantCommandOutput) => void): void;
    getGrant(args: GetGrantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetGrantCommandOutput) => void): void;
    /**
     * <p>Gets detailed information about the specified license.</p>
     */
    getLicense(args: GetLicenseCommandInput, options?: __HttpHandlerOptions): Promise<GetLicenseCommandOutput>;
    getLicense(args: GetLicenseCommandInput, cb: (err: any, data?: GetLicenseCommandOutput) => void): void;
    getLicense(args: GetLicenseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLicenseCommandOutput) => void): void;
    /**
     * <p>Gets detailed information about the specified license configuration.</p>
     */
    getLicenseConfiguration(args: GetLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetLicenseConfigurationCommandOutput>;
    getLicenseConfiguration(args: GetLicenseConfigurationCommandInput, cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void): void;
    getLicenseConfiguration(args: GetLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets information on the specified report generator.</p>
     */
    getLicenseManagerReportGenerator(args: GetLicenseManagerReportGeneratorCommandInput, options?: __HttpHandlerOptions): Promise<GetLicenseManagerReportGeneratorCommandOutput>;
    getLicenseManagerReportGenerator(args: GetLicenseManagerReportGeneratorCommandInput, cb: (err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void): void;
    getLicenseManagerReportGenerator(args: GetLicenseManagerReportGeneratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void): void;
    /**
     * <p>Gets detailed information about the usage of the specified license.</p>
     */
    getLicenseUsage(args: GetLicenseUsageCommandInput, options?: __HttpHandlerOptions): Promise<GetLicenseUsageCommandOutput>;
    getLicenseUsage(args: GetLicenseUsageCommandInput, cb: (err: any, data?: GetLicenseUsageCommandOutput) => void): void;
    getLicenseUsage(args: GetLicenseUsageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLicenseUsageCommandOutput) => void): void;
    /**
     * <p>Gets the License Manager settings for the current Region.</p>
     */
    getServiceSettings(args: GetServiceSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceSettingsCommandOutput>;
    getServiceSettings(args: GetServiceSettingsCommandInput, cb: (err: any, data?: GetServiceSettingsCommandOutput) => void): void;
    getServiceSettings(args: GetServiceSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceSettingsCommandOutput) => void): void;
    /**
     * <p>Lists the resource associations for the specified license configuration.</p>
     *          <p>Resource associations need not consume licenses from a license configuration.
     *          For example, an AMI or a stopped instance might not consume a license (depending on
     *          the license rules).</p>
     */
    listAssociationsForLicenseConfiguration(args: ListAssociationsForLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociationsForLicenseConfigurationCommandOutput>;
    listAssociationsForLicenseConfiguration(args: ListAssociationsForLicenseConfigurationCommandInput, cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void): void;
    listAssociationsForLicenseConfiguration(args: ListAssociationsForLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Lists the grants distributed for the specified license.</p>
     */
    listDistributedGrants(args: ListDistributedGrantsCommandInput, options?: __HttpHandlerOptions): Promise<ListDistributedGrantsCommandOutput>;
    listDistributedGrants(args: ListDistributedGrantsCommandInput, cb: (err: any, data?: ListDistributedGrantsCommandOutput) => void): void;
    listDistributedGrants(args: ListDistributedGrantsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDistributedGrantsCommandOutput) => void): void;
    /**
     * <p>Lists the license configuration operations that failed.</p>
     */
    listFailuresForLicenseConfigurationOperations(args: ListFailuresForLicenseConfigurationOperationsCommandInput, options?: __HttpHandlerOptions): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput>;
    listFailuresForLicenseConfigurationOperations(args: ListFailuresForLicenseConfigurationOperationsCommandInput, cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void): void;
    listFailuresForLicenseConfigurationOperations(args: ListFailuresForLicenseConfigurationOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void): void;
    /**
     * <p>Lists the license configurations for your account.</p>
     */
    listLicenseConfigurations(args: ListLicenseConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListLicenseConfigurationsCommandOutput>;
    listLicenseConfigurations(args: ListLicenseConfigurationsCommandInput, cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void): void;
    listLicenseConfigurations(args: ListLicenseConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void): void;
    /**
     * <p>Lists the report generators for your account.</p>
     */
    listLicenseManagerReportGenerators(args: ListLicenseManagerReportGeneratorsCommandInput, options?: __HttpHandlerOptions): Promise<ListLicenseManagerReportGeneratorsCommandOutput>;
    listLicenseManagerReportGenerators(args: ListLicenseManagerReportGeneratorsCommandInput, cb: (err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void): void;
    listLicenseManagerReportGenerators(args: ListLicenseManagerReportGeneratorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void): void;
    /**
     * <p>Lists the licenses for your account.</p>
     */
    listLicenses(args: ListLicensesCommandInput, options?: __HttpHandlerOptions): Promise<ListLicensesCommandOutput>;
    listLicenses(args: ListLicensesCommandInput, cb: (err: any, data?: ListLicensesCommandOutput) => void): void;
    listLicenses(args: ListLicensesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLicensesCommandOutput) => void): void;
    /**
     * <p>Describes the license configurations for the specified resource.</p>
     */
    listLicenseSpecificationsForResource(args: ListLicenseSpecificationsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListLicenseSpecificationsForResourceCommandOutput>;
    listLicenseSpecificationsForResource(args: ListLicenseSpecificationsForResourceCommandInput, cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void): void;
    listLicenseSpecificationsForResource(args: ListLicenseSpecificationsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists all versions of the specified license.</p>
     */
    listLicenseVersions(args: ListLicenseVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListLicenseVersionsCommandOutput>;
    listLicenseVersions(args: ListLicenseVersionsCommandInput, cb: (err: any, data?: ListLicenseVersionsCommandOutput) => void): void;
    listLicenseVersions(args: ListLicenseVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLicenseVersionsCommandOutput) => void): void;
    /**
     * <p>Lists grants that are received but not accepted.</p>
     */
    listReceivedGrants(args: ListReceivedGrantsCommandInput, options?: __HttpHandlerOptions): Promise<ListReceivedGrantsCommandOutput>;
    listReceivedGrants(args: ListReceivedGrantsCommandInput, cb: (err: any, data?: ListReceivedGrantsCommandOutput) => void): void;
    listReceivedGrants(args: ListReceivedGrantsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReceivedGrantsCommandOutput) => void): void;
    /**
     * <p>Lists received licenses.</p>
     */
    listReceivedLicenses(args: ListReceivedLicensesCommandInput, options?: __HttpHandlerOptions): Promise<ListReceivedLicensesCommandOutput>;
    listReceivedLicenses(args: ListReceivedLicensesCommandInput, cb: (err: any, data?: ListReceivedLicensesCommandOutput) => void): void;
    listReceivedLicenses(args: ListReceivedLicensesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReceivedLicensesCommandOutput) => void): void;
    /**
     * <p>Lists resources managed using Systems Manager inventory.</p>
     */
    listResourceInventory(args: ListResourceInventoryCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceInventoryCommandOutput>;
    listResourceInventory(args: ListResourceInventoryCommandInput, cb: (err: any, data?: ListResourceInventoryCommandOutput) => void): void;
    listResourceInventory(args: ListResourceInventoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceInventoryCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified license configuration.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists your tokens.</p>
     */
    listTokens(args: ListTokensCommandInput, options?: __HttpHandlerOptions): Promise<ListTokensCommandOutput>;
    listTokens(args: ListTokensCommandInput, cb: (err: any, data?: ListTokensCommandOutput) => void): void;
    listTokens(args: ListTokensCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTokensCommandOutput) => void): void;
    /**
     * <p>Lists all license usage records for a license configuration, displaying license
     *          consumption details by resource at a selected point in time. Use this action to audit the
     *          current license consumption for any license inventory and configuration.</p>
     */
    listUsageForLicenseConfiguration(args: ListUsageForLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<ListUsageForLicenseConfigurationCommandOutput>;
    listUsageForLicenseConfiguration(args: ListUsageForLicenseConfigurationCommandInput, cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void): void;
    listUsageForLicenseConfiguration(args: ListUsageForLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Rejects the specified grant.</p>
     */
    rejectGrant(args: RejectGrantCommandInput, options?: __HttpHandlerOptions): Promise<RejectGrantCommandOutput>;
    rejectGrant(args: RejectGrantCommandInput, cb: (err: any, data?: RejectGrantCommandOutput) => void): void;
    rejectGrant(args: RejectGrantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectGrantCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified license configuration.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified license configuration.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the attributes of an existing license configuration.</p>
     */
    updateLicenseConfiguration(args: UpdateLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLicenseConfigurationCommandOutput>;
    updateLicenseConfiguration(args: UpdateLicenseConfigurationCommandInput, cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void): void;
    updateLicenseConfiguration(args: UpdateLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates a report generator.</p>
     *          <p>After you make changes to a report generator, it will start generating new reports within 60 minutes of being updated.</p>
     */
    updateLicenseManagerReportGenerator(args: UpdateLicenseManagerReportGeneratorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLicenseManagerReportGeneratorCommandOutput>;
    updateLicenseManagerReportGenerator(args: UpdateLicenseManagerReportGeneratorCommandInput, cb: (err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void): void;
    updateLicenseManagerReportGenerator(args: UpdateLicenseManagerReportGeneratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void): void;
    /**
     * <p>Adds or removes the specified license configurations for the specified AWS resource.</p>
     *          <p>You can update the license specifications of AMIs, instances, and hosts.
     *          You cannot update the license specifications for launch templates and AWS CloudFormation templates,
     *          as they send license configurations to the operation that creates the resource.</p>
     */
    updateLicenseSpecificationsForResource(args: UpdateLicenseSpecificationsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLicenseSpecificationsForResourceCommandOutput>;
    updateLicenseSpecificationsForResource(args: UpdateLicenseSpecificationsForResourceCommandInput, cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void): void;
    updateLicenseSpecificationsForResource(args: UpdateLicenseSpecificationsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void): void;
    /**
     * <p>Updates License Manager settings for the current Region.</p>
     */
    updateServiceSettings(args: UpdateServiceSettingsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceSettingsCommandOutput>;
    updateServiceSettings(args: UpdateServiceSettingsCommandInput, cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void): void;
    updateServiceSettings(args: UpdateServiceSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void): void;
}
