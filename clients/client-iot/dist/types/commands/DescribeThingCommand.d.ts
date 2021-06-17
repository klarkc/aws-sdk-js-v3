import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingRequest, DescribeThingResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThingCommandInput extends DescribeThingRequest {
}
export interface DescribeThingCommandOutput extends DescribeThingResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the specified thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingCommandInput} for command's `input` shape.
 * @see {@link DescribeThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThingCommand extends $Command<DescribeThingCommandInput, DescribeThingCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeThingCommandInput;
    constructor(input: DescribeThingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThingCommandInput, DescribeThingCommandOutput>;
    private serialize;
    private deserialize;
}
