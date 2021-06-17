import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSpeechSynthesisTaskCommandInput extends StartSpeechSynthesisTaskInput {
}
export interface StartSpeechSynthesisTaskCommandOutput extends StartSpeechSynthesisTaskOutput, __MetadataBearer {
}
/**
 * <p>Allows the creation of an asynchronous synthesis task, by starting a new
 *         <code>SpeechSynthesisTask</code>. This operation requires all the standard information
 *       needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the
 *       output of the synthesis task and two optional parameters (OutputS3KeyPrefix and SnsTopicArn).
 *       Once the synthesis task is created, this operation will return a SpeechSynthesisTask object,
 *       which will include an identifier of this task as well as the current status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, StartSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, StartSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new StartSpeechSynthesisTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSpeechSynthesisTaskCommandInput} for command's `input` shape.
 * @see {@link StartSpeechSynthesisTaskCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSpeechSynthesisTaskCommand extends $Command<StartSpeechSynthesisTaskCommandInput, StartSpeechSynthesisTaskCommandOutput, PollyClientResolvedConfig> {
    readonly input: StartSpeechSynthesisTaskCommandInput;
    constructor(input: StartSpeechSynthesisTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PollyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSpeechSynthesisTaskCommandInput, StartSpeechSynthesisTaskCommandOutput>;
    private serialize;
    private deserialize;
}
