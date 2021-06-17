import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingTypeRequest, DescribeThingTypeResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThingTypeCommandInput extends DescribeThingTypeRequest {
}
export interface DescribeThingTypeCommandOutput extends DescribeThingTypeResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the specified thing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThingTypeCommand extends $Command<DescribeThingTypeCommandInput, DescribeThingTypeCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeThingTypeCommandInput;
    constructor(input: DescribeThingTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThingTypeCommandInput, DescribeThingTypeCommandOutput>;
    private serialize;
    private deserialize;
}
