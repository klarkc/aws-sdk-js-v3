import { __extends } from "tslib";
import { DescribeCoipPoolsRequest, DescribeCoipPoolsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeCoipPoolsCommand, serializeAws_ec2DescribeCoipPoolsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified customer-owned address pools or all of your customer-owned address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCoipPoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCoipPoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeCoipPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCoipPoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeCoipPoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCoipPoolsCommand = /** @class */ (function (_super) {
    __extends(DescribeCoipPoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCoipPoolsCommand(input) {
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
    DescribeCoipPoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeCoipPoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCoipPoolsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCoipPoolsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCoipPoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeCoipPoolsCommand(input, context);
    };
    DescribeCoipPoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeCoipPoolsCommand(output, context);
    };
    return DescribeCoipPoolsCommand;
}($Command));
export { DescribeCoipPoolsCommand };
//# sourceMappingURL=DescribeCoipPoolsCommand.js.map