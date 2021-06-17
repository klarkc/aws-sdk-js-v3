"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codeartifact = void 0;
const CodeartifactClient_1 = require("./CodeartifactClient");
const AssociateExternalConnectionCommand_1 = require("./commands/AssociateExternalConnectionCommand");
const CopyPackageVersionsCommand_1 = require("./commands/CopyPackageVersionsCommand");
const CreateDomainCommand_1 = require("./commands/CreateDomainCommand");
const CreateRepositoryCommand_1 = require("./commands/CreateRepositoryCommand");
const DeleteDomainCommand_1 = require("./commands/DeleteDomainCommand");
const DeleteDomainPermissionsPolicyCommand_1 = require("./commands/DeleteDomainPermissionsPolicyCommand");
const DeletePackageVersionsCommand_1 = require("./commands/DeletePackageVersionsCommand");
const DeleteRepositoryCommand_1 = require("./commands/DeleteRepositoryCommand");
const DeleteRepositoryPermissionsPolicyCommand_1 = require("./commands/DeleteRepositoryPermissionsPolicyCommand");
const DescribeDomainCommand_1 = require("./commands/DescribeDomainCommand");
const DescribePackageVersionCommand_1 = require("./commands/DescribePackageVersionCommand");
const DescribeRepositoryCommand_1 = require("./commands/DescribeRepositoryCommand");
const DisassociateExternalConnectionCommand_1 = require("./commands/DisassociateExternalConnectionCommand");
const DisposePackageVersionsCommand_1 = require("./commands/DisposePackageVersionsCommand");
const GetAuthorizationTokenCommand_1 = require("./commands/GetAuthorizationTokenCommand");
const GetDomainPermissionsPolicyCommand_1 = require("./commands/GetDomainPermissionsPolicyCommand");
const GetPackageVersionAssetCommand_1 = require("./commands/GetPackageVersionAssetCommand");
const GetPackageVersionReadmeCommand_1 = require("./commands/GetPackageVersionReadmeCommand");
const GetRepositoryEndpointCommand_1 = require("./commands/GetRepositoryEndpointCommand");
const GetRepositoryPermissionsPolicyCommand_1 = require("./commands/GetRepositoryPermissionsPolicyCommand");
const ListDomainsCommand_1 = require("./commands/ListDomainsCommand");
const ListPackageVersionAssetsCommand_1 = require("./commands/ListPackageVersionAssetsCommand");
const ListPackageVersionDependenciesCommand_1 = require("./commands/ListPackageVersionDependenciesCommand");
const ListPackageVersionsCommand_1 = require("./commands/ListPackageVersionsCommand");
const ListPackagesCommand_1 = require("./commands/ListPackagesCommand");
const ListRepositoriesCommand_1 = require("./commands/ListRepositoriesCommand");
const ListRepositoriesInDomainCommand_1 = require("./commands/ListRepositoriesInDomainCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutDomainPermissionsPolicyCommand_1 = require("./commands/PutDomainPermissionsPolicyCommand");
const PutRepositoryPermissionsPolicyCommand_1 = require("./commands/PutRepositoryPermissionsPolicyCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdatePackageVersionsStatusCommand_1 = require("./commands/UpdatePackageVersionsStatusCommand");
const UpdateRepositoryCommand_1 = require("./commands/UpdateRepositoryCommand");
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
class Codeartifact extends CodeartifactClient_1.CodeartifactClient {
    associateExternalConnection(args, optionsOrCb, cb) {
        const command = new AssociateExternalConnectionCommand_1.AssociateExternalConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    copyPackageVersions(args, optionsOrCb, cb) {
        const command = new CopyPackageVersionsCommand_1.CopyPackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDomain(args, optionsOrCb, cb) {
        const command = new CreateDomainCommand_1.CreateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createRepository(args, optionsOrCb, cb) {
        const command = new CreateRepositoryCommand_1.CreateRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDomain(args, optionsOrCb, cb) {
        const command = new DeleteDomainCommand_1.DeleteDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDomainPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new DeleteDomainPermissionsPolicyCommand_1.DeleteDomainPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePackageVersions(args, optionsOrCb, cb) {
        const command = new DeletePackageVersionsCommand_1.DeletePackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRepository(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryCommand_1.DeleteRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteRepositoryPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryPermissionsPolicyCommand_1.DeleteRepositoryPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDomain(args, optionsOrCb, cb) {
        const command = new DescribeDomainCommand_1.DescribeDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePackageVersion(args, optionsOrCb, cb) {
        const command = new DescribePackageVersionCommand_1.DescribePackageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRepository(args, optionsOrCb, cb) {
        const command = new DescribeRepositoryCommand_1.DescribeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateExternalConnection(args, optionsOrCb, cb) {
        const command = new DisassociateExternalConnectionCommand_1.DisassociateExternalConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disposePackageVersions(args, optionsOrCb, cb) {
        const command = new DisposePackageVersionsCommand_1.DisposePackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAuthorizationToken(args, optionsOrCb, cb) {
        const command = new GetAuthorizationTokenCommand_1.GetAuthorizationTokenCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDomainPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new GetDomainPermissionsPolicyCommand_1.GetDomainPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPackageVersionAsset(args, optionsOrCb, cb) {
        const command = new GetPackageVersionAssetCommand_1.GetPackageVersionAssetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getPackageVersionReadme(args, optionsOrCb, cb) {
        const command = new GetPackageVersionReadmeCommand_1.GetPackageVersionReadmeCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRepositoryEndpoint(args, optionsOrCb, cb) {
        const command = new GetRepositoryEndpointCommand_1.GetRepositoryEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getRepositoryPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new GetRepositoryPermissionsPolicyCommand_1.GetRepositoryPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDomains(args, optionsOrCb, cb) {
        const command = new ListDomainsCommand_1.ListDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackages(args, optionsOrCb, cb) {
        const command = new ListPackagesCommand_1.ListPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackageVersionAssets(args, optionsOrCb, cb) {
        const command = new ListPackageVersionAssetsCommand_1.ListPackageVersionAssetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackageVersionDependencies(args, optionsOrCb, cb) {
        const command = new ListPackageVersionDependenciesCommand_1.ListPackageVersionDependenciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPackageVersions(args, optionsOrCb, cb) {
        const command = new ListPackageVersionsCommand_1.ListPackageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRepositories(args, optionsOrCb, cb) {
        const command = new ListRepositoriesCommand_1.ListRepositoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRepositoriesInDomain(args, optionsOrCb, cb) {
        const command = new ListRepositoriesInDomainCommand_1.ListRepositoriesInDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putDomainPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new PutDomainPermissionsPolicyCommand_1.PutDomainPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putRepositoryPermissionsPolicy(args, optionsOrCb, cb) {
        const command = new PutRepositoryPermissionsPolicyCommand_1.PutRepositoryPermissionsPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePackageVersionsStatus(args, optionsOrCb, cb) {
        const command = new UpdatePackageVersionsStatusCommand_1.UpdatePackageVersionsStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRepository(args, optionsOrCb, cb) {
        const command = new UpdateRepositoryCommand_1.UpdateRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Codeartifact = Codeartifact;
//# sourceMappingURL=Codeartifact.js.map