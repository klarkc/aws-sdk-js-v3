import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateThingGroupRequest, UpdateThingGroupResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateThingGroupCommandInput extends UpdateThingGroupRequest {
}
export interface UpdateThingGroupCommandOutput extends UpdateThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Update a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateThingGroupCommand extends $Command<UpdateThingGroupCommandInput, UpdateThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateThingGroupCommandInput;
    constructor(input: UpdateThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateThingGroupCommandInput, UpdateThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
