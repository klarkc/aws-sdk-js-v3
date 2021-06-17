import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateJobShipmentStateRequest, UpdateJobShipmentStateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateJobShipmentStateCommandInput extends UpdateJobShipmentStateRequest {
}
export interface UpdateJobShipmentStateCommandOutput extends UpdateJobShipmentStateResult, __MetadataBearer {
}
/**
 * <p>Updates the state when a the shipment states changes to a different state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobShipmentStateCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobShipmentStateCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateJobShipmentStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobShipmentStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobShipmentStateCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateJobShipmentStateCommand extends $Command<UpdateJobShipmentStateCommandInput, UpdateJobShipmentStateCommandOutput, SnowballClientResolvedConfig> {
    readonly input: UpdateJobShipmentStateCommandInput;
    constructor(input: UpdateJobShipmentStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobShipmentStateCommandInput, UpdateJobShipmentStateCommandOutput>;
    private serialize;
    private deserialize;
}
