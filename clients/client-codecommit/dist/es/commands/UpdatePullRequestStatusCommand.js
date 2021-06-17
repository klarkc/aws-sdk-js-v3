import { __extends } from "tslib";
import { UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput } from "../models/models_1";
import { deserializeAws_json1_1UpdatePullRequestStatusCommand, serializeAws_json1_1UpdatePullRequestStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status of a pull request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestStatusCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestStatusCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePullRequestStatusCommand = /** @class */ (function (_super) {
    __extends(UpdatePullRequestStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePullRequestStatusCommand(input) {
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
    UpdatePullRequestStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdatePullRequestStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePullRequestStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePullRequestStatusOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePullRequestStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePullRequestStatusCommand(input, context);
    };
    UpdatePullRequestStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePullRequestStatusCommand(output, context);
    };
    return UpdatePullRequestStatusCommand;
}($Command));
export { UpdatePullRequestStatusCommand };
//# sourceMappingURL=UpdatePullRequestStatusCommand.js.map