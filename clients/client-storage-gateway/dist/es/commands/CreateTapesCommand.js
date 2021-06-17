import { __extends } from "tslib";
import { CreateTapesInput, CreateTapesOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateTapesCommand, serializeAws_json1_1CreateTapesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive
 *          the tapes. This operation is only supported in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create virtual tapes.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateTapesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTapesCommandInput} for command's `input` shape.
 * @see {@link CreateTapesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTapesCommand = /** @class */ (function (_super) {
    __extends(CreateTapesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTapesCommand(input) {
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
    CreateTapesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CreateTapesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTapesInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTapesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTapesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTapesCommand(input, context);
    };
    CreateTapesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTapesCommand(output, context);
    };
    return CreateTapesCommand;
}($Command));
export { CreateTapesCommand };
//# sourceMappingURL=CreateTapesCommand.js.map