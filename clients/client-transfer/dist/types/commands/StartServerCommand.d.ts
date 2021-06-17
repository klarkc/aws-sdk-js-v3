import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { StartServerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartServerCommandInput extends StartServerRequest {
}
export interface StartServerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to
 *         <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An
 *         <code>ONLINE</code> server can accept and process file transfer jobs.</p>
 *
 *          <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state,
 *       either not fully able to respond, or not fully online. The values of <code>START_FAILED</code>
 *       can indicate an error condition.</p>
 *
 *          <p>No response is returned from this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StartServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StartServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new StartServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartServerCommandInput} for command's `input` shape.
 * @see {@link StartServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartServerCommand extends $Command<StartServerCommandInput, StartServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: StartServerCommandInput;
    constructor(input: StartServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartServerCommandInput, StartServerCommandOutput>;
    private serialize;
    private deserialize;
}
