import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInputCommandInput extends DescribeInputRequest {
}
export interface DescribeInputCommandOutput extends DescribeInputResponse, __MetadataBearer {
}
/**
 * <p>Describes an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInputCommand extends $Command<DescribeInputCommandInput, DescribeInputCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: DescribeInputCommandInput;
    constructor(input: DescribeInputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInputCommandInput, DescribeInputCommandOutput>;
    private serialize;
    private deserialize;
}
