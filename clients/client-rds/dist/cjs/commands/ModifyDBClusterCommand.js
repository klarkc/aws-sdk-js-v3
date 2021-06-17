"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyDBClusterCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modify a setting for an Amazon Aurora DB cluster.
 *            You can change one
 *            or more database configuration parameters by specifying these parameters and the new values in the
 *            request. For more information on Amazon Aurora, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyDBClusterCommand extends smithy_client_1.Command {
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
        const clientName = "RDSClient";
        const commandName = "ModifyDBClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ModifyDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ModifyDBClusterResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyDBClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyDBClusterCommand(output, context);
    }
}
exports.ModifyDBClusterCommand = ModifyDBClusterCommand;
//# sourceMappingURL=ModifyDBClusterCommand.js.map