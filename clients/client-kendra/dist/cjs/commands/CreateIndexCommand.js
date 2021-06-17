"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndexCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous
 *       operation. To determine if index creation has completed, check the
 *         <code>Status</code> field returned from a call to
 *         <code>DescribeIndex</code>. The <code>Status</code> field is set to
 *         <code>ACTIVE</code> when the index is ready to use.</p>
 *          <p>Once the index is active you can index your documents using the
 *         <code>BatchPutDocument</code> operation or using one of the supported
 *       data sources. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new CreateIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIndexCommandInput} for command's `input` shape.
 * @see {@link CreateIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateIndexCommand extends smithy_client_1.Command {
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
        const clientName = "KendraClient";
        const commandName = "CreateIndexCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateIndexResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateIndexCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateIndexCommand(output, context);
    }
}
exports.CreateIndexCommand = CreateIndexCommand;
//# sourceMappingURL=CreateIndexCommand.js.map