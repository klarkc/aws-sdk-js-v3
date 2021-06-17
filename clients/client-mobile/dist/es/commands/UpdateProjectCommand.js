import { __extends } from "tslib";
import { UpdateProjectRequest, UpdateProjectResult } from "../models/models_0";
import { deserializeAws_restJson1UpdateProjectCommand, serializeAws_restJson1UpdateProjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Update an existing project.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, UpdateProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, UpdateProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new UpdateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "MobileClient";
        var commandName = "UpdateProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProjectResult.filterSensitiveLog,
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