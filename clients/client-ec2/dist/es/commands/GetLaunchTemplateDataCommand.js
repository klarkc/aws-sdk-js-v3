import { __extends } from "tslib";
import { GetLaunchTemplateDataRequest, GetLaunchTemplateDataResult } from "../models/models_4";
import { deserializeAws_ec2GetLaunchTemplateDataCommand, serializeAws_ec2GetLaunchTemplateDataCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the configuration data of the specified instance. You can use this data
 *             to create a launch template. </p>
 *         <p>This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following
 *             actions in your IAM policy: DescribeSpotInstanceRequests, DescribeInstanceCreditSpecifications, DescribeVolumes, DescribeInstanceAttribute, and DescribeElasticGpus. Or, you can allow
 *         <code>describe*</code> depending on your instance requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetLaunchTemplateDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetLaunchTemplateDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetLaunchTemplateDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchTemplateDataCommandInput} for command's `input` shape.
 * @see {@link GetLaunchTemplateDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLaunchTemplateDataCommand = /** @class */ (function (_super) {
    __extends(GetLaunchTemplateDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLaunchTemplateDataCommand(input) {
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
    GetLaunchTemplateDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetLaunchTemplateDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLaunchTemplateDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLaunchTemplateDataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLaunchTemplateDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetLaunchTemplateDataCommand(input, context);
    };
    GetLaunchTemplateDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetLaunchTemplateDataCommand(output, context);
    };
    return GetLaunchTemplateDataCommand;
}($Command));
export { GetLaunchTemplateDataCommand };
//# sourceMappingURL=GetLaunchTemplateDataCommand.js.map