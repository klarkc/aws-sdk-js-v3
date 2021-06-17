import { __extends } from "tslib";
import { GetReplicationConfigurationRequest, ReplicationConfiguration } from "../models/models_0";
import { deserializeAws_restJson1GetReplicationConfigurationCommand, serializeAws_restJson1GetReplicationConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all ReplicationConfigurations, filtered by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetReplicationConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetReplicationConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new GetReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReplicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetReplicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReplicationConfigurationCommand(input) {
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
    GetReplicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "GetReplicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReplicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReplicationConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReplicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetReplicationConfigurationCommand(input, context);
    };
    GetReplicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetReplicationConfigurationCommand(output, context);
    };
    return GetReplicationConfigurationCommand;
}($Command));
export { GetReplicationConfigurationCommand };
//# sourceMappingURL=GetReplicationConfigurationCommand.js.map