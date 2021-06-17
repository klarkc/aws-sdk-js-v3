import { __extends } from "tslib";
import { ListHoursOfOperationsRequest, ListHoursOfOperationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListHoursOfOperationsCommand, serializeAws_restJson1ListHoursOfOperationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the hours of operation for the specified Amazon Connect instance.</p>
 *          <p>For more information about hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html">Set the Hours of Operation for a
 *     Queue</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link ListHoursOfOperationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHoursOfOperationsCommand = /** @class */ (function (_super) {
    __extends(ListHoursOfOperationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHoursOfOperationsCommand(input) {
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
    ListHoursOfOperationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListHoursOfOperationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHoursOfOperationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHoursOfOperationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHoursOfOperationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListHoursOfOperationsCommand(input, context);
    };
    ListHoursOfOperationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListHoursOfOperationsCommand(output, context);
    };
    return ListHoursOfOperationsCommand;
}($Command));
export { ListHoursOfOperationsCommand };
//# sourceMappingURL=ListHoursOfOperationsCommand.js.map