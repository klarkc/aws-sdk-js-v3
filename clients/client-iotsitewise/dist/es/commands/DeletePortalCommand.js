import { __extends } from "tslib";
import { DeletePortalRequest, DeletePortalResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePortalCommand, serializeAws_restJson1DeletePortalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a portal from AWS IoT SiteWise Monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeletePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeletePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeletePortalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortalCommandInput} for command's `input` shape.
 * @see {@link DeletePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePortalCommand = /** @class */ (function (_super) {
    __extends(DeletePortalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePortalCommand(input) {
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
    DeletePortalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DeletePortalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePortalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePortalResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePortalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePortalCommand(input, context);
    };
    DeletePortalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePortalCommand(output, context);
    };
    return DeletePortalCommand;
}($Command));
export { DeletePortalCommand };
//# sourceMappingURL=DeletePortalCommand.js.map