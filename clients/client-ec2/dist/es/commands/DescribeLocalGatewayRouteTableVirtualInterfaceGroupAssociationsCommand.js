import { __extends } from "tslib";
import { DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand, serializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the associations between virtual interface groups and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand = /** @class */ (function (_super) {
    __extends(DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(input) {
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
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(input, context);
    };
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand(output, context);
    };
    return DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand;
}($Command));
export { DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand };
//# sourceMappingURL=DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand.js.map