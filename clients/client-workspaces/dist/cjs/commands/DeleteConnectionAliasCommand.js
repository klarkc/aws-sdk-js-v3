"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteConnectionAliasCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <important>
 *             <p>
 *                <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code
 *             for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b>
 *             For more information, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations">
 *                Security Considerations if You Stop Using Cross-Region Redirection</a>.</p>
 *          </important>
 *
 *          <note>
 *             <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias
 *             from any directories it has been associated with. Then you must unshare the connection alias from the account it has
 *             been shared with. You can delete a connection alias only after it is no longer shared with any accounts or
 *             associated with any directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteConnectionAliasCommand extends smithy_client_1.Command {
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
        const clientName = "WorkSpacesClient";
        const commandName = "DeleteConnectionAliasCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteConnectionAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteConnectionAliasResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteConnectionAliasCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteConnectionAliasCommand(output, context);
    }
}
exports.DeleteConnectionAliasCommand = DeleteConnectionAliasCommand;
//# sourceMappingURL=DeleteConnectionAliasCommand.js.map