import { __extends } from "tslib";
import { CancelArchivalInput, CancelArchivalOutput } from "../models/models_0";
import { deserializeAws_json1_1CancelArchivalCommand, serializeAws_json1_1CancelArchivalCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving
 *          process is initiated. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CancelArchivalCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CancelArchivalCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CancelArchivalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelArchivalCommandInput} for command's `input` shape.
 * @see {@link CancelArchivalCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelArchivalCommand = /** @class */ (function (_super) {
    __extends(CancelArchivalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelArchivalCommand(input) {
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
    CancelArchivalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "CancelArchivalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelArchivalInput.filterSensitiveLog,
            outputFilterSensitiveLog: CancelArchivalOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelArchivalCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelArchivalCommand(input, context);
    };
    CancelArchivalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelArchivalCommand(output, context);
    };
    return CancelArchivalCommand;
}($Command));
export { CancelArchivalCommand };
//# sourceMappingURL=CancelArchivalCommand.js.map