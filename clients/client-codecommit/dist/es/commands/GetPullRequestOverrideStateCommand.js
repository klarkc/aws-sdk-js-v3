import { __extends } from "tslib";
import { GetPullRequestOverrideStateInput, GetPullRequestOverrideStateOutput } from "../models/models_0";
import { deserializeAws_json1_1GetPullRequestOverrideStateCommand, serializeAws_json1_1GetPullRequestOverrideStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about whether approval rules have been set aside (overridden) for a
 *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestOverrideStateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestOverrideStateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetPullRequestOverrideStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPullRequestOverrideStateCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestOverrideStateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPullRequestOverrideStateCommand = /** @class */ (function (_super) {
    __extends(GetPullRequestOverrideStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPullRequestOverrideStateCommand(input) {
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
    GetPullRequestOverrideStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetPullRequestOverrideStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPullRequestOverrideStateInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPullRequestOverrideStateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPullRequestOverrideStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPullRequestOverrideStateCommand(input, context);
    };
    GetPullRequestOverrideStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPullRequestOverrideStateCommand(output, context);
    };
    return GetPullRequestOverrideStateCommand;
}($Command));
export { GetPullRequestOverrideStateCommand };
//# sourceMappingURL=GetPullRequestOverrideStateCommand.js.map