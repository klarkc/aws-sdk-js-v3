import { __extends } from "tslib";
import { CreateNodeInput, CreateNodeOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateNodeCommand, serializeAws_restJson1CreateNodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a node on the specified blockchain network.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new CreateNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNodeCommandInput} for command's `input` shape.
 * @see {@link CreateNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNodeCommand = /** @class */ (function (_super) {
    __extends(CreateNodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNodeCommand(input) {
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
    CreateNodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "CreateNodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNodeInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNodeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateNodeCommand(input, context);
    };
    CreateNodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateNodeCommand(output, context);
    };
    return CreateNodeCommand;
}($Command));
export { CreateNodeCommand };
//# sourceMappingURL=CreateNodeCommand.js.map