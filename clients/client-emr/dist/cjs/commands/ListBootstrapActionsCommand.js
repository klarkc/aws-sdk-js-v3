"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBootstrapActionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides information about the bootstrap actions associated with a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListBootstrapActionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListBootstrapActionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListBootstrapActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBootstrapActionsCommandInput} for command's `input` shape.
 * @see {@link ListBootstrapActionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListBootstrapActionsCommand extends smithy_client_1.Command {
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
        const clientName = "EMRClient";
        const commandName = "ListBootstrapActionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListBootstrapActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListBootstrapActionsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListBootstrapActionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListBootstrapActionsCommand(output, context);
    }
}
exports.ListBootstrapActionsCommand = ListBootstrapActionsCommand;
//# sourceMappingURL=ListBootstrapActionsCommand.js.map