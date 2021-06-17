"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebootNodeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Reboots a single node of a DAX cluster. The reboot action takes place
 *             as soon as possible. During the
 *             reboot, the node status is set to REBOOTING.</p>
 *         <note>
 *             <p>
 *                <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache.  </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, RebootNodeCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, RebootNodeCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new RebootNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootNodeCommandInput} for command's `input` shape.
 * @see {@link RebootNodeCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RebootNodeCommand extends smithy_client_1.Command {
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
        const clientName = "DAXClient";
        const commandName = "RebootNodeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RebootNodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RebootNodeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RebootNodeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RebootNodeCommand(output, context);
    }
}
exports.RebootNodeCommand = RebootNodeCommand;
//# sourceMappingURL=RebootNodeCommand.js.map