import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateDynamicThingGroupRequest, UpdateDynamicThingGroupResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDynamicThingGroupCommandInput extends UpdateDynamicThingGroupRequest {
}
export interface UpdateDynamicThingGroupCommandOutput extends UpdateDynamicThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Updates a dynamic thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDynamicThingGroupCommand extends $Command<UpdateDynamicThingGroupCommandInput, UpdateDynamicThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateDynamicThingGroupCommandInput;
    constructor(input: UpdateDynamicThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDynamicThingGroupCommandInput, UpdateDynamicThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
