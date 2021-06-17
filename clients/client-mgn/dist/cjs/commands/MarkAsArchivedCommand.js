"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkAsArchivedCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, MarkAsArchivedCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, MarkAsArchivedCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new MarkAsArchivedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MarkAsArchivedCommandInput} for command's `input` shape.
 * @see {@link MarkAsArchivedCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
class MarkAsArchivedCommand extends smithy_client_1.Command {
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
        const clientName = "MgnClient";
        const commandName = "MarkAsArchivedCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.MarkAsArchivedRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SourceServer.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1MarkAsArchivedCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1MarkAsArchivedCommand(output, context);
    }
}
exports.MarkAsArchivedCommand = MarkAsArchivedCommand;
//# sourceMappingURL=MarkAsArchivedCommand.js.map