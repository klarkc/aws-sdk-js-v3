import { __extends } from "tslib";
import { UpdateInstanceStorageConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateInstanceStorageConfigCommand, serializeAws_restJson1UpdateInstanceStorageConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates an existing configuration for a resource type. This API is idempotent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInstanceStorageConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateInstanceStorageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInstanceStorageConfigCommand(input) {
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
    UpdateInstanceStorageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateInstanceStorageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInstanceStorageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInstanceStorageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateInstanceStorageConfigCommand(input, context);
    };
    UpdateInstanceStorageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateInstanceStorageConfigCommand(output, context);
    };
    return UpdateInstanceStorageConfigCommand;
}($Command));
export { UpdateInstanceStorageConfigCommand };
//# sourceMappingURL=UpdateInstanceStorageConfigCommand.js.map