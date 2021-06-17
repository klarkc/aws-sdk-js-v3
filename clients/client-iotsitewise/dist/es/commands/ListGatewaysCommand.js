import { __extends } from "tslib";
import { ListGatewaysRequest, ListGatewaysResponse } from "../models/models_0";
import { deserializeAws_restJson1ListGatewaysCommand, serializeAws_restJson1ListGatewaysCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListGatewaysCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListGatewaysCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGatewaysCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGatewaysCommand = /** @class */ (function (_super) {
    __extends(ListGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGatewaysCommand(input) {
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
    ListGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGatewaysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGatewaysCommand(input, context);
    };
    ListGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGatewaysCommand(output, context);
    };
    return ListGatewaysCommand;
}($Command));
export { ListGatewaysCommand };
//# sourceMappingURL=ListGatewaysCommand.js.map