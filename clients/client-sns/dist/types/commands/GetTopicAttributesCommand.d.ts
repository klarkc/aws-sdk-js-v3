import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetTopicAttributesInput, GetTopicAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTopicAttributesCommandInput extends GetTopicAttributesInput {
}
export interface GetTopicAttributesCommandOutput extends GetTopicAttributesResponse, __MetadataBearer {
}
/**
 * <p>Returns all of the properties of a topic. Topic properties returned might differ based
 *             on the authorization of the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetTopicAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetTopicAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetTopicAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTopicAttributesCommandInput} for command's `input` shape.
 * @see {@link GetTopicAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetTopicAttributesCommand extends $Command<GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetTopicAttributesCommandInput;
    constructor(input: GetTopicAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
