import { __extends } from "tslib";
import { UpdateLongTermPricingRequest, UpdateLongTermPricingResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateLongTermPricingCommand, serializeAws_json1_1UpdateLongTermPricingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the long term pricing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link UpdateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLongTermPricingCommand = /** @class */ (function (_super) {
    __extends(UpdateLongTermPricingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLongTermPricingCommand(input) {
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
    UpdateLongTermPricingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "UpdateLongTermPricingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLongTermPricingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLongTermPricingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLongTermPricingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLongTermPricingCommand(input, context);
    };
    UpdateLongTermPricingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLongTermPricingCommand(output, context);
    };
    return UpdateLongTermPricingCommand;
}($Command));
export { UpdateLongTermPricingCommand };
//# sourceMappingURL=UpdateLongTermPricingCommand.js.map