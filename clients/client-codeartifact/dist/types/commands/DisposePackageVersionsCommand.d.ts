import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DisposePackageVersionsRequest, DisposePackageVersionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisposePackageVersionsCommandInput extends DisposePackageVersionsRequest {
}
export interface DisposePackageVersionsCommandOutput extends DisposePackageVersionsResult, __MetadataBearer {
}
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisposePackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisposePackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DisposePackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisposePackageVersionsCommandInput} for command's `input` shape.
 * @see {@link DisposePackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisposePackageVersionsCommand extends $Command<DisposePackageVersionsCommandInput, DisposePackageVersionsCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: DisposePackageVersionsCommandInput;
    constructor(input: DisposePackageVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisposePackageVersionsCommandInput, DisposePackageVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
