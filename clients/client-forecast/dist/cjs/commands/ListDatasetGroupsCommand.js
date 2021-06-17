"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDatasetGroupsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of dataset groups created using the <a>CreateDatasetGroup</a>
 *       operation. For each dataset group, this operation returns a summary of its properties,
 *       including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by
 *       using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetGroupsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDatasetGroupsCommand extends smithy_client_1.Command {
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
        const commandName = "ListDatasetGroupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDatasetGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDatasetGroupsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListDatasetGroupsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListDatasetGroupsCommand(output, context);
    }
}
exports.ListDatasetGroupsCommand = ListDatasetGroupsCommand;
//# sourceMappingURL=ListDatasetGroupsCommand.js.map