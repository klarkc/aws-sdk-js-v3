import { __extends } from "tslib";
import { BatchUpdateDetectorRequest, BatchUpdateDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchUpdateDetectorCommand, serializeAws_restJson1BatchUpdateDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the state, variable values, and timer settings of one or more detectors
 *       (instances) of a specified detector model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchUpdateDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchUpdateDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchUpdateDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateDetectorCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDetectorCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchUpdateDetectorCommand = /** @class */ (function (_super) {
    __extends(BatchUpdateDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchUpdateDetectorCommand(input) {
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
    BatchUpdateDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "BatchUpdateDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchUpdateDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchUpdateDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchUpdateDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchUpdateDetectorCommand(input, context);
    };
    BatchUpdateDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchUpdateDetectorCommand(output, context);
    };
    return BatchUpdateDetectorCommand;
}($Command));
export { BatchUpdateDetectorCommand };
//# sourceMappingURL=BatchUpdateDetectorCommand.js.map