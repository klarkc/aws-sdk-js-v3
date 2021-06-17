import { __extends } from "tslib";
import { DescribeSavingsPlansRequest, DescribeSavingsPlansResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSavingsPlansCommand, serializeAws_restJson1DescribeSavingsPlansCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Savings Plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlansCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSavingsPlansCommand = /** @class */ (function (_super) {
    __extends(DescribeSavingsPlansCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSavingsPlansCommand(input) {
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
    DescribeSavingsPlansCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SavingsplansClient";
        var commandName = "DescribeSavingsPlansCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSavingsPlansRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSavingsPlansResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSavingsPlansCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSavingsPlansCommand(input, context);
    };
    DescribeSavingsPlansCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSavingsPlansCommand(output, context);
    };
    return DescribeSavingsPlansCommand;
}($Command));
export { DescribeSavingsPlansCommand };
//# sourceMappingURL=DescribeSavingsPlansCommand.js.map