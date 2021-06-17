import { __extends } from "tslib";
import { DeleteInferenceSchedulerRequest } from "../models/models_0";
import { deserializeAws_json1_0DeleteInferenceSchedulerCommand, serializeAws_json1_0DeleteInferenceSchedulerCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an inference scheduler that has been set up. Already processed output results
 *          are not affected. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DeleteInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DeleteInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new DeleteInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link DeleteInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInferenceSchedulerCommand = /** @class */ (function (_super) {
    __extends(DeleteInferenceSchedulerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInferenceSchedulerCommand(input) {
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
    DeleteInferenceSchedulerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "DeleteInferenceSchedulerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInferenceSchedulerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInferenceSchedulerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteInferenceSchedulerCommand(input, context);
    };
    DeleteInferenceSchedulerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteInferenceSchedulerCommand(output, context);
    };
    return DeleteInferenceSchedulerCommand;
}($Command));
export { DeleteInferenceSchedulerCommand };
//# sourceMappingURL=DeleteInferenceSchedulerCommand.js.map