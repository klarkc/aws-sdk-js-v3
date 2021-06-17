import { __extends } from "tslib";
import { DescribeLocalGatewayRouteTableVpcAssociationsRequest, DescribeLocalGatewayRouteTableVpcAssociationsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand, serializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified associations between VPCs and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocalGatewayRouteTableVpcAssociationsCommand = /** @class */ (function (_super) {
    __extends(DescribeLocalGatewayRouteTableVpcAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocalGatewayRouteTableVpcAssociationsCommand(input) {
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
    DescribeLocalGatewayRouteTableVpcAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeLocalGatewayRouteTableVpcAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLocalGatewayRouteTableVpcAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLocalGatewayRouteTableVpcAssociationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocalGatewayRouteTableVpcAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand(input, context);
    };
    DescribeLocalGatewayRouteTableVpcAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand(output, context);
    };
    return DescribeLocalGatewayRouteTableVpcAssociationsCommand;
}($Command));
export { DescribeLocalGatewayRouteTableVpcAssociationsCommand };
//# sourceMappingURL=DescribeLocalGatewayRouteTableVpcAssociationsCommand.js.map