"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyClusterDbRevisionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the database revision of a cluster. The database revision is a unique
 *             revision of the database running in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterDbRevisionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterDbRevisionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterDbRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterDbRevisionCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterDbRevisionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyClusterDbRevisionCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyClusterDbRevisionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ModifyClusterDbRevisionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ModifyClusterDbRevisionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyClusterDbRevisionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyClusterDbRevisionCommand(output, context);
    }
}
exports.ModifyClusterDbRevisionCommand = ModifyClusterDbRevisionCommand;
//# sourceMappingURL=ModifyClusterDbRevisionCommand.js.map