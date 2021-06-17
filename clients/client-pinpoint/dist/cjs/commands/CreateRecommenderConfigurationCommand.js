"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecommenderConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateRecommenderConfigurationCommand extends smithy_client_1.Command {
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
        const clientName = "PinpointClient";
        const commandName = "CreateRecommenderConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateRecommenderConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateRecommenderConfigurationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateRecommenderConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateRecommenderConfigurationCommand(output, context);
    }
}
exports.CreateRecommenderConfigurationCommand = CreateRecommenderConfigurationCommand;
//# sourceMappingURL=CreateRecommenderConfigurationCommand.js.map