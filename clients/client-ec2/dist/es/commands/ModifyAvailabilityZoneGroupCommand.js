import { __extends } from "tslib";
import { ModifyAvailabilityZoneGroupRequest, ModifyAvailabilityZoneGroupResult } from "../models/models_4";
import { deserializeAws_ec2ModifyAvailabilityZoneGroupCommand, serializeAws_ec2ModifyAvailabilityZoneGroupCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your
 *       account.</p>
 *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">
 *   		DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAvailabilityZoneGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAvailabilityZoneGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyAvailabilityZoneGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAvailabilityZoneGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyAvailabilityZoneGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyAvailabilityZoneGroupCommand = /** @class */ (function (_super) {
    __extends(ModifyAvailabilityZoneGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyAvailabilityZoneGroupCommand(input) {
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
    ModifyAvailabilityZoneGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyAvailabilityZoneGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyAvailabilityZoneGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyAvailabilityZoneGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyAvailabilityZoneGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyAvailabilityZoneGroupCommand(input, context);
    };
    ModifyAvailabilityZoneGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyAvailabilityZoneGroupCommand(output, context);
    };
    return ModifyAvailabilityZoneGroupCommand;
}($Command));
export { ModifyAvailabilityZoneGroupCommand };
//# sourceMappingURL=ModifyAvailabilityZoneGroupCommand.js.map