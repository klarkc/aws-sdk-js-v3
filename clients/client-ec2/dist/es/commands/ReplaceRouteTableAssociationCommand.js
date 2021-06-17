import { __extends } from "tslib";
import { ReplaceRouteTableAssociationRequest, ReplaceRouteTableAssociationResult } from "../models/models_5";
import { deserializeAws_ec2ReplaceRouteTableAssociationCommand, serializeAws_ec2ReplaceRouteTableAssociationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation
 *       completes, the subnet or gateway uses the routes in the new route table. For more
 *       information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 *         Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceRouteTableAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceRouteTableAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceRouteTableAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceRouteTableAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceRouteTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReplaceRouteTableAssociationCommand = /** @class */ (function (_super) {
    __extends(ReplaceRouteTableAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReplaceRouteTableAssociationCommand(input) {
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
    ReplaceRouteTableAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReplaceRouteTableAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReplaceRouteTableAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReplaceRouteTableAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReplaceRouteTableAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReplaceRouteTableAssociationCommand(input, context);
    };
    ReplaceRouteTableAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReplaceRouteTableAssociationCommand(output, context);
    };
    return ReplaceRouteTableAssociationCommand;
}($Command));
export { ReplaceRouteTableAssociationCommand };
//# sourceMappingURL=ReplaceRouteTableAssociationCommand.js.map