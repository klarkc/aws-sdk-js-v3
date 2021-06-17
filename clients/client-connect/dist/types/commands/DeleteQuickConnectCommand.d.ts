import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DeleteQuickConnectRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteQuickConnectCommandInput extends DeleteQuickConnectRequest {
}
export interface DeleteQuickConnectCommandOutput extends __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Deletes a quick connect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteQuickConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQuickConnectCommandInput} for command's `input` shape.
 * @see {@link DeleteQuickConnectCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteQuickConnectCommand extends $Command<DeleteQuickConnectCommandInput, DeleteQuickConnectCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DeleteQuickConnectCommandInput;
    constructor(input: DeleteQuickConnectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQuickConnectCommandInput, DeleteQuickConnectCommandOutput>;
    private serialize;
    private deserialize;
}
