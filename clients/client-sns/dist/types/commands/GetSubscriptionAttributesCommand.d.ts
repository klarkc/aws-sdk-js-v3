import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetSubscriptionAttributesInput, GetSubscriptionAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSubscriptionAttributesCommandInput extends GetSubscriptionAttributesInput {
}
export interface GetSubscriptionAttributesCommandOutput extends GetSubscriptionAttributesResponse, __MetadataBearer {
}
/**
 * <p>Returns all of the properties of a subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSubscriptionAttributesCommand extends $Command<GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetSubscriptionAttributesCommandInput;
    constructor(input: GetSubscriptionAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
