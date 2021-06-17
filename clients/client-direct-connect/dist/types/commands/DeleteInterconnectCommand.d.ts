import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteInterconnectRequest, DeleteInterconnectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInterconnectCommandInput extends DeleteInterconnectRequest {
}
export interface DeleteInterconnectCommandOutput extends DeleteInterconnectResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified interconnect.</p>
 *          <note>
 *             <p>Intended for use
 *         by AWS Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteInterconnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInterconnectCommandInput} for command's `input` shape.
 * @see {@link DeleteInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInterconnectCommand extends $Command<DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DeleteInterconnectCommandInput;
    constructor(input: DeleteInterconnectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput>;
    private serialize;
    private deserialize;
}
