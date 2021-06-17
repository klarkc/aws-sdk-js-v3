import { __extends } from "tslib";
import { UpdateNodeInput, UpdateNodeOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateNodeCommand, serializeAws_restJson1UpdateNodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a node configuration with new parameters.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, UpdateNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, UpdateNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new UpdateNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNodeCommandInput} for command's `input` shape.
 * @see {@link UpdateNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNodeCommand = /** @class */ (function (_super) {
    __extends(UpdateNodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNodeCommand(input) {
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
    UpdateNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "UpdateNodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNodeInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNodeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateNodeCommand(input, context);
    };
    UpdateNodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateNodeCommand(output, context);
    };
    return UpdateNodeCommand;
}($Command));
export { UpdateNodeCommand };
//# sourceMappingURL=UpdateNodeCommand.js.map