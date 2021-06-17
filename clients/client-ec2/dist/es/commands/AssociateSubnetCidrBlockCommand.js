import { __extends } from "tslib";
import { AssociateSubnetCidrBlockRequest, AssociateSubnetCidrBlockResult } from "../models/models_0";
import { deserializeAws_ec2AssociateSubnetCidrBlockCommand, serializeAws_ec2AssociateSubnetCidrBlockCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR
 *             block with your subnet. An IPv6 CIDR block must have a prefix length of /64.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateSubnetCidrBlockCommand = /** @class */ (function (_super) {
    __extends(AssociateSubnetCidrBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateSubnetCidrBlockCommand(input) {
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
    AssociateSubnetCidrBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateSubnetCidrBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateSubnetCidrBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateSubnetCidrBlockResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateSubnetCidrBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateSubnetCidrBlockCommand(input, context);
    };
    AssociateSubnetCidrBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateSubnetCidrBlockCommand(output, context);
    };
    return AssociateSubnetCidrBlockCommand;
}($Command));
export { AssociateSubnetCidrBlockCommand };
//# sourceMappingURL=AssociateSubnetCidrBlockCommand.js.map