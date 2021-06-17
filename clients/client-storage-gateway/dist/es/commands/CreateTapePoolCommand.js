import { __extends } from "tslib";
import { CreateTapePoolInput, CreateTapePoolOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateTapePoolCommand, serializeAws_json1_1CreateTapePoolCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom tape pool. You can use custom tape pool to enable tape retention
 *          lock on tapes that are archived in the custom pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateTapePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTapePoolCommandInput} for command's `input` shape.
 * @see {@link CreateTapePoolCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTapePoolCommand = /** @class */ (function (_super) {
    __extends(CreateTapePoolCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTapePoolCommand(input) {
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
    CreateTapePoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CreateTapePoolCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTapePoolInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTapePoolOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTapePoolCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTapePoolCommand(input, context);
    };
    CreateTapePoolCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTapePoolCommand(output, context);
    };
    return CreateTapePoolCommand;
}($Command));
export { CreateTapePoolCommand };
//# sourceMappingURL=CreateTapePoolCommand.js.map