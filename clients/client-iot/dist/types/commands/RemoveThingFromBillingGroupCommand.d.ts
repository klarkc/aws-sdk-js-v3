import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RemoveThingFromBillingGroupRequest, RemoveThingFromBillingGroupResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveThingFromBillingGroupCommandInput extends RemoveThingFromBillingGroupRequest {
}
export interface RemoveThingFromBillingGroupCommandOutput extends RemoveThingFromBillingGroupResponse, __MetadataBearer {
}
/**
 * <p>Removes the given thing from the billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RemoveThingFromBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveThingFromBillingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveThingFromBillingGroupCommand extends $Command<RemoveThingFromBillingGroupCommandInput, RemoveThingFromBillingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: RemoveThingFromBillingGroupCommandInput;
    constructor(input: RemoveThingFromBillingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveThingFromBillingGroupCommandInput, RemoveThingFromBillingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
