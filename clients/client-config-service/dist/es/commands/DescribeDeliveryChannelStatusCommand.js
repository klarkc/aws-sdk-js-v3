import { __extends } from "tslib";
import { DescribeDeliveryChannelStatusRequest, DescribeDeliveryChannelStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDeliveryChannelStatusCommand, serializeAws_json1_1DescribeDeliveryChannelStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current status of the specified delivery channel.
 * 			If a delivery channel is not specified, this action returns the
 * 			current status of all delivery channels associated with the
 * 			account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeDeliveryChannelStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeliveryChannelStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDeliveryChannelStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeDeliveryChannelStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDeliveryChannelStatusCommand(input) {
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
    DescribeDeliveryChannelStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeDeliveryChannelStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDeliveryChannelStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDeliveryChannelStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDeliveryChannelStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDeliveryChannelStatusCommand(input, context);
    };
    DescribeDeliveryChannelStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDeliveryChannelStatusCommand(output, context);
    };
    return DescribeDeliveryChannelStatusCommand;
}($Command));
export { DescribeDeliveryChannelStatusCommand };
//# sourceMappingURL=DescribeDeliveryChannelStatusCommand.js.map