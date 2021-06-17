"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModelCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an ML model for data inference. </p>
 *          <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data.
 *          In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal
 *          behavior that could be potential equipment failure (or maintenance events). The models are
 *          made by analyzing normal data and abnormalities in machine behavior that have already
 *          occurred.</p>
 *          <p>Your model is trained using a portion of the data from your dataset and uses that data
 *          to learn patterns of normal behavior and abnormal patterns that lead to equipment failure.
 *          Another portion of the data is used to evaluate the model's accuracy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateModelCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateModelCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateModelCommand extends smithy_client_1.Command {
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
        const clientName = "LookoutEquipmentClient";
        const commandName = "CreateModelCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateModelResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0CreateModelCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0CreateModelCommand(output, context);
    }
}
exports.CreateModelCommand = CreateModelCommand;
//# sourceMappingURL=CreateModelCommand.js.map