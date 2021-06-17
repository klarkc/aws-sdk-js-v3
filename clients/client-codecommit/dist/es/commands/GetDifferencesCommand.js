import { __extends } from "tslib";
import { GetDifferencesInput, GetDifferencesOutput } from "../models/models_0";
import { deserializeAws_json1_1GetDifferencesCommand, serializeAws_json1_1GetDifferencesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the differences in a valid commit specifier (such as a
 *             branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be
 *             limited to a specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetDifferencesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetDifferencesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetDifferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDifferencesCommandInput} for command's `input` shape.
 * @see {@link GetDifferencesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDifferencesCommand = /** @class */ (function (_super) {
    __extends(GetDifferencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDifferencesCommand(input) {
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
    GetDifferencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetDifferencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDifferencesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDifferencesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDifferencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDifferencesCommand(input, context);
    };
    GetDifferencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDifferencesCommand(output, context);
    };
    return GetDifferencesCommand;
}($Command));
export { GetDifferencesCommand };
//# sourceMappingURL=GetDifferencesCommand.js.map