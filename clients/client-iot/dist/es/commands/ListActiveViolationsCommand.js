import { __extends } from "tslib";
import { ListActiveViolationsRequest, ListActiveViolationsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListActiveViolationsCommand, serializeAws_restJson1ListActiveViolationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the active violations for a given Device Defender security profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListActiveViolationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListActiveViolationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListActiveViolationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActiveViolationsCommandInput} for command's `input` shape.
 * @see {@link ListActiveViolationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListActiveViolationsCommand = /** @class */ (function (_super) {
    __extends(ListActiveViolationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListActiveViolationsCommand(input) {
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
    ListActiveViolationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListActiveViolationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListActiveViolationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListActiveViolationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListActiveViolationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListActiveViolationsCommand(input, context);
    };
    ListActiveViolationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListActiveViolationsCommand(output, context);
    };
    return ListActiveViolationsCommand;
}($Command));
export { ListActiveViolationsCommand };
//# sourceMappingURL=ListActiveViolationsCommand.js.map