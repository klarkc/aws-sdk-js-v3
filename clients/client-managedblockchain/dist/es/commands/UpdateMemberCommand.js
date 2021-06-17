import { __extends } from "tslib";
import { UpdateMemberInput, UpdateMemberOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateMemberCommand, serializeAws_restJson1UpdateMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a member configuration with new parameters.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, UpdateMemberCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, UpdateMemberCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new UpdateMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMemberCommand = /** @class */ (function (_super) {
    __extends(UpdateMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMemberCommand(input) {
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
    UpdateMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "UpdateMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMemberInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMemberOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMemberCommand(input, context);
    };
    UpdateMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMemberCommand(output, context);
    };
    return UpdateMemberCommand;
}($Command));
export { UpdateMemberCommand };
//# sourceMappingURL=UpdateMemberCommand.js.map