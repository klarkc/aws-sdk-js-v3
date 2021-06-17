import { __extends } from "tslib";
import { DeleteCommentContentInput, DeleteCommentContentOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteCommentContentCommand, serializeAws_json1_1DeleteCommentContentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteCommentContentCommand = /** @class */ (function (_super) {
    __extends(DeleteCommentContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCommentContentCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteCommentContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "DeleteCommentContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCommentContentInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCommentContentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCommentContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCommentContentCommand(input, context);
    };
    DeleteCommentContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCommentContentCommand(output, context);
    };
    return DeleteCommentContentCommand;
}($Command));
export { DeleteCommentContentCommand };
//# sourceMappingURL=DeleteCommentContentCommand.js.map