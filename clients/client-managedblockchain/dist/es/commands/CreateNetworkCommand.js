import { __extends } from "tslib";
import { CreateNetworkInput, CreateNetworkOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateNetworkCommand, serializeAws_restJson1CreateNetworkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateNetworkCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateNetworkCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNetworkCommand = /** @class */ (function (_super) {
    __extends(CreateNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNetworkCommand(input) {
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
    CreateNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ManagedBlockchainClient";
        var commandName = "CreateNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNetworkInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNetworkOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateNetworkCommand(input, context);
    };
    CreateNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateNetworkCommand(output, context);
    };
    return CreateNetworkCommand;
}($Command));
export { CreateNetworkCommand };
//# sourceMappingURL=CreateNetworkCommand.js.map