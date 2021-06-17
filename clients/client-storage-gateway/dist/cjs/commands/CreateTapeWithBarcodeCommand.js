"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTapeWithBarcodeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateTapeWithBarcodeCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "StorageGatewayClient";
        const commandName = "CreateTapeWithBarcodeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateTapeWithBarcodeInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateTapeWithBarcodeOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateTapeWithBarcodeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateTapeWithBarcodeCommand(output, context);
    }
}
exports.CreateTapeWithBarcodeCommand = CreateTapeWithBarcodeCommand;
//# sourceMappingURL=CreateTapeWithBarcodeCommand.js.map