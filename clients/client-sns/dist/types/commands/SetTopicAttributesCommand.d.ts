import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetTopicAttributesInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetTopicAttributesCommandInput extends SetTopicAttributesInput {
}
export interface SetTopicAttributesCommandOutput extends __MetadataBearer {
}
/**
 * <p>Allows a topic owner to set an attribute of the topic to a new value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetTopicAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetTopicAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetTopicAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTopicAttributesCommandInput} for command's `input` shape.
 * @see {@link SetTopicAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetTopicAttributesCommand extends $Command<SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetTopicAttributesCommandInput;
    constructor(input: SetTopicAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
