"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSmsTemplateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSmsTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateSmsTemplateCommand extends smithy_client_1.Command {
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
        const clientName = "PinpointClient";
        const commandName = "CreateSmsTemplateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateSmsTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateSmsTemplateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateSmsTemplateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateSmsTemplateCommand(output, context);
    }
}
exports.CreateSmsTemplateCommand = CreateSmsTemplateCommand;
//# sourceMappingURL=CreateSmsTemplateCommand.js.map