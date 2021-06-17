"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListExperimentTemplatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists your experiment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTemplatesCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTemplatesCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListExperimentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListExperimentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListExperimentTemplatesCommand extends smithy_client_1.Command {
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
        const clientName = "FisClient";
        const commandName = "ListExperimentTemplatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListExperimentTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListExperimentTemplatesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListExperimentTemplatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListExperimentTemplatesCommand(output, context);
    }
}
exports.ListExperimentTemplatesCommand = ListExperimentTemplatesCommand;
//# sourceMappingURL=ListExperimentTemplatesCommand.js.map