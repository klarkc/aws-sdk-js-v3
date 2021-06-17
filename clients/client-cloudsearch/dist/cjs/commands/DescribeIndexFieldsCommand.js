"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeIndexFieldsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets information about the index fields configured for the search domain.
 *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeIndexFieldsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeIndexFieldsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeIndexFieldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIndexFieldsCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeIndexFieldsCommand extends smithy_client_1.Command {
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
        const clientName = "CloudSearchClient";
        const commandName = "DescribeIndexFieldsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeIndexFieldsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeIndexFieldsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeIndexFieldsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeIndexFieldsCommand(output, context);
    }
}
exports.DescribeIndexFieldsCommand = DescribeIndexFieldsCommand;
//# sourceMappingURL=DescribeIndexFieldsCommand.js.map