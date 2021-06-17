import { __extends } from "tslib";
import { RetryBuildBatchInput, RetryBuildBatchOutput } from "../models/models_0";
import { deserializeAws_json1_1RetryBuildBatchCommand, serializeAws_json1_1RetryBuildBatchCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restarts a failed batch build. Only batch builds that have failed can be retried.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, RetryBuildBatchCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, RetryBuildBatchCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new RetryBuildBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryBuildBatchCommandInput} for command's `input` shape.
 * @see {@link RetryBuildBatchCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetryBuildBatchCommand = /** @class */ (function (_super) {
    __extends(RetryBuildBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetryBuildBatchCommand(input) {
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
    RetryBuildBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "RetryBuildBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetryBuildBatchInput.filterSensitiveLog,
            outputFilterSensitiveLog: RetryBuildBatchOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetryBuildBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RetryBuildBatchCommand(input, context);
    };
    RetryBuildBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RetryBuildBatchCommand(output, context);
    };
    return RetryBuildBatchCommand;
}($Command));
export { RetryBuildBatchCommand };
//# sourceMappingURL=RetryBuildBatchCommand.js.map