import { __extends } from "tslib";
import { DescribeSecurityGroupReferencesRequest, DescribeSecurityGroupReferencesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSecurityGroupReferencesCommand, serializeAws_ec2DescribeSecurityGroupReferencesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>[VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSecurityGroupReferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityGroupReferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSecurityGroupReferencesCommand = /** @class */ (function (_super) {
    __extends(DescribeSecurityGroupReferencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSecurityGroupReferencesCommand(input) {
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
    DescribeSecurityGroupReferencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSecurityGroupReferencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSecurityGroupReferencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSecurityGroupReferencesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSecurityGroupReferencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSecurityGroupReferencesCommand(input, context);
    };
    DescribeSecurityGroupReferencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSecurityGroupReferencesCommand(output, context);
    };
    return DescribeSecurityGroupReferencesCommand;
}($Command));
export { DescribeSecurityGroupReferencesCommand };
//# sourceMappingURL=DescribeSecurityGroupReferencesCommand.js.map