"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentContentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the content of a comment made on a change, file, or commit in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteCommentContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteCommentContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteCommentContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCommentContentCommandInput} for command's `input` shape.
 * @see {@link DeleteCommentContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteCommentContentCommand extends smithy_client_1.Command {
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
        const clientName = "CodeCommitClient";
        const commandName = "DeleteCommentContentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteCommentContentInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteCommentContentOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteCommentContentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteCommentContentCommand(output, context);
    }
}
exports.DeleteCommentContentCommand = DeleteCommentContentCommand;
//# sourceMappingURL=DeleteCommentContentCommand.js.map