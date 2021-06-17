"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels a cluster job. You can only cancel a cluster job while it's in the
 *         <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster
 *       job to cancel it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CancelClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CancelClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CancelClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelClusterCommandInput} for command's `input` shape.
 * @see {@link CancelClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CancelClusterCommand extends smithy_client_1.Command {
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
        const clientName = "SnowballClient";
        const commandName = "CancelClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CancelClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CancelClusterResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CancelClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CancelClusterCommand(output, context);
    }
}
exports.CancelClusterCommand = CancelClusterCommand;
//# sourceMappingURL=CancelClusterCommand.js.map