import { ServiceInputTypes, ServiceOutputTypes, WorkMailMessageFlowClientResolvedConfig } from "../WorkMailMessageFlowClient";
import { PutRawMessageContentRequest, PutRawMessageContentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRawMessageContentCommandInput extends PutRawMessageContentRequest {
}
export interface PutRawMessageContentCommandOutput extends PutRawMessageContentResponse, __MetadataBearer {
}
/**
 * <p>Updates the raw content of an in-transit email message, in MIME format.</p>
 *          <p>This example describes how to update in-transit email message. For more information and examples for using this API, see
 *       <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *         Updating message content with AWS Lambda</a>.</p>
 *
 *
 *          <note>
 *             <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function
 *       configured with a  synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules">
 *         Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged,
 *       even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated
 *         message.
 *     </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, PutRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, PutRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const command = new PutRawMessageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link PutRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRawMessageContentCommand extends $Command<PutRawMessageContentCommandInput, PutRawMessageContentCommandOutput, WorkMailMessageFlowClientResolvedConfig> {
    readonly input: PutRawMessageContentCommandInput;
    constructor(input: PutRawMessageContentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailMessageFlowClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRawMessageContentCommandInput, PutRawMessageContentCommandOutput>;
    private serialize;
    private deserialize;
}
