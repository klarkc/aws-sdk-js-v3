import { __extends } from "tslib";
import { CreateTapeWithBarcodeInput, CreateTapeWithBarcodeOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateTapeWithBarcodeCommand, serializeAws_json1_1CreateTapeWithBarcodeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and
 *          then archive the tape. A barcode is unique and cannot be reused if it has already been used
 *          on a tape. This applies to barcodes used on deleted tapes. This operation is only supported
 *          in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a virtual tape.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapeWithBarcodeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapeWithBarcodeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateTapeWithBarcodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTapeWithBarcodeCommandInput} for command's `input` shape.
 * @see {@link CreateTapeWithBarcodeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTapeWithBarcodeCommand = /** @class */ (function (_super) {
    __extends(CreateTapeWithBarcodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTapeWithBarcodeCommand(input) {
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
    CreateTapeWithBarcodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CreateTapeWithBarcodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTapeWithBarcodeInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTapeWithBarcodeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTapeWithBarcodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTapeWithBarcodeCommand(input, context);
    };
    CreateTapeWithBarcodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTapeWithBarcodeCommand(output, context);
    };
    return CreateTapeWithBarcodeCommand;
}($Command));
export { CreateTapeWithBarcodeCommand };
//# sourceMappingURL=CreateTapeWithBarcodeCommand.js.map