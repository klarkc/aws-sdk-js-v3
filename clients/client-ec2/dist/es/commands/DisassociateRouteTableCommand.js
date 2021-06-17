import { __extends } from "tslib";
import { DisassociateRouteTableRequest } from "../models/models_4";
import { deserializeAws_ec2DisassociateRouteTableCommand, serializeAws_ec2DisassociateRouteTableCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a subnet or gateway from a route table.</p>
 * 		       <p>After you perform this action, the subnet no longer uses the routes in the route table.
 * 				Instead, it uses the routes in the VPC's main route table. For more information
 * 				about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 * 				Tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateRouteTableCommand = /** @class */ (function (_super) {
    __extends(DisassociateRouteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateRouteTableCommand(input) {
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
    DisassociateRouteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateRouteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateRouteTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateRouteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateRouteTableCommand(input, context);
    };
    DisassociateRouteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateRouteTableCommand(output, context);
    };
    return DisassociateRouteTableCommand;
}($Command));
export { DisassociateRouteTableCommand };
//# sourceMappingURL=DisassociateRouteTableCommand.js.map