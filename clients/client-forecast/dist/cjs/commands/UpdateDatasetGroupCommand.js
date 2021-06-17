"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDatasetGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
 *          <note>
 *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a>
 *         operation to get the status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, UpdateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, UpdateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new UpdateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateDatasetGroupCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateDatasetGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateDatasetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateDatasetGroupResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateDatasetGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateDatasetGroupCommand(output, context);
    }
}
exports.UpdateDatasetGroupCommand = UpdateDatasetGroupCommand;
//# sourceMappingURL=UpdateDatasetGroupCommand.js.map