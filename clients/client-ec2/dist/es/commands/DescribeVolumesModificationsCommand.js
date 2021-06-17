import { __extends } from "tslib";
import { DescribeVolumesModificationsRequest, DescribeVolumesModificationsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVolumesModificationsCommand, serializeAws_ec2DescribeVolumesModificationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the most recent volume modification request for the specified EBS volumes.</p>
 *          <p>If a volume has never been modified, some information in the output will be null.
 *       If a volume has been modified more than once, the output includes only the most
 *       recent modification request.</p>
 *          <p>You can also use CloudWatch Events to check the status of a modification to an EBS
 *       volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#monitoring_mods">Monitoring volume modifications</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumesModificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumesModificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVolumesModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumesModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesModificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVolumesModificationsCommand = /** @class */ (function (_super) {
    __extends(DescribeVolumesModificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVolumesModificationsCommand(input) {
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
    DescribeVolumesModificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVolumesModificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVolumesModificationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVolumesModificationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVolumesModificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVolumesModificationsCommand(input, context);
    };
    DescribeVolumesModificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVolumesModificationsCommand(output, context);
    };
    return DescribeVolumesModificationsCommand;
}($Command));
export { DescribeVolumesModificationsCommand };
//# sourceMappingURL=DescribeVolumesModificationsCommand.js.map