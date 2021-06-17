import { __extends } from "tslib";
import { ListSecretsRequest, ListSecretsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListSecretsCommand, serializeAws_json1_1ListSecretsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the secrets that are stored by Secrets Manager in the AWS account. To list the
 *       versions currently stored for a specific secret, use <a>ListSecretVersionIds</a>.
 *       The encrypted fields <code>SecretString</code> and <code>SecretBinary</code> are not included
 *       in the output. To get that information, call the <a>GetSecretValue</a>
 *       operation.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 *     when calling any of the <code>List*</code> operations. These operations can occasionally return
 *     an empty or shorter than expected list of results even when there more results become available.
 *     When this happens, the <code>NextToken</code> response parameter contains a value to pass to the
 *     next call to the same API to request the next part of the list.</p>
 *          </note>
 *          <p>
 *             <b>Minimum
 *         permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:ListSecrets</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ListSecretsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ListSecretsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ListSecretsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecretsCommandInput} for command's `input` shape.
 * @see {@link ListSecretsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSecretsCommand = /** @class */ (function (_super) {
    __extends(ListSecretsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSecretsCommand(input) {
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
    ListSecretsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecretsManagerClient";
        var commandName = "ListSecretsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSecretsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSecretsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSecretsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSecretsCommand(input, context);
    };
    ListSecretsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSecretsCommand(output, context);
    };
    return ListSecretsCommand;
}($Command));
export { ListSecretsCommand };
//# sourceMappingURL=ListSecretsCommand.js.map