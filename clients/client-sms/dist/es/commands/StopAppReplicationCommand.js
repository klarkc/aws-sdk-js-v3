import { __extends } from "tslib";
import { StopAppReplicationRequest, StopAppReplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1StopAppReplicationCommand, serializeAws_json1_1StopAppReplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops replicating the specified application by deleting the replication job for each server in
 *             the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StopAppReplicationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StopAppReplicationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StopAppReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAppReplicationCommandInput} for command's `input` shape.
 * @see {@link StopAppReplicationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopAppReplicationCommand = /** @class */ (function (_super) {
    __extends(StopAppReplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopAppReplicationCommand(input) {
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
    StopAppReplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "StopAppReplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopAppReplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopAppReplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopAppReplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopAppReplicationCommand(input, context);
    };
    StopAppReplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopAppReplicationCommand(output, context);
    };
    return StopAppReplicationCommand;
}($Command));
export { StopAppReplicationCommand };
//# sourceMappingURL=StopAppReplicationCommand.js.map