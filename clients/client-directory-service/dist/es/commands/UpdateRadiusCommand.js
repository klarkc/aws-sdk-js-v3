import { __extends } from "tslib";
import { UpdateRadiusRequest, UpdateRadiusResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateRadiusCommand, serializeAws_json1_1UpdateRadiusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateRadiusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRadiusCommandInput} for command's `input` shape.
 * @see {@link UpdateRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRadiusCommand = /** @class */ (function (_super) {
    __extends(UpdateRadiusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRadiusCommand(input) {
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
    UpdateRadiusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "UpdateRadiusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRadiusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRadiusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRadiusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRadiusCommand(input, context);
    };
    UpdateRadiusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRadiusCommand(output, context);
    };
    return UpdateRadiusCommand;
}($Command));
export { UpdateRadiusCommand };
//# sourceMappingURL=UpdateRadiusCommand.js.map