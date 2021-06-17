import { __extends } from "tslib";
import { CreateLongTermPricingRequest, CreateLongTermPricingResult } from "../models/models_0";
import { deserializeAws_json1_1CreateLongTermPricingCommand, serializeAws_json1_1CreateLongTermPricingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a job with long term usage option for a device. The long term usage is a one year or three year long term pricing type for the device.
 *       You are billed upfront and AWS give discounts for long term pricing. For detailed information see XXXXXXXX</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link CreateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLongTermPricingCommand = /** @class */ (function (_super) {
    __extends(CreateLongTermPricingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLongTermPricingCommand(input) {
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
    CreateLongTermPricingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "CreateLongTermPricingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLongTermPricingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLongTermPricingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLongTermPricingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLongTermPricingCommand(input, context);
    };
    CreateLongTermPricingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLongTermPricingCommand(output, context);
    };
    return CreateLongTermPricingCommand;
}($Command));
export { CreateLongTermPricingCommand };
//# sourceMappingURL=CreateLongTermPricingCommand.js.map