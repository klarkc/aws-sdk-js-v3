import { __extends } from "tslib";
import { DeleteRouteRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteRouteCommand, serializeAws_ec2DeleteRouteCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified route from the specified route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRouteCommand = /** @class */ (function (_super) {
    __extends(DeleteRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRouteCommand(input) {
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
    DeleteRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteRouteCommand(input, context);
    };
    DeleteRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteRouteCommand(output, context);
    };
    return DeleteRouteCommand;
}($Command));
export { DeleteRouteCommand };
//# sourceMappingURL=DeleteRouteCommand.js.map