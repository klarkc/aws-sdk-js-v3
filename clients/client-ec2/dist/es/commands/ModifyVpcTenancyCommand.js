import { __extends } from "tslib";
import { ModifyVpcTenancyRequest, ModifyVpcTenancyResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVpcTenancyCommand, serializeAws_ec2ModifyVpcTenancyCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the
 *             instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the
 *             instance tenancy attribute to <code>dedicated</code>.</p>
 *         <p>After you modify the tenancy of the VPC, any new instances that you launch into the
 *             VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch.
 *             The tenancy of any existing instances in the VPC is not affected.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcTenancyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcTenancyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcTenancyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcTenancyCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcTenancyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpcTenancyCommand = /** @class */ (function (_super) {
    __extends(ModifyVpcTenancyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpcTenancyCommand(input) {
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
    ModifyVpcTenancyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpcTenancyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpcTenancyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpcTenancyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpcTenancyCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpcTenancyCommand(input, context);
    };
    ModifyVpcTenancyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpcTenancyCommand(output, context);
    };
    return ModifyVpcTenancyCommand;
}($Command));
export { ModifyVpcTenancyCommand };
//# sourceMappingURL=ModifyVpcTenancyCommand.js.map