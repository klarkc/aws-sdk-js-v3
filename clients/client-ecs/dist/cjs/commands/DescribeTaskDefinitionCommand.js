"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeTaskDefinitionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes a task definition. You can specify a <code>family</code> and
 * 				<code>revision</code> to find information about a specific task definition, or you
 * 			can simply specify the family to find the latest <code>ACTIVE</code> revision in that
 * 			family.</p>
 * 		       <note>
 * 			         <p>You can only describe <code>INACTIVE</code> task definitions while an active task
 * 				or service references them.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeTaskDefinitionCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeTaskDefinitionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeTaskDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeTaskDefinitionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeTaskDefinitionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeTaskDefinitionCommand(output, context);
    }
}
exports.DescribeTaskDefinitionCommand = DescribeTaskDefinitionCommand;
//# sourceMappingURL=DescribeTaskDefinitionCommand.js.map