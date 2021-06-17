import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreateTopicInput, CreateTopicResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTopicCommandInput extends CreateTopicInput {
}
export interface CreateTopicCommandOutput extends CreateTopicResponse, __MetadataBearer {
}
/**
 * <p>Creates a topic to which notifications can be published. Users can create at most
 *             100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. This action is
 *             idempotent, so if the requester already owns a topic with the specified name, that
 *             topic's ARN is returned without creating a new topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreateTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTopicCommandInput} for command's `input` shape.
 * @see {@link CreateTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTopicCommand extends $Command<CreateTopicCommandInput, CreateTopicCommandOutput, SNSClientResolvedConfig> {
    readonly input: CreateTopicCommandInput;
    constructor(input: CreateTopicCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTopicCommandInput, CreateTopicCommandOutput>;
    private serialize;
    private deserialize;
}
