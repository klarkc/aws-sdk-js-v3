import { __extends } from "tslib";
import { DeregisterImageRequest } from "../models/models_2";
import { deserializeAws_ec2DeregisterImageCommand, serializeAws_ec2DeregisterImageCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to launch
 * 			new instances; however, it doesn't affect any instances that you've already launched
 * 			from the AMI. You'll continue to incur usage costs for those instances until you
 * 			terminate them.</p>
 *          <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was
 * 			created for the root volume of the instance during the AMI creation process. When you
 * 			deregister an instance store-backed AMI, it doesn't affect the files that you uploaded
 * 			to Amazon S3 when you created the AMI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeregisterImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterImageCommandInput} for command's `input` shape.
 * @see {@link DeregisterImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterImageCommand = /** @class */ (function (_super) {
    __extends(DeregisterImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterImageCommand(input) {
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
    DeregisterImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeregisterImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterImageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeregisterImageCommand(input, context);
    };
    DeregisterImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeregisterImageCommand(output, context);
    };
    return DeregisterImageCommand;
}($Command));
export { DeregisterImageCommand };
//# sourceMappingURL=DeregisterImageCommand.js.map