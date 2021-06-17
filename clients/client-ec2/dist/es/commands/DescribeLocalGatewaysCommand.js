import { __extends } from "tslib";
import { DescribeLocalGatewaysRequest, DescribeLocalGatewaysResult } from "../models/models_3";
import { deserializeAws_ec2DescribeLocalGatewaysCommand, serializeAws_ec2DescribeLocalGatewaysCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more local gateways. By default, all local gateways are described.
 *         Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocalGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeLocalGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocalGatewaysCommand(input) {
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
    DescribeLocalGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLocalGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocalGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocalGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocalGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLocalGatewaysCommand(input, context);
    };
    DescribeLocalGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLocalGatewaysCommand(output, context);
    };
    return DescribeLocalGatewaysCommand;
}($Command));
export { DescribeLocalGatewaysCommand };
//# sourceMappingURL=DescribeLocalGatewaysCommand.js.map