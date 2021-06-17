import { __extends } from "tslib";
import { EnableSsoRequest, EnableSsoResult } from "../models/models_0";
import { deserializeAws_json1_1EnableSsoCommand, serializeAws_json1_1EnableSsoCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableSsoCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableSsoCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableSsoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSsoCommandInput} for command's `input` shape.
 * @see {@link EnableSsoCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableSsoCommand = /** @class */ (function (_super) {
    __extends(EnableSsoCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableSsoCommand(input) {
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
    EnableSsoCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "EnableSsoCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableSsoRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableSsoResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableSsoCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableSsoCommand(input, context);
    };
    EnableSsoCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableSsoCommand(output, context);
    };
    return EnableSsoCommand;
}($Command));
export { EnableSsoCommand };
//# sourceMappingURL=EnableSsoCommand.js.map