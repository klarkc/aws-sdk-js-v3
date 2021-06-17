"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDetectorModelAnalysisResultsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves one or more analysis results of the detector model.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new GetDetectorModelAnalysisResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorModelAnalysisResultsCommandInput} for command's `input` shape.
 * @see {@link GetDetectorModelAnalysisResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetDetectorModelAnalysisResultsCommand extends smithy_client_1.Command {
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
        const clientName = "IoTEventsClient";
        const commandName = "GetDetectorModelAnalysisResultsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetDetectorModelAnalysisResultsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetDetectorModelAnalysisResultsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetDetectorModelAnalysisResultsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand(output, context);
    }
}
exports.GetDetectorModelAnalysisResultsCommand = GetDetectorModelAnalysisResultsCommand;
//# sourceMappingURL=GetDetectorModelAnalysisResultsCommand.js.map