import { __extends } from "tslib";
import { ListProposalVotesInput, ListProposalVotesOutput } from "../models/models_0";
import { deserializeAws_restJson1ListProposalVotesCommand, serializeAws_restJson1ListProposalVotesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListProposalVotesCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListProposalVotesCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListProposalVotesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProposalVotesCommandInput} for command's `input` shape.
 * @see {@link ListProposalVotesCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProposalVotesCommand = /** @class */ (function (_super) {
    __extends(ListProposalVotesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProposalVotesCommand(input) {
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
    ListProposalVotesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "ListProposalVotesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProposalVotesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListProposalVotesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProposalVotesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProposalVotesCommand(input, context);
    };
    ListProposalVotesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProposalVotesCommand(output, context);
    };
    return ListProposalVotesCommand;
}($Command));
export { ListProposalVotesCommand };
//# sourceMappingURL=ListProposalVotesCommand.js.map