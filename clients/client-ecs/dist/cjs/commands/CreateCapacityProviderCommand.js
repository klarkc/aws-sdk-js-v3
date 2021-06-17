"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCapacityProviderCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS
 * 			cluster and are used in capacity provider strategies to facilitate cluster auto
 * 			scaling.</p>
 * 		       <p>Only capacity providers using an Auto Scaling group can be created. Amazon ECS tasks on
 * 			AWS Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers
 * 			which are already created and available to all accounts in Regions supported by
 * 			AWS Fargate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateCapacityProviderCommand extends smithy_client_1.Command {
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
        const clientName = "ECSClient";
        const commandName = "CreateCapacityProviderCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateCapacityProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateCapacityProviderResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateCapacityProviderCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateCapacityProviderCommand(output, context);
    }
}
exports.CreateCapacityProviderCommand = CreateCapacityProviderCommand;
//# sourceMappingURL=CreateCapacityProviderCommand.js.map