"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMLModelCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as
 *             information sources. </p>
 *         <p>An <code>MLModel</code> is nearly immutable. Users can update only the
 *                 <code>MLModelName</code> and the <code>ScoreThreshold</code> in an
 *                 <code>MLModel</code> without creating a new <code>MLModel</code>. </p>
 *         <p>
 *             <code>CreateMLModel</code> is an asynchronous operation. In response to
 *                 <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns
 *             and sets the <code>MLModel</code> status to <code>PENDING</code>. After the
 *                 <code>MLModel</code> has been created and ready is for use, Amazon ML sets the
 *             status to <code>COMPLETED</code>. </p>
 *         <p>You can use the <code>GetMLModel</code> operation to check the progress of the
 *                 <code>MLModel</code> during the creation operation.</p>
 *
 *         <p>
 *            <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics,
 *           which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in
 *           <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or
 *           <code>CreateDataSourceFromRedshift</code> operations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMLModelCommandInput} for command's `input` shape.
 * @see {@link CreateMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateMLModelCommand extends smithy_client_1.Command {
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
        const clientName = "MachineLearningClient";
        const commandName = "CreateMLModelCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateMLModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateMLModelOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateMLModelCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateMLModelCommand(output, context);
    }
}
exports.CreateMLModelCommand = CreateMLModelCommand;
//# sourceMappingURL=CreateMLModelCommand.js.map