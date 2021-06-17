import { __extends } from "tslib";
import { AssociateIamInstanceProfileRequest, AssociateIamInstanceProfileResult } from "../models/models_0";
import { deserializeAws_ec2AssociateIamInstanceProfileCommand, serializeAws_ec2AssociateIamInstanceProfileCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an IAM instance profile with a running or stopped instance. You cannot
 *             associate more than one IAM instance profile with an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateIamInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(AssociateIamInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateIamInstanceProfileCommand(input) {
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
    AssociateIamInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateIamInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateIamInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateIamInstanceProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateIamInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateIamInstanceProfileCommand(input, context);
    };
    AssociateIamInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateIamInstanceProfileCommand(output, context);
    };
    return AssociateIamInstanceProfileCommand;
}($Command));
export { AssociateIamInstanceProfileCommand };
//# sourceMappingURL=AssociateIamInstanceProfileCommand.js.map