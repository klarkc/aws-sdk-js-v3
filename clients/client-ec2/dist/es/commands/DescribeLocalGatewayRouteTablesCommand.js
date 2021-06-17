import { __extends } from "tslib";
import { DescribeLocalGatewayRouteTablesRequest, DescribeLocalGatewayRouteTablesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeLocalGatewayRouteTablesCommand, serializeAws_ec2DescribeLocalGatewayRouteTablesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more local gateway route tables. By default, all local gateway route tables are described.
 *          Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTablesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTablesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayRouteTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayRouteTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTablesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocalGatewayRouteTablesCommand = /** @class */ (function (_super) {
    __extends(DescribeLocalGatewayRouteTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocalGatewayRouteTablesCommand(input) {
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
    DescribeLocalGatewayRouteTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLocalGatewayRouteTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocalGatewayRouteTablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocalGatewayRouteTablesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocalGatewayRouteTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLocalGatewayRouteTablesCommand(input, context);
    };
    DescribeLocalGatewayRouteTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLocalGatewayRouteTablesCommand(output, context);
    };
    return DescribeLocalGatewayRouteTablesCommand;
}($Command));
export { DescribeLocalGatewayRouteTablesCommand };
//# sourceMappingURL=DescribeLocalGatewayRouteTablesCommand.js.map