import { __extends } from "tslib";
import { DescribeInstanceTypesRequest, DescribeInstanceTypesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeInstanceTypesCommand, serializeAws_ec2DescribeInstanceTypesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the details of the instance types that are offered in a location. The results can be filtered by the
 *    attributes of the instance types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTypesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTypesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceTypesCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceTypesCommand(input) {
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
    DescribeInstanceTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInstanceTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInstanceTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInstanceTypesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInstanceTypesCommand(input, context);
    };
    DescribeInstanceTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInstanceTypesCommand(output, context);
    };
    return DescribeInstanceTypesCommand;
}($Command));
export { DescribeInstanceTypesCommand };
//# sourceMappingURL=DescribeInstanceTypesCommand.js.map