"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateModelVersionStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the status of a model version.</p>
 *          <p>You can perform the following status updates:</p>
 *          <ol>
 *             <li>
 *                <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change <code>ACTIVE</code>to <code>INACTIVE</code>.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateModelVersionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionStatusCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateModelVersionStatusCommand extends smithy_client_1.Command {
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
        const clientName = "FraudDetectorClient";
        const commandName = "UpdateModelVersionStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateModelVersionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateModelVersionStatusResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateModelVersionStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateModelVersionStatusCommand(output, context);
    }
}
exports.UpdateModelVersionStatusCommand = UpdateModelVersionStatusCommand;
//# sourceMappingURL=UpdateModelVersionStatusCommand.js.map