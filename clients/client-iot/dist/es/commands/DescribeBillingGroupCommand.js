import { __extends } from "tslib";
import { DescribeBillingGroupRequest, DescribeBillingGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeBillingGroupCommand, serializeAws_restJson1DescribeBillingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBillingGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeBillingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBillingGroupCommand(input) {
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
    DescribeBillingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeBillingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBillingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBillingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBillingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBillingGroupCommand(input, context);
    };
    DescribeBillingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBillingGroupCommand(output, context);
    };
    return DescribeBillingGroupCommand;
}($Command));
export { DescribeBillingGroupCommand };
//# sourceMappingURL=DescribeBillingGroupCommand.js.map