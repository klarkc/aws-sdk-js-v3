import { __extends } from "tslib";
import { DeleteDetectorModelRequest, DeleteDetectorModelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDetectorModelCommand, serializeAws_restJson1DeleteDetectorModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a detector model. Any active instances of the detector model are also
 *       deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DeleteDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDetectorModelCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDetectorModelCommand = /** @class */ (function (_super) {
    __extends(DeleteDetectorModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDetectorModelCommand(input) {
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
    DeleteDetectorModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "DeleteDetectorModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDetectorModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDetectorModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDetectorModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDetectorModelCommand(input, context);
    };
    DeleteDetectorModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDetectorModelCommand(output, context);
    };
    return DeleteDetectorModelCommand;
}($Command));
export { DeleteDetectorModelCommand };
//# sourceMappingURL=DeleteDetectorModelCommand.js.map