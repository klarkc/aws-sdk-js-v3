import { __extends } from "tslib";
import { GetReservedInstancesExchangeQuoteRequest, GetReservedInstancesExchangeQuoteResult } from "../models/models_4";
import { deserializeAws_ec2GetReservedInstancesExchangeQuoteCommand, serializeAws_ec2GetReservedInstancesExchangeQuoteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a quote and exchange information for exchanging one or more specified
 *             Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange
 *             cannot be performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link GetReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReservedInstancesExchangeQuoteCommand = /** @class */ (function (_super) {
    __extends(GetReservedInstancesExchangeQuoteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReservedInstancesExchangeQuoteCommand(input) {
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
    GetReservedInstancesExchangeQuoteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetReservedInstancesExchangeQuoteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReservedInstancesExchangeQuoteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetReservedInstancesExchangeQuoteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReservedInstancesExchangeQuoteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetReservedInstancesExchangeQuoteCommand(input, context);
    };
    GetReservedInstancesExchangeQuoteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetReservedInstancesExchangeQuoteCommand(output, context);
    };
    return GetReservedInstancesExchangeQuoteCommand;
}($Command));
export { GetReservedInstancesExchangeQuoteCommand };
//# sourceMappingURL=GetReservedInstancesExchangeQuoteCommand.js.map