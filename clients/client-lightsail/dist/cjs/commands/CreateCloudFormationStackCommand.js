"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCloudFormationStackCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
 *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
 *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
 *         records</code> operation to get a list of the CloudFormation stacks created.</p>
 *          <important>
 *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
 *           cloud formation stack</code> operation again with the same export snapshot record.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCloudFormationStackCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateCloudFormationStackCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateCloudFormationStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationStackCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationStackCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateCloudFormationStackCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "CreateCloudFormationStackCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateCloudFormationStackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateCloudFormationStackResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateCloudFormationStackCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateCloudFormationStackCommand(output, context);
    }
}
exports.CreateCloudFormationStackCommand = CreateCloudFormationStackCommand;
//# sourceMappingURL=CreateCloudFormationStackCommand.js.map