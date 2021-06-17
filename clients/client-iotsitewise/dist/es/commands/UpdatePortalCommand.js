import { __extends } from "tslib";
import { UpdatePortalRequest, UpdatePortalResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePortalCommand, serializeAws_restJson1UpdatePortalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an AWS IoT SiteWise Monitor portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdatePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdatePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdatePortalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePortalCommandInput} for command's `input` shape.
 * @see {@link UpdatePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePortalCommand = /** @class */ (function (_super) {
    __extends(UpdatePortalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePortalCommand(input) {
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
    UpdatePortalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "UpdatePortalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePortalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePortalResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePortalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePortalCommand(input, context);
    };
    UpdatePortalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePortalCommand(output, context);
    };
    return UpdatePortalCommand;
}($Command));
export { UpdatePortalCommand };
//# sourceMappingURL=UpdatePortalCommand.js.map