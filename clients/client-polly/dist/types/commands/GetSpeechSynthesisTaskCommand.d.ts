import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { GetSpeechSynthesisTaskInput, GetSpeechSynthesisTaskOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSpeechSynthesisTaskCommandInput extends GetSpeechSynthesisTaskInput {
}
export interface GetSpeechSynthesisTaskCommandOutput extends GetSpeechSynthesisTaskOutput, __MetadataBearer {
}
/**
 * <p>Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains
 *       information about the given speech synthesis task, including the status of the task, and a
 *       link to the S3 bucket containing the output of the task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, GetSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, GetSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new GetSpeechSynthesisTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSpeechSynthesisTaskCommandInput} for command's `input` shape.
 * @see {@link GetSpeechSynthesisTaskCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSpeechSynthesisTaskCommand extends $Command<GetSpeechSynthesisTaskCommandInput, GetSpeechSynthesisTaskCommandOutput, PollyClientResolvedConfig> {
    readonly input: GetSpeechSynthesisTaskCommandInput;
    constructor(input: GetSpeechSynthesisTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PollyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSpeechSynthesisTaskCommandInput, GetSpeechSynthesisTaskCommandOutput>;
    private serialize;
    private deserialize;
}
