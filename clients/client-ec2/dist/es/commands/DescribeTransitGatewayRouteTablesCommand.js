import { __extends } from "tslib";
import { DescribeTransitGatewayRouteTablesRequest, DescribeTransitGatewayRouteTablesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeTransitGatewayRouteTablesCommand, serializeAws_ec2DescribeTransitGatewayRouteTablesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more transit gateway route tables. By default, all transit gateway route tables are described.
 *          Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayRouteTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayRouteTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewayRouteTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewayRouteTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayRouteTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransitGatewayRouteTablesCommand = /** @class */ (function (_super) {
    __extends(DescribeTransitGatewayRouteTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransitGatewayRouteTablesCommand(input) {
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
    DescribeTransitGatewayRouteTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTransitGatewayRouteTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransitGatewayRouteTablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransitGatewayRouteTablesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransitGatewayRouteTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTransitGatewayRouteTablesCommand(input, context);
    };
    DescribeTransitGatewayRouteTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTransitGatewayRouteTablesCommand(output, context);
    };
    return DescribeTransitGatewayRouteTablesCommand;
}($Command));
export { DescribeTransitGatewayRouteTablesCommand };
//# sourceMappingURL=DescribeTransitGatewayRouteTablesCommand.js.map