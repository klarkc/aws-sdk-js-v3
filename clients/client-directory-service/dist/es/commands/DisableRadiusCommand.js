import { __extends } from "tslib";
import { DisableRadiusRequest, DisableRadiusResult } from "../models/models_0";
import { deserializeAws_json1_1DisableRadiusCommand, serializeAws_json1_1DisableRadiusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DisableRadiusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableRadiusCommandInput} for command's `input` shape.
 * @see {@link DisableRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableRadiusCommand = /** @class */ (function (_super) {
    __extends(DisableRadiusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableRadiusCommand(input) {
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
    DisableRadiusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DisableRadiusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableRadiusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableRadiusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableRadiusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableRadiusCommand(input, context);
    };
    DisableRadiusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableRadiusCommand(output, context);
    };
    return DisableRadiusCommand;
}($Command));
export { DisableRadiusCommand };
//# sourceMappingURL=DisableRadiusCommand.js.map