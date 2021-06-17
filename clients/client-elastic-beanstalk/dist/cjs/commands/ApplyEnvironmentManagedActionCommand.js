"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyEnvironmentManagedActionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Applies a scheduled managed action immediately. A managed action can be applied only if
 *       its status is <code>Scheduled</code>. Get the status and action ID of a managed action with
 *         <a>DescribeEnvironmentManagedActions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, ApplyEnvironmentManagedActionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new ApplyEnvironmentManagedActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyEnvironmentManagedActionCommandInput} for command's `input` shape.
 * @see {@link ApplyEnvironmentManagedActionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ApplyEnvironmentManagedActionCommand extends smithy_client_1.Command {
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
        const commandName = "ApplyEnvironmentManagedActionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ApplyEnvironmentManagedActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ApplyEnvironmentManagedActionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryApplyEnvironmentManagedActionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryApplyEnvironmentManagedActionCommand(output, context);
    }
}
exports.ApplyEnvironmentManagedActionCommand = ApplyEnvironmentManagedActionCommand;
//# sourceMappingURL=ApplyEnvironmentManagedActionCommand.js.map