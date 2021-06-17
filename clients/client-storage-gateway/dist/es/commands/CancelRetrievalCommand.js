import { __extends } from "tslib";
import { CancelRetrievalInput, CancelRetrievalOutput } from "../models/models_0";
import { deserializeAws_json1_1CancelRetrievalCommand, serializeAws_json1_1CancelRetrievalCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after
 *          the retrieval process is initiated. The virtual tape is returned to the VTS. This operation
 *          is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CancelRetrievalCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CancelRetrievalCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CancelRetrievalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelRetrievalCommandInput} for command's `input` shape.
 * @see {@link CancelRetrievalCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelRetrievalCommand = /** @class */ (function (_super) {
    __extends(CancelRetrievalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelRetrievalCommand(input) {
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
    CancelRetrievalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CancelRetrievalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelRetrievalInput.filterSensitiveLog,
            outputFilterSensitiveLog: CancelRetrievalOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelRetrievalCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelRetrievalCommand(input, context);
    };
    CancelRetrievalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelRetrievalCommand(output, context);
    };
    return CancelRetrievalCommand;
}($Command));
export { CancelRetrievalCommand };
//# sourceMappingURL=CancelRetrievalCommand.js.map