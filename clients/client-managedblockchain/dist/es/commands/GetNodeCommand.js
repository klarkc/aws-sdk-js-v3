import { __extends } from "tslib";
import { GetNodeInput, GetNodeOutput } from "../models/models_0";
import { deserializeAws_restJson1GetNodeCommand, serializeAws_restJson1GetNodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns detailed information about a node.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new GetNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNodeCommandInput} for command's `input` shape.
 * @see {@link GetNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNodeCommand = /** @class */ (function (_super) {
    __extends(GetNodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetNodeCommand(input) {
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
    GetNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "GetNodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetNodeInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetNodeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetNodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetNodeCommand(input, context);
    };
    GetNodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetNodeCommand(output, context);
    };
    return GetNodeCommand;
}($Command));
export { GetNodeCommand };
//# sourceMappingURL=GetNodeCommand.js.map