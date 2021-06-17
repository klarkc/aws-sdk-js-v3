import { __extends } from "tslib";
import { DeleteNetworkInsightsPathRequest, DeleteNetworkInsightsPathResult } from "../models/models_2";
import { deserializeAws_ec2DeleteNetworkInsightsPathCommand, serializeAws_ec2DeleteNetworkInsightsPathCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsPathCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsPathCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInsightsPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInsightsPathCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsPathCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNetworkInsightsPathCommand = /** @class */ (function (_super) {
    __extends(DeleteNetworkInsightsPathCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNetworkInsightsPathCommand(input) {
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
    DeleteNetworkInsightsPathCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteNetworkInsightsPathCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNetworkInsightsPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNetworkInsightsPathResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNetworkInsightsPathCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteNetworkInsightsPathCommand(input, context);
    };
    DeleteNetworkInsightsPathCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteNetworkInsightsPathCommand(output, context);
    };
    return DeleteNetworkInsightsPathCommand;
}($Command));
export { DeleteNetworkInsightsPathCommand };
//# sourceMappingURL=DeleteNetworkInsightsPathCommand.js.map