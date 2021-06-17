import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThingRegistrationTaskCommandInput extends DescribeThingRegistrationTaskRequest {
}
export interface DescribeThingRegistrationTaskCommandOutput extends DescribeThingRegistrationTaskResponse, __MetadataBearer {
}
/**
 * <p>Describes a bulk thing provisioning task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThingRegistrationTaskCommand extends $Command<DescribeThingRegistrationTaskCommandInput, DescribeThingRegistrationTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeThingRegistrationTaskCommandInput;
    constructor(input: DescribeThingRegistrationTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThingRegistrationTaskCommandInput, DescribeThingRegistrationTaskCommandOutput>;
    private serialize;
    private deserialize;
}
