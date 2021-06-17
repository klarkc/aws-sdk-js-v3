import { __extends } from "tslib";
import { StopBuildInput, StopBuildOutput } from "../models/models_0";
import { deserializeAws_json1_1StopBuildCommand, serializeAws_json1_1StopBuildCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attempts to stop running a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StopBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StopBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StopBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBuildCommandInput} for command's `input` shape.
 * @see {@link StopBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopBuildCommand = /** @class */ (function (_super) {
    __extends(StopBuildCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopBuildCommand(input) {
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
    StopBuildCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "StopBuildCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopBuildOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopBuildCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopBuildCommand(input, context);
    };
    StopBuildCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopBuildCommand(output, context);
    };
    return StopBuildCommand;
}($Command));
export { StopBuildCommand };
//# sourceMappingURL=StopBuildCommand.js.map