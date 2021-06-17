import { __extends } from "tslib";
import { CreateVaultInput, CreateVaultOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateVaultCommand, serializeAws_restJson1CreateVaultCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation creates a new vault with the specified name. The name of the vault
 *          must be unique within a region for an AWS account. You can create up to 1,000 vaults per
 *          account. If you need to create more vaults, contact Amazon S3 Glacier.</p>
 *          <p>You must use the following guidelines when naming a vault.</p>
 *          <ul>
 *             <li>
 *                <p>Names can be between 1 and 255 characters long.</p>
 *             </li>
 *             <li>
 *                <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.'
 *                (period).</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html">Creating a Vault in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html">Create Vault </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CreateVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CreateVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new CreateVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVaultCommandInput} for command's `input` shape.
 * @see {@link CreateVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateVaultCommand = /** @class */ (function (_super) {
    __extends(CreateVaultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateVaultCommand(input) {
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
    CreateVaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "CreateVaultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateVaultInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateVaultOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateVaultCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateVaultCommand(input, context);
    };
    CreateVaultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateVaultCommand(output, context);
    };
    return CreateVaultCommand;
}($Command));
export { CreateVaultCommand };
//# sourceMappingURL=CreateVaultCommand.js.map