import { __extends } from "tslib";
import { ListGroundStationsRequest, ListGroundStationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListGroundStationsCommand, serializeAws_restJson1ListGroundStationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of ground stations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListGroundStationsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListGroundStationsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListGroundStationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroundStationsCommandInput} for command's `input` shape.
 * @see {@link ListGroundStationsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroundStationsCommand = /** @class */ (function (_super) {
    __extends(ListGroundStationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroundStationsCommand(input) {
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
    ListGroundStationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "ListGroundStationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroundStationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroundStationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroundStationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGroundStationsCommand(input, context);
    };
    ListGroundStationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGroundStationsCommand(output, context);
    };
    return ListGroundStationsCommand;
}($Command));
export { ListGroundStationsCommand };
//# sourceMappingURL=ListGroundStationsCommand.js.map