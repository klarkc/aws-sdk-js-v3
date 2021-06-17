import { __extends } from "tslib";
import { ListDetectorModelVersionsRequest, ListDetectorModelVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDetectorModelVersionsCommand, serializeAws_restJson1ListDetectorModelVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the versions of a detector model. Only the metadata associated with each
 *       detector model version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListDetectorModelVersionsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListDetectorModelVersionsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListDetectorModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectorModelVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectorModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDetectorModelVersionsCommand = /** @class */ (function (_super) {
    __extends(ListDetectorModelVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDetectorModelVersionsCommand(input) {
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
    ListDetectorModelVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "ListDetectorModelVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDetectorModelVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDetectorModelVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDetectorModelVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDetectorModelVersionsCommand(input, context);
    };
    ListDetectorModelVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDetectorModelVersionsCommand(output, context);
    };
    return ListDetectorModelVersionsCommand;
}($Command));
export { ListDetectorModelVersionsCommand };
//# sourceMappingURL=ListDetectorModelVersionsCommand.js.map