import { __extends } from "tslib";
import { GetMemberInput, GetMemberOutput } from "../models/models_0";
import { deserializeAws_restJson1GetMemberCommand, serializeAws_restJson1GetMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about a member.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetMemberCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetMemberCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new GetMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMemberCommandInput} for command's `input` shape.
 * @see {@link GetMemberCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMemberCommand = /** @class */ (function (_super) {
    __extends(GetMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMemberCommand(input) {
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
    GetMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "GetMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMemberInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMemberOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMemberCommand(input, context);
    };
    GetMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMemberCommand(output, context);
    };
    return GetMemberCommand;
}($Command));
export { GetMemberCommand };
//# sourceMappingURL=GetMemberCommand.js.map