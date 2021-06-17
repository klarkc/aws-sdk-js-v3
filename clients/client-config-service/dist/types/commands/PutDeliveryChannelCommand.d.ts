import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutDeliveryChannelRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutDeliveryChannelCommandInput extends PutDeliveryChannelRequest {
}
export interface PutDeliveryChannelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates a delivery channel object to deliver configuration
 * 			information to an Amazon S3 bucket and Amazon SNS topic.</p>
 * 		       <p>Before you can create a delivery channel, you must create a
 * 			configuration recorder.</p>
 * 		       <p>You can use this action to change the Amazon S3 bucket or an
 * 			Amazon SNS topic of the existing delivery channel. To change the
 * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
 * 			specify the changed values for the S3 bucket and the SNS topic. If
 * 			you specify a different value for either the S3 bucket or the SNS
 * 			topic, this action will keep the existing value for the parameter
 * 			that is not changed.</p>
 * 		       <note>
 * 			         <p>You can have only one delivery channel per region in your
 * 				account.</p>
 *
 *
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutDeliveryChannelCommand extends $Command<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutDeliveryChannelCommandInput;
    constructor(input: PutDeliveryChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput>;
    private serialize;
    private deserialize;
}
