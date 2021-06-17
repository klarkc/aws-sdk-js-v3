"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStorageLocationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
 *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
 *       first time you create an environment in a region. If the storage location already exists,
 *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
 *       bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateStorageLocationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateStorageLocationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateStorageLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStorageLocationCommandInput} for command's `input` shape.
 * @see {@link CreateStorageLocationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateStorageLocationCommand extends smithy_client_1.Command {
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
        const commandName = "CreateStorageLocationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (input) => input,
            outputFilterSensitiveLog: models_0_1.CreateStorageLocationResultMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateStorageLocationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateStorageLocationCommand(output, context);
    }
}
exports.CreateStorageLocationCommand = CreateStorageLocationCommand;
//# sourceMappingURL=CreateStorageLocationCommand.js.map