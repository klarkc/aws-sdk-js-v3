import { __extends } from "tslib";
import { GetReservedNodeExchangeOfferingsInputMessage, GetReservedNodeExchangeOfferingsOutputMessage, } from "../models/models_1";
import { deserializeAws_queryGetReservedNodeExchangeOfferingsCommand, serializeAws_queryGetReservedNodeExchangeOfferingsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
 *             and usage price of the given DC1 reserved node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetReservedNodeExchangeOfferingsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new GetReservedNodeExchangeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservedNodeExchangeOfferingsCommandInput} for command's `input` shape.
 * @see {@link GetReservedNodeExchangeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReservedNodeExchangeOfferingsCommand = /** @class */ (function (_super) {
    __extends(GetReservedNodeExchangeOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReservedNodeExchangeOfferingsCommand(input) {
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
    GetReservedNodeExchangeOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "GetReservedNodeExchangeOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReservedNodeExchangeOfferingsInputMessage.filterSensitiveLog,
            outputFilterSensitiveLog: GetReservedNodeExchangeOfferingsOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReservedNodeExchangeOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetReservedNodeExchangeOfferingsCommand(input, context);
    };
    GetReservedNodeExchangeOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetReservedNodeExchangeOfferingsCommand(output, context);
    };
    return GetReservedNodeExchangeOfferingsCommand;
}($Command));
export { GetReservedNodeExchangeOfferingsCommand };
//# sourceMappingURL=GetReservedNodeExchangeOfferingsCommand.js.map