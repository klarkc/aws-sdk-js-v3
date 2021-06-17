import { __extends } from "tslib";
import { DescribeFileSystemAssociationsInput, DescribeFileSystemAssociationsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeFileSystemAssociationsCommand, serializeAws_json1_1DescribeFileSystemAssociationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the file system association information. This operation is only supported for
 *          Amazon FSx file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeFileSystemAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAssociationsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFileSystemAssociationsCommand = /** @class */ (function (_super) {
    __extends(DescribeFileSystemAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFileSystemAssociationsCommand(input) {
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
    DescribeFileSystemAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeFileSystemAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFileSystemAssociationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFileSystemAssociationsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFileSystemAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFileSystemAssociationsCommand(input, context);
    };
    DescribeFileSystemAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFileSystemAssociationsCommand(output, context);
    };
    return DescribeFileSystemAssociationsCommand;
}($Command));
export { DescribeFileSystemAssociationsCommand };
//# sourceMappingURL=DescribeFileSystemAssociationsCommand.js.map