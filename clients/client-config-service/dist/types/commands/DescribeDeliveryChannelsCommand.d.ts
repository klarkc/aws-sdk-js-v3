import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeDeliveryChannelsRequest, DescribeDeliveryChannelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDeliveryChannelsCommandInput extends DescribeDeliveryChannelsRequest {
}
export interface DescribeDeliveryChannelsCommandOutput extends DescribeDeliveryChannelsResponse, __MetadataBearer {
}
/**
 * <p>Returns details about the specified delivery channel. If a
 * 			delivery channel is not specified, this action returns the details
 * 			of all delivery channels associated with the account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeDeliveryChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeliveryChannelsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDeliveryChannelsCommand extends $Command<DescribeDeliveryChannelsCommandInput, DescribeDeliveryChannelsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeDeliveryChannelsCommandInput;
    constructor(input: DescribeDeliveryChannelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeliveryChannelsCommandInput, DescribeDeliveryChannelsCommandOutput>;
    private serialize;
    private deserialize;
}
