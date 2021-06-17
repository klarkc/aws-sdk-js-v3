import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateThingGroupsForThingRequest, UpdateThingGroupsForThingResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateThingGroupsForThingCommandInput extends UpdateThingGroupsForThingRequest {
}
export interface UpdateThingGroupsForThingCommandOutput extends UpdateThingGroupsForThingResponse, __MetadataBearer {
}
/**
 * <p>Updates the groups to which the thing belongs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingGroupsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingGroupsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateThingGroupsForThingCommand extends $Command<UpdateThingGroupsForThingCommandInput, UpdateThingGroupsForThingCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateThingGroupsForThingCommandInput;
    constructor(input: UpdateThingGroupsForThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThingGroupsForThingCommandInput, UpdateThingGroupsForThingCommandOutput>;
    private serialize;
    private deserialize;
}
