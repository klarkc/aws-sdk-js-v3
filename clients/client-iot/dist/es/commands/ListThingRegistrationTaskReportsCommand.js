import { __extends } from "tslib";
import { ListThingRegistrationTaskReportsRequest, ListThingRegistrationTaskReportsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingRegistrationTaskReportsCommand, serializeAws_restJson1ListThingRegistrationTaskReportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information about the thing registration tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTaskReportsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTaskReportsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingRegistrationTaskReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingRegistrationTaskReportsCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTaskReportsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingRegistrationTaskReportsCommand = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTaskReportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingRegistrationTaskReportsCommand(input) {
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
    ListThingRegistrationTaskReportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingRegistrationTaskReportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingRegistrationTaskReportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingRegistrationTaskReportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingRegistrationTaskReportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingRegistrationTaskReportsCommand(input, context);
    };
    ListThingRegistrationTaskReportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingRegistrationTaskReportsCommand(output, context);
    };
    return ListThingRegistrationTaskReportsCommand;
}($Command));
export { ListThingRegistrationTaskReportsCommand };
//# sourceMappingURL=ListThingRegistrationTaskReportsCommand.js.map