import { __extends } from "tslib";
import { UpdateDetectorModelRequest, UpdateDetectorModelResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDetectorModelCommand, serializeAws_restJson1UpdateDetectorModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a detector model. Detectors (instances) spawned by the previous version are
 *       deleted and then re-created as new inputs arrive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, UpdateDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, UpdateDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new UpdateDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorModelCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDetectorModelCommand = /** @class */ (function (_super) {
    __extends(UpdateDetectorModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDetectorModelCommand(input) {
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
    UpdateDetectorModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "UpdateDetectorModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDetectorModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDetectorModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDetectorModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDetectorModelCommand(input, context);
    };
    UpdateDetectorModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDetectorModelCommand(output, context);
    };
    return UpdateDetectorModelCommand;
}($Command));
export { UpdateDetectorModelCommand };
//# sourceMappingURL=UpdateDetectorModelCommand.js.map