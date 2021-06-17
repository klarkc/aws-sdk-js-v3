import { __extends } from "tslib";
import { DisassociateIamInstanceProfileRequest, DisassociateIamInstanceProfileResult } from "../models/models_4";
import { deserializeAws_ec2DisassociateIamInstanceProfileCommand, serializeAws_ec2DisassociateIamInstanceProfileCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an IAM instance profile from a running or stopped instance.</p>
 *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DisassociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateIamInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(DisassociateIamInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateIamInstanceProfileCommand(input) {
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
    DisassociateIamInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateIamInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateIamInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateIamInstanceProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateIamInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateIamInstanceProfileCommand(input, context);
    };
    DisassociateIamInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateIamInstanceProfileCommand(output, context);
    };
    return DisassociateIamInstanceProfileCommand;
}($Command));
export { DisassociateIamInstanceProfileCommand };
//# sourceMappingURL=DisassociateIamInstanceProfileCommand.js.map