import { __extends } from "tslib";
import { ReplaceIamInstanceProfileAssociationRequest, ReplaceIamInstanceProfileAssociationResult, } from "../models/models_4";
import { deserializeAws_ec2ReplaceIamInstanceProfileAssociationCommand, serializeAws_ec2ReplaceIamInstanceProfileAssociationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces an IAM instance profile for the specified running instance. You can use
 *             this action to change the IAM instance profile that's associated with an instance
 *             without having to disassociate the existing IAM instance profile first.</p>
 *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceIamInstanceProfileAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceIamInstanceProfileAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceIamInstanceProfileAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceIamInstanceProfileAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceIamInstanceProfileAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReplaceIamInstanceProfileAssociationCommand = /** @class */ (function (_super) {
    __extends(ReplaceIamInstanceProfileAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReplaceIamInstanceProfileAssociationCommand(input) {
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
    ReplaceIamInstanceProfileAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReplaceIamInstanceProfileAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReplaceIamInstanceProfileAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReplaceIamInstanceProfileAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReplaceIamInstanceProfileAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReplaceIamInstanceProfileAssociationCommand(input, context);
    };
    ReplaceIamInstanceProfileAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReplaceIamInstanceProfileAssociationCommand(output, context);
    };
    return ReplaceIamInstanceProfileAssociationCommand;
}($Command));
export { ReplaceIamInstanceProfileAssociationCommand };
//# sourceMappingURL=ReplaceIamInstanceProfileAssociationCommand.js.map