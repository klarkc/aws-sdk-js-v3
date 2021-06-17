import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AddThingToBillingGroupRequest, AddThingToBillingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddThingToBillingGroupCommandInput extends AddThingToBillingGroupRequest {
}
export interface AddThingToBillingGroupCommandOutput extends AddThingToBillingGroupResponse, __MetadataBearer {
}
/**
 * <p>Adds a thing to a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AddThingToBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AddThingToBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AddThingToBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddThingToBillingGroupCommandInput} for command's `input` shape.
 * @see {@link AddThingToBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddThingToBillingGroupCommand extends $Command<AddThingToBillingGroupCommandInput, AddThingToBillingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: AddThingToBillingGroupCommandInput;
    constructor(input: AddThingToBillingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddThingToBillingGroupCommandInput, AddThingToBillingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
