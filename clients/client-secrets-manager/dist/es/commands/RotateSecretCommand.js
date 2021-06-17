import { __extends } from "tslib";
import { RotateSecretRequest, RotateSecretResponse } from "../models/models_0";
import { deserializeAws_json1_1RotateSecretCommand, serializeAws_json1_1RotateSecretCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures and starts the asynchronous process of rotating this secret. If you include the
 *       configuration parameters, the operation sets those values for the secret and then immediately
 *       starts a rotation. If you do not include the configuration parameters, the operation starts a
 *       rotation with the values already stored in the secret. After the rotation completes, the
 *       protected service and its clients all use the new version of the secret. </p>
 *          <p>This required configuration information includes the ARN of an AWS Lambda function and
 *       the time between scheduled rotations. The Lambda rotation function creates a new version of
 *       the secret and creates or updates the credentials on the protected service to match. After
 *       testing the new credentials, the function marks the new secret with the staging label
 *       <code>AWSCURRENT</code> so that your clients all immediately begin to use the new version. For more
 *       information about rotating secrets and how to configure a Lambda function to rotate the
 *       secrets for your protected service, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotating Secrets in AWS Secrets Manager</a> in the
 *         <i>AWS Secrets Manager User Guide</i>.</p>
 *          <p>Secrets Manager schedules the next rotation when the previous
 *     one completes. Secrets Manager schedules the date by adding the rotation interval (number of days) to the
 *     actual date of the last rotation. The service chooses the hour within that 24-hour date window
 *     randomly. The minute is also chosen somewhat randomly, but weighted towards the top of the hour
 *     and influenced by a variety of factors that help distribute load.</p>
 *          <p>The
 *       rotation function must end with the versions of the secret in one of two states:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>AWSPENDING</code> and <code>AWSCURRENT</code> staging labels are attached to the same version of
 *           the secret, or</p>
 *             </li>
 *             <li>
 *                <p>The <code>AWSPENDING</code> staging label is not attached to any version of the secret.</p>
 *             </li>
 *          </ul>
 *          <p>If the <code>AWSPENDING</code> staging label is present but not attached to the same version as
 *       <code>AWSCURRENT</code> then any later invocation of <code>RotateSecret</code> assumes that a previous
 *       rotation request is still in progress and returns an error.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:RotateSecret</p>
 *             </li>
 *             <li>
 *                <p>lambda:InvokeFunction (on the function specified in the secret's metadata)</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To list the secrets in your account, use <a>ListSecrets</a>.</p>
 *             </li>
 *             <li>
 *                <p>To get the details for a version of a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To create a new version of a secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To attach staging labels to or remove staging labels from a version of a secret, use
 *             <a>UpdateSecretVersionStage</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, RotateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, RotateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new RotateSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateSecretCommandInput} for command's `input` shape.
 * @see {@link RotateSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RotateSecretCommand = /** @class */ (function (_super) {
    __extends(RotateSecretCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RotateSecretCommand(input) {
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
    RotateSecretCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecretsManagerClient";
        var commandName = "RotateSecretCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RotateSecretRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RotateSecretResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RotateSecretCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RotateSecretCommand(input, context);
    };
    RotateSecretCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RotateSecretCommand(output, context);
    };
    return RotateSecretCommand;
}($Command));
export { RotateSecretCommand };
//# sourceMappingURL=RotateSecretCommand.js.map