import { __extends } from "tslib";
import { PutCommentReactionInput } from "../models/models_1";
import { deserializeAws_json1_1PutCommentReactionCommand, serializeAws_json1_1PutCommentReactionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or
 *         update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, PutCommentReactionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, PutCommentReactionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new PutCommentReactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCommentReactionCommandInput} for command's `input` shape.
 * @see {@link PutCommentReactionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutCommentReactionCommand = /** @class */ (function (_super) {
    __extends(PutCommentReactionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutCommentReactionCommand(input) {
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
    PutCommentReactionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "PutCommentReactionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutCommentReactionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutCommentReactionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutCommentReactionCommand(input, context);
    };
    PutCommentReactionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutCommentReactionCommand(output, context);
    };
    return PutCommentReactionCommand;
}($Command));
export { PutCommentReactionCommand };
//# sourceMappingURL=PutCommentReactionCommand.js.map