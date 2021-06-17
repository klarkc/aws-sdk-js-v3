"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListImageVersionsCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the versions of a specified image and their properties. The list can be filtered
 *         by creation time or modified time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListImageVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListImageVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListImageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImageVersionsCommandInput} for command's `input` shape.
 * @see {@link ListImageVersionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListImageVersionsCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerClient";
        const commandName = "ListImageVersionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.ListImageVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.ListImageVersionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListImageVersionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListImageVersionsCommand(output, context);
    }
}
exports.ListImageVersionsCommand = ListImageVersionsCommand;
//# sourceMappingURL=ListImageVersionsCommand.js.map