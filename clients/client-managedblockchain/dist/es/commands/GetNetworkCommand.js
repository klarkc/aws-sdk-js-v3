import { __extends } from "tslib";
import { GetNetworkInput, GetNetworkOutput } from "../models/models_0";
import { deserializeAws_restJson1GetNetworkCommand, serializeAws_restJson1GetNetworkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about a network.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetNetworkCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetNetworkCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new GetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkCommandInput} for command's `input` shape.
 * @see {@link GetNetworkCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNetworkCommand = /** @class */ (function (_super) {
    __extends(GetNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetNetworkCommand(input) {
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
    GetNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "GetNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetNetworkInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetNetworkOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetNetworkCommand(input, context);
    };
    GetNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetNetworkCommand(output, context);
    };
    return GetNetworkCommand;
}($Command));
export { GetNetworkCommand };
//# sourceMappingURL=GetNetworkCommand.js.map