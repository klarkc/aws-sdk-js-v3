"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAccountAttributesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS
 *          DMS quotas for the account and a unique account identifier in a particular DMS region. DMS
 *          quotas include a list of resource quotas supported by the account, such as the number of
 *          replication instances allowed. The description for each resource quota, includes the quota
 *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
 *          account identifier to name each artifact used by DMS in the given region.</p>
 *          <p>This command does not take any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAccountAttributesCommand extends smithy_client_1.Command {
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
        const clientName = "DatabaseMigrationServiceClient";
        const commandName = "DescribeAccountAttributesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAccountAttributesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAccountAttributesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeAccountAttributesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeAccountAttributesCommand(output, context);
    }
}
exports.DescribeAccountAttributesCommand = DescribeAccountAttributesCommand;
//# sourceMappingURL=DescribeAccountAttributesCommand.js.map