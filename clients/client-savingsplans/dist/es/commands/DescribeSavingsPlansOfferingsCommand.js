import { __extends } from "tslib";
import { DescribeSavingsPlansOfferingsRequest, DescribeSavingsPlansOfferingsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand, serializeAws_restJson1DescribeSavingsPlansOfferingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Savings Plans offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingsCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingsCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlansOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlansOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingsCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSavingsPlansOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSavingsPlansOfferingsCommand(input) {
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
    DescribeSavingsPlansOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SavingsplansClient";
        var commandName = "DescribeSavingsPlansOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSavingsPlansOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSavingsPlansOfferingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSavingsPlansOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSavingsPlansOfferingsCommand(input, context);
    };
    DescribeSavingsPlansOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand(output, context);
    };
    return DescribeSavingsPlansOfferingsCommand;
}($Command));
export { DescribeSavingsPlansOfferingsCommand };
//# sourceMappingURL=DescribeSavingsPlansOfferingsCommand.js.map