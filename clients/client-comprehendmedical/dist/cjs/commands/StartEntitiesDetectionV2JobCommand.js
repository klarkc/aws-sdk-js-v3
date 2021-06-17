"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartEntitiesDetectionV2JobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
 *         <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link StartEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartEntitiesDetectionV2JobCommand extends smithy_client_1.Command {
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
        const commandName = "StartEntitiesDetectionV2JobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartEntitiesDetectionV2JobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartEntitiesDetectionV2JobResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartEntitiesDetectionV2JobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartEntitiesDetectionV2JobCommand(output, context);
    }
}
exports.StartEntitiesDetectionV2JobCommand = StartEntitiesDetectionV2JobCommand;
//# sourceMappingURL=StartEntitiesDetectionV2JobCommand.js.map