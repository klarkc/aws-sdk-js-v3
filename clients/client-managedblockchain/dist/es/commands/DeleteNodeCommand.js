import { __extends } from "tslib";
import { DeleteNodeInput, DeleteNodeOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteNodeCommand, serializeAws_restJson1DeleteNodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a node that your AWS account owns. All data on the node is lost and cannot be recovered.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, DeleteNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, DeleteNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new DeleteNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNodeCommandInput} for command's `input` shape.
 * @see {@link DeleteNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNodeCommand = /** @class */ (function (_super) {
    __extends(DeleteNodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNodeCommand(input) {
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
    DeleteNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "DeleteNodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNodeInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNodeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteNodeCommand(input, context);
    };
    DeleteNodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteNodeCommand(output, context);
    };
    return DeleteNodeCommand;
}($Command));
export { DeleteNodeCommand };
//# sourceMappingURL=DeleteNodeCommand.js.map