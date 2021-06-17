"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeApplicationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the descriptions of existing applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DescribeApplicationsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DescribeApplicationsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DescribeApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeApplicationsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeApplicationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeApplicationsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ApplicationDescriptionsMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeApplicationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeApplicationsCommand(output, context);
    }
}
exports.DescribeApplicationsCommand = DescribeApplicationsCommand;
//# sourceMappingURL=DescribeApplicationsCommand.js.map