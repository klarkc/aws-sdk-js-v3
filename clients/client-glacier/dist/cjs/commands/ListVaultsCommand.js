"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVaultsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation lists all vaults owned by the calling user's account. The list
 *          returned in the response is ASCII-sorted by vault name.</p>
 *
 *          <p>By default, this operation returns up to 10 items. If there are more vaults to
 *          list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN)
 *          at which to continue the list with a new List Vaults request; otherwise, the
 *             <code>marker</code> field is <code>null</code>. To return a list of vaults that begins
 *          at a specific vault, set the <code>marker</code> request parameter to the vault ARN you
 *          obtained from a previous List Vaults request. You can also limit the number of vaults
 *          returned in the response by specifying the <code>limit</code> parameter in the request. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListVaultsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListVaultsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListVaultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVaultsCommandInput} for command's `input` shape.
 * @see {@link ListVaultsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListVaultsCommand extends smithy_client_1.Command {
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
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GlacierClient";
        const commandName = "ListVaultsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListVaultsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListVaultsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListVaultsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListVaultsCommand(output, context);
    }
}
exports.ListVaultsCommand = ListVaultsCommand;
//# sourceMappingURL=ListVaultsCommand.js.map