import { __extends } from "tslib";
import { UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput } from "../models/models_1";
import { deserializeAws_json1_1UpdatePullRequestDescriptionCommand, serializeAws_json1_1UpdatePullRequestDescriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the contents of the description of a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestDescriptionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestDescriptionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestDescriptionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePullRequestDescriptionCommand = /** @class */ (function (_super) {
    __extends(UpdatePullRequestDescriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePullRequestDescriptionCommand(input) {
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
    UpdatePullRequestDescriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdatePullRequestDescriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePullRequestDescriptionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePullRequestDescriptionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePullRequestDescriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePullRequestDescriptionCommand(input, context);
    };
    UpdatePullRequestDescriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePullRequestDescriptionCommand(output, context);
    };
    return UpdatePullRequestDescriptionCommand;
}($Command));
export { UpdatePullRequestDescriptionCommand };
//# sourceMappingURL=UpdatePullRequestDescriptionCommand.js.map