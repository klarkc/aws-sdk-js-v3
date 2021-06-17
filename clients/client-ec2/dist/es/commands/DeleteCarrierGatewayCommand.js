import { __extends } from "tslib";
import { DeleteCarrierGatewayRequest, DeleteCarrierGatewayResult } from "../models/models_1";
import { deserializeAws_ec2DeleteCarrierGatewayCommand, serializeAws_ec2DeleteCarrierGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a carrier gateway.</p>
 *         <important>
 *             <p>If you do not delete the route that contains the carrier gateway as the
 *                 Target, the route is a blackhole route. For information about how to delete a route, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCarrierGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteCarrierGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCarrierGatewayCommand(input) {
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
    DeleteCarrierGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteCarrierGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCarrierGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCarrierGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCarrierGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteCarrierGatewayCommand(input, context);
    };
    DeleteCarrierGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteCarrierGatewayCommand(output, context);
    };
    return DeleteCarrierGatewayCommand;
}($Command));
export { DeleteCarrierGatewayCommand };
//# sourceMappingURL=DeleteCarrierGatewayCommand.js.map