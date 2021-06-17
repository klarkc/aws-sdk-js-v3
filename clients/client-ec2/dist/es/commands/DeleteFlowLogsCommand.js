import { __extends } from "tslib";
import { DeleteFlowLogsRequest, DeleteFlowLogsResult } from "../models/models_1";
import { deserializeAws_ec2DeleteFlowLogsCommand, serializeAws_ec2DeleteFlowLogsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more flow logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteFlowLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowLogsCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFlowLogsCommand = /** @class */ (function (_super) {
    __extends(DeleteFlowLogsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFlowLogsCommand(input) {
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
    DeleteFlowLogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteFlowLogsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFlowLogsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFlowLogsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFlowLogsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteFlowLogsCommand(input, context);
    };
    DeleteFlowLogsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteFlowLogsCommand(output, context);
    };
    return DeleteFlowLogsCommand;
}($Command));
export { DeleteFlowLogsCommand };
//# sourceMappingURL=DeleteFlowLogsCommand.js.map