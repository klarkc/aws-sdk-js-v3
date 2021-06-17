import { __extends } from "tslib";
import { EnableLDAPSRequest, EnableLDAPSResult } from "../models/models_0";
import { deserializeAws_json1_1EnableLDAPSCommand, serializeAws_json1_1EnableLDAPSCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Activates the switch for the specific directory to always use LDAP secure calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableLDAPSCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableLDAPSCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableLDAPSCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableLDAPSCommandInput} for command's `input` shape.
 * @see {@link EnableLDAPSCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableLDAPSCommand = /** @class */ (function (_super) {
    __extends(EnableLDAPSCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableLDAPSCommand(input) {
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
    EnableLDAPSCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "EnableLDAPSCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableLDAPSRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableLDAPSResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableLDAPSCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableLDAPSCommand(input, context);
    };
    EnableLDAPSCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableLDAPSCommand(output, context);
    };
    return EnableLDAPSCommand;
}($Command));
export { EnableLDAPSCommand };
//# sourceMappingURL=EnableLDAPSCommand.js.map