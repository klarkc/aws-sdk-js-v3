import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateMaintenanceStartTimeInput, UpdateMaintenanceStartTimeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMaintenanceStartTimeCommandInput extends UpdateMaintenanceStartTimeInput {
}
export interface UpdateMaintenanceStartTimeCommandOutput extends UpdateMaintenanceStartTimeOutput, __MetadataBearer {
}
/**
 * <p>Updates a gateway's weekly maintenance start time information, including day and
 *          time of the week. The maintenance time is the time in your gateway's time zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateMaintenanceStartTimeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMaintenanceStartTimeCommand extends $Command<UpdateMaintenanceStartTimeCommandInput, UpdateMaintenanceStartTimeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateMaintenanceStartTimeCommandInput;
    constructor(input: UpdateMaintenanceStartTimeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMaintenanceStartTimeCommandInput, UpdateMaintenanceStartTimeCommandOutput>;
    private serialize;
    private deserialize;
}
