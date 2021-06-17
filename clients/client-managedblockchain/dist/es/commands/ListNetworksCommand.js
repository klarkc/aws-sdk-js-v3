import { __extends } from "tslib";
import { ListNetworksInput, ListNetworksOutput } from "../models/models_0";
import { deserializeAws_restJson1ListNetworksCommand, serializeAws_restJson1ListNetworksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the networks in which the current AWS account participates.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListNetworksCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListNetworksCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNetworksCommandInput} for command's `input` shape.
 * @see {@link ListNetworksCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListNetworksCommand = /** @class */ (function (_super) {
    __extends(ListNetworksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListNetworksCommand(input) {
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
    ListNetworksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "ListNetworksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListNetworksInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListNetworksOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListNetworksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListNetworksCommand(input, context);
    };
    ListNetworksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListNetworksCommand(output, context);
    };
    return ListNetworksCommand;
}($Command));
export { ListNetworksCommand };
//# sourceMappingURL=ListNetworksCommand.js.map