"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeDeveloperIdentitiesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class MergeDeveloperIdentitiesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityClient";
        const commandName = "MergeDeveloperIdentitiesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.MergeDeveloperIdentitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.MergeDeveloperIdentitiesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1MergeDeveloperIdentitiesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1MergeDeveloperIdentitiesCommand(output, context);
    }
}
exports.MergeDeveloperIdentitiesCommand = MergeDeveloperIdentitiesCommand;
//# sourceMappingURL=MergeDeveloperIdentitiesCommand.js.map