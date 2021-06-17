import { __extends } from "tslib";
import { ListProposalsInput, ListProposalsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListProposalsCommand, serializeAws_restJson1ListProposalsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of proposals for the network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListProposalsCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListProposalsCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListProposalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProposalsCommandInput} for command's `input` shape.
 * @see {@link ListProposalsCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProposalsCommand = /** @class */ (function (_super) {
    __extends(ListProposalsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProposalsCommand(input) {
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
    ListProposalsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "ListProposalsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProposalsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListProposalsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProposalsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProposalsCommand(input, context);
    };
    ListProposalsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProposalsCommand(output, context);
    };
    return ListProposalsCommand;
}($Command));
export { ListProposalsCommand };
//# sourceMappingURL=ListProposalsCommand.js.map