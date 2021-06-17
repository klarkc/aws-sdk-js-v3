import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { StartWorkspacesRequest, StartWorkspacesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartWorkspacesCommandInput extends StartWorkspacesRequest {
}
export interface StartWorkspacesCommandOutput extends StartWorkspacesResult, __MetadataBearer {
}
/**
 * <p>Starts the specified WorkSpaces.</p>
 *          <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
 *          state of <code>STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StartWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StartWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new StartWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartWorkspacesCommandInput} for command's `input` shape.
 * @see {@link StartWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartWorkspacesCommand extends $Command<StartWorkspacesCommandInput, StartWorkspacesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: StartWorkspacesCommandInput;
    constructor(input: StartWorkspacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartWorkspacesCommandInput, StartWorkspacesCommandOutput>;
    private serialize;
    private deserialize;
}
