"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchemaCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create
 *       must be in Avro JSON format.</p>
 *          <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset
 *       type and has a set of required field and keywords.
 *       You specify a schema when you call <a>CreateDataset</a>.</p>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSchemas</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSchema</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSchema</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSchemaCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSchemaCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateSchemaCommand extends smithy_client_1.Command {
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
        const clientName = "PersonalizeClient";
        const commandName = "CreateSchemaCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateSchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateSchemaResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateSchemaCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateSchemaCommand(output, context);
    }
}
exports.CreateSchemaCommand = CreateSchemaCommand;
//# sourceMappingURL=CreateSchemaCommand.js.map