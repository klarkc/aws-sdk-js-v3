import { __extends } from "tslib";
import { UpdateCommentInput, UpdateCommentOutput } from "../models/models_1";
import { deserializeAws_json1_1UpdateCommentCommand, serializeAws_json1_1UpdateCommentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the contents of a comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateCommentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateCommentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateCommentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateCommentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCommentCommand = /** @class */ (function (_super) {
    __extends(UpdateCommentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCommentCommand(input) {
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
    UpdateCommentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdateCommentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCommentInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCommentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCommentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCommentCommand(input, context);
    };
    UpdateCommentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCommentCommand(output, context);
    };
    return UpdateCommentCommand;
}($Command));
export { UpdateCommentCommand };
//# sourceMappingURL=UpdateCommentCommand.js.map