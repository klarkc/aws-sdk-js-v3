import { __extends } from "tslib";
import { UnlinkIdentityInput } from "../models/models_0";
import { deserializeAws_json1_1UnlinkIdentityCommand, serializeAws_json1_1UnlinkIdentityCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unlinks a federated identity from an existing account. Unlinked logins will be
 *          considered new identities next time they are seen. Removing the last linked login will make
 *          this identity inaccessible.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UnlinkIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, UnlinkIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new UnlinkIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnlinkIdentityCommandInput} for command's `input` shape.
 * @see {@link UnlinkIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnlinkIdentityCommand = /** @class */ (function (_super) {
    __extends(UnlinkIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnlinkIdentityCommand(input) {
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
    UnlinkIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "UnlinkIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnlinkIdentityInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnlinkIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UnlinkIdentityCommand(input, context);
    };
    UnlinkIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UnlinkIdentityCommand(output, context);
    };
    return UnlinkIdentityCommand;
}($Command));
export { UnlinkIdentityCommand };
//# sourceMappingURL=UnlinkIdentityCommand.js.map