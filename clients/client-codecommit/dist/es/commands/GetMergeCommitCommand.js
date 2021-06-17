import { __extends } from "tslib";
import { GetMergeCommitInput, GetMergeCommitOutput } from "../models/models_0";
import { deserializeAws_json1_1GetMergeCommitCommand, serializeAws_json1_1GetMergeCommitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specified merge commit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetMergeCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMergeCommitCommandInput} for command's `input` shape.
 * @see {@link GetMergeCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMergeCommitCommand = /** @class */ (function (_super) {
    __extends(GetMergeCommitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMergeCommitCommand(input) {
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
    GetMergeCommitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetMergeCommitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMergeCommitInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMergeCommitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMergeCommitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMergeCommitCommand(input, context);
    };
    GetMergeCommitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMergeCommitCommand(output, context);
    };
    return GetMergeCommitCommand;
}($Command));
export { GetMergeCommitCommand };
//# sourceMappingURL=GetMergeCommitCommand.js.map