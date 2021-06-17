import { __extends } from "tslib";
import { AttachClassicLinkVpcRequest, AttachClassicLinkVpcResult } from "../models/models_0";
import { deserializeAws_ec2AttachClassicLinkVpcCommand, serializeAws_ec2AttachClassicLinkVpcCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's
 * 			security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You
 * 			can only link an instance that's in the <code>running</code> state. An instance is
 * 			automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when
 * 			you restart it.</p>
 * 		       <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p>
 * 		       <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link AttachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachClassicLinkVpcCommand = /** @class */ (function (_super) {
    __extends(AttachClassicLinkVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachClassicLinkVpcCommand(input) {
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
    AttachClassicLinkVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AttachClassicLinkVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachClassicLinkVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachClassicLinkVpcResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachClassicLinkVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AttachClassicLinkVpcCommand(input, context);
    };
    AttachClassicLinkVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AttachClassicLinkVpcCommand(output, context);
    };
    return AttachClassicLinkVpcCommand;
}($Command));
export { AttachClassicLinkVpcCommand };
//# sourceMappingURL=AttachClassicLinkVpcCommand.js.map