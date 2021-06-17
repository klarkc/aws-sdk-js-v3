import { __extends } from "tslib";
import { DisableVpcClassicLinkRequest, DisableVpcClassicLinkResult } from "../models/models_4";
import { deserializeAws_ec2DisableVpcClassicLinkCommand, serializeAws_ec2DisableVpcClassicLinkCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link DisableVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableVpcClassicLinkCommand = /** @class */ (function (_super) {
    __extends(DisableVpcClassicLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableVpcClassicLinkCommand(input) {
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
    DisableVpcClassicLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisableVpcClassicLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableVpcClassicLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableVpcClassicLinkResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableVpcClassicLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisableVpcClassicLinkCommand(input, context);
    };
    DisableVpcClassicLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisableVpcClassicLinkCommand(output, context);
    };
    return DisableVpcClassicLinkCommand;
}($Command));
export { DisableVpcClassicLinkCommand };
//# sourceMappingURL=DisableVpcClassicLinkCommand.js.map