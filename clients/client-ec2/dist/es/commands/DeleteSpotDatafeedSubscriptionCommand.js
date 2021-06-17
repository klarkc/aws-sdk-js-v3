import { __extends } from "tslib";
import { DeleteSpotDatafeedSubscriptionRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteSpotDatafeedSubscriptionCommand, serializeAws_ec2DeleteSpotDatafeedSubscriptionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the data feed for Spot Instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSpotDatafeedSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSpotDatafeedSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteSpotDatafeedSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSpotDatafeedSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteSpotDatafeedSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSpotDatafeedSubscriptionCommand = /** @class */ (function (_super) {
    __extends(DeleteSpotDatafeedSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSpotDatafeedSubscriptionCommand(input) {
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
    DeleteSpotDatafeedSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteSpotDatafeedSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSpotDatafeedSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSpotDatafeedSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteSpotDatafeedSubscriptionCommand(input, context);
    };
    DeleteSpotDatafeedSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteSpotDatafeedSubscriptionCommand(output, context);
    };
    return DeleteSpotDatafeedSubscriptionCommand;
}($Command));
export { DeleteSpotDatafeedSubscriptionCommand };
//# sourceMappingURL=DeleteSpotDatafeedSubscriptionCommand.js.map