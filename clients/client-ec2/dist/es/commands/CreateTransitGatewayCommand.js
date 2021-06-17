import { __extends } from "tslib";
import { CreateTransitGatewayRequest, CreateTransitGatewayResult } from "../models/models_1";
import { deserializeAws_ec2CreateTransitGatewayCommand, serializeAws_ec2CreateTransitGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a transit gateway.</p>
 *          <p>You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks.
 *           After the transit gateway enters the <code>available</code> state, you can attach your VPCs and VPN
 *           connections to the transit gateway.</p>
 *          <p>To attach your VPCs, use <a>CreateTransitGatewayVpcAttachment</a>.</p>
 *          <p>To attach a VPN connection, use <a>CreateCustomerGateway</a> to create a customer
 *          gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to
 *          <a>CreateVpnConnection</a>.</p>
 *          <p>When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table
 *          and the default propagation route table. You can use <a>CreateTransitGatewayRouteTable</a> to create
 *          additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table.
 *          You can use <a>EnableTransitGatewayRouteTablePropagation</a> to propagate routes from a resource
 *          attachment to a transit gateway route table. If you disable automatic associations, you can use <a>AssociateTransitGatewayRouteTable</a> to associate a resource attachment with a transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransitGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransitGatewayCommand(input) {
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
    CreateTransitGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateTransitGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransitGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransitGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransitGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateTransitGatewayCommand(input, context);
    };
    CreateTransitGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateTransitGatewayCommand(output, context);
    };
    return CreateTransitGatewayCommand;
}($Command));
export { CreateTransitGatewayCommand };
//# sourceMappingURL=CreateTransitGatewayCommand.js.map