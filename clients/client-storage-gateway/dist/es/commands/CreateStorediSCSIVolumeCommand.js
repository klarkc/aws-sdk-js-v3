import { __extends } from "tslib";
import { CreateStorediSCSIVolumeInput, CreateStorediSCSIVolumeOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateStorediSCSIVolumeCommand, serializeAws_json1_1CreateStorediSCSIVolumeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateStorediSCSIVolumeCommand = /** @class */ (function (_super) {
    __extends(CreateStorediSCSIVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStorediSCSIVolumeCommand(input) {
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
    CreateStorediSCSIVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CreateStorediSCSIVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStorediSCSIVolumeInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStorediSCSIVolumeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStorediSCSIVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateStorediSCSIVolumeCommand(input, context);
    };
    CreateStorediSCSIVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateStorediSCSIVolumeCommand(output, context);
    };
    return CreateStorediSCSIVolumeCommand;
}($Command));
export { CreateStorediSCSIVolumeCommand };
//# sourceMappingURL=CreateStorediSCSIVolumeCommand.js.map