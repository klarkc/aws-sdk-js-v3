import { __extends } from "tslib";
import { UnlabelParameterVersionRequest, UnlabelParameterVersionResult } from "../models/models_1";
import { deserializeAws_json1_1UnlabelParameterVersionCommand, serializeAws_json1_1UnlabelParameterVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove a label or labels from a parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UnlabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UnlabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UnlabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnlabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link UnlabelParameterVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnlabelParameterVersionCommand = /** @class */ (function (_super) {
    __extends(UnlabelParameterVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnlabelParameterVersionCommand(input) {
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
    UnlabelParameterVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UnlabelParameterVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnlabelParameterVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnlabelParameterVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnlabelParameterVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UnlabelParameterVersionCommand(input, context);
    };
    UnlabelParameterVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UnlabelParameterVersionCommand(output, context);
    };
    return UnlabelParameterVersionCommand;
}($Command));
export { UnlabelParameterVersionCommand };
//# sourceMappingURL=UnlabelParameterVersionCommand.js.map