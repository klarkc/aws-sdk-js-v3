import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingGroupRequest, DescribeThingGroupResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThingGroupCommandInput extends DescribeThingGroupRequest {
}
export interface DescribeThingGroupCommandOutput extends DescribeThingGroupResponse, __MetadataBearer {
}
/**
 * <p>Describe a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThingGroupCommand extends $Command<DescribeThingGroupCommandInput, DescribeThingGroupCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeThingGroupCommandInput;
    constructor(input: DescribeThingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThingGroupCommandInput, DescribeThingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
