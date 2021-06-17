import { __extends } from "tslib";
import { RegisterInstanceEventNotificationAttributesRequest, RegisterInstanceEventNotificationAttributesResult, } from "../models/models_4";
import { deserializeAws_ec2RegisterInstanceEventNotificationAttributesCommand, serializeAws_ec2RegisterInstanceEventNotificationAttributesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a set of tag keys to include in scheduled event notifications for your resources.
 *    		</p>
 *          <p>To remove tags, use .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterInstanceEventNotificationAttributesCommand = /** @class */ (function (_super) {
    __extends(RegisterInstanceEventNotificationAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterInstanceEventNotificationAttributesCommand(input) {
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
    RegisterInstanceEventNotificationAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RegisterInstanceEventNotificationAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterInstanceEventNotificationAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterInstanceEventNotificationAttributesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterInstanceEventNotificationAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RegisterInstanceEventNotificationAttributesCommand(input, context);
    };
    RegisterInstanceEventNotificationAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RegisterInstanceEventNotificationAttributesCommand(output, context);
    };
    return RegisterInstanceEventNotificationAttributesCommand;
}($Command));
export { RegisterInstanceEventNotificationAttributesCommand };
//# sourceMappingURL=RegisterInstanceEventNotificationAttributesCommand.js.map