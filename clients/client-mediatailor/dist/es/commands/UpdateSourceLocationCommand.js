import { __extends } from "tslib";
import { UpdateSourceLocationRequest, UpdateSourceLocationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateSourceLocationCommand, serializeAws_restJson1UpdateSourceLocationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a source location on a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new UpdateSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSourceLocationCommand = /** @class */ (function (_super) {
    __extends(UpdateSourceLocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSourceLocationCommand(input) {
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
    UpdateSourceLocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "UpdateSourceLocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSourceLocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSourceLocationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSourceLocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSourceLocationCommand(input, context);
    };
    UpdateSourceLocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSourceLocationCommand(output, context);
    };
    return UpdateSourceLocationCommand;
}($Command));
export { UpdateSourceLocationCommand };
//# sourceMappingURL=UpdateSourceLocationCommand.js.map