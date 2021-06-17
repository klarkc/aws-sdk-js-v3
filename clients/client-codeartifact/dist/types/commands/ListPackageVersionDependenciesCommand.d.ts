import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListPackageVersionDependenciesRequest, ListPackageVersionDependenciesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPackageVersionDependenciesCommandInput extends ListPackageVersionDependenciesRequest {
}
export interface ListPackageVersionDependenciesCommandOutput extends ListPackageVersionDependenciesResult, __MetadataBearer {
}
/**
 * <p>
 *          Returns the direct dependencies for a package version. The dependencies are returned as
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a>
 *           objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package
 *           format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file
 *         for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionDependenciesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionDependenciesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackageVersionDependenciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackageVersionDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionDependenciesCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPackageVersionDependenciesCommand extends $Command<ListPackageVersionDependenciesCommandInput, ListPackageVersionDependenciesCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: ListPackageVersionDependenciesCommandInput;
    constructor(input: ListPackageVersionDependenciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPackageVersionDependenciesCommandInput, ListPackageVersionDependenciesCommandOutput>;
    private serialize;
    private deserialize;
}
