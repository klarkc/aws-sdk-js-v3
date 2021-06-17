"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectKeyPhrasesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Detects the key noun phrases found in the text. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectKeyPhrasesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectKeyPhrasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectKeyPhrasesCommandInput} for command's `input` shape.
 * @see {@link DetectKeyPhrasesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DetectKeyPhrasesCommand extends smithy_client_1.Command {
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
        const clientName = "ComprehendClient";
        const commandName = "DetectKeyPhrasesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DetectKeyPhrasesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DetectKeyPhrasesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DetectKeyPhrasesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DetectKeyPhrasesCommand(output, context);
    }
}
exports.DetectKeyPhrasesCommand = DetectKeyPhrasesCommand;
//# sourceMappingURL=DetectKeyPhrasesCommand.js.map