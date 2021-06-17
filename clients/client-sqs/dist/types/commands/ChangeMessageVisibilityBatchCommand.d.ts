import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ChangeMessageVisibilityBatchRequest, ChangeMessageVisibilityBatchResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ChangeMessageVisibilityBatchCommandInput extends ChangeMessageVisibilityBatchRequest {
}
export interface ChangeMessageVisibilityBatchCommandOutput extends ChangeMessageVisibilityBatchResult, __MetadataBearer {
}
/**
 * <p>Changes the visibility timeout of multiple messages. This is a batch version of <code>
 *                <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response.
 *           You can send up to 10 <code>
 *                <a>ChangeMessageVisibility</a>
 *             </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p>
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
 * import { SQSClient, ChangeMessageVisibilityBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ChangeMessageVisibilityBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ChangeMessageVisibilityBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeMessageVisibilityBatchCommandInput} for command's `input` shape.
 * @see {@link ChangeMessageVisibilityBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ChangeMessageVisibilityBatchCommand extends $Command<ChangeMessageVisibilityBatchCommandInput, ChangeMessageVisibilityBatchCommandOutput, SQSClientResolvedConfig> {
    readonly input: ChangeMessageVisibilityBatchCommandInput;
    constructor(input: ChangeMessageVisibilityBatchCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ChangeMessageVisibilityBatchCommandInput, ChangeMessageVisibilityBatchCommandOutput>;
    private serialize;
    private deserialize;
}
