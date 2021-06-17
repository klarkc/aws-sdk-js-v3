import { __extends } from "tslib";
import { GetPullRequestApprovalStatesInput, GetPullRequestApprovalStatesOutput } from "../models/models_0";
import { deserializeAws_json1_1GetPullRequestApprovalStatesCommand, serializeAws_json1_1GetPullRequestApprovalStatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more
 *         approval rules applied to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetPullRequestApprovalStatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetPullRequestApprovalStatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetPullRequestApprovalStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPullRequestApprovalStatesCommandInput} for command's `input` shape.
 * @see {@link GetPullRequestApprovalStatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPullRequestApprovalStatesCommand = /** @class */ (function (_super) {
    __extends(GetPullRequestApprovalStatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPullRequestApprovalStatesCommand(input) {
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
    GetPullRequestApprovalStatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetPullRequestApprovalStatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPullRequestApprovalStatesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPullRequestApprovalStatesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPullRequestApprovalStatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPullRequestApprovalStatesCommand(input, context);
    };
    GetPullRequestApprovalStatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPullRequestApprovalStatesCommand(output, context);
    };
    return GetPullRequestApprovalStatesCommand;
}($Command));
export { GetPullRequestApprovalStatesCommand };
//# sourceMappingURL=GetPullRequestApprovalStatesCommand.js.map