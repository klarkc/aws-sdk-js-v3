import { __extends } from "tslib";
import { DeleteUserProfileRequest, DeleteUserProfileResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteUserProfileCommand, serializeAws_json1_1DeleteUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a user profile in AWS CodeStar, including all personal preference data associated with
 *       that profile, such as display name and email address. It does not delete the history of that
 *       user, for example the history of commits made by that user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DeleteUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DeleteUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DeleteUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteUserProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserProfileCommand(input) {
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
    DeleteUserProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "DeleteUserProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteUserProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteUserProfileCommand(input, context);
    };
    DeleteUserProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteUserProfileCommand(output, context);
    };
    return DeleteUserProfileCommand;
}($Command));
export { DeleteUserProfileCommand };
//# sourceMappingURL=DeleteUserProfileCommand.js.map