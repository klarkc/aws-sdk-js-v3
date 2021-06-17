import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeConnectionAliasPermissionsRequest, DescribeConnectionAliasPermissionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConnectionAliasPermissionsCommandInput extends DescribeConnectionAliasPermissionsRequest {
}
export interface DescribeConnectionAliasPermissionsCommandOutput extends DescribeConnectionAliasPermissionsResult, __MetadataBearer {
}
/**
 * <p>Describes the permissions that the owner of a connection alias has granted to another AWS account for
 *          the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeConnectionAliasPermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeConnectionAliasPermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeConnectionAliasPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionAliasPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionAliasPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConnectionAliasPermissionsCommand extends $Command<DescribeConnectionAliasPermissionsCommandInput, DescribeConnectionAliasPermissionsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeConnectionAliasPermissionsCommandInput;
    constructor(input: DescribeConnectionAliasPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConnectionAliasPermissionsCommandInput, DescribeConnectionAliasPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
