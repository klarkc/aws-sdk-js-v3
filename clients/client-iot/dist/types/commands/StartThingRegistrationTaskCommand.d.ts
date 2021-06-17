import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartThingRegistrationTaskRequest, StartThingRegistrationTaskResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartThingRegistrationTaskCommandInput extends StartThingRegistrationTaskRequest {
}
export interface StartThingRegistrationTaskCommandOutput extends StartThingRegistrationTaskResponse, __MetadataBearer {
}
/**
 * <p>Creates a bulk thing provisioning task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StartThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link StartThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartThingRegistrationTaskCommand extends $Command<StartThingRegistrationTaskCommandInput, StartThingRegistrationTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: StartThingRegistrationTaskCommandInput;
    constructor(input: StartThingRegistrationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartThingRegistrationTaskCommandInput, StartThingRegistrationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
