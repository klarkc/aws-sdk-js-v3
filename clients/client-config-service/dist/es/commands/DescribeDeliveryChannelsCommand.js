import { __extends } from "tslib";
import { DescribeDeliveryChannelsRequest, DescribeDeliveryChannelsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDeliveryChannelsCommand, serializeAws_json1_1DescribeDeliveryChannelsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details about the specified delivery channel. If a
 * 			delivery channel is not specified, this action returns the details
 * 			of all delivery channels associated with the account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeDeliveryChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeliveryChannelsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDeliveryChannelsCommand = /** @class */ (function (_super) {
    __extends(DescribeDeliveryChannelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDeliveryChannelsCommand(input) {
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
    DescribeDeliveryChannelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeDeliveryChannelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDeliveryChannelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDeliveryChannelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDeliveryChannelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDeliveryChannelsCommand(input, context);
    };
    DescribeDeliveryChannelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDeliveryChannelsCommand(output, context);
    };
    return DescribeDeliveryChannelsCommand;
}($Command));
export { DescribeDeliveryChannelsCommand };
//# sourceMappingURL=DescribeDeliveryChannelsCommand.js.map