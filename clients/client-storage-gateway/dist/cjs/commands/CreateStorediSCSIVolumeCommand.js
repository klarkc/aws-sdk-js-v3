"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStorediSCSIVolumeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a volume on a specified gateway. This operation is only supported in the stored
 *          volume gateway type.</p>
 *
 *          <p>The size of the volume to create is inferred from the disk size. You can choose to
 *          preserve existing data on the disk, create volume from an existing snapshot, or create an
 *          empty volume. If you choose to create an empty gateway volume, then any existing data on
 *          the disk is erased.</p>
 *
 *          <p>In the request, you must specify the gateway and the disk information on which you are
 *          creating the volume. In response, the gateway creates the volume and returns volume
 *          information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target
 *          ARN that initiators can use to connect to the volume target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateStorediSCSIVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateStorediSCSIVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateStorediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStorediSCSIVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateStorediSCSIVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateStorediSCSIVolumeCommand extends smithy_client_1.Command {
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
        const commandName = "CreateStorediSCSIVolumeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateStorediSCSIVolumeInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateStorediSCSIVolumeOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateStorediSCSIVolumeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateStorediSCSIVolumeCommand(output, context);
    }
}
exports.CreateStorediSCSIVolumeCommand = CreateStorediSCSIVolumeCommand;
//# sourceMappingURL=CreateStorediSCSIVolumeCommand.js.map