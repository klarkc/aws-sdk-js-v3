import { __extends } from "tslib";
import { DescribeSavingsPlanRatesRequest, DescribeSavingsPlanRatesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSavingsPlanRatesCommand, serializeAws_restJson1DescribeSavingsPlanRatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Savings Plans rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlanRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlanRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlanRatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlanRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlanRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSavingsPlanRatesCommand = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlanRatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSavingsPlanRatesCommand(input) {
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
    DescribeSavingsPlanRatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SavingsplansClient";
        var commandName = "DescribeSavingsPlanRatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSavingsPlanRatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSavingsPlanRatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSavingsPlanRatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSavingsPlanRatesCommand(input, context);
    };
    DescribeSavingsPlanRatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSavingsPlanRatesCommand(output, context);
    };
    return DescribeSavingsPlanRatesCommand;
}($Command));
export { DescribeSavingsPlanRatesCommand };
//# sourceMappingURL=DescribeSavingsPlanRatesCommand.js.map