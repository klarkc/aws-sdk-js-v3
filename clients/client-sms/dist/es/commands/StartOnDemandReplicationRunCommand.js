import { __extends } from "tslib";
import { StartOnDemandReplicationRunRequest, StartOnDemandReplicationRunResponse } from "../models/models_0";
import { deserializeAws_json1_1StartOnDemandReplicationRunCommand, serializeAws_json1_1StartOnDemandReplicationRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an on-demand replication run for the specified replication job. This
 *             replication run starts immediately. This replication run is in addition to the ones
 *             already scheduled.</p>
 *         <p>There is a limit on the number of on-demand replications runs that you can request
 *             in a 24-hour period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartOnDemandReplicationRunCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartOnDemandReplicationRunCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StartOnDemandReplicationRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOnDemandReplicationRunCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandReplicationRunCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartOnDemandReplicationRunCommand = /** @class */ (function (_super) {
    __extends(StartOnDemandReplicationRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartOnDemandReplicationRunCommand(input) {
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
    StartOnDemandReplicationRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "StartOnDemandReplicationRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartOnDemandReplicationRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartOnDemandReplicationRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartOnDemandReplicationRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartOnDemandReplicationRunCommand(input, context);
    };
    StartOnDemandReplicationRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartOnDemandReplicationRunCommand(output, context);
    };
    return StartOnDemandReplicationRunCommand;
}($Command));
export { StartOnDemandReplicationRunCommand };
//# sourceMappingURL=StartOnDemandReplicationRunCommand.js.map