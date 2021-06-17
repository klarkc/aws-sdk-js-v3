import { __extends } from "tslib";
import { UpdateProjectRequest, UpdateProjectResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateProjectCommand, serializeAws_restJson1UpdateProjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateProjectCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateProjectCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProjectCommand = /** @class */ (function (_super) {
    __extends(UpdateProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProjectCommand(input) {
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
    UpdateProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "UpdateProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProjectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateProjectCommand(input, context);
    };
    UpdateProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateProjectCommand(output, context);
    };
    return UpdateProjectCommand;
}($Command));
export { UpdateProjectCommand };
//# sourceMappingURL=UpdateProjectCommand.js.map