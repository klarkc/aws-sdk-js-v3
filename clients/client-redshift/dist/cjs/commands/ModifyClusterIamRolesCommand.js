"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyClusterIamRolesCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be
 *             used by the cluster to access other AWS services.</p>
 *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterIamRolesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterIamRolesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterIamRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterIamRolesCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterIamRolesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyClusterIamRolesCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "ModifyClusterIamRolesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ModifyClusterIamRolesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ModifyClusterIamRolesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyClusterIamRolesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyClusterIamRolesCommand(output, context);
    }
}
exports.ModifyClusterIamRolesCommand = ModifyClusterIamRolesCommand;
//# sourceMappingURL=ModifyClusterIamRolesCommand.js.map