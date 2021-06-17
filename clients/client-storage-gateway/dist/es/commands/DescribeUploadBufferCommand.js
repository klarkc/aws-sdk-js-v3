import { __extends } from "tslib";
import { DescribeUploadBufferInput, DescribeUploadBufferOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeUploadBufferCommand, serializeAws_json1_1DescribeUploadBufferCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the upload buffer of a gateway. This operation is supported
 *          for the stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>The response includes disk IDs that are configured as upload buffer space, and it
 *          includes the amount of upload buffer space allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeUploadBufferCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeUploadBufferCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeUploadBufferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUploadBufferCommandInput} for command's `input` shape.
 * @see {@link DescribeUploadBufferCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUploadBufferCommand = /** @class */ (function (_super) {
    __extends(DescribeUploadBufferCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUploadBufferCommand(input) {
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
    DescribeUploadBufferCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeUploadBufferCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUploadBufferInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUploadBufferOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUploadBufferCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUploadBufferCommand(input, context);
    };
    DescribeUploadBufferCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUploadBufferCommand(output, context);
    };
    return DescribeUploadBufferCommand;
}($Command));
export { DescribeUploadBufferCommand };
//# sourceMappingURL=DescribeUploadBufferCommand.js.map