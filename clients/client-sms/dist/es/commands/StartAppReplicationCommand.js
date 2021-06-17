import { __extends } from "tslib";
import { StartAppReplicationRequest, StartAppReplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1StartAppReplicationCommand, serializeAws_json1_1StartAppReplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts replicating the specified application by creating replication jobs for each server in the
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StartAppReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StartAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAppReplicationCommand = /** @class */ (function (_super) {
    __extends(StartAppReplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAppReplicationCommand(input) {
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
    StartAppReplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "StartAppReplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAppReplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartAppReplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAppReplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartAppReplicationCommand(input, context);
    };
    StartAppReplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartAppReplicationCommand(output, context);
    };
    return StartAppReplicationCommand;
}($Command));
export { StartAppReplicationCommand };
//# sourceMappingURL=StartAppReplicationCommand.js.map