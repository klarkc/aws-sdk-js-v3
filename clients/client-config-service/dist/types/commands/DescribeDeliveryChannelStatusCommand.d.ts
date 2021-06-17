import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeDeliveryChannelStatusRequest, DescribeDeliveryChannelStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDeliveryChannelStatusCommandInput extends DescribeDeliveryChannelStatusRequest {
}
export interface DescribeDeliveryChannelStatusCommandOutput extends DescribeDeliveryChannelStatusResponse, __MetadataBearer {
}
/**
 * <p>Returns the current status of the specified delivery channel.
 * 			If a delivery channel is not specified, this action returns the
 * 			current status of all delivery channels associated with the
 * 			account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeDeliveryChannelStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeliveryChannelStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDeliveryChannelStatusCommand extends $Command<DescribeDeliveryChannelStatusCommandInput, DescribeDeliveryChannelStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeDeliveryChannelStatusCommandInput;
    constructor(input: DescribeDeliveryChannelStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeliveryChannelStatusCommandInput, DescribeDeliveryChannelStatusCommandOutput>;
    private serialize;
    private deserialize;
}
