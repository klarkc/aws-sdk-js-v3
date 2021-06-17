import { __extends } from "tslib";
import { ListMonitoringExecutionsRequest, ListMonitoringExecutionsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListMonitoringExecutionsCommand, serializeAws_json1_1ListMonitoringExecutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns list of all monitoring job executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringExecutionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringExecutionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListMonitoringExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitoringExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMonitoringExecutionsCommand = /** @class */ (function (_super) {
    __extends(ListMonitoringExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMonitoringExecutionsCommand(input) {
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
    ListMonitoringExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListMonitoringExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMonitoringExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMonitoringExecutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMonitoringExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMonitoringExecutionsCommand(input, context);
    };
    ListMonitoringExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMonitoringExecutionsCommand(output, context);
    };
    return ListMonitoringExecutionsCommand;
}($Command));
export { ListMonitoringExecutionsCommand };
//# sourceMappingURL=ListMonitoringExecutionsCommand.js.map