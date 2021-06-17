"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveEnvironmentInfoCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a>
 *       request.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RequestEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RetrieveEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RetrieveEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RetrieveEnvironmentInfoCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticBeanstalkClient";
        const commandName = "RetrieveEnvironmentInfoCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RetrieveEnvironmentInfoMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RetrieveEnvironmentInfoResultMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRetrieveEnvironmentInfoCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRetrieveEnvironmentInfoCommand(output, context);
    }
}
exports.RetrieveEnvironmentInfoCommand = RetrieveEnvironmentInfoCommand;
//# sourceMappingURL=RetrieveEnvironmentInfoCommand.js.map