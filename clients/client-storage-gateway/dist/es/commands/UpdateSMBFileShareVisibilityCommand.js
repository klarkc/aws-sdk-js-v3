import { __extends } from "tslib";
import { UpdateSMBFileShareVisibilityInput, UpdateSMBFileShareVisibilityOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand, serializeAws_json1_1UpdateSMBFileShareVisibilityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Controls whether the shares on a gateway are visible in a net view or browse
 *          list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateSMBFileShareVisibilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSMBFileShareVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBFileShareVisibilityCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSMBFileShareVisibilityCommand = /** @class */ (function (_super) {
    __extends(UpdateSMBFileShareVisibilityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSMBFileShareVisibilityCommand(input) {
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
    UpdateSMBFileShareVisibilityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "UpdateSMBFileShareVisibilityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSMBFileShareVisibilityInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSMBFileShareVisibilityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSMBFileShareVisibilityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSMBFileShareVisibilityCommand(input, context);
    };
    UpdateSMBFileShareVisibilityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSMBFileShareVisibilityCommand(output, context);
    };
    return UpdateSMBFileShareVisibilityCommand;
}($Command));
export { UpdateSMBFileShareVisibilityCommand };
//# sourceMappingURL=UpdateSMBFileShareVisibilityCommand.js.map