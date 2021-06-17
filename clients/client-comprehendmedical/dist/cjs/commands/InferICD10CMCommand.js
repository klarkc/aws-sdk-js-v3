"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferICD10CMCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>InferICD10CM detects medical conditions as entities listed in a patient record and links
 *       those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the
 *       Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in
 *       English language texts.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, InferICD10CMCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, InferICD10CMCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new InferICD10CMCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InferICD10CMCommandInput} for command's `input` shape.
 * @see {@link InferICD10CMCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
class InferICD10CMCommand extends smithy_client_1.Command {
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
        const clientName = "ComprehendMedicalClient";
        const commandName = "InferICD10CMCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.InferICD10CMRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.InferICD10CMResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1InferICD10CMCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1InferICD10CMCommand(output, context);
    }
}
exports.InferICD10CMCommand = InferICD10CMCommand;
//# sourceMappingURL=InferICD10CMCommand.js.map