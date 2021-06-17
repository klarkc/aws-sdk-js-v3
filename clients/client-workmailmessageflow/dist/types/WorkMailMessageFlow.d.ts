import { WorkMailMessageFlowClient } from "./WorkMailMessageFlowClient";
import { GetRawMessageContentCommandInput, GetRawMessageContentCommandOutput } from "./commands/GetRawMessageContentCommand";
import { PutRawMessageContentCommandInput, PutRawMessageContentCommandOutput } from "./commands/PutRawMessageContentCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The WorkMail Message Flow API provides access to email messages as they are
 *       being
 *       sent and received by
 *       a
 *       WorkMail organization.</p>
 */
export declare class WorkMailMessageFlow extends WorkMailMessageFlowClient {
    /**
     * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
     */
    getRawMessageContent(args: GetRawMessageContentCommandInput, options?: __HttpHandlerOptions): Promise<GetRawMessageContentCommandOutput>;
    getRawMessageContent(args: GetRawMessageContentCommandInput, cb: (err: any, data?: GetRawMessageContentCommandOutput) => void): void;
    getRawMessageContent(args: GetRawMessageContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRawMessageContentCommandOutput) => void): void;
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
     */
    putRawMessageContent(args: PutRawMessageContentCommandInput, options?: __HttpHandlerOptions): Promise<PutRawMessageContentCommandOutput>;
    putRawMessageContent(args: PutRawMessageContentCommandInput, cb: (err: any, data?: PutRawMessageContentCommandOutput) => void): void;
    putRawMessageContent(args: PutRawMessageContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRawMessageContentCommandOutput) => void): void;
}
