import { __extends } from "tslib";
import { DescribeTapeArchivesInput, DescribeTapeArchivesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeTapeArchivesCommand, serializeAws_json1_1DescribeTapeArchivesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a
 *          description of all virtual tapes found in the VTS associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeArchivesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeArchivesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeTapeArchivesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTapeArchivesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeArchivesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTapeArchivesCommand = /** @class */ (function (_super) {
    __extends(DescribeTapeArchivesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTapeArchivesCommand(input) {
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
    DescribeTapeArchivesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeTapeArchivesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTapeArchivesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTapeArchivesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTapeArchivesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTapeArchivesCommand(input, context);
    };
    DescribeTapeArchivesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTapeArchivesCommand(output, context);
    };
    return DescribeTapeArchivesCommand;
}($Command));
export { DescribeTapeArchivesCommand };
//# sourceMappingURL=DescribeTapeArchivesCommand.js.map