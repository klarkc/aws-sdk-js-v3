import { __extends } from "tslib";
import { DeleteSourceLocationRequest, DeleteSourceLocationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSourceLocationCommand, serializeAws_restJson1DeleteSourceLocationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a source location on a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSourceLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSourceLocationCommand = /** @class */ (function (_super) {
    __extends(DeleteSourceLocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSourceLocationCommand(input) {
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
    DeleteSourceLocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DeleteSourceLocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSourceLocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSourceLocationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSourceLocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSourceLocationCommand(input, context);
    };
    DeleteSourceLocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSourceLocationCommand(output, context);
    };
    return DeleteSourceLocationCommand;
}($Command));
export { DeleteSourceLocationCommand };
//# sourceMappingURL=DeleteSourceLocationCommand.js.map