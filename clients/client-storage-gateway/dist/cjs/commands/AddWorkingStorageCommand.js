"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWorkingStorageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Configures one or more gateway local disks as working storage for a gateway. This
 *          operation is only supported in the stored volume gateway type. This operation is deprecated
 *          in cached volume API version 20120630. Use <a>AddUploadBuffer</a>
 *          instead.</p>
 *
 *          <note>
 *             <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume
 *             gateway.</p>
 *          </note>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add working storage, and one or more disk IDs that you want to configure as working
 *          storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddWorkingStorageCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddWorkingStorageCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AddWorkingStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddWorkingStorageCommandInput} for command's `input` shape.
 * @see {@link AddWorkingStorageCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddWorkingStorageCommand extends smithy_client_1.Command {
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
        const commandName = "AddWorkingStorageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddWorkingStorageInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AddWorkingStorageOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AddWorkingStorageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AddWorkingStorageCommand(output, context);
    }
}
exports.AddWorkingStorageCommand = AddWorkingStorageCommand;
//# sourceMappingURL=AddWorkingStorageCommand.js.map