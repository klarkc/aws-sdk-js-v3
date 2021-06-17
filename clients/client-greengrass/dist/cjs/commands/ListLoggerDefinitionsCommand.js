"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLoggerDefinitionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * Retrieves a list of logger definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListLoggerDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListLoggerDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListLoggerDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLoggerDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListLoggerDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListLoggerDefinitionsCommand extends smithy_client_1.Command {
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
        const clientName = "GreengrassClient";
        const commandName = "ListLoggerDefinitionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListLoggerDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListLoggerDefinitionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListLoggerDefinitionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListLoggerDefinitionsCommand(output, context);
    }
}
exports.ListLoggerDefinitionsCommand = ListLoggerDefinitionsCommand;
//# sourceMappingURL=ListLoggerDefinitionsCommand.js.map