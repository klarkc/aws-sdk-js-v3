"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPredictorBacktestExportJobsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary
 *             for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
 *         <p>To retrieve the complete set of properties for a particular backtest export job, use the
 *             ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorBacktestExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorBacktestExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListPredictorBacktestExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPredictorBacktestExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorBacktestExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListPredictorBacktestExportJobsCommand extends smithy_client_1.Command {
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
        const clientName = "ForecastClient";
        const commandName = "ListPredictorBacktestExportJobsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListPredictorBacktestExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListPredictorBacktestExportJobsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListPredictorBacktestExportJobsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListPredictorBacktestExportJobsCommand(output, context);
    }
}
exports.ListPredictorBacktestExportJobsCommand = ListPredictorBacktestExportJobsCommand;
//# sourceMappingURL=ListPredictorBacktestExportJobsCommand.js.map