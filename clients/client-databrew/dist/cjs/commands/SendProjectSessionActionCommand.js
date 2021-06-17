"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendProjectSessionActionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Performs a recipe step within an interactive DataBrew session that's currently
 *             open.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, SendProjectSessionActionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, SendProjectSessionActionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new SendProjectSessionActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendProjectSessionActionCommandInput} for command's `input` shape.
 * @see {@link SendProjectSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SendProjectSessionActionCommand extends smithy_client_1.Command {
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
        const clientName = "DataBrewClient";
        const commandName = "SendProjectSessionActionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SendProjectSessionActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SendProjectSessionActionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1SendProjectSessionActionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1SendProjectSessionActionCommand(output, context);
    }
}
exports.SendProjectSessionActionCommand = SendProjectSessionActionCommand;
//# sourceMappingURL=SendProjectSessionActionCommand.js.map