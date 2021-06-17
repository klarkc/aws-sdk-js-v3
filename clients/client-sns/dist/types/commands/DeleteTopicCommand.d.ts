import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { DeleteTopicInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTopicCommandInput extends DeleteTopicInput {
}
export interface DeleteTopicCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a topic and all its subscriptions. Deleting a topic might prevent some
 *             messages previously sent to the topic from being delivered to subscribers. This action
 *             is idempotent, so deleting a topic that does not exist does not result in an
 *             error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeleteTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeleteTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new DeleteTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTopicCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTopicCommand extends $Command<DeleteTopicCommandInput, DeleteTopicCommandOutput, SNSClientResolvedConfig> {
    readonly input: DeleteTopicCommandInput;
    constructor(input: DeleteTopicCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTopicCommandInput, DeleteTopicCommandOutput>;
    private serialize;
    private deserialize;
}
