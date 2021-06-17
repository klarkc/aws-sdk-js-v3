import { __extends } from "tslib";
import { PutDeliveryChannelRequest } from "../models/models_0";
import { deserializeAws_json1_1PutDeliveryChannelCommand, serializeAws_json1_1PutDeliveryChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a delivery channel object to deliver configuration
 * 			information to an Amazon S3 bucket and Amazon SNS topic.</p>
 * 		       <p>Before you can create a delivery channel, you must create a
 * 			configuration recorder.</p>
 * 		       <p>You can use this action to change the Amazon S3 bucket or an
 * 			Amazon SNS topic of the existing delivery channel. To change the
 * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
 * 			specify the changed values for the S3 bucket and the SNS topic. If
 * 			you specify a different value for either the S3 bucket or the SNS
 * 			topic, this action will keep the existing value for the parameter
 * 			that is not changed.</p>
 * 		       <note>
 * 			         <p>You can have only one delivery channel per region in your
 * 				account.</p>
 *
 *
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDeliveryChannelCommand = /** @class */ (function (_super) {
    __extends(PutDeliveryChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDeliveryChannelCommand(input) {
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
    PutDeliveryChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutDeliveryChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDeliveryChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDeliveryChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutDeliveryChannelCommand(input, context);
    };
    PutDeliveryChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutDeliveryChannelCommand(output, context);
    };
    return PutDeliveryChannelCommand;
}($Command));
export { PutDeliveryChannelCommand };
//# sourceMappingURL=PutDeliveryChannelCommand.js.map