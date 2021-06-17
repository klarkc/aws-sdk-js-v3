import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { StopServerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopServerCommandInput extends StopServerRequest {
}
export interface StopServerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to
 *         <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer
 *       jobs. Information tied to your server, such as server and user properties, are not affected by
 *       stopping your server.</p>
 *
 *          <note>
 *             <p>Stopping the server will not reduce or impact your file transfer protocol endpoint
 *         billing; you must delete the server to stop being billed.</p>
 *          </note>
 *
 *          <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state,
 *       either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code>
 *       can indicate an error condition.</p>
 *
 *          <p>No response is returned from this call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StopServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StopServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new StopServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopServerCommandInput} for command's `input` shape.
 * @see {@link StopServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopServerCommand extends $Command<StopServerCommandInput, StopServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: StopServerCommandInput;
    constructor(input: StopServerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopServerCommandInput, StopServerCommandOutput>;
    private serialize;
    private deserialize;
}
