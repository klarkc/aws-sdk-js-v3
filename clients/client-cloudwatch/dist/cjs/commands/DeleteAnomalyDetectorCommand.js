"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAnomalyDetectorCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified anomaly detection model from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteAnomalyDetectorCommand extends smithy_client_1.Command {
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
        const clientName = "CloudWatchClient";
        const commandName = "DeleteAnomalyDetectorCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteAnomalyDetectorInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteAnomalyDetectorOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteAnomalyDetectorCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteAnomalyDetectorCommand(output, context);
    }
}
exports.DeleteAnomalyDetectorCommand = DeleteAnomalyDetectorCommand;
//# sourceMappingURL=DeleteAnomalyDetectorCommand.js.map