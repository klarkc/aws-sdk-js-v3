import { __extends } from "tslib";
import { DeleteLocalGatewayRouteRequest, DeleteLocalGatewayRouteResult } from "../models/models_1";
import { deserializeAws_ec2DeleteLocalGatewayRouteCommand, serializeAws_ec2DeleteLocalGatewayRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified route from the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLocalGatewayRouteCommand = /** @class */ (function (_super) {
    __extends(DeleteLocalGatewayRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLocalGatewayRouteCommand(input) {
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
    DeleteLocalGatewayRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteLocalGatewayRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLocalGatewayRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLocalGatewayRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLocalGatewayRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteLocalGatewayRouteCommand(input, context);
    };
    DeleteLocalGatewayRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteLocalGatewayRouteCommand(output, context);
    };
    return DeleteLocalGatewayRouteCommand;
}($Command));
export { DeleteLocalGatewayRouteCommand };
//# sourceMappingURL=DeleteLocalGatewayRouteCommand.js.map