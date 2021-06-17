import { __extends } from "tslib";
import { DisableLDAPSRequest, DisableLDAPSResult } from "../models/models_0";
import { deserializeAws_json1_1DisableLDAPSCommand, serializeAws_json1_1DisableLDAPSCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deactivates LDAP secure calls for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableLDAPSCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableLDAPSCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DisableLDAPSCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableLDAPSCommandInput} for command's `input` shape.
 * @see {@link DisableLDAPSCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableLDAPSCommand = /** @class */ (function (_super) {
    __extends(DisableLDAPSCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableLDAPSCommand(input) {
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
    DisableLDAPSCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DisableLDAPSCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableLDAPSRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableLDAPSResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableLDAPSCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableLDAPSCommand(input, context);
    };
    DisableLDAPSCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableLDAPSCommand(output, context);
    };
    return DisableLDAPSCommand;
}($Command));
export { DisableLDAPSCommand };
//# sourceMappingURL=DisableLDAPSCommand.js.map