"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTextTranslationJobsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a list of the batch translation jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTextTranslationJobsCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTextTranslationJobsCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ListTextTranslationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTextTranslationJobsCommandInput} for command's `input` shape.
 * @see {@link ListTextTranslationJobsCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListTextTranslationJobsCommand extends smithy_client_1.Command {
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
        const clientName = "TranslateClient";
        const commandName = "ListTextTranslationJobsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListTextTranslationJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListTextTranslationJobsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListTextTranslationJobsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListTextTranslationJobsCommand(output, context);
    }
}
exports.ListTextTranslationJobsCommand = ListTextTranslationJobsCommand;
//# sourceMappingURL=ListTextTranslationJobsCommand.js.map