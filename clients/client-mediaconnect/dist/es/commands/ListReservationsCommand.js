import { __extends } from "tslib";
import { ListReservationsRequest, ListReservationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListReservationsCommand, serializeAws_restJson1ListReservationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Displays a list of all reservations that have been purchased by this account in the current AWS Region. This list includes all reservations in all states (such as active and expired).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListReservationsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListReservationsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new ListReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReservationsCommandInput} for command's `input` shape.
 * @see {@link ListReservationsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReservationsCommand = /** @class */ (function (_super) {
    __extends(ListReservationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReservationsCommand(input) {
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
    ListReservationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "ListReservationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReservationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListReservationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReservationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListReservationsCommand(input, context);
    };
    ListReservationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListReservationsCommand(output, context);
    };
    return ListReservationsCommand;
}($Command));
export { ListReservationsCommand };
//# sourceMappingURL=ListReservationsCommand.js.map