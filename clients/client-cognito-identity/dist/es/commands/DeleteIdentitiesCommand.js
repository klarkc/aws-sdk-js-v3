import { __extends } from "tslib";
import { DeleteIdentitiesInput, DeleteIdentitiesResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteIdentitiesCommand, serializeAws_json1_1DeleteIdentitiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities
 *          that you want to delete.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DeleteIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DeleteIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new DeleteIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIdentitiesCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIdentitiesCommand = /** @class */ (function (_super) {
    __extends(DeleteIdentitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIdentitiesCommand(input) {
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
    DeleteIdentitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "DeleteIdentitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIdentitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteIdentitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIdentitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteIdentitiesCommand(input, context);
    };
    DeleteIdentitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteIdentitiesCommand(output, context);
    };
    return DeleteIdentitiesCommand;
}($Command));
export { DeleteIdentitiesCommand };
//# sourceMappingURL=DeleteIdentitiesCommand.js.map