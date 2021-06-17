"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTemplateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Generates an AWS CloudFormation template based on the current launch configuration and writes it to
 *             an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateTemplateCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateTemplateCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GenerateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateTemplateCommandInput} for command's `input` shape.
 * @see {@link GenerateTemplateCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GenerateTemplateCommand extends smithy_client_1.Command {
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
        const clientName = "SMSClient";
        const commandName = "GenerateTemplateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GenerateTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GenerateTemplateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GenerateTemplateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GenerateTemplateCommand(output, context);
    }
}
exports.GenerateTemplateCommand = GenerateTemplateCommand;
//# sourceMappingURL=GenerateTemplateCommand.js.map