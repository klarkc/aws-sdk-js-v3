import { __extends } from "tslib";
import { DeleteVodSourceRequest, DeleteVodSourceResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteVodSourceCommand, serializeAws_restJson1DeleteVodSourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific VOD source in a specific source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteVodSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVodSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVodSourceCommand = /** @class */ (function (_super) {
    __extends(DeleteVodSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVodSourceCommand(input) {
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
    DeleteVodSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DeleteVodSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVodSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVodSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVodSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteVodSourceCommand(input, context);
    };
    DeleteVodSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteVodSourceCommand(output, context);
    };
    return DeleteVodSourceCommand;
}($Command));
export { DeleteVodSourceCommand };
//# sourceMappingURL=DeleteVodSourceCommand.js.map