import { __extends } from "tslib";
import { DetachClassicLinkVpcRequest, DetachClassicLinkVpcResult } from "../models/models_3";
import { deserializeAws_ec2DetachClassicLinkVpcCommand, serializeAws_ec2DetachClassicLinkVpcCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link DetachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachClassicLinkVpcCommand = /** @class */ (function (_super) {
    __extends(DetachClassicLinkVpcCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachClassicLinkVpcCommand(input) {
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
    DetachClassicLinkVpcCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DetachClassicLinkVpcCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachClassicLinkVpcRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachClassicLinkVpcResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachClassicLinkVpcCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DetachClassicLinkVpcCommand(input, context);
    };
    DetachClassicLinkVpcCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DetachClassicLinkVpcCommand(output, context);
    };
    return DetachClassicLinkVpcCommand;
}($Command));
export { DetachClassicLinkVpcCommand };
//# sourceMappingURL=DetachClassicLinkVpcCommand.js.map