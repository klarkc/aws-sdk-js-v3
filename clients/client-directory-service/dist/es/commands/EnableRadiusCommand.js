import { __extends } from "tslib";
import { EnableRadiusRequest, EnableRadiusResult } from "../models/models_0";
import { deserializeAws_json1_1EnableRadiusCommand, serializeAws_json1_1EnableRadiusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableRadiusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableRadiusCommandInput} for command's `input` shape.
 * @see {@link EnableRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableRadiusCommand = /** @class */ (function (_super) {
    __extends(EnableRadiusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableRadiusCommand(input) {
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
    EnableRadiusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "EnableRadiusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableRadiusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableRadiusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableRadiusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableRadiusCommand(input, context);
    };
    EnableRadiusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableRadiusCommand(output, context);
    };
    return EnableRadiusCommand;
}($Command));
export { EnableRadiusCommand };
//# sourceMappingURL=EnableRadiusCommand.js.map