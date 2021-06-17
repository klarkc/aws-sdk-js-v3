import { CodeartifactClient } from "./CodeartifactClient";
import { AssociateExternalConnectionCommandInput, AssociateExternalConnectionCommandOutput } from "./commands/AssociateExternalConnectionCommand";
import { CopyPackageVersionsCommandInput, CopyPackageVersionsCommandOutput } from "./commands/CopyPackageVersionsCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteDomainPermissionsPolicyCommandInput, DeleteDomainPermissionsPolicyCommandOutput } from "./commands/DeleteDomainPermissionsPolicyCommand";
import { DeletePackageVersionsCommandInput, DeletePackageVersionsCommandOutput } from "./commands/DeletePackageVersionsCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import { DeleteRepositoryPermissionsPolicyCommandInput, DeleteRepositoryPermissionsPolicyCommandOutput } from "./commands/DeleteRepositoryPermissionsPolicyCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import { DescribePackageVersionCommandInput, DescribePackageVersionCommandOutput } from "./commands/DescribePackageVersionCommand";
import { DescribeRepositoryCommandInput, DescribeRepositoryCommandOutput } from "./commands/DescribeRepositoryCommand";
import { DisassociateExternalConnectionCommandInput, DisassociateExternalConnectionCommandOutput } from "./commands/DisassociateExternalConnectionCommand";
import { DisposePackageVersionsCommandInput, DisposePackageVersionsCommandOutput } from "./commands/DisposePackageVersionsCommand";
import { GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput } from "./commands/GetAuthorizationTokenCommand";
import { GetDomainPermissionsPolicyCommandInput, GetDomainPermissionsPolicyCommandOutput } from "./commands/GetDomainPermissionsPolicyCommand";
import { GetPackageVersionAssetCommandInput, GetPackageVersionAssetCommandOutput } from "./commands/GetPackageVersionAssetCommand";
import { GetPackageVersionReadmeCommandInput, GetPackageVersionReadmeCommandOutput } from "./commands/GetPackageVersionReadmeCommand";
import { GetRepositoryEndpointCommandInput, GetRepositoryEndpointCommandOutput } from "./commands/GetRepositoryEndpointCommand";
import { GetRepositoryPermissionsPolicyCommandInput, GetRepositoryPermissionsPolicyCommandOutput } from "./commands/GetRepositoryPermissionsPolicyCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListPackageVersionAssetsCommandInput, ListPackageVersionAssetsCommandOutput } from "./commands/ListPackageVersionAssetsCommand";
import { ListPackageVersionDependenciesCommandInput, ListPackageVersionDependenciesCommandOutput } from "./commands/ListPackageVersionDependenciesCommand";
import { ListPackageVersionsCommandInput, ListPackageVersionsCommandOutput } from "./commands/ListPackageVersionsCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "./commands/ListPackagesCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "./commands/ListRepositoriesCommand";
import { ListRepositoriesInDomainCommandInput, ListRepositoriesInDomainCommandOutput } from "./commands/ListRepositoriesInDomainCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutDomainPermissionsPolicyCommandInput, PutDomainPermissionsPolicyCommandOutput } from "./commands/PutDomainPermissionsPolicyCommand";
import { PutRepositoryPermissionsPolicyCommandInput, PutRepositoryPermissionsPolicyCommandOutput } from "./commands/PutRepositoryPermissionsPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdatePackageVersionsStatusCommandInput, UpdatePackageVersionsStatusCommandOutput } from "./commands/UpdatePackageVersionsStatusCommand";
import { UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput } from "./commands/UpdateRepositoryCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p> AWS CodeArtifact is a fully managed artifact repository compatible with language-native
 *       package managers and build tools such as npm, Apache Maven, and pip. You can use CodeArtifact to
 *       share packages with development teams and pull packages. Packages can be pulled from both
 *       public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact
 *       repository and another repository, which effectively merges their contents from the point of
 *       view of a package manager client. </p>
 *
 *          <p>
 *             <b>AWS CodeArtifact Components</b>
 *          </p>
 *          <p>Use the information in this guide to help you work with the following CodeArtifact components:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Repository</b>: A CodeArtifact repository contains a set of <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version">package
 *             versions</a>, each of which maps to a set of assets, or files. Repositories are
 *           polyglot, so a single repository can contain packages of any supported type. Each
 *           repository exposes endpoints for fetching and publishing packages using tools like the
 *             <b>
 *                      <code>npm</code>
 *                   </b> CLI, the Maven CLI (<b>
 *                      <code>mvn</code>
 *                   </b>), and <b>
 *                      <code>pip</code>
 *                   </b>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Domain</b>: Repositories are aggregated into a higher-level entity known as a
 *             <i>domain</i>. All package assets and metadata are stored in the domain,
 *             but are consumed through repositories. A given package asset, such as a Maven JAR file, is
 *             stored once per domain, no matter how many repositories it's present in. All of the assets
 *             and metadata in a domain are encrypted with the same customer master key (CMK) stored in
 *             AWS Key Management Service (AWS KMS).</p>
 *                <p>Each repository is a member of a single domain and can't be moved to a
 *             different domain.</p>
 *                <p>The domain allows organizational policy to be applied across multiple
 *             repositories, such as which accounts can access repositories in the domain, and
 *             which public repositories can be used as sources of packages.</p>
 *                <p>Although an organization can have multiple domains, we recommend a single production
 *             domain that contains all published artifacts so that teams can find and share packages
 *             across their organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Package</b>: A <i>package</i> is a bundle of software and the metadata required to
 *           resolve dependencies and install the software. CodeArtifact supports <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-npm.html">npm</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-python.html">PyPI</a>, and <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-maven">Maven</a> package formats.</p>
 *                <p>In CodeArtifact, a package consists of:</p>
 *                <ul>
 *                   <li>
 *                      <p>A <i>name</i> (for example, <code>webpack</code> is the name of a
 *               popular npm package)</p>
 *                   </li>
 *                   <li>
 *                      <p>An optional namespace (for example, <code>@types</code> in <code>@types/node</code>)</p>
 *                   </li>
 *                   <li>
 *                      <p>A set of versions (for example, <code>1.0.0</code>, <code>1.0.1</code>,
 *                 <code>1.0.2</code>, etc.)</p>
 *                   </li>
 *                   <li>
 *                      <p> Package-level metadata (for example, npm tags)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Package version</b>: A version of a package, such as <code>@types/node 12.6.9</code>. The version number
 *           format and semantics vary for different package formats. For example, npm package versions
 *           must conform to the <a href="https://semver.org/">Semantic Versioning
 *             specification</a>. In CodeArtifact, a package version consists of the version identifier,
 *           metadata at the package version level, and a set of assets.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Upstream repository</b>: One repository is <i>upstream</i> of another when the package versions in
 *           it can be accessed from the repository endpoint of the downstream repository, effectively
 *           merging the contents of the two repositories from the point of view of a client. CodeArtifact
 *           allows creating an upstream relationship between two repositories.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Asset</b>: An individual file stored in CodeArtifact associated with a package version, such as an npm
 *             <code>.tgz</code> file or Maven POM and JAR files.</p>
 *             </li>
 *          </ul>
 *
 *          <p>CodeArtifact supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AssociateExternalConnection</code>: Adds an existing external
 *           connection to a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CopyPackageVersions</code>: Copies package versions from one
 *           repository to another repository in the same domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateDomain</code>: Creates a domain</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateRepository</code>: Creates a CodeArtifact repository in a domain. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDomain</code>: Deletes a domain. You cannot delete a domain that contains
 *           repositories. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDomainPermissionsPolicy</code>: Deletes the resource policy that is set on a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeletePackageVersions</code>: Deletes versions of a package. After a package has
 *           been deleted, it can be republished, but its assets and metadata cannot be restored
 *           because they have been permanently removed from storage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteRepository</code>: Deletes a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteRepositoryPermissionsPolicy</code>: Deletes the resource policy that is set on a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDomain</code>: Returns a <code>DomainDescription</code> object that
 *           contains information about the requested domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribePackageVersion</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
 *           object that contains details about a package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeRepository</code>: Returns a <code>RepositoryDescription</code> object
 *           that contains detailed information about the requested repository. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisposePackageVersions</code>: Disposes versions of a package. A package version
 *           with the status <code>Disposed</code> cannot be restored because they have been
 *           permanently removed from storage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisassociateExternalConnection</code>: Removes an existing external connection from a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetAuthorizationToken</code>: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed.
 *           The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetDomainPermissionsPolicy</code>: Returns the policy of a resource
 *           that is attached to the specified domain. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetPackageVersionAsset</code>: Returns the contents of an asset that is in a package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetPackageVersionReadme</code>: Gets the readme file or descriptive text for a package version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetRepositoryEndpoint</code>: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *           package format:
 *         </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>npm</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>pypi</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>maven</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetRepositoryPermissionsPolicy</code>: Returns the resource policy that is set on a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListDomains</code>: Returns a list of <code>DomainSummary</code> objects. Each
 *           returned <code>DomainSummary</code> object contains information about a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackages</code>: Lists the packages in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersionAssets</code>: Lists the assets for a given package version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersionDependencies</code>: Returns a list of the direct dependencies for a
 *           package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersions</code>: Returns a list of package versions for a specified
 *           package in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListRepositories</code>: Returns a list of repositories owned by the AWS account that called this method.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListRepositoriesInDomain</code>: Returns a list of the repositories in a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutDomainPermissionsPolicy</code>: Attaches a resource policy to a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutRepositoryPermissionsPolicy</code>: Sets the resource policy on a repository
 *           that specifies permissions to access it. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdatePackageVersionsStatus</code>: Updates the status of one or more versions of a package.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateRepository</code>: Updates the properties of a repository.</p>
 *             </li>
 *          </ul>
 */
export declare class Codeartifact extends CodeartifactClient {
    /**
     * <p>Adds an existing external connection to a repository. One external connection is allowed
     *       per repository.</p>
     *          <note>
     *             <p>A repository can have one or more upstream repositories, or an external connection.</p>
     *          </note>
     */
    associateExternalConnection(args: AssociateExternalConnectionCommandInput, options?: __HttpHandlerOptions): Promise<AssociateExternalConnectionCommandOutput>;
    associateExternalConnection(args: AssociateExternalConnectionCommandInput, cb: (err: any, data?: AssociateExternalConnectionCommandOutput) => void): void;
    associateExternalConnection(args: AssociateExternalConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateExternalConnectionCommandOutput) => void): void;
    /**
     * <p>
     *         Copies package versions from one repository to another repository in the same domain.
     *       </p>
     *          <note>
     *             <p>
     *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
     *       </p>
     *          </note>
     */
    copyPackageVersions(args: CopyPackageVersionsCommandInput, options?: __HttpHandlerOptions): Promise<CopyPackageVersionsCommandOutput>;
    copyPackageVersions(args: CopyPackageVersionsCommandInput, cb: (err: any, data?: CopyPackageVersionsCommandOutput) => void): void;
    copyPackageVersions(args: CopyPackageVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyPackageVersionsCommandOutput) => void): void;
    /**
     * <p>
     *       Creates a domain. CodeArtifact <i>domains</i> make it easier to manage multiple repositories across an
     *         organization. You can use a domain to apply permissions across many
     *         repositories owned by different AWS accounts. An asset is stored only once
     *         in a domain, even if it's in multiple repositories.
     *     </p>
     *
     *          <p>Although you can have multiple domains, we recommend a single production domain that contains all
     *         published artifacts so that your development teams can find and share packages. You can use a second
     *         pre-production domain to test changes to the production domain configuration.
     *       </p>
     */
    createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
    createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    createDomain(args: CreateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    /**
     * <p>
     *         Creates a repository.
     *       </p>
     */
    createRepository(args: CreateRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateRepositoryCommandOutput>;
    createRepository(args: CreateRepositoryCommandInput, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
    createRepository(args: CreateRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRepositoryCommandOutput) => void): void;
    /**
     * <p>
     *          Deletes a domain. You cannot delete a domain that contains repositories. If you want to delete a domain
     *          with repositories, first delete its repositories.
     *       </p>
     */
    deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
    deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    deleteDomain(args: DeleteDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    /**
     * <p>
     *         Deletes the resource policy set on a domain.
     *       </p>
     */
    deleteDomainPermissionsPolicy(args: DeleteDomainPermissionsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainPermissionsPolicyCommandOutput>;
    deleteDomainPermissionsPolicy(args: DeleteDomainPermissionsPolicyCommandInput, cb: (err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void): void;
    deleteDomainPermissionsPolicy(args: DeleteDomainPermissionsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void): void;
    /**
     * <p> Deletes one or more versions of a package. A deleted package version cannot be restored
     *       in your repository. If you want to remove a package version from your repository and be able
     *       to restore it later, set its status to <code>Archived</code>. Archived packages cannot be
     *       downloaded from a repository and don't show up with list package APIs (for example,
     *           <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListackageVersions</a>), but you can restore them using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>. </p>
     */
    deletePackageVersions(args: DeletePackageVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DeletePackageVersionsCommandOutput>;
    deletePackageVersions(args: DeletePackageVersionsCommandInput, cb: (err: any, data?: DeletePackageVersionsCommandOutput) => void): void;
    deletePackageVersions(args: DeletePackageVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePackageVersionsCommandOutput) => void): void;
    /**
     * <p>
     *          Deletes a repository.
     *        </p>
     */
    deleteRepository(args: DeleteRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRepositoryCommandOutput>;
    deleteRepository(args: DeleteRepositoryCommandInput, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    deleteRepository(args: DeleteRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRepositoryCommandOutput) => void): void;
    /**
     * <p>
     *         Deletes the resource policy that is set on a repository. After a resource policy is deleted, the
     *         permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate.
     *       </p>
     *          <important>
     *             <p>
     *          Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, AWS users, roles, and accounts lose permissions to perform
     *          the repository actions granted by the deleted policy.
     *        </p>
     *          </important>
     */
    deleteRepositoryPermissionsPolicy(args: DeleteRepositoryPermissionsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRepositoryPermissionsPolicyCommandOutput>;
    deleteRepositoryPermissionsPolicy(args: DeleteRepositoryPermissionsPolicyCommandInput, cb: (err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void): void;
    deleteRepositoryPermissionsPolicy(args: DeleteRepositoryPermissionsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a
     *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DomainDescription.html">DomainDescription</a>
     *       object that contains information about the requested domain.
     *      </p>
     */
    describeDomain(args: DescribeDomainCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainCommandOutput>;
    describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    describeDomain(args: DescribeDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    /**
     * <p>
     *        Returns a
     *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
     *        object that contains information about the requested package version.
     *      </p>
     */
    describePackageVersion(args: DescribePackageVersionCommandInput, options?: __HttpHandlerOptions): Promise<DescribePackageVersionCommandOutput>;
    describePackageVersion(args: DescribePackageVersionCommandInput, cb: (err: any, data?: DescribePackageVersionCommandOutput) => void): void;
    describePackageVersion(args: DescribePackageVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePackageVersionCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a <code>RepositoryDescription</code> object that contains detailed information
     *         about the requested repository.
     *        </p>
     */
    describeRepository(args: DescribeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRepositoryCommandOutput>;
    describeRepository(args: DescribeRepositoryCommandInput, cb: (err: any, data?: DescribeRepositoryCommandOutput) => void): void;
    describeRepository(args: DescribeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRepositoryCommandOutput) => void): void;
    /**
     * <p>
     *       Removes an existing external connection from a repository.
     *     </p>
     */
    disassociateExternalConnection(args: DisassociateExternalConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateExternalConnectionCommandOutput>;
    disassociateExternalConnection(args: DisassociateExternalConnectionCommandInput, cb: (err: any, data?: DisassociateExternalConnectionCommandOutput) => void): void;
    disassociateExternalConnection(args: DisassociateExternalConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateExternalConnectionCommandOutput) => void): void;
    /**
     * <p>
     *       Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>.
     *       A disposed package version cannot be restored in your repository because its assets are deleted.
     *     </p>
     *
     *          <p>
     *       To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListPackageVersions</a> and set the
     *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">status</a> parameter
     *       to <code>Disposed</code>.
     *     </p>
     *
     *          <p>
     *       To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">DescribePackageVersion</a>.
     *     </p>
     */
    disposePackageVersions(args: DisposePackageVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DisposePackageVersionsCommandOutput>;
    disposePackageVersions(args: DisposePackageVersionsCommandInput, cb: (err: any, data?: DisposePackageVersionsCommandOutput) => void): void;
    disposePackageVersions(args: DisposePackageVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisposePackageVersionsCommandOutput) => void): void;
    /**
     * <p>
     *         Generates a temporary authorization token for accessing repositories in the domain.
     *         This API requires the <code>codeartifact:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
     *         For more information about authorization tokens, see
     *         <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html">AWS CodeArtifact authentication and tokens</a>.
     *       </p>
     *          <note>
     *             <p>CodeArtifact authorization tokens are valid for a period of 12 hours when created with the <code>login</code> command.
     *          You can call <code>login</code> periodically to refresh the token. When
     *          you create an authorization token with the <code>GetAuthorizationToken</code> API, you can set a custom authorization period,
     *          up to a maximum of 12 hours, with the <code>durationSeconds</code> parameter.</p>
     *             <p>The authorization period begins after <code>login</code>
     *          or <code>GetAuthorizationToken</code> is called. If <code>login</code> or <code>GetAuthorizationToken</code> is called while
     *          assuming a role, the token lifetime is independent of the maximum session duration
     *          of the role. For example, if you call <code>sts assume-role</code> and specify a session duration of 15 minutes, then
     *          generate a CodeArtifact authorization token, the token will be valid for the full authorization period
     *          even though this is longer than the 15-minute session duration.</p>
     *             <p>See
     *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a>
     *          for more information on controlling session duration. </p>
     *          </note>
     */
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, options?: __HttpHandlerOptions): Promise<GetAuthorizationTokenCommandOutput>;
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void): void;
    getAuthorizationToken(args: GetAuthorizationTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void): void;
    /**
     * <p>
     *         Returns the resource policy attached to the specified domain.
     *       </p>
     *          <note>
     *             <p>
     *          The policy is a resource-based policy, not an identity-based policy. For more information, see
     *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies
     *            and resource-based policies </a> in the <i>AWS Identity and Access Management User Guide</i>.
     *        </p>
     *          </note>
     */
    getDomainPermissionsPolicy(args: GetDomainPermissionsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainPermissionsPolicyCommandOutput>;
    getDomainPermissionsPolicy(args: GetDomainPermissionsPolicyCommandInput, cb: (err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void): void;
    getDomainPermissionsPolicy(args: GetDomainPermissionsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void): void;
    /**
     * <p>
     *       Returns an asset (or file) that is in a package. For example, for a Maven package version, use
     *       <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file,
     *       or any other assets in the package version.
     *     </p>
     */
    getPackageVersionAsset(args: GetPackageVersionAssetCommandInput, options?: __HttpHandlerOptions): Promise<GetPackageVersionAssetCommandOutput>;
    getPackageVersionAsset(args: GetPackageVersionAssetCommandInput, cb: (err: any, data?: GetPackageVersionAssetCommandOutput) => void): void;
    getPackageVersionAsset(args: GetPackageVersionAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPackageVersionAssetCommandOutput) => void): void;
    /**
     * <p>
     *          Gets the readme file or descriptive text for a package version. For packages that do not contain a readme file, CodeArtifact
     *          extracts a description from a metadata file. For example, from the <code><description></code> element in the
     *         <code>pom.xml</code> file of a Maven package.
     *       </p>
     *          <p>
     *        The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.
     *      </p>
     */
    getPackageVersionReadme(args: GetPackageVersionReadmeCommandInput, options?: __HttpHandlerOptions): Promise<GetPackageVersionReadmeCommandOutput>;
    getPackageVersionReadme(args: GetPackageVersionReadmeCommandInput, cb: (err: any, data?: GetPackageVersionReadmeCommandOutput) => void): void;
    getPackageVersionReadme(args: GetPackageVersionReadmeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPackageVersionReadmeCommandOutput) => void): void;
    /**
     * <p>
     *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
     *       package format:
     *     </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>npm</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>pypi</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>maven</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    getRepositoryEndpoint(args: GetRepositoryEndpointCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryEndpointCommandOutput>;
    getRepositoryEndpoint(args: GetRepositoryEndpointCommandInput, cb: (err: any, data?: GetRepositoryEndpointCommandOutput) => void): void;
    getRepositoryEndpoint(args: GetRepositoryEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRepositoryEndpointCommandOutput) => void): void;
    /**
     * <p>
     *         Returns the resource policy that is set on a repository.
     *       </p>
     */
    getRepositoryPermissionsPolicy(args: GetRepositoryPermissionsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryPermissionsPolicyCommandOutput>;
    getRepositoryPermissionsPolicy(args: GetRepositoryPermissionsPolicyCommandInput, cb: (err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void): void;
    getRepositoryPermissionsPolicy(args: GetRepositoryPermissionsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void): void;
    /**
     * <p> Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">DomainSummary</a> objects for all domains owned by the AWS account that makes
     *       this call. Each returned <code>DomainSummary</code> object contains information about a
     *       domain. </p>
     */
    listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
    listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    listDomains(args: ListDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    /**
     * <p>
     *         Returns a list of
     *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">PackageSummary</a>
     *         objects for packages in a repository that match the request parameters.
     *       </p>
     */
    listPackages(args: ListPackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListPackagesCommandOutput>;
    listPackages(args: ListPackagesCommandInput, cb: (err: any, data?: ListPackagesCommandOutput) => void): void;
    listPackages(args: ListPackagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPackagesCommandOutput) => void): void;
    /**
     * <p>
     *        Returns a list of
     *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a>
     *        objects for assets in a package version.
     *      </p>
     */
    listPackageVersionAssets(args: ListPackageVersionAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListPackageVersionAssetsCommandOutput>;
    listPackageVersionAssets(args: ListPackageVersionAssetsCommandInput, cb: (err: any, data?: ListPackageVersionAssetsCommandOutput) => void): void;
    listPackageVersionAssets(args: ListPackageVersionAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPackageVersionAssetsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns the direct dependencies for a package version. The dependencies are returned as
     *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a>
     *           objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package
     *           format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file
     *         for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
     *       </p>
     */
    listPackageVersionDependencies(args: ListPackageVersionDependenciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPackageVersionDependenciesCommandOutput>;
    listPackageVersionDependencies(args: ListPackageVersionDependenciesCommandInput, cb: (err: any, data?: ListPackageVersionDependenciesCommandOutput) => void): void;
    listPackageVersionDependencies(args: ListPackageVersionDependenciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPackageVersionDependenciesCommandOutput) => void): void;
    /**
     * <p>
     *         Returns a list of
     *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">PackageVersionSummary</a>
     *         objects for package versions in a repository that match the request parameters.
     *       </p>
     */
    listPackageVersions(args: ListPackageVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPackageVersionsCommandOutput>;
    listPackageVersions(args: ListPackageVersionsCommandInput, cb: (err: any, data?: ListPackageVersionsCommandOutput) => void): void;
    listPackageVersions(args: ListPackageVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPackageVersionsCommandOutput) => void): void;
    /**
     * <p>
     *        Returns a list of
     *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
     *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified AWS account and that matches the input
     *        parameters.
     *      </p>
     */
    listRepositories(args: ListRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<ListRepositoriesCommandOutput>;
    listRepositories(args: ListRepositoriesCommandInput, cb: (err: any, data?: ListRepositoriesCommandOutput) => void): void;
    listRepositories(args: ListRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRepositoriesCommandOutput) => void): void;
    /**
     * <p>
     *        Returns a list of
     *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
     *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input
     *        parameters.
     *      </p>
     */
    listRepositoriesInDomain(args: ListRepositoriesInDomainCommandInput, options?: __HttpHandlerOptions): Promise<ListRepositoriesInDomainCommandOutput>;
    listRepositoriesInDomain(args: ListRepositoriesInDomainCommandInput, cb: (err: any, data?: ListRepositoriesInDomainCommandOutput) => void): void;
    listRepositoriesInDomain(args: ListRepositoriesInDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRepositoriesInDomainCommandOutput) => void): void;
    /**
     * <p>Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeArtifact.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>
     *         Sets a resource policy on a domain that specifies permissions to access it.
     *       </p>
     *          <p>
     *        When you call <code>PutDomainPermissionsPolicy</code>, the resource policy on the domain is ignored when evaluting permissions.
     *        This ensures that the owner of a domain cannot lock themselves out of the domain, which would prevent them from being
     *        able to update the resource policy.
     *      </p>
     */
    putDomainPermissionsPolicy(args: PutDomainPermissionsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutDomainPermissionsPolicyCommandOutput>;
    putDomainPermissionsPolicy(args: PutDomainPermissionsPolicyCommandInput, cb: (err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void): void;
    putDomainPermissionsPolicy(args: PutDomainPermissionsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void): void;
    /**
     * <p>
     *         Sets the resource policy on a repository that specifies permissions to access it.
     *       </p>
     *          <p>
     *        When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions.
     *        This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being
     *        able to update the resource policy.
     *      </p>
     */
    putRepositoryPermissionsPolicy(args: PutRepositoryPermissionsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutRepositoryPermissionsPolicyCommandOutput>;
    putRepositoryPermissionsPolicy(args: PutRepositoryPermissionsPolicyCommandInput, cb: (err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void): void;
    putRepositoryPermissionsPolicy(args: PutRepositoryPermissionsPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void): void;
    /**
     * <p>Adds or updates tags for a resource in AWS CodeArtifact.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a resource in AWS CodeArtifact.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>
     *       Updates the status of one or more versions of a package.
     *     </p>
     */
    updatePackageVersionsStatus(args: UpdatePackageVersionsStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePackageVersionsStatusCommandOutput>;
    updatePackageVersionsStatus(args: UpdatePackageVersionsStatusCommandInput, cb: (err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void): void;
    updatePackageVersionsStatus(args: UpdatePackageVersionsStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void): void;
    /**
     * <p>
     *          Update the properties of a repository.
     *        </p>
     */
    updateRepository(args: UpdateRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRepositoryCommandOutput>;
    updateRepository(args: UpdateRepositoryCommandInput, cb: (err: any, data?: UpdateRepositoryCommandOutput) => void): void;
    updateRepository(args: UpdateRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRepositoryCommandOutput) => void): void;
}
