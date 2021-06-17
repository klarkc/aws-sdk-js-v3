import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RebootWorkspacesRequest, RebootWorkspacesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootWorkspacesCommandInput extends RebootWorkspacesRequest {
}
export interface RebootWorkspacesCommandOutput extends RebootWorkspacesResult, __MetadataBearer {
}
/**
 * <p>Reboots the specified WorkSpaces.</p>
 *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or
 *             <code>UNHEALTHY</code>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebootWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebootWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new RebootWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebootWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootWorkspacesCommand extends $Command<RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RebootWorkspacesCommandInput;
    constructor(input: RebootWorkspacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootWorkspacesCommandInput, RebootWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
