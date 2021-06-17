import { __extends } from "tslib";
import { UpdateDefaultBranchInput } from "../models/models_1";
import { deserializeAws_json1_1UpdateDefaultBranchCommand, serializeAws_json1_1UpdateDefaultBranchCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets or changes the default branch name for the specified repository.</p>
 *         <note>
 *             <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateDefaultBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateDefaultBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateDefaultBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDefaultBranchCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDefaultBranchCommand = /** @class */ (function (_super) {
    __extends(UpdateDefaultBranchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDefaultBranchCommand(input) {
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
    UpdateDefaultBranchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdateDefaultBranchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDefaultBranchInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDefaultBranchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDefaultBranchCommand(input, context);
    };
    UpdateDefaultBranchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDefaultBranchCommand(output, context);
    };
    return UpdateDefaultBranchCommand;
}($Command));
export { UpdateDefaultBranchCommand };
//# sourceMappingURL=UpdateDefaultBranchCommand.js.map