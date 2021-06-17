import { __extends } from "tslib";
import { GetCommitInput, GetCommitOutput } from "../models/models_0";
import { deserializeAws_json1_1GetCommitCommand, serializeAws_json1_1GetCommitCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a commit, including commit message and committer information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCommitCommandInput} for command's `input` shape.
 * @see {@link GetCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCommitCommand = /** @class */ (function (_super) {
    __extends(GetCommitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCommitCommand(input) {
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
    GetCommitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetCommitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCommitInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetCommitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCommitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCommitCommand(input, context);
    };
    GetCommitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCommitCommand(output, context);
    };
    return GetCommitCommand;
}($Command));
export { GetCommitCommand };
//# sourceMappingURL=GetCommitCommand.js.map