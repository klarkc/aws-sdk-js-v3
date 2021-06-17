"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelResizeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels a resize operation for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CancelResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CancelResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CancelResizeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelResizeCommandInput} for command's `input` shape.
 * @see {@link CancelResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CancelResizeCommand extends smithy_client_1.Command {
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
        const commandName = "CancelResizeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CancelResizeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ResizeProgressMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCancelResizeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCancelResizeCommand(output, context);
    }
}
exports.CancelResizeCommand = CancelResizeCommand;
//# sourceMappingURL=CancelResizeCommand.js.map