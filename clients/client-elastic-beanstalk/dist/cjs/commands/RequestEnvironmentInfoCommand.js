"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestEnvironmentInfoCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Initiates a request to compile the specified type of information of the deployed
 *       environment.</p>
 *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
 *       the application server log files of every Amazon EC2 instance in your environment. </p>
 *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
 *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
 *       containers do not support bundle logs. </p>
 *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RetrieveEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new RequestEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RequestEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RequestEnvironmentInfoCommand extends smithy_client_1.Command {
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
        const commandName = "RequestEnvironmentInfoCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RequestEnvironmentInfoMessage.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRequestEnvironmentInfoCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRequestEnvironmentInfoCommand(output, context);
    }
}
exports.RequestEnvironmentInfoCommand = RequestEnvironmentInfoCommand;
//# sourceMappingURL=RequestEnvironmentInfoCommand.js.map