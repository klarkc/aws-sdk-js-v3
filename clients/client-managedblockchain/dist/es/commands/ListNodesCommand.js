import { __extends } from "tslib";
import { ListNodesInput, ListNodesOutput } from "../models/models_0";
import { deserializeAws_restJson1ListNodesCommand, serializeAws_restJson1ListNodesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the nodes within a network.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListNodesCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListNodesCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNodesCommand = /** @class */ (function (_super) {
    __extends(ListNodesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNodesCommand(input) {
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
    ListNodesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "ListNodesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNodesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListNodesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNodesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListNodesCommand(input, context);
    };
    ListNodesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListNodesCommand(output, context);
    };
    return ListNodesCommand;
}($Command));
export { ListNodesCommand };
//# sourceMappingURL=ListNodesCommand.js.map