import { __extends } from "tslib";
import { DeregisterInstanceEventNotificationAttributesRequest, DeregisterInstanceEventNotificationAttributesResult, } from "../models/models_2";
import { deserializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand, serializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters tag keys to prevent tags that have the specified tag keys from being included
 * 			in scheduled event notifications for resources in the Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterInstanceEventNotificationAttributesCommand = /** @class */ (function (_super) {
    __extends(DeregisterInstanceEventNotificationAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterInstanceEventNotificationAttributesCommand(input) {
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
    DeregisterInstanceEventNotificationAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeregisterInstanceEventNotificationAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterInstanceEventNotificationAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterInstanceEventNotificationAttributesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterInstanceEventNotificationAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand(input, context);
    };
    DeregisterInstanceEventNotificationAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand(output, context);
    };
    return DeregisterInstanceEventNotificationAttributesCommand;
}($Command));
export { DeregisterInstanceEventNotificationAttributesCommand };
//# sourceMappingURL=DeregisterInstanceEventNotificationAttributesCommand.js.map