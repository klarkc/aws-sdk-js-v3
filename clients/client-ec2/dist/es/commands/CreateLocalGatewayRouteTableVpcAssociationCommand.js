import { __extends } from "tslib";
import { CreateLocalGatewayRouteTableVpcAssociationRequest, CreateLocalGatewayRouteTableVpcAssociationResult, } from "../models/models_1";
import { deserializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand, serializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified VPC with the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayRouteTableVpcAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayRouteTableVpcAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLocalGatewayRouteTableVpcAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocalGatewayRouteTableVpcAssociationCommand = /** @class */ (function (_super) {
    __extends(CreateLocalGatewayRouteTableVpcAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocalGatewayRouteTableVpcAssociationCommand(input) {
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
    CreateLocalGatewayRouteTableVpcAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateLocalGatewayRouteTableVpcAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocalGatewayRouteTableVpcAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocalGatewayRouteTableVpcAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocalGatewayRouteTableVpcAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand(input, context);
    };
    CreateLocalGatewayRouteTableVpcAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand(output, context);
    };
    return CreateLocalGatewayRouteTableVpcAssociationCommand;
}($Command));
export { CreateLocalGatewayRouteTableVpcAssociationCommand };
//# sourceMappingURL=CreateLocalGatewayRouteTableVpcAssociationCommand.js.map