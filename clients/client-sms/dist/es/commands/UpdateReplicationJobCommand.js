import { __extends } from "tslib";
import { UpdateReplicationJobRequest, UpdateReplicationJobResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateReplicationJobCommand, serializeAws_json1_1UpdateReplicationJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified settings for the specified replication job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, UpdateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, UpdateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new UpdateReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateReplicationJobCommand = /** @class */ (function (_super) {
    __extends(UpdateReplicationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateReplicationJobCommand(input) {
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
    UpdateReplicationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "UpdateReplicationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateReplicationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateReplicationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateReplicationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateReplicationJobCommand(input, context);
    };
    UpdateReplicationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateReplicationJobCommand(output, context);
    };
    return UpdateReplicationJobCommand;
}($Command));
export { UpdateReplicationJobCommand };
//# sourceMappingURL=UpdateReplicationJobCommand.js.map