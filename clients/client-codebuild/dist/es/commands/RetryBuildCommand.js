import { __extends } from "tslib";
import { RetryBuildInput, RetryBuildOutput } from "../models/models_0";
import { deserializeAws_json1_1RetryBuildCommand, serializeAws_json1_1RetryBuildCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restarts a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, RetryBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, RetryBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new RetryBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryBuildCommandInput} for command's `input` shape.
 * @see {@link RetryBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetryBuildCommand = /** @class */ (function (_super) {
    __extends(RetryBuildCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetryBuildCommand(input) {
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
    RetryBuildCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "RetryBuildCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetryBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: RetryBuildOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetryBuildCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RetryBuildCommand(input, context);
    };
    RetryBuildCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RetryBuildCommand(output, context);
    };
    return RetryBuildCommand;
}($Command));
export { RetryBuildCommand };
//# sourceMappingURL=RetryBuildCommand.js.map