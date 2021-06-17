import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDeviceCommandInput extends DescribeDeviceRequest {
}
export interface DescribeDeviceCommandOutput extends DescribeDeviceResponse, __MetadataBearer {
}
/**
 * <p>Provides information about a user's device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeDeviceCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeDeviceCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDeviceCommand extends $Command<DescribeDeviceCommandInput, DescribeDeviceCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DescribeDeviceCommandInput;
    constructor(input: DescribeDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeviceCommandInput, DescribeDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
