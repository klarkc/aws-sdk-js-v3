import { __extends } from "tslib";
import { RejectInvitationInput, RejectInvitationOutput } from "../models/models_0";
import { deserializeAws_restJson1RejectInvitationCommand, serializeAws_restJson1RejectInvitationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, RejectInvitationCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, RejectInvitationCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new RejectInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectInvitationCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RejectInvitationCommand = /** @class */ (function (_super) {
    __extends(RejectInvitationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RejectInvitationCommand(input) {
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
    RejectInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "RejectInvitationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RejectInvitationInput.filterSensitiveLog,
            outputFilterSensitiveLog: RejectInvitationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RejectInvitationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RejectInvitationCommand(input, context);
    };
    RejectInvitationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RejectInvitationCommand(output, context);
    };
    return RejectInvitationCommand;
}($Command));
export { RejectInvitationCommand };
//# sourceMappingURL=RejectInvitationCommand.js.map