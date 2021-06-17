import { __extends } from "tslib";
import { ListDetectorModelsRequest, ListDetectorModelsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDetectorModelsCommand, serializeAws_restJson1ListDetectorModelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the detector models you have created. Only the metadata associated with each
 *       detector model is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListDetectorModelsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListDetectorModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectorModelsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDetectorModelsCommand = /** @class */ (function (_super) {
    __extends(ListDetectorModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDetectorModelsCommand(input) {
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
    ListDetectorModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "ListDetectorModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDetectorModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDetectorModelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDetectorModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDetectorModelsCommand(input, context);
    };
    ListDetectorModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDetectorModelsCommand(output, context);
    };
    return ListDetectorModelsCommand;
}($Command));
export { ListDetectorModelsCommand };
//# sourceMappingURL=ListDetectorModelsCommand.js.map