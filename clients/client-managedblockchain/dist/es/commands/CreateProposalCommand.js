import { __extends } from "tslib";
import { CreateProposalInput, CreateProposalOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateProposalCommand, serializeAws_restJson1CreateProposalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new CreateProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProposalCommandInput} for command's `input` shape.
 * @see {@link CreateProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProposalCommand = /** @class */ (function (_super) {
    __extends(CreateProposalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProposalCommand(input) {
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
    CreateProposalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "CreateProposalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProposalInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProposalOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProposalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateProposalCommand(input, context);
    };
    CreateProposalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateProposalCommand(output, context);
    };
    return CreateProposalCommand;
}($Command));
export { CreateProposalCommand };
//# sourceMappingURL=CreateProposalCommand.js.map