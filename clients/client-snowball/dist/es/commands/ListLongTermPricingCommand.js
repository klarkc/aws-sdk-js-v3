import { __extends } from "tslib";
import { ListLongTermPricingRequest, ListLongTermPricingResult } from "../models/models_0";
import { deserializeAws_json1_1ListLongTermPricingCommand, serializeAws_json1_1ListLongTermPricingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all long term pricing types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link ListLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLongTermPricingCommand = /** @class */ (function (_super) {
    __extends(ListLongTermPricingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLongTermPricingCommand(input) {
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
    ListLongTermPricingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "ListLongTermPricingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLongTermPricingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLongTermPricingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLongTermPricingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLongTermPricingCommand(input, context);
    };
    ListLongTermPricingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLongTermPricingCommand(output, context);
    };
    return ListLongTermPricingCommand;
}($Command));
export { ListLongTermPricingCommand };
//# sourceMappingURL=ListLongTermPricingCommand.js.map