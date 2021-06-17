"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckSchemaVersionValidityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CheckSchemaVersionValidityCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CheckSchemaVersionValidityCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CheckSchemaVersionValidityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckSchemaVersionValidityCommandInput} for command's `input` shape.
 * @see {@link CheckSchemaVersionValidityCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CheckSchemaVersionValidityCommand extends smithy_client_1.Command {
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
        const clientName = "GlueClient";
        const commandName = "CheckSchemaVersionValidityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CheckSchemaVersionValidityInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CheckSchemaVersionValidityResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CheckSchemaVersionValidityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CheckSchemaVersionValidityCommand(output, context);
    }
}
exports.CheckSchemaVersionValidityCommand = CheckSchemaVersionValidityCommand;
//# sourceMappingURL=CheckSchemaVersionValidityCommand.js.map