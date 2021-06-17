import { __extends } from "tslib";
import { StartChangeRequestExecutionRequest, StartChangeRequestExecutionResult } from "../models/models_1";
import { deserializeAws_json1_1StartChangeRequestExecutionCommand, serializeAws_json1_1StartChangeRequestExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a change request for Change Manager. The runbooks (Automation documents) specified in the
 *    change request run only after all required approvals for the change request have been
 *    received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartChangeRequestExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartChangeRequestExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartChangeRequestExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChangeRequestExecutionCommandInput} for command's `input` shape.
 * @see {@link StartChangeRequestExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartChangeRequestExecutionCommand = /** @class */ (function (_super) {
    __extends(StartChangeRequestExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartChangeRequestExecutionCommand(input) {
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
    StartChangeRequestExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "StartChangeRequestExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartChangeRequestExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartChangeRequestExecutionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartChangeRequestExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartChangeRequestExecutionCommand(input, context);
    };
    StartChangeRequestExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartChangeRequestExecutionCommand(output, context);
    };
    return StartChangeRequestExecutionCommand;
}($Command));
export { StartChangeRequestExecutionCommand };
//# sourceMappingURL=StartChangeRequestExecutionCommand.js.map