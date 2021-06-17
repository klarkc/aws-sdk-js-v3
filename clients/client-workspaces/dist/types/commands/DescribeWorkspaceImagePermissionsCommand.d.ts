import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceImagePermissionsRequest, DescribeWorkspaceImagePermissionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeWorkspaceImagePermissionsCommandInput extends DescribeWorkspaceImagePermissionsRequest {
}
export interface DescribeWorkspaceImagePermissionsCommandOutput extends DescribeWorkspaceImagePermissionsResult, __MetadataBearer {
}
/**
 * <p>Describes the permissions that the owner of an image has granted to other
 *          AWS accounts for an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceImagePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeWorkspaceImagePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeWorkspaceImagePermissionsCommand extends $Command<DescribeWorkspaceImagePermissionsCommandInput, DescribeWorkspaceImagePermissionsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeWorkspaceImagePermissionsCommandInput;
    constructor(input: DescribeWorkspaceImagePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkspaceImagePermissionsCommandInput, DescribeWorkspaceImagePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
