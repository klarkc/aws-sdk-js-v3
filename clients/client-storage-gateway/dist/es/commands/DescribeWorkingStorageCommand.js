import { __extends } from "tslib";
import { DescribeWorkingStorageInput, DescribeWorkingStorageOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeWorkingStorageCommand, serializeAws_json1_1DescribeWorkingStorageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the working storage of a gateway. This operation is only
 *          supported in the stored volumes gateway type. This operation is deprecated in cached
 *          volumes API version (20120630). Use DescribeUploadBuffer instead.</p>
 *
 *          <note>
 *             <p>Working storage is also referred to as upload buffer. You can also use the
 *             DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p>
 *          </note>
 *
 *          <p>The response includes disk IDs that are configured as working storage, and it includes
 *          the amount of working storage allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeWorkingStorageCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeWorkingStorageCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeWorkingStorageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkingStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkingStorageCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkingStorageCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkingStorageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkingStorageCommand(input) {
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
    DescribeWorkingStorageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeWorkingStorageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkingStorageInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkingStorageOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkingStorageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkingStorageCommand(input, context);
    };
    DescribeWorkingStorageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkingStorageCommand(output, context);
    };
    return DescribeWorkingStorageCommand;
}($Command));
export { DescribeWorkingStorageCommand };
//# sourceMappingURL=DescribeWorkingStorageCommand.js.map