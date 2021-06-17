import { __extends } from "tslib";
import { StartBuildInput, StartBuildOutput } from "../models/models_0";
import { deserializeAws_json1_1StartBuildCommand, serializeAws_json1_1StartBuildCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts running a build.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StartBuildCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StartBuildCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StartBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBuildCommandInput} for command's `input` shape.
 * @see {@link StartBuildCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartBuildCommand = /** @class */ (function (_super) {
    __extends(StartBuildCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartBuildCommand(input) {
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
    StartBuildCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "StartBuildCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartBuildOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartBuildCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartBuildCommand(input, context);
    };
    StartBuildCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartBuildCommand(output, context);
    };
    return StartBuildCommand;
}($Command));
export { StartBuildCommand };
//# sourceMappingURL=StartBuildCommand.js.map