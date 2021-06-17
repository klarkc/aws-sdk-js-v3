import { __extends } from "tslib";
import { DescribeSavingsPlansOfferingRatesRequest, DescribeSavingsPlansOfferingRatesResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand, serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Savings Plans offering rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlansOfferingRatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlansOfferingRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSavingsPlansOfferingRatesCommand = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingRatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSavingsPlansOfferingRatesCommand(input) {
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
    DescribeSavingsPlansOfferingRatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SavingsplansClient";
        var commandName = "DescribeSavingsPlansOfferingRatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSavingsPlansOfferingRatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSavingsPlansOfferingRatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSavingsPlansOfferingRatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand(input, context);
    };
    DescribeSavingsPlansOfferingRatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand(output, context);
    };
    return DescribeSavingsPlansOfferingRatesCommand;
}($Command));
export { DescribeSavingsPlansOfferingRatesCommand };
//# sourceMappingURL=DescribeSavingsPlansOfferingRatesCommand.js.map