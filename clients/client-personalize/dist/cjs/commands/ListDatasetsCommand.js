"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDatasetsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the list of datasets contained in the given dataset group. The response provides
 *       the properties for each dataset, including the Amazon Resource Name (ARN). For more
 *       information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDatasetsCommand extends smithy_client_1.Command {
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
        const clientName = "PersonalizeClient";
        const commandName = "ListDatasetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListDatasetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListDatasetsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListDatasetsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListDatasetsCommand(output, context);
    }
}
exports.ListDatasetsCommand = ListDatasetsCommand;
//# sourceMappingURL=ListDatasetsCommand.js.map