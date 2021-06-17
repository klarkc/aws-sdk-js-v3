import { __extends } from "tslib";
import { GetBranchInput, GetBranchOutput } from "../models/models_0";
import { deserializeAws_json1_1GetBranchCommand, serializeAws_json1_1GetBranchCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a repository branch, including its name and the last commit ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBranchCommandInput} for command's `input` shape.
 * @see {@link GetBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBranchCommand = /** @class */ (function (_super) {
    __extends(GetBranchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBranchCommand(input) {
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
    GetBranchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetBranchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBranchInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetBranchOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBranchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetBranchCommand(input, context);
    };
    GetBranchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetBranchCommand(output, context);
    };
    return GetBranchCommand;
}($Command));
export { GetBranchCommand };
//# sourceMappingURL=GetBranchCommand.js.map