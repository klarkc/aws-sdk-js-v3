import { __extends } from "tslib";
import { ModifyReservedInstancesRequest, ModifyReservedInstancesResult } from "../models/models_4";
import { deserializeAws_ec2ModifyReservedInstancesCommand, serializeAws_ec2ModifyReservedInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the Availability Zone, instance count, instance type, or network platform
 *             (EC2-Classic or EC2-VPC) of your Reserved Instances. The Reserved Instances to be
 *             modified must be identical, except for Availability Zone, network platform, and instance
 *             type.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved
 * 				Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyReservedInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyReservedInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyReservedInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReservedInstancesCommandInput} for command's `input` shape.
 * @see {@link ModifyReservedInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyReservedInstancesCommand = /** @class */ (function (_super) {
    __extends(ModifyReservedInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyReservedInstancesCommand(input) {
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
    ModifyReservedInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyReservedInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyReservedInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyReservedInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyReservedInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyReservedInstancesCommand(input, context);
    };
    ModifyReservedInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyReservedInstancesCommand(output, context);
    };
    return ModifyReservedInstancesCommand;
}($Command));
export { ModifyReservedInstancesCommand };
//# sourceMappingURL=ModifyReservedInstancesCommand.js.map