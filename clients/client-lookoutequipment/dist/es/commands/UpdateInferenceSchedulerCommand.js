import { __extends } from "tslib";
import { UpdateInferenceSchedulerRequest } from "../models/models_0";
import { deserializeAws_json1_0UpdateInferenceSchedulerCommand, serializeAws_json1_0UpdateInferenceSchedulerCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new UpdateInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInferenceSchedulerCommand = /** @class */ (function (_super) {
    __extends(UpdateInferenceSchedulerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInferenceSchedulerCommand(input) {
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
    UpdateInferenceSchedulerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "UpdateInferenceSchedulerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInferenceSchedulerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInferenceSchedulerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateInferenceSchedulerCommand(input, context);
    };
    UpdateInferenceSchedulerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateInferenceSchedulerCommand(output, context);
    };
    return UpdateInferenceSchedulerCommand;
}($Command));
export { UpdateInferenceSchedulerCommand };
//# sourceMappingURL=UpdateInferenceSchedulerCommand.js.map