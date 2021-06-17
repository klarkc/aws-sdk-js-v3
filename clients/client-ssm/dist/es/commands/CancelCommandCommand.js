import { __extends } from "tslib";
import { CancelCommandRequest, CancelCommandResult } from "../models/models_0";
import { deserializeAws_json1_1CancelCommandCommand, serializeAws_json1_1CancelCommandCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attempts to cancel the command specified by the Command ID. There is no guarantee that the
 *    command will be terminated and the underlying process stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CancelCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CancelCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CancelCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCommandCommandInput} for command's `input` shape.
 * @see {@link CancelCommandCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelCommandCommand = /** @class */ (function (_super) {
    __extends(CancelCommandCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelCommandCommand(input) {
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
    CancelCommandCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CancelCommandCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelCommandRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelCommandResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelCommandCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelCommandCommand(input, context);
    };
    CancelCommandCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelCommandCommand(output, context);
    };
    return CancelCommandCommand;
}($Command));
export { CancelCommandCommand };
//# sourceMappingURL=CancelCommandCommand.js.map