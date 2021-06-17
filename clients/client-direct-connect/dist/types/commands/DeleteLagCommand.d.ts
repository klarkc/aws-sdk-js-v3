import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteLagRequest, Lag } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLagCommandInput extends DeleteLagRequest {
}
export interface DeleteLagCommandOutput extends Lag, __MetadataBearer {
}
/**
 * <p>Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active
 *       virtual interfaces or hosted connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLagCommandInput} for command's `input` shape.
 * @see {@link DeleteLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLagCommand extends $Command<DeleteLagCommandInput, DeleteLagCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteLagCommandInput;
    constructor(input: DeleteLagCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLagCommandInput, DeleteLagCommandOutput>;
    private serialize;
    private deserialize;
}
