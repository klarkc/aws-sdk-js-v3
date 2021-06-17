import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RemoveThingFromThingGroupRequest, RemoveThingFromThingGroupResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveThingFromThingGroupCommandInput extends RemoveThingFromThingGroupRequest {
}
export interface RemoveThingFromThingGroupCommandOutput extends RemoveThingFromThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Remove the specified thing from the specified group.</p>
 * 		       <p>You must specify either a <code>thingGroupArn</code> or a
 * 			<code>thingGroupName</code> to identify the thing group and
 * 			either a <code>thingArn</code> or a <code>thingName</code> to
 * 			identify the thing to remove from the thing group.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RemoveThingFromThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveThingFromThingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveThingFromThingGroupCommand extends $Command<RemoveThingFromThingGroupCommandInput, RemoveThingFromThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: RemoveThingFromThingGroupCommandInput;
    constructor(input: RemoveThingFromThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveThingFromThingGroupCommandInput, RemoveThingFromThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
