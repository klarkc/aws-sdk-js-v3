import { __extends } from "tslib";
import { DeleteLocalGatewayRouteTableVpcAssociationRequest, DeleteLocalGatewayRouteTableVpcAssociationResult, } from "../models/models_2";
import { deserializeAws_ec2DeleteLocalGatewayRouteTableVpcAssociationCommand, serializeAws_ec2DeleteLocalGatewayRouteTableVpcAssociationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified association between a VPC and local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteTableVpcAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLocalGatewayRouteTableVpcAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteTableVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLocalGatewayRouteTableVpcAssociationCommand = /** @class */ (function (_super) {
    __extends(DeleteLocalGatewayRouteTableVpcAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLocalGatewayRouteTableVpcAssociationCommand(input) {
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
    DeleteLocalGatewayRouteTableVpcAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteLocalGatewayRouteTableVpcAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLocalGatewayRouteTableVpcAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLocalGatewayRouteTableVpcAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLocalGatewayRouteTableVpcAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteLocalGatewayRouteTableVpcAssociationCommand(input, context);
    };
    DeleteLocalGatewayRouteTableVpcAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteLocalGatewayRouteTableVpcAssociationCommand(output, context);
    };
    return DeleteLocalGatewayRouteTableVpcAssociationCommand;
}($Command));
export { DeleteLocalGatewayRouteTableVpcAssociationCommand };
//# sourceMappingURL=DeleteLocalGatewayRouteTableVpcAssociationCommand.js.map