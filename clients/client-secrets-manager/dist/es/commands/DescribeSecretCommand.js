import { __extends } from "tslib";
import { DescribeSecretRequest, DescribeSecretResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeSecretCommand, serializeAws_json1_1DescribeSecretCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details of a secret. It does not include the encrypted fields. Secrets
 *       Manager only returns fields populated with a value in the response. </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:DescribeSecret</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To create a secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To modify a secret, use <a>UpdateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the encrypted secret information in a version of the secret, use <a>GetSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list all of the secrets in the AWS account, use <a>ListSecrets</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, DescribeSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, DescribeSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new DescribeSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecretCommandInput} for command's `input` shape.
 * @see {@link DescribeSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSecretCommand = /** @class */ (function (_super) {
    __extends(DescribeSecretCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSecretCommand(input) {
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
    DescribeSecretCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecretsManagerClient";
        var commandName = "DescribeSecretCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSecretRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSecretResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSecretCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSecretCommand(input, context);
    };
    DescribeSecretCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSecretCommand(output, context);
    };
    return DescribeSecretCommand;
}($Command));
export { DescribeSecretCommand };
//# sourceMappingURL=DescribeSecretCommand.js.map