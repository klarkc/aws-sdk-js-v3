import { __extends } from "tslib";
import { DescribeTapesInput, DescribeTapesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeTapesCommand, serializeAws_json1_1DescribeTapesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a
 *             <code>TapeARN</code> is not specified, returns a description of all virtual tapes
 *          associated with the specified gateway. This operation is only supported in the tape gateway
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeTapesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTapesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTapesCommand = /** @class */ (function (_super) {
    __extends(DescribeTapesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTapesCommand(input) {
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
    DescribeTapesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "DescribeTapesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTapesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTapesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTapesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTapesCommand(input, context);
    };
    DescribeTapesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTapesCommand(output, context);
    };
    return DescribeTapesCommand;
}($Command));
export { DescribeTapesCommand };
//# sourceMappingURL=DescribeTapesCommand.js.map