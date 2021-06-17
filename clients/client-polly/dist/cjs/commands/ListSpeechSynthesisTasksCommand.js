"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpeechSynthesisTasksCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class ListSpeechSynthesisTasksCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "ListSpeechSynthesisTasksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListSpeechSynthesisTasksInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListSpeechSynthesisTasksOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListSpeechSynthesisTasksCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListSpeechSynthesisTasksCommand(output, context);
    }
}
exports.ListSpeechSynthesisTasksCommand = ListSpeechSynthesisTasksCommand;
//# sourceMappingURL=ListSpeechSynthesisTasksCommand.js.map