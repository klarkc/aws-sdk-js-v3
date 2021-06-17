import { __extends } from "tslib";
import { StartRemediationExecutionRequest, StartRemediationExecutionResponse } from "../models/models_1";
import { deserializeAws_json1_1StartRemediationExecutionCommand, serializeAws_json1_1StartRemediationExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p>
 * 			      <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartRemediationExecutionCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartRemediationExecutionCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StartRemediationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRemediationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartRemediationExecutionCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartRemediationExecutionCommand = /** @class */ (function (_super) {
    __extends(StartRemediationExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartRemediationExecutionCommand(input) {
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
    StartRemediationExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "StartRemediationExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartRemediationExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartRemediationExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartRemediationExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartRemediationExecutionCommand(input, context);
    };
    StartRemediationExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartRemediationExecutionCommand(output, context);
    };
    return StartRemediationExecutionCommand;
}($Command));
export { StartRemediationExecutionCommand };
//# sourceMappingURL=StartRemediationExecutionCommand.js.map