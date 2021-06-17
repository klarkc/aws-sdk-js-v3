import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StopThingRegistrationTaskRequest, StopThingRegistrationTaskResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopThingRegistrationTaskCommandInput extends StopThingRegistrationTaskRequest {
}
export interface StopThingRegistrationTaskCommandOutput extends StopThingRegistrationTaskResponse, __MetadataBearer {
}
/**
 * <p>Cancels a bulk thing provisioning task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StopThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StopThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StopThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link StopThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopThingRegistrationTaskCommand extends $Command<StopThingRegistrationTaskCommandInput, StopThingRegistrationTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: StopThingRegistrationTaskCommandInput;
    constructor(input: StopThingRegistrationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopThingRegistrationTaskCommandInput, StopThingRegistrationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
