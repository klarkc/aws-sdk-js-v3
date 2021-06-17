import { __extends } from "tslib";
import { GetAppReplicationConfigurationRequest, GetAppReplicationConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAppReplicationConfigurationCommand, serializeAws_json1_1GetAppReplicationConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the application replication configuration associated with the specified
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppReplicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetAppReplicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAppReplicationConfigurationCommand(input) {
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
    GetAppReplicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GetAppReplicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAppReplicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAppReplicationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAppReplicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAppReplicationConfigurationCommand(input, context);
    };
    GetAppReplicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAppReplicationConfigurationCommand(output, context);
    };
    return GetAppReplicationConfigurationCommand;
}($Command));
export { GetAppReplicationConfigurationCommand };
//# sourceMappingURL=GetAppReplicationConfigurationCommand.js.map