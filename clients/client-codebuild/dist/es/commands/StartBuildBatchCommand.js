import { __extends } from "tslib";
import { StartBuildBatchInput, StartBuildBatchOutput } from "../models/models_0";
import { deserializeAws_json1_1StartBuildBatchCommand, serializeAws_json1_1StartBuildBatchCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a batch build for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, StartBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, StartBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new StartBuildBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBuildBatchCommandInput} for command's `input` shape.
 * @see {@link StartBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartBuildBatchCommand = /** @class */ (function (_super) {
    __extends(StartBuildBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartBuildBatchCommand(input) {
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
    StartBuildBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "StartBuildBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartBuildBatchInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartBuildBatchOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartBuildBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartBuildBatchCommand(input, context);
    };
    StartBuildBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartBuildBatchCommand(output, context);
    };
    return StartBuildBatchCommand;
}($Command));
export { StartBuildBatchCommand };
//# sourceMappingURL=StartBuildBatchCommand.js.map