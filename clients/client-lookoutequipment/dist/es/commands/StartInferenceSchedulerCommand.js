import { __extends } from "tslib";
import { StartInferenceSchedulerRequest, StartInferenceSchedulerResponse } from "../models/models_0";
import { deserializeAws_json1_0StartInferenceSchedulerCommand, serializeAws_json1_0StartInferenceSchedulerCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StartInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StartInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new StartInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link StartInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartInferenceSchedulerCommand = /** @class */ (function (_super) {
    __extends(StartInferenceSchedulerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartInferenceSchedulerCommand(input) {
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
    StartInferenceSchedulerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "StartInferenceSchedulerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartInferenceSchedulerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartInferenceSchedulerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartInferenceSchedulerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StartInferenceSchedulerCommand(input, context);
    };
    StartInferenceSchedulerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StartInferenceSchedulerCommand(output, context);
    };
    return StartInferenceSchedulerCommand;
}($Command));
export { StartInferenceSchedulerCommand };
//# sourceMappingURL=StartInferenceSchedulerCommand.js.map