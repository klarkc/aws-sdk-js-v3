import { __extends } from "tslib";
import { DeleteClientVpnRouteRequest, DeleteClientVpnRouteResult } from "../models/models_1";
import { deserializeAws_ec2DeleteClientVpnRouteCommand, serializeAws_ec2DeleteClientVpnRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using
 * 			the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were
 * 			automatically added when associating a subnet. To remove routes that have been automatically added,
 * 			disassociate the target subnet from the Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClientVpnRouteCommand = /** @class */ (function (_super) {
    __extends(DeleteClientVpnRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClientVpnRouteCommand(input) {
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
    DeleteClientVpnRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteClientVpnRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClientVpnRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClientVpnRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClientVpnRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteClientVpnRouteCommand(input, context);
    };
    DeleteClientVpnRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteClientVpnRouteCommand(output, context);
    };
    return DeleteClientVpnRouteCommand;
}($Command));
export { DeleteClientVpnRouteCommand };
//# sourceMappingURL=DeleteClientVpnRouteCommand.js.map