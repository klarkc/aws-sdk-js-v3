import { __extends } from "tslib";
import { StopInferenceSchedulerRequest, StopInferenceSchedulerResponse } from "../models/models_0";
import { deserializeAws_json1_0StopInferenceSchedulerCommand, serializeAws_json1_0StopInferenceSchedulerCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StopInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StopInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new StopInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link StopInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopInferenceSchedulerCommand = /** @class */ (function (_super) {
    __extends(StopInferenceSchedulerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopInferenceSchedulerCommand(input) {
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
    StopInferenceSchedulerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "StopInferenceSchedulerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopInferenceSchedulerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopInferenceSchedulerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopInferenceSchedulerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StopInferenceSchedulerCommand(input, context);
    };
    StopInferenceSchedulerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StopInferenceSchedulerCommand(output, context);
    };
    return StopInferenceSchedulerCommand;
}($Command));
export { StopInferenceSchedulerCommand };
//# sourceMappingURL=StopInferenceSchedulerCommand.js.map