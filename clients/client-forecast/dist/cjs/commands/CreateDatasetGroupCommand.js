"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatasetGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a dataset group, which holds a collection of related datasets. You can add
 *       datasets to the dataset group when you create the dataset group, or later by using the <a>UpdateDatasetGroup</a> operation.</p>
 *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
 *       create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p>
 *          <p>To get a list of all your datasets groups, use the <a>ListDatasetGroups</a>
 *       operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDatasetGroupCommand extends smithy_client_1.Command {
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
        const commandName = "CreateDatasetGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDatasetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDatasetGroupResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateDatasetGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateDatasetGroupCommand(output, context);
    }
}
exports.CreateDatasetGroupCommand = CreateDatasetGroupCommand;
//# sourceMappingURL=CreateDatasetGroupCommand.js.map