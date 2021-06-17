import { __extends } from "tslib";
import { UpdatePullRequestApprovalStateInput } from "../models/models_1";
import { deserializeAws_json1_1UpdatePullRequestApprovalStateCommand, serializeAws_json1_1UpdatePullRequestApprovalStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestApprovalStateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestApprovalStateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestApprovalStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestApprovalStateCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestApprovalStateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePullRequestApprovalStateCommand = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePullRequestApprovalStateCommand(input) {
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
    UpdatePullRequestApprovalStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdatePullRequestApprovalStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePullRequestApprovalStateInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePullRequestApprovalStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePullRequestApprovalStateCommand(input, context);
    };
    UpdatePullRequestApprovalStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePullRequestApprovalStateCommand(output, context);
    };
    return UpdatePullRequestApprovalStateCommand;
}($Command));
export { UpdatePullRequestApprovalStateCommand };
//# sourceMappingURL=UpdatePullRequestApprovalStateCommand.js.map