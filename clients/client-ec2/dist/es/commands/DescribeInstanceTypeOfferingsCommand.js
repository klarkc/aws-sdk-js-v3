import { __extends } from "tslib";
import { DescribeInstanceTypeOfferingsRequest } from "../models/models_2";
import { DescribeInstanceTypeOfferingsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeInstanceTypeOfferingsCommand, serializeAws_ec2DescribeInstanceTypeOfferingsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all instance types offered. The results can be filtered by location (Region or Availability
 *    Zone). If no location is specified, the instance types offered in the current Region are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTypeOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTypeOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceTypeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypeOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceTypeOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceTypeOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceTypeOfferingsCommand(input) {
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
    DescribeInstanceTypeOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInstanceTypeOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceTypeOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceTypeOfferingsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceTypeOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInstanceTypeOfferingsCommand(input, context);
    };
    DescribeInstanceTypeOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInstanceTypeOfferingsCommand(output, context);
    };
    return DescribeInstanceTypeOfferingsCommand;
}($Command));
export { DescribeInstanceTypeOfferingsCommand };
//# sourceMappingURL=DescribeInstanceTypeOfferingsCommand.js.map