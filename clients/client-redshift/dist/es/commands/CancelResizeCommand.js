import { __extends } from "tslib";
import { CancelResizeMessage, ResizeProgressMessage } from "../models/models_0";
import { deserializeAws_queryCancelResizeCommand, serializeAws_queryCancelResizeCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a resize operation for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CancelResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CancelResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CancelResizeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelResizeCommandInput} for command's `input` shape.
 * @see {@link CancelResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelResizeCommand = /** @class */ (function (_super) {
    __extends(CancelResizeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelResizeCommand(input) {
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
    CancelResizeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CancelResizeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelResizeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ResizeProgressMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelResizeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCancelResizeCommand(input, context);
    };
    CancelResizeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCancelResizeCommand(output, context);
    };
    return CancelResizeCommand;
}($Command));
export { CancelResizeCommand };
//# sourceMappingURL=CancelResizeCommand.js.map