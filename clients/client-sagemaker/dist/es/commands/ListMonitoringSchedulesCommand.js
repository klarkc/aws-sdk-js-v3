import { __extends } from "tslib";
import { ListMonitoringSchedulesRequest, ListMonitoringSchedulesResponse } from "../models/models_2";
import { deserializeAws_json1_1ListMonitoringSchedulesCommand, serializeAws_json1_1ListMonitoringSchedulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns list of all monitoring schedules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringSchedulesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringSchedulesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListMonitoringSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitoringSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringSchedulesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMonitoringSchedulesCommand = /** @class */ (function (_super) {
    __extends(ListMonitoringSchedulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMonitoringSchedulesCommand(input) {
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
    ListMonitoringSchedulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListMonitoringSchedulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMonitoringSchedulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMonitoringSchedulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMonitoringSchedulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListMonitoringSchedulesCommand(input, context);
    };
    ListMonitoringSchedulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListMonitoringSchedulesCommand(output, context);
    };
    return ListMonitoringSchedulesCommand;
}($Command));
export { ListMonitoringSchedulesCommand };
//# sourceMappingURL=ListMonitoringSchedulesCommand.js.map