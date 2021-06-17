"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadDBLogFilePortionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DownloadDBLogFilePortionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DownloadDBLogFilePortionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DownloadDBLogFilePortionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DownloadDBLogFilePortionCommandInput} for command's `input` shape.
 * @see {@link DownloadDBLogFilePortionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DownloadDBLogFilePortionCommand extends smithy_client_1.Command {
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
        const commandName = "DownloadDBLogFilePortionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DownloadDBLogFilePortionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DownloadDBLogFilePortionDetails.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDownloadDBLogFilePortionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDownloadDBLogFilePortionCommand(output, context);
    }
}
exports.DownloadDBLogFilePortionCommand = DownloadDBLogFilePortionCommand;
//# sourceMappingURL=DownloadDBLogFilePortionCommand.js.map