import { __extends } from "tslib";
import { UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput } from "../models/models_1";
import { deserializeAws_json1_1UpdatePullRequestTitleCommand, serializeAws_json1_1UpdatePullRequestTitleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the title of a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestTitleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestTitleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestTitleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestTitleCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestTitleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePullRequestTitleCommand = /** @class */ (function (_super) {
    __extends(UpdatePullRequestTitleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePullRequestTitleCommand(input) {
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
    UpdatePullRequestTitleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdatePullRequestTitleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePullRequestTitleInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePullRequestTitleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePullRequestTitleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePullRequestTitleCommand(input, context);
    };
    UpdatePullRequestTitleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePullRequestTitleCommand(output, context);
    };
    return UpdatePullRequestTitleCommand;
}($Command));
export { UpdatePullRequestTitleCommand };
//# sourceMappingURL=UpdatePullRequestTitleCommand.js.map