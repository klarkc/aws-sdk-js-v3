import { __extends } from "tslib";
import { ExportBundleRequest, ExportBundleResult } from "../models/models_0";
import { deserializeAws_restJson1ExportBundleCommand, serializeAws_restJson1ExportBundleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Generates customized software development kit (SDK) and or tool packages
 *             used to integrate mobile web or mobile app clients with backend AWS resources.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ExportBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ExportBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportBundleCommandInput} for command's `input` shape.
 * @see {@link ExportBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportBundleCommand = /** @class */ (function (_super) {
    __extends(ExportBundleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportBundleCommand(input) {
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
    ExportBundleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MobileClient";
        var commandName = "ExportBundleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportBundleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportBundleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportBundleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ExportBundleCommand(input, context);
    };
    ExportBundleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ExportBundleCommand(output, context);
    };
    return ExportBundleCommand;
}($Command));
export { ExportBundleCommand };
//# sourceMappingURL=ExportBundleCommand.js.map