import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RebuildWorkspacesRequest, RebuildWorkspacesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebuildWorkspacesCommandInput extends RebuildWorkspacesRequest {
}
export interface RebuildWorkspacesCommandOutput extends RebuildWorkspacesResult, __MetadataBearer {
}
/**
 * <p>Rebuilds the specified WorkSpace.</p>
 *          <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p>
 *          <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
 *          of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          rebuilt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebuildWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebuildWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RebuildWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebuildWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebuildWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebuildWorkspacesCommand extends $Command<RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RebuildWorkspacesCommandInput;
    constructor(input: RebuildWorkspacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
