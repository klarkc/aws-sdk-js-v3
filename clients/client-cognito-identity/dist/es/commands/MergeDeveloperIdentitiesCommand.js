import { __extends } from "tslib";
import { MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesResponse } from "../models/models_0";
import { deserializeAws_json1_1MergeDeveloperIdentitiesCommand, serializeAws_json1_1MergeDeveloperIdentitiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Merges two users having different <code>IdentityId</code>s, existing in the same
 *          identity pool, and identified by the same developer provider. You can use this action to
 *          request that discrete users be merged and identified as a single user in the Cognito
 *          environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>)
 *          with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only
 *          developer-authenticated users can be merged. If the users to be merged are associated with
 *          the same public provider, but as two different users, an exception will be
 *          thrown.</p>
 *          <p>The number of linked logins is limited to 20. So, the number of linked logins for the
 *          source user, <code>SourceUserIdentifier</code>, and the destination user,
 *          <code>DestinationUserIdentifier</code>, together should not be larger than 20.
 *          Otherwise, an exception will be thrown.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new MergeDeveloperIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeDeveloperIdentitiesCommandInput} for command's `input` shape.
 * @see {@link MergeDeveloperIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MergeDeveloperIdentitiesCommand = /** @class */ (function (_super) {
    __extends(MergeDeveloperIdentitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MergeDeveloperIdentitiesCommand(input) {
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
    MergeDeveloperIdentitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityClient";
        var commandName = "MergeDeveloperIdentitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MergeDeveloperIdentitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: MergeDeveloperIdentitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MergeDeveloperIdentitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MergeDeveloperIdentitiesCommand(input, context);
    };
    MergeDeveloperIdentitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MergeDeveloperIdentitiesCommand(output, context);
    };
    return MergeDeveloperIdentitiesCommand;
}($Command));
export { MergeDeveloperIdentitiesCommand };
//# sourceMappingURL=MergeDeveloperIdentitiesCommand.js.map