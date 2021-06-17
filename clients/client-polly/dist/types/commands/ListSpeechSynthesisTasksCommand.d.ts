import { PollyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PollyClient";
import { ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSpeechSynthesisTasksCommandInput extends ListSpeechSynthesisTasksInput {
}
export interface ListSpeechSynthesisTasksCommandOutput extends ListSpeechSynthesisTasksOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of SpeechSynthesisTask objects ordered by their creation date. This
 *       operation can filter the tasks by their status, for example, allowing users to list only tasks
 *       that are completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, ListSpeechSynthesisTasksCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, ListSpeechSynthesisTasksCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * const client = new PollyClient(config);
 * const command = new ListSpeechSynthesisTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSpeechSynthesisTasksCommandInput} for command's `input` shape.
 * @see {@link ListSpeechSynthesisTasksCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSpeechSynthesisTasksCommand extends $Command<ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput, PollyClientResolvedConfig> {
    readonly input: ListSpeechSynthesisTasksCommandInput;
    constructor(input: ListSpeechSynthesisTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PollyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput>;
    private serialize;
    private deserialize;
}
