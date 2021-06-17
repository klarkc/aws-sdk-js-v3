import { __extends } from "tslib";
import { DescribeCachediSCSIVolumesInput, DescribeCachediSCSIVolumesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeCachediSCSIVolumesCommand, serializeAws_json1_1DescribeCachediSCSIVolumesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of the gateway volumes specified in the request. This operation is
 *          only supported in the cached volume gateway types.</p>
 *
 *          <p>The list of gateway volumes in the request must be from one gateway. In the response,
 *          AWS Storage Gateway returns volume information sorted by volume Amazon Resource Name
 *          (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeCachediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCachediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeCachediSCSIVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCachediSCSIVolumesCommand = /** @class */ (function (_super) {
    __extends(DescribeCachediSCSIVolumesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCachediSCSIVolumesCommand(input) {
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
    DescribeCachediSCSIVolumesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeCachediSCSIVolumesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCachediSCSIVolumesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCachediSCSIVolumesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCachediSCSIVolumesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeCachediSCSIVolumesCommand(input, context);
    };
    DescribeCachediSCSIVolumesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeCachediSCSIVolumesCommand(output, context);
    };
    return DescribeCachediSCSIVolumesCommand;
}($Command));
export { DescribeCachediSCSIVolumesCommand };
//# sourceMappingURL=DescribeCachediSCSIVolumesCommand.js.map