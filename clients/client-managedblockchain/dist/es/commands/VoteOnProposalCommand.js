import { __extends } from "tslib";
import { VoteOnProposalInput, VoteOnProposalOutput } from "../models/models_0";
import { deserializeAws_restJson1VoteOnProposalCommand, serializeAws_restJson1VoteOnProposalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same AWS account as the principal that calls the action.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, VoteOnProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, VoteOnProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new VoteOnProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VoteOnProposalCommandInput} for command's `input` shape.
 * @see {@link VoteOnProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var VoteOnProposalCommand = /** @class */ (function (_super) {
    __extends(VoteOnProposalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function VoteOnProposalCommand(input) {
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
    VoteOnProposalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "VoteOnProposalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: VoteOnProposalInput.filterSensitiveLog,
            outputFilterSensitiveLog: VoteOnProposalOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    VoteOnProposalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1VoteOnProposalCommand(input, context);
    };
    VoteOnProposalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1VoteOnProposalCommand(output, context);
    };
    return VoteOnProposalCommand;
}($Command));
export { VoteOnProposalCommand };
//# sourceMappingURL=VoteOnProposalCommand.js.map