import { __extends } from "tslib";
import { DisassociateInstanceStorageConfigRequest } from "../models/models_0";
import { deserializeAws_restJson1DisassociateInstanceStorageConfigCommand, serializeAws_restJson1DisassociateInstanceStorageConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Removes the storage type configurations for the specified resource type and association
 *    ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateInstanceStorageConfigCommand = /** @class */ (function (_super) {
    __extends(DisassociateInstanceStorageConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateInstanceStorageConfigCommand(input) {
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
    DisassociateInstanceStorageConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DisassociateInstanceStorageConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateInstanceStorageConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateInstanceStorageConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateInstanceStorageConfigCommand(input, context);
    };
    DisassociateInstanceStorageConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateInstanceStorageConfigCommand(output, context);
    };
    return DisassociateInstanceStorageConfigCommand;
}($Command));
export { DisassociateInstanceStorageConfigCommand };
//# sourceMappingURL=DisassociateInstanceStorageConfigCommand.js.map