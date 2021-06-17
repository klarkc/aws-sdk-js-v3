import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { DeleteMessageBatchRequest, DeleteMessageBatchResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMessageBatchCommandInput extends DeleteMessageBatchRequest {
}
export interface DeleteMessageBatchCommandOutput extends DeleteMessageBatchResult, __MetadataBearer {
}
/**
 * <p>Deletes up to ten messages from the specified queue. This is a batch version of <code>
 *                <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p>
 *          <important>
 *             <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          </important>
 *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
 *          <p>
 *             <code>&AttributeName.1=first</code>
 *          </p>
 *          <p>
 *             <code>&AttributeName.2=second</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new DeleteMessageBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMessageBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMessageBatchCommand extends $Command<DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput, SQSClientResolvedConfig> {
    readonly input: DeleteMessageBatchCommandInput;
    constructor(input: DeleteMessageBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput>;
    private serialize;
    private deserialize;
}
