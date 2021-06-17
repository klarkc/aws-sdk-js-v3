"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteResourceTreeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an entire resource tree. This operation will delete the parent resource and
 *             its child resources.</p>
 *         <p>Child resources are resources that were created from another resource. For example,
 *             when a forecast is generated from a predictor, the forecast is the child resource and
 *             the predictor is the parent resource.</p>
 *         <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Dataset</b>: dataset import jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Dataset Group</b>: predictors, predictor backtest
 *                     export jobs, forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Predictor</b>: predictor backtest export jobs,
 *                     forecasts, forecast export jobs</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Forecast</b>: forecast export jobs</p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>
 *                <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not
 *                 delete datasets or exported files stored in Amazon S3. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteResourceTreeCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteResourceTreeCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteResourceTreeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceTreeCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceTreeCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteResourceTreeCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteResourceTreeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteResourceTreeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteResourceTreeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteResourceTreeCommand(output, context);
    }
}
exports.DeleteResourceTreeCommand = DeleteResourceTreeCommand;
//# sourceMappingURL=DeleteResourceTreeCommand.js.map