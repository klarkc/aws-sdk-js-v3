import { __extends } from "tslib";
import { DescribeStorediSCSIVolumesInput, DescribeStorediSCSIVolumesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeStorediSCSIVolumesCommand, serializeAws_json1_1DescribeStorediSCSIVolumesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the description of the gateway volumes specified in the request. The list of
 *          gateway volumes in the request must be from one gateway. In the response, AWS Storage
 *          Gateway returns volume information sorted by volume ARNs. This operation is only supported
 *          in stored volume gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeStorediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStorediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorediSCSIVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStorediSCSIVolumesCommand = /** @class */ (function (_super) {
    __extends(DescribeStorediSCSIVolumesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStorediSCSIVolumesCommand(input) {
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
    DescribeStorediSCSIVolumesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeStorediSCSIVolumesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStorediSCSIVolumesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStorediSCSIVolumesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStorediSCSIVolumesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeStorediSCSIVolumesCommand(input, context);
    };
    DescribeStorediSCSIVolumesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeStorediSCSIVolumesCommand(output, context);
    };
    return DescribeStorediSCSIVolumesCommand;
}($Command));
export { DescribeStorediSCSIVolumesCommand };
//# sourceMappingURL=DescribeStorediSCSIVolumesCommand.js.map