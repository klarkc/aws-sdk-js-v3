import { __extends } from "tslib";
import { PutAppReplicationConfigurationRequest, PutAppReplicationConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1PutAppReplicationConfigurationCommand, serializeAws_json1_1PutAppReplicationConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates the replication configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new PutAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAppReplicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutAppReplicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAppReplicationConfigurationCommand(input) {
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
    PutAppReplicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "PutAppReplicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAppReplicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAppReplicationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAppReplicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAppReplicationConfigurationCommand(input, context);
    };
    PutAppReplicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAppReplicationConfigurationCommand(output, context);
    };
    return PutAppReplicationConfigurationCommand;
}($Command));
export { PutAppReplicationConfigurationCommand };
//# sourceMappingURL=PutAppReplicationConfigurationCommand.js.map