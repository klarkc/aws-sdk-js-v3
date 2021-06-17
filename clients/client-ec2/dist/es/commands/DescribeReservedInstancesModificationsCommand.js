import { __extends } from "tslib";
import { DescribeReservedInstancesModificationsRequest, DescribeReservedInstancesModificationsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeReservedInstancesModificationsCommand, serializeAws_ec2DescribeReservedInstancesModificationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesModificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesModificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReservedInstancesModificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedInstancesModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesModificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedInstancesModificationsCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedInstancesModificationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedInstancesModificationsCommand(input) {
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
    DescribeReservedInstancesModificationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeReservedInstancesModificationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedInstancesModificationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReservedInstancesModificationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedInstancesModificationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeReservedInstancesModificationsCommand(input, context);
    };
    DescribeReservedInstancesModificationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeReservedInstancesModificationsCommand(output, context);
    };
    return DescribeReservedInstancesModificationsCommand;
}($Command));
export { DescribeReservedInstancesModificationsCommand };
//# sourceMappingURL=DescribeReservedInstancesModificationsCommand.js.map