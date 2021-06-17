import { __extends } from "tslib";
import { AcceptReservedNodeExchangeInputMessage, AcceptReservedNodeExchangeOutputMessage } from "../models/models_0";
import { deserializeAws_queryAcceptReservedNodeExchangeCommand, serializeAws_queryAcceptReservedNodeExchangeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
 *             configuration (term, payment type, or number of nodes) and no additional costs.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AcceptReservedNodeExchangeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AcceptReservedNodeExchangeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AcceptReservedNodeExchangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptReservedNodeExchangeCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedNodeExchangeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcceptReservedNodeExchangeCommand = /** @class */ (function (_super) {
    __extends(AcceptReservedNodeExchangeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcceptReservedNodeExchangeCommand(input) {
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
    AcceptReservedNodeExchangeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "AcceptReservedNodeExchangeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcceptReservedNodeExchangeInputMessage.filterSensitiveLog,
            outputFilterSensitiveLog: AcceptReservedNodeExchangeOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcceptReservedNodeExchangeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAcceptReservedNodeExchangeCommand(input, context);
    };
    AcceptReservedNodeExchangeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAcceptReservedNodeExchangeCommand(output, context);
    };
    return AcceptReservedNodeExchangeCommand;
}($Command));
export { AcceptReservedNodeExchangeCommand };
//# sourceMappingURL=AcceptReservedNodeExchangeCommand.js.map