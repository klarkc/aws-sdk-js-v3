import { __extends } from "tslib";
import { GetProposalInput, GetProposalOutput } from "../models/models_0";
import { deserializeAws_restJson1GetProposalCommand, serializeAws_restJson1GetProposalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new GetProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProposalCommandInput} for command's `input` shape.
 * @see {@link GetProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProposalCommand = /** @class */ (function (_super) {
    __extends(GetProposalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProposalCommand(input) {
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
    GetProposalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "GetProposalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProposalInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetProposalOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProposalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetProposalCommand(input, context);
    };
    GetProposalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetProposalCommand(output, context);
    };
    return GetProposalCommand;
}($Command));
export { GetProposalCommand };
//# sourceMappingURL=GetProposalCommand.js.map