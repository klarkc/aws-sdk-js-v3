import { __extends } from "tslib";
import { DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeNFSFileSharesCommand, serializeAws_json1_1DescribeNFSFileSharesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a description for one or more Network File System (NFS) file shares from a file
 *          gateway. This operation is only supported for file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeNFSFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeNFSFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeNFSFileSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNFSFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeNFSFileSharesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNFSFileSharesCommand = /** @class */ (function (_super) {
    __extends(DescribeNFSFileSharesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNFSFileSharesCommand(input) {
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
    DescribeNFSFileSharesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeNFSFileSharesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNFSFileSharesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNFSFileSharesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNFSFileSharesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeNFSFileSharesCommand(input, context);
    };
    DescribeNFSFileSharesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeNFSFileSharesCommand(output, context);
    };
    return DescribeNFSFileSharesCommand;
}($Command));
export { DescribeNFSFileSharesCommand };
//# sourceMappingURL=DescribeNFSFileSharesCommand.js.map