import { __extends } from "tslib";
import { DescribeMovingAddressesRequest, DescribeMovingAddressesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeMovingAddressesCommand, serializeAws_ec2DescribeMovingAddressesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes your Elastic IP addresses that are being moved to the EC2-VPC platform, or that are being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMovingAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMovingAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMovingAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeMovingAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMovingAddressesCommand = /** @class */ (function (_super) {
    __extends(DescribeMovingAddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMovingAddressesCommand(input) {
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
    DescribeMovingAddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeMovingAddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMovingAddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMovingAddressesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMovingAddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeMovingAddressesCommand(input, context);
    };
    DescribeMovingAddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeMovingAddressesCommand(output, context);
    };
    return DescribeMovingAddressesCommand;
}($Command));
export { DescribeMovingAddressesCommand };
//# sourceMappingURL=DescribeMovingAddressesCommand.js.map