import { __extends } from "tslib";
import { DescribeSMBFileSharesInput, DescribeSMBFileSharesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeSMBFileSharesCommand, serializeAws_json1_1DescribeSMBFileSharesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a description for one or more Server Message Block (SMB) file shares from a file
 *          gateway. This operation is only supported for file gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSMBFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSMBFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeSMBFileSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSMBFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeSMBFileSharesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSMBFileSharesCommand = /** @class */ (function (_super) {
    __extends(DescribeSMBFileSharesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSMBFileSharesCommand(input) {
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
    DescribeSMBFileSharesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeSMBFileSharesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSMBFileSharesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSMBFileSharesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSMBFileSharesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSMBFileSharesCommand(input, context);
    };
    DescribeSMBFileSharesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSMBFileSharesCommand(output, context);
    };
    return DescribeSMBFileSharesCommand;
}($Command));
export { DescribeSMBFileSharesCommand };
//# sourceMappingURL=DescribeSMBFileSharesCommand.js.map