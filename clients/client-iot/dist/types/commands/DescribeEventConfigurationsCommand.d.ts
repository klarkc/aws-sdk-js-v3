import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeEventConfigurationsRequest, DescribeEventConfigurationsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventConfigurationsCommandInput extends DescribeEventConfigurationsRequest {
}
export interface DescribeEventConfigurationsCommandOutput extends DescribeEventConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Describes event configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeEventConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeEventConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeEventConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventConfigurationsCommand extends $Command<DescribeEventConfigurationsCommandInput, DescribeEventConfigurationsCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeEventConfigurationsCommandInput;
    constructor(input: DescribeEventConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventConfigurationsCommandInput, DescribeEventConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
